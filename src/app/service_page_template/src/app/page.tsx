import HeaderNavigation from '@/components/sections/header-navigation';
import HeroSection from '@/components/sections/hero-section';
import OverviewSection from '@/components/sections/overview-section';
import SolutionsSection from '@/components/sections/solutions-section';
import ProductDemosSection from '@/components/sections/product-demos-section';
import AppsAddonsSection from '@/components/sections/apps-addons-section';
import CustomerStoriesSection from '@/components/sections/customer-stories-section';
import FeaturedNewsSection from '@/components/sections/featured-news-section';
import GetStartedSection from '@/components/sections/get-started-section';
import FooterSection from '@/components/sections/footer-section';

export default function HomePage() {
  return (
    <>
      <HeaderNavigation />
      <main>
        <HeroSection />
        <OverviewSection />
        <SolutionsSection />
        <ProductDemosSection />
        <AppsAddonsSection />
        <CustomerStoriesSection />
        <FeaturedNewsSection />
        <GetStartedSection />
      </main>
      <FooterSection />
    </>
  );
}