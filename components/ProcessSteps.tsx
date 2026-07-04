import { processSteps } from "@/lib/site";

export function ProcessSteps() {
  return (
    <section className="bg-white py-12">
      <div className="container-shell">
        <div className="text-center">
          <h2 className="gold-underline text-2xl font-bold uppercase tracking-wide text-navy-950 sm:font-extrabold">How It Works</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy-950 text-white">
                <step.icon aria-hidden="true" size={30} />
              </div>
              <span className="absolute left-[calc(50%+18px)] top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-navy-950">
                {index + 1}
              </span>
              <h3 className="mt-4 text-sm font-bold uppercase text-navy-950">{step.title}</h3>
              <p className="mt-2 text-xs leading-5 text-navy-950/66">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
