"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Footer() {
    const footerLinks = [
        { text: "About Us", href: "#" },
        { text: "Contact us", href: "#" },
        { text: "Terms", href: "#" },
        { text: "Privacy Policy", href: "#" }
    ];

    return (
        <footer className="bg-black text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        className="flex space-x-8 mb-4 md:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {footerLinks.map((link, index) => (
                            <motion.a
                                key={link.text}
                                href={link.href}
                                className="hover:text-white transition-colors relative group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {link.text}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.p
                        className="text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Mattered is a registered trademark © All rights reserved 2021
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
