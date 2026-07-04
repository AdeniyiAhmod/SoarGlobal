import type { Metadata } from "next";
import Image from "next/image";
import { Globe2, MapPin, ShieldCheck, Truck, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Soar Global Trade & Logistics and our Northern Ireland-based international logistics support.",
};

const principles = [
  {
    title: "Clear coordination",
    text: "Every movement starts with practical next steps, plain communication and a route that makes sense.",
    icon: Truck,
  },
  {
    title: "Trusted handling",
    text: "Goods, documents and supplier handovers are treated carefully from enquiry through delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Personal support",
    text: "Businesses and individuals deal with a direct team that understands the requirement before proposing a solution.",
    icon: UsersRound,
  },
];

const position = [
  { value: "Belfast", label: "Northern Ireland base", icon: MapPin },
  { value: "Global", label: "Trade partner outlook", icon: Globe2 },
  { value: "Practical", label: "Procurement and logistics support", icon: Truck },
];

export default function AboutPage() {
  return (
    <>
      <h1 className="sr-only">About Soar Global</h1>
      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeader
            title="Local logistics. Global reach."
            text="Soar Global Trade & Logistics Ltd connects Northern Ireland with practical procurement, freight, import and export support."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative min-h-[440px] overflow-hidden rounded-2xl bg-navy-950 shadow-soft">
              <Image
                src="/images/hero-port.png"
                alt="Container port and freight handling for international logistics"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/82 via-navy-950/28 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-md p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-400">
                  Belfast to global markets
                </p>
                <p className="mt-4 text-2xl font-extrabold leading-tight">
                  Built for customers who need goods sourced, moved and delivered without confusion.
                </p>
              </div>
            </div>

            <div className="grid content-center gap-5 rounded-2xl border border-navy-950/10 bg-slate-50 p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">
                How we work
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-950 sm:text-4xl">
                Practical trade support, shaped around the job.
              </h2>
              <div className="grid gap-4 text-base leading-8 text-navy-950/72">
                <p>
                  From supplier sourcing and purchase coordination to freight forwarding, parcel shipping and vehicle export, the work is built around clear movement of goods.
                </p>
                <p>
                  Based in Belfast, Soar Global combines local understanding with a global partner mindset, helping SMEs, families and growing trade businesses move with more confidence.
                </p>
              </div>
              <div className="pt-2">
                <ButtonLink href="/services" variant="light">
                  View Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/12 text-gold-600">
                  <item.icon size={23} aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-extrabold text-navy-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-navy-950/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="gold-underline text-3xl font-extrabold tracking-tight text-navy-950">
              Why Soar Global?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-navy-950/70">
              Because logistics should feel organised before anything moves. We focus on the route, the handover and the customer communication that keeps the work moving.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {position.map((item) => (
              <div key={item.label} className="rounded-2xl border border-navy-950/10 bg-white p-5 shadow-sm">
                <item.icon className="text-gold-600" size={24} aria-hidden="true" />
                <p className="mt-5 text-2xl font-extrabold text-navy-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-navy-950/62">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
