"use client";

import React from 'react';
import Navigation from "@/components/services/Navigation";
import Hero from "@/components/services/Hero";
import ServiceCards from "@/components/services/ServiceCards";
import NavigationSection from "@/components/services/NavigationSection";
import Contact from "@/components/services/Contact";
import Footer from "@/components/services/Footer";
import "./services-page.css";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24">
        <Hero />
        <ServiceCards />
        <NavigationSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}