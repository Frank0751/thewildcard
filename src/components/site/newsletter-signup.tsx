"use client";
import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Subscribe me to The Wild Card Project newsletter");
    const body = encodeURIComponent(`Please add ${email} to your newsletter list.`);
    window.location.href = `mailto:thewildcardprojectgh@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  return (
    <section className="bg-brand-cream py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <Reveal>
          <div className="rounded-3xl bg-brand-teal px-6 py-12 text-center text-white md:px-12 md:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal"><Mail className="h-6 w-6" /></div>
            <h2 className="mt-6 font-serif text-3xl font-semibold md:text-4xl">Add Impact To Your Inbox</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">Get our emails to stay in the know. New programs, partner announcements, impact updates, and the occasional call for volunteers. No spam, ever.</p>
            {submitted ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal"><Check className="h-5 w-5" /></span>
                <p className="text-left text-sm text-white">Your email client should have opened with your subscription request. If not, email us at <a href="mailto:thewildcardprojectgh@gmail.com" className="font-semibold text-brand-yellow underline">thewildcardprojectgh@gmail.com</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-brand-yellow" />
                <Button type="submit" className="bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-dark">Subscribe</Button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/50">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
