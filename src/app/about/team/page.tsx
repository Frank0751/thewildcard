import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { PageCta } from "@/components/site/page-cta";
import { Reveal } from "@/components/site/reveal";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail, HandHeart, Heart } from "lucide-react";
import { TEAM_MEMBERS, TEAM_PHILOSOPHY, type TeamMember } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind The Wild Card Project: the founder, the team, and the philosophy that holds us together. Plus how to join us as a volunteer.",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function MemberSocials({ member }: { member: TeamMember }) {
  const links = [
    { key: "instagram", href: member.socials.instagram, Icon: Instagram, label: `${member.name} on Instagram` },
    { key: "facebook", href: member.socials.facebook, Icon: Facebook, label: `${member.name} on Facebook` },
    { key: "twitter", href: member.socials.twitter, Icon: Twitter, label: `${member.name} on X` },
    { key: "youtube", href: member.socials.youtube, Icon: Youtube, label: `${member.name} on YouTube` },
    { key: "linkedin", href: member.socials.linkedin, Icon: Linkedin, label: `${member.name} on LinkedIn` },
    { key: "email", href: member.socials.email, Icon: Mail, label: `Email ${member.name}` },
  ].filter((l) => l.href);
  if (links.length === 0) return null;
  return (
    <div className="mt-4 flex items-center gap-2">
      {links.map(({ key, href, Icon, label }) => {
        const external = href!.startsWith("http");
        return (
          <a
            key={key}
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-brand-teal transition-colors hover:bg-brand-teal hover:text-background"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

function MemberAvatar({ member, className }: { member: TeamMember; className?: string }) {
  if (member.image) {
    return <img src={member.image} alt={member.name} className={`h-full w-full object-cover ${className ?? ""}`} loading="lazy" />;
  }
  return (
    <div className={`flex h-full w-full items-center justify-center bg-brand-teal ${className ?? ""}`}>
      <span className="font-serif text-4xl font-semibold text-brand-yellow">{initials(member.name)}</span>
    </div>
  );
}

export default function TeamPage() {
  const lead = TEAM_MEMBERS.find((m) => m.lead);
  const rest = TEAM_MEMBERS.filter((m) => !m.lead);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Team"
        title="The people betting on the wild cards."
        description="A small team with one shared conviction. Meet the founder, the people who run the work, and see how you can join us as a volunteer."
        image="/images/club/club-dental-group.jpg"
      />

      {/* Founder / lead */}
      {lead && (
        <section className="bg-background py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <Reveal className="md:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-cream-deep shadow-lg">
                  <MemberAvatar member={lead} />
                  <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-brand-yellow shadow-md" />
                </div>
              </Reveal>
              <div className="md:col-span-7 md:pl-8">
                <Reveal>
                  <p className="eyebrow mb-5 text-brand-teal">Meet the Founder</p>
                  <h2 className="display-2 text-brand-charcoal text-balance">{lead.name}</h2>
                  <p className="mt-2 eyebrow text-brand-teal-light">{lead.role}</p>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">{lead.bio}</p>
                  <MemberSocials member={lead} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* The rest of the team */}
      {rest.length > 0 && (
        <section className="bg-brand-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-5 text-brand-teal">The Team</p>
              <h2 className="display-2 text-brand-charcoal text-balance">Who makes the work happen.</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((member, i) => (
                <Reveal key={`${member.name}-${i}`} delay={i * 100}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-background ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20">
                    <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream-deep">
                      <MemberAvatar member={member} />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-semibold text-brand-charcoal">{member.name}</h3>
                      <p className="mt-1 eyebrow text-brand-teal-light">{member.role}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                      <MemberSocials member={member} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Philosophy */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-brand-teal">{TEAM_PHILOSOPHY.eyebrow}</p>
            <h2 className="display-2 text-brand-charcoal text-balance">{TEAM_PHILOSOPHY.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{TEAM_PHILOSOPHY.intro}</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TEAM_PHILOSOPHY.principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl bg-brand-cream p-7 ring-1 ring-border/60">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal text-background">
                    <Heart className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-brand-charcoal">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team as a volunteer */}
      <section className="bg-brand-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <Reveal>
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
              <HandHeart className="h-6 w-6" />
            </span>
            <p className="eyebrow mb-4 text-brand-yellow">Join the Team</p>
            <h2 className="display-2 text-white text-balance">We are looking for people who show up.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Facilitators, photographers, writers, coaches, mentors, and volunteers who want to give their time and
              skills. You do not need a title to make a difference here. You need to care and to be consistent.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark">
                <a href="mailto:thewildcardprojectgh@gmail.com?subject=Volunteering with The Wild Card Project">
                  Volunteer with us
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/get-involved">See all the ways to help</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        eyebrow="Want to know more about us?"
        title="Read our story and see what we stand for."
        description="Our team is one part of the picture. See the conviction, the values, and the journey behind The Wild Card Project."
        primaryLabel="Our story"
        primaryHref="/about"
        secondaryLabel="Our programs"
        secondaryHref="/programs"
      />
      <NewsletterSignup />
    </SiteShell>
  );
}
