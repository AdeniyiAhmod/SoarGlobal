import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/site";
import Image from "next/image";

type ServiceGridProps = {
  detailed?: boolean;
};

export function ServiceGrid({ detailed = false }: ServiceGridProps) {
  const visibleServices = detailed ? services : services.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeader
          title={detailed ? "Services" : "What We Handle"}
          text={detailed ? "Straightforward trade and logistics support, without unnecessary complexity." : "A focused set of services for moving, sourcing and delivering goods."}
        />
        {detailed ? null : (
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-80 overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-950 shadow-sm">
              <Image
                src="/images/what-we-handle.png"
                alt="Modern logistics yard with a delivery truck, warehouse and stacked containers"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {visibleServices.map((service) => (
                <ServiceCard key={service.slug} service={service} detailed={detailed} />
              ))}
            </div>
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
            <ButtonLink href="/services" variant="light">
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
