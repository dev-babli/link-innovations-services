"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GestureControlProps {
    onGesture?: (gesture: string, confidence: number) => void;
    className?: string;
    enableCamera?: boolean;
}

const GestureControl: React.FC<GestureControlProps> = ({
    onGesture,
    className = '',
    enableCamera = true,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [currentGesture, setCurrentGesture] = useState<string>('');
    const [confidence, setConfidence] = useState(0);
    const [isSupported, setIsSupported] = useState(false);

    // Simple gesture detection based on hand position
    const detectGesture = (x: number, y: number, width: number, height: number) => {
        const centerX = width / 2;
        const centerY = height / 2;

        // Calculate relative position
        const relX = (x - centerX) / centerX;
        const relY = (y - centerY) / centerY;

        // Simple gesture classification
        if (relY < -0.3) return { gesture: 'swipe_up', confidence: 0.8 };
        if (relY > 0.3) return { gesture: 'swipe_down', confidence: 0.8 };
        if (relX < -0.3) return { gesture: 'swipe_left', confidence: 0.8 };
        if (relX > 0.3) return { gesture: 'swipe_right', confidence: 0.8 };
        if (Math.abs(relX) < 0.2 && Math.abs(relY) < 0.2) return { gesture: 'tap', confidence: 0.9 };

        return { gesture: 'unknown', confidence: 0.1 };
    };

    useEffect(() => {
        if (!enableCamera) return;

        const checkSupport = async () => {
            if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
                setIsSupported(true);
            }
        };

        checkSupport();
    }, [enableCamera]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: 640,
                    height: 480,
                    facingMode: 'user'
                }
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setIsActive(true);
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
            setIsActive(false);
        }
    };

    const processFrame = () => {
        if (!videoRef.current || !canvasRef.current || !isActive) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        // Draw video frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Simple hand detection simulation (in real implementation, you'd use MediaPipe or similar)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const { data } = imageData;

        // Find hand-like regions (simplified skin tone detection)
        let handX = 0, handY = 0, handCount = 0;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Simple skin tone detection
            if (r > 95 && g > 40 && b > 20 &&
                Math.max(r, g, b) - Math.min(r, g, b) > 15 &&
                Math.abs(r - g) > 15 && r > g && r > b) {

                const x = (i / 4) % canvas.width;
                const y = Math.floor((i / 4) / canvas.width);

                handX += x;
                handY += y;
                handCount++;
            }
        }

        if (handCount > 100) { // Minimum threshold for hand detection
            handX /= handCount;
            handY /= handCount;

            const gesture = detectGesture(handX, handY, canvas.width, canvas.height);

            if (gesture.confidence > 0.5) {
                setCurrentGesture(gesture.gesture);
                setConfidence(gesture.confidence);
                onGesture?.(gesture.gesture, gesture.confidence);
            }
        }

        requestAnimationFrame(processFrame);
    };

    useEffect(() => {
        if (isActive) {
            processFrame();
        }
    }, [isActive]);

    const gestureEmojis: { [key: string]: string } = {
        swipe_up: '👆',
        swipe_down: '👇',
        swipe_left: '👈',
        swipe_right: '👉',
        tap: '👌',
        unknown: '✋',
    };

    return (
        <div className={`gesture-control ${className}`}>
            {/* Camera Feed */}
            {enableCamera && isSupported && (
                <div className="relative">
                    <video
                        ref={videoRef}
                        className="w-full max-w-md rounded-lg shadow-lg"
                        autoPlay
                        muted
                        playsInline
                        style={{ display: isActive ? 'block' : 'none' }}
                    />
                    <canvas
                        ref={canvasRef}
                        className="absolute top-0 left-0 w-full max-w-md rounded-lg"
                        width={640}
                        height={480}
                        style={{ display: 'none' }}
                    />
                </div>
            )}

            {/* Controls */}
            <div className="mt-4 space-x-4">
                {!isActive ? (
                    <motion.button
                        onClick={startCamera}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Gesture Control
                    </motion.button>
                ) : (
                    <motion.button
                        onClick={stopCamera}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Stop Gesture Control
                    </motion.button>
                )}
            </div>

            {/* Gesture Display */}
            <AnimatePresence>
                {currentGesture && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="mt-6 p-6 bg-white rounded-lg shadow-lg text-center"
                    >
                        <div className="text-6xl mb-4">
                            {gestureEmojis[currentGesture] || '✋'}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {currentGesture.replace('_', ' ').toUpperCase()}
                        </h3>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                                className="bg-blue-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${confidence * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                            Confidence: {Math.round(confidence * 100)}%
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Instructions */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Gesture Commands:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>👆 Swipe Up - Navigate up</li>
                    <li>👇 Swipe Down - Navigate down</li>
                    <li>👈 Swipe Left - Go back</li>
                    <li>👉 Swipe Right - Go forward</li>
                    <li>👌 Tap - Select/Click</li>
                </ul>
            </div>
        </div>
    );
};

export default GestureControl;

