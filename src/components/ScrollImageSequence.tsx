"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollImageSequenceProps {
    images: string[];
    className?: string;
    height?: string;
    sticky?: boolean;
    speed?: number;
    threshold?: number;
    onFrameChange?: (frame: number) => void;
}

const ScrollImageSequence: React.FC<ScrollImageSequenceProps> = ({
    images,
    className = '',
    height = '100vh',
    sticky = true,
    speed = 1,
    threshold = 0.1,
    onFrameChange,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Intersection Observer to detect when component is in view
    const { ref: inViewRef, inView } = useInView({
        threshold,
        triggerOnce: false,
    });

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Transform scroll progress to frame index
    const frameIndex = useTransform(
        scrollYProgress,
        [0, 1],
        [0, images.length - 1]
    );

    // Update current frame based on scroll progress
    useEffect(() => {
        const unsubscribe = frameIndex.onChange((latest) => {
            const frame = Math.round(latest);
            setCurrentFrame(Math.max(0, Math.min(frame, images.length - 1)));
            onFrameChange?.(frame);
        });

        return unsubscribe;
    }, [frameIndex, images.length, onFrameChange]);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const promises = images.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = src;
                });
            });

            try {
                await Promise.all(promises);
                setIsLoaded(true);
            } catch (error) {
                console.error('Failed to preload images:', error);
                setIsLoaded(true); // Still show component even if some images fail
            }
        };

        preloadImages();
    }, [images]);

    // Combine refs
    const setRefs = (node: HTMLDivElement) => {
        containerRef.current = node;
        inViewRef(node);
    };

    return (
        <div
            ref={setRefs}
            className={`scroll-image-sequence ${className}`}
            style={{ height: sticky ? height : 'auto' }}
        >
            {sticky && (
                <div
                    className="sticky top-0 w-full h-full flex items-center justify-center overflow-hidden"
                    style={{ height }}
                >
                    <div className="relative w-full h-full">
                        {/* Current frame image */}
                        {isLoaded && images[currentFrame] && (
                            <motion.img
                                key={currentFrame}
                                src={images[currentFrame]}
                                alt={`Frame ${currentFrame + 1}`}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1 }}
                                style={{
                                    imageRendering: '-webkit-optimize-contrast',
                                }}
                            />
                        )}

                        {/* Loading state */}
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                            </div>
                        )}

                        {/* Frame counter (optional) */}
                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                            {currentFrame + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}

            {!sticky && (
                <div className="w-full">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="w-full"
                            style={{ height }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: '-10%' }}
                        >
                            <img
                                src={src}
                                alt={`Frame ${index + 1}`}
                                className="w-full h-full object-cover"
                                style={{
                                    imageRendering: '-webkit-optimize-contrast',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Spacer for scroll height */}
            {sticky && (
                <div
                    style={{
                        height: `${images.length * 100}vh`,
                    }}
                />
            )}
        </div>
    );
};

export default ScrollImageSequence;

