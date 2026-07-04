import { industries } from "@/lib/site";

type IndustryBandProps = {
  expanded?: boolean;
};

export function IndustryBand({ expanded = false }: IndustryBandProps) {
  return (
    <section className="overflow-hidden bg-slate-50 py-14">
      <div className="container-shell">
        <div className="text-center">
          <h2 className="gold-underline text-3xl font-extrabold tracking-tight text-navy-950">Industries We Serve</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-navy-950/64">
            Support for common trade, retail and operational sectors.
          </p>
        </div>
        {expanded ? (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} industry={industry} expanded />
            ))}
          </div>
        ) : (
          <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
            <div className="industry-marquee-track flex w-max gap-4 px-4">
              {[...industries, ...industries].map((industry, index) => (
                <IndustryCard key={`${industry.title}-${index}`} industry={industry} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

type Industry = (typeof industries)[number];

function IndustryCard({ industry, expanded = false }: { industry: Industry; expanded?: boolean }) {
  return (
    <div
      className={
        expanded
          ? "flex items-start gap-4 rounded-xl border border-navy-950/10 bg-white p-5 text-left transition hover:border-gold-500/70"
          : "flex h-28 w-52 shrink-0 flex-col justify-between rounded-2xl border border-navy-950/10 bg-white p-5 shadow-sm"
      }
    >
      <industry.icon className="shrink-0 text-gold-600" size={expanded ? 28 : 24} aria-hidden="true" />
      <div>
        <h3 className="text-sm font-bold text-navy-950">{industry.title}</h3>
        {expanded ? (
          <p className="mt-2 text-sm leading-6 text-navy-950/64">
            Trade and logistics support for {industry.title.toLowerCase()} businesses moving goods across local and international routes.
          </p>
        ) : null}
      </div>
    </div>
  );
}
