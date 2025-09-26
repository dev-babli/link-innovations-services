'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Code, Smartphone, Cloud, Database, Shield, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFastNavigation } from '@/hooks/useFastNavigation';

const services = [
    {
        name: 'Web Development',
        href: '/services/web-development',
        icon: <Code className="w-4 h-4" />,
        description: 'Custom web applications'
    },
    {
        name: 'App Development',
        href: '/services/app-development',
        icon: <Smartphone className="w-4 h-4" />,
        description: 'iOS & Android apps'
    },
    {
        name: 'Cloud Solutions',
        href: '/services/cloud-solutions',
        icon: <Cloud className="w-4 h-4" />,
        description: 'DevOps & cloud migration'
    },
    {
        name: 'Data Analytics',
        href: '/services/data-analytics',
        icon: <Database className="w-4 h-4" />,
        description: 'BI & machine learning'
    },
    {
        name: 'Cybersecurity',
        href: '/services/cybersecurity',
        icon: <Shield className="w-4 h-4" />,
        description: 'Security & compliance'
    },
    {
        name: 'IT Consulting',
        href: '/services/consulting',
        icon: <Users className="w-4 h-4" />,
        description: 'Digital transformation'
    }
];

interface ServicesDropdownProps {
    isMobile?: boolean;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isMobile = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { navigateTo, prefetchRoute } = useFastNavigation();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleServiceClick = (href: string) => {
        setIsOpen(false);
        navigateTo(href);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

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
                ease: 'easeOut' as const
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.15,
                ease: 'easeIn' as const
            }
        }
    };

    if (isMobile) {
        return (
            <div className="space-y-2" ref={dropdownRef}>
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
                                <button
                                    key={service.href}
                                    onClick={() => handleServiceClick(service.href)}
                                    onMouseEnter={() => prefetchRoute(service.href)}
                                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-accent-foreground duration-150 py-1 w-full text-left"
                                >
                                    {service.icon}
                                    <span>{service.name}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-white font-medium hover:text-accent-foreground duration-150"
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
                        className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 z-50"
                    >
                        {services.map((service) => (
                            <button
                                key={service.href}
                                onClick={() => handleServiceClick(service.href)}
                                onMouseEnter={() => prefetchRoute(service.href)}
                                className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 duration-150 w-full text-left"
                            >
                                <div className="text-gray-400">
                                    {service.icon}
                                </div>
                                <div>
                                    <div className="font-medium text-white">{service.name}</div>
                                    <div className="text-sm text-gray-400">{service.description}</div>
                                </div>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
