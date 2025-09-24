"use client";

import React from 'react';
import ServiceScrollSequence from '@/components/ServiceScrollSequence';

export default function ServicesShowcasePage() {
    const services = [
        {
            id: 'web-development',
            title: 'Web Development',
            description: 'We create stunning, responsive websites that deliver exceptional user experiences and drive business growth.',
            lottieSrc: '/16_9.json',
            features: [
                'Responsive Design',
                'Modern Frameworks',
                'SEO Optimization',
                'Performance Tuning',
                'Cross-browser Compatibility'
            ],
            color: '#3B82F6'
        },
        {
            id: 'mobile-apps',
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications that engage users and provide seamless experiences across all devices.',
            lottieSrc: '/16_9.json',
            features: [
                'iOS & Android Development',
                'Cross-platform Solutions',
                'App Store Optimization',
                'Push Notifications',
                'Offline Functionality'
            ],
            color: '#10B981'
        },
        {
            id: 'cloud-solutions',
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and services that grow with your business and ensure maximum uptime.',
            lottieSrc: '/16_9.json',
            features: [
                'AWS & Azure Expertise',
                'Auto-scaling Solutions',
                'Data Migration',
                'Security & Compliance',
                '24/7 Monitoring'
            ],
            color: '#8B5CF6'
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity',
            description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
            lottieSrc: '/16_9.json',
            features: [
                'Security Audits',
                'Penetration Testing',
                'Compliance Management',
                'Incident Response',
                'Security Training'
            ],
            color: '#EF4444'
        },
        {
            id: 'data-analytics',
            title: 'Data Analytics',
            description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
            lottieSrc: '/16_9.json',
            features: [
                'Data Visualization',
                'Machine Learning',
                'Predictive Analytics',
                'Real-time Dashboards',
                'Data Warehousing'
            ],
            color: '#F59E0B'
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center text-white">
                    <h1 className="text-6xl font-bold mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Scroll down to explore our comprehensive range of technology solutions
                    </p>
                </div>
            </section>

            {/* Services Scroll Sequence */}
            <ServiceScrollSequence services={services} />

            {/* Call to Action */}
            <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business with cutting-edge technology solutions.
                    </p>
                    <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Get In Touch
                    </button>
                </div>
            </section>
        </div>
    );
}

