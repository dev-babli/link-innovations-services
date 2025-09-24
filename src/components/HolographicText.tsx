"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HolographicTextProps {
    text: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    animation?: 'glitch' | 'rainbow' | 'neon' | 'matrix';
    speed?: number;
}

const HolographicText: React.FC<HolographicTextProps> = ({
    text,
    className = '',
    size = 'lg',
    animation = 'rainbow',
    speed = 1,
}) => {
    const textRef = useRef<HTMLDivElement>(null);

    const sizeClasses = {
        sm: 'text-2xl',
        md: 'text-4xl',
        lg: 'text-6xl',
        xl: 'text-8xl',
    };

    const getAnimationStyles = () => {
        switch (animation) {
            case 'glitch':
                return {
                    background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00, #ff00ff, #00ffff)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `glitch ${2 / speed}s ease-in-out infinite alternate`,
                };

            case 'rainbow':
                return {
                    background: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `rainbow ${3 / speed}s ease-in-out infinite`,
                };

            case 'neon':
                return {
                    color: '#00ffff',
                    textShadow: `
            0 0 5px #00ffff,
            0 0 10px #00ffff,
            0 0 15px #00ffff,
            0 0 20px #00ffff,
            0 0 35px #00ffff,
            0 0 40px #00ffff
          `,
                    animation: `neon-flicker ${1 / speed}s ease-in-out infinite alternate`,
                };

            case 'matrix':
                return {
                    color: '#00ff00',
                    textShadow: `
            0 0 5px #00ff00,
            0 0 10px #00ff00,
            0 0 15px #00ff00
          `,
                    fontFamily: 'monospace',
                    animation: `matrix-glow ${2 / speed}s ease-in-out infinite`,
                };

            default:
                return {};
        }
    };

    useEffect(() => {
        // Add CSS animations dynamically
        const style = document.createElement('style');
        style.textContent = `
      @keyframes rainbow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes glitch {
        0% { 
          transform: translate(0);
          filter: hue-rotate(0deg);
        }
        20% { 
          transform: translate(-2px, 2px);
          filter: hue-rotate(90deg);
        }
        40% { 
          transform: translate(-2px, -2px);
          filter: hue-rotate(180deg);
        }
        60% { 
          transform: translate(2px, 2px);
          filter: hue-rotate(270deg);
        }
        80% { 
          transform: translate(2px, -2px);
          filter: hue-rotate(360deg);
        }
        100% { 
          transform: translate(0);
          filter: hue-rotate(360deg);
        }
      }
      
      @keyframes neon-flicker {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
          text-shadow: 
            0 0 5px #00ffff,
            0 0 10px #00ffff,
            0 0 15px #00ffff,
            0 0 20px #00ffff,
            0 0 35px #00ffff,
            0 0 40px #00ffff;
        }
        20%, 24%, 55% {
          text-shadow: none;
        }
      }
      
      @keyframes matrix-glow {
        0%, 100% {
          text-shadow: 
            0 0 5px #00ff00,
            0 0 10px #00ff00,
            0 0 15px #00ff00;
        }
        50% {
          text-shadow: 
            0 0 10px #00ff00,
            0 0 20px #00ff00,
            0 0 30px #00ff00,
            0 0 40px #00ff00;
        }
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className={`relative ${className}`}>
            {/* Main Text */}
            <motion.div
                ref={textRef}
                className={`font-bold ${sizeClasses[size]} select-none`}
                style={getAnimationStyles()}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                {text}
            </motion.div>

            {/* Holographic Overlay Effects */}
            {animation === 'holographic' && (
                <>
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                            backgroundSize: '200% 200%',
                        }}
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 2 / speed,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%)',
                        }}
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 3 / speed,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </>
            )}

            {/* Glitch Effect Overlay */}
            {animation === 'glitch' && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.3,
                    }}
                    animate={{
                        x: [0, -2, 2, 0],
                        y: [0, 2, -2, 0],
                    }}
                    transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                >
                    {text}
                </motion.div>
            )}

            {/* Matrix Rain Effect */}
            {animation === 'matrix' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-green-400 text-xs font-mono opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '-20px',
                            }}
                            animate={{
                                y: ['-20px', '100vh'],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            {Math.random().toString(36).substring(7)}
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HolographicText;

