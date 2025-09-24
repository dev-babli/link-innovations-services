"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticCursorProps {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}

const MagneticCursor: React.FC<MagneticCursorProps> = ({
    children,
    strength = 0.3,
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            if (isHovered) {
                x.set(distanceX * strength);
                y.set(distanceY * strength);
            } else {
                x.set(0);
                y.set(0);
            }

            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isHovered, strength, x, y]);

    return (
        <>
            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.8 : 0.6,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Magnetic Element */}
            <motion.div
                ref={ref}
                className={`magnetic-element ${className}`}
                style={{
                    x: springX,
                    y: springY,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default MagneticCursor;

