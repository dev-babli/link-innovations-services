'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Code, Smartphone, Cloud, Database, Shield, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        name: 'Web Development',
        href: '/web-development',
        icon: <Code className="w-4 h-4" />,
        description: 'Custom web applications'
    },
    {
        name: 'Mobile Apps',
        href: '/mobile-app-development',
        icon: <Smartphone className="w-4 h-4" />,
        description: 'iOS & Android apps'
    },
    {
        name: 'Cloud Solutions',
        href: '/cloud-solutions',
        icon: <Cloud className="w-4 h-4" />,
        description: 'DevOps & cloud migration'
    },
    {
        name: 'Data Analytics',
        href: '/data-analytics',
        icon: <Database className="w-4 h-4" />,
        description: 'BI & machine learning'
    },
    {
        name: 'Cybersecurity',
        href: '/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Security & compliance'
    },
    {
        name: 'IT Consulting',
        href: '/consulting',
        icon: <Users className="w-4 h-4" />,
        description: 'Digital transformation'
    }
];

interface ServicesDropdownProps {
    isMobile?: boolean;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isMobile = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: 'easeOut'
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15,
                ease: 'easeIn'
            }
        }
    };

    if (isMobile) {
        return (
            <div className="space-y-2">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full text-left text-muted-foreground hover:text-accent-foreground duration-150"
                >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="ml-4 space-y-2"
                        >
                            {services.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent-foreground duration-150 py-1"
                                >
                                    {service.icon}
                                    <span>{service.name}</span>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-black font-medium hover:text-accent-foreground duration-150"
            >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                        {services.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 duration-150"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="text-gray-600">
                                    {service.icon}
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">{service.name}</div>
                                    <div className="text-sm text-gray-500">{service.description}</div>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
