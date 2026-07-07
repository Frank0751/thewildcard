import { Reveal } from "@/components/site/reveal";
import { StatCounter } from "@/components/site/stat-counter";

const STATS = [
  { value: 3, label: "Program Pillars", sublabel: "Education, Wellbeing, Empowerment" },
  { value: 4, label: "Active Programs", sublabel: "Run in partnership with local schools and organizations" },
  { value: 1000, suffix: "+", label: "Sanitary Pads Pledged", sublabel: "Through our Menstrual Hygiene Awareness drive" },
  { value: 3, label: "Partner Organizations", sublabel: "Including Gyedzi Foundation and Herons International" },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-24 md:py-28">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-teal-light/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-brand-yellow">Our Work in Numbers</p>
          <h2 className="display-2 text-white text-balance">Small organization. Measured impact. Honest reporting.</h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">We are a young nonprofit, and we believe in being honest about where we are. These are the real numbers behind our work to date, not projections, not aspirations.</p>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="border-t border-white/15 pt-6"><StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} sublabel={stat.sublabel} variant="yellow" /></div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400}><p className="mt-14 text-center text-sm text-white/50">Numbers reflect activity as of June 2026. Updated quarterly.</p></Reveal>
      </div>
    </section>
  );
}
