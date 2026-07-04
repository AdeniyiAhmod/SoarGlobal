import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { businessSolutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Solutions",
  description: "SME logistics, supply chain, vendor management, trade consultancy and customs support from Soar Global.",
};

export default function BusinessSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Solutions"
        title="Logistics support built around your business"
        text="From supply chain planning to recurring freight movement, we help businesses stay focused while goods keep moving."
        cta="Start a Conversation"
        ctaHref="/contact"
      />
      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeader
            title="Practical support for growing teams"
            text="Work with one partner for procurement, shipment planning, vendor coordination and delivery support."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {businessSolutions.map((solution) => (
              <article key={solution.title} className="rounded border border-navy-950/10 bg-white p-6 shadow-sm">
                <solution.icon className="text-gold-600" size={36} aria-hidden="true" />
                <h2 className="mt-5 text-xl font-extrabold uppercase text-navy-950">{solution.title}</h2>
                <p className="mt-3 text-sm leading-6 text-navy-950/70">{solution.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
