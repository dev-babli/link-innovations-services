import React from 'react';
import { Code, Globe, Smartphone, Database, Cloud, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';

const WebDevelopmentPage = () => {
  const features = [
    {
      title: "Custom Web Applications",
      description: "Tailored web solutions built with modern frameworks like React, Next.js, and Vue.js to meet your specific business requirements.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Responsive Design",
      description: "Mobile-first, responsive designs that work seamlessly across all devices and screen sizes for optimal user experience.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and customer relationship tools.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Database Integration",
      description: "Robust database design and integration with PostgreSQL, MongoDB, and other modern database systems.",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Cloud Deployment",
      description: "Seamless deployment to cloud platforms like AWS, Vercel, and Netlify with CI/CD pipelines for continuous delivery.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Security & Performance",
      description: "Built-in security measures, performance optimization, and SEO best practices for maximum efficiency and protection.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: "Increased Online Presence",
      description: "Establish a strong digital footprint with professional, high-converting websites that attract and engage customers."
    },
    {
      title: "Scalable Solutions",
      description: "Future-proof applications that grow with your business, handling increased traffic and feature requirements."
    },
    {
      title: "Cost-Effective Development",
      description: "Modern development practices and reusable components reduce development time and maintenance costs."
    },
    {
      title: "24/7 Availability",
      description: "Your web presence works around the clock, providing customers with constant access to your services and products."
    },
    {
      title: "Analytics & Insights",
      description: "Comprehensive analytics integration to track user behavior, conversion rates, and business performance."
    },
    {
      title: "Mobile Optimization",
      description: "Mobile-first approach ensures your website performs excellently on smartphones and tablets, reaching more customers."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your business requirements, target audience, and goals to create a comprehensive project roadmap."
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the user experience and design."
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Build your application using modern technologies with continuous testing and quality assurance."
    },
    {
      step: 4,
      title: "Deployment & Launch",
      description: "Deploy your application to production with proper monitoring, security measures, and performance optimization."
    },
    {
      step: 5,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to ensure your application runs smoothly."
    },
    {
      step: 6,
      title: "Growth & Optimization",
      description: "Continuous improvement based on user feedback and analytics to enhance performance and user experience."
    }
  ];

  return (
    <>
      <HeroHeader />
      <ServicePageTemplate
        heroTitle="Transform Your Digital Presence with Custom Web Development"
        heroSubtitle="WEB DEVELOPMENT SERVICES"
        heroDescription="Build powerful, scalable web applications that drive business growth and deliver exceptional user experiences across all devices."
        heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
        heroVideoUrl="#"
        overviewTitle="Comprehensive Web Development Solutions"
        overviewDescription="From simple websites to complex web applications, we deliver cutting-edge solutions that combine beautiful design with powerful functionality."
        features={features}
        benefitsTitle="Why Choose Our Web Development Services"
        benefitsDescription="Our web development expertise helps businesses establish a strong online presence and achieve their digital goals."
        benefits={benefits}
        processTitle="Our Web Development Process"
        processDescription="We follow a proven methodology to deliver high-quality web applications on time and within budget."
        processSteps={processSteps}
        ctaTitle="Ready to Build Your Next Web Application?"
        ctaDescription="Let's discuss your project requirements and create a custom web solution that drives your business forward."
        ctaButtonText="Start Your Project"
        ctaButtonLink="/contact"
        primaryColor="#0078d4"
        secondaryColor="#323130"
      />
      <FooterSection />
    </>
  );
};

export default WebDevelopmentPage;
