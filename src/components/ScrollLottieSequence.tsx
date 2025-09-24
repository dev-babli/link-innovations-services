"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform } from 'framer-motion';
import LottieAnimation from './LottieAnimation';

interface ScrollLottieSequenceProps {
    lottieSrc: string;
    className?: string;
    height?: string;
    sticky?: boolean;
    speed?: number;
    threshold?: number;
    onProgressChange?: (progress: number) => void;
    loop?: boolean;
    quality?: 'low' | 'medium' | 'high';
}

const ScrollLottieSequence: React.FC<ScrollLottieSequenceProps> = ({
    lottieSrc,
    className = '',
    height = '100vh',
    sticky = true,
    speed = 1,
    threshold = 0.1,
    onProgressChange,
    loop = false,
    quality = 'high',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lottieRef = useRef<any>(null);
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

    // Transform scroll progress to animation progress (0-1)
    const animationProgress = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1]
    );

    // Update Lottie animation based on scroll progress
    useEffect(() => {
        const unsubscribe = animationProgress.onChange((latest) => {
            if (lottieRef.current && isLoaded) {
                const totalFrames = lottieRef.current.totalFrames;
                const frame = Math.round(latest * totalFrames);
                lottieRef.current.goToAndStop(frame, true);
                onProgressChange?.(latest);
            }
        });

        return unsubscribe;
    }, [animationProgress, isLoaded, onProgressChange]);

    // Handle Lottie load
    const handleLottieLoad = () => {
        setIsLoaded(true);
    };

    // Combine refs
    const setRefs = (node: HTMLDivElement) => {
        containerRef.current = node;
        inViewRef(node);
    };

    return (
        <div
            ref={setRefs}
            className={`scroll-lottie-sequence ${className}`}
            style={{ height: sticky ? height : 'auto' }}
        >
            {sticky && (
                <div
                    className="sticky top-0 w-full h-full flex items-center justify-center overflow-hidden"
                    style={{ height }}
                >
                    <div className="relative w-full h-full">
                        {/* Lottie Animation */}
                        <LottieAnimation
                            src={lottieSrc}
                            width="100%"
                            height="100%"
                            loop={loop}
                            autoplay={false}
                            quality={quality}
                            renderer="svg"
                            className="w-full h-full"
                            onLoad={handleLottieLoad}
                            lottieRef={lottieRef}
                        />

                        {/* Loading state */}
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                            </div>
                        )}

                        {/* Progress indicator (optional) */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-black bg-opacity-50 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-blue-500 h-full transition-all duration-100"
                                    style={{
                                        width: `${(animationProgress.get() || 0) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!sticky && (
                <div className="w-full" style={{ height }}>
                    <LottieAnimation
                        src={lottieSrc}
                        width="100%"
                        height="100%"
                        loop={loop}
                        autoplay={true}
                        quality={quality}
                        renderer="svg"
                        className="w-full h-full"
                        onLoad={handleLottieLoad}
                    />
                </div>
            )}

            {/* Spacer for scroll height */}
            {sticky && (
                <div
                    style={{
                        height: `${100 * speed}vh`,
                    }}
                />
            )}
        </div>
    );
};

export default ScrollLottieSequence;

