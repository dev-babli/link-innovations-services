import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';

const footnotes = [
  {
    id: 1,
    text: 'Results are over three years for a composite organization based on customers interviewed for a commissioned study delivered by Forrester Consulting, The Total Economic Impact™ of Microsoft Dynamics 365 Customer Insights, April 2024.',
    ref: 'https://www.microsoft.com/en-in/dynamics-365#footnote-1',
  },
  {
    id: 2,
    text: 'Results are over three years for a composite organization based on customers interviewed for a commissioned study delivered by Forrester Consulting, The Total Economic Impact™ of Microsoft Dynamics 365 Customer Service, February 2024.',
    ref: 'https://www.microsoft.com/en-in/dynamics-365#footnote-2',
  },
  {
    id: 3,
    text: 'Results are over three years for a composite organization based on customers interviewed for a commissioned study delivered by Forrester Consulting, The Total Economic Impact™ of Microsoft Dynamics 365 Field Service, December 2023.',
    ref: 'https://www.microsoft.com/en-in/dynamics-365#footnote-3',
  },
  {
    id: 4,
    text: 'Results are over three years for a composite organization based on interviewed customers. The Total Economic Impact™ of Microsoft Dynamics 365 ERP, a commissioned study conducted by Forrester Consulting, March 2024.',
    ref: 'https://www.microsoft.com/en-in/dynamics-365#footnote-4',
  },
  {
    id: 5,
    text: 'Forbes Advisor, Best Cloud ERP Software of 2024, Amy Nichol Smith, March 24, 2024.',
    ref: 'https://www.microsoft.com/en-in/dynamics-365#footnote-5',
  },
];

const socialLinks = [
  { name: 'Twitter', href: 'https://go.microsoft.com/fwlink/?linkid=2252868', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Twitter-XCorp-black2x-42.webp' },
  { name: 'LinkedIn', href: 'https://go.microsoft.com/fwlink/?linkid=2252973', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/LinkedIn-29-43.webp' },
  { name: 'YouTube', href: 'https://go.microsoft.com/fwlink/?linkid=2274858', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/YouTube%202x-44.webp' },
  { name: 'Facebook', href: 'https://go.microsoft.com/fwlink/?linkid=2275138', icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/Social_Media_Logo_FB-45.webp' },
];

const footerLinkColumns = {
  'What\'s new': [
    { name: 'Surface Pro', href: '#' },
    { name: 'Surface Laptop', href: '#' },
    { name: 'Copilot for organizations', href: '#' },
    { name: 'Copilot for personal use', href: '#' },
    { name: 'Microsoft 365', href: '#' },
    { name: 'Windows 11 apps', href: '#' },
  ],
  'Microsoft Store': [
    { name: 'Account profile', href: '#' },
    { name: 'Download Center', href: '#' },
    { name: 'Microsoft Store support', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Order tracking', href: '#' },
  ],
  'Education': [
    { name: 'Microsoft in education', href: '#' },
    { name: 'Devices for education', href: '#' },
    { name: 'Microsoft Teams for Education', href: '#' },
    { name: 'Microsoft 365 Education', href: '#' },
    { name: 'Office Education', href: '#' },
    { name: 'Educator training and development', href: '#' },
    { name: 'Deals for students and parents', href: '#' },
    { name: 'Azure for students', href: '#' },
  ],
  'Business': [
    { name: 'Microsoft Cloud', href: '#' },
    { name: 'Microsoft Security', href: '#' },
    { name: 'Azure', href: '#' },
    { name: 'Dynamics 365', href: '#' },
    { name: 'Microsoft Advertising', href: '#' },
    { name: 'Microsoft 365 Copilot', href: '#' },
    { name: 'Microsoft Teams', href: '#' },
  ],
  'Developer & IT': [
    { name: 'Microsoft Developer', href: '#' },
    { name: 'Microsoft Learn', href: '#' },
    { name: 'Support for AI marketplace', href: '#' },
    { name: 'Microsoft Tech Community', href: '#' },
    { name: 'Azure Marketplace', href: '#' },
    { name: 'AppSource', href: '#' },
    { name: 'Microsoft Power Platform', href: '#' },
    { name: 'Visual Studio', href: '#' },
  ],
  'Company': [
    { name: 'Careers', href: '#' },
    { name: 'About Microsoft', href: '#' },
    { name: 'Company news', href: '#' },
    { name: 'Privacy at Microsoft', href: '#' },
    { name: 'Investors', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Sustainability', href: '#' },
  ],
};

const FooterSection = () => {
  return (
    <div className="bg-white text-sm">
      <div className="mx-auto max-w-[960px] px-6 lg:px-0 py-8">
        <ul>
          {footnotes.map((note) => (
            <li key={note.id} id={`footnote-${note.id}`} className="mb-4 text-xs text-[#605e5c] leading-[18px]">
              <a href={note.ref} className="text-primary-blue hover:underline pr-1">[{note.id}]</a>
              {note.text}
            </li>
          ))}
        </ul>
      </div>

      <footer className="bg-[#f2f2f2] text-[#616161]">
        <div className="mx-auto max-w-[1600px] px-[15px] sm:px-6 lg:px-[55px] pt-9 pb-3">
          <div className="mb-8 flex items-center space-x-6">
            <span className="text-[15px] text-[#616161]">Follow Dynamics 365</span>
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                <Image src={link.icon} alt={`${link.name} logo`} width={20} height={20} className="h-5 w-auto" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {Object.entries(footerLinkColumns).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-[15px] font-semibold text-[#616161]">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[11px] text-[#616161] hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs text-[#616161]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 lg:mb-0">
              <a href="#" className="flex items-center hover:underline">
                <Globe className="mr-1 h-4 w-4" />
                <span>English (India)</span>
              </a>
              <a href="#" className="flex items-center hover:underline">
                    <Image src="https://c.s-microsoft.com/en-us/ccpa/images/icon.png" alt="Privacy choices" width={29} height={14} />
                    <span className="ml-2">Your Privacy Choices</span>
              </a>
              <a href="#" className="hover:underline">Consumer Health Privacy</a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:underline">Contact Microsoft</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms of use</a>
              <a href="#" className="hover:underline">Trademarks</a>
              <a href="#" className="hover:underline">About our ads</a>
              <span>© Microsoft 2023</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;