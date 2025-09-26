"use client";

import React from 'react';
// Removed FloatingNav to avoid duplicate navbar - using HeroHeader from layout instead
import "./services-page.css";

// Import the components you want to showcase
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import MagicButton from "@/components/MagicButton";

// Import UI components for the services showcase
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import GridGlobe from "@/components/ui/GridGlobe";
import { HoverBorderGradient } from "@/components/ui/HoverBorder";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { LayoutGrid } from "@/components/ui/LayoutGrid";
import { MovingBorder } from "@/components/ui/MovingBorders";
import { PinContainer } from "@/components/ui/Pin";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import TrustedCarousel from "@/components/TrustedCarousel";
import ServicesShowcase from "@/components/ServicesShowcase";

// Import data
import { testimonials, companies, workExperience, projects, gridItems } from "@/data";

export default function ServicesPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 dark">
      <div className="max-w-7xl w-full">

        {/* 1. Hero Section with Spotlight and Text Effects + Background */}
        <section className="pb-20 pt-36 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
          </div>

          <div className="h-screen w-full bg-black-100 bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Professional IT Development Services
              </p>

              <TextGenerateEffect
                words="Custom Software Development & Digital Solutions"
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
              />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                From web applications to mobile apps, we build scalable solutions that drive your business forward.
              </p>

              <MagicButton
                title="Explore Our Services"
                icon={<span>🚀</span>}
                position="right"
              />
            </div>
          </div>
        </section>

        {/* 2. Services Grid Section */}
        <section className="py-20 bg-black-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Our <span className="text-purple">Services</span>
          </h1>
          <BentoGrid className="w-full py-20">
            {gridItems.map((item, i) => (
              <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            ))}
          </BentoGrid>
        </section>

        {/* 3. Interactive Services Showcase */}
        <ServicesShowcase />

        {/* 4. Services Showcase with Layout Grid */}
        <section className="py-20 bg-black-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Our <span className="text-purple">Services</span>
          </h1>
          <div className="w-full h-full p-10">
            <LayoutGrid cards={[
              {
                id: 1,
                content: (
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
                    <p className="text-gray-300">Custom websites, e-commerce platforms, and web applications</p>
                    <a href="/web-development" className="text-purple-400 hover:text-purple-300 mt-2 inline-block">Learn More →</a>
                  </div>
                ),
                className: "bg-gradient-to-br from-blue-500 to-purple-600",
                thumbnail: "/next.svg"
              },
              {
                id: 2,
                content: (
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">Mobile App Development</h3>
                    <p className="text-gray-300">Native iOS and Android apps, plus cross-platform solutions</p>
                    <a href="/mobile-app-development" className="text-purple-400 hover:text-purple-300 mt-2 inline-block">Learn More →</a>
                  </div>
                ),
                className: "bg-gradient-to-br from-green-500 to-teal-600",
                thumbnail: "/node.svg"
              },
              {
                id: 3,
                content: (
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">Cloud Solutions</h3>
                    <p className="text-gray-300">Scalable cloud infrastructure, migration, and optimization</p>
                    <a href="/cloud-solutions" className="text-purple-400 hover:text-purple-300 mt-2 inline-block">Learn More →</a>
                  </div>
                ),
                className: "bg-gradient-to-br from-orange-500 to-red-600",
                thumbnail: "/aws.svg"
              },
              {
                id: 4,
                content: (
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                    <p className="text-gray-300">Security audits, penetration testing, and protection solutions</p>
                    <a href="/cybersecurity" className="text-purple-400 hover:text-purple-300 mt-2 inline-block">Learn More →</a>
                  </div>
                ),
                className: "bg-gradient-to-br from-pink-500 to-purple-600",
                thumbnail: "/shield.svg"
              }
            ]} />
          </div>
        </section>

        {/* 5. Our Approach Section */}
        <div className="bg-black-100">
          <Approach />
        </div>

        {/* 6. Experience Section */}
        <div className="bg-black-100">
          <Experience />
        </div>

        {/* 7. Recent Projects Section */}
        <div className="bg-black-100">
          <RecentProjects />
        </div>

        {/* 8. Trusted by Industry Leaders Section */}
        <TrustedCarousel />

        {/* 9. Clients Testimonials Section */}
        <div className="bg-black-100">
          <Clients />
        </div>

        {/* 10. Our Expertise Section */}
        <section className="py-20 bg-black-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Our <span className="text-purple">Expertise</span>
          </h1>
          <div className="flex items-center justify-center">
            <GridGlobe />
          </div>
        </section>

        {/* 11. Service Features Section */}
        <section className="py-20 bg-black-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Service <span className="text-purple">Features</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PinContainer title="24/7 Support" href="#">
              <div className="p-6 bg-slate-900 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Round-the-Clock Support</h3>
                <p className="text-gray-300">Dedicated support team available 24/7 to assist with your projects</p>
              </div>
            </PinContainer>

            <PinContainer title="Agile Development" href="#">
              <div className="p-6 bg-slate-900 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Agile Methodology</h3>
                <p className="text-gray-300">Iterative development process with regular updates and feedback</p>
              </div>
            </PinContainer>

            <PinContainer title="Quality Assurance" href="#">
              <div className="p-6 bg-slate-900 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
                <p className="text-gray-300">Comprehensive testing and quality control for all deliverables</p>
              </div>
            </PinContainer>
          </div>
        </section>

        {/* 12. Development Process Section */}
        <section className="py-20 bg-black-100">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8">
            Development <span className="text-purple">Process</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-64 rounded-lg overflow-hidden">
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-lg overflow-hidden"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-pink-900 rounded-lg overflow-hidden"
                colors={[
                  [255, 166, 158],
                  [221, 255, 247],
                ]}
                dotSize={2}
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600 rounded-lg overflow-hidden"
                colors={[[125, 211, 252]]}
              />
            </div>
          </div>
        </section>

        {/* 13. Gradient Background CTA Section */}
        <section className="py-20 relative bg-black-100">
          <BackgroundGradientAnimation>
            <div className="text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8">Let&apos;s build something amazing together</p>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2"
              >
                <span>Contact Us Today</span>
              </HoverBorderGradient>
            </div>
          </BackgroundGradientAnimation>
        </section>

        {/* 14. Footer */}
        <div className="bg-black-100">
          <Footer />
        </div>
      </div>
    </main>
  );
}