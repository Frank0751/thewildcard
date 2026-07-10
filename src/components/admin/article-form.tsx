"use client";

import { useState } from "react";
import { saveArticle } from "@/app/admin/actions";
import { AUTHOR_TYPES, CATEGORIES, slugify, type Article } from "@/lib/articles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

const selectClass =
  "mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

export function ArticleForm({ article }: { article?: Article }) {
  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(article?.slug));

  const effectiveSlug = slugTouched ? slug : slugify(title);

  return (
    <form action={saveArticle} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {article?.id && <input type="hidden" name="id" value={article.id} />}

      {/* Main column */}
      <div className="space-y-6 lg:col-span-2">
        <div>
          <Label htmlFor="title" className="eyebrow text-muted-foreground">Title</Label>
          <Input id="title" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="A clear, honest headline" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="slug" className="eyebrow text-muted-foreground">URL slug</Label>
          <Input
            id="slug"
            name="slug"
            value={effectiveSlug}
            onChange={(e) => { setSlug(e.target.value); setSlugTouched(true); }}
            placeholder="auto-generated-from-title"
            className="mt-2 font-mono text-sm"
          />
          <p className="mt-1 text-xs text-muted-foreground">Lives at /articles/{effectiveSlug || "your-slug"}</p>
        </div>

        <div>
          <Label htmlFor="excerpt" className="eyebrow text-muted-foreground">Excerpt</Label>
          <Textarea id="excerpt" name="excerpt" required defaultValue={article?.excerpt ?? ""} rows={2} placeholder="One or two sentences that appear in the article list." className="mt-2" />
        </div>

        <div>
          <Label htmlFor="content" className="eyebrow text-muted-foreground">Content</Label>
          <Textarea id="content" name="content" required defaultValue={article?.content ?? ""} rows={18} placeholder={"Write the article here.\n\nLeave a blank line between paragraphs."} className="mt-2 leading-relaxed" />
          <p className="mt-1 text-xs text-muted-foreground">Separate paragraphs with a blank line. Please avoid em dashes.</p>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
          <h2 className="font-serif text-lg font-semibold text-brand-charcoal">Publishing</h2>
          <div className="mt-4">
            <Label htmlFor="published" className="flex cursor-pointer items-center gap-3">
              <input
                id="published"
                name="published"
                type="checkbox"
                defaultChecked={article?.published ?? false}
                className="h-4 w-4 rounded border-input accent-[#006666]"
              />
              <span className="text-sm text-brand-charcoal">Published (visible on the site)</span>
            </Label>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <Button type="submit" className="w-full bg-brand-teal text-background hover:bg-brand-teal-dark">
              <Save className="mr-2 h-4 w-4" />
              Save article
            </Button>
          </div>
        </div>

        <div className="rounded-2xl bg-background p-6 ring-1 ring-border">
          <h2 className="font-serif text-lg font-semibold text-brand-charcoal">Details</h2>
          <div className="mt-4 space-y-4">
            <div>
              <Label htmlFor="authorName" className="eyebrow text-muted-foreground">Author name</Label>
              <Input id="authorName" name="authorName" required defaultValue={article?.authorName ?? ""} placeholder="e.g. Ama, age 11" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="authorType" className="eyebrow text-muted-foreground">Author type</Label>
              <select id="authorType" name="authorType" defaultValue={article?.authorType ?? "team"} className={selectClass}>
                {AUTHOR_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="category" className="eyebrow text-muted-foreground">Category</Label>
              <select id="category" name="category" defaultValue={article?.category ?? "Stories"} className={selectClass}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="coverImage" className="eyebrow text-muted-foreground">Cover image URL</Label>
              <Input id="coverImage" name="coverImage" defaultValue={article?.coverImage ?? ""} placeholder="/photos/your-image.jpg" className="mt-2 text-sm" />
              <p className="mt-1 text-xs text-muted-foreground">Optional. A path under /public or a full URL.</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
