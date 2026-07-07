"use client";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/reveal";
import { ChevronLeft, ChevronRight, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";

const ACTION_CARDS = [
  { title: "Give monthly", description: "Join the community of supporters serving young Ghanaians every month. Even GHS 50 a month pads 5 students for a term.", cta: "Become a monthly giver", href: "/get-involved#donate", accent: "teal" },
  { title: "Sponsor a program", description: "Fund an entire program cycle. A gift of GHS 5,000 or more can transform a school visit, a CPR training, or a wellbeing drive.", cta: "Sponsor now", href: "mailto:thewildcardprojectgh@gmail.com?subject=Sponsor a program", accent: "yellow" },
  { title: "Start a fundraiser", description: "Raise funds for The Wild Card Project through your network, school, or workplace. We provide the assets, you bring the people.", cta: "Get started", href: "mailto:thewildcardprojectgh@gmail.com?subject=Start a fundraiser", accent: "teal" },
  { title: "Give in someone's honor", description: "Make a gift in honor of someone you love, or in memory of someone you've lost. We'll send a card to the honoree.", cta: "Give today", href: "mailto:thewildcardprojectgh@gmail.com?subject=Give in someone's honor", accent: "yellow" },
  { title: "Become a brand partner", description: "Work closely with our team to develop initiatives with undeniable impact. We partner with brands that share our values.", cta: "Partner with us", href: "mailto:thewildcardprojectgh@gmail.com?subject=Brand partnership", accent: "teal" },
  { title: "Volunteer your skills", description: "Facilitators, photographers, writers, drivers, mentors. We need people who show up consistently, not just once.", cta: "Email us to start", href: "mailto:thewildcardprojectgh@gmail.com?subject=Volunteering", accent: "yellow" },
  { title: "Attend a program", description: "Show up to our next CPR training, sports day, or advocacy drive. Bring a friend. Bring your kids. Bring your whole team.", cta: "See upcoming events", href: "/programs#upcoming", accent: "teal" },
  { title: "Legacy and asset giving", description: "Make a lasting gift through legacy or non-cash giving to help ensure young Ghanaians have access to education and care.", cta: "Learn more", href: "mailto:thewildcardprojectgh@gmail.com?subject=Legacy giving", accent: "yellow" },
];

export function TakeActionCarousel() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  useEffect(() => {
    const update = () => { if (window.innerWidth >= 1024) setItemsPerView(4); else if (window.innerWidth >= 640) setItemsPerView(2); else setItemsPerView(1); };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const maxIndex = Math.max(0, ACTION_CARDS.length - itemsPerView);
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  return (
    <section className="bg-brand-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4 text-brand-yellow">Ready to take action?</p>
              <h2 className="display-2 text-white text-balance">Lots of great ways to help us turn wild cards into aces.</h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">Take action today, and change lives. Pick the way that fits you.</p>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={prev} disabled={index === 0} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-brand-yellow hover:text-brand-charcoal hover:border-brand-yellow disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-white/20"><ChevronLeft className="h-5 w-5" /></button>
              <button type="button" onClick={next} disabled={index >= maxIndex} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-brand-yellow hover:text-brand-charcoal hover:border-brand-yellow disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-white/20"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}>
            {ACTION_CARDS.map((card) => (
              <div key={card.title} className="shrink-0 px-3" style={{ width: `${100 / itemsPerView}%` }}>
                <div className="group flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-brand-yellow/40">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${card.accent === "yellow" ? "bg-brand-yellow text-brand-charcoal" : "bg-brand-teal-light text-white"}`}><Heart className="h-5 w-5" /></span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{card.description}</p>
                  <Link href={card.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow hover:underline">{card.cta}<span className="transition-transform group-hover:translate-x-1">→</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (<button key={i} type="button" onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-brand-yellow" : "w-2.5 bg-white/30 hover:bg-white/50"}`} />))}
        </div>
      </div>
    </section>
  );
}

export function DonationReassurance() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <Reveal>
          <div className="rounded-3xl bg-brand-cream-deep p-8 text-center md:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-background"><ShieldCheck className="h-6 w-6" /></div>
            <h2 className="mt-6 display-3 text-brand-charcoal text-balance">Know that your donation is making a difference.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">The Wild Card Project uses 100% of your public donation to fund programs for young Ghanaians. Operating costs are covered separately by partners and the founder. We report honestly on what we run, who we serve, and what we learn.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-brand-charcoal">100% promise</span>
              <span className="rounded-full bg-background px-5 py-2 text-sm font-semibold text-brand-teal ring-1 ring-border">Honest reporting</span>
              <span className="rounded-full bg-background px-5 py-2 text-sm font-semibold text-brand-teal ring-1 ring-border">Quarterly updates</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OtherWaysToGive() {
  const [openSection, setOpenSection] = useState<string | null>("check");
  const sections = [
    { id: "check", title: "Donate by Bank Transfer", body: (<div className="space-y-3 text-sm text-muted-foreground"><p>For large donations or partnership contributions, a direct bank transfer is the most efficient. Please email us after sending so we can confirm receipt and thank you properly.</p><dl className="grid grid-cols-1 gap-2 sm:grid-cols-2"><div className="rounded-lg bg-background p-3"><dt className="eyebrow text-muted-foreground">Account Name</dt><dd className="mt-1 font-semibold text-brand-charcoal">The Wild Card Project</dd></div><div className="rounded-lg bg-background p-3"><dt className="eyebrow text-muted-foreground">Bank</dt><dd className="mt-1 font-semibold text-brand-charcoal">To be confirmed</dd></div><div className="rounded-lg bg-background p-3"><dt className="eyebrow text-muted-foreground">Account Number</dt><dd className="mt-1 font-semibold text-brand-charcoal">To be confirmed</dd></div><div className="rounded-lg bg-background p-3"><dt className="eyebrow text-muted-foreground">Branch</dt><dd className="mt-1 font-semibold text-brand-charcoal">Accra, Ghana</dd></div></dl></div>) },
    { id: "international", title: "International Giving", body: (<div className="space-y-3 text-sm text-muted-foreground"><p>For donors outside Ghana, we accept bank-issued money orders in USD. Please make them payable to The Wild Card Project and email us to coordinate delivery.</p><p>For donations over GHS 20,000 equivalent, we also accept wire transfers. Email <a href="mailto:thewildcardprojectgh@gmail.com" className="font-semibold text-brand-teal hover:underline">thewildcardprojectgh@gmail.com</a> for wire details.</p></div>) },
    { id: "momo", title: "Mobile Money (MoMo)", body: (<div className="space-y-3 text-sm text-muted-foreground"><p>The fastest way to donate from any Ghanaian MoMo wallet. MTN Mobile Money is the most common network.</p><div className="rounded-lg bg-background p-4"><p className="eyebrow text-muted-foreground">MoMo Number</p><p className="mt-1 font-serif text-2xl font-semibold text-brand-teal">054 202 7970</p><p className="mt-1 text-xs">Network: MTN Mobile Money · Account holder: The Wild Card Project</p></div></div>) },
    { id: "legacy", title: "Legacy and Asset Giving", body: (<div className="space-y-3 text-sm text-muted-foreground"><p>Make a lasting gift through legacy or non-cash giving to help ensure young Ghanaians have access to education and care for years to come.</p><p>To discuss legacy giving, stock donations, or other non-cash contributions, email <a href="mailto:thewildcardprojectgh@gmail.com?subject=Legacy giving" className="font-semibold text-brand-teal hover:underline">thewildcardprojectgh@gmail.com</a>.</p></div>) },
  ];
  return (
    <section className="bg-brand-cream py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow mb-4 text-brand-teal">Other Ways to Give</p>
            <h2 className="display-3 text-brand-charcoal text-balance">Not sure which method is right for you?</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">Here are the alternatives. Click any to expand.</p>
          </div>
        </Reveal>
        <div className="mt-10 space-y-3">
          {sections.map((section) => {
            const isOpen = openSection === section.id;
            return (
              <Reveal key={section.id}>
                <div className="overflow-hidden rounded-2xl bg-background ring-1 ring-border/60">
                  <button type="button" onClick={() => setOpenSection(isOpen ? null : section.id)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-cream-deep">
                    <h3 className="font-serif text-lg font-semibold text-brand-charcoal">{section.title}</h3>
                    <ChevronRight className={`h-5 w-5 shrink-0 text-brand-teal transition-transform ${isOpen ? "rotate-90" : ""}`} />
                  </button>
                  {isOpen && <div className="border-t border-border px-6 py-5">{section.body}</div>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
