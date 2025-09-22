import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';

const CybersecurityPage = () => {
    const features = [
        {
            title: "Security Audits",
            description: "Comprehensive security assessments to identify vulnerabilities and compliance gaps in your systems.",
            icon: <Eye className="w-8 h-8" />
        },
        {
            title: "Penetration Testing",
            description: "Simulated cyber attacks to test your security defenses and identify potential breach points.",
            icon: <Shield className="w-8 h-8" />
        },
        {
            title: "Compliance Management",
            description: "Ensure compliance with industry standards like GDPR, HIPAA, SOX, and other regulatory requirements.",
            icon: <Lock className="w-8 h-8" />
        },
        {
            title: "Incident Response",
            description: "Rapid response and recovery services to minimize damage from security incidents and breaches.",
            icon: <AlertTriangle className="w-8 h-8" />
        }
    ];

    const benefits = [
        {
            title: "Protect Your Assets",
            description: "Safeguard your sensitive data, intellectual property, and business operations from cyber threats."
        },
        {
            title: "Regulatory Compliance",
            description: "Meet industry compliance requirements and avoid costly penalties and legal issues."
        },
        {
            title: "Business Continuity",
            description: "Ensure uninterrupted business operations with robust security measures and incident response plans."
        },
        {
            title: "Customer Trust",
            description: "Build customer confidence by demonstrating commitment to data protection and security."
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Security Assessment",
            description: "Evaluate your current security posture and identify potential vulnerabilities and risks."
        },
        {
            step: 2,
            title: "Strategy Development",
            description: "Create a comprehensive cybersecurity strategy tailored to your business needs and risk profile."
        },
        {
            step: 3,
            title: "Implementation",
            description: "Deploy security tools, policies, and procedures to protect your digital assets."
        },
        {
            step: 4,
            title: "Monitoring & Maintenance",
            description: "Continuous monitoring, updates, and maintenance to ensure ongoing protection."
        }
    ];

    return (
        <>
            <HeroHeader />
            <ServicePageTemplate
                heroTitle="Secure Your Digital Future with Advanced Cybersecurity"
                heroSubtitle="CYBERSECURITY SERVICES"
                heroDescription="Protect your business from evolving cyber threats with comprehensive security solutions and expert guidance."
                heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center"
                heroVideoUrl="#"
                overviewTitle="Comprehensive Cybersecurity Solutions"
                overviewDescription="From security audits to incident response, we provide end-to-end cybersecurity services to protect your business."
                features={features}
                benefitsTitle="Why Cybersecurity is Critical"
                benefitsDescription="In today's digital landscape, robust cybersecurity is essential for business survival and growth."
                benefits={benefits}
                processTitle="Our Security Implementation Process"
                processDescription="We follow industry best practices to implement comprehensive security measures that protect your business."
                processSteps={processSteps}
                ctaTitle="Ready to Secure Your Business?"
                ctaDescription="Let's discuss your security needs and create a comprehensive protection strategy for your organization."
                ctaButtonText="Get Security Assessment"
                ctaButtonLink="/contact"
                primaryColor="#EF4444"
                secondaryColor="#1F2937"
            />
            <FooterSection />
        </>
    );
};

export default CybersecurityPage;
