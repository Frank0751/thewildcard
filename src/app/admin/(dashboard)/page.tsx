import Link from "next/link";
import { getAllArticles } from "@/lib/articles-db";
import { authorTypeLabel, formatDate } from "@/lib/articles";
import { togglePublish, deleteArticle } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Pencil, Eye, EyeOff, Trash2, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  const articles = await getAllArticles();
  const publishedCount = articles.filter((a) => a.published).length;

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-brand-charcoal">Articles</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {articles.length} total · {publishedCount} published · {articles.length - publishedCount} draft
          </p>
        </div>
        <Button asChild className="bg-brand-teal text-background hover:bg-brand-teal-dark">
          <Link href="/admin/articles/new">New article</Link>
        </Button>
      </div>

      {articles.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-background p-12 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-teal">
            <FileText className="h-5 w-5" />
          </span>
          <h2 className="mt-4 font-serif text-xl font-semibold text-brand-charcoal">No articles yet</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Write the first story from the team, the founder, or one of the children.
          </p>
          <Button asChild className="mt-6 bg-brand-teal text-background hover:bg-brand-teal-dark">
            <Link href="/admin/articles/new">Write an article</Link>
          </Button>
          <p className="mt-6 text-xs text-muted-foreground">
            If you expected to see articles here, check that DATABASE_URL points to your PostgreSQL database and that
            migrations have been run.
          </p>
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-2xl bg-background ring-1 ring-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-brand-cream text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Title</th>
                <th className="hidden px-5 py-3 font-semibold md:table-cell">Author</th>
                <th className="hidden px-5 py-3 font-semibold sm:table-cell">Status</th>
                <th className="hidden px-5 py-3 font-semibold lg:table-cell">Date</th>
                <th className="px-5 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4">
                    <div className="font-medium text-brand-charcoal">{article.title}</div>
                    <div className="text-xs text-muted-foreground">{article.category}</div>
                  </td>
                  <td className="hidden px-5 py-4 text-muted-foreground md:table-cell">
                    <div>{article.authorName}</div>
                    <div className="text-xs">{authorTypeLabel(article.authorType)}</div>
                  </td>
                  <td className="hidden px-5 py-4 sm:table-cell">
                    {article.published ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs font-medium text-brand-teal">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" /> Draft
                      </span>
                    )}
                  </td>
                  <td className="hidden px-5 py-4 text-xs text-muted-foreground lg:table-cell">
                    {formatDate(article.publishedAt ?? article.createdAt)}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <Button asChild variant="ghost" size="sm" className="h-8 px-2 text-brand-teal">
                        <Link href={`/admin/articles/${article.id}/edit`} aria-label="Edit"><Pencil className="h-4 w-4" /></Link>
                      </Button>
                      <form action={togglePublish}>
                        <input type="hidden" name="id" value={article.id} />
                        <Button type="submit" variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground" aria-label={article.published ? "Unpublish" : "Publish"}>
                          {article.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </form>
                      <form action={deleteArticle}>
                        <input type="hidden" name="id" value={article.id} />
                        <Button type="submit" variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-destructive" aria-label="Delete">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
