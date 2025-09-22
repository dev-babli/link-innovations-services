"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming a utility for classname merging

const solutionsData = [
  {
    id: "enrich",
    title: "Enrich your sales and marketing",
    description: "Grow your revenue by using AI and real-time insights to understand customers, personalize journeys, and close more deals.",
    link: "https://www.microsoft.com/en-in/dynamics-365/solutions/sales-and-marketing",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Accordion_image_011-8.webp",
    alt: "A woman working on her laptop wearing spectacles and background image set as glass building",
  },
  {
    id: "personalize",
    title: "Personalize service experiences",
    description: "Create more lasting customer connections at every touchpoint while improving team processes and productivity with AI.",
    link: "https://www.microsoft.com/en-in/dynamics-365/solutions/service",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Accordion_image_02_D365-9.webp",
    alt: "A woman smiling and looking at a laptop.",
  },
  {
    id: "modernize",
    title: "Modernize your ERP",
    description: "Reinvent operations, enhance productivity, and gain a competitive edge with the power of an agentic ERP system.",
    link: "https://www.microsoft.com/en-in/dynamics-365/solutions/erp",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/1063742-Solutions-03-10.webp",
    alt: "A man smiling at a tablet.",
  },
  {
    id: "ready",
    title: "Ready your business for growth",
    description: "Boost performance by connecting people, processes, and data across your small or medium-sized business.",
    link: "https://www.microsoft.com/en-in/dynamics-365/solutions/small-business",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Accordion_image_opt1_D365-11.webp",
    alt: "A man wearing a blue shirt.",
  },
];

export default function SolutionsSection() {
  const [openItem, setOpenItem] = useState(solutionsData[0].id);

  return (
    <section className="relative bg-[#F8F8F8] py-20 lg:py-[120px] overflow-hidden">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-solutions-bg-7.webp"
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
}