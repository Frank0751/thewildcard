import { Reveal } from "@/components/site/reveal";
import { Quote } from "lucide-react";
import Link from "next/link";

const PARTNERS = [
  { name: "Gyedzi Foundation", role: "Program Partner", note: "Co-delivered Menstrual Hygiene Awareness Day and World Day Against Child Labour campaigns." },
  { name: "Herons International School", role: "Education and Venue Partner", note: "Hosted Sports Day and CPR and First Aid sessions. Co-creates youth wellbeing programs." },
  { name: "Veana Negasi", role: "Creative Collaborator", note: "Partnered on youth empowerment and storytelling campaigns across Accra." },
];

export function ImpactSection() {
  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-charcoal"><img src="/images/programs/mhd-classroom.jpg" alt="A classroom of Ghanaian students during a Wild Card Project session" className="h-full w-full object-cover" loading="lazy" /></div>
          </Reveal>
          <div className="md:col-span-6 md:pl-4">
            <Reveal>
              <p className="eyebrow mb-5 text-brand-teal">Why This Matters</p>
              <h2 className="display-2 text-brand-charcoal text-balance">A joyful childhood builds a confident future.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>In Ghana, more than a quarter of children still live in multidimensional poverty. Many are pushed out of school early, exposed to unsafe work, or denied the basic health information that would let them make decisions about their own bodies and futures.</p>
                <p>The Wild Card Project works at this intersection, where education, health, and opportunity meet. We do not believe in grand gestures or one-off charity. We believe in consistent presence, honest partnerships, and programs that young people can actually use.</p>
                <p>We are still small. But every program we run is run with care, measured honestly, and delivered alongside partners we trust.</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <figure className="mt-10 rounded-xl border-l-4 border-brand-teal bg-background p-6">
                <Quote className="h-6 w-6 text-brand-teal" aria-hidden="true" />
                <blockquote className="mt-3 font-serif text-lg italic text-brand-charcoal md:text-xl">&ldquo;Your future is not a distant dream. It is something you create with us.&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs text-muted-foreground">The promise behind every Wild Card Project program.</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={360}><Link href="/impact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark">See our full impact<span aria-hidden="true">→</span></Link></Reveal>
          </div>
        </div>
        <div className="mt-24 md:mt-32">
          <Reveal className="text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Partners</p>
            <h3 className="display-3 text-brand-charcoal">We do not do this alone.</h3>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">These organizations collaborate with us on programs, venues, and campaigns across Ghana.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PARTNERS.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl bg-background p-7 ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal font-serif text-2xl font-semibold text-background">{partner.name.charAt(0)}</div>
                  <h4 className="mt-5 font-serif text-xl font-semibold text-brand-charcoal">{partner.name}</h4>
                  <p className="mt-1 eyebrow text-brand-teal-light">{partner.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{partner.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
