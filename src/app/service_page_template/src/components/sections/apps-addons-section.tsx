import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";

interface AppCardProps {
  app: {
    iconSrc: string;
    company: string;
    appName: string;
    description: string;
    rating: number;
    userCount: string;
    learnMoreLink: string;
  };
}

const appsData = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/icons/apps.25076.9236e8c9-9c06-40dd-952d-54670b6def09.f0ae5a63-e418-4991-aa32-341192a3466e.b326cbb7-3444-4bc1-b4a8-4c6dcd8fec9d-1.png",
    company: "Microsoft Corporation",
    appName: "Power BI",
    description: "Collaborate better with your data.",
    rating: 4.5,
    userCount: "(164463)",
    learnMoreLink: "#",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/icons/apps.3856.9322d801-18ce-407b-a6e5-5f23d7e182b0.406c3716-8f0e-4b02-b748-b734e3002714.53acfc94-b5e2-4e3f-8f2b-5d9f98581d42-2.png",
    company: "Microsoft Corporation",
    appName: "Copilot",
    description: "Your copilot for work",
    rating: 4.3,
    userCount: "(160598)",
    learnMoreLink: "#",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/icons/apps.16022.76bd76a9-dd08-45af-8fbb-83136361ba29.53e3d20a-d38e-4fda-b83d-edd73022f860.f5996c3f-1dfa-47e3-87d9-31482c013f19-3.png",
    company: "ADOBE INC.",
    appName: "Adobe Acrobat for Microsoft Teams and Outlook",
    description: "Gain insights, edit, convert, and collaborate on PDFs",
    rating: 4.1,
    userCount: "(52781)",
    learnMoreLink: "#",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/icons/apps.28310.942ef155-1abc-4218-b3f4-131f6b6160d0.5141c116-676d-4471-a0e1-39fe072b490a.e5460599-6716-43d1-8ea7-4070f40c21bd-4.png",
    company: "Dropbox Inc.",
    appName: "Dropbox for Outlook",
    description: "Share files of any size, access them from any device, and keep everyone in sync.",
    rating: 4.6,
    userCount: "(28678)",
    learnMoreLink: "#",
  },
];

const AppCard = ({ app }: AppCardProps) => (
  <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-8 flex flex-col text-left h-full">
    <div className="flex items-start mb-4">
      <Image
        src={app.iconSrc}
        alt={`${app.appName} logo`}
        width={40}
        height={40}
        className="mr-4 mt-1"
      />
      <div>
        <p className="text-xs text-[#605e5c]">{app.company}</p>
        <h3 className="text-xl font-semibold text-[#323130] leading-tight mt-1">
          {app.appName}
        </h3>
      </div>
    </div>
    <p className="text-[#605e5c] text-base mb-4 flex-grow">
      {app.description}
    </p>
    <div className="flex justify-between items-center mt-auto pt-6">
      <div className="flex items-center text-sm text-[#605e5c]">
        <Star className="w-4 h-4 mr-1 text-[#ffb900] fill-[#ffb900]" />
        <span>{app.rating.toFixed(1)}</span>
        <span className="ml-1">{app.userCount}</span>
      </div>
      <a
        href={app.learnMoreLink}
        className="text-sm font-semibold text-[#0078d4] flex items-center group"
      >
        <span className="group-hover:underline">Learn More</span>
        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

export default function AppsAddonsSection() {
  return (
    <section className="bg-[#f3f2f1] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-[1.2px] text-[#605e5c] uppercase mb-4">
          APPS AND ADD-ONS
        </p>
        <h2 className="text-[36px] font-semibold text-[#323130] max-w-4xl mx-auto leading-[44px]">
          Enhance Dynamics 365 with apps from industry-leading partners
        </h2>
        <p className="max-w-3xl mx-auto text-[#605e5c] mt-4 mb-12 text-lg leading-7">
          Add apps that help you tailor Dynamics 365 to better meet your specific business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1192px] mx-auto mb-12">
          {appsData.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>

        <a
          href="https://go.microsoft.com/fwlink/?linkid=2301375&clcid=0x4009&culture=en-in&country=in"
          className="inline-flex items-center font-semibold text-[#323130] group"
        >
          <div className="flex items-center justify-center w-8 h-8 mr-3 bg-[#323130] rounded-sm group-hover:bg-[#0078d4] transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
          <span className="group-hover:underline">View all apps</span>
        </a>
      </div>
    </section>
  );
}