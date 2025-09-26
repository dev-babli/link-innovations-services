"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurText from "@/components/BlurText";

const services = [
    {
        title: "WEB DEVELOPMENT",
        textColor: "white",
        image: "branding-bg",
        backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center",
        description: "Custom web applications built with modern frameworks and cutting-edge technologies",
        delay: 0
    },
    {
        title: "MOBILE APPS",
        textColor: "white",
        image: "uiux-bg",
        backgroundImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=center",
        description: "Native and cross-platform mobile applications for iOS and Android",
        delay: 0.1
    },
    {
        title: "CLOUD SOLUTIONS",
        textColor: "white",
        image: "packaging-bg",
        backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center",
        description: "Scalable cloud infrastructure and migration services",
        delay: 0.2
    },
    {
        title: "DATA ANALYTICS",
        textColor: "white",
        image: "branding-bg",
        backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
        description: "Business intelligence and data-driven insights for informed decision making",
        delay: 0.3
    },
    {
        title: "CYBERSECURITY",
        textColor: "white",
        image: "uiux-bg",
        backgroundImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center",
        description: "Enterprise-grade security solutions and comprehensive security audits",
        delay: 0.4
    },
    {
        title: "AI & AUTOMATION",
        textColor: "white",
        image: "packaging-bg",
        backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
        description: "Intelligent automation and AI solutions to streamline your business processes",
        delay: 0.5
    },
    {
        title: "UI/UX DESIGN",
        textColor: "white",
        image: "branding-bg",
        backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop&crop=center",
        description: "User-centered interface design that creates exceptional digital experiences",
        delay: 0.6
    },
    {
        title: "DEVOPS",
        textColor: "white",
        image: "uiux-bg",
        backgroundImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop&crop=center",
        description: "CI/CD pipelines and automation for seamless software delivery",
        delay: 0.7
    },
    {
        title: "API DEVELOPMENT",
        textColor: "white",
        image: "packaging-bg",
        backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center",
        description: "RESTful and GraphQL APIs for seamless system integration",
        delay: 0.8
    },
    {
        title: "DATABASE DESIGN",
        textColor: "white",
        image: "branding-bg",
        backgroundImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop&crop=center",
        description: "Optimized database solutions for performance and scalability",
        delay: 0.9
    },
    {
        title: "CONSULTING",
        textColor: "white",
        image: "uiux-bg",
        backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center",
        description: "Technical architecture consulting and strategic technology guidance",
        delay: 1.0
    },
    {
        title: "SUPPORT",
        textColor: "white",
        image: "packaging-bg",
        backgroundImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=center",
        description: "24/7 maintenance and support services for your applications",
        delay: 1.1
    }
];

export default function ServiceCards() {
    return (
        <section className="px-6 py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Comprehensive technology solutions to transform your business and drive digital innovation
                    </p>
                </motion.div>

                {/* Services in Left-Right Layout */}
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className={`service-section ${service.image} relative overflow-hidden rounded-2xl`}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -100 : 100,
                                scale: 0.9
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1
                            }}
                            transition={{
                                duration: 0.8,
                                delay: service.delay,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: index % 2 === 0 ? 5 : -5,
                                transition: {
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 300
                                }
                            }}
                            style={{
                                backgroundImage: `url(${service.backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '300px'
                            }}
                        >
                            {/* Background Overlay */}
                            <div className="absolute inset-0 bg-black/40 z-0"></div>

                            <div className="relative z-10 h-full flex items-center">
                                <div className={`flex items-center justify-between w-full px-12 md:px-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                                    {/* Content Section */}
                                    <motion.div
                                        className={`flex-1 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: service.delay + 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <BlurText
                                            text={service.title}
                                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                                            blurAmount={20}
                                            delay={service.delay + 0.5}
                                            duration={1000}
                                        />
                                        {service.description && (
                                            <motion.p
                                                className={`text-base md:text-lg mt-4 max-w-md text-white ${index % 2 === 1 ? 'ml-auto' : ''}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: service.delay + 0.8 }}
                                                viewport={{ once: true }}
                                            >
                                                {service.description}
                                            </motion.p>
                                        )}
                                    </motion.div>

                                    {/* Action Button/Indicator */}
                                    <motion.div
                                        className={`flex items-center ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: service.delay + 1.0 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.button
                                            className={`w-16 h-16 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 360,
                                                backgroundColor: "rgba(255, 255, 255, 0.3)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className={`w-6 h-6 ${index % 2 === 1 ? 'rotate-180' : ''}`} />
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Hover overlay effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity duration-300 z-5"
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
