"use client";

import React from 'react';
import { motion } from "framer-motion";
import {
    Code,
    Smartphone,
    Cloud,
    BarChart3,
    Shield,
    Brain,
    Palette,
    Settings,
    Users,
    ArrowRight
} from "lucide-react";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Custom web applications built with modern frameworks",
        color: "#3B82F6",
        backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center"
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile solutions",
        color: "#10B981",
        backgroundImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center"
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration",
        color: "#8B5CF6",
        backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center"
    },
    {
        icon: BarChart3,
        title: "Data Analytics",
        description: "Business intelligence and data insights",
        color: "#F59E0B",
        backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Enterprise-grade security solutions",
        color: "#EF4444",
        backgroundImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center"
    },
    {
        icon: Brain,
        title: "AI & Automation",
        description: "Intelligent automation and AI solutions",
        color: "#EC4899",
        backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centered interface design",
        color: "#06B6D4",
        backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center"
    },
    {
        icon: Settings,
        title: "DevOps",
        description: "CI/CD pipelines and automation",
        color: "#84CC16",
        backgroundImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&crop=center"
    }
];

const WireframeHero: React.FC = () => {
    return (
        <section className="px-6 py-20 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Main Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Large Main Service Card */}
                    <motion.div
                        className="lg:col-span-2 bg-gray-200 rounded-xl p-12 relative overflow-hidden group cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&crop=center')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >

                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-8">
                                <motion.div
                                    className="w-24 h-24 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-white/20"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5,
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
                                    }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                                >
                                    <Code className="w-12 h-12 text-blue-600" />
                                </motion.div>
                            </div>
                            <SplitText text="Web Development" tag="h1" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg" />
                            <BlurText text="Custom web applications built with modern frameworks and cutting-edge technologies" className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md" />
                            <div className="flex items-center justify-center">
                                <motion.button
                                    className="bg-white/95 backdrop-blur-md text-gray-800 px-10 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-xl border border-white/30 group/btn"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -3,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10">VIEW PROJECTS</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Profile/Icon Section */}
                        <motion.div
                            className="bg-gray-200 rounded-xl p-8 text-center relative overflow-hidden group"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >

                            <div className="relative z-10">
                                <motion.div
                                    className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl border border-white/20"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                                    }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                                >
                                    <Users className="w-8 h-8 text-green-600" />
                                </motion.div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-900 text-center drop-shadow-lg">Our Team</h3>
                                    <p className="text-sm text-gray-700 text-center drop-shadow-md">Expert developers and designers</p>
                                    <p className="text-xs text-gray-600 text-center drop-shadow-sm">Ready to build your vision</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Menu Section */}
                        <motion.div
                            className="bg-gray-200 rounded-xl p-6 relative overflow-hidden group"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >

                            <div className="relative z-10">
                                <div className="flex justify-between items-center">
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium text-gray-900 drop-shadow-lg">Analytics</h4>
                                        <p className="text-xs text-gray-700 drop-shadow-md">Data Insights</p>
                                        <p className="text-xs text-gray-600 drop-shadow-sm">Performance</p>
                                    </div>
                                    <motion.div
                                        className="space-y-1"
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-6 h-1 bg-gray-800/90 backdrop-blur-sm rounded-full"></div>
                                        <div className="w-6 h-1 bg-gray-800/90 backdrop-blur-sm rounded-full"></div>
                                        <div className="w-6 h-1 bg-gray-800/90 backdrop-blur-sm rounded-full"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom Section */}
                        <motion.div
                            className="flex justify-between items-end p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl relative overflow-hidden"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop&crop=center')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >

                            <div className="relative z-10 flex justify-between items-end w-full">
                                <motion.div
                                    className="flex space-x-2"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="w-2 h-2 bg-gray-800/95 backdrop-blur-sm rounded-full"
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.2 }}
                                    ></motion.div>
                                    <motion.div
                                        className="w-2 h-2 bg-gray-800/95 backdrop-blur-sm rounded-full"
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.2 }}
                                    ></motion.div>
                                    <motion.div
                                        className="w-2 h-2 bg-gray-800/95 backdrop-blur-sm rounded-full"
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.2 }}
                                    ></motion.div>
                                </motion.div>
                                <motion.div
                                    className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl border border-white/20"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 45,
                                        backgroundColor: "rgba(255, 255, 255, 1)",
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                                >
                                    <ArrowRight className="w-8 h-8 text-orange-600" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="bg-gray-200 rounded-xl p-6 cursor-pointer group relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                backgroundImage: `url('${service.backgroundImage}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >

                            <div className="relative z-10">
                                <motion.div
                                    className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg border border-white/20"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 5,
                                        boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
                                    }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                                >
                                    <service.icon className="w-6 h-6" style={{ color: service.color }} />
                                </motion.div>
                                <BlurText text={service.title} className="text-sm font-medium text-gray-900 text-center mb-2 drop-shadow-lg" />
                                <div className="space-y-1 text-center">
                                    <p className="text-xs text-gray-700 font-medium drop-shadow-md">{service.description}</p>
                                    <motion.div
                                        className="flex justify-center space-x-1"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            className="w-1 h-1 bg-gray-700 rounded-full"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                        ></motion.div>
                                        <motion.div
                                            className="w-1 h-1 bg-gray-700 rounded-full"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                        ></motion.div>
                                        <motion.div
                                            className="w-1 h-1 bg-gray-700 rounded-full"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                        ></motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WireframeHero;
