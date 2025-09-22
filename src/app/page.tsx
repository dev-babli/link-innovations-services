import { CTASection } from "@/components/CTASection";
import Features from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import GlassSurfaceSection from "@/components/GlassSurfaceSection";
import { HeroHeader } from "@/components/header";
import { HeroSection } from "@/components/HeroSection";
import { HyperspeedSection } from "@/components/HyperspeedSection";
import { IntegrationsSection } from "@/components/IntegrationSection";
import { LogoSection } from "@/components/LogosSection";
import MainFeatureSection from "@/components/MainFeatureSection";
import MagicBento from "@/components/MagicBento";
import { TestimonialSection } from "@/components/TestimonialSection";
import TechnologyLogos from "@/components/TechnologyLogos";
import ImageScrollStack from "@/components/ImageScrollStack";
import GridMotion from "@/components/GridMotion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full ">
      <HeroHeader />
      <HyperspeedSection />
      <div className="flex flex-col pt-16 items-center justify-center min-h-screen bg-white">
        <HeroSection />
        <TechnologyLogos />
        <LogoSection />
        <MainFeatureSection />

        {/* Magic Bento Services Section */}
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Interactive Services Showcase
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive technology solutions with interactive cards
              </p>
            </div>
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </section>

        <Features />
        {/* <IntegrationsSection /> */}
        {/* <TestimonialSection /> */}
        {/* <CTASection /> */}
        {/* <GlassSurfaceSection /> */}

        {/* GridMotion Section */}
        <section className="w-full bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our work through an interactive grid of projects and achievements
              </p>
            </div>
            <GridMotion
              items={[
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
              ]}
              gradientColor="rgba(59, 130, 246, 0.2)"
            />
          </div>
        </section>

        <FooterSection />
      </div>
    </main>
  );
}