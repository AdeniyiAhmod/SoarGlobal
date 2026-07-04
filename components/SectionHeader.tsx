type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  inverse = false,
}: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${inverse ? "text-gold-500" : "text-gold-600"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`gold-underline text-3xl font-extrabold tracking-tight sm:text-4xl ${inverse ? "text-white" : "text-navy-950"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-7 ${inverse ? "text-white/75" : "text-navy-950/70"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
