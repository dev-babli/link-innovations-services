"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface HolographicCardProps {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    className?: string;
    tiltStrength?: number;
}

const HolographicCard: React.FC<HolographicCardProps> = ({
    frontContent,
    backContent,
    className = '',
    tiltStrength = 20,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-300, 300], [tiltStrength, -tiltStrength]);
    const rotateY = useTransform(x, [-300, 300], [-tiltStrength, tiltStrength]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="perspective-1000">
            <motion.div
                ref={cardRef}
                className={`relative w-full h-80 cursor-pointer ${className}`}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsFlipped(!isFlipped)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                {/* Front Face */}
                <motion.div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{
                        rotateY: isFlipped ? 180 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl p-6 overflow-hidden">
                        {/* Holographic Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-10" />

                        {/* Content */}
                        <div className="relative z-10 text-white">
                            {frontContent}
                        </div>
                    </div>
                </motion.div>

                {/* Back Face */}
                <motion.div
                    className="absolute inset-0 w-full h-full backface-hidden"
                    style={{
                        rotateY: isFlipped ? 0 : -180,
                    }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl p-6 overflow-hidden">
                        {/* Holographic Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400 to-transparent opacity-10" />

                        {/* Content */}
                        <div className="relative z-10 text-white">
                            {backContent}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HolographicCard;

