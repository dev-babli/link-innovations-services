import React from 'react';
import { Users, Target, TrendingUp, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';

const ConsultingPage = () => {
    const features = [
        {
            title: "Digital Strategy",
            description: "Develop comprehensive digital transformation strategies that align with your business objectives and market opportunities.",
            icon: <Target className="w-8 h-8" />
        },
        {
            title: "Technology Assessment",
            description: "Evaluate your current technology stack and identify opportunities for improvement and optimization.",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            title: "Process Optimization",
            description: "Streamline business processes and workflows to improve efficiency and reduce operational costs.",
            icon: <Lightbulb className="w-8 h-8" />
        },
        {
            title: "Change Management",
            description: "Guide your organization through digital transformation with effective change management strategies.",
            icon: <Users className="w-8 h-8" />
        }
    ];

    const benefits = [
        {
            title: "Strategic Guidance",
            description: "Expert advice and strategic planning to navigate complex technology decisions and digital transformation."
        },
        {
            title: "Cost Optimization",
            description: "Identify cost-saving opportunities and optimize your technology investments for maximum ROI."
        },
        {
            title: "Risk Mitigation",
            description: "Minimize technology risks and ensure successful project delivery with expert guidance and oversight."
        },
        {
            title: "Competitive Advantage",
            description: "Leverage technology to gain competitive advantages and drive business growth in the digital economy."
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Discovery & Analysis",
            description: "Understand your business goals, current state, and challenges through comprehensive analysis."
        },
        {
            step: 2,
            title: "Strategy Development",
            description: "Create a tailored digital strategy and roadmap aligned with your business objectives."
        },
        {
            step: 3,
            title: "Implementation Planning",
            description: "Develop detailed implementation plans with timelines, resources, and success metrics."
        },
        {
            step: 4,
            title: "Execution & Support",
            description: "Provide ongoing support and guidance throughout the implementation and transformation process."
        }
    ];

    return (
        <>
            <HeroHeader />
            <ServicePageTemplate
                heroTitle="Strategic IT Consulting for Digital Transformation"
                heroSubtitle="IT CONSULTING SERVICES"
                heroDescription="Navigate the complex world of technology with expert consulting services that drive digital transformation and business growth."
                heroImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center"
                heroVideoUrl="#"
                overviewTitle="Strategic IT Consulting Solutions"
                overviewDescription="From digital strategy to change management, we provide comprehensive consulting services to guide your technology journey."
                features={features}
                benefitsTitle="Why Choose Our Consulting Services"
                benefitsDescription="Our experienced consultants help organizations make informed technology decisions and achieve their digital transformation goals."
                benefits={benefits}
                processTitle="Our Consulting Approach"
                processDescription="We follow a proven methodology to deliver strategic guidance and practical solutions that drive business success."
                processSteps={processSteps}
                ctaTitle="Ready to Transform Your Business?"
                ctaDescription="Let's discuss your digital transformation goals and create a strategic plan to achieve them."
                ctaButtonText="Schedule Consultation"
                ctaButtonLink="/contact"
                primaryColor="#6366F1"
                secondaryColor="#1F2937"
            />
            <FooterSection />
        </>
    );
};

export default ConsultingPage;
