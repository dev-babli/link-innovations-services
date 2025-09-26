import { Code, Linkedin, Twitter, Send } from "lucide-react";
import React from "react";
import Link from "next/link";

const FooterSection = () => {
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
                <Link href="/web-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Progressive Web Apps
                </Link>
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
                <Link href="/cloud-solutions" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link href="/cloud-solutions" className="text-gray-300 hover:text-white transition-colors text-sm">
                  DevOps & Automation
                </Link>
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
                <Link href="/mobile-app-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  iOS Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-app-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Android Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-app-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cross-Platform Apps
                </Link>
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
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Logo and Social */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-gray-800">
          {/* Large Logo */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center space-x-3">
              <Code className="w-8 h-8 text-white" />
              <span className="text-6xl font-bold text-gray-300 tracking-wider">
                LINK
              </span>
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
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Contact"
              >
                <Send className="w-6 h-6" />
              </Link>
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