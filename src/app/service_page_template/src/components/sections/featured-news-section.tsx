"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";

type NewsItem = {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const newsItems: NewsItem[] = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/1063742-Featurednews-01-34.webp",
    alt: "A man and woman looking at a laptop.",
    title: "Implement autonomous processes with agent-ready apps",
    description: "Enhance AI agent collaboration with Model Context Protocol (MCP) servers for Dynamics 365.",
    link: "https://go.microsoft.com/fwlink/?linkid=2320758&clcid=0x4009&culture=en-in&country=in",
    linkText: "Read the blog",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/1063742-Featurednews-02-35.webp",
    alt: "A group of people sitting in a meeting with a laptop on a table and one person looking at a tablet.",
    title: "Scale your teams using autonomous agents in Dynamics 365",
    description: "Accelerate your AI adoption with autonomous agents that handle essential business tasks.",
    link: "https://go.microsoft.com/fwlink/?linkid=2292611&clcid=0x4009&culture=en-in&country=in",
    linkText: "Learn more",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/1063742-Featurednews-03-36.webp",
    alt: "Confident woman holding a tablet.",
    title: "Explore leadership strategies for the AI era",
    description: "Empower your workforce to drive revenue and boost efficiency with AI-powered insights and workflows.",
    link: "https://go.microsoft.com/fwlink/?linkid=2292325&clcid=0x4009&culture=en-in&country=in",
    linkText: "Get the e-book",
  },
];

const NewsLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="mt-8 group inline-flex items-center gap-2 text-base font-semibold text-[#0078D4] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    <div className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-[#0078D4] transition-colors group-hover:bg-[#005a9e]">
      <ChevronRight className="h-5 w-5 text-white" />
    </div>
    <span className="border-b-2 border-transparent group-hover:border-[#0078D4]">{children}</span>
  </a>
);

export default function FeaturedNewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#605E5C]">
            Featured news
          </p>
          <h2 className="mt-2 text-[36px] font-semibold leading-[44px] text-[#323130]">
            What’s new and notable
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent className="-ml-6">
            {newsItems.map((item, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1000}
                      height={429}
                      className="aspect-[1000/429] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-8">
                    <h3 className="text-2xl font-semibold leading-8 text-[#323130]">{item.title}</h3>
                    <p className="mt-2 flex-grow text-base leading-6 text-[#605E5C]">{item.description}</p>
                    <NewsLink href={item.link}>{item.linkText}</NewsLink>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-12 flex items-center justify-center gap-4">
            <CarouselPrevious className="static h-12 w-12 transform-none rounded-full border border-[#323130] bg-white text-[#323130] hover:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-300" />
            <CarouselNext className="static h-12 w-12 transform-none rounded-full border border-[#323130] bg-white text-[#323130] hover:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-300" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}