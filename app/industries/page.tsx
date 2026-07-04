import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { IndustryBand } from "@/components/IndustryBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industries",
  description: "Trade and logistics support for automotive, agriculture, construction, retail, manufacturing, healthcare and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Specialist support across sectors"
        text="We help organisations and individuals move products, parts, parcels and supplies with dependable logistics support."
        cta="Explore Services"
        ctaHref="/services"
      />
      <IndustryBand expanded />
      <CtaBand />
    </>
  );
}
