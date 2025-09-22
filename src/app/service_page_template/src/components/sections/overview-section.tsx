import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const features: FeatureCardProps[] = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/1063742-Overview-01-4.webp",
    imageAlt: "A woman in a business suit smiles while presenting in front of a screen with pie charts and graphs.",
    title: "Realize your vision with Dynamics 365",
    description: "Become more data-driven and innovative with AI-powered apps for sales, service, finance, and supply chain operations.",
    linkText: "Discover more",
    linkHref: "https://www.microsoft.com/en-in/dynamics-365/what-is-dynamics-365"
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/1063742-Overview-02-5.webp",
    imageAlt: "A man with glasses smiles while using a laptop in a brightly lit cafe.",
    title: "Take a guided tour",
    description: "Get a closer look at how to improve specific business processes with Dynamics 365 apps.",
    linkText: "Start your tour",
    linkHref: "https://go.microsoft.com/fwlink/?linkid=2314809&clcid=0x4009&culture=en-in&country=in"
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/1063742-Overview-03-6.webp",
    imageAlt: "Two women and a man collaborate around a computer in an office.",
    title: "Compare plans and pricing",
    description: "Find the right plan for your business needs by exploring the different options for each Dynamics 365 app.",
    linkText: "See pricing overview",
    linkHref: "https://www.microsoft.com/en-in/dynamics-365/pricing-overview"
  }
];

const FeatureCard = ({ imageSrc, imageAlt, title, description, linkText, linkHref }: FeatureCardProps) => (
  <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-neutral-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 h-full">
    <div className="relative">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={429}
        className="w-full h-auto object-cover"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-semibold text-[#323130] mb-2">{title}</h3>
      <p className="text-base text-[#605e5c] mb-6 flex-grow">{description}</p>
      <Link href={linkHref} className="mt-auto inline-flex items-center text-[#0078d4] font-semibold group w-fit">
        <span className="flex items-center justify-center bg-[#0078d4] rounded-full w-6 h-6 mr-2 transition-colors group-hover:bg-[#005a9e]">
          <ChevronRight className="w-4 h-4 text-white" />
        </span>
        <span className="group-hover:underline">{linkText}</span>
      </Link>
    </div>
  </div>
);

const OverviewSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#605e5c] tracking-widest uppercase mb-4">
            Overview
          </p>
          <h2 className="text-4xl font-semibold text-[#323130] tracking-tight mb-4">
            Shape the future of your business
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[#605e5c] leading-7">
            Connect teams, processes, and data across your entire organization to create exceptional customer experiences and operational agility.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;