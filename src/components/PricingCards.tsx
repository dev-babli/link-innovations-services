"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight } from 'lucide-react';

interface PricingPlan {
    id: string;
    name: string;
    price: number;
    period: string;
    description: string;
    features: string[];
    limitations: string[];
    popular?: boolean;
    color: string;
    cta: string;
}

const PricingCards: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const pricingPlans: PricingPlan[] = [
        {
            id: 'starter',
            name: 'Starter',
            price: isAnnual ? 99 : 119,
            period: 'month',
            description: 'Perfect for small businesses getting started',
            features: [
                'Up to 5 pages website',
                'Responsive design',
                'Basic SEO optimization',
                'Email support',
                'SSL certificate',
                '1 month free hosting'
            ],
            limitations: [
                'No e-commerce features',
                'Limited customization',
                'Basic analytics'
            ],
            color: '#3B82F6',
            cta: 'Get Started'
        },
        {
            id: 'professional',
            name: 'Professional',
            price: isAnnual ? 199 : 249,
            period: 'month',
            description: 'Ideal for growing businesses with advanced needs',
            features: [
                'Up to 20 pages website',
                'Custom design & branding',
                'Advanced SEO optimization',
                'Priority support',
                'E-commerce integration',
                'Advanced analytics',
                'Content management system',
                'Social media integration'
            ],
            limitations: [
                'Limited third-party integrations',
                'Standard performance optimization'
            ],
            popular: true,
            color: '#10B981',
            cta: 'Most Popular'
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: isAnnual ? 499 : 599,
            period: 'month',
            description: 'Complete solution for large organizations',
            features: [
                'Unlimited pages',
                'Custom development',
                'Advanced security features',
                '24/7 dedicated support',
                'Multi-language support',
                'API integrations',
                'Performance optimization',
                'Backup & recovery',
                'Training & documentation',
                'SLA guarantee'
            ],
            limitations: [],
            color: '#8B5CF6',
            cta: 'Contact Sales'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Choose Your Plan
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Flexible pricing options to fit your business needs
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative w-16 h-8 rounded-full transition-colors ${isAnnual ? 'bg-green-500' : 'bg-gray-300'
                                }`}
                        >
                            <motion.div
                                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                                animate={{ x: isAnnual ? 32 : 4 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                            Annual
                        </span>
                        {isAnnual && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                Save 20%
                            </motion.span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                                }`}
                            whileHover={{ y: -10 }}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-sm font-medium">Most Popular</span>
                                    </div>
                                </div>
                            )}

                            <div className="p-8">
                                {/* Plan Header */}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-5xl font-bold text-gray-900">
                                            ${plan.price}
                                        </span>
                                        <span className="text-gray-500 ml-2">
                                            /{plan.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-4 mb-8">
                                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                                    {plan.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: featureIndex * 0.05 }}
                                            className="flex items-center space-x-3"
                                        >
                                            <div
                                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${plan.color}20` }}
                                            >
                                                <Check
                                                    className="w-3 h-3"
                                                    style={{ color: plan.color }}
                                                />
                                            </div>
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Limitations */}
                                {plan.limitations.length > 0 && (
                                    <div className="space-y-2 mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                                        {plan.limitations.map((limitation, limitationIndex) => (
                                            <div key={limitationIndex} className="flex items-center space-x-3">
                                                <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                <span className="text-gray-500 text-sm">{limitation}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* CTA Button */}
                                <motion.button
                                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 ${plan.popular ? 'bg-green-500 hover:bg-green-600' : ''
                                        }`}
                                    style={{
                                        backgroundColor: plan.popular ? undefined : plan.color
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{plan.cta}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        All plans include 30-day money-back guarantee
                    </p>
                    <div className="flex justify-center space-x-8 text-sm text-gray-500">
                        <span>✓ No setup fees</span>
                        <span>✓ Cancel anytime</span>
                        <span>✓ 24/7 support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCards;

