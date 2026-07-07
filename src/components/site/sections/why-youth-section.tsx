"use client";
import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { BookOpen, Heart, Sparkles } from "lucide-react";

const CATEGORIES = [
  { id: "education", label: "Education", icon: BookOpen, headline: "Education changes everything.", body: "When young people have access to quality education, entire communities rise with them. Education reduces poverty, improves health outcomes, and creates the leaders of tomorrow. Yet thousands of Ghanaian children are still pushed out of school early, into labour, or denied the basic resources they need to learn.", stat: "1 in 4", statLabel: "children in Ghana live in multidimensional poverty", image: "/photos/education-pillar.png" },
  { id: "wellbeing", label: "Wellbeing", icon: Heart, headline: "Health is the foundation.", body: "A young person cannot learn, grow, or lead if their basic health needs are not met. Menstrual hygiene, first aid skills, mental health, and access to safe play are not optional extras. They are the foundation everything else stands on. We run programs that equip young people and their communities to care for themselves and each other.", stat: "1,000+", statLabel: "sanitary pads delivered in a single drive", image: "/photos/missions-youth-group.png" },
  { id: "empowerment", label: "Empowerment", icon: Sparkles, headline: "Young people as creators.", body: "Empowerment is not a gift we give. It is a platform we build. When young Ghanaians have access to mentors, creative platforms, and the chance to tell their own stories in their own voice, they stop being passive recipients of charity and start becoming the architects of their own futures.", stat: "3+", statLabel: "creative collaborations with local artists and mentors", image: "/photos/empowerment-pillar.png" },
];

export function WhyYouthSection() {
  const [active, setActive] = useState("education");
  const cat = CATEGORIES.find((c) => c.id === active)!;
  const ActiveIcon = cat.icon;
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-brand-teal">Why Youth?</p>
          <h2 className="display-2 text-brand-charcoal text-balance">Because when young people thrive, everything changes.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">We focus on three areas where consistent, long-term work makes the biggest difference in a young person&rsquo;s life. Click through each to see why it matters.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              const isActive = active === c.id;
              return <button key={c.id} type="button" onClick={() => setActive(c.id)} className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all ${isActive ? "bg-brand-teal text-background shadow-md" : "bg-brand-cream-deep text-brand-charcoal hover:bg-brand-cream"}`}><Icon className="h-4 w-4" /><span>{c.label}</span></button>;
            })}
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal key={`img-${active}`} className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-cream-deep shadow-lg">
              <img src={cat.image} alt={`${cat.label} program in action`} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal shadow-lg"><ActiveIcon className="h-5 w-5" /></span>
                <span className="font-serif text-2xl font-semibold text-white drop-shadow-md">{cat.label}</span>
              </div>
            </div>
          </Reveal>
          <div key={`text-${active}`} className="md:col-span-6 md:flex md:flex-col md:justify-center">
            <h3 className="font-serif text-3xl font-semibold text-brand-charcoal md:text-4xl">{cat.headline}</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{cat.body}</p>
            <div className="mt-8 flex items-center gap-5 rounded-2xl bg-brand-cream-deep p-5">
              <div className="font-serif text-4xl font-semibold text-brand-teal md:text-5xl">{cat.stat}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{cat.statLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
