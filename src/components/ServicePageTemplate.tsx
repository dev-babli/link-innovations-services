'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Play, CheckCircle, ArrowRight, Shield, Zap, Database, BarChart, Users, Target, TrendingUp, Lightbulb, Eye, Lock, AlertTriangle, Brain, Smartphone, Code, Globe, Cloud, MessageCircle, ShoppingCart, Plus, Minus, Maximize2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ServiceMagicBento from '@/components/ServiceMagicBento';

interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroVideoUrl?: string;

  // Overview Section
  overviewTitle: string;
  overviewDescription: string;
  features: ServiceFeature[];

  // Benefits Section
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: ServiceBenefit[];

  // Process Section
  processTitle: string;
  processDescription: string;
  processSteps: ServiceProcess[];

  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;

  // Service specific styling
  primaryColor?: string;
  secondaryColor?: string;
  serviceType?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  heroVideoUrl,
  overviewTitle,
  overviewDescription,
  features,
  benefitsTitle,
  benefitsDescription,
  benefits,
  processTitle,
  processDescription,
  processSteps,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  primaryColor = '#0078d4',
  secondaryColor = '#323130',
  serviceType = 'web-development'
}) => {
  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Section - WordPress Style */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* Background with light beam effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 via-yellow-300 to-transparent opacity-60"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 mb-8">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              <span className="text-sm font-medium text-white">{heroSubtitle}</span>
            </div>

            {/* Main Heading with gradient text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              {heroTitle}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              {heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={ctaButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat Now
              </Link>
              <Link
                href={ctaButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get A Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Magic Bento Grid */}
      <section className="w-full py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium text-white">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Delivering Excellence: Features & Benefits That Drive Success
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive technology solutions with interactive cards
            </p>
          </div>
          <ServiceMagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            serviceType={serviceType}
            features={features}
          />
        </div>
      </section>

      {/* Services Section - WordPress Design & Development */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 mb-6">
              <span className="text-sm font-medium text-pink-300">Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              help you find the best analysis for your business
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WordPress Website Design Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">WordPress Website Design</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We replicate designs with pixel-perfect precision. Prefer assistance? Choose from 100+ professional templates or let us create a custom design tailored to your needs!
              </p>

              {/* UI Mockup */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/30 rounded"></div>
                    <div className="w-2 h-2 bg-white/30 rounded"></div>
                    <div className="w-2 h-2 bg-white/30 rounded"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-8 bg-white/10 rounded flex items-center px-3">
                    <div className="w-4 h-4 bg-white/20 rounded mr-2"></div>
                    <div className="w-2 h-2 bg-white/40 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-white/10 rounded flex items-center justify-center">
                      <Plus className="w-6 h-6 text-white/60" />
                    </div>
                    <div className="h-16 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* WordPress Development Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">WordPress Development</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your website's needs may vary in complexity and functionality, but we're here to help.
              </p>

              {/* Code Editor Mockup */}
              <div className="bg-black/50 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Users final task</span>
                  <div className="flex space-x-2">
                    <Minus className="w-4 h-4 text-gray-400" />
                    <Maximize2 className="w-4 h-4 text-gray-400" />
                    <X className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-blue-400">import {ServiceMagicBento} from '@/components/ServiceMagicBento';</div>
                  <div className="text-orange-400">className="text-sm font-semibold text-[#605e5c] tracking-widest uppercase mb-4"</div>
                  <div className="text-gray-300">// Your website's needs may vary in complexity</div>
                  <div className="bg-orange-500/20 px-2 py-1 rounded text-white inline-block">Join Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Tabs and Workflow */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 mb-6">
              <span className="text-sm font-medium text-blue-300">Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {processTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {processDescription}
            </p>
          </div>

          {/* Process Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'].map((tab, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${index === 3
                  ? 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Workflow Visualization */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="space-y-4">
              {['Mobile app', 'Website UI Design', 'Wireframe', 'Dashboard Design'].map((item, index) => (
                <div key={index} className={`flex items-center p-4 rounded-lg ${index === 1 ? 'bg-white/10 border border-white/20' : 'bg-white/5'
                  }`}>
                  <div className="w-3 h-3 bg-white/40 rounded-full mr-4"></div>
                  <span className="text-white font-medium">{item}</span>
                  {index === 1 && <Play className="w-4 h-4 text-white ml-auto" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Components Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shopping Cart Component */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-5 h-5 text-white mr-2" />
                <h3 className="text-lg font-bold text-white">Your Cart</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Item</span>
                  <span className="text-white">$25.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Total</span>
                  <span className="text-white font-bold">$176.00</span>
                </div>
                <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                  CONFIRM ORDER
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* API Diagram */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-center h-32">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">
                    API
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/5 rounded-lg"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/5 rounded-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white/5 rounded-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/5 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Generic UI Component */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="w-full h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white/60" />
                </div>
                <div className="w-full h-16 bg-white/10 rounded-lg"></div>
                <div className="w-full h-16 bg-white/10 rounded-lg"></div>
                <div className="w-full h-16 bg-white/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-black py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            <Link href={ctaButtonLink}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {ctaButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
