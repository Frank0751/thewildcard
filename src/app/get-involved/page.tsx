"use client";
import { useState } from "react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { HandHeart, Handshake, CalendarCheck, Copy, Check, Globe, Landmark } from "lucide-react";
import { MomoDonate } from "@/components/site/momo-donate";
import { TakeActionCarousel, DonationReassurance, OtherWaysToGive } from "@/components/site/sections/take-action-sections";
import { NewsletterSignup } from "@/components/site/newsletter-signup";

const INVOLVEMENT = [
  { id: "volunteer", icon: HandHeart, title: "Volunteer", description: "Lend your time, skills, or network. We need facilitators, photographers, writers, drivers, and people who show up.", cta: "Email us to start", href: "mailto:thewildcardprojectgh@gmail.com?subject=Volunteering with The Wild Card Project" },
  { id: "partner", icon: Handshake, title: "Partner With Us", description: "Schools, NGOs, and brands that want to co-create programs. We work with partners who share our values and commit for the long term.", cta: "Start a partnership", href: "mailto:thewildcardprojectgh@gmail.com?subject=Partnership with The Wild Card Project" },
  { id: "attend", icon: CalendarCheck, title: "Attend an Event", description: "Show up to our next program: CPR training, sports day, advocacy drive. Bring a friend. Bring your kids. Bring your whole team.", cta: "See upcoming events", href: "/programs#upcoming" },
];

export default function GetInvolvedPage() {
  const [provider, setProvider] = useState<"paystack" | "flutterwave" | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleInternational = () => {
    const subject = encodeURIComponent("International donation to The Wild Card Project");
    const body = encodeURIComponent(`Hello,\n\nI would like to make an international donation to The Wild Card Project.\n\nPreferred channel: ${provider ?? "Paystack or Flutterwave (please advise)"}\n\nName: \nEmail: \nAmount: \n\nThank you.`);
    window.location.href = `mailto:thewildcardprojectgh@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = (text: string, key: string) => { navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(null), 1800); };

  return (
    <SiteShell>
      <PageHero eyebrow="Donate and Get Involved" title="Help us turn more wild cards into aces." description="Give in seconds with Mobile Money, straight from your phone. International donors can give by card through Paystack or Flutterwave. Or volunteer, partner, and attend our programs." image="/images/programs/mhd-receiving.jpg" />
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div id="donate" className="scroll-mt-24">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow mb-5 text-brand-teal">Donate</p>
                <h2 className="display-2 text-brand-charcoal text-balance">Every cedi goes directly into programs.</h2>
                <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-base">Mobile Money is the fastest way to give from Ghana. Donating from abroad? Use the card options for international donors.</p>
              </div>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
              {/* PRIMARY: direct Mobile Money for local donors */}
              <Reveal className="md:col-span-7">
                <div id="momo" className="scroll-mt-24">
                  <MomoDonate />
                </div>
              </Reveal>

              {/* Secondary: international donors + manual options */}
              <Reveal delay={150} className="md:col-span-5">
                <div className="flex h-full flex-col gap-6">
                  <div id="international" className="scroll-mt-24 rounded-2xl border border-border bg-brand-cream p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-background"><Globe className="h-5 w-5" /></span>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-brand-charcoal">International donors</h3>
                        <p className="text-xs text-muted-foreground">Give by card through Paystack or Flutterwave.</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button type="button" onClick={() => setProvider("paystack")} className={`rounded-xl border p-3 text-sm font-semibold transition-colors ${provider === "paystack" ? "border-brand-teal bg-brand-teal text-background" : "border-border bg-background text-brand-charcoal hover:border-brand-teal"}`}>Paystack<span className="block text-[10px] font-normal opacity-70">Card · Bank</span></button>
                      <button type="button" onClick={() => setProvider("flutterwave")} className={`rounded-xl border p-3 text-sm font-semibold transition-colors ${provider === "flutterwave" ? "border-brand-teal bg-brand-teal text-background" : "border-border bg-background text-brand-charcoal hover:border-brand-teal"}`}>Flutterwave<span className="block text-[10px] font-normal opacity-70">Card · Bank Transfer</span></button>
                    </div>
                    <Button type="button" onClick={handleInternational} className="mt-4 w-full bg-brand-teal text-background hover:bg-brand-teal-dark">Continue{provider ? ` with ${provider === "paystack" ? "Paystack" : "Flutterwave"}` : ""}</Button>
                    <p className="mt-3 text-[11px] text-muted-foreground">We will send you a secure payment link to complete your card donation.</p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-6">
                    <h3 className="font-serif text-lg font-semibold text-brand-charcoal">Prefer to send MoMo manually?</h3>
                    <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-brand-cream p-3">
                      <div><p className="eyebrow text-muted-foreground">MoMo Number</p><p className="font-serif text-lg font-semibold text-brand-teal">054 202 7970</p></div>
                      <button type="button" onClick={() => copyToClipboard("0542027970", "momo")} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal transition-colors hover:bg-brand-yellow-dark" aria-label="Copy MoMo number">{copied === "momo" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</button>
                    </div>
                    <p className="mt-3 text-[11px] text-muted-foreground">Network: MTN Mobile Money · Account holder: The Wild Card Project</p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-6">
                    <div className="flex items-center gap-2"><Landmark className="h-4 w-4 text-brand-teal" /><h3 className="font-serif text-lg font-semibold text-brand-charcoal">Bank Transfer</h3></div>
                    <p className="mt-1 text-xs text-muted-foreground">For large donations or partnership contributions.</p>
                    <dl className="mt-4 space-y-3 text-sm">
                      {[{ k: "Account Name", v: "The Wild Card Project" }, { k: "Bank", v: "To be confirmed" }, { k: "Account Number", v: "To be confirmed" }, { k: "Branch", v: "Accra, Ghana" }].map((row) => (<div key={row.k} className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0"><dt className="text-muted-foreground">{row.k}</dt><dd className="font-semibold text-brand-charcoal">{row.v}</dd></div>))}
                    </dl>
                  </div>

                  <div className="rounded-xl bg-brand-teal p-4 text-center text-white">
                    <p className="text-xs leading-relaxed text-white/85"><span className="font-semibold text-brand-yellow">100% promise: </span>Every public donation funds our programs directly. Operating costs are covered separately by partners and the founder.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <div id="other-ways" className="mt-24 scroll-mt-24 md:mt-32">
            <Reveal className="text-center">
              <p className="eyebrow mb-5 text-brand-teal">Other Ways to Help</p>
              <h2 className="display-2 text-brand-charcoal text-balance">Not in a position to donate? Here is how else to help.</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {INVOLVEMENT.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.id} delay={i * 120}>
                    <a id={item.id} href={item.href} className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:border-brand-teal hover:shadow-lg">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-background"><Icon className="h-5 w-5" /></span>
                      <h3 className="mt-5 font-serif text-xl font-semibold text-brand-charcoal">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal">{item.cta}<span className="transition-transform group-hover:translate-x-1">→</span></span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <TakeActionCarousel />
      <DonationReassurance />
      <OtherWaysToGive />
      <NewsletterSignup />
    </SiteShell>
  );
}
