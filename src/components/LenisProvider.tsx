"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
    children: React.ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    useEffect(() => {
        // Initialize Lenis with optimized settings for buttery smooth scrolling
        const lenis = new Lenis({
            // Core smoothness settings
            lerp: 0.08, // Lower values = smoother, higher = more responsive (0.05-0.1 optimal)
            duration: 1.1, // Duration for programmatic scrolling (1.0-1.2 optimal)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve

            // Input sensitivity
            wheelMultiplier: 1.1, // Mouse wheel sensitivity (1.0-1.2 optimal)
            touchMultiplier: 1.8, // Touch sensitivity for mobile (1.5-2.0 optimal)

            // Performance optimizations
            smoothWheel: true, // Enable smooth wheel scrolling
            autoRaf: true, // Automatically handle requestAnimationFrame

            // Additional smoothness
            infinite: false, // Disable infinite scroll for better performance
            orientation: 'vertical', // Vertical scrolling only
        });

        // Animation frame function
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links for smooth scrolling
        const handleAnchorLinks = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const targetId = target.getAttribute('href');
                if (targetId) {
                    lenis.scrollTo(targetId, {
                        duration: 1.1,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                }
            }
        };

        // Add event listener for anchor links
        document.addEventListener('click', handleAnchorLinks);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleAnchorLinks);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisProvider;

