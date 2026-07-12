import { Instagram, Twitter, Facebook, Youtube, Linkedin, Mail } from "lucide-react";

// ============================================================================
// SOCIAL LINKS (single source of truth)
// ----------------------------------------------------------------------------
// Update handles here and they change everywhere (footer, contact page).
// Instagram and email are live. The others point at the platform home pages
// until the accounts exist: replace each href with the real profile URL.
// ============================================================================

export const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/wearewildcard.gh", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:thewildcardprojectgh@gmail.com", label: "Email" },
];

const VARIANTS = {
  // For dark surfaces (the charcoal footer).
  dark: "border border-background/20 text-background/80 hover:bg-brand-yellow hover:text-brand-charcoal hover:border-brand-yellow",
  // For light surfaces (cream and white pages).
  light: "ring-1 ring-border/60 bg-background text-brand-teal hover:bg-brand-teal hover:text-background",
} as const;

export function SocialLinks({ variant = "light", className = "" }: { variant?: keyof typeof VARIANTS; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIALS.map((social) => {
        const Icon = social.icon;
        const isExternal = social.href.startsWith("http");
        return (
          <a
            key={social.label}
            href={social.href}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={social.label}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${VARIANTS[variant]}`}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
