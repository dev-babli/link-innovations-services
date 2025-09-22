"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const DropdownNavItem = ({ label, children, widthClass }: { label: string; children: React.ReactNode; widthClass?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center text-sm font-normal text-[#1b1b1b] hover:text-[#0078d4] h-[52px] border-b-2 transition-colors duration-200 ${isOpen ? 'border-[#0078d4]' : 'border-transparent'}`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`ml-1 h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      {isOpen && (
        <div className={`absolute top-full left-1/2 z-20 -translate-x-1/2 bg-white shadow-lg p-6 border-t border-gray-100 ${widthClass || 'w-max'}`}>
          {children}
        </div>
      )}
    </li>
  );
};

const DropdownContentLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="block text-sm font-normal text-[#1b1b1b] hover:underline">
      {children}
    </a>
  </li>
);

const DropdownContentHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3 text-sm font-semibold text-[#1b1b1b]">{children}</h3>
);

const HeaderNavigation = () => {
  const microsoftLogoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/RE1Mu3b-1.png";

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm font-['Segoe_UI']">
      <div className="mx-auto flex h-[52px] max-w-[1536px] items-center justify-between px-6 2xl:px-12">
        <div className="flex h-full items-center">
          <div className="flex h-full items-center">
            <a href="https://www.microsoft.com" aria-label="Microsoft" className="flex items-center pr-4">
              <Image src={microsoftLogoUrl} alt="Microsoft logo" width={23} height={23} priority />
            </a>
            <div className="h-6 w-px bg-gray-300"></div>
            <a href="https://www.microsoft.com/en-in/dynamics-365" aria-label="Dynamics 365" className="px-4 text-[18px] font-semibold text-[#1b1b1b]">
              Dynamics 365
            </a>
          </div>

          <nav className="ml-6 hidden lg:block">
            <ul className="flex h-full items-center space-x-6">
              <DropdownNavItem label="Explore" widthClass="w-[480px]">
                <div className="grid grid-cols-2 gap-x-8">
                  <div>
                    <DropdownContentHeader>Get started</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/what-is-dynamics-365">What is Dynamics 365?</DropdownContentLink>
                      <DropdownContentLink href="https://guidedtour.microsoft.com/en-in/guidedtour/dynamics/landing">Guided tours</DropdownContentLink>
                      <DropdownContentLink href="https://www.microsoft.com/en-in/customers/search?q=Dynamics+365&sortBy=PublishedDate+Desc">Customer stories</DropdownContentLink>
                      <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/free-trial">Try our products</DropdownContentLink>
                    </ul>
                  </div>
                  <div>
                    <DropdownContentHeader>Solutions</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/solutions/sales-and-marketing">Sales & marketing</DropdownContentLink>
                      <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/solutions/service">Service</DropdownContentLink>
                      <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/solutions/erp">ERP</DropdownContentLink>
                      <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/solutions/small-business">Small & medium businesses</DropdownContentLink>
                    </ul>
                  </div>
                </div>
              </DropdownNavItem>
              
              <DropdownNavItem label="Products" widthClass="w-[960px]">
                <div className="grid grid-cols-5 gap-x-6">
                  <div className="space-y-6">
                    <div>
                      <DropdownContentHeader>Customer experience</DropdownContentHeader>
                      <ul className="space-y-3">
                        <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/sales">Sales</DropdownContentLink>
                        <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/customer-insights">Customer Insights</DropdownContentLink>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                     <div>
                      <DropdownContentHeader>Service</DropdownContentHeader>
                      <ul className="space-y-3">
                        <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/customer-service">Customer Service</DropdownContentLink>
                        <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/contact-center">Contact Center</DropdownContentLink>
                        <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/field-service">Field Service</DropdownContentLink>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <DropdownContentHeader>Supply chain</DropdownContentHeader>
                      <ul className="space-y-3">
                        <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/supply-chain-management">Supply Chain Management</DropdownContentLink>
                        <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/commerce">Commerce</DropdownContentLink>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <DropdownContentHeader>Finance and operations</DropdownContentHeader>
                      <ul className="space-y-3">
                         <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/finance">Finance</DropdownContentLink>
                         <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/project-operations">Project Operations</DropdownContentLink>
                         <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/human-resources">Human Resources</DropdownContentLink>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <DropdownContentHeader>Small and medium business</DropdownContentHeader>
                      <ul className="space-y-3">
                         <DropdownContentLink href="https://www.microsoft.com/en-in/dynamics-365/products/business-central">Business Central</DropdownContentLink>
                      </ul>
                    </div>
                  </div>
                </div>
              </DropdownNavItem>

              <li>
                <a href="https://www.microsoft.com/en-in/dynamics-365/pricing" className="flex items-center text-sm font-normal text-[#1b1b1b] hover:text-[#0078d4] h-[52px] border-b-2 border-transparent hover:border-[#0078d4] transition-colors duration-200">Pricing</a>
              </li>

              <DropdownNavItem label="Resources" widthClass="w-[720px]">
                <div className="grid grid-cols-3 gap-x-8">
                  <div>
                    <DropdownContentHeader>Development</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="#">D365 Dev Center</DropdownContentLink>
                      <DropdownContentLink href="#">Power Platform Dev Center</DropdownContentLink>
                    </ul>
                  </div>
                  <div>
                    <DropdownContentHeader>Admin</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="#">Admin Center</DropdownContentLink>
                      <DropdownContentLink href="#">Release plans</DropdownContentLink>
                    </ul>
                  </div>
                  <div>
                    <DropdownContentHeader>Community</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="#">Community forums</DropdownContentLink>
                      <DropdownContentLink href="#">D365 blog</DropdownContentLink>
                      <DropdownContentLink href="#">Events</DropdownContentLink>
                    </ul>
                  </div>
                </div>
              </DropdownNavItem>
              <DropdownNavItem label="Partners" widthClass="w-[480px]">
                <div className="grid grid-cols-2 gap-x-8">
                  <div>
                    <DropdownContentHeader>Become a partner</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="#">Find a partner</DropdownContentLink>
                      <DropdownContentLink href="#">Become a partner</DropdownContentLink>
                    </ul>
                  </div>
                  <div>
                    <DropdownContentHeader>Partner resources</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="#">Partner training</DropdownContentLink>
                      <DropdownContentLink href="#">AppSource</DropdownContentLink>
                      <DropdownContentLink href="#">Partner blog</DropdownContentLink>
                    </ul>
                  </div>
                </div>
              </DropdownNavItem>
              <DropdownNavItem label="Support" widthClass="w-[480px]">
                <div className="grid grid-cols-2 gap-x-8">
                  <div>
                    <DropdownContentHeader>Get support</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="#">Get support</DropdownContentLink>
                    </ul>
                  </div>
                  <div>
                    <DropdownContentHeader>Documentation</DropdownContentHeader>
                    <ul className="space-y-3">
                      <DropdownContentLink href="#">D365 documentation</DropdownContentLink>
                      <DropdownContentLink href="#">Power Platform documentation</DropdownContentLink>
                    </ul>
                  </div>
                </div>
              </DropdownNavItem>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://go.microsoft.com/fwlink/?linkid=2248458&clcid=0x4009&srcurl=https%3A%2F%2Fwww.microsoft.com%2Fdynamics-365" className="text-sm font-normal text-[#1b1b1b] hover:underline hidden md:block">
            Contact us
          </a>
          <a href="https://www.microsoft.com/en-in/dynamics-365/free-trial" className="px-2.5 py-1 text-sm font-semibold text-white bg-[#1b1b1b] rounded-sm hover:bg-opacity-80 transition-colors">
            Try for free
          </a>
          <a href="#" className="px-2.5 py-1 text-sm font-normal text-[#1b1b1b] border border-[#8a8a8a] rounded-sm hover:bg-gray-100 transition-colors">
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;