import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { resourceItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Shipping guides, trade resources, FAQs and updates from Soar Global.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guidance for smarter trade and shipping"
        text="Use these starting points to prepare enquiries, understand service options and plan international movement."
        cta="Ask a Question"
        ctaHref="/contact"
      />
      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeader
            title="Helpful starting points"
            text="A simple resource hub for customers preparing shipments, sourcing requests or business logistics conversations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {resourceItems.map((item) => (
              <article
                key={item.title}
                id={item.title.toLowerCase().replaceAll(" ", "-")}
                className="scroll-mt-32 rounded border border-navy-950/10 bg-slate-50 p-6"
              >
                <h2 className="text-xl font-extrabold uppercase text-navy-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-navy-950/70">{item.text}</p>
              </article>
            ))}
            <article id="privacy-policy" className="scroll-mt-32 rounded border border-navy-950/10 bg-slate-50 p-6">
              <h2 className="text-xl font-extrabold uppercase text-navy-950">Privacy Policy</h2>
              <p className="mt-3 text-sm leading-6 text-navy-950/70">
                Soar Global only uses enquiry details to respond to customer requests and coordinate requested services.
              </p>
            </article>
            <article id="terms-conditions" className="scroll-mt-32 rounded border border-navy-950/10 bg-slate-50 p-6">
              <h2 className="text-xl font-extrabold uppercase text-navy-950">Terms & Conditions</h2>
              <p className="mt-3 text-sm leading-6 text-navy-950/70">
                Quotes, timelines and service availability are confirmed directly after reviewing shipment, sourcing or delivery requirements.
              </p>
            </article>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
