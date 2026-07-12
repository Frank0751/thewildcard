"use client";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-brand-charcoal">
      <div className="absolute inset-0">
        <img src="/photos/hero-homepage.jpg" alt="A group of Ghanaian youth in school uniforms taking a selfie with an adult, representing the joyful community The Wild Card Project serves" className="hero-zoom h-full w-full object-cover object-center" />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 md:px-8 md:pb-24">
        <Reveal className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1.5 eyebrow text-brand-charcoal shadow-lg"><span aria-hidden="true">♠</span>Youth-focused · Ghana</p>
          <h1 className="display-1 text-white text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">Turning Wild Cards<br /><span className="text-brand-yellow">into Aces.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] md:text-xl">The Wild Card Project helps overlooked young people across Ghana access education, protect their wellbeing, and grow into the confident, capable adults they were always meant to become.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark shadow-lg"><Link href="/get-involved">Support our work<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"><Link href="/programs">See our programs</Link></Button>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-16 flex items-center gap-2 eyebrow text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"><ArrowDown className="h-3 w-3 animate-bounce" /><span>Scroll to learn more</span></div>
        </Reveal>
      </div>
    </section>
  );
}
