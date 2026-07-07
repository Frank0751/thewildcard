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
  { year: "2024", title: "The idea takes shape", description: "After years working with NGOs, startups, and development organizations across Africa, the founder names the conviction that has been building for years: the wild cards are the ones we should be betting on." },
  { year: "Early 2026", title: "First programs launch", description: "The Wild Card Project runs its first public programs in Accra, beginning with school partnerships and wellbeing drives focused on menstrual hygiene and CPR training." },
  { year: "May 2026", title: "First major partnership", description: "In partnership with Gyedzi Foundation, we deliver 1,000 sanitary pads to students in Madina Estate and break the stigma around menstruation in schools." },
  { year: "Today", title: "Building what comes next", description: "Three program pillars are now active. Three partner organizations are working alongside us. The next chapter is about depth: more consistent presence, more honest measurement, more young people turned into aces." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="About Us" title="We exist for the ones most often overlooked." description="The Wild Card Project is a youth-focused nonprofit in Ghana working across Education, Wellbeing, and Empowerment. We help overlooked young people become aces." />
      <section id="founder" className="scroll-mt-24 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-cream-deep shadow-lg">
                <img src="/photos/our-story-microphone.png" alt="A member of The Wild Card Project community speaking into a microphone at an event" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-brand-yellow shadow-md" />
              </div>
              <p className="mt-4 text-xs italic text-muted-foreground">Giving young Ghanaians a microphone, a stage, and a platform to tell their own stories.</p>
            </Reveal>
            <div className="md:col-span-7 md:pl-8">
              <Reveal>
                <p className="eyebrow mb-5 text-brand-teal">Our Story</p>
                <h2 className="display-2 text-brand-charcoal text-balance">Built by someone who has worked with NGOs, startups, and development organizations across Africa.</h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>The Wild Card Project was founded on a simple conviction: that the young people most often overlooked, the wild cards, are exactly the ones our communities need most. They carry insight, resilience, and creativity that more privileged paths rarely produce.</p>
                  <p>Before starting The Wild Card Project, the founder spent years working alongside NGOs, startups, and development organizations across the African continent. That experience shaped a clear point of view: programs should be co-created with the young people they serve, not designed for them from a distance.</p>
                  <p>Today, that conviction shows up in every program we run, from how we choose partners, to how we measure success, to how we talk about our work. We do not promise transformation. We promise presence, honesty, and care.</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                  <div><p className="font-serif text-4xl font-semibold text-brand-teal">Accra</p><p className="mt-1 eyebrow text-muted-foreground">Based in Ghana</p></div>
                  <div><p className="font-serif text-4xl font-semibold text-brand-teal">2024</p><p className="mt-1 eyebrow text-muted-foreground">Year Founded</p></div>
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
