import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { quickLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a quote from Soar Global for procurement, freight, import, export or parcel shipping.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Tell us what you need to move"
        text="Share your requirements and we will respond with practical options for sourcing, shipping or delivery support."
      />
      <section className="section-padding bg-slate-50">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <QuoteForm />
          <aside className="rounded bg-navy-950 p-7 text-white shadow-soft">
            <h2 className="text-2xl font-bold uppercase sm:font-extrabold">Prefer direct contact?</h2>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Reach us by phone, email or WhatsApp and include the goods, route, timeline and service you need.
            </p>
            <div className="mt-6 grid gap-4">
              {quickLinks.slice(0, 3).map((link) => (
                <a key={link.title} href={link.href} className="flex gap-4 rounded border border-white/10 p-4 hover:border-gold-500">
                  <link.icon className="text-gold-500" size={28} aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-bold uppercase text-white/50">{link.title}</span>
                    <span className="mt-1 block text-sm font-semibold text-white/85">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
