import { ButtonLink } from "@/components/ButtonLink";

export function CtaBand() {
  return (
    <section className="bg-navy-950 py-10 text-white">
      <div className="container-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:font-extrabold">Move goods with less friction.</h2>
          <p className="mt-2 text-sm text-white/68">Send the route. We will reply with the next step.</p>
        </div>
        <ButtonLink href="/quote">Get a Quote</ButtonLink>
      </div>
    </section>
  );
}
