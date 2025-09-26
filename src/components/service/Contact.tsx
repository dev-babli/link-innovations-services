"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter } from "lucide-react";

export default function Contact() {
    const socialLinks = [
        {
            icon: Instagram,
            href: "#",
            delay: 0.2
        },
        {
            icon: Twitter,
            href: "#",
            delay: 0.3
        },
        {
            icon: "D",
            href: "#",
            delay: 0.4,
            isDiscord: true
        }
    ];

    return (
        <section className="px-6 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.p
                                className="text-sm text-gray-600 uppercase tracking-wide mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                HIRE US
                            </motion.p>

                            <motion.h2
                                className="text-5xl md:text-6xl font-bold text-black mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                GET IN TOUCH
                            </motion.h2>

                            <motion.button
                                className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors relative overflow-hidden group"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
                                viewport={{ once: true }}
                            >
                                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                                <ArrowRight className="w-6 h-6 relative z-10" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <div className="text-right">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.p
                                className="text-lg text-black mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                HEY@MATTERED.COM
                            </motion.p>

                            <motion.p
                                className="text-sm text-gray-600 uppercase tracking-wide mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Follow
                            </motion.p>

                            <div className="flex justify-end space-x-6">
                                {socialLinks.map((social, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: social.delay }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.a
                                            href={social.href}
                                            className="text-black hover:text-gray-600 transition-colors"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {social.isDiscord ? (
                                                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center hover:bg-gray-800 transition-colors">
                                                    <span className="text-white text-xs font-bold">D</span>
                                                </div>
                                            ) : (
                                                <social.icon className="w-6 h-6" />
                                            )}
                                        </motion.a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
