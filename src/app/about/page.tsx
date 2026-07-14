import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { PageCta } from "@/components/site/page-cta";
import { Reveal } from "@/components/site/reveal";
import { StatCounter } from "@/components/site/stat-counter";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { Eye, Heart, Users, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "About Us", description: "The Wild Card Project is a youth-focused nonprofit in Ghana working across Education, Wellbeing, and Empowerment." };

const VALUES = [
  { icon: Eye, title: "Presence over projection", description: "We show up consistently, in schools and community halls, instead of designing programs from a distance. Trust is built through presence, not press releases." },
  { icon: Heart, title: "Honesty over hype", description: "We report the numbers we actually have, not the numbers we wish we had. Small is not a weakness. It is a stage of growth we are honest about." },
  { icon: Users, title: "Partnership over charity", description: "We co-create programs with the young people we serve, the schools we work with, and the organizations we partner with. Nothing about them without them." },
  { icon: Sparkles, title: "Potential over pedigree", description: "We believe the young people most often overlooked carry the most extraordinary potential. The wild cards are exactly who our communities need most." },
];

const TIMELINE = [
  { year: "Over a decade ago", title: "Venus Globe Foundation begins", description: "Inspired by the example of her late grandmother Connie, Veana Negasi founds the Venus Globe Foundation with a simple mission: to serve others and create opportunities where they are needed most." },
  { year: "2024", title: "The Wild Card Project takes shape", description: "Years of working with children, schools, and communities reveal one truth: potential is everywhere, but opportunity is not. Venus Globe Foundation evolves into The Wild Card Project." },
  { year: "Early 2026", title: "First programs launch", description: "The Wild Card Project runs its first public programs in Accra, beginning with school partnerships and wellbeing drives focused on menstrual hygiene and CPR training." },
  { year: "May 2026", title: "First major partnership", description: "In partnership with Gyedzi Foundation, we deliver 1,000 sanitary pads to students in Madina Estate and break the stigma around menstruation in schools." },
  { year: "Today", title: "Building what comes next", description: "Three program pillars are now active. Three partner organizations are working alongside us. The next chapter is about depth: more consistent presence, more honest measurement, more young people turned into aces." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About Us" title="We exist for the ones most often overlooked." description="The Wild Card Project is a youth-focused nonprofit in Ghana working across Education, Wellbeing, and Empowerment. We help overlooked young people become aces." image="/images/club/club-dental-group.jpg" />
      <section id="founder" className="scroll-mt-24 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Story</p>
            <h2 className="display-2 text-brand-charcoal text-balance">A story about legacy.</h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-cream-deep shadow-lg">
                  <img src="/images/team/veana-with-students.jpg" alt="Veana Negasi, founder of The Wild Card Project, with students during a program in Accra" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-brand-yellow shadow-md" />
                </div>
                <p className="mt-4 text-xs italic text-muted-foreground">Veana Negasi, Founder and Executive Director, with students in Accra.</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-cream px-4 py-2 text-xs font-medium text-brand-teal ring-1 ring-border/60">
                  <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                  In memory of Connie
                </p>
              </div>
            </Reveal>
            <div className="md:col-span-7 md:pl-8">
              <Reveal>
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>The story of The Wild Card Project is, at its heart, a story about legacy. Long before the organization existed, our founder, Veana Negasi, was inspired by the quiet yet profound example of her late maternal grandmother, Connie. Growing up, she witnessed firsthand what genuine care and benevolence looked like. Through her generosity, compassion, and unwavering willingness to help others, Connie showed Veana that the greatest impact we can have is in the lives we choose to uplift.</p>
                  <p>Those lessons became the foundation of a lifelong calling. Over a decade ago, Veana founded the Venus Globe Foundation with a simple mission: to serve others and create opportunities where they were needed most. What began as a small act of service gradually grew into a much bigger vision.</p>
                  <p>Working alongside children, families, schools, and communities over the years revealed a simple but powerful truth: potential is everywhere, but opportunity is not. Every day, young people with remarkable gifts are overlooked, not because they lack ability, but because they lack access, encouragement, mentorship, or someone willing to believe in them.</p>
                  <p>Those experiences also shaped a clear point of view: meaningful change happens when young people are treated as partners, not just participants. The most impactful programs are not designed for young people from a distance. They are co-created with them, informed by their experiences, aspirations, and the realities of their communities.</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <figure className="my-9 border-l-4 border-brand-yellow pl-6">
                  <blockquote className="font-serif text-2xl font-semibold leading-snug text-brand-charcoal md:text-3xl">
                    In a game of cards, a wild card is often the most unexpected card in the deck, frequently underestimated, yet capable of changing the outcome of the game. We believe young people are no different.
                  </blockquote>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>That realization transformed the vision. The Venus Globe Foundation evolved into The Wild Card Project, an organization founded on the belief that every child deserves the opportunity to discover their potential and shape their own future. The name Wild Card was chosen intentionally, because every child carries extraordinary potential waiting to be unlocked when given the right opportunities, guidance, encouragement, and support.</p>
                  <p>Today, that founding conviction is reflected in everything we do. It influences how we design our programs, how we choose partners, how we collaborate with communities, and how we measure success. Rather than focusing solely on activities or outputs, we prioritize lasting impact, ensuring every initiative is relevant, inclusive, and responsive to the real needs, strengths, and aspirations of the young people we serve.</p>
                  <p>Through education, creativity, leadership development, health initiatives, and community engagement, we are committed to equipping children and young people with the confidence, skills, and opportunities they need to thrive.</p>
                  <p>More than an organization, The Wild Card Project is the continuation of Connie's legacy, a legacy of believing in people, creating opportunities, and reminding every child that their circumstances do not define their future.</p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-9 font-serif text-2xl font-semibold italic text-brand-teal">Turning Wild Cards into Aces.</p>
                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
                  <div><p className="font-serif text-4xl font-semibold text-brand-teal">Accra</p><p className="mt-1 eyebrow text-muted-foreground">Based in Ghana</p></div>
                  <div><p className="font-serif text-4xl font-semibold text-brand-teal">2024</p><p className="mt-1 eyebrow text-muted-foreground">Wild Card Project Founded</p></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section id="values" className="scroll-mt-24 bg-brand-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">What We Believe</p>
            <h2 className="display-2 text-brand-charcoal text-balance">Four values that shape every decision we make.</h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 100}>
                  <div className="flex h-full gap-5 rounded-2xl bg-background p-7 ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal text-background"><Icon className="h-5 w-5" /></span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-brand-charcoal">{value.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section id="journey" className="scroll-mt-24 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Journey</p>
            <h2 className="display-2 text-brand-charcoal text-balance">From conviction to programs.</h2>
          </Reveal>
          <div className="mt-16 space-y-0">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 100}>
                <div className="grid grid-cols-1 gap-6 border-l-2 border-border pb-12 pl-6 last:pb-0 md:grid-cols-12 md:gap-8 md:pl-8">
                  <div className="md:col-span-3">
                    <div className="relative">
                      <span className="absolute -left-[31px] md:-left-[43px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-yellow ring-4 ring-background"><span className="h-2 w-2 rounded-full bg-brand-teal" /></span>
                      <p className="font-serif text-3xl font-semibold text-brand-teal">{item.year}</p>
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-serif text-xl font-semibold text-brand-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            <Reveal><div className="border-t border-white/15 pt-6"><StatCounter value={3} label="Program Pillars" variant="yellow" /></div></Reveal>
            <Reveal delay={100}><div className="border-t border-white/15 pt-6"><StatCounter value={4} label="Active Programs" variant="yellow" /></div></Reveal>
            <Reveal delay={200}><div className="border-t border-white/15 pt-6"><StatCounter value={3} label="Partner Organizations" variant="yellow" /></div></Reveal>
            <Reveal delay={300}><div className="border-t border-white/15 pt-6"><StatCounter value={1000} suffix="+" label="Pads Pledged" variant="yellow" /></div></Reveal>
          </div>
        </div>
      </section>
      <PageCta eyebrow="Want to be part of this?" title="Help us write the next chapter." description="Whether you want to volunteer, partner, or simply learn more, we would love to hear from you." primaryLabel="Get involved" primaryHref="/get-involved" secondaryLabel="See our programs" secondaryHref="/programs" />
      <NewsletterSignup />
    </SiteShell>
  );
}
