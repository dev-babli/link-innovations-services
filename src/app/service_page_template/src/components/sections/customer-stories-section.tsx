"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Product {
  name: string;
  iconUrl: string;
  link: string;
}

interface Story {
  id: number;
  companyName: string;
  logoUrl: string;
  logoInCardUrl: string;
  imageUrl: string;
  quote: string;
  author: {
    name: string;
    title: string;
  };
  metric?: {
    value: string;
    description: string;
  };
  products: Product[];
  storyLink: string;
}

const customerStoriesData: Story[] = [
  {
    id: 0,
    companyName: "ABN AMRO",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-03-customerstory-logo-29.webp",
    logoInCardUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-03-customerstory-logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=173&hei=75&qlt=100&fit=constrain",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-03-customerstory?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1312&hei=945&qlt=100&fit=constrain",
    quote: "“With Dynamics 365, total cost of ownership went down by as much as 40 percent compared to our previous solution.”",
    author: {
      name: "Pepijn Brinkhoff",
      title: "Lead Product Owner, ABN AMRO",
    },
    metric: {
      value: "40%",
      description: "Reduction in cost of ownership",
    },
    products: [
      {
        name: "Dynamics 365 Customer Service",
        iconUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/352294-Icon-customerservice?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=100&fit=constrain",
        link: "https://www.microsoft.com/en-in/dynamics-365/products/customer-service",
      },
      {
        name: "Dynamics 365 Sales",
        iconUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/352294-Icon-sales?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=100&fit=constrain",
        link: "https://www.microsoft.com/en-in/dynamics-365/products/sales",
      },
      {
        name: "Dynamics 365 Customer Insights",
        iconUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/352294-Icon-customerinsights?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=100&fit=constrain",
        link: "https://www.microsoft.com/en-in/dynamics-365/products/customer-insights",
      },
    ],
    storyLink: "https://go.microsoft.com/fwlink/?linkid=2284136&clcid=0x4009&culture=en-in&country=in",
  },
  {
    id: 1,
    companyName: "Alltech",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-01-customerstory-logo-30.webp",
    logoInCardUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-01-customerstory-logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=173&hei=75&qlt=100&fit=constrain",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-01-customerstory?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1312&hei=945&qlt=100&fit=constrain",
    quote: "“Microsoft Dynamics 365 has been the tool from the start because of its extraordinary flexibility.\"",
    author: {
      name: "Christina Schull",
      title: "Chief Information Officer, Alltech",
    },
    products: [
      {
        name: "Dynamics 365 Finance",
        iconUrl: "https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/logo/Icon_Dynamics-365-Finance_20x20.svg",
        link: "https://www.microsoft.com/en-in/dynamics-365/products/finance",
      },
      {
        name: "Dynamics 365 Supply Chain Management",
        iconUrl: "https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/logo/Icon_Dynamics-365-Supply-Chain-Management_20x20.svg",
        link: "https://www.microsoft.com/en-in/dynamics-365/solutions/supply-chain",
      },
    ],
    storyLink: "https://go.microsoft.com/fwlink/?linkid=2283901&clcid=0x4009&culture=en-in&country=in",
  },
  {
    id: 2,
    companyName: "Michelin",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-02-customerstory-logo-31.webp",
    logoInCardUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-02-customerstory-logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=173&hei=75&qlt=100&fit=constrain",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-02-customerstory?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1312&hei=945&qlt=100&fit=constrain",
    quote: '“Business Central is very agile, and the features are flexible, so it is very easy for us to install and maintain”',
    author: {
      name: "Julie Parizel",
      title: "ERP Transformation Program Manager, Michelin",
    },
    products: [
      {
        name: "Dynamics 365 Business Central",
        iconUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/352294-icon-businesscentral?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=100&fit=constrain",
        link: "https://www.microsoft.com/en-in/dynamics-365/products/business-central",
      },
    ],
    storyLink: "https://go.microsoft.com/fwlink/?linkid=2283811&clcid=0x4009&culture=en-in&country=in",
  },
  {
    id: 3,
    companyName: "Team Rubicon",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-04-customerstory-logo-32.webp",
    logoInCardUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-04-customerstory-logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=173&hei=75&qlt=100&fit=constrain",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-04-customerstory?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1312&hei=945&qlt=100&fit=constrain",
    quote: "“Copilot in Dynamics 365 Customer Insights lets us move quickly, effectively, and efficiently.”",
    author: {
      name: "Art delaCruz",
      title: "Chief Executive Officer, Team Rubicon",
    },
    products: [
      {
        name: "Dynamics 365 Customer Insights",
        iconUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/352294-Icon-customerinsights?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=100&fit=constrain",
        link: "https://www.microsoft.com/en-in/dynamics-365/products/customer-insights",
      },
    ],
    storyLink: "https://go.microsoft.com/fwlink/?linkid=2284224&clcid=0x4009&culture=en-in&country=in",
  },
  {
    id: 4,
    companyName: "Andretti Indoor Karting & Games",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-05-customerstory-logo-33.webp",
    logoInCardUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-05-customerstory-logo?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=173&hei=75&qlt=100&fit=constrain",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/352294-05-customerstory?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1312&hei=945&qlt=100&fit=constrain",
    quote: "\"Essentially, everything—invoices, payments, expense reports, all of it—is pushed straight into Business Central ... it’s just fantastic\"",
    author: {
      name: "Tammy Koehler",
      title: "Chief Financial Officer, Andretti Indoor Karting & Games",
    },
    metric: {
      value: "USD$300,000 to USD$500,000",
      description: "Cost Savings per year",
    },
    products: [
      {
        name: "Dynamics 365 Business Central",
        iconUrl: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/352294-icon-businesscentral?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=16&hei=16&qlt=100&fit=constrain",
        link: "https://www.microsoft.com/en-in/dynamics-365/products/business-central",
      },
    ],
    storyLink: "https://go.microsoft.com/fwlink/?linkid=2284000&clcid=0x4009&culture=en-in&country=in",
  },
];

const CustomerStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = customerStoriesData[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-custstory-bg-28.webp"
        alt="Customer story background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 h-full w-full"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#605e5c]">
            Customer stories
          </p>
          <div className="mt-4 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-4xl font-semibold leading-tight text-[#323130]">
              How customers innovate with Dynamics 365
            </h2>
            <a
              href="https://go.microsoft.com/fwlink/?linkid=2315828&clcid=0x4009&culture=en-in&country=in"
              className="group hidden shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-[#323130] px-3 py-2 text-sm font-semibold text-[#323130] transition-colors hover:bg-black/5 md:inline-flex"
            >
              Explore all stories
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-12">
          {customerStoriesData.map(
            (story, index) =>
              index === activeIndex && (
                <div
                  key={story.id}
                  role="tabpanel"
                  aria-labelledby={`carousel-tab-${story.id}`}
                  className="rounded-lg bg-white p-4 shadow-lg sm:p-8"
                >
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 flex flex-col justify-center lg:order-1">
                      <Image
                        src={story.logoInCardUrl}
                        alt={`${story.companyName} logo`}
                        width={173}
                        height={75}
                        className="h-auto w-[173px]"
                      />
                      <blockquote className="mt-6">
                        <p className="font-['Segoe_UI_Semibold'] relative text-lg font-semibold leading-snug text-[#323130] sm:text-2xl sm:leading-8">
                          {story.quote}
                        </p>
                      </blockquote>
                      <p className="mt-4 text-sm text-[#605e5c]">
                        {story.author.name}, {story.author.title}
                      </p>

                      {story.metric && (
                        <div className="mt-8">
                          <p className="font-['Segoe_UI_Semilight'] text-4xl font-light text-[#323130] sm:text-5xl">
                            {story.metric.value}
                          </p>
                          <p className="mt-2 text-sm text-[#605e5c]">{story.metric.description}</p>
                        </div>
                      )}

                      <div className="mt-8">
                        <h3 className="font-semibold text-[#323130]">Products</h3>
                        <ul className="mt-2 space-y-2">
                          {story.products.map((product) => (
                            <li key={product.name}>
                              <a
                                href={product.link}
                                className="group flex items-center gap-2 text-sm font-semibold text-[#0078d4] hover:underline"
                              >
                                <Image src={product.iconUrl} alt="" width={16} height={16} />
                                <span className="underline-offset-2 group-hover:underline">{product.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={story.storyLink}
                        className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-[2px] bg-[#005a9e] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#004a80]"
                      >
                        Read the story
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="order-1 lg:order-2">
                       <Image
                          src={story.imageUrl}
                          alt={`Customer story image for ${story.companyName}`}
                          width={656}
                          height={472}
                          className="w-full rounded-md object-cover"
                          quality={100}
                        />
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        <nav className="mt-8" aria-label="Customer stories carousel navigation">
          <div role="tablist" className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
            {customerStoriesData.map((story, index) => (
              <button
                key={story.id}
                role="tab"
                id={`carousel-tab-${story.id}`}
                aria-controls={`carousel-panel-${story.id}`}
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`relative flex h-full items-center justify-center rounded-sm border border-transparent bg-white px-2 py-6 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2 sm:px-4 ${
                  index === activeIndex ? "border-b-[3px] border-b-[#005a9e]" : "hover:border-gray-300"
                }`}
              >
                <div className="relative h-[25px] w-full sm:h-[30px]">
                  <Image
                    src={story.logoUrl}
                    alt={`${story.companyName} logo`}
                    layout="fill"
                    objectFit="contain"
                    className={index === activeIndex ? "" : "opacity-60"}
                  />
                </div>
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://go.microsoft.com/fwlink/?linkid=2315828&clcid=0x4009&culture=en-in&country=in"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-[#323130] px-3 py-2 text-sm font-semibold text-[#323130] transition-colors hover:bg-black/5"
          >
            Explore all stories
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;