"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    Shield,
    Smartphone,
    Cloud,
    Database,
    Users,
    Lock,
    Globe,
    ArrowRight,
    CheckCircle
} from 'lucide-react';

interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    color: string;
    benefits: string[];
    category: 'performance' | 'security' | 'scalability' | 'support';
}

const FeatureGrid: React.FC = () => {
    const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

    const features: Feature[] = [
        {
            id: 'performance',
            title: 'Lightning Fast Performance',
            description: 'Optimized for speed with advanced caching, CDN integration, and performance monitoring.',
            icon: Zap,
            color: '#F59E0B',
            benefits: [
                'Sub-second page load times',
                'Advanced caching strategies',
                'CDN integration worldwide',
                'Real-time performance monitoring',
                'Automatic optimization'
            ],
            category: 'performance'
        },
        {
            id: 'security',
            title: 'Enterprise-Grade Security',
            description: 'Multi-layered security approach with encryption, monitoring, and compliance standards.',
            icon: Shield,
            color: '#EF4444',
            benefits: [
                'End-to-end encryption',
                'Regular security audits',
                'GDPR compliance',
                'DDoS protection',
                '24/7 security monitoring'
            ],
            category: 'security'
        },
        {
            id: 'mobile',
            title: 'Mobile-First Design',
            description: 'Responsive designs that work perfectly across all devices and screen sizes.',
            icon: Smartphone,
            color: '#10B981',
            benefits: [
                'Responsive design principles',
                'Touch-optimized interfaces',
                'Progressive Web App features',
                'Cross-platform compatibility',
                'Mobile performance optimization'
            ],
            category: 'scalability'
        },
        {
            id: 'cloud',
            title: 'Cloud-Native Architecture',
            description: 'Built on scalable cloud infrastructure that grows with your business needs.',
            icon: Cloud,
            color: '#3B82F6',
            benefits: [
                'Auto-scaling capabilities',
                'Global infrastructure',
                '99.9% uptime guarantee',
                'Disaster recovery',
                'Cost optimization'
            ],
            category: 'scalability'
        },
        {
            id: 'analytics',
            title: 'Advanced Analytics',
            description: 'Comprehensive data insights and business intelligence to drive growth.',
            icon: Database,
            color: '#8B5CF6',
            benefits: [
                'Real-time data processing',
                'Custom dashboards',
                'Predictive analytics',
                'Business intelligence',
                'Data visualization'
            ],
            category: 'performance'
        },
        {
            id: 'support',
            title: '24/7 Expert Support',
            description: 'Round-the-clock support from our team of experienced developers and engineers.',
            icon: Users,
            color: '#EC4899',
            benefits: [
                '24/7 technical support',
                'Dedicated account manager',
                'Priority response times',
                'Expert consultation',
                'Training and documentation'
            ],
            category: 'support'
        }
    ];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'performance': return '#F59E0B';
            case 'security': return '#EF4444';
            case 'scalability': return '#10B981';
            case 'support': return '#EC4899';
            default: return '#3B82F6';
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Link Innovations?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We combine cutting-edge technology with proven methodologies to deliver exceptional results
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredFeature(feature.id)}
                            onMouseLeave={() => setHoveredFeature(null)}
                            onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
                        >
                            <motion.div
                                className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-300"
                                whileHover={{ y: -10 }}
                                animate={{
                                    scale: hoveredFeature === feature.id ? 1.02 : 1,
                                    boxShadow: hoveredFeature === feature.id
                                        ? `0 20px 40px ${feature.color}20`
                                        : '0 10px 30px rgba(0,0,0,0.1)'
                                }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                    style={{ backgroundColor: `${feature.color}20` }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <feature.icon
                                        className="w-8 h-8"
                                        style={{ color: feature.color }}
                                    />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Category Badge */}
                                <div className="mb-6">
                                    <span
                                        className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                        style={{
                                            backgroundColor: `${getCategoryColor(feature.category)}20`,
                                            color: getCategoryColor(feature.category)
                                        }}
                                    >
                                        {feature.category.toUpperCase()}
                                    </span>
                                </div>

                                {/* Learn More Button */}
                                <motion.button
                                    className="flex items-center space-x-2 text-sm font-medium group-hover:text-blue-600 transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, ${feature.color}10, transparent)`
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredFeature === feature.id ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Detail Modal */}
                <AnimatePresence>
                    {selectedFeature && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFeature(null)}
                        >
                            <motion.div
                                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {(() => {
                                    const feature = features.find(f => f.id === selectedFeature);
                                    if (!feature) return null;

                                    return (
                                        <>
                                            {/* Modal Header */}
                                            <div className="p-8 border-b border-gray-200">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div
                                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                        style={{ backgroundColor: `${feature.color}20` }}
                                                    >
                                                        <feature.icon
                                                            className="w-6 h-6"
                                                            style={{ color: feature.color }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-gray-900">
                                                            {feature.title}
                                                        </h2>
                                                        <span
                                                            className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                                            style={{
                                                                backgroundColor: `${getCategoryColor(feature.category)}20`,
                                                                color: getCategoryColor(feature.category)
                                                            }}
                                                        >
                                                            {feature.category.toUpperCase()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600">
                                                    {feature.description}
                                                </p>
                                            </div>

                                            {/* Modal Content */}
                                            <div className="p-8">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                    Key Benefits
                                                </h3>
                                                <div className="space-y-3">
                                                    {feature.benefits.map((benefit, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-center space-x-3"
                                                        >
                                                            <CheckCircle
                                                                className="w-5 h-5 flex-shrink-0"
                                                                style={{ color: feature.color }}
                                                            />
                                                            <span className="text-gray-700">{benefit}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* CTA Button */}
                                                <motion.button
                                                    className="w-full mt-8 py-3 px-6 rounded-lg text-white font-semibold flex items-center justify-center space-x-2"
                                                    style={{ backgroundColor: feature.color }}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <span>Get Started</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </motion.button>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Experience These Features?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss how our comprehensive feature set can help your business achieve its goals.
                        </p>
                        <motion.button
                            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureGrid;

