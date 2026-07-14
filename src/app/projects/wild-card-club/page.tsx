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
  HeartHandshake,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Stethoscope,
  Smile,
  Music,
  PenTool,
  HardHat,
  Laptop,
  ChefHat,
  Trophy,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Wild Card Club",
  description:
    "The Wild Card Club is the flagship literacy, creativity, and life skills programme of The Wild Card Project, for children aged 6 to 16. Read. Create. Lead. Partner with us.",
};

const FRAMEWORK = [
  {
    icon: BookOpen,
    word: "Read",
    tagline: "Confident readers, communicators, and lifelong learners.",
    description:
      "Reading circles, storytelling, writing activities, language development, and public speaking that help every child find and use their voice.",
    image: "/images/club/club-veana-kids.jpg",
    alt: "Veana Negasi talking with Wild Card Club children",
  },
  {
    icon: Palette,
    word: "Create",
    tagline: "Imagination and self-expression, unlocked.",
    description:
      "Music, arts and crafts, crochet, creative projects, innovation, and problem-solving that turn curiosity into confidence.",
    image: "/images/club/club-drawing.jpg",
    alt: "A Wild Card Club child proudly holding up her own drawing",
  },
  {
    icon: HeartHandshake,
    word: "Lead",
    tagline: "Ready for life and leadership.",
    description:
      "Leadership, teamwork, financial literacy, and health education including dental awareness, CPR and first aid, plus community service, mentorship, and practical life skills that build confidence, resilience, responsibility, and empathy.",
    image: "/images/club/club-dentist-demo.jpg",
    alt: "A dentist teaching Wild Card Club children how to care for their teeth",
  },
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
      "A structured collaboration supporting one of our focus areas for a full term. May include curriculum contribution and multiple sessions. Includes acknowledgment and reporting.",
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

const FACILITATORS = [
  { icon: Stethoscope, name: "Doctors and Nurses", detail: "Health, first aid, and how our bodies work." },
  { icon: Smile, name: "Dentists", detail: "Oral health made friendly, not frightening." },
  { icon: Music, name: "Artistes and Musicians", detail: "Rhythm, performance, and stage confidence." },
  { icon: PenTool, name: "Writers and Storytellers", detail: "Finding your voice and telling your own story." },
  { icon: HardHat, name: "Engineers", detail: "How things get built, from bridges to circuits." },
  { icon: Laptop, name: "Tech Professionals", detail: "Coding, robotics, and digital confidence." },
  { icon: ChefHat, name: "Chefs and Nutritionists", detail: "Food, nutrition, and kitchen creativity." },
  { icon: Trophy, name: "Athletes and Coaches", detail: "Movement, discipline, and what teams teach us." },
];

const PARTNER_EMAIL =
  "mailto:thewildcardprojectgh@gmail.com?subject=Partnering with The Wild Card Club";

const FACILITATOR_EMAIL = `mailto:thewildcardprojectgh@gmail.com?subject=${encodeURIComponent(
  "Facilitator application: The Wild Card Club"
)}&body=${encodeURIComponent(
  "Hello Wild Card team,\n\nI would like to facilitate at The Wild Card Club.\n\nName:\nProfession:\nWhat I would love to teach:\nAvailability:\n\nThank you."
)}`;

export default function WildCardClubPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="A Project of The Wild Card Project"
        title="The Wild Card Club"
        description="Our flagship literacy, creativity, and life skills club for children aged 6 to 16. A safe, engaging space where learning extends beyond the classroom and every child is encouraged to Read, Create, and Lead."
        image="/images/club/club-outdoor-veana.jpg"
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
                <img src="/images/club/club-brushing.jpg" alt="A Wild Card Club child practising toothbrushing during a session" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-brand-yellow shadow-md" />
              </div>
            </Reveal>
            <div className="md:col-span-7 md:pl-8">
              <Reveal>
                <p className="eyebrow mb-5 text-brand-teal">Who We Are</p>
                <h2 className="display-2 text-brand-charcoal text-balance">Learning that extends beyond the classroom.</h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    The Wild Card Club is the flagship programme of The Wild Card Project, a literacy, creativity, and life
                    skills club dedicated to helping children discover their potential and develop the confidence,
                    character, and skills they need to thrive.
                  </p>
                  <p>
                    Designed for children aged 6 to 16, the Club provides a safe, engaging, and inspiring environment where
                    learning extends beyond the classroom. Through fun, interactive, and hands-on experiences, children are
                    encouraged to grow academically, creatively, socially, and emotionally.
                  </p>
                  <p>
                    We believe every child has unique gifts waiting to be discovered. By nurturing literacy, creativity, and
                    life skills, we empower children not only to excel in school but to become compassionate leaders,
                    confident communicators, and responsible citizens.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Read. Create. Lead. */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Approach</p>
            <h2 className="display-2 text-brand-charcoal text-balance">
              Read. <span className="text-brand-teal">Create.</span> Lead.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every session is built around three simple ideas. Together they help children grow academically,
              creatively, socially, and emotionally.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
            {FRAMEWORK.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.word} delay={i * 120}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-background ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-brand-teal/20">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={item.image} alt={item.alt} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent" />
                      <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal shadow-md">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="absolute bottom-4 left-4 font-serif text-3xl font-semibold text-white drop-shadow">{item.word}</h3>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-serif text-lg font-semibold text-brand-teal">{item.tagline}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={200}>
            <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-xl italic text-brand-charcoal md:text-2xl">
              More than a club, we are a community where children are encouraged to Read. Create. Lead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full-width moment */}
      <section className="relative overflow-hidden bg-brand-charcoal">
        <img src="/images/club/club-dental-group.jpg" alt="Wild Card Club children celebrating during a dental awareness session" className="h-full w-full object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <Reveal className="max-w-xl">
              <p className="eyebrow mb-4 text-brand-yellow">Every Child Is a Wild Card</p>
              <p className="font-serif text-2xl font-semibold text-white text-balance md:text-4xl">
                Unpredictable, powerful, and full of untapped potential.
              </p>
            </Reveal>
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

      {/* Our facilitators */}
      <section id="facilitators" className="scroll-mt-24 bg-brand-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">Our Facilitators</p>
            <h2 className="display-2 text-brand-charcoal text-balance">Real professionals. Real exposure.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Club sessions are led by facilitators from every walk of professional life. A doctor teaching first aid.
              A dentist demystifying the clinic. An artiste turning a classroom into a stage. Exposure begins with
              meeting someone who actually does the work.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITATORS.map((facilitator, i) => {
              const Icon = facilitator.icon;
              return (
                <Reveal key={facilitator.name} delay={i * 80}>
                  <div className="group flex h-full items-start gap-4 rounded-2xl bg-background p-6 ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-brand-teal/20">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-teal text-background transition-colors group-hover:bg-brand-yellow group-hover:text-brand-charcoal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-brand-charcoal">{facilitator.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{facilitator.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={FACILITATORS.length * 80}>
              <a href={FACILITATOR_EMAIL} className="group flex h-full flex-col justify-between rounded-2xl bg-brand-teal p-6 text-background ring-1 ring-brand-teal transition-all hover:-translate-y-1 hover:bg-brand-teal-dark hover:shadow-xl">
                <div>
                  <h3 className="font-serif text-lg font-semibold">Your profession belongs here.</h3>
                  <p className="mt-1 text-sm leading-relaxed text-background/80">
                    Whatever you do for a living, there is a child who has never met anyone who does it.
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow">
                  Apply to facilitate
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
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
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-teal text-background hover:bg-brand-teal-dark">
                <a href={PARTNER_EMAIL}>Become a partner</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal/30 text-brand-teal hover:bg-brand-teal/5 hover:text-brand-teal">
                <a href={FACILITATOR_EMAIL}>Apply to facilitate</a>
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
