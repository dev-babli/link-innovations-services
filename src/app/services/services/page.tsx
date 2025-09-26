"use client";

import {
  Rocket,
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Wand2,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TrustedCarousel from "./TrustedCarousel";
import VideoDemoSection from "./VideoDemoSection";
import CaseStudiesSection from "./CaseStudies";
import AchievementsSection from "./AchevementsSection";
import { motion, AnimatePresence } from "framer-motion";
import EngagementModelsSection from "./EngagementModels";
import WhyChooseUs from "./WhyChooseUs";
import { useState } from "react";
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

export default function ServicesPageClient() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <main className="relative min-h-screen w-full text-gray-800 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-pink-50">
      {/* Hero Section */}
      <motion.section
        className="mx-auto max-w-4xl text-center py-20 px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Build and ship software on a single, collaborative platform
        </motion.h1>

        <p className="mt-4 text-base sm:text-lg text-gray-300">
          Join the world’s most widely adopted AI-powered developer platform.
        </p>
      </motion.section>

      {/* Services Showcase */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Services List */}
          {/* Left: Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-full">
            {services.map((service) => (
              <motion.div
                key={service.title}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer rounded-xl p-4 flex flex-col items-start gap-3 transition transform duration-300
            ${selectedService.title === service.title
                    ? "bg-indigo-100 shadow-lg scale-105"
                    : "bg-gradient-to-r from-blue-200 via-gray-300 to-gray-200 shadow-md hover:shadow-xl hover:scale-105"
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="h-8 w-8 text-indigo-600" />
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
                className="w-full max-w-lg bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-md flex flex-col justify-start min-h-[320px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <selectedService.icon className="h-10 w-10 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {selectedService.desc}
                </p>

                {/* Learn More Button */}
                <Link href={`/services/${selectedService.slug}`}>
                  <button className="mt-auto px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                    Learn More →
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* Other Sections */}
      <TrustedCarousel />
      <VideoDemoSection />
      <CaseStudiesSection />
      <EngagementModelsSection />
      <WhyChooseUs />
      <AchievementsSection />
    </main>
  );
}
