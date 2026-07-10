import "server-only";
import { cookies } from "next/headers";
import { createHash } from "crypto";

// ----------------------------------------------------------------------------
// Lightweight single-password admin auth for the articles dashboard.
//
// Set two environment variables:
//   ADMIN_PASSWORD  the password the team uses to sign in at /admin/login
//   ADMIN_SECRET    any long random string, used to sign the session cookie
//
// A successful login stores a hashed token in an httpOnly cookie. We never
// store the raw password in the cookie. This is intentionally simple and is
// enough to gate a small internal dashboard. For multiple accounts or roles,
// swap this out for the installed next-auth later.
// ----------------------------------------------------------------------------

export const ADMIN_COOKIE = "wcp_admin";

function expectedToken(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  const secret = process.env.ADMIN_SECRET ?? "wild-card-fallback-secret";
  return createHash("sha256").update(`${password}:${secret}`).digest("hex");
}

export function verifyPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return password === expected;
}

export function sessionToken(): string | null {
  return expectedToken();
}

export async function isAuthenticated(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === expected;
}

// True when the server has no ADMIN_PASSWORD configured yet. Used to show a
// setup hint on the login screen instead of a confusing "wrong password".
export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}
