"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: '1',
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'TechStart Inc.',
            content: 'Link Innovations transformed our digital presence completely. Their web development team delivered a stunning, high-performance website that increased our conversions by 300%.',
            rating: 5,
            avatar: '/assets/avatars/sarah.jpg'
        },
        {
            id: '2',
            name: 'Michael Chen',
            role: 'CTO',
            company: 'DataFlow Solutions',
            content: 'The cloud solutions provided by Link Innovations have been game-changing. Our infrastructure is now more scalable and secure than ever before.',
            rating: 5,
            avatar: '/assets/avatars/michael.jpg'
        },
        {
            id: '3',
            name: 'Emily Rodriguez',
            role: 'Marketing Director',
            company: 'GrowthCo',
            content: 'Their mobile app development expertise helped us reach new markets. The app they built has over 100k downloads and 4.8-star rating.',
            rating: 5,
            avatar: '/assets/avatars/emily.jpg'
        },
        {
            id: '4',
            name: 'David Thompson',
            role: 'Founder',
            company: 'SecureNet',
            content: 'Link Innovations cybersecurity services gave us peace of mind. Their comprehensive security audit identified vulnerabilities we never knew existed.',
            rating: 5,
            avatar: '/assets/avatars/david.jpg'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12"
                        >
                            <div className="text-center">
                                {/* Quote Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <Quote className="w-8 h-8 text-white" />
                                </motion.div>

                                {/* Testimonial Content */}
                                <motion.blockquote
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
                                >
                                    "{testimonials[currentIndex].content}"
                                </motion.blockquote>

                                {/* Rating */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex justify-center mb-6"
                                >
                                    {renderStars(testimonials[currentIndex].rating)}
                                </motion.div>

                                {/* Client Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center justify-center space-x-4"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-gray-600">
                                            {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-blue-500 scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;

