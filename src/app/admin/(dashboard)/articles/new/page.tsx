import Link from "next/link";
import { ArticleForm } from "@/components/admin/article-form";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default function NewArticlePage() {
  return (
    <div>
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark">
        <ArrowLeft className="h-4 w-4" />
        Back to articles
      </Link>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-brand-charcoal">New article</h1>
      <p className="mt-1 text-sm text-muted-foreground">Write a story from the team, the founder, or one of the children.</p>
      <div className="mt-8">
        <ArticleForm />
      </div>
    </div>
  );
}
