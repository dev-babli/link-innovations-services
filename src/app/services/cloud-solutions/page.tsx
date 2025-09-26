import React from 'react';
import { Cloud, Server, Shield, Zap, Database, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';

const CloudSolutionsPage = () => {
  const features = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to AWS, Azure, or Google Cloud with minimal downtime and risk.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using Terraform, CloudFormation, and other IaC tools.",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "DevOps & CI/CD",
      description: "Complete DevOps implementation with automated pipelines, containerization, and continuous deployment strategies.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Database Solutions",
      description: "Managed database services, data migration, backup strategies, and performance optimization for your data needs.",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Security & Compliance",
      description: "Comprehensive cloud security implementation including access controls, encryption, and compliance frameworks.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Monitoring & Analytics",
      description: "Advanced monitoring, logging, and analytics solutions to optimize performance and ensure reliability.",
      icon: <BarChart className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 40% through right-sizing, auto-scaling, and pay-as-you-go pricing models."
    },
    {
      title: "Scalability & Flexibility",
      description: "Scale your infrastructure up or down based on demand, ensuring optimal performance and cost efficiency."
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security features including encryption, access controls, and compliance with industry standards."
    },
    {
      title: "Improved Reliability",
      description: "99.9% uptime guarantees with redundant systems, automated backups, and disaster recovery solutions."
    },
    {
      title: "Faster Time to Market",
      description: "Accelerate development and deployment cycles with cloud-native tools and automated processes."
    },
    {
      title: "Global Reach",
      description: "Deploy your applications globally with edge computing and CDN solutions for optimal user experience worldwide."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Assessment & Strategy",
      description: "Evaluate your current infrastructure, identify migration opportunities, and create a comprehensive cloud strategy."
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Design scalable, secure cloud architecture that meets your performance, security, and compliance requirements."
    },
    {
      step: 3,
      title: "Migration Planning",
      description: "Create detailed migration plans with risk mitigation strategies and minimal business disruption."
    },
    {
      step: 4,
      title: "Implementation",
      description: "Execute the migration with automated tools and best practices to ensure smooth transition to the cloud."
    },
    {
      step: 5,
      title: "Optimization",
      description: "Fine-tune your cloud infrastructure for performance, cost, and security optimization."
    },
    {
      step: 6,
      title: "Ongoing Management",
      description: "Provide continuous monitoring, maintenance, and optimization to ensure optimal cloud performance."
    }
  ];

  return (
    <>
      <HeroHeader />
      <ServicePageTemplate
        heroTitle="Accelerate Your Business with Cloud Solutions"
        heroSubtitle="CLOUD SOLUTIONS & DEVOPS"
        heroDescription="Transform your infrastructure with scalable cloud solutions that enhance performance, reduce costs, and drive innovation."
        heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
        heroVideoUrl="#"
        overviewTitle="Comprehensive Cloud & DevOps Services"
        overviewDescription="From cloud migration to DevOps implementation, we help businesses leverage cloud technology for competitive advantage."
        features={features}
        benefitsTitle="Why Choose Cloud Solutions for Your Business"
        benefitsDescription="Cloud technology provides numerous advantages that can transform your business operations and drive growth."
        benefits={benefits}
        processTitle="Our Cloud Implementation Process"
        processDescription="We follow industry best practices to ensure successful cloud adoption and optimization."
        processSteps={processSteps}
        ctaTitle="Ready to Move to the Cloud?"
        ctaDescription="Let's discuss your cloud strategy and create a plan to modernize your infrastructure for better performance and cost savings."
        ctaButtonText="Start Cloud Migration"
        ctaButtonLink="/contact"
        primaryColor="#FF6B35"
        secondaryColor="#1A1A1A"
        serviceType="cloud-solutions"
      />
      <FooterSection />
    </>
  );
};

export default CloudSolutionsPage;
