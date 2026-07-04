import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { IndustryBand } from "@/components/IndustryBand";
import { ServiceGrid } from "@/components/ServiceGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <IndustryBand />
      <CtaBand />
    </>
  );
}
