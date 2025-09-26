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
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section - Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* WEB DEVELOPMENT */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">
              WEB DEVELOPMENT
            </h3>
            <div className="h-px bg-gray-600 w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/web-development')}
                  onMouseEnter={() => prefetchRoute('/services/web-development')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Custom Web Applications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/web-development')}
                  onMouseEnter={() => prefetchRoute('/services/web-development')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  E-commerce Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/web-development')}
                  onMouseEnter={() => prefetchRoute('/services/web-development')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Progressive Web Apps
                </button>
              </li>
            </ul>
          </div>

          {/* CLOUD SOLUTIONS */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">
              CLOUD SOLUTIONS
            </h3>
            <div className="h-px bg-gray-600 w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/cloud-solutions')}
                  onMouseEnter={() => prefetchRoute('/services/cloud-solutions')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Cloud Migration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/cloud-solutions')}
                  onMouseEnter={() => prefetchRoute('/services/cloud-solutions')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  DevOps & Automation
                </button>
              </li>
            </ul>
          </div>

          {/* MOBILE APPS */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">
              MOBILE APPS
            </h3>
            <div className="h-px bg-gray-600 w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/app-development')}
                  onMouseEnter={() => prefetchRoute('/services/app-development')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  iOS Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/app-development')}
                  onMouseEnter={() => prefetchRoute('/services/app-development')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Android Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/services/app-development')}
                  onMouseEnter={() => prefetchRoute('/services/app-development')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Cross-Platform Apps
                </button>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">
              COMPANY
            </h3>
            <div className="h-px bg-gray-600 w-16 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('/about')}
                  onMouseEnter={() => prefetchRoute('/about')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('/contact')}
                  onMouseEnter={() => prefetchRoute('/contact')}
                  className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Logo and Social */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-gray-800">
          {/* Large Logo */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center space-x-4">
              <Image
                src="/logos/Link Innovations_transparent-.png"
                alt="Link Innovations"
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <div className="flex flex-col">
                <span className="text-6xl font-black text-white tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-orbitron">
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
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/linkinnovations"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <button
                onClick={() => handleLinkClick('/contact')}
                onMouseEnter={() => prefetchRoute('/contact')}
                className="text-white hover:text-gray-300 transition-colors"
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