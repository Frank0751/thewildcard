import "server-only";
import { db } from "@/lib/db";
import type { Article } from "@prisma/client";

// Server-only data access for articles. All reads degrade gracefully if the
// database is unreachable, so the site still renders (with an empty list) when
// DATABASE_URL is not set or migrations have not been run.

export async function getPublishedArticles(authorTypes?: readonly string[] | null): Promise<Article[]> {
  try {
    return await db.article.findMany({
      where: {
        published: true,
        ...(authorTypes && authorTypes.length > 0 ? { authorType: { in: [...authorTypes] } } : {}),
      },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });
  } catch (error) {
    console.error("Failed to load published articles:", error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    return await db.article.findUnique({ where: { slug } });
  } catch (error) {
    console.error("Failed to load article:", error);
    return null;
  }
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    return await db.article.findMany({ orderBy: { updatedAt: "desc" } });
  } catch (error) {
    console.error("Failed to load articles:", error);
    return [];
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  try {
    return await db.article.findUnique({ where: { id } });
  } catch (error) {
    console.error("Failed to load article:", error);
    return null;
  }
}
