"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DropdownLink { href: string; label: string; description: string; }
interface NavItem { href: string; label: string; dropdown?: DropdownLink[]; }

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", dropdown: [
    { href: "/about", label: "Our Story", description: "Who we are, why we exist, and the conviction behind the work." },
    { href: "/about/team", label: "Our Team", description: "Meet the people behind the work, our philosophy, and how to join us." },
    { href: "/about#values", label: "Our Values", description: "Four values that shape every decision we make." },
    { href: "/about#journey", label: "Our Journey", description: "From conviction to programs. A timeline of how we got here." },
  ]},
  { href: "/projects", label: "Projects", dropdown: [
    { href: "/projects", label: "All Projects", description: "Every project under The Wild Card Project, and what is coming next." },
    { href: "/projects/wild-card-club", label: "The Wild Card Club", description: "Our flagship youth enrichment initiative. Partner with us." },
    { href: "/projects/wild-card-club#facilitators", label: "Become a Facilitator", description: "Doctors, dentists, artistes, engineers, chefs. Bring your profession to the Club." },
  ]},
  { href: "/programs", label: "Programs", dropdown: [
    { href: "/programs#education", label: "Education", description: "School partnerships, advocacy against child labour, quality learning campaigns." },
    { href: "/programs#wellbeing", label: "Wellbeing", description: "Menstrual hygiene awareness, CPR and first aid, sports and movement." },
    { href: "/programs#empowerment", label: "Empowerment", description: "Creative collaborations, mentorship, and youth-led storytelling." },
    { href: "/programs#upcoming", label: "Upcoming Events", description: "See the next program you can attend, host, or sponsor." },
  ]},
  { href: "/articles", label: "Articles", dropdown: [
    { href: "/articles", label: "All Articles", description: "Every story, field note, and reflection in one place." },
    { href: "/articles?voice=kids", label: "From the Kids", description: "Pieces written by the young people we work with." },
    { href: "/articles?voice=team", label: "From the Team", description: "Field notes and reflections from our team and founder." },
    { href: "/articles?voice=guests", label: "Guest Voices", description: "Perspectives from partners, facilitators, and friends of the work." },
  ]},
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-brand-cream shadow-sm supports-[backdrop-filter]:bg-brand-cream/90 supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <img src="/logo.png" alt="The Wild Card Project logo" className="h-16 w-16 object-contain transition-transform group-hover:scale-105" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-brand-teal">The Wild Card Project</span>
            <span className="eyebrow text-brand-teal-light">Turning Wild Cards into Aces.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            if (!link.dropdown) return (
              <Link key={link.href} href={link.href} className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? "text-brand-teal" : "text-brand-charcoal hover:text-brand-teal"}`}>
                {link.label}
                {active && <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-yellow" />}
              </Link>
            );
            return (
              <div key={link.href} className="relative" onMouseEnter={() => setActiveDropdown(link.href)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link href={link.href} className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${active || activeDropdown === link.href ? "text-brand-teal" : "text-brand-charcoal hover:text-brand-teal"}`}>
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === link.href ? "rotate-180" : ""}`} />
                </Link>
                {activeDropdown === link.href && (
                  <div className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-2">
                    <div className="overflow-hidden rounded-2xl bg-background shadow-2xl ring-1 ring-border">
                      <div className="grid grid-cols-1">
                        {link.dropdown!.map((item) => (
                          <Link key={item.href} href={item.href} className="group flex items-start justify-between gap-4 border-b border-border/60 px-5 py-4 transition-colors last:border-0 hover:bg-brand-cream-deep">
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-brand-charcoal group-hover:text-brand-teal">{item.label}</div>
                              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.description}</div>
                            </div>
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-teal transition-colors group-hover:bg-brand-yellow group-hover:text-brand-charcoal">
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="sm" className="bg-brand-teal text-background hover:bg-brand-teal-dark">
            <Link href="/get-involved">Donate</Link>
          </Button>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-md p-2 text-brand-teal md:hidden" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              const hasDropdown = !!link.dropdown;
              const isExpanded = activeDropdown === link.href && hasDropdown;
              return (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link href={link.href} onClick={() => setOpen(false)} className={`flex-1 rounded-md px-4 py-3 text-base font-medium transition-colors ${active ? "bg-brand-teal text-background" : "text-brand-charcoal hover:bg-brand-cream-deep"}`}>{link.label}</Link>
                    {hasDropdown && <button type="button" onClick={() => setActiveDropdown(isExpanded ? null : link.href)} className="rounded-md p-3 text-brand-teal" aria-label={`Expand ${link.label}`}><ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} /></button>}
                  </div>
                  {isExpanded && (
                    <div className="ml-4 mt-1 border-l-2 border-brand-cream-deep pl-3">
                      {link.dropdown!.map((item) => (<Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-4 py-2.5 text-sm text-muted-foreground hover:bg-brand-cream-deep hover:text-brand-teal">{item.label}</Link>))}
                    </div>
                  )}
                </div>
              );
            })}
            <Button asChild className="mt-2 bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark"><Link href="/get-involved" onClick={() => setOpen(false)}>Donate</Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
