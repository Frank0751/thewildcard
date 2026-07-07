"use client";

import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Heart,
  HandHeart,
  Handshake,
  CalendarCheck,
  Copy,
  Check,
} from "lucide-react";

const DONATION_AMOUNTS = [
  { value: 50, label: "GHS 50", note: "Pads 5 students for a term" },
  { value: 100, label: "GHS 100", note: "Equips 1 CPR trainee" },
  { value: 250, label: "GHS 250", note: "Supports a school visit" },
  { value: 500, label: "GHS 500", note: "Funds a community session" },
];

const INVOLVEMENT = [
  {
    id: "volunteer",
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Lend your time, skills, or network. We need facilitators, photographers, writers, drivers, and people who show up.",
    cta: "Email us to start",
    href: "mailto:thewildcardprojectgh@gmail.com?subject=Volunteering with The Wild Card Project",
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Schools, NGOs, and brands that want to co-create programs. We work with partners who share our values and commit for the long term.",
    cta: "Start a partnership",
    href: "mailto:thewildcardprojectgh@gmail.com?subject=Partnership with The Wild Card Project",
  },
  {
    id: "attend",
    icon: CalendarCheck,
    title: "Attend an Event",
    description:
      "Show up to our next program — CPR training, sports day, advocacy drive. Bring a friend. Bring your kids. Bring your whole team.",
    cta: "See upcoming events",
    href: "#programs",
  },
];

