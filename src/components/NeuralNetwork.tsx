"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Node {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    layer: number;
    activation: number;
}

interface NeuralNetworkProps {
    layers?: number[];
    className?: string;
    width?: number;
    height?: number;
    speed?: number;
    colors?: string[];
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
    layers = [3, 4, 4, 2],
    className = '',
    width = 800,
    height = 400,
    speed = 1,
    colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'],
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const nodesRef = useRef<Node[]>([]);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = width;
        canvas.height = height;

        // Initialize nodes
        const initializeNodes = () => {
            nodesRef.current = [];
            let nodeId = 0;

            layers.forEach((nodeCount, layerIndex) => {
                const layerX = (width / (layers.length - 1)) * layerIndex;
                const layerSpacing = height / (nodeCount + 1);

                for (let i = 0; i < nodeCount; i++) {
                    const node: Node = {
                        id: nodeId++,
                        x: layerX,
                        y: layerSpacing * (i + 1),
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * 8 + 4,
                        color: colors[layerIndex % colors.length],
                        layer: layerIndex,
                        activation: Math.random(),
                    };
                    nodesRef.current.push(node);
                }
            });
        };

        initializeNodes();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update nodes
            nodesRef.current.forEach((node) => {
                // Update position with some oscillation
                node.x += Math.sin(Date.now() * 0.001 * speed + node.id) * 0.5;
                node.y += Math.cos(Date.now() * 0.001 * speed + node.id) * 0.5;

                // Update activation
                node.activation = 0.5 + 0.5 * Math.sin(Date.now() * 0.002 * speed + node.id);

                // Keep nodes in bounds
                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));
            });

            // Draw connections
            nodesRef.current.forEach((node, i) => {
                nodesRef.current.slice(i + 1).forEach((otherNode) => {
                    const distance = Math.sqrt(
                        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
                    );

                    if (distance < 150 && Math.abs(node.layer - otherNode.layer) <= 1) {
                        const opacity = (1 - distance / 150) * 0.3;
                        const strength = (node.activation + otherNode.activation) / 2;

                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * strength})`;
                        ctx.lineWidth = strength * 2;
                        ctx.stroke();

                        // Add pulsing effect
                        if (strength > 0.7) {
                            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.5})`;
                            ctx.lineWidth = strength * 3;
                            ctx.stroke();
                        }
                    }
                });
            });

            // Draw nodes
            nodesRef.current.forEach((node) => {
                // Node glow
                const gradient = ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, node.size * 2
                );
                gradient.addColorStop(0, `${node.color}${Math.floor(node.activation * 255).toString(16).padStart(2, '0')}`);
                gradient.addColorStop(1, `${node.color}00`);

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * node.activation, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Node core
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * 0.5, 0, Math.PI * 2);
                ctx.fillStyle = node.color;
                ctx.fill();

                // Activation indicator
                if (node.activation > 0.8) {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.size * 1.5, 0, Math.PI * 2);
                    ctx.strokeStyle = `${node.color}80`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            });

            // Draw data flow
            const time = Date.now() * 0.001 * speed;
            nodesRef.current.forEach((node, i) => {
                if (node.layer < layers.length - 1) {
                    const nextLayerNodes = nodesRef.current.filter(n => n.layer === node.layer + 1);
                    nextLayerNodes.forEach((nextNode) => {
                        const progress = (Math.sin(time + i) + 1) / 2;
                        const x = node.x + (nextNode.x - node.x) * progress;
                        const y = node.y + (nextNode.y - node.y) * progress;

                        ctx.beginPath();
                        ctx.arc(x, y, 3, 0, Math.PI * 2);
                        ctx.fillStyle = '#FFFFFF';
                        ctx.fill();
                    });
                }
            });

            if (isActive) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [width, height, speed, layers, colors, isActive]);

    return (
        <div className={`neural-network ${className}`}>
            <div className="relative">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full rounded-lg"
                    style={{ background: 'radial-gradient(circle, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)' }}
                />

                {/* Controls */}
                <div className="absolute top-4 right-4">
                    <motion.button
                        onClick={() => setIsActive(!isActive)}
                        className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isActive ? 'Pause' : 'Play'}
                    </motion.button>
                </div>

                {/* Layer Labels */}
                <div className="absolute bottom-4 left-4 text-white text-sm">
                    <div className="flex space-x-8">
                        {layers.map((nodeCount, index) => (
                            <div key={index} className="text-center">
                                <div className="font-semibold">Layer {index + 1}</div>
                                <div className="text-xs opacity-70">{nodeCount} neurons</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Panel */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="font-semibold mb-2">Neural Network</h3>
                    <div className="text-sm space-y-1">
                        <div>Layers: {layers.length}</div>
                        <div>Total Neurons: {layers.reduce((a, b) => a + b, 0)}</div>
                        <div>Status: {isActive ? 'Active' : 'Paused'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeuralNetwork;

