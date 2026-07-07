import Link from "next/link";
import { Reveal } from "@/components/site/reveal";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-yellow py-20 md:py-24">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-teal/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
        <Reveal>
          <p className="eyebrow mb-4 text-brand-teal">Ready to take action?</p>
          <h2 className="display-2 text-brand-charcoal text-balance">Every wild card deserves a chance to become an ace.</h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-brand-charcoal/80 md:text-lg">Donate, volunteer, partner, or simply show up. However you can help, we will find a way to use it well.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand-teal text-background hover:bg-brand-teal-dark"><Link href="/get-involved">Support our work<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-background"><Link href="/contact">Get in touch</Link></Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
