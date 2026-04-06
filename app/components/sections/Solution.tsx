import FadeInSection from "../ui/FadeInSection";
import Image from "next/image";

/**
 * Solution section — split layout, inspired by Byredo's product storytelling.
 * The image side feels gallery-like; the copy side is restrained and precise.
 */
export default function Solution() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual — product identity with label */}
          <FadeInSection>
            <div className="relative">
              <div className="aspect-[4/5] bg-white flex items-center justify-center border border-border">
                <Image
                  src="/logo.jpeg"
                  alt="COSMIC"
                  width={280}
                  height={280}
                  className="opacity-90"
                />
              </div>
              {/* Gallery-style label */}
              <p className="mt-4 text-[10px] font-heading tracking-[0.3em] uppercase text-muted-light">
                Fig. 01 — Product Identity
              </p>
            </div>
          </FadeInSection>

          {/* Copy */}
          <FadeInSection delay={150}>
            <div>
              <p className="text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8">
                The Solution
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-foreground mb-8">
                One mask.
                <br />
                Your entire look.
              </h2>
              <p className="text-muted leading-relaxed mb-10">
                A single-use dissolvable face mask made of electrospun
                hyaluronic acid nanofibers with cosmetic pigments printed
                directly into the material. It replaces your entire makeup
                routine with a 2&#8209;minute application that requires no
                skill, no brushes, and no blending.
              </p>

              <div className="space-y-5 border-t border-border pt-8">
                {[
                  "AI-personalized to your face and skin tone",
                  "No brushes, no blending, no skill required",
                  "Hydrates while it applies — skincare built in",
                  "Preservative-free dry technology",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-heading text-[10px] tracking-[0.2em] text-muted-light mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-muted leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
