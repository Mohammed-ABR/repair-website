import { HeroSection } from "@/components/home/hero-section";
import {
  AboutSection,
  BrandsShowcaseSection,
  CommonProblemsSection,
  CtaSection,
  DevicesGridSection,
  FaqSection,
  LocationsSection,
  MapSection,
  PricingSection,
  ReviewsSection,
  ServicesCardsSection,
  TrustStripSection,
  WhyChooseSection,
} from "@/components/home/home-sections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustStripSection />
      <ReviewsSection />
      <CommonProblemsSection />
      <DevicesGridSection />
      <ServicesCardsSection />
      <PricingSection />
      <WhyChooseSection />
      <AboutSection />
      <BrandsShowcaseSection />
      <LocationsSection />
      <FaqSection />
      <CtaSection />
      <MapSection />
    </div>
  );
}
