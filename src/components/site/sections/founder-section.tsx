import { Reveal } from "@/components/site/reveal";

export function FounderSection() {
  return (
    <section id="founder" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Image */}
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-cream">
              <img
                src="/images/team/veana-negasi.jpg"
                alt="Veana Negasi, founder of The Wild Card Project"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs italic text-muted-foreground">
              Veana Negasi, founder of The Wild Card Project, photographed
              during a program in Accra.
            </p>
          </Reveal>

          {/* Text */}
          <div className="md:col-span-7 md:pl-8">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
                The Person Behind The Work
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight text-brand-charcoal text-balance md:text-4xl lg:text-5xl">
                Founded by Veana Negasi, who has worked with NGOs, startups,
                and development organizations across Africa.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  The Wild Card Project was founded on a simple conviction:
                  that the young people most often overlooked, the wild cards,
                  are exactly the ones our communities need most. They carry
                  insight, resilience, and creativity that more privileged
                  paths rarely produce.
                </p>
                <p>
                  Before starting The Wild Card Project, Veana spent years
                  working alongside NGOs, startups, and development
                  organizations across the African continent. That experience
                  shaped a clear point of view: programs should be co-created
                  with the young people they serve, not designed for them from a
                  distance.
                </p>
                <p>
                  Today, that conviction shows up in every program we run,
                  from how we choose partners, to how we measure success, to
                  how we talk about our work. We don&rsquo;t promise
                  transformation. We promise presence, honesty, and care.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-charcoal">
                    Accra
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Based in Ghana
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-charcoal">
                    2024
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Year Founded
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
