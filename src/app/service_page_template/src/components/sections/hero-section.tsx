import Image from 'next/image';
import { Play } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(0, 188, 242, 0.4) 0%, rgba(0, 120, 212, 0.3) 15%, rgba(3, 45, 75, 0) 30%), radial-gradient(circle at 100% 0%, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 15%, rgba(3, 45, 75, 0) 40%), radial-gradient(circle at 15% 100%, rgba(139, 92, 246, 0.4) 0%, rgba(0, 120, 212, 0.3) 20%, rgba(3, 45, 75, 0) 50%)',
        backgroundColor: '#032d4b',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left text-white">
            <p className="text-sm font-semibold tracking-[0.1em] uppercase mb-4">
              MICROSOFT DYNAMICS 365
            </p>
            <h1 className="font-semibold text-[48px] leading-[56px] tracking-tight mb-6">
              The new era of AI-powered business
            </h1>
            <p className="text-xl max-w-lg mx-auto lg:mx-0 mb-8">
              Adapt and innovate with intelligent CRM and ERP business
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="https://www.microsoft.com/en-in/dynamics-365/pricing-overview"
                className="inline-flex items-center justify-center bg-[#323130] text-white font-semibold py-2 px-5 rounded-[2px] transition-colors hover:bg-opacity-90"
                style={{ lineHeight: '1.5rem', minHeight: '40px' }}
              >
                See plans and pricing
              </Link>
              <Link
                href="https://www.microsoft.com/en-in/dynamics-365/free-trial"
                className="inline-flex items-center justify-center border border-white text-white font-semibold py-2 px-5 rounded-[2px] transition-colors hover:bg-white hover:text-[#323130]"
                style={{ lineHeight: '1.5rem', minHeight: '40px' }}
              >
                Try for free
              </Link>
            </div>
          </div>

          {/* Right Column: Video Thumbnail */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="p-1.5 bg-white/80 rounded-xl shadow-2xl backdrop-blur-sm">
              <div className="relative group">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9d4dfc94-d039-4ae8-9fa1-c9d15698059c-microsoft-com/assets/images/747231-Hero-video-Img-3.webp"
                  alt="Three colleagues in discussion around a table."
                  width={568}
                  height={320}
                  className="rounded-lg"
                  priority
                />
                <Link
                  href="https://www.microsoft.com/en-in/dynamics-365#modal-12"
                  aria-label="Play background video"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-black/40 border border-white/50 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
                    <Play className="h-7 w-7 fill-white text-white ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;