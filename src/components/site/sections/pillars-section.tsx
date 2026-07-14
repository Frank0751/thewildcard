import Link from "next/link";
import { Reveal } from "@/components/site/reveal";
import { BookOpen, Heart, Sparkles, ArrowRight } from "lucide-react";

const PILLARS = [
  { icon: BookOpen, name: "Education", image: "/images/club/club-computer-lab.jpg", description: "We work with schools, teachers, and students to make quality education a lived reality, not just an aspirational slogan. Our education programs support classroom learning, advocate against child labour, and create spaces where young people can name and claim the future they want.", examples: ["School partnerships in Accra", "World Day Against Child Labour advocacy", "Quality education campaigns"] },
  { icon: Heart, name: "Wellbeing", image: "/images/programs/mhd-friends.jpg", description: "Wellbeing is the foundation everything else stands on. We run health-focused drives, from menstrual hygiene awareness to CPR and first aid training, so that young people and their communities have the information, supplies, and confidence to care for themselves and each other.", examples: ["Menstrual Hygiene Awareness Day", "CPR and First Aid sessions", "Sports and movement programs"] },
  { icon: Sparkles, name: "Empowerment", image: "/images/club/club-classroom-joy.jpg", description: "We help young people see themselves as capable of shaping their own lives. Through partnerships with creatives, entrepreneurs, and mentors, we create platforms where young Ghanaians can practice leadership, build confidence, and tell their own stories in their own voice.", examples: ["Creative collaborations with local artists", "Mentorship and visibility campaigns", "Youth-led storytelling"] },
];

export function PillarsSection() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-brand-teal">How We Work</p>
          <h2 className="display-2 text-brand-charcoal text-balance">Three pillars. One mission.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">We focus on the three areas where we believe focused, long-term work makes the biggest difference in a young person&rsquo;s life.</p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.name} delay={i * 150}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-background shadow-sm ring-1 ring-border/60 transition-all hover:shadow-xl hover:ring-brand-teal/20">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={pillar.image} alt={`${pillar.name} program in action`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/15 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal shadow-lg"><Icon className="h-5 w-5" /></span>
                      <span className="font-serif text-2xl font-semibold text-white">{pillar.name}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-5">
                      {pillar.examples.map((ex) => (<li key={ex} className="flex items-start gap-2 text-sm text-brand-charcoal"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" /><span>{ex}</span></li>))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={300}>
          <div className="mt-12 text-center"><Link href="/programs" className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-teal-dark">Explore all programs<ArrowRight className="h-4 w-4" /></Link></div>
        </Reveal>
      </div>
    </section>
  );
}
