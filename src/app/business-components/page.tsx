"use client";

import React, { useState } from 'react';
import ServiceShowcase from '@/components/ServiceShowcase';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PricingCards from '@/components/PricingCards';
import ContactForm from '@/components/ContactForm';
import TeamMembers from '@/components/TeamMembers';
import ProjectGallery from '@/components/ProjectGallery';
import StatsCounter from '@/components/StatsCounter';
import FeatureGrid from '@/components/FeatureGrid';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';

export default function BusinessComponentsPage() {
    const [activeComponent, setActiveComponent] = useState('services');

    const components = [
        { id: 'services', name: 'Service Showcase', icon: '🛠️', description: 'Interactive service presentation' },
        { id: 'testimonials', name: 'Testimonial Carousel', icon: '💬', description: 'Client feedback display' },
        { id: 'pricing', name: 'Pricing Cards', icon: '💰', description: 'Service pricing plans' },
        { id: 'contact', name: 'Contact Form', icon: '📝', description: 'Multi-step contact form' },
        { id: 'team', name: 'Team Members', icon: '👥', description: 'Team showcase with social links' },
        { id: 'portfolio', name: 'Project Gallery', icon: '🎨', description: 'Portfolio with filtering' },
        { id: 'stats', name: 'Statistics Counter', icon: '📊', description: 'Animated number counters' },
        { id: 'features', name: 'Feature Grid', icon: '⭐', description: 'Interactive feature showcase' },
        { id: 'cta', name: 'Call-to-Action', icon: '🚀', description: 'Lead generation section' },
        { id: 'faq', name: 'FAQ Accordion', icon: '❓', description: 'Searchable FAQ section' }
    ];

    const renderComponent = () => {
        switch (activeComponent) {
            case 'services':
                return <ServiceShowcase />;
            case 'testimonials':
                return <TestimonialCarousel />;
            case 'pricing':
                return <PricingCards />;
            case 'contact':
                return <ContactForm />;
            case 'team':
                return <TeamMembers />;
            case 'portfolio':
                return <ProjectGallery />;
            case 'stats':
                return <StatsCounter />;
            case 'features':
                return <FeatureGrid />;
            case 'cta':
                return <CTASection />;
            case 'faq':
                return <FAQAccordion />;
            default:
                return <ServiceShowcase />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Business Components Showcase
                    </h1>
                    <p className="text-xl text-gray-600">
                        Practical, ready-to-use components for your Link Innovations website
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Component Navigation */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Components
                            </h3>
                            <div className="space-y-2">
                                {components.map((component) => (
                                    <button
                                        key={component.id}
                                        onClick={() => setActiveComponent(component.id)}
                                        className={`w-full text-left p-3 rounded-lg transition-all ${activeComponent === component.id
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-xl">{component.icon}</span>
                                            <div>
                                                <div className="font-medium">{component.name}</div>
                                                <div className="text-xs opacity-75">{component.description}</div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Component Display */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {components.find(c => c.id === activeComponent)?.name}
                                </h2>
                                <p className="text-gray-600">
                                    {components.find(c => c.id === activeComponent)?.description}
                                </p>
                            </div>

                            <div className="p-0">
                                {renderComponent()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Usage Instructions */}
                <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        How to Use These Components
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                🚀 Quick Start
                            </h3>
                            <ol className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                                    <span>Import the component you want to use</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                                    <span>Add it to your page or layout</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                                    <span>Customize the content and styling</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                                    <span>Deploy and enjoy the results!</span>
                                </li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                💡 Pro Tips
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>All components are fully responsive and mobile-optimized</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Built with TypeScript for type safety</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Uses Framer Motion for smooth animations</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>Fully customizable colors and styling</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>SEO-friendly and accessible</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                        <h4 className="text-lg font-semibold text-blue-900 mb-2">
                            Example Usage:
                        </h4>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                            {`import ServiceShowcase from '@/components/ServiceShowcase';

export default function HomePage() {
  return (
    <div>
      <ServiceShowcase />
    </div>
  );
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

