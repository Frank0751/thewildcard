import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { PageCta } from "@/components/site/page-cta";
import { Reveal } from "@/components/site/reveal";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { BookOpen, Heart, Sparkles, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Programs", description: "The Wild Card Project runs programs across Education, Wellbeing, and Empowerment in Ghana." };

const PILLARS = [
  { icon: BookOpen, name: "Education", tagline: "Quality learning, made real.", description: "We work with schools, teachers, and students to make quality education a lived reality, not just an aspirational slogan. Our education programs support classroom learning, advocate against child labour, and create spaces where young people can name and claim the future they want.", examples: ["School partnerships in Accra", "World Day Against Child Labour advocacy", "Quality education campaigns"] },
  { icon: Heart, name: "Wellbeing", tagline: "Health as the foundation.", description: "Wellbeing is the foundation everything else stands on. We run health-focused drives, from menstrual hygiene awareness to CPR and first aid training, so that young people and their communities have the information, supplies, and confidence to care for themselves and each other.", examples: ["Menstrual Hygiene Awareness Day", "CPR and First Aid sessions", "Sports and movement programs"] },
  { icon: Sparkles, name: "Empowerment", tagline: "Young people as creators.", description: "We help young people see themselves as capable of shaping their own lives. Through partnerships with creatives, entrepreneurs, and mentors, we create platforms where young Ghanaians can practice leadership, build confidence, and tell their own stories in their own voice.", examples: ["Creative collaborations with local artists", "Mentorship and visibility campaigns", "Youth-led storytelling"] },
];

const PROGRAMS = [
  { title: "CPR and First Aid Session, June Edition", date: "June 29 to 30, 2026", time: "11:30 AM to 1:00 PM", location: "No. 3 Bamako Road, East Legon, Accra", image: "/photos/hero-homepage.jpg", description: "A two-day hands-on training led by Dr. Isaac, equipping young people and community members with life-saving CPR and first aid skills. Free and open to all.", pillar: "Wellbeing", status: "upcoming" },
  { title: "Menstrual Hygiene Awareness Day", date: "May 28, 2026", time: "All day", location: "Madina Estate, Accra", image: "/photos/missions-youth-group.png", description: "In partnership with Gyedzi Foundation, we delivered 1,000 sanitary pads and broke the stigma around menstruation in schools. Health personnel led sessions with students, parents, and teachers.", pillar: "Wellbeing", status: "past" },
  { title: "World Day Against Child Labour", date: "June 12, 2026", time: "All day", location: "Accra, Ghana", image: "/photos/empowerment-pillar.png", description: "An advocacy campaign led with Gyedzi Foundation highlighting the reality that millions of children are still pushed into labour instead of school, and what we can do about it, together.", pillar: "Education", status: "past" },
  { title: "Herons Sports Day", date: "March 27, 2026", time: "11:00 AM", location: "Accra, Ghana", image: "/photos/education-pillar.png", description: "A collaborative sports day with Herons International School, because play, movement, and teamwork are core to a young person's wellbeing, not optional extras.", pillar: "Wellbeing", status: "past" },
];

export default function ProgramsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Programs" title="Three pillars, run with care." description="We focus on Education, Wellbeing, and Empowerment. Every program is delivered in partnership with the communities it serves, and measured honestly." />
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">How We Work</p>
            <h2 className="display-2 text-brand-charcoal text-balance">The three pillars behind every program.</h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.name} delay={i * 150}>
                  <article id={pillar.name.toLowerCase()} className="flex h-full scroll-mt-24 flex-col rounded-2xl bg-brand-cream p-7 ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-background"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-brand-charcoal">{pillar.name}</h3>
                    <p className="mt-1 eyebrow text-brand-teal-light">{pillar.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-5">
                      {pillar.examples.map((ex) => (<li key={ex} className="flex items-start gap-2 text-sm text-brand-charcoal"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" aria-hidden="true" /><span>{ex}</span></li>))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section id="upcoming" className="scroll-mt-24 bg-brand-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <p className="eyebrow mb-5 text-brand-teal">Upcoming</p>
            <h2 className="display-2 text-brand-charcoal text-balance">Join us at our next program.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {PROGRAMS.filter((p) => p.status === "upcoming").map((program, i) => (
              <Reveal key={program.title} delay={i * 100}>
                <article className="group grid grid-cols-1 overflow-hidden rounded-2xl bg-background ring-1 ring-border/60 transition-all hover:shadow-xl hover:ring-brand-teal/20 sm:grid-cols-5">
                  <div className="relative aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-[4/5] lg:aspect-[5/6]">
                    <img src={program.image} alt={program.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-brand-yellow px-3 py-1 eyebrow text-brand-charcoal">Upcoming</span>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:col-span-3 sm:p-7">
                    <span className="eyebrow text-brand-teal">{program.pillar}</span>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-brand-charcoal md:text-2xl">{program.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                    <div className="mt-5 space-y-1.5 text-xs text-brand-charcoal">
                      <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-brand-teal" /><span>{program.date}</span></div>
                      <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-brand-teal" /><span>{program.time}</span></div>
                      <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-brand-teal" /><span>{program.location}</span></div>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <Button asChild size="sm" className="bg-brand-teal text-background hover:bg-brand-teal-dark">
                        <a href={`mailto:thewildcardprojectgh@gmail.com?subject=${encodeURIComponent(`Registration: ${program.title}`)}&body=${encodeURIComponent("Hello Wild Card team,\n\nI would like to register for this program.\n\nFull name:\nPhone number:\nNumber of attendees:\n\nThank you.")}`}>
                          Register here<ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                      </Button>
                      <span className="text-xs text-muted-foreground">Free and open to all. Reserve your seat early.</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="past" className="scroll-mt-24 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <p className="eyebrow mb-5 text-brand-teal">Past Programs</p>
            <h2 className="display-2 text-brand-charcoal text-balance">What we have run so far.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {PROGRAMS.filter((p) => p.status === "past").map((program, i) => (
              <Reveal key={program.title} delay={i * 100}>
                <article className="group grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-cream ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20 sm:grid-cols-5">
                  <div className="relative aspect-[4/3] overflow-hidden sm:col-span-2 sm:aspect-[4/5] lg:aspect-[5/6]">
                    <img src={program.image} alt={program.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-brand-charcoal/80 px-3 py-1 eyebrow text-background backdrop-blur-sm">Past</span>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:col-span-3 sm:p-7">
                    <span className="eyebrow text-brand-teal">{program.pillar}</span>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-brand-charcoal md:text-2xl">{program.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                    <div className="mt-5 space-y-1.5 text-xs text-brand-charcoal">
                      <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-brand-teal" /><span>{program.date}</span></div>
                      <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-brand-teal" /><span>{program.location}</span></div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <PageCta eyebrow="Want to attend, host, or sponsor?" title="Bring a Wild Card program to your school or community." description="We are always looking for partners, volunteers, and venues. Email us to start a conversation." primaryLabel="Email us" primaryHref="mailto:thewildcardprojectgh@gmail.com?subject=Programs partnership" secondaryLabel="See our impact" secondaryHref="/impact" />
      <NewsletterSignup />
    </SiteShell>
  );
}
