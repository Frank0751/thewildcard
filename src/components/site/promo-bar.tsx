"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export function PromoBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="relative bg-brand-yellow text-brand-charcoal">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center md:px-8">
        <p className="text-xs font-semibold md:text-sm">
          <span className="hidden sm:inline">♠ </span>
          Every donation to The Wild Card Project directly funds programs for young Ghanaians.{" "}
          <Link href="/get-involved" className="underline underline-offset-2 hover:no-underline font-bold">Join us</Link>
        </p>
        <button type="button" onClick={() => setDismissed(true)} aria-label="Dismiss" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-brand-charcoal/10">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
