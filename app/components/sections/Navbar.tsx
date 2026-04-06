"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="COSMIC"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="font-display text-sm font-bold tracking-[0.25em] uppercase text-foreground">
            Cosmic
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/faq"
            className="text-[11px] font-heading font-medium tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-200"
          >
            FAQ
          </a>
          <a
            href="#waitlist"
            className="text-[11px] font-heading font-medium tracking-[0.2em] uppercase bg-foreground text-white px-5 py-2.5 hover:bg-foreground/80 transition-colors duration-200"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
