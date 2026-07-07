"use client";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps { value: number; suffix?: string; prefix?: string; label: string; sublabel?: string; duration?: number; variant?: "default" | "dark" | "yellow"; }

export function StatCounter({ value, suffix = "", prefix = "", label, sublabel, duration = 1800, variant = "default" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !started) { setStarted(true); observer.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => { const progress = Math.min((now - start) / duration, 1); const eased = 1 - Math.pow(1 - progress, 3); setDisplay(Math.round(eased * value)); if (progress < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);
  const colors = { default: { n: "text-brand-teal", l: "text-brand-charcoal", s: "text-muted-foreground" }, dark: { n: "text-white", l: "text-white", s: "text-white/60" }, yellow: { n: "text-brand-yellow", l: "text-white", s: "text-white/70" } }[variant];
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className={`stat-number text-5xl md:text-6xl lg:text-7xl ${colors.n}`}>{prefix}{display.toLocaleString()}{suffix}</div>
      <div className={`mt-3 eyebrow ${colors.l}`}>{label}</div>
      {sublabel && <div className={`mt-2 text-xs max-w-[240px] mx-auto md:mx-0 ${colors.s}`}>{sublabel}</div>}
    </div>
  );
}
