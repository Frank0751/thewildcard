import type { Article } from "@prisma/client";

// Client-safe article helpers and constants. This module must NOT import the
// database client, because it is used by client components (the admin editor).
// Server-only data access lives in "@/lib/articles-db".

export type { Article };

// Author types map to who wrote the piece. Children are encouraged to write.
export const AUTHOR_TYPES = [
  { value: "founder", label: "Founder" },
  { value: "team", label: "Team" },
  { value: "child", label: "Young Writer" },
] as const;

export const CATEGORIES = [
  "Stories",
  "Field Notes",
  "Programs",
  "Young Voices",
  "Announcements",
] as const;

export function authorTypeLabel(value: string) {
  return AUTHOR_TYPES.find((t) => t.value === value)?.label ?? "Team";
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function formatDate(date: Date | string | null) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Estimate reading time from content length.
export function readingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
