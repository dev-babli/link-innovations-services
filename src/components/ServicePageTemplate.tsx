'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Play, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  secondaryColor = '#323130'
}) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 0% 0%, ${primaryColor}40 0%, ${primaryColor}30 15%, rgba(3, 45, 75, 0) 30%), radial-gradient(circle at 100% 0%, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 15%, rgba(3, 45, 75, 0) 40%), radial-gradient(circle at 15% 100%, rgba(139, 92, 246, 0.4) 0%, ${primaryColor}30 20%, rgba(3, 45, 75, 0) 50%)`,
          backgroundColor: '#032d4b',
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left text-white">
              <p className="text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                {heroSubtitle}
              </p>
              <h1 className="font-semibold text-[48px] leading-[56px] tracking-tight mb-6">
                {heroTitle}
              </h1>
              <p className="text-xl max-w-lg mx-auto lg:mx-0 mb-8">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href={ctaButtonLink}
                  className="inline-flex items-center justify-center bg-[#323130] text-white font-semibold py-2 px-5 rounded-[2px] transition-colors hover:bg-opacity-90"
                  style={{ lineHeight: '1.5rem', minHeight: '40px' }}
                >
                  {ctaButtonText}
                </Link>
                <Link
                  href="#overview"
                  className="inline-flex items-center justify-center border border-white text-white font-semibold py-2 px-5 rounded-[2px] transition-colors hover:bg-white hover:text-[#323130]"
                  style={{ lineHeight: '1.5rem', minHeight: '40px' }}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Column: Image/Video */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="p-1.5 bg-white/80 rounded-xl shadow-2xl backdrop-blur-sm">
                <div className="relative group">
                  <Image
                    src={heroImage}
                    alt={heroTitle}
                    width={568}
                    height={320}
                    className="rounded-lg"
                    priority
                  />
                  {heroVideoUrl && (
                    <Link
                      href={heroVideoUrl}
                      aria-label="Play background video"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex items-center justify-center w-14 h-14 bg-black/40 border border-white/50 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
                        <Play className="h-7 w-7 fill-white text-white ml-1" />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#605e5c] tracking-widest uppercase mb-4">
              Overview
            </p>
            <h2 className="text-4xl font-semibold text-[#323130] tracking-tight mb-4">
              {overviewTitle}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-[#605e5c] leading-7">
              {overviewDescription}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {feature.icon && (
                    <div className="mb-4 text-[#0078d4]">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-[#323130] mb-2">{feature.title}</h3>
                  <p className="text-base text-[#605e5c]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#323130] tracking-tight mb-4">
              {benefitsTitle}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-[#605e5c] leading-7">
              {benefitsDescription}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#0078d4] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#323130] mb-2">{benefit.title}</h3>
                  <p className="text-[#605e5c]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#323130] tracking-tight mb-4">
              {processTitle}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-[#605e5c] leading-7">
              {processDescription}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0078d4] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#323130] mb-2">{step.title}</h3>
                <p className="text-[#605e5c]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0078d4] py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            {ctaTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-white/90 leading-7 mb-8">
            {ctaDescription}
          </p>
          <Link href={ctaButtonLink}>
            <Button size="lg" className="bg-white text-[#0078d4] hover:bg-gray-100">
              {ctaButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
