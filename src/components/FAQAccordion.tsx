"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, Filter } from 'lucide-react';

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
    tags: string[];
}

const FAQAccordion: React.FC = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'general', 'pricing', 'technical', 'support'];

    const faqs: FAQ[] = [
        {
            id: '1',
            question: 'What services does Link Innovations offer?',
            answer: 'We offer comprehensive technology solutions including web development, mobile app development, cloud solutions, cybersecurity services, data analytics, and consulting. Our team specializes in modern technologies like React, Node.js, AWS, and more.',
            category: 'general',
            tags: ['services', 'web development', 'mobile apps']
        },
        {
            id: '2',
            question: 'How much does a typical project cost?',
            answer: 'Project costs vary based on complexity, scope, and requirements. Our pricing ranges from $5,000 for simple websites to $100,000+ for enterprise solutions. We offer free consultations to provide accurate estimates tailored to your specific needs.',
            category: 'pricing',
            tags: ['cost', 'pricing', 'budget']
        },
        {
            id: '3',
            question: 'What is your development process?',
            answer: 'Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. We use agile methodologies with regular check-ins and iterative development to ensure your project meets expectations.',
            category: 'general',
            tags: ['process', 'methodology', 'development']
        },
        {
            id: '4',
            question: 'Do you provide ongoing support and maintenance?',
            answer: 'Yes, we offer comprehensive support and maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements. Our support plans range from basic to 24/7 premium support.',
            category: 'support',
            tags: ['support', 'maintenance', 'updates']
        },
        {
            id: '5',
            question: 'What technologies do you work with?',
            answer: 'We work with modern technologies including React, Next.js, Node.js, Python, AWS, Azure, MongoDB, PostgreSQL, and more. Our team stays updated with the latest trends and best practices in software development.',
            category: 'technical',
            tags: ['technologies', 'react', 'nodejs', 'aws']
        },
        {
            id: '6',
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout the development process.',
            category: 'general',
            tags: ['timeline', 'duration', 'schedule']
        },
        {
            id: '7',
            question: 'Do you work with startups or only established companies?',
            answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. We have flexible engagement models and can adapt our services to fit your budget and requirements, whether you\'re just starting out or scaling up.',
            category: 'general',
            tags: ['startups', 'enterprise', 'business size']
        },
        {
            id: '8',
            question: 'What makes Link Innovations different from other agencies?',
            answer: 'We combine technical expertise with business acumen, focus on long-term partnerships, use cutting-edge technologies, and provide transparent communication throughout the project. Our team has deep industry experience and a track record of successful deliveries.',
            category: 'general',
            tags: ['differentiation', 'advantages', 'expertise']
        },
        {
            id: '9',
            question: 'Do you offer custom software development?',
            answer: 'Yes, we specialize in custom software development tailored to your specific business needs. From web applications to mobile apps and enterprise software, we build solutions that scale with your business.',
            category: 'technical',
            tags: ['custom software', 'development', 'enterprise']
        },
        {
            id: '10',
            question: 'What is your refund policy?',
            answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied with our work within the first 30 days, we\'ll provide a full refund. We\'re committed to your success and will work with you to resolve any issues.',
            category: 'pricing',
            tags: ['refund', 'guarantee', 'satisfaction']
        }
    ];

    const filteredFAQs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'general': return '#3B82F6';
            case 'pricing': return '#10B981';
            case 'technical': return '#8B5CF6';
            case 'support': return '#F59E0B';
            default: return '#6B7280';
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Find answers to common questions about our services and processes
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    <AnimatePresence>
                        {filteredFAQs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                            >
                                <motion.button
                                    onClick={() => toggleItem(faq.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    whileHover={{ backgroundColor: '#F9FAFB' }}
                                >
                                    <div className="flex items-center space-x-4">
                                        <span
                                            className="px-3 py-1 text-xs font-medium rounded-full"
                                            style={{
                                                backgroundColor: `${getCategoryColor(faq.category)}20`,
                                                color: getCategoryColor(faq.category)
                                            }}
                                        >
                                            {faq.category.toUpperCase()}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {faq.question}
                                        </h3>
                                    </div>

                                    <motion.div
                                        animate={{ rotate: openItems.includes(faq.id) ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-shrink-0"
                                    >
                                        {openItems.includes(faq.id) ? (
                                            <Minus className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-gray-500" />
                                        )}
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {openItems.includes(faq.id) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4">
                                                <p className="text-gray-600 leading-relaxed mb-4">
                                                    {faq.answer}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {faq.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* No Results */}
                {filteredFAQs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-gray-400 mb-4">
                            <Search className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            No FAQs found
                        </h3>
                        <p className="text-gray-600">
                            Try adjusting your search terms or category filter
                        </p>
                    </motion.div>
                )}

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our team is here to help. Get in touch with us for personalized assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us
                            </motion.button>
                            <motion.button
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Schedule a Call
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQAccordion;

