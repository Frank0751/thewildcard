import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { PageCta } from "@/components/site/page-cta";
import { Reveal } from "@/components/site/reveal";
import { StatCounter } from "@/components/site/stat-counter";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { Quote } from "lucide-react";

export const metadata: Metadata = { title: "Impact", description: "Real numbers behind The Wild Card Project's work in Ghana." };

const STATS = [
  { value: 3, label: "Program Pillars", sublabel: "Education, Wellbeing, Empowerment" },
  { value: 4, label: "Active Programs", sublabel: "Run in partnership with local schools and organizations" },
  { value: 1000, suffix: "+", label: "Sanitary Pads Pledged", sublabel: "Through our Menstrual Hygiene Awareness drive" },
  { value: 3, label: "Partner Organizations", sublabel: "Including Gyedzi Foundation and Herons International" },
];

const STORIES = [
  { image: "/photos/missions-youth-group.png", title: "Breaking the silence around menstruation", pillar: "Wellbeing", date: "May 2026", summary: "In partnership with Gyedzi Foundation, we delivered 1,000 sanitary pads and ran sessions led by health personnel with students, parents, and teachers in Madina Estate. The drive did not just distribute supplies. It started conversations that schools had been avoiding for years.", outcome: "1,000 sanitary pads delivered" },
  { image: "/photos/empowerment-pillar.png", title: "Naming what children should not be doing", pillar: "Education", date: "June 2026", summary: "On World Day Against Child Labour, we worked with Gyedzi Foundation to highlight the reality that millions of children are still pushed into labour instead of school. The campaign put numbers and faces to a problem that is too often treated as inevitable.", outcome: "Public advocacy campaign delivered" },
  { image: "/photos/education-pillar.png", title: "Play as a serious part of wellbeing", pillar: "Wellbeing", date: "March 2026", summary: "A collaborative sports day with Herons International School reminded everyone involved that play, movement, and teamwork are not optional extras. They are core to a young person's wellbeing, and they deserve real time and real attention.", outcome: "School-wide participation" },
];

const PARTNERS = [
  { name: "Gyedzi Foundation", role: "Program Partner", note: "Co-delivered Menstrual Hygiene Awareness Day and World Day Against Child Labour campaigns." },
  { name: "Herons International School", role: "Education and Venue Partner", note: "Hosted Sports Day and CPR and First Aid sessions. Co-creates youth wellbeing programs." },
  { name: "Veana Negasi", role: "Creative Collaborator", note: "Partnered on youth empowerment and storytelling campaigns across Accra." },
];

export default function ImpactPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Impact" title="Small organization. Honest numbers." description="We are a young nonprofit. We do not promise transformation. We promise presence, honesty, and care. Here is what that looks like in practice." />
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Work in Numbers</p>
            <h2 className="display-2 text-brand-charcoal text-balance">What we have done, exactly.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">These are the real numbers behind our work to date. Not projections. Not aspirations. Updated quarterly.</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 120}>
                <div className="h-full rounded-2xl bg-brand-cream p-6 ring-1 ring-border/60"><StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} sublabel={stat.sublabel} /></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-6"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><img src="/photos/hero-homepage.jpg" alt="A group of Ghanaian youth in school uniforms taking a selfie with an adult" className="h-full w-full object-cover" loading="lazy" /></div></Reveal>
            <div className="md:col-span-6 md:pl-4">
              <Reveal>
                <p className="eyebrow mb-5 text-brand-yellow">Why This Matters</p>
                <h2 className="display-2 text-white text-balance">A joyful childhood builds a confident future.</h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-white/80 md:text-lg">
                  <p>In Ghana, more than a quarter of children still live in multidimensional poverty. Many are pushed out of school early, exposed to unsafe work, or denied the basic health information that would let them make decisions about their own bodies and futures.</p>
                  <p>The Wild Card Project works at this intersection, where education, health, and opportunity meet. We do not believe in grand gestures or one-off charity. We believe in consistent presence, honest partnerships, and programs that young people can actually use.</p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <figure className="mt-10 rounded-xl border-l-4 border-brand-yellow bg-white/5 p-6">
                  <Quote className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <blockquote className="mt-3 font-serif text-lg italic text-white md:text-xl">&ldquo;Your future is not a distant dream. It is something you create with us.&rdquo;</blockquote>
                  <figcaption className="mt-3 text-xs text-white/60">The promise behind every Wild Card Project program.</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">Stories from the Field</p>
            <h2 className="display-2 text-brand-charcoal text-balance">What our programs actually did.</h2>
          </Reveal>
          <div className="mt-16 space-y-12">
            {STORIES.map((story, i) => (
              <Reveal key={story.title} delay={i * 100}>
                <article className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
                  <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-cream-deep"><img src={story.image} alt={story.title} className="h-full w-full object-cover" loading="lazy" /></div>
                  </div>
                  <div className={`md:col-span-7 md:flex md:flex-col md:justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-brand-teal px-3 py-1 eyebrow text-background">{story.pillar}</span>
                      <span className="eyebrow text-muted-foreground">{story.date}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-semibold text-brand-charcoal md:text-3xl">{story.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{story.summary}</p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-yellow/20 px-4 py-2 text-sm font-semibold text-brand-teal"><span className="h-2 w-2 rounded-full bg-brand-teal" />{story.outcome}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Partners</p>
            <h2 className="display-2 text-brand-charcoal text-balance">We do not do this alone.</h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">These organizations collaborate with us on programs, venues, and campaigns across Ghana.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PARTNERS.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl bg-background p-7 ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal font-serif text-2xl font-semibold text-background">{partner.name.charAt(0)}</div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-brand-charcoal">{partner.name}</h3>
                  <p className="mt-1 eyebrow text-brand-teal-light">{partner.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{partner.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <PageCta eyebrow="Want to be part of the next story?" title="Partner with us on the next program." description="We work with schools, NGOs, brands, and creatives who share our values and commit for the long term." primaryLabel="Start a partnership" primaryHref="mailto:thewildcardprojectgh@gmail.com?subject=Partnership with The Wild Card Project" secondaryLabel="Support our work" secondaryHref="/get-involved" />
      <NewsletterSignup />
    </SiteShell>
  );
}
