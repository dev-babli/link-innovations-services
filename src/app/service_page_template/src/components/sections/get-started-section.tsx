import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ContactCardProps {
  iconSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  hasArrow?: boolean;
}

const ContactCard = ({ iconSrc, title, description, linkText, linkHref, hasArrow = false }: ContactCardProps) => {
  return (
    <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg flex flex-col">
      <Image src={iconSrc} alt="" width={32} height={32} />
      <h4 className="mt-6 text-lg font-semibold text-[#323130]">{title}</h4>
      <p className="mt-2 text-sm text-[#605E5C] flex-grow">{description}</p>
      <a href={linkHref} className="mt-4 group inline-flex items-center font-semibold text-[#0078D4]">
        <span className="group-hover:underline">{linkText}</span>
        {hasArrow && <ChevronRight className="ml-1 w-4 h-4" />}
      </a>
    </div>
  );
};

const GetStartedSection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-nextsteps-bg-37.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wider text-[#605e5c] uppercase">
            NEXT STEPS
          </p>
          <h2 className="mt-2 text-4xl font-semibold text-[#323130]">
            Get started with Dynamics 365
          </h2>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-[#323130]">
                Try for free
              </h3>
              <p className="mt-4 text-base text-[#605E5C]">
                Get hands-on experience with Dynamics 365 business applications for 30 days.
              </p>
              <div className="mt-6">
                <a 
                  href="https://www.microsoft.com/en-in/dynamics-365/free-trial" 
                  className="inline-block bg-[#0078D4] text-white font-semibold px-5 py-2.5 rounded-sm hover:bg-[#005a9e] transition-colors text-base"
                >
                  Start a free trial
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-auto order-1 md:order-2">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-nextsteps-38.webp"
                alt="A group of women looking at a laptop."
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ContactCard
            iconSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-Icon-NextSteps-1-39.webp"
            title="Chat with a Dynamics 365 expert"
            description="Available M-F 9 AM to 6 PM."
            linkText="Chat now"
            linkHref="#!" 
            hasArrow={true}
          />
          <ContactCard
            iconSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-Icon-NextSteps-2-40.webp"
            title="Request a call back"
            description="Have a Dynamics 365 expert contact you."
            linkText="Send request"
            linkHref="https://go.microsoft.com/fwlink/?linkid=2283906&clcid=0x4009&culture=en-in&country=in"
            hasArrow={true}
          />
          <ContactCard
            iconSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/352294-Icon-NextSteps-3-41.webp"
            title="Call a Dynamics 365 expert"
            description="Available M-F 9 AM to 6 PM."
            linkText="Call (000) 8000 404 454"
            linkHref="tel:(000)-8000-404-454"
            hasArrow={false}
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;