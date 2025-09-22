'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ChevronRight, ChevronUp, ChevronDown, Star } from 'lucide-react';
import { FooterSection } from '@/components/FooterSection';
import { HeroHeader } from '@/components/header';
import { cn } from '@/lib/utils';

// Hero Section Component
const HeroSection = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(0, 188, 242, 0.4) 0%, rgba(0, 120, 212, 0.3) 15%, rgba(3, 45, 75, 0) 30%), radial-gradient(circle at 100% 0%, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 15%, rgba(3, 45, 75, 0) 40%), radial-gradient(circle at 15% 100%, rgba(139, 92, 246, 0.4) 0%, rgba(0, 120, 212, 0.3) 20%, rgba(3, 45, 75, 0) 50%)',
                backgroundColor: '#032d4b',
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left text-white">
                        <p className="text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                            WEB DEVELOPMENT SERVICES
                        </p>
                        <h1 className="font-semibold text-[48px] leading-[56px] tracking-tight mb-6">
                            Transform Your Digital Presence with Custom Web Development
                        </h1>
                        <p className="text-xl max-w-lg mx-auto lg:mx-0 mb-8">
                            Build powerful, scalable web applications that drive business growth and deliver exceptional user experiences across all devices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-[#323130] text-white font-semibold py-2 px-5 rounded-[2px] transition-colors hover:bg-opacity-90"
                                style={{ lineHeight: '1.5rem', minHeight: '40px' }}
                            >
                                Start Your Project
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
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="p-1.5 bg-white/80 rounded-xl shadow-2xl backdrop-blur-sm">
                            <div className="relative group">
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
                                    alt="Web Development Services"
                                    width={568}
                                    height={320}
                                    className="rounded-lg"
                                    priority
                                />
                                <Link
                                    href="#"
                                    aria-label="Play background video"
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="flex items-center justify-center w-14 h-14 bg-black/40 border border-white/50 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
                                        <Play className="h-7 w-7 fill-white text-white ml-1" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Solutions Section Component
const SolutionsSection = () => {
    const [openItem, setOpenItem] = useState('custom-apps');

    const solutionsData = [
        {
            id: "custom-apps",
            title: "Custom Web Applications",
            description: "Tailored web solutions built with modern frameworks like React, Next.js, and Vue.js to meet your specific business requirements.",
            link: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center",
            alt: "Custom web application development",
        },
        {
            id: "responsive-design",
            title: "Responsive Design",
            description: "Mobile-first, responsive designs that work seamlessly across all devices and screen sizes for optimal user experience.",
            link: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
            alt: "Responsive web design",
        },
        {
            id: "ecommerce",
            title: "E-commerce Solutions",
            description: "Complete online stores with payment integration, inventory management, and customer relationship tools.",
            link: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
            alt: "E-commerce development",
        },
        {
            id: "cloud-deployment",
            title: "Cloud Deployment",
            description: "Seamless deployment to cloud platforms like AWS, Vercel, and Netlify with CI/CD pipelines for continuous delivery.",
            link: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
            alt: "Cloud deployment services",
        },
    ];

    return (
        <section id="overview" className="relative bg-[#F8F8F8] py-20 lg:py-[120px] overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=center"
                alt="Abstract background"
                fill
                className="object-cover object-center z-0"
                quality={100}
            />
            <div className="relative max-w-[1248px] mx-auto px-6 z-10">
                <div className="lg:max-w-xl">
                    <p className="font-semibold text-sm leading-[1.125] tracking-[0.8px] text-[#626262]">
                        SOLUTIONS
                    </p>
                    <h2 className="mt-2 text-[34px] leading-[40px] font-semibold text-[#323130]">
                        One platform. Limitless possibilities
                    </h2>
                </div>

                <div className="mt-12 grid lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 items-start">
                    <div className="lg:order-last relative hidden lg:block h-[497px] w-full self-start mt-6">
                        {solutionsData.map((solution) => (
                            <Image
                                key={solution.id}
                                src={solution.imageSrc}
                                alt={solution.alt}
                                fill
                                sizes="(min-width: 1024px) 50vw, 0vw"
                                className={cn(
                                    "object-cover transition-opacity duration-500 ease-in-out",
                                    openItem === solution.id ? "opacity-100" : "opacity-0"
                                )}
                            />
                        ))}
                    </div>

                    <div className="lg:row-start-1">
                        <div role="tablist">
                            {solutionsData.map((solution) => (
                                <div key={solution.id} className="border-b border-[#e1dfdd]">
                                    <button
                                        id={`tab-${solution.id}`}
                                        role="tab"
                                        aria-selected={openItem === solution.id}
                                        aria-controls={`panel-${solution.id}`}
                                        onClick={() => setOpenItem(solution.id)}
                                        className={cn(
                                            "w-full text-left py-6 border-l-4 transition-colors duration-300",
                                            openItem === solution.id ? 'border-[#0078d4]' : 'border-transparent'
                                        )}
                                    >
                                        <div className="flex justify-between items-center pl-3">
                                            <h3 className="text-xl font-semibold text-[#323130]">{solution.title}</h3>
                                            {openItem === solution.id ? (
                                                <ChevronUp className="h-5 w-5 text-[#323130] flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5 text-[#323130] flex-shrink-0" />
                                            )}
                                        </div>
                                    </button>
                                    <div
                                        id={`panel-${solution.id}`}
                                        role="tabpanel"
                                        aria-labelledby={`tab-${solution.id}`}
                                        className={cn(
                                            "overflow-hidden transition-all duration-500 ease-in-out",
                                            openItem === solution.id ? 'max-h-[500px]' : 'max-h-0'
                                        )}
                                    >
                                        <div className="pl-7 pb-8 pr-4">
                                            <p className="text-base text-[#605e5c] leading-6 max-w-md">
                                                {solution.description}
                                            </p>
                                            <div className="mt-6 lg:hidden">
                                                <Image src={solution.imageSrc} alt={solution.alt} width={656} height={492} className="w-full h-auto" />
                                            </div>
                                            <a href={solution.link} className="group inline-flex items-center mt-6 text-[#0078d4] font-semibold text-base leading-6 hover:underline">
                                                Explore solution
                                                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Product Demos Section
const ProductDemosSection = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const tabData = [
        {
            id: 'frontend',
            label: 'Frontend Development',
            title: 'Create stunning user interfaces with modern frameworks and responsive design.',
            products: [
                {
                    icon: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center',
                    name: 'React & Next.js',
                    link: '/contact',
                },
            ],
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center',
            videoAriaLabel: 'Frontend development showcase',
        },
        {
            id: 'backend',
            label: 'Backend Development',
            title: 'Build robust server-side applications with scalable architecture and APIs.',
            products: [
                {
                    icon: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center',
                    name: 'Node.js & Python',
                    link: '/contact',
                },
            ],
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center',
            videoAriaLabel: 'Backend development showcase',
        },
        {
            id: 'fullstack',
            label: 'Full-Stack Solutions',
            title: 'End-to-end web applications with seamless frontend and backend integration.',
            products: [
                {
                    icon: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center',
                    name: 'Complete Web Apps',
                    link: '/contact',
                },
            ],
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center',
            videoAriaLabel: 'Full-stack development showcase',
        },
    ];

    const activeTabData = tabData.find(tab => tab.id === activeTab);

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop&crop=center"
                    alt="Abstract gradient background"
                    fill
                    className="w-full h-full object-cover"
                    quality={95}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center">
                    <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#605E5C' }}>Web Development</p>
                    <h2 className="mt-2 text-4xl font-semibold" style={{ color: '#323130' }}>Do more with modern web technologies</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: '#323130' }}>See how we build powerful web applications that drive business growth.</p>
                </div>

                <div className="mt-12">
                    <div className="relative border-b border-gray-200">
                        <div className="overflow-x-auto">
                            <nav className="-mb-px flex" aria-label="Tabs">
                                {tabData.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`whitespace-nowrap py-4 px-5 border-b-2 font-semibold text-sm transition-colors`}
                                        style={{
                                            borderColor: activeTab === tab.id ? '#005a9e' : 'transparent',
                                            color: activeTab === tab.id ? '#005a9e' : '#323130',
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {activeTabData && (
                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start">
                            <div className="pt-8">
                                <h3 className="text-3xl font-semibold" style={{ lineHeight: '2.5rem', color: '#323130' }}>{activeTabData.title}</h3>

                                <div className="mt-8 space-y-6">
                                    {activeTabData.products.map((product) => (
                                        <a key={product.name} href={product.link} className="flex items-center group gap-3">
                                            <Image src={product.icon} alt={`${product.name} icon`} width={24} height={24} className="h-6 w-6 object-contain" />
                                            <span className="font-semibold text-blue-600 group-hover:underline" style={{ color: '#0078D4' }}>
                                                {product.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="relative mt-8 lg:mt-0">
                                <a href="#" aria-label={activeTabData.videoAriaLabel} className="block group">
                                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src={activeTabData.image}
                                            alt={activeTabData.videoAriaLabel}
                                            fill
                                            className="object-cover"
                                            quality={100}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity group-hover:bg-opacity-30">
                                            <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center transition-all group-hover:bg-opacity-70 group-hover:scale-110">
                                                <Play className="w-8 h-8 text-white fill-white" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// Apps & Add-ons Section
const AppsAddonsSection = () => {
    const appsData = [
        {
            iconSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center",
            company: "Link Innovations",
            appName: "E-commerce Platform",
            description: "Complete online store with payment integration and inventory management.",
            rating: 4.8,
            userCount: "(50+)",
            learnMoreLink: "/contact",
        },
        {
            iconSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center",
            company: "Link Innovations",
            appName: "Business Dashboard",
            description: "Real-time analytics and business intelligence dashboard.",
            rating: 4.9,
            userCount: "(30+)",
            learnMoreLink: "/contact",
        },
        {
            iconSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center",
            company: "Link Innovations",
            appName: "CRM System",
            description: "Customer relationship management with automation features.",
            rating: 4.7,
            userCount: "(25+)",
            learnMoreLink: "/contact",
        },
        {
            iconSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center",
            company: "Link Innovations",
            appName: "Content Management",
            description: "Flexible CMS for managing website content and media.",
            rating: 4.6,
            userCount: "(40+)",
            learnMoreLink: "/contact",
        },
    ];

    return (
        <section className="bg-[#f3f2f1] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xs font-semibold tracking-[1.2px] text-[#605e5c] uppercase mb-4">
                    WEB SOLUTIONS
                </p>
                <h2 className="text-[36px] font-semibold text-[#323130] max-w-4xl mx-auto leading-[44px]">
                    Enhance your business with custom web applications
                </h2>
                <p className="max-w-3xl mx-auto text-[#605e5c] mt-4 mb-12 text-lg leading-7">
                    Add powerful web solutions that help you streamline operations and grow your business.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1192px] mx-auto mb-12">
                    {appsData.map((app, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-8 flex flex-col text-left h-full">
                            <div className="flex items-start mb-4">
                                <Image
                                    src={app.iconSrc}
                                    alt={`${app.appName} logo`}
                                    width={40}
                                    height={40}
                                    className="mr-4 mt-1 rounded-lg"
                                />
                                <div>
                                    <p className="text-xs text-[#605e5c]">{app.company}</p>
                                    <h3 className="text-xl font-semibold text-[#323130] leading-tight mt-1">
                                        {app.appName}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-[#605e5c] text-base mb-4 flex-grow">
                                {app.description}
                            </p>
                            <div className="flex justify-between items-center mt-auto pt-6">
                                <div className="flex items-center text-sm text-[#605e5c]">
                                    <Star className="w-4 h-4 mr-1 text-[#ffb900] fill-[#ffb900]" />
                                    <span>{app.rating.toFixed(1)}</span>
                                    <span className="ml-1">{app.userCount}</span>
                                </div>
                                <a
                                    href={app.learnMoreLink}
                                    className="text-sm font-semibold text-[#0078d4] flex items-center group"
                                >
                                    <span className="group-hover:underline">Learn More</span>
                                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="/contact"
                    className="inline-flex items-center font-semibold text-[#323130] group"
                >
                    <div className="flex items-center justify-center w-8 h-8 mr-3 bg-[#323130] rounded-sm group-hover:bg-[#0078d4] transition-colors">
                        <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="group-hover:underline">View all solutions</span>
                </a>
            </div>
        </section>
    );
};

// Get Started Section
const GetStartedSection = () => {
    return (
        <section className="bg-[#0078d4] py-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
                    Ready to Build Your Next Web Application?
                </h2>
                <p className="max-w-3xl mx-auto text-xl text-white/90 leading-7 mb-8">
                    Let's discuss your project requirements and create a custom web solution that drives your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#0078d4] font-semibold py-3 px-6 rounded-[2px] transition-colors hover:bg-gray-100">
                        Start Your Project
                        <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link href="/portfolio" className="inline-flex items-center justify-center border border-white text-white font-semibold py-3 px-6 rounded-[2px] transition-colors hover:bg-white hover:text-[#0078d4]">
                        View Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

const WebDevelopmentPage = () => {
    return (
        <>
            <HeroHeader />
            <main>
                <HeroSection />
                <SolutionsSection />
                <ProductDemosSection />
                <AppsAddonsSection />
                <GetStartedSection />
            </main>
            <FooterSection />
        </>
    );
};

export default WebDevelopmentPage;
