"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TextDisperse } from "../ui/text-disperse";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-6"
      >
        {/* Logo character */}
        <div className="mb-12">
          <Image
            src="/logo.jpeg"
            alt="COSMIC"
            width={120}
            height={120}
            priority
            className="rounded-full"
          />
        </div>

        {/* Syne Extra Bold — the hero statement */}
        <h1 className="font-display font-extrabold tracking-tight leading-[0.95] text-foreground">
          <TextDisperse className="text-[clamp(3rem,8vw,7rem)] justify-center">
            COSMIC.
          </TextDisperse>
        </h1>

        {/* Space Grotesk — wide tracked sub-headline */}
        <p className="mt-8 font-heading text-base md:text-lg font-light tracking-[0.25em] uppercase text-muted">
          Makeup. In Seconds. No Effort.
        </p>

        {/* Tagline — smaller, softer */}
        <p className="mt-3 text-xs tracking-[0.4em] uppercase text-muted-light font-heading">
          Dissolve the Routine.
        </p>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#waitlist"
            className="bg-foreground text-white text-[11px] font-heading font-medium tracking-[0.25em] uppercase px-10 py-4 hover:bg-foreground/80 transition-colors duration-200"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="text-[11px] font-heading font-medium tracking-[0.25em] uppercase text-muted hover:text-foreground border-b border-muted-light hover:border-foreground pb-0.5 transition-colors duration-200"
          >
            See How It Works
          </a>
        </div>
      </motion.div>
    </section>
  );
}
