import FadeInSection from "../ui/FadeInSection";

const features = [
  {
    title: "2-Minute Routine",
    description:
      "Replace 30 minutes of layering with a single mask. Press, spray, reveal.",
  },
  {
    title: "AI-Personalized",
    description:
      "Our app scans your face shape, skin tone, and features. Every mask is uniquely yours.",
  },
  {
    title: "Nanofiber Precision",
    description:
      "Electrospun HA fibers carry zone-specific pigment gradients — no hard lines, no blending.",
  },
  {
    title: "Clean Formulation",
    description:
      "Preservative-free. No PFAS, phthalates, or formaldehyde. Completely dry technology.",
  },
  {
    title: "Built-in Skincare",
    description:
      "Hyaluronic acid hydrates as it deposits color. Makeup and skincare in one step.",
  },
  {
    title: "Zero Skill Required",
    description:
      "No brushes, no tutorials, no learning curve. If you can press a mask to your face, you're done.",
  },
];

/**
 * Features — clean 2-column layout with numbered items.
 * Inspired by Linear's features section and Aesop's ingredient lists.
 */
export default function Features() {
  return (
    <section className="py-28 md:py-36 px-6 bg-surface relative grain">
      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8">
            Why COSMIC
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-foreground max-w-lg mb-20">
            Designed around how you actually live.
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {features.map((feature, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div className="py-8 border-t border-border group">
                <div className="flex items-start gap-5">
                  <span className="font-heading text-[10px] tracking-[0.2em] text-muted-light mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-semibold tracking-[0.1em] uppercase text-foreground mb-2 group-hover:text-muted transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
