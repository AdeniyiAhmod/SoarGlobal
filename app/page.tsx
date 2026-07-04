import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { IndustryBand } from "@/components/IndustryBand";
import { ServiceGrid } from "@/components/ServiceGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <IndustryBand />
      <FaqSection />
    </>
  );
}
