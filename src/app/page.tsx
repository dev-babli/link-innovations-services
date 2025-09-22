import { HeroHeader } from "@/components/header";
import { HeroSection } from "@/components/HeroSection";
import { HyperspeedSection } from "@/components/HyperspeedSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroHeader />
      <HyperspeedSection />
      <div className="flex flex-col pt-16 items-center justify-center min-h-screen bg-white">
        <HeroSection />
      </div>
    </main>
  );
}