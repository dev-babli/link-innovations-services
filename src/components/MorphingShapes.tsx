"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphingShapesProps {
    shapes?: string[];
    duration?: number;
    className?: string;
    size?: number;
    colors?: string[];
}

const MorphingShapes: React.FC<MorphingShapesProps> = ({
    shapes = ['circle', 'square', 'triangle', 'diamond', 'hexagon'],
    duration = 3000,
    className = '',
    size = 200,
    colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'],
}) => {
    const [currentShape, setCurrentShape] = useState(0);
    const [currentColor, setCurrentColor] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentShape((prev) => (prev + 1) % shapes.length);
            setCurrentColor((prev) => (prev + 1) % colors.length);
        }, duration);

        return () => clearInterval(interval);
    }, [shapes.length, colors.length, duration]);

    const getShapePath = (shape: string) => {
        const center = size / 2;
        const radius = size * 0.4;

        switch (shape) {
            case 'circle':
                return `M ${center} ${center - radius} A ${radius} ${radius} 0 1 1 ${center} ${center + radius} A ${radius} ${radius} 0 1 1 ${center} ${center - radius}`;

            case 'square':
                const halfSize = radius * 0.7;
                return `M ${center - halfSize} ${center - halfSize} L ${center + halfSize} ${center - halfSize} L ${center + halfSize} ${center + halfSize} L ${center - halfSize} ${center + halfSize} Z`;

            case 'triangle':
                return `M ${center} ${center - radius} L ${center - radius * 0.866} ${center + radius * 0.5} L ${center + radius * 0.866} ${center + radius * 0.5} Z`;

            case 'diamond':
                return `M ${center} ${center - radius} L ${center + radius} ${center} L ${center} ${center + radius} L ${center - radius} ${center} Z`;

            case 'hexagon':
                const hexPoints = [];
                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI) / 3;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);
                    hexPoints.push(`${x} ${y}`);
                }
                return `M ${hexPoints.join(' L ')} Z`;

            default:
                return getShapePath('circle');
        }
    };

    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${currentShape}-${currentColor}`}
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <svg width={size} height={size} className="w-full h-full">
                        <motion.path
                            d={getShapePath(shapes[currentShape])}
                            fill={colors[currentColor]}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            style={{
                                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                            }}
                        />
                    </svg>
                </motion.div>
            </AnimatePresence>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-30"
                style={{
                    background: `radial-gradient(circle, ${colors[currentColor]}40 0%, transparent 70%)`,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default MorphingShapes;

