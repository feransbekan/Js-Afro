import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { BusinessDivisions } from '@/components/home/BusinessDivisions';
import { TrustIndicators } from '@/components/home/TrustIndicators';
import { CallToAction } from '@/components/home/CallToAction';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <ServicesOverview />
      <BusinessDivisions />
      <CallToAction />
    </>
  );
}