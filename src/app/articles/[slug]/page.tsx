import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site/site-shell";
import { Reveal } from "@/components/site/reveal";
import { PageCta } from "@/components/site/page-cta";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug } from "@/lib/articles-db";
import { authorTypeLabel, formatDate, readingTime } from "@/lib/articles";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: article.coverImage ? { images: [article.coverImage] } : undefined,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article || !article.published) notFound();

  // Render content as paragraphs. Authors write plain text with blank lines
  // between paragraphs in the admin editor.
  const paragraphs = article.content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <SiteShell>
      <article>
        {/* Header */}
        <header className="relative overflow-hidden bg-brand-teal py-20 md:py-28">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-4 md:px-8">
            <Reveal>
              <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-brand-yellow hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                All articles
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-yellow px-3 py-1 eyebrow text-brand-charcoal">{article.category}</span>
                <span className="eyebrow text-white/70">{authorTypeLabel(article.authorType)}</span>
              </div>
              <h1 className="display-2 mt-5 text-white text-balance">{article.title}</h1>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">{article.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="font-semibold text-white">{article.authorName}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(article.publishedAt ?? article.createdAt)}</span>
                <span aria-hidden="true">·</span>
                <span>{readingTime(article.content)}</span>
              </div>
            </Reveal>
          </div>
        </header>

        {/* Cover */}
        {article.coverImage && (
          <div className="bg-background">
            <div className="mx-auto max-w-4xl px-4 md:px-8">
              <div className="relative -mt-12 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl md:-mt-16">
                <img src={article.coverImage} alt={article.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <div className="space-y-6 text-base leading-relaxed text-brand-charcoal/90 md:text-lg">
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12 border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                Written by <span className="font-semibold text-brand-charcoal">{article.authorName}</span>
                {" · "}
                {authorTypeLabel(article.authorType)}
              </p>
              <Link href="/articles" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark">
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <PageCta
        eyebrow="Moved by this?"
        title="Help us turn more wild cards into aces."
        description="Every story here is made possible by people who show up. Donate, volunteer, or partner with us."
        primaryLabel="Get involved"
        primaryHref="/get-involved"
        secondaryLabel="Read more articles"
        secondaryHref="/articles"
      />
      <NewsletterSignup />
    </SiteShell>
  );
}
