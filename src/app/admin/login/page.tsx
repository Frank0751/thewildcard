import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/login-form";
import { adminConfigured, isAuthenticated } from "@/lib/auth";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Admin sign in", robots: { index: false, follow: false } };

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await isAuthenticated()) redirect("/admin");
  const configured = adminConfigured();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-4 py-16">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-3">
          <img src="/logo.png" alt="The Wild Card Project logo" className="h-11 w-11 object-contain" />
          <span className="font-serif text-lg font-semibold text-brand-teal">The Wild Card Project</span>
        </Link>
        <div className="rounded-2xl bg-background p-8 shadow-lg ring-1 ring-border">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal text-background">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <h1 className="font-serif text-xl font-semibold text-brand-charcoal">Content admin</h1>
              <p className="text-xs text-muted-foreground">Sign in to manage articles.</p>
            </div>
          </div>
          <div className="mt-6">
            <LoginForm />
          </div>
          {!configured && (
            <p className="mt-5 rounded-md bg-brand-cream p-3 text-xs leading-relaxed text-muted-foreground">
              Setup note: no admin password is configured yet. Set <code className="font-mono">ADMIN_PASSWORD</code> and{" "}
              <code className="font-mono">ADMIN_SECRET</code> in your environment, then sign in.
            </p>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          <Link href="/" className="hover:text-brand-teal">Back to the website</Link>
        </p>
      </div>
    </div>
  );
}
