"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
    children: React.ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    useEffect(() => {
        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 1.5,
            wheelMultiplier: 0.8,
            lerp: 0.1,
            infinite: false,
            syncTouch: true,
            syncTouchLerp: 0.1,
        });

        // Animation frame function
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisProvider;

