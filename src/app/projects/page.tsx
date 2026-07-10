import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { PageCta } from "@/components/site/page-cta";
import { Reveal } from "@/components/site/reveal";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The projects of The Wild Card Project, starting with The Wild Card Club. Each one is designed to reach overlooked young people in a different way.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Projects"
        title="One conviction, many projects."
        description="The Wild Card Project runs distinct projects, each built to turn overlooked young people into aces. The Wild Card Club is where it starts."
      />
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:gap-10">
            {PROJECTS.map((project, i) => {
              const clickable = Boolean(project.href);
              const inner = (
                <article
                  className={`group grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-cream ring-1 ring-border/60 transition-all md:grid-cols-2 ${
                    clickable ? "hover:shadow-xl hover:ring-brand-teal/20" : "opacity-95"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 eyebrow text-brand-charcoal">
                      {project.badge}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <h2 className="font-serif text-2xl font-semibold text-brand-charcoal md:text-3xl">{project.name}</h2>
                    <p className="mt-1 eyebrow text-brand-teal-light">{project.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{project.summary}</p>
                    {clickable ? (
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal">
                        Explore the project
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    ) : (
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        In development
                      </span>
                    )}
                  </div>
                </article>
              );
              return (
                <Reveal key={project.slug} delay={i * 100}>
                  {clickable ? (
                    <Link href={project.href!} className="block">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <PageCta
        eyebrow="Have an idea, or want to help?"
        title="Help us build the next project."
        description="Whether you want to partner, facilitate, or fund a new initiative, we would love to hear from you."
        primaryLabel="Partner with us"
        primaryHref="mailto:thewildcardprojectgh@gmail.com?subject=Partnering on a Wild Card project"
        secondaryLabel="Get involved"
        secondaryHref="/get-involved"
      />
      <NewsletterSignup />
    </SiteShell>
  );
}
