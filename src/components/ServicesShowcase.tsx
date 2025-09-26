"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Code2,
    Smartphone,
    Cloud,
    Shield,
    Database,
    Wand2,
    Workflow,
} from "lucide-react";

const services = [
    {
        title: "Custom Software Development",
        desc: "We design and develop software solutions specifically for your business needs. Our team ensures scalability, performance, and security for every project. From internal tools to enterprise platforms, we deliver software that drives results.",
        icon: Code2,
        slug: "custom-software-development",
    },
    {
        title: "Mobile App Development",
        desc: "We create mobile applications that are engaging, fast, and reliable. Whether it's native iOS/Android or cross-platform solutions, we focus on excellent UX and performance. Your app will be ready to reach users on any device seamlessly.",
        icon: Smartphone,
        slug: "mobile-app-development",
    },
    {
        title: "Web Development",
        desc: "Our web development services cover everything from responsive front-end interfaces to robust back-end systems. We build websites and web apps that are fast, secure, and easy to maintain. Using modern frameworks, we ensure a seamless user experience.",
        icon: Cloud,
        slug: "web-development",
    },
    {
        title: "Cloud & DevOps",
        desc: "We help businesses migrate to the cloud and optimize infrastructure. With CI/CD pipelines, automated deployments, and observability tools, your applications remain scalable and reliable. Our DevOps approach ensures faster delivery and higher uptime.",
        icon: Workflow,
        slug: "cloud-devops",
    },
    {
        title: "AI & Machine Learning",
        desc: "We integrate AI and machine learning to unlock the full potential of your data. From predictive analytics to intelligent chatbots and computer vision applications, our solutions enhance decision-making and efficiency. Make your business smarter with AI-driven insights.",
        icon: Wand2,
        slug: "ai-machine-learning",
    },
    {
        title: "Data Engineering & Analytics",
        desc: "Our data engineering and analytics services transform raw data into actionable insights. We build robust pipelines, warehouses, and dashboards that help you make informed decisions. Understand trends, monitor KPIs, and gain a competitive edge with data-driven strategies.",
        icon: Database,
        slug: "data-engineering-analytics",
    },
];

export default function ServicesShowcase() {
    const [selectedService, setSelectedService] = useState(services[0]);

    return (
        <section className="py-20 bg-black-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Interactive <span className="text-purple">Services</span> Showcase
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our comprehensive range of development services. Click on any service to learn more about our expertise and approach.
                    </p>
                </div>

                {/* Services Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-full">
                        {services.map((service) => (
                            <motion.div
                                key={service.title}
                                onClick={() => setSelectedService(service)}
                                className={`cursor-pointer rounded-xl p-4 flex flex-col items-start gap-3 transition transform duration-300
            ${selectedService.title === service.title
                                        ? "bg-purple-100 shadow-lg scale-105 border-2 border-purple-400"
                                        : "bg-gradient-to-r from-slate-800 via-gray-700 to-slate-800 shadow-md hover:shadow-xl hover:scale-105 border border-gray-600"
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <service.icon className="h-8 w-8 text-purple-400" />
                                <h3 className="text-base font-semibold text-white">
                                    {service.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Selected Service Details */}
                    <div className="flex items-start justify-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedService.title}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-lg bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-gray-700 shadow-lg flex flex-col justify-start min-h-[320px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <selectedService.icon className="h-10 w-10 text-purple-400" />
                                    <h2 className="text-2xl font-bold text-white">
                                        {selectedService.title}
                                    </h2>
                                </div>
                                <p className="text-gray-300 text-base leading-relaxed mb-6">
                                    {selectedService.desc}
                                </p>

                                {/* Learn More Button */}
                                <Link href={`/services/${selectedService.slug}`}>
                                    <button className="mt-auto px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
                                        Learn More →
                                    </button>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
