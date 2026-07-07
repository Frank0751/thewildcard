import Link from "next/link";
import { Instagram, Mail, MapPin, Twitter, Facebook, Youtube, Linkedin, ShieldCheck } from "lucide-react";

const FOOTER_COLUMNS = [
  { header: "Take Action", links: [
    { href: "/get-involved", label: "Donate" },
    { href: "/get-involved#volunteer", label: "Volunteer" },
    { href: "/get-involved#partner", label: "Partner With Us" },
    { href: "/get-involved#attend", label: "Attend an Event" },
  ]},
  { header: "Get Involved", links: [
    { href: "/programs#upcoming", label: "Upcoming Programs" },
    { href: "/programs#past", label: "Past Programs" },
    { href: "/impact", label: "Our Impact" },
    { href: "/about#values", label: "Our Values" },
  ]},
  { header: "Get to know us", links: [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Our Programs" },
    { href: "/impact", label: "Our Impact" },
    { href: "/contact", label: "Contact Us" },
  ]},
  { header: "Connect", links: [
    { href: "/contact", label: "Contact" },
    { href: "https://www.instagram.com/wearewildcard.gh", label: "Instagram", external: true },
    { href: "mailto:thewildcardprojectgh@gmail.com", label: "Email", external: true },
  ]},
];

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/wearewildcard.gh", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:thewildcardprojectgh@gmail.com", label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-brand-charcoal text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo-white.png" alt="The Wild Card Project logo" className="h-12 w-12 object-contain" />
              <span className="font-serif text-lg font-semibold">The Wild Card Project</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">A youth-focused nonprofit in Ghana working across Education, Wellbeing, and Empowerment. We help overlooked young people become aces.</p>
            <p className="mt-5 font-serif text-base italic text-brand-yellow">Turning Wild Cards into Aces.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5">
              <ShieldCheck className="h-4 w-4 text-brand-yellow" />
              <span className="text-xs text-background/80">100% of public donations fund our programs directly.</span>
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.header} className="md:col-span-2">
              <h3 className="eyebrow text-background/60">{col.header}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-background/80 transition-colors hover:text-brand-yellow">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-background/10 pt-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              const isExternal = social.href.startsWith("http");
              return <a key={social.label} href={social.href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-all hover:bg-brand-yellow hover:text-brand-charcoal hover:border-brand-yellow"><Icon className="h-4 w-4" /></a>;
            })}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-background/70">
            <a href="mailto:thewildcardprojectgh@gmail.com" className="flex items-center gap-2 hover:text-brand-yellow"><Mail className="h-3.5 w-3.5" />thewildcardprojectgh@gmail.com</a>
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Accra, Ghana</span>
            <a href="https://www.instagram.com/wearewildcard.gh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-yellow"><Instagram className="h-3.5 w-3.5" />@wearewildcard.gh</a>
          </div>
        </div>
        <div className="mt-8 border-t border-background/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-background/50 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} The Wild Card Project. All rights reserved.</p>
            <p className="max-w-xl md:text-right">The Wild Card Project is a youth-focused nonprofit organization based in Accra, Ghana. Operating costs are covered separately by partners and the founder, so 100% of public donations go directly to programs.</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-background/40">
            <Link href="/contact" className="hover:text-brand-yellow">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="hover:text-brand-yellow">Contact</Link>
            <span aria-hidden="true">·</span>
            <span>Built with care in Accra, Ghana.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
