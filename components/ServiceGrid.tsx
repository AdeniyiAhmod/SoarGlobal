import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/site";
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
                    <div className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.12em] ${
                      index === 1 ? "bg-white/10 text-gold-400" : "bg-gold-500/12 text-gold-600"
                    }`}>
                      {item.eyebrow}
                    </div>
                    <h3 className="mt-5 max-w-md text-3xl font-black leading-tight sm:text-4xl">
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
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed={detailed} />
            ))}
          </div>
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
      id={service.slug}
      className="scroll-mt-32 rounded-xl border border-navy-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/12 text-gold-600">
        <service.icon aria-hidden="true" size={23} />
      </div>
      <h3 className="mt-5 text-lg font-black text-navy-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-navy-950/68">{detailed ? service.body : service.excerpt}</p>
      <Link href={`/services#${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-navy-950">
        Learn more
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
