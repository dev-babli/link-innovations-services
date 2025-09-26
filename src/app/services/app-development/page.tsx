import React from 'react';
import { Smartphone, Code, Zap, Shield, Users, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';

const MobileAppDevelopmentPage = () => {
  const features = [
    {
      title: "Native iOS & Android Apps",
      description: "High-performance native applications built with Swift, Kotlin, and Java for optimal user experience on each platform.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "Cross-Platform Development",
      description: "React Native and Flutter apps that work seamlessly across iOS and Android with a single codebase.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, user-friendly interfaces designed following platform guidelines and best practices for maximum engagement.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Backend Integration",
      description: "Seamless integration with APIs, databases, and cloud services to power your mobile application.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "App Store Optimization",
      description: "Complete ASO strategy including keyword optimization, metadata, and store listing optimization for better visibility.",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Security & Compliance",
      description: "Built-in security measures, data encryption, and compliance with app store guidelines and privacy regulations.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: "Reach More Customers",
      description: "Mobile apps provide direct access to your customers' pockets, increasing engagement and brand loyalty."
    },
    {
      title: "Enhanced User Experience",
      description: "Native mobile interfaces offer superior performance and user experience compared to web applications."
    },
    {
      title: "Offline Functionality",
      description: "Mobile apps can work offline, providing continuous access to core features even without internet connectivity."
    },
    {
      title: "Push Notifications",
      description: "Engage users with targeted push notifications to drive retention and increase app usage."
    },
    {
      title: "Device Integration",
      description: "Leverage device features like camera, GPS, accelerometer, and biometric authentication for enhanced functionality."
    },
    {
      title: "Revenue Generation",
      description: "Multiple monetization strategies including in-app purchases, subscriptions, and advertising integration."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Strategy & Planning",
      description: "Define app objectives, target audience, platform selection, and create a detailed project roadmap."
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Create wireframes, user flows, and high-fidelity designs that align with your brand and user needs."
    },
    {
      step: 3,
      title: "Development",
      description: "Build your mobile app using industry best practices, modern frameworks, and agile development methodology."
    },
    {
      step: 4,
      title: "Testing & QA",
      description: "Comprehensive testing across devices, operating systems, and user scenarios to ensure quality and reliability."
    },
    {
      step: 5,
      title: "App Store Submission",
      description: "Prepare and submit your app to Apple App Store and Google Play Store with optimized listings."
    },
    {
      step: 6,
      title: "Launch & Maintenance",
      description: "Monitor performance, gather user feedback, and provide ongoing updates and feature enhancements."
    }
  ];

  return (
    <>
      <HeroHeader />
      <ServicePageTemplate
        heroTitle="Build Powerful Mobile Apps That Drive Business Growth"
        heroSubtitle="MOBILE APP DEVELOPMENT"
        heroDescription="Create engaging, high-performance mobile applications for iOS and Android that connect with your customers and drive business success."
        heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center"
        heroVideoUrl="#"
        overviewTitle="Complete Mobile App Development Solutions"
        overviewDescription="From concept to app store, we deliver end-to-end mobile application development services that bring your ideas to life."
        features={features}
        benefitsTitle="Why Mobile Apps Are Essential for Your Business"
        benefitsDescription="Mobile applications provide unique opportunities to engage customers and grow your business in the digital age."
        benefits={benefits}
        processTitle="Our Mobile App Development Process"
        processDescription="We follow a proven methodology to deliver successful mobile applications that meet your business objectives."
        processSteps={processSteps}
        ctaTitle="Ready to Launch Your Mobile App?"
        ctaDescription="Let's discuss your mobile app idea and create a strategy to bring it to market successfully."
        ctaButtonText="Start Your App Project"
        ctaButtonLink="/contact"
        primaryColor="#34C759"
        secondaryColor="#1C1C1E"
        serviceType="app-development"
      />
      <FooterSection />
    </>
  );
};

export default MobileAppDevelopmentPage;
