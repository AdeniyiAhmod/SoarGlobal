import { industries } from "@/lib/site";

type IndustryBandProps = {
  expanded?: boolean;
};

export function IndustryBand({ expanded = false }: IndustryBandProps) {
  return (
    <section className="bg-slate-50 py-14">
      <div className="container-shell">
        <div className="text-center">
          <h2 className="gold-underline text-3xl font-black tracking-tight text-navy-950">Industries We Serve</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-navy-950/64">
            Support for common trade, retail and operational sectors.
          </p>
        </div>
        <div className={`mt-8 grid gap-3 ${expanded ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}>
          {industries.map((industry) => (
            <div
              key={industry.title}
              className={`${expanded ? "items-start gap-4 p-5 text-left" : "items-center justify-center gap-2 p-4 text-center"} flex rounded-xl border border-navy-950/10 bg-white transition hover:border-gold-500/70`}
            >
              <industry.icon className="shrink-0 text-gold-600" size={expanded ? 28 : 22} aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-navy-950">{industry.title}</h3>
                {expanded ? (
                  <p className="mt-2 text-sm leading-6 text-navy-950/64">
                    Trade and logistics support for {industry.title.toLowerCase()} businesses moving goods across local and international routes.
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
