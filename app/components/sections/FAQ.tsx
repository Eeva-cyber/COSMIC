"use client";

import { useState } from "react";
import FadeInSection from "../ui/FadeInSection";

const faqs = [
  {
    q: "How does the mask know my skin tone and face shape?",
    a: "Our AI-powered app scans your face and creates a unique pigment profile. Every mask is custom-printed to match your exact skin tone, face shape, and features.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "COSMIC masks are preservative-free because the technology is completely dry — no moisture means zero bacterial growth. Free of PFAS, phthalates, and formaldehyde. The hyaluronic acid nanofibers hydrate your skin as they dissolve.",
  },
  {
    q: "How long does the look last?",
    a: "After the setting spray seals the pigment, your look lasts a full day — comparable to professional long-wear makeup. The dual-chamber spray includes a film-forming formula that locks everything in place.",
  },
  {
    q: "Can I choose different looks?",
    a: "Yes. COSMIC offers curated look collections — natural, glam, editorial — each with different pigment maps for foundation, contour, blush, and eyeshadow, all personalized to your face.",
  },
  {
    q: "Is this better for the environment?",
    a: "The mask dissolves entirely on your skin. Packaging is paper-based. You're replacing 12+ individual products with one mask, significantly reducing plastic waste from bottles, palettes, and applicators.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 md:py-36 px-6 bg-surface relative grain">
      <div className="relative z-10 max-w-2xl mx-auto">
        <FadeInSection>
          <p className="text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16 md:mb-20">
            Common questions.
          </h2>
        </FadeInSection>

        <div>
          {faqs.map((faq, i) => (
            <FadeInSection key={i} delay={i * 60}>
              <div className="border-t border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between py-7 text-left cursor-pointer group"
                >
                  <div className="flex items-start gap-5 pr-8">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-muted-light mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-heading text-sm md:text-[15px] font-medium text-foreground group-hover:text-muted transition-colors leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <span
                    className={`text-muted text-base shrink-0 transition-transform duration-200 mt-0.5 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    open === i ? "max-h-48 pb-7" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-muted leading-relaxed pl-[calc(1.25rem+20px)]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
