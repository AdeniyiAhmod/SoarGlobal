import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text: string;
  cta?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, text, cta, ctaHref }: PageHeroProps) {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          {eyebrow ? <p className="text-sm font-bold text-gold-600">{eyebrow}</p> : null}
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-navy-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-navy-950/68">{text}</p>
          {cta && ctaHref ? (
            <ButtonLink href={ctaHref} className="mt-8">
              {cta}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
