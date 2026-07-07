import { Reveal } from "@/components/site/reveal";

export function PageHero({ eyebrow, title, description, align = "center" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <section className="relative overflow-hidden bg-brand-teal py-24 md:py-32">
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-teal-light/30 blur-3xl" aria-hidden="true" />
      <div className={`relative mx-auto max-w-4xl px-4 md:px-8 ${align === "center" ? "text-center" : "text-left"}`}>
        <Reveal>
          <p className="eyebrow mb-5 text-brand-yellow">{eyebrow}</p>
          <h1 className="display-1 text-white text-balance">{title}</h1>
          {description && <p className={`mt-6 text-base leading-relaxed text-white/80 md:text-lg ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{description}</p>}
        </Reveal>
      </div>
      <div className="divider-teal mt-16" />
    </section>
  );
}
