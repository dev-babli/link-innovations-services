"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, ChevronRight } from 'lucide-react';

const tabData = [
  {
    id: 'sales',
    label: 'Sales',
    title: 'Close more deals and deepen customer relationships with AI assistance.',
    products: [
      {
        icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-Icon-sales-13.webp',
        name: 'Dynamics 365 Sales',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/sales',
      },
    ],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/microsoft-d365-sales_tbmnl_en-us-14.webp',
    videoAriaLabel: 'Sales video: Close more deals and deepen customer relationships with AI assistance',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    title: 'Create more personalized customer journeys with next-generation AI.',
    stat: '75% time saved on customer journey development',
    footnote: '1',
    products: [
      {
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Logo_CustomerInsights_AI-15.png',
        name: 'Dynamics 365 Customer Insights',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/customer-insights',
      },
    ],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Customer-Insights-Explainer_tbmnl_en-us-16.webp',
    videoAriaLabel: 'Marketing video: Create more personalized customer journeys with next-generation AI',
  },
  {
    id: 'customer-service',
    label: 'Customer service',
    title: 'Resolve issues faster using generative AI and automation.',
    stat: '40% reduction in average call handling time',
    footnote: '2',
    products: [
      {
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Logo_CustomerService_scalable-17.png',
        name: 'Dynamics 365 Customer Service',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/customer-service',
      },
    ],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-mediademo-3-18.webp',
    videoAriaLabel: 'Customer service video: Resolve issues faster using generative AI and automation',
  },
  {
    id: 'field-service',
    label: 'Field service',
    title: 'Empower frontline teams with generative AI, IoT, and mixed reality.',
    stat: '14% increase in field technician productivity',
    footnote: '3',
    products: [
      {
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Logo_FieldService_scalable-19.png',
        name: 'Dynamics 365 Field Service',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/field-service',
      },
    ],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-mediademo-4-20.webp',
    videoAriaLabel: 'Field service video: Empower frontline teams with generative AI, IoT, and mixed reality.',
  },
  {
    id: 'supply-chain',
    label: 'Supply chain',
    title: 'Navigate disruption and be more resilient with proactive, AI-powered insights.',
    products: [
      {
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Logo_SupplyChainManagement_scalable-21.png',
        name: 'Dynamics 365 Supply Chain Management',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/supply-chain-management',
      },
    ],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-mediademo-5-22.webp',
    videoAriaLabel: 'Supply chain video: React fast and be more resilient with proactive, AI-powered insights',
  },
  {
    id: 'finance',
    label: 'Finance',
    title: 'Build financial and operational agility using AI and automation.',
    stat: '106% ROI achieved by deploying a Dynamics 365 ERP solution.',
    footnote: '4',
    products: [
      {
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Logo_Finance_scalable-23.png',
        name: 'Dynamics 365 Finance',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/finance',
      },
      {
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Logo_ProjectOperations_scalable-24.png',
        name: 'Dynamics 365 Project Operations',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/project-operations',
      },
    ],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-mediademo-25.webp',
    videoAriaLabel: 'Finance video: Build financial and operational agility using AI and automation.',
  },
  {
    id: 'smb',
    label: 'Small and medium business',
    title: 'Streamline your growing business operations with an AI-powered ERP system.',
    description: 'Work smarter, adapt faster, and perform better with Business Central—named the best ERP system of 2024 by Forbes Advisor.',
    footnote: '5',
    products: [
      {
        icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-icon-businesscentral-26.webp',
        name: 'Dynamics 365 Business Central',
        link: 'https://www.microsoft.com/en-in/dynamics-365/products/business-central',
      },
    ],
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-mediademo-7-27.webp',
    videoAriaLabel: 'Business Central: Streamline small or midsize business operations with an AI-powered ERP system.',
  },
];

type TabId = typeof tabData[number]['id'];

const ProductDemosSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>('sales');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabData = tabData.find(tab => tab.id === activeTab);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
        <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-mediademo-bg-12.webp"
          alt="Abstract gradient background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={95}
          className="w-full h-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider uppercase" style={{color: '#605E5C'}}>Product demos</p>
          <h2 className="mt-2 text-4xl font-semibold" style={{color: '#323130'}}>Do more with Dynamics 365 and AI</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{color: '#323130'}}>See how AI works with Dynamics 365 applications to give every team an edge.</p>
        </div>

        <div className="mt-12">
          <div className="relative border-b border-gray-200">
            <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef}>
              <nav className="-mb-px flex" aria-label="Tabs">
                {tabData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabId)}
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
            <div className="absolute top-0 right-0 bottom-[1px] hidden lg:flex items-center bg-gradient-to-l from-white pl-8 pr-1 pointer-events-none">
              <button className="pointer-events-auto h-9 w-9 flex-shrink-0 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {activeTabData && (
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="pt-8">
                <h3 className="text-3xl font-semibold" style={{lineHeight: '2.5rem', color: '#323130'}}>{activeTabData.title}</h3>

                {activeTabData.stat && (
                  <p className="mt-6 text-xl" style={{color: '#323130'}}>
                    {activeTabData.stat}
                    {activeTabData.footnote && <a href={`#footnote-${activeTabData.footnote}`} className="text-sm align-super no-underline">[{activeTabData.footnote}]</a>}
                  </p>
                )}

                {activeTabData.description && (
                   <p className="mt-4 text-base" style={{color: '#605e5c'}}>
                     {activeTabData.description}
                     {activeTabData.footnote && <a href={`#footnote-${activeTabData.footnote}`} className="text-sm align-super no-underline">[{activeTabData.footnote}]</a>}
                   </p>
                )}
                
                <div className="mt-8 space-y-6">
                  {activeTabData.products.map((product) => (
                    <a key={product.name} href={product.link} className="flex items-center group gap-3">
                      {product.logo ? (
                        <Image src={product.logo} alt={`${product.name} logo`} width={24} height={24} className="h-6 w-6 object-contain" />
                      ) : product.icon ? (
                         <Image src={product.icon} alt={`${product.name} icon`} width={16} height={16} className="h-4 w-4" />
                      ): null}
                      <span className="font-semibold text-blue-600 group-hover:underline" style={{color: '#0078D4'}}>
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
                      layout="fill"
                      objectFit="cover"
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

export default ProductDemosSection;