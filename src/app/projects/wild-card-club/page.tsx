import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { PageCta } from "@/components/site/page-cta";
import { Reveal } from "@/components/site/reveal";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { Button } from "@/components/ui/button";
import {
  Palette,
  MessagesSquare,
  Calculator,
  Activity,
  HeartHandshake,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Wild Card Club",
  description:
    "The Wild Card Club is a structured youth enrichment initiative under The Wild Card Project. Weekly sessions that build creativity, literacy, critical thinking, movement, and character. Partner with us.",
};

const PILLARS = [
  { icon: Palette, name: "Creative Expression", detail: "Art, music, craft, and performance." },
  { icon: MessagesSquare, name: "Literacy and Communication", detail: "Reading, storytelling, spelling, and debate." },
  { icon: Calculator, name: "Logic and Critical Thinking", detail: "Abacus, mental math, and strategy games." },
  { icon: Activity, name: "Movement and Play", detail: "Structured sports, dance, and coordination." },
  { icon: HeartHandshake, name: "Character and Citizenship", detail: "Leadership, teamwork, and responsibility." },
];

const SESSION = [
  "45 to 60 minutes, structured and age-appropriate.",
  "Interactive and hands-on, never lecture-style.",
  "A clear learning objective and a takeaway.",
  "Encourages participation, confidence, and curiosity.",
  "Ends with reflection, a mini showcase, or a practical output.",
];

const FORMATS = [
  {
    n: "01",
    title: "One-Time Guest Facilitator",
    description:
      "A single 45 to 60 minute engagement designed to inspire and introduce a new skill. Ideal for professionals with limited availability. Includes coordination support and social recognition.",
  },
  {
    n: "02",
    title: "Monthly Specialist Partner",
    description:
      "A minimum three-month commitment with one session per month. Allows skill progression and measurable growth. Includes featured recognition.",
  },
  {
    n: "03",
    title: "Term-Based Partner",
    description:
      "A structured collaboration supporting one of our five pillars for a full term. May include curriculum contribution and multiple sessions. Includes acknowledgment and reporting.",
  },
  {
    n: "04",
    title: "CSR Partner",
    description:
      "Corporate sponsorship or employee volunteer engagement. Includes brand visibility, documentation, and impact storytelling.",
  },
  {
    n: "05",
    title: "Sponsored Skill Series",
    description: "A 4 to 8 week themed series with naming rights and showcase inclusion.",
  },
];

const LOOKING_FOR = [
  "Educators and literacy advocates.",
  "Creative professionals and artists.",
  "Health, wellness, and fitness practitioners.",
  "Athletes and coaches.",
  "Corporate volunteers and CSR teams.",
  "University mentors and youth leaders.",
];

const WE_PROVIDE = [
  "Session scheduling and coordination.",
  "Student group management support.",
  "Basic materials where available.",
  "Brand recognition and social media highlight.",
  "Impact documentation where required.",
];

const WE_ASK = [
  "A well-prepared, age-appropriate session plan.",
  "Alignment with Wild Card values.",
  "Professional conduct and a mentorship mindset.",
  "Commitment to agreed timelines.",
];

const PARTNER_EMAIL =
  "mailto:thewildcardprojectgh@gmail.com?subject=Partnering with The Wild Card Club";

