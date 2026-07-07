import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export function PageCta({ eyebrow = "Ready to take action?", title, description, primaryLabel = "Support our work", primaryHref = "/get-involved", secondaryLabel = "Get in touch", secondaryHref = "/contact" }: { eyebrow?: string; title: string; description?: string; primaryLabel?: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string; }) {
  return (
    <section className="relative overflow-hidden bg-brand-teal py-20 md:py-28">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <Reveal>
          <p className="eyebrow mb-4 text-brand-yellow">{eyebrow}</p>
          <h2 className="display-2 text-white text-balance">{title}</h2>
          {description && <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{description}</p>}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark"><Link href={primaryHref}>{primaryLabel}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            {secondaryLabel && <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href={secondaryHref}>{secondaryLabel}</Link></Button>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
