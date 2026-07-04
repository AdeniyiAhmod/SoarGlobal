import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { contact, services } from "@/lib/site";
import Image from "next/image";

type ServiceGridProps = {
  detailed?: boolean;
};

const homeServices = [
  {
    slug: "procurement-sourcing",
    image: "/images/service-procurement.png",
    alt: "Organised warehouse goods inspection for procurement and sourcing",
    eyebrow: "Source",
    text: "Find the right products and suppliers without chasing every detail.",
  },
  {
    slug: "freight-forwarding",
    image: "/images/service-freight.png",
    alt: "Container truck moving through a modern freight terminal",
    eyebrow: "Move",
    text: "Plan the route, paperwork and handover before goods move.",
  },
  {
    slug: "automotive-export",
    image: "/images/service-automotive.png",
    alt: "Vehicles prepared for export at a clean port yard",
    eyebrow: "Export",
    text: "Move vehicles, parts and stock with export-ready coordination.",
  },
];

const serviceDetails: Record<
  string,
  {
    image?: string;
    alt?: string;
    points: string[];
  }
> = {
  "procurement-sourcing": {
    image: "/images/service-procurement.png",
    alt: "Organised warehouse goods inspection for procurement and sourcing",
    points: [
      "Supplier search and product coordination",
      "Purchase support before goods move",
      "Clear handover into shipping or export",
    ],
  },
  "freight-forwarding": {
    image: "/images/service-freight.png",
    alt: "Container truck moving through a modern freight terminal",
    points: [
      "Sea, air and road route planning",
      "Collection and delivery coordination",
      "Practical guidance on movement timelines",
    ],
  },
  "automotive-export": {
    image: "/images/service-automotive.png",
    alt: "Vehicles prepared for export at a clean port yard",
    points: [
      "Cars, vans, parts and commercial stock",
      "Export preparation and document guidance",
      "Port, handover and onward movement support",
    ],
  },
  "parcel-shipping": {
    points: [
      "Personal, retail and business parcels",
      "International delivery option guidance",
      "Simple preparation advice before dispatch",
    ],
  },
  "import-export": {
    points: [
      "Goods moving into or out of Northern Ireland",
      "Supplier, route and documentation support",
      "Clear next steps for cross-border movement",
    ],
  },
  "business-logistics": {
    points: [
      "Recurring movement and delivery planning",
      "Support for SMEs and growing teams",
      "Dependable coordination across partners",
    ],
  },
};

export function ServiceGrid({ detailed = false }: ServiceGridProps) {
  const visibleServices = detailed ? services : services.slice(0, 3);
  const stackedServices = homeServices.map((homeService) => ({
    ...homeService,
    service: services.find((service) => service.slug === homeService.slug)!,
  }));

  return (
    <section className={detailed ? "section-padding bg-white" : "bg-white py-16 sm:py-20 lg:py-24"}>
      <div className="container-shell">
        <SectionHeader
          title={detailed ? "Services" : "What We Handle"}
          text={detailed ? "Straightforward trade and logistics support, without unnecessary complexity." : "A focused set of services for moving, sourcing and delivering goods."}
        />
        {detailed ? null : (
          <div className="mt-12 space-y-7 lg:mt-16 lg:space-y-10">
            {stackedServices.map((item, index) => (
              <article
                key={item.slug}
                className={`service-stack-card overflow-hidden rounded-2xl border shadow-soft lg:sticky ${
                  index === 1 ? "border-navy-900 bg-navy-950 text-white" : "border-navy-950/10 bg-white text-navy-950"
                }`}
                style={{ top: `${96 + index * 18}px`, zIndex: 10 + index }}
              >
                <div className={`grid min-h-[520px] lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                    <div className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                      index === 1 ? "bg-white/10 text-gold-400" : "bg-gold-500/12 text-gold-600"
                    }`}>
                      {item.eyebrow}
                    </div>
                    <h3 className="mt-5 max-w-md text-3xl font-extrabold leading-tight sm:text-4xl">
                      {item.service.title}
                    </h3>
                    <p className={`mt-4 max-w-md text-base leading-7 ${index === 1 ? "text-white/72" : "text-navy-950/68"}`}>
                      {item.text}
                    </p>
                    <Link
                      href={`/services#${item.slug}`}
                      className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${
                        index === 1 ? "text-gold-400 hover:text-white" : "text-gold-600 hover:text-navy-950"
                      }`}
                    >
                      Learn more
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="relative min-h-72 overflow-hidden bg-navy-950 lg:min-h-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="service-stack-image object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        {detailed ? (
          <>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visibleServices.map((service) => (
                <ServiceCard key={service.slug} service={service} detailed={detailed} />
              ))}
            </div>
            <div className="mt-16 grid gap-6">
              {visibleServices.map((service, index) => (
                <ServiceDetail key={service.slug} service={service} index={index} />
              ))}
            </div>
          </>
        ) : null}
        {!detailed ? (
          <div className="mt-8 text-center">
            <ButtonLink href="/services" className="px-7">
              See all services
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}

type Service = (typeof services)[number];

function ServiceCard({ service, detailed }: { service: Service; detailed: boolean }) {
  return (
    <article
      id={detailed ? `overview-${service.slug}` : undefined}
      className="scroll-mt-32 rounded-xl border border-navy-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/12 text-gold-600">
        <service.icon aria-hidden="true" size={23} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-navy-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-navy-950/68">{detailed ? service.body : service.excerpt}</p>
      <Link href={detailed ? `#${service.slug}` : `/services#${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-navy-950">
        Learn more
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const detail = serviceDetails[service.slug];
  const dark = index === 1;

  return (
    <article
      id={service.slug}
      className={`scroll-mt-28 overflow-hidden rounded-2xl border shadow-sm ${
        dark ? "border-navy-900 bg-navy-950 text-white" : "border-navy-950/10 bg-white text-navy-950"
      }`}
    >
      <div className={`grid lg:grid-cols-[0.9fr_1.1fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative min-h-72 bg-slate-100 lg:min-h-full">
          {detail.image ? (
            <Image
              src={detail.image}
              alt={detail.alt ?? service.title}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className={`flex h-full min-h-72 items-center justify-center ${dark ? "bg-white/5" : "bg-slate-50"}`}>
              <service.icon className={dark ? "text-gold-400" : "text-gold-600"} size={72} aria-hidden="true" />
            </div>
          )}
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${dark ? "bg-white/10 text-gold-400" : "bg-gold-500/12 text-gold-600"}`}>
            <service.icon aria-hidden="true" size={23} />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
            {service.title}
          </h2>
          <p className={`mt-4 max-w-2xl text-base leading-7 ${dark ? "text-white/72" : "text-navy-950/68"}`}>
            {service.body}
          </p>
          <ul className="mt-6 grid gap-3">
            {detail.points.map((point) => (
              <li key={point} className={`flex gap-3 text-sm leading-6 ${dark ? "text-white/76" : "text-navy-950/72"}`}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/quote" className="w-full sm:w-auto">
              Get a Quote
            </ButtonLink>
            <ButtonLink href={contact.whatsappHref} variant={dark ? "outline" : "light"} icon={MessageCircle} className="w-full sm:w-auto">
              Ask on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
