import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleForm } from "@/components/admin/article-form";
import { getArticleById } from "@/lib/articles-db";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticleById(id);
  if (!article) notFound();

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark">
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>
        {article.published && (
          <Link href={`/articles/${article.slug}`} target="_blank" className="text-sm font-medium text-muted-foreground hover:text-brand-teal">
            View live
          </Link>
        )}
      </div>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-brand-charcoal">Edit article</h1>
      <p className="mt-1 text-sm text-muted-foreground">Last updated {new Date(article.updatedAt).toLocaleString("en-GB")}</p>
      <div className="mt-8">
        <ArticleForm article={article} />
      </div>
    </div>
  );
}