export default function WildCardClubPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="A Project of The Wild Card Project"
        title="The Wild Card Club"
        description="A structured youth enrichment initiative. We expose children to new skills, new mentors, and new possibilities beyond traditional academics. Every child is a Wild Card: unpredictable, powerful, and full of untapped potential."
      />

      {/* Back link */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark">
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </div>
      </div>

      {/* Who we are */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-cream-deep shadow-lg">
                <img src="/photos/child-quality-education.jpg" alt="A child engaged in a Wild Card Club learning session" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-brand-yellow shadow-md" />
              </div>
            </Reveal>
            <div className="md:col-span-7 md:pl-8">
              <Reveal>
                <p className="eyebrow mb-5 text-brand-teal">Who We Are</p>
                <h2 className="display-2 text-brand-charcoal text-balance">Intentional weekly sessions that develop the whole child.</h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    The Wild Card Club is a structured youth enrichment initiative under The Wild Card Project. We design
                    intentional weekly sessions that develop creativity, literacy, communication, critical thinking,
                    movement, and character formation in children.
                  </p>
                  <p>
                    Our mission is to expose children to new skills, new mentors, and new possibilities beyond traditional
                    academics. We believe every child is a Wild Card: unpredictable, powerful, and full of untapped
                    potential.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Core Pillars</p>
            <h2 className="display-2 text-brand-charcoal text-balance">Five pillars behind every session.</h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.name} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl bg-background p-7 ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-background">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-brand-charcoal">{pillar.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.detail}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What a session looks like */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
                  <Clock className="h-5 w-5" />
                </span>
                <p className="eyebrow mb-5 mt-6 text-brand-teal">What a Partner Session Looks Like</p>
                <h2 className="display-2 text-brand-charcoal text-balance">Short, structured, and hands-on.</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Every session is built to hold a child's attention and leave them with something real. Here is the shape
                  of one.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-4">
                {SESSION.map((item, i) => (
                  <Reveal key={item} delay={i * 80}>
                    <li className="flex items-start gap-4 rounded-2xl bg-brand-cream p-5 ring-1 ring-border/60">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                      <span className="text-sm leading-relaxed text-brand-charcoal md:text-base">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership formats */}
      <section id="partner" className="scroll-mt-24 bg-brand-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-yellow">Partnership Formats</p>
            <h2 className="display-2 text-white text-balance">Five ways to partner with us.</h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              From a single guest session to a fully sponsored skill series, there is a format for every level of
              availability and ambition.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            {FORMATS.map((format, i) => (
              <Reveal key={format.n} delay={i * 90}>
                <div className="flex h-full gap-5 rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                  <span className="font-serif text-3xl font-semibold text-brand-yellow">{format.n}</span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-white">{format.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{format.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are looking for */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">Who We Are Looking For</p>
            <h2 className="display-2 text-brand-charcoal text-balance">The people who make great partners.</h2>
          </Reveal>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {LOOKING_FOR.map((item, i) => (
              <Reveal key={item} delay={i * 70}>
                <div className="flex items-center gap-4 rounded-xl bg-brand-cream p-5 ring-1 ring-border/60">
                  <Target className="h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="text-sm text-brand-charcoal md:text-base">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Provide + Ask */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl bg-background p-8 ring-1 ring-border/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-background">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-brand-charcoal">What We Provide</h3>
                <ul className="mt-6 space-y-3">
                  {WE_PROVIDE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal md:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-2xl bg-background p-8 ring-1 ring-border/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-charcoal text-background">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-brand-charcoal">What We Ask From Partners</h3>
                <ul className="mt-6 space-y-3">
                  {WE_ASK.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal md:text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <Reveal>
            <p className="eyebrow mb-5 text-brand-teal">Why Partner With Wild Card</p>
            <h2 className="display-2 text-brand-charcoal text-balance">You are not just facilitating a session. You are helping turn Wild Cards into Aces.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Partnering with The Wild Card Club means expanding exposure, building confidence, and shaping the next
              generation of leaders.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-brand-teal text-background hover:bg-brand-teal-dark">
                <a href={PARTNER_EMAIL}>Become a partner</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        eyebrow="Ready to bring a skill to the Club?"
        title="Let us turn Wild Cards into Aces together."
        description="Tell us how you would like to partner, and we will handle the scheduling, coordination, and student groups."
        primaryLabel="Start a partnership"
        primaryHref={PARTNER_EMAIL}
        secondaryLabel="See all projects"
        secondaryHref="/projects"
      />
      <NewsletterSignup />
    </SiteShell>
  );
}