export function GetInvolvedSection() {
  const [amount, setAmount] = useState<number>(100);
  const [custom, setCustom] = useState<string>("");
  const [provider, setProvider] = useState<"paystack" | "flutterwave" | null>(
    null
  );
  const [copied, setCopied] = useState<string | null>(null);

  const finalAmount = custom ? parseInt(custom, 10) || 0 : amount;

  const handleDonate = () => {
    if (finalAmount < 1) return;
    // In production, this would initialize Paystack/Flutterwave SDK.
    // For now we direct the user to a mailto with the amount encoded.
    const subject = encodeURIComponent(
      `Donation of GHS ${finalAmount} to The Wild Card Project`
    );
    const body = encodeURIComponent(
      `Hello,\n\nI would like to donate GHS ${finalAmount} to The Wild Card Project.\n\nPreferred channel: ${provider ?? "Paystack / Flutterwave (please advise)"}\n\nName: \nEmail: \n\nThank you.`
    );
    window.location.href = `mailto:thewildcardprojectgh@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <section id="get-involved" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Take Action
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-brand-charcoal text-balance md:text-4xl lg:text-5xl">
            Help us turn more wild cards into aces.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            There are four ways to support our work. Choose the one that fits
            you.
          </p>
        </Reveal>

        {/* DONATE BLOCK */}
        <div
          id="donate"
          className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12"
        >
          {/* Left: Donation form */}
          <Reveal className="md:col-span-7">
            <div className="rounded-2xl bg-brand-charcoal p-6 text-white md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold">Donate</h3>
                  <p className="text-xs text-white/70">
                    Every cedi goes directly into programs.
                  </p>
                </div>
              </div>

              {/* Amount presets */}
              <div className="mt-6">
                <Label className="text-xs uppercase tracking-[0.16em] text-white/70">
                  Choose an amount
                </Label>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {DONATION_AMOUNTS.map((preset) => {
                    const active = !custom && amount === preset.value;
                    return (
                      <button
                        key={preset.value}
                        type="button"
                        onClick={() => {
                          setAmount(preset.value);
                          setCustom("");
                        }}
                        className={`rounded-xl border p-3 text-left transition-colors ${
                          active
                            ? "border-brand-yellow bg-brand-yellow text-brand-charcoal"
                            : "border-white/20 bg-white/5 text-white hover:border-white/40"
                        }`}
                      >
                        <div className="font-serif text-lg font-bold">
                          {preset.label}
                        </div>
                        <div
                          className={`text-[10px] leading-tight ${
                            active ? "text-brand-charcoal/70" : "text-white/60"
                          }`}
                        >
                          {preset.note}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom amount */}
              <div className="mt-5">
                <Label
                  htmlFor="custom-amount"
                  className="text-xs uppercase tracking-[0.16em] text-white/70"
                >
                  Or enter a custom amount (GHS)
                </Label>
                <Input
                  id="custom-amount"
                  type="number"
                  min={1}
                  placeholder="e.g. 75"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="mt-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow"
                />
              </div>

              {/* Provider toggle */}
              <div className="mt-5">
                <Label className="text-xs uppercase tracking-[0.16em] text-white/70">
                  Payment method
                </Label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setProvider("paystack")}
                    className={`rounded-xl border p-3 text-sm font-semibold transition-colors ${
                      provider === "paystack"
                        ? "border-brand-yellow bg-brand-yellow text-brand-charcoal"
                        : "border-white/20 bg-white/5 text-white hover:border-white/40"
                    }`}
                  >
                    Paystack
                    <span className="block text-[10px] font-normal opacity-70">
                      Card · Mobile Money · Bank
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProvider("flutterwave")}
                    className={`rounded-xl border p-3 text-sm font-semibold transition-colors ${
                      provider === "flutterwave"
                        ? "border-brand-yellow bg-brand-yellow text-brand-charcoal"
                        : "border-white/20 bg-white/5 text-white hover:border-white/40"
                    }`}
                  >
                    Flutterwave
                    <span className="block text-[10px] font-normal opacity-70">
                      Card · Mobile Money · Bank Transfer
                    </span>
                  </button>
                </div>
              </div>

              {/* CTA */}
              <Button
                type="button"
                onClick={handleDonate}
                disabled={finalAmount < 1}
                className="mt-6 w-full bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark disabled:opacity-50"
                size="lg"
              >
                {finalAmount > 0
                  ? `Donate GHS ${finalAmount.toLocaleString()}`
                  : "Choose an amount"}
              </Button>

              <p className="mt-3 text-center text-xs text-white/60">
                You&rsquo;ll be redirected to confirm your payment. We never see
                or store your card details.
              </p>
            </div>
          </Reveal>

          {/* Right: Bank & MoMo details */}
          <Reveal delay={150} className="md:col-span-5">
            <div className="flex h-full flex-col gap-6">
              {/* Bank details */}
              <div className="rounded-2xl border border-border bg-brand-cream p-6">
                <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                  Bank Transfer
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  For large donations or partnership contributions.
                </p>
                <dl className="mt-5 space-y-3 text-sm">
                  {[
                    { k: "Account Name", v: "The Wild Card Project" },
                    { k: "Bank", v: "To be confirmed" },
                    { k: "Account Number", v: "To be confirmed" },
                    { k: "Branch", v: "Accra, Ghana" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-muted-foreground">{row.k}</dt>
                      <dd className="font-semibold text-brand-charcoal">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 rounded-md bg-background p-3 text-[11px] text-muted-foreground">
                  Please email us after sending so we can confirm receipt and
                  thank you properly.
                </p>
              </div>

              {/* MoMo details */}
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                  Mobile Money (MoMo)
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Quick donations from any Ghanaian MoMo wallet.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-border bg-brand-cream p-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        MoMo Number
                      </p>
                      <p className="font-serif text-lg font-bold text-brand-charcoal">
                        054 202 7970
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard("0542027970", "momo")
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal transition-colors hover:bg-brand-yellow-dark"
                      aria-label="Copy MoMo number"
                    >
                      {copied === "momo" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Network: MTN Mobile Money · Account holder: The Wild Card
                    Project
                  </p>
                </div>
              </div>

              {/* Honesty note */}
              <div className="rounded-xl bg-brand-charcoal p-4 text-center text-white">
                <p className="text-xs leading-relaxed text-white/80">
                  <span className="font-semibold text-brand-yellow">
                    100% promise:
                  </span>{" "}
                  Every public donation funds our programs directly. Operating
                  costs are covered separately by partners and the founder.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* OTHER WAYS TO GET INVOLVED */}
        <div className="mt-20 md:mt-28">
          <Reveal className="text-center">
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal md:text-3xl">
              Not in a position to donate? Here&rsquo;s how else to help.
            </h3>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {INVOLVEMENT.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} delay={i * 120}>
                  <a
                    href={item.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:border-brand-yellow hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-brand-blue transition-colors group-hover:bg-brand-yellow group-hover:text-brand-charcoal">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="mt-4 font-serif text-xl font-bold text-brand-charcoal">
                      {item.title}
                    </h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                      {item.cta}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
