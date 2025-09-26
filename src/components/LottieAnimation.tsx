"use client";

import React, { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LottieAnimationProps {
    src: string | object;
    className?: string;
    style?: React.CSSProperties;
    loop?: boolean;
    autoplay?: boolean;
    speed?: number;
    direction?: 1 | -1;
    playOnHover?: boolean;
    playOnClick?: boolean;
    pauseOnHover?: boolean;
    onComplete?: () => void;
    onLoopComplete?: () => void;
    onEnterFrame?: (frame: number) => void;
    onLoad?: () => void;
    externalLottieRef?: React.RefObject<any>;
    width?: number | string;
    height?: number | string;
    quality?: 'low' | 'medium' | 'high';
    renderer?: 'svg';
    // Framer Motion integration
    withFramerMotion?: boolean;
    motionProps?: {
        initial?: any;
        animate?: any;
        exit?: any;
        transition?: any;
        whileHover?: any;
        whileTap?: any;
    };
    // Performance optimization
    preload?: boolean;
    fallback?: React.ReactNode;
    // Intersection Observer for lazy loading
    lazy?: boolean;
    threshold?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
    src,
    className = '',
    style = {},
    loop = true,
    autoplay = true,
    speed = 1,
    direction = 1,
    playOnHover = false,
    playOnClick = false,
    pauseOnHover = false,
    onComplete,
    onLoopComplete,
    onEnterFrame,
    onLoad,
    externalLottieRef,
    width = '100%',
    height = 'auto',
    quality = 'high',
    renderer = 'svg',
    withFramerMotion = false,
    motionProps = {},
    preload = true,
    fallback = null,
    lazy = false,
    threshold = 0.1,
}) => {
    const internalLottieRef = useRef<LottieRefCurrentProps>(null);
    const lottieRef = externalLottieRef || internalLottieRef;
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(!lazy);
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const [animationData, setAnimationData] = useState<object | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Load animation data
    useEffect(() => {
        const loadAnimation = async () => {
            try {
                if (typeof src === 'string') {
                    const response = await fetch(src);
                    const data = await response.json();
                    setAnimationData(data);
                } else {
                    setAnimationData(src);
                }
                setIsLoaded(true);
            } catch (error) {
                console.error('Failed to load Lottie animation:', error);
                setIsLoaded(false);
            }
        };

        if (preload || isInView) {
            loadAnimation();
        }
    }, [src, preload, isInView]);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!lazy || !containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [lazy, threshold]);

    // Animation controls
    useEffect(() => {
        if (!lottieRef.current || !isLoaded) return;

        const animation = lottieRef.current;

        if (isPlaying) {
            animation.play();
        } else {
            animation.pause();
        }

        animation.setSpeed(speed);
        animation.setDirection(direction);
    }, [isPlaying, speed, direction, isLoaded]);

    // Event handlers
    const handleComplete = () => {
        onComplete?.();
    };

    const handleLoopComplete = () => {
        onLoopComplete?.();
    };

    const handleEnterFrame = (event: any) => {
        onEnterFrame?.(event.currentTime);
    };

    const handleMouseEnter = () => {
        if (playOnHover) {
            setIsPlaying(true);
        }
        if (pauseOnHover) {
            setIsPlaying(false);
        }
    };

    const handleMouseLeave = () => {
        if (playOnHover || pauseOnHover) {
            setIsPlaying(autoplay);
        }
    };

    const handleClick = () => {
        if (playOnClick) {
            setIsPlaying(!isPlaying);
        }
    };

    // Render fallback if not loaded
    if (!isLoaded || !animationData) {
        return (
            <div
                ref={containerRef}
                className={`lottie-container ${className}`}
                style={{
                    width,
                    height,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...style,
                }}
            >
                {fallback || (
                    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full" />
                )}
            </div>
        );
    }

    const lottieComponent = (
        <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={loop}
            autoplay={isPlaying}
            onComplete={handleComplete}
            onLoopComplete={handleLoopComplete}
            onEnterFrame={handleEnterFrame}
            onLoad={onLoad}
            renderer={renderer}
            rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true,
                hideOnTransparent: true,
            }}
            style={{
                width,
                height,
                ...style,
            }}
            className={className}
        />
    );

    const containerProps = {
        ref: containerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
        style: {
            width,
            height,
            cursor: playOnClick ? 'pointer' : 'default',
        },
    };

    if (withFramerMotion) {
        return (
            <motion.div {...containerProps}>
                <AnimatePresence>
                    <motion.div
                        key="lottie-animation"
                        {...motionProps}
                    >
                        {lottieComponent}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        );
    }

    return (
        <div {...containerProps}>
            {lottieComponent}
        </div>
    );
};

export default LottieAnimation;

