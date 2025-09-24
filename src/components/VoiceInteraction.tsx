"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VoiceInteractionProps {
    onTranscript?: (text: string) => void;
    onCommand?: (command: string) => void;
    className?: string;
    language?: string;
}

const VoiceInteraction: React.FC<VoiceInteractionProps> = ({
    onTranscript,
    onCommand,
    className = '',
    language = 'en-US',
}) => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [isSupported, setIsSupported] = useState(false);
    const [volume, setVolume] = useState(0);
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animationRef = useRef<number>();

    useEffect(() => {
        // Check for speech recognition support
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            setIsSupported(true);
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = language;

            recognitionRef.current.onresult = (event) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }

                const fullTranscript = finalTranscript || interimTranscript;
                setTranscript(fullTranscript);
                onTranscript?.(fullTranscript);

                // Simple command detection
                if (finalTranscript) {
                    const command = finalTranscript.toLowerCase();
                    if (command.includes('hello') || command.includes('hi')) {
                        onCommand?.('greeting');
                    } else if (command.includes('help')) {
                        onCommand?.('help');
                    } else if (command.includes('stop') || command.includes('quit')) {
                        onCommand?.('stop');
                    }
                }
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }

        // Set up audio visualization
        const setupAudioVisualization = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                audioContextRef.current = new AudioContext();
                const source = audioContextRef.current.createMediaStreamSource(stream);
                analyserRef.current = audioContextRef.current.createAnalyser();
                analyserRef.current.fftSize = 256;
                source.connect(analyserRef.current);

                const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

                const updateVolume = () => {
                    if (analyserRef.current && isListening) {
                        analyserRef.current.getByteFrequencyData(dataArray);
                        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
                        setVolume(average / 255);
                        animationRef.current = requestAnimationFrame(updateVolume);
                    }
                };

                if (isListening) {
                    updateVolume();
                }
            } catch (error) {
                console.error('Error accessing microphone:', error);
            }
        };

        if (isListening) {
            setupAudioVisualization();
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, [isListening, language, onTranscript, onCommand]);

    const startListening = () => {
        if (recognitionRef.current && !isListening) {
            setIsListening(true);
            recognitionRef.current.start();
        }
    };

    const stopListening = () => {
        if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
    };

    if (!isSupported) {
        return (
            <div className={`text-center p-4 ${className}`}>
                <p className="text-gray-500">Voice recognition not supported in this browser</p>
            </div>
        );
    }

    return (
        <div className={`voice-interaction ${className}`}>
            {/* Voice Button */}
            <motion.button
                className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isListening
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-blue-500 bg-white text-blue-500 hover:bg-blue-50'
                    }`}
                onClick={isListening ? stopListening : startListening}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    scale: isListening ? [1, 1.1, 1] : 1,
                }}
                transition={{
                    duration: 1,
                    repeat: isListening ? Infinity : 0,
                }}
            >
                {/* Microphone Icon */}
                <motion.div
                    className="w-8 h-8"
                    animate={{
                        scale: isListening ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: isListening ? Infinity : 0,
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                </motion.div>

                {/* Volume Visualization */}
                <AnimatePresence>
                    {isListening && (
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-red-400"
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{
                                scale: [1, 1.5, 2],
                                opacity: [0.8, 0.4, 0],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeOut",
                            }}
                            style={{
                                transform: `scale(${1 + volume * 2})`,
                            }}
                        />
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Transcript Display */}
            <AnimatePresence>
                {transcript && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-4 p-4 bg-white rounded-lg shadow-lg max-w-md"
                    >
                        <p className="text-gray-800 text-sm">
                            <span className="font-semibold">You said:</span> {transcript}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Status */}
            <div className="mt-2 text-center">
                <p className="text-sm text-gray-600">
                    {isListening ? 'Listening...' : 'Click to start voice interaction'}
                </p>
            </div>
        </div>
    );
};

export default VoiceInteraction;

