"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Loader2, Check, X, ShieldCheck } from "lucide-react";

const AMOUNTS = [
  { value: 50, note: "Pads 5 students for a term" },
  { value: 100, note: "Equips 1 CPR trainee" },
  { value: 250, note: "Supports a school visit" },
  { value: 500, note: "Funds a community session" },
];

const NETWORKS = [
  { value: "mtn", label: "MTN" },
  { value: "vod", label: "Telecel" },
  { value: "atl", label: "AT" },
];

type Stage = "form" | "processing" | "awaiting" | "otp" | "success" | "failed";

const POLL_INTERVAL_MS = 5000;
const MAX_POLLS = 24; // ~2 minutes

export function MomoDonate() {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [network, setNetwork] = useState("mtn");

  const [stage, setStage] = useState<Stage>("form");
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");
  const [otp, setOtp] = useState("");
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const finalAmount = custom ? parseInt(custom, 10) || 0 : amount;

  const stopPolling = () => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  };

  const startPolling = (ref: string) => {
    let attempts = 0;
    setStage("awaiting");
    stopPolling();
    pollRef.current = setInterval(async () => {
      attempts += 1;
      try {
        const res = await fetch(`/api/donate/verify?reference=${encodeURIComponent(ref)}`);
        const data = await res.json();
        if (data.status === "success") {
          stopPolling();
          setStage("success");
        } else if (["failed", "abandoned", "reversed"].includes(data.status)) {
          stopPolling();
          setMessage(data.message || "The donation was not completed.");
          setStage("failed");
        }
      } catch {
        // Ignore transient network errors and keep polling.
      }
      if (attempts >= MAX_POLLS && pollRef.current) {
        stopPolling();
        setMessage("We did not get a confirmation in time. If you approved it, we will still receive it. You can check your MoMo messages.");
        setStage("failed");
      }
    }, POLL_INTERVAL_MS);
  };

  const handleDonate = async () => {
    if (finalAmount < 1) return;
    setStage("processing");
    setMessage("");
    try {
      const res = await fetch("/api/donate/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, provider: network, amount: finalAmount }),
      });
      const data = await res.json();

      if (data.status === "unconfigured") {
        setMessage(data.message || "MoMo donations are not set up yet. Please use the MoMo number below.");
        setStage("failed");
        return;
      }
      if (!res.ok || data.status === "failed") {
        setMessage(data.message || "We could not start your donation.");
        setStage("failed");
        return;
      }

      setReference(data.reference || "");
      if (data.status === "send_otp") {
        setMessage(data.displayText || "Enter the code sent to your phone.");
        setStage("otp");
      } else if (data.status === "success") {
        setStage("success");
      } else {
        // pay_offline / pending / ongoing: prompt is on the donor's phone.
        setMessage(data.displayText || "");
        startPolling(data.reference);
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
      setStage("failed");
    }
  };

  const handleSubmitOtp = async () => {
    if (!otp.trim()) return;
    setStage("processing");
    try {
      const res = await fetch("/api/donate/submit-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference, otp }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setStage("success");
      } else if (data.status === "failed") {
        setMessage(data.message || "The code could not be verified.");
        setStage("otp");
      } else {
        startPolling(reference);
      }
    } catch {
      setMessage("Something went wrong verifying the code.");
      setStage("otp");
    }
  };

  const reset = () => {
    stopPolling();
    setStage("form");
    setMessage("");
    setOtp("");
    setReference("");
  };

  const canSubmit = finalAmount >= 1 && /^\S+@\S+\.\S+$/.test(email) && /^0\d{9}$/.test(phone.replace(/\s+/g, ""));

  return (
    <div className="rounded-2xl bg-brand-charcoal p-6 text-white md:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
          <Smartphone className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-serif text-2xl font-semibold">Donate with Mobile Money</h3>
          <p className="text-xs text-white/70">The quickest way to give from Ghana. Approve with your MoMo PIN.</p>
        </div>
      </div>

      {/* SUCCESS */}
      {stage === "success" && (
        <div className="mt-8 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
            <Check className="h-8 w-8" />
          </span>
          <h4 className="mt-5 font-serif text-2xl font-semibold">Thank you for your gift.</h4>
          <p className="mx-auto mt-2 max-w-sm text-sm text-white/80">
            Your donation of GHS {finalAmount.toLocaleString()} came through. A receipt has been sent to {email}. Every
            cedi goes directly into our programs.
          </p>
          <Button onClick={reset} className="mt-6 bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark">
            Make another donation
          </Button>
        </div>
      )}

      {/* AWAITING PHONE APPROVAL */}
      {stage === "awaiting" && (
        <div className="mt-8 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <Loader2 className="h-8 w-8 animate-spin text-brand-yellow" />
          </span>
          <h4 className="mt-5 font-serif text-2xl font-semibold">Check your phone</h4>
          <p className="mx-auto mt-2 max-w-sm text-sm text-white/80">
            {message || `A prompt has been sent to ${phone}. Enter your Mobile Money PIN to approve your GHS ${finalAmount.toLocaleString()} donation.`}
          </p>
          <p className="mt-4 text-xs text-white/50">Waiting for your approval. This can take up to a minute.</p>
          <button onClick={reset} className="mt-6 text-xs text-white/60 underline hover:text-white">Cancel</button>
        </div>
      )}

      {/* PROCESSING */}
      {stage === "processing" && (
        <div className="mt-8 flex flex-col items-center py-6 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-yellow" />
          <p className="mt-4 text-sm text-white/80">Starting your donation...</p>
        </div>
      )}

      {/* OTP */}
      {stage === "otp" && (
        <div className="mt-8">
          <p className="text-sm text-white/80">{message || "Enter the code sent to your phone to continue."}</p>
          <div className="mt-4">
            <Label htmlFor="momo-otp" className="eyebrow text-white/70">Verification code</Label>
            <Input
              id="momo-otp"
              inputMode="numeric"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter code"
              className="mt-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow"
            />
          </div>
          <Button onClick={handleSubmitOtp} disabled={!otp.trim()} className="mt-5 w-full bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark disabled:opacity-50" size="lg">
            Confirm code
          </Button>
          <button onClick={reset} className="mt-4 block w-full text-center text-xs text-white/60 underline hover:text-white">Start over</button>
        </div>
      )}

      {/* FAILED */}
      {stage === "failed" && (
        <div className="mt-8 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <X className="h-8 w-8 text-white" />
          </span>
          <h4 className="mt-5 font-serif text-2xl font-semibold">We could not complete it</h4>
          <p className="mx-auto mt-2 max-w-sm text-sm text-white/80">{message || "Please try again."}</p>
          <Button onClick={reset} className="mt-6 bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark">Try again</Button>
        </div>
      )}

      {/* FORM */}
      {stage === "form" && (
        <div className="mt-6 space-y-5">
          <div>
            <Label className="eyebrow text-white/70">Choose an amount</Label>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {AMOUNTS.map((preset) => {
                const active = !custom && amount === preset.value;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => { setAmount(preset.value); setCustom(""); }}
                    className={`rounded-xl border p-3 text-left transition-colors ${active ? "border-brand-yellow bg-brand-yellow text-brand-charcoal" : "border-white/20 bg-white/5 text-white hover:border-white/40"}`}
                  >
                    <div className="font-serif text-lg font-semibold">GHS {preset.value}</div>
                    <div className={`text-[10px] leading-tight ${active ? "text-brand-charcoal/70" : "text-white/60"}`}>{preset.note}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <Label htmlFor="momo-custom" className="eyebrow text-white/70">Or enter a custom amount (GHS)</Label>
            <Input id="momo-custom" type="number" min={1} placeholder="e.g. 75" value={custom} onChange={(e) => setCustom(e.target.value)} className="mt-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="momo-name" className="eyebrow text-white/70">Your name</Label>
              <Input id="momo-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Optional" className="mt-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow" />
            </div>
            <div>
              <Label htmlFor="momo-email" className="eyebrow text-white/70">Email (for receipt)</Label>
              <Input id="momo-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow" />
            </div>
          </div>

          <div>
            <Label className="eyebrow text-white/70">Network</Label>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {NETWORKS.map((n) => (
                <button
                  key={n.value}
                  type="button"
                  onClick={() => setNetwork(n.value)}
                  className={`rounded-xl border p-3 text-sm font-semibold transition-colors ${network === n.value ? "border-brand-yellow bg-brand-yellow text-brand-charcoal" : "border-white/20 bg-white/5 text-white hover:border-white/40"}`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="momo-phone" className="eyebrow text-white/70">Mobile Money number</Label>
            <Input id="momo-phone" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0541234567" className="mt-2 border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-brand-yellow" />
          </div>

          <Button onClick={handleDonate} disabled={!canSubmit} className="w-full bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark disabled:opacity-50" size="lg">
            {finalAmount > 0 ? `Donate GHS ${finalAmount.toLocaleString()} with MoMo` : "Choose an amount"}
          </Button>

          <div className="flex items-start gap-2 text-[11px] text-white/60">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-yellow" />
            <span>You will get a prompt on your phone to approve with your MoMo PIN. We never see or store your PIN. Payments are processed securely by Paystack.</span>
          </div>
        </div>
      )}
    </div>
  );
}
