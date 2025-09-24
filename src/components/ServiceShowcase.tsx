"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Cloud, Shield, Database, ArrowRight } from 'lucide-react';

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    features: string[];
    color: string;
    image: string;
}

const ServiceShowcase: React.FC = () => {
    const [activeService, setActiveService] = useState(0);

    const services: Service[] = [
        {
            id: 'web-development',
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
            icon: Code,
            features: ['React & Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Tuning'],
            color: '#3B82F6',
            image: '/assets/web-dev.jpg'
        },
        {
            id: 'mobile-apps',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
            icon: Smartphone,
            features: ['iOS & Android', 'Cross-platform', 'App Store Optimization', 'Push Notifications'],
            color: '#10B981',
            image: '/assets/mobile-dev.jpg'
        },
        {
            id: 'cloud-solutions',
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and services that grow with your business and ensure maximum uptime.',
            icon: Cloud,
            features: ['AWS & Azure', 'Auto-scaling', 'Data Migration', '24/7 Monitoring'],
            color: '#8B5CF6',
            image: '/assets/cloud-solutions.jpg'
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity',
            description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
            icon: Shield,
            features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
            color: '#EF4444',
            image: '/assets/cybersecurity.jpg'
        },
        {
            id: 'data-analytics',
            title: 'Data Analytics',
            description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
            icon: Database,
            features: ['Data Visualization', 'Machine Learning', 'Predictive Analytics', 'Real-time Dashboards'],
            color: '#F59E0B',
            image: '/assets/data-analytics.jpg'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive technology solutions to accelerate your digital transformation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Service Navigation */}
                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={`p-6 rounded-xl cursor-pointer transition-all ${activeService === index
                                    ? 'bg-white shadow-lg border-l-4'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
                                style={{
                                    borderLeftColor: activeService === index ? service.color : 'transparent'
                                }}
                                onClick={() => setActiveService(index)}
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${service.color}20` }}
                                    >
                                        <service.icon
                                            className="w-6 h-6"
                                            style={{ color: service.color }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Service Details */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-xl p-8"
                            >
                                <div className="mb-6">
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${services[activeService].color}20` }}
                                    >
                                        {React.createElement(services[activeService].icon, {
                                            className: "w-8 h-8",
                                            style: { color: services[activeService].color }
                                        })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {services[activeService].title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {services[activeService].description}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                        Key Features
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {services[activeService].features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center space-x-2"
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ backgroundColor: services[activeService].color }}
                                                />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    className="w-full py-3 px-6 rounded-lg text-white font-semibold flex items-center justify-center space-x-2"
                                    style={{ backgroundColor: services[activeService].color }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceShowcase;
