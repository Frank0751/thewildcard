"use client";
import { useState } from "react";
import { SiteShell } from "@/components/site/site-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Instagram, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.topic || "General"}] New message from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:thewildcardprojectgh@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="Let us talk." description="Whether you want to volunteer, partner, attend a program, or just learn more, we read every message and reply within 48 hours." />
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5 text-brand-teal">Get In Touch</p>
                <h2 className="display-2 text-brand-charcoal text-balance">Reach us directly.</h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">We are a small team and we read every message ourselves. Expect a reply within 48 hours, often sooner.</p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-10 space-y-6">
                  <a href="mailto:thewildcardprojectgh@gmail.com" className="flex items-start gap-4 group">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal"><Mail className="h-5 w-5" /></span>
                    <div><p className="eyebrow text-muted-foreground">Email</p><p className="font-serif text-lg font-semibold text-brand-charcoal group-hover:text-brand-teal">thewildcardprojectgh@gmail.com</p></div>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal"><MapPin className="h-5 w-5" /></span>
                    <div><p className="eyebrow text-muted-foreground">Location</p><p className="font-serif text-lg font-semibold text-brand-charcoal">Accra, Ghana</p><p className="text-sm text-muted-foreground">Programs run across Greater Accra Region</p></div>
                  </div>
                  <a href="https://www.instagram.com/wearewildcard.gh" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal"><Instagram className="h-5 w-5" /></span>
                    <div><p className="eyebrow text-muted-foreground">Instagram</p><p className="font-serif text-lg font-semibold text-brand-charcoal group-hover:text-brand-teal">@wearewildcard.gh</p><p className="text-sm text-muted-foreground">Follow our day-to-day work and upcoming events</p></div>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 rounded-2xl bg-brand-teal p-6 text-white">
                  <p className="font-serif text-lg font-semibold">Prefer to talk in person?</p>
                  <p className="mt-2 text-sm text-white/80">If you are in Accra and would like to visit one of our programs, send us an email. We will let you know when the next one is happening and how to join.</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150} className="md:col-span-7">
              <div className="rounded-2xl bg-background p-6 ring-1 ring-border md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow"><Send className="h-7 w-7 text-brand-charcoal" /></div>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-brand-charcoal">Your email is ready to send.</h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">Your email client should have opened with your message pre-filled. If it did not, email us directly at thewildcardprojectgh@gmail.com.</p>
                    <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Send another message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div><Label htmlFor="name" className="eyebrow">Your name</Label><Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2" placeholder="Ama Mensah" /></div>
                      <div><Label htmlFor="email" className="eyebrow">Email</Label><Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2" placeholder="you@example.com" /></div>
                    </div>
                    <div>
                      <Label htmlFor="topic" className="eyebrow">What is this about?</Label>
                      <Select value={form.topic} onValueChange={(v) => setForm({ ...form, topic: v })}>
                        <SelectTrigger className="mt-2"><SelectValue placeholder="Choose a topic" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Volunteer">I want to volunteer</SelectItem>
                          <SelectItem value="Partnership">Partnership opportunity</SelectItem>
                          <SelectItem value="Event">Event inquiry</SelectItem>
                          <SelectItem value="Donation">Donation question</SelectItem>
                          <SelectItem value="Press">Press / media</SelectItem>
                          <SelectItem value="General">Something else</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div><Label htmlFor="message" className="eyebrow">Message</Label><Textarea id="message" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 min-h-[160px]" placeholder="Tell us what you have in mind..." /></div>
                    <Button type="submit" size="lg" className="w-full bg-brand-teal text-background hover:bg-brand-teal-dark"><Send className="mr-2 h-4 w-4" />Send message</Button>
                    <p className="text-center text-xs text-muted-foreground">This form opens your email app pre-filled. Prefer to email us directly? Write to <a href="mailto:thewildcardprojectgh@gmail.com" className="font-semibold text-brand-teal hover:underline">thewildcardprojectgh@gmail.com</a>.</p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
