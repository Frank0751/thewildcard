"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import {
  ADMIN_COOKIE,
  isAuthenticated,
  sessionToken,
  verifyPassword,
} from "@/lib/auth";
import { slugify } from "@/lib/articles";

export type LoginState = { error?: string };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  if (!verifyPassword(password)) {
    return { error: "Incorrect password. Please try again." };
  }
  const token = sessionToken();
  if (!token) {
    return { error: "Admin is not configured. Set ADMIN_PASSWORD in the environment." };
  }
  const store = await cookies();
  store.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  redirect("/admin");
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

async function requireAuth() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
}

export async function saveArticle(formData: FormData) {
  await requireAuth();

  const id = String(formData.get("id") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const coverImage = String(formData.get("coverImage") ?? "").trim();
  const authorName = String(formData.get("authorName") ?? "").trim();
  const authorType = String(formData.get("authorType") ?? "team").trim();
  const category = String(formData.get("category") ?? "Stories").trim();
  const published = formData.get("published") === "on";

  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugify(slugInput || title);

  if (!title || !excerpt || !content || !authorName || !slug) {
    throw new Error("Title, slug, excerpt, author, and content are required.");
  }

  const data = {
    slug,
    title,
    excerpt,
    content,
    coverImage: coverImage || null,
    authorName,
    authorType,
    category,
    published,
  };

  if (id) {
    const existing = await db.article.findUnique({ where: { id } });
    const publishedAt =
      published && !existing?.publishedAt ? new Date() : existing?.publishedAt ?? null;
    await db.article.update({ where: { id }, data: { ...data, publishedAt } });
  } else {
    await db.article.create({
      data: { ...data, publishedAt: published ? new Date() : null },
    });
  }

  revalidatePath("/articles");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function togglePublish(formData: FormData) {
  await requireAuth();
  const id = String(formData.get("id") ?? "");
  const article = await db.article.findUnique({ where: { id } });
  if (!article) return;
  const nextPublished = !article.published;
  await db.article.update({
    where: { id },
    data: {
      published: nextPublished,
      publishedAt: nextPublished && !article.publishedAt ? new Date() : article.publishedAt,
    },
  });
  revalidatePath("/articles");
  revalidatePath("/admin");
}

export async function deleteArticle(formData: FormData) {
  await requireAuth();
  const id = String(formData.get("id") ?? "");
  await db.article.delete({ where: { id } });
  revalidatePath("/articles");
  revalidatePath("/admin");
}
