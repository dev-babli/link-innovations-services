'use client';

import Image from "next/image";
import { Linkedin, Twitter, Send } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useFastNavigation } from "@/hooks/useFastNavigation";

const FooterSection = () => {
  const { navigateTo, prefetchRoute } = useFastNavigation();

  const handleLinkClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <footer className="w-full bg-gradient-to-b from-black-100 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Top Section - Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* WEB DEVELOPMENT */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider font-orbitron">
              WEB DEVELOPMENT
            </h3>
            <div className="h-px bg-gradient-to-r from-purple to-transparent w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('/services/web-development')}
                  onMouseEnter={() => prefetchRoute('/services/web-development')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  Custom Web Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/web-development')}
                  onMouseEnter={() => prefetchRoute('/services/web-development')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  E-commerce Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/web-development')}
                  onMouseEnter={() => prefetchRoute('/services/web-development')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  Progressive Web Apps
                </button>
              </li>
            </ul>
          </div>

          {/* CLOUD SOLUTIONS */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider font-orbitron">
              CLOUD SOLUTIONS
            </h3>
            <div className="h-px bg-gradient-to-r from-purple to-transparent w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('/services/cloud-solutions')}
                  onMouseEnter={() => prefetchRoute('/services/cloud-solutions')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  Cloud Migration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/cloud-solutions')}
                  onMouseEnter={() => prefetchRoute('/services/cloud-solutions')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  DevOps & Automation
                </button>
              </li>
            </ul>
          </div>

          {/* MOBILE APPS */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider font-orbitron">
              MOBILE APPS
            </h3>
            <div className="h-px bg-gradient-to-r from-purple to-transparent w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('/services/app-development')}
                  onMouseEnter={() => prefetchRoute('/services/app-development')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  iOS Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/app-development')}
                  onMouseEnter={() => prefetchRoute('/services/app-development')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  Android Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/app-development')}
                  onMouseEnter={() => prefetchRoute('/services/app-development')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  Cross-Platform Apps
                </button>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider font-orbitron">
              COMPANY
            </h3>
            <div className="h-px bg-gradient-to-r from-purple to-transparent w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('/about')}
                  onMouseEnter={() => prefetchRoute('/about')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/contact')}
                  onMouseEnter={() => prefetchRoute('/contact')}
                  className="text-gray-300 hover:text-purple transition-colors text-sm text-left hover:translate-x-1 transform duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Logo and Social */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-12 border-t border-gray-800">
          {/* Large Logo */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center space-x-4">
              <Image
                src="/logos/Link_Innovations_transparent.png"
                alt="Link Innovations"
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <div className="flex flex-col">
                <span className="text-6xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-orbitron">
                  LINK
                </span>
                <span className="text-2xl font-bold text-gray-400 tracking-widest font-exo2">
                  INNOVATIONS
                </span>
              </div>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <Link
                href="https://linkedin.com/company/link-innovations"
                className="text-white hover:text-purple transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-purple/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/linkinnovations"
                className="text-white hover:text-purple transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-purple/10"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <button
                onClick={() => handleLinkClick('/contact')}
                onMouseEnter={() => prefetchRoute('/contact')}
                className="text-white hover:text-purple transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-purple/10"
                aria-label="Contact"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Link Innovations. All rights reserved.
            </p>

            {/* Site Credit */}
            <p className="text-gray-500 text-xs">
              Site by Link Innovations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };