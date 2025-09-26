"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Target, Camera } from "lucide-react";
import Link from "next/link";

export default function NavigationSection() {
    const navItems = [
        {
            icon: Target,
            text: "Explore",
            delay: 0
        },
        {
            icon: Camera,
            text: "Gallery",
            delay: 0.1
        }
    ];

    return (
        <section className="px-6 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.text}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="flex items-center space-x-3 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    <item.icon className="w-5 h-5 relative z-10" />
                                    <span className="relative z-10">{item.text}</span>
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/works"
                            className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors group"
                        >
                            <span className="relative">
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                                :: All WORKS
                            </span>
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
