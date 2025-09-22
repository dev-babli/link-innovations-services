'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Cloud, Database, Shield, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications and websites that drive business growth',
    icon: <Code className="w-12 h-12 text-blue-600" />,
    features: ['React & Next.js', 'E-commerce Solutions', 'Responsive Design', 'SEO Optimization'],
    color: 'from-blue-500 to-blue-700',
    link: '/web-development'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: <Smartphone className="w-12 h-12 text-green-600" />,
    features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-green-500 to-green-700',
    link: '/mobile-app-development'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps solutions',
    icon: <Cloud className="w-12 h-12 text-orange-600" />,
    features: ['AWS & Azure', 'DevOps & CI/CD', 'Cloud Migration', 'Infrastructure as Code'],
    color: 'from-orange-500 to-orange-700',
    link: '/cloud-solutions'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable business insights',
    icon: <Database className="w-12 h-12 text-purple-600" />,
    features: ['Business Intelligence', 'Data Visualization', 'Machine Learning', 'Predictive Analytics'],
    color: 'from-purple-500 to-purple-700',
    link: '/data-analytics'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business',
    icon: <Shield className="w-12 h-12 text-red-600" />,
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
    color: 'from-red-500 to-red-700',
    link: '/cybersecurity'
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive digital transformation',
    icon: <Users className="w-12 h-12 text-indigo-600" />,
    features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'Change Management'],
    color: 'from-indigo-500 to-indigo-700',
    link: '/consulting'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function ServicesPage() {
  return (
    <>
      <HeroHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive IT solutions designed to transform your business and drive digital innovation.
              From web development to cloud solutions, we deliver excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg">
                  <Link href={service.link}>
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Link Innovations</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "Agile development process ensures quick turnaround times"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control in every project"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Experienced developers and designers with proven track records"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Scalable Solutions",
                description: "Future-proof applications that grow with your business"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}