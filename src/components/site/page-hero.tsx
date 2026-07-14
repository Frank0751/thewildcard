import { Reveal } from "@/components/site/reveal";

export function PageHero({ eyebrow, title, description, align = "center", image }: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-teal py-24 md:py-32">
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <img src={image} alt="" className="h-full w-full object-cover object-center" />
          {/* Duotone teal treatment keeps every hero on-brand and the text legible */}
          <div className="absolute inset-0 bg-brand-teal/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-teal via-brand-teal/70 to-brand-teal/40" />
        </div>
      )}
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-teal-light/30 blur-3xl" aria-hidden="true" />
      {/* Floating card suits, a quiet nod to the Wild Card name */}
      <span className="float-slow absolute left-[6%] top-[18%] hidden select-none font-serif text-6xl text-white/[0.07] md:block" aria-hidden="true">♠</span>
      <span className="float-slower absolute right-[8%] bottom-[16%] hidden select-none font-serif text-7xl text-white/[0.07] md:block" aria-hidden="true">♦</span>
      <span className="float-slow absolute right-[22%] top-[12%] hidden select-none font-serif text-4xl text-brand-yellow/10 lg:block" aria-hidden="true">♥</span>
      <div className={`relative z-10 mx-auto max-w-4xl px-4 md:px-8 ${align === "center" ? "text-center" : "text-left"}`}>
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
