import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { logoutAction } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { LogOut, PenSquare, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

export const dynamic = "force-dynamic";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/admin" className="flex items-center gap-3">
            <img src="/logo.png" alt="The Wild Card Project logo" className="h-9 w-9 object-contain" />
            <div className="leading-tight">
              <span className="block font-serif text-base font-semibold text-brand-teal">Content Admin</span>
              <span className="block text-[11px] text-muted-foreground">The Wild Card Project</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-brand-charcoal">
              <Link href="/admin"><LayoutDashboard className="mr-2 h-4 w-4" />Articles</Link>
            </Button>
            <Button asChild size="sm" className="bg-brand-teal text-background hover:bg-brand-teal-dark">
              <Link href="/admin/articles/new"><PenSquare className="mr-2 h-4 w-4" />New article</Link>
            </Button>
            <form action={logoutAction}>
              <Button type="submit" variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                <LogOut className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">{children}</div>
      </main>
      <footer className="border-t border-border bg-background py-4 text-center text-xs text-muted-foreground">
        <Link href="/" className="hover:text-brand-teal">View the live website</Link>
      </footer>
    </div>
  );
}
