import { Reveal } from "@/components/site/reveal";
import Link from "next/link";

export function MissionSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-cream-deep shadow-lg">
              <img src="/photos/missions-youth-group.png" alt="A group of Ghanaian youth gathered for a Wild Card Project program" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-brand-yellow shadow-md" />
            </div>
            <p className="mt-4 text-xs italic text-muted-foreground">Young Ghanaians gathered for a Wild Card Project program in Accra.</p>
          </Reveal>
          <div className="md:col-span-7 md:pl-8">
            <Reveal>
              <p className="eyebrow mb-5 text-brand-teal">Our Mission</p>
              <h2 className="display-2 text-brand-charcoal text-balance">Every child deserves a future they can shape, regardless of the hand they were dealt.</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>In communities across Ghana, thousands of young people carry extraordinary potential that the world has not yet learned to see. They are the wild cards: overlooked by systems, underestimated by markets, and too often left to navigate education, health, and opportunity on their own.</p>
                <p>The Wild Card Project exists to change that. We work alongside young people, schools, families, and partner organizations to deliver programs in <strong className="font-semibold text-brand-teal">Education</strong>, <strong className="font-semibold text-brand-teal">Wellbeing</strong>, and <strong className="font-semibold text-brand-teal">Empowerment</strong> - the three pillars we believe turn potential into outcome.</p>
                <p>We do not run charity from a distance. We show up in schools, community halls, and on the ground, building the long-term relationships that allow young people to trust, grow, and ultimately lead.</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 rounded-xl border-l-4 border-brand-yellow bg-brand-cream-deep p-6">
                <p className="font-serif text-xl italic text-brand-charcoal md:text-2xl">&ldquo;Your future is not a distant dream. It is something you create with us.&rdquo;</p>
                <p className="mt-3 text-sm text-muted-foreground">A promise we make to every young person we work with.</p>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark">Learn more about who we are<span aria-hidden="true">→</span></Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
