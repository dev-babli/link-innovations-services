"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Code, Award, Clock } from 'lucide-react';

interface Stat {
    id: string;
    value: number;
    label: string;
    suffix: string;
    icon: React.ComponentType<any>;
    color: string;
    description: string;
}

const StatsCounter: React.FC = () => {
    const [counts, setCounts] = useState<{ [key: string]: number }>({});
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats: Stat[] = [
        {
            id: 'clients',
            value: 150,
            label: 'Happy Clients',
            suffix: '+',
            icon: Users,
            color: '#3B82F6',
            description: 'Satisfied customers worldwide'
        },
        {
            id: 'projects',
            value: 500,
            label: 'Projects Completed',
            suffix: '+',
            icon: Code,
            color: '#10B981',
            description: 'Successful project deliveries'
        },
        {
            id: 'awards',
            value: 25,
            label: 'Awards Won',
            suffix: '',
            icon: Award,
            color: '#F59E0B',
            description: 'Industry recognition'
        },
        {
            id: 'experience',
            value: 8,
            label: 'Years Experience',
            suffix: '+',
            icon: Clock,
            color: '#8B5CF6',
            description: 'In the technology industry'
        }
    ];

    useEffect(() => {
        if (isInView) {
            stats.forEach((stat) => {
                animateCounter(stat.id, stat.value);
            });
        }
    }, [isInView]);

    const animateCounter = (id: string, targetValue: number) => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const increment = targetValue / steps;
        const stepDuration = duration / steps;

        let currentValue = 0;
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            setCounts(prev => ({ ...prev, [id]: Math.floor(currentValue) }));
        }, stepDuration);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Our Impact in Numbers
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-blue-100 max-w-3xl mx-auto"
                    >
                        Years of excellence, hundreds of successful projects, and countless satisfied clients
                    </motion.p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: `${stat.color}20` }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon
                                        className="w-8 h-8"
                                        style={{ color: stat.color }}
                                    />
                                </motion.div>

                                {/* Counter */}
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                                    initial={{ scale: 0.5 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                >
                                    {counts[stat.id] || 0}
                                    <span className="text-2xl md:text-3xl" style={{ color: stat.color }}>
                                        {stat.suffix}
                                    </span>
                                </motion.div>

                                {/* Label */}
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-blue-100 opacity-80">
                                    {stat.description}
                                </p>

                                {/* Animated Progress Bar */}
                                <motion.div
                                    className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
                                >
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: stat.color }}
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Trusted by Industry Leaders
                        </h3>
                        <p className="text-blue-100 mb-6">
                            Our track record speaks for itself. We&apos;ve consistently delivered exceptional results
                            that exceed expectations and drive real business value.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-blue-100">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">99%</div>
                                <div className="text-sm">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">24/7</div>
                                <div className="text-sm">Support Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-sm">On-Time Delivery</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsCounter;

