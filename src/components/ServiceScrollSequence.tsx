"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import LottieAnimation from './LottieAnimation';

interface Service {
    id: string;
    title: string;
    description: string;
    lottieSrc: string;
    features: string[];
    color: string;
}

interface ServiceScrollSequenceProps {
    services: Service[];
    className?: string;
}

const ServiceScrollSequence: React.FC<ServiceScrollSequenceProps> = ({
    services,
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentService, setCurrentService] = useState(0);

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    // Transform scroll progress to service index
    const serviceIndex = useTransform(
        scrollYProgress,
        [0, 1],
        [0, services.length - 1]
    );

    // Update current service based on scroll progress
    useEffect(() => {
        const unsubscribe = serviceIndex.onChange((latest) => {
            const index = Math.round(latest);
            setCurrentService(Math.max(0, Math.min(index, services.length - 1)));
        });

        return unsubscribe;
    }, [serviceIndex, services.length]);

    return (
        <div ref={containerRef} className={`service-scroll-sequence ${className}`}>
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="relative w-full h-full">
                    {/* Background with current service color */}
                    <div
                        className="absolute inset-0 transition-colors duration-500"
                        style={{
                            background: `linear-gradient(135deg, ${services[currentService]?.color}15, ${services[currentService]?.color}05)`,
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Text Content */}
                                <motion.div
                                    key={currentService}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-white"
                                >
                                    <div className="mb-6">
                                        <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
                                            Service {currentService + 1} of {services.length}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                                        {services[currentService]?.title}
                                    </h2>

                                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                        {services[currentService]?.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3">
                                        {services[currentService]?.features.map((feature, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                                className="flex items-center text-white/80"
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full mr-3"
                                                    style={{ backgroundColor: services[currentService]?.color }}
                                                />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Lottie Animation */}
                                <motion.div
                                    key={`animation-${currentService}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    <div className="aspect-square max-w-lg mx-auto">
                                        <LottieAnimation
                                            src={services[currentService]?.lottieSrc || '/16_9.json'}
                                            width="100%"
                                            height="100%"
                                            loop={true}
                                            autoplay={true}
                                            quality="high"
                                            renderer="svg"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="flex space-x-2">
                            {services.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentService
                                            ? 'bg-white scale-125'
                                            : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer for scroll height */}
            <div
                style={{
                    height: `${services.length * 100}vh`,
                }}
            />
        </div>
    );
};

export default ServiceScrollSequence;

