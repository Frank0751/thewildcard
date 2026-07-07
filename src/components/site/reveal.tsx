"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0, as = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "article" | "li" | "span" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.15, rootMargin: "0px 0px -80px 0px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const Tag = as as any;
  return <Tag ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}
