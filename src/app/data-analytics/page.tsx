import React from 'react';
import { BarChart, Database, TrendingUp, Brain, CheckCircle, ArrowRight } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';

const DataAnalyticsPage = () => {
    const features = [
        {
            title: "Business Intelligence",
            description: "Transform raw data into actionable insights with powerful BI dashboards and reporting tools.",
            icon: <BarChart className="w-8 h-8" />
        },
        {
            title: "Data Visualization",
            description: "Create compelling visualizations and interactive dashboards that make complex data easy to understand.",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            title: "Machine Learning",
            description: "Implement AI and ML models to predict trends, automate decisions, and uncover hidden patterns.",
            icon: <Brain className="w-8 h-8" />
        },
        {
            title: "Data Warehousing",
            description: "Design and implement robust data warehouses for efficient data storage and retrieval.",
            icon: <Database className="w-8 h-8" />
        }
    ];

    const benefits = [
        {
            title: "Data-Driven Decisions",
            description: "Make informed business decisions based on real-time data and comprehensive analytics."
        },
        {
            title: "Improved Efficiency",
            description: "Identify bottlenecks and optimization opportunities to streamline business processes."
        },
        {
            title: "Predictive Insights",
            description: "Anticipate market trends and customer behavior with advanced predictive analytics."
        },
        {
            title: "Cost Reduction",
            description: "Optimize operations and reduce costs through data-driven process improvements."
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Data Assessment",
            description: "Evaluate your current data infrastructure and identify opportunities for improvement."
        },
        {
            step: 2,
            title: "Strategy Development",
            description: "Create a comprehensive data analytics strategy aligned with your business objectives."
        },
        {
            step: 3,
            title: "Implementation",
            description: "Deploy analytics tools, dashboards, and data pipelines to support your business needs."
        },
        {
            step: 4,
            title: "Training & Support",
            description: "Provide training and ongoing support to ensure your team can effectively use the analytics tools."
        }
    ];

    return (
        <>
            <HeroHeader />
            <ServicePageTemplate
                heroTitle="Transform Data into Business Intelligence"
                heroSubtitle="DATA ANALYTICS & BI"
                heroDescription="Unlock the power of your data with advanced analytics, machine learning, and business intelligence solutions."
                heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                heroVideoUrl="#"
                overviewTitle="Advanced Data Analytics Solutions"
                overviewDescription="Turn your data into a competitive advantage with our comprehensive analytics and business intelligence services."
                features={features}
                benefitsTitle="Why Data Analytics Matters"
                benefitsDescription="Data-driven organizations outperform their competitors by making informed decisions and optimizing operations."
                benefits={benefits}
                processTitle="Our Analytics Implementation Process"
                processDescription="We follow a structured approach to implement analytics solutions that deliver measurable business value."
                processSteps={processSteps}
                ctaTitle="Ready to Unlock Your Data's Potential?"
                ctaDescription="Let's discuss how data analytics can transform your business operations and drive growth."
                ctaButtonText="Start Analytics Project"
                ctaButtonLink="/contact"
                primaryColor="#8B5CF6"
                secondaryColor="#1F2937"
            />
            <FooterSection />
        </>
    );
};

export default DataAnalyticsPage;
