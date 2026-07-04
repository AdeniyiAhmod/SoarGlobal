import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Soar Global Trade & Logistics and our Northern Ireland-based international logistics support.",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About Soar Global</h1>
      <section className="section-padding bg-white">
        <div className="container-shell max-w-4xl">
          <SectionHeader
            eyebrow="About"
            title="Local logistics. Global reach."
            text="Soar Global Trade & Logistics Ltd connects businesses and individuals in Northern Ireland with procurement, freight, import and export support."
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 text-base leading-8 text-navy-950/72">
            <p>
              From procurement and sourcing to freight forwarding and parcel shipping, our work is shaped around customers who need goods moved securely, efficiently and at the right price.
            </p>
            <p>
              Based in Belfast, we combine local understanding with a global partner network, helping SMEs, families and growing trade businesses reach international markets with confidence.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
