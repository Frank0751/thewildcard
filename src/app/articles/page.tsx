import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { PageCta } from "@/components/site/page-cta";
import { Reveal } from "@/components/site/reveal";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { ArrowRight, PenLine } from "lucide-react";
import { getPublishedArticles } from "@/lib/articles-db";
import { authorTypeLabel, formatDate, readingTime, resolveVoiceFilter, VOICE_FILTERS } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Stories, field notes, and reflections from The Wild Card Project team, the founder, and the young people we work with.",
};

// Content comes from the database, so render on each request.
export const dynamic = "force-dynamic";

export default async function ArticlesPage({ searchParams }: { searchParams: Promise<{ voice?: string }> }) {
  const { voice } = await searchParams;
  const activeVoice = resolveVoiceFilter(voice);
  const articles = await getPublishedArticles(activeVoice.authorTypes);
  const [featured, ...rest] = articles;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Articles and Blog"
        title="Words from our team, our founder, and our children."
        description="Stories from the field, reflections on the work, and pieces written by the young people we are proud to call Wild Cards. We encourage our children to write, and we publish them here."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Voice filter */}
          <Reveal>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
              {VOICE_FILTERS.map((filter) => {
                const isActive = filter.value === activeVoice.value;
                return (
                  <Link
                    key={filter.value}
                    href={filter.value === "all" ? "/articles" : `/articles?voice=${filter.value}`}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-brand-teal text-background shadow-md"
                        : "bg-brand-cream text-brand-charcoal ring-1 ring-border/60 hover:bg-brand-cream-deep hover:text-brand-teal"
                    }`}
                  >
                    {filter.label}
                  </Link>
                );
              })}
            </div>
          </Reveal>
          {articles.length === 0 ? (
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-border bg-brand-cream p-12 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-background">
                  <PenLine className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-serif text-2xl font-semibold text-brand-charcoal">
                  {activeVoice.value === "all" ? "The first stories are on their way." : `Nothing under ${activeVoice.label} just yet.`}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We are getting ready to publish articles from our team, our founder, and the children we work with.
                  Check back soon, or subscribe below to know when the first one lands.
                </p>
              </div>
            </Reveal>
          ) : (
            <>
              {/* Featured (most recent) */}
              {featured && (
                <Reveal>
                  <Link
                    href={`/articles/${featured.slug}`}
                    className="group grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-cream ring-1 ring-border/60 transition-all hover:shadow-xl hover:ring-brand-teal/20 md:grid-cols-2"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                      {featured.coverImage ? (
                        <img src={featured.coverImage} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-brand-teal">
                          <PenLine className="h-10 w-10 text-brand-yellow" />
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 eyebrow text-brand-charcoal">Latest</span>
                    </div>
                    <div className="flex flex-col justify-center p-7 md:p-10">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="eyebrow text-brand-teal">{featured.category}</span>
                        <span className="text-muted-foreground">{authorTypeLabel(featured.authorType)}</span>
                      </div>
                      <h2 className="mt-3 font-serif text-2xl font-semibold text-brand-charcoal md:text-3xl">{featured.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{featured.excerpt}</p>
                      <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium text-brand-charcoal">{featured.authorName}</span>
                        <span aria-hidden="true">·</span>
                        <span>{formatDate(featured.publishedAt)}</span>
                        <span aria-hidden="true">·</span>
                        <span>{readingTime(featured.content)}</span>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal">
                        Read the article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )}

              {/* Rest */}
              {rest.length > 0 && (
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((article, i) => (
                    <Reveal key={article.id} delay={(i % 3) * 100}>
                      <Link
                        href={`/articles/${article.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-brand-cream ring-1 ring-border/60 transition-all hover:shadow-lg hover:ring-brand-teal/20"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          {article.coverImage ? (
                            <img src={article.coverImage} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-brand-teal">
                              <PenLine className="h-8 w-8 text-brand-yellow" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="eyebrow text-brand-teal">{article.category}</span>
                            <span className="text-muted-foreground">{authorTypeLabel(article.authorType)}</span>
                          </div>
                          <h3 className="mt-2 font-serif text-lg font-semibold text-brand-charcoal">{article.title}</h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-medium text-brand-charcoal">{article.authorName}</span>
                            <span aria-hidden="true">·</span>
                            <span>{formatDate(article.publishedAt)}</span>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <PageCta
        eyebrow="Are you a young writer?"
        title="We would love to publish your story."
        description="If you are one of our children with something to say, tell your mentor. We publish pieces written by the young people we work with."
        primaryLabel="Get involved"
        primaryHref="/get-involved"
        secondaryLabel="Meet our team"
        secondaryHref="/about/team"
      />
      <NewsletterSignup />
    </SiteShell>
  );
}
