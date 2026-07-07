"use client";

import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Instagram, Send } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${form.topic || "General"}] New message from ${form.name || "website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:thewildcardprojectgh@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left: Contact info */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight text-brand-charcoal text-balance md:text-4xl lg:text-5xl">
                Let&rsquo;s talk.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether you want to volunteer, partner, attend a program, or
                just learn more — we read every message and reply within 48
                hours.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 space-y-5">
                <a
                  href="mailto:thewildcardprojectgh@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Email
                    </p>
                    <p className="font-serif text-lg font-semibold text-brand-charcoal group-hover:text-brand-blue">
                      thewildcardprojectgh@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Location
                    </p>
                    <p className="font-serif text-lg font-semibold text-brand-charcoal">
                      Accra, Ghana
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Programs run across Greater Accra Region
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/wearewildcard.gh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Instagram
                    </p>
                    <p className="font-serif text-lg font-semibold text-brand-charcoal group-hover:text-brand-blue">
                      @wearewildcard.gh
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Follow our day-to-day work and upcoming events
                    </p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Contact form */}
          <Reveal delay={150} className="md:col-span-7">
            <div className="rounded-2xl bg-background p-6 ring-1 ring-border md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow">
                    <Send className="h-7 w-7 text-brand-charcoal" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-brand-charcoal">
                    Your email is ready to send.
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Your email client should have opened with your message
                    pre-filled. If it didn&rsquo;t, email us directly at
                    thewildcardprojectgh@gmail.com.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-xs uppercase tracking-[0.16em]">
                        Your name
                      </Label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="mt-2"
                        placeholder="Ama Mensah"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-xs uppercase tracking-[0.16em]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="mt-2"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="topic"
                      className="text-xs uppercase tracking-[0.16em]"
                    >
                      What&rsquo;s this about?
                    </Label>
                    <Select
                      value={form.topic}
                      onValueChange={(v) => setForm({ ...form, topic: v })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose a topic" />
                      </SelectTrigger>
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

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-xs uppercase tracking-[0.16em]"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="mt-2 min-h-[140px]"
                      placeholder="Tell us what you have in mind..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-charcoal text-background hover:bg-brand-charcoal-soft"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send message
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    This form opens your email app pre-filled. Prefer to email
                    us directly? Write to{" "}
                    <a
                      href="mailto:thewildcardprojectgh@gmail.com"
                      className="font-semibold text-brand-blue hover:underline"
                    >
                      thewildcardprojectgh@gmail.com
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
