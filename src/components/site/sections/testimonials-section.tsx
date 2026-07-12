import { Reveal } from "@/components/site/reveal";
import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";
import { Quote } from "lucide-react";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-background p-6 ring-1 ring-border/60 sm:w-[380px]">
      <div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-brand-charcoal">
          <Quote className="h-4 w-4" aria-hidden="true" />
        </span>
        <blockquote className="mt-4 text-sm leading-relaxed text-brand-charcoal md:text-base">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold text-brand-teal">{testimonial.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{testimonial.context}</p>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {/* Two identical groups make the loop seamless. The second is aria-hidden so screen readers only hear the quotes once. */}
        <div className="marquee-group">
          {items.map((t) => (
            <TestimonialCard key={t.quote} testimonial={t} />
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((t) => (
            <TestimonialCard key={t.quote} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const mid = Math.ceil(TESTIMONIALS.length / 2);
  const firstRow = TESTIMONIALS.slice(0, mid);
  const secondRow = TESTIMONIALS.slice(mid);
  return (
    <section className="overflow-hidden bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-brand-teal">Voices</p>
          <h2 className="display-2 text-brand-charcoal text-balance">What people say about the work.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Students, parents, teachers, facilitators, and partners. These are the people the work belongs to.
          </p>
        </Reveal>
      </div>
      <Reveal delay={150}>
        <div className="mt-14 space-y-5">
          <MarqueeRow items={firstRow} />
          {secondRow.length > 0 && <MarqueeRow items={secondRow} reverse />}
        </div>
      </Reveal>
    </section>
  );
}
