import FadeInSection from "../ui/FadeInSection";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Press the COSMIC mask to your face. The AI-personalized fit matches your exact features. The primer layer activates on skin contact in ~20 seconds.",
  },
  {
    number: "02",
    title: "Dissolve",
    description:
      "Spray to activate the nanofiber layer. Hyaluronic acid fibers dissolve instantly, depositing pigment onto hydrated skin — no cakey finish, ever.",
  },
  {
    number: "03",
    title: "Reveal",
    description:
      "Peel off the outer shell and spray once more to seal. Foundation, contour, blush, eyeshadow — set in under two minutes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8">
            How It Works
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-foreground max-w-lg">
            Three steps.{" "}
            <span className="text-muted-light">Two minutes.</span>
          </h2>
        </FadeInSection>

        {/* Steps — numbered, with strong horizontal rhythm */}
        <div className="mt-20 space-y-0">
          {steps.map((step, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <div className="grid md:grid-cols-[120px_200px_1fr] gap-6 md:gap-12 items-start py-10 border-t border-border group">
                {/* Number — oversized, fades on hover */}
                <span className="font-display text-5xl md:text-6xl font-bold text-border group-hover:text-foreground transition-colors duration-500 leading-none">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-heading text-sm font-semibold tracking-[0.15em] uppercase text-foreground md:mt-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed max-w-md md:mt-3">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          ))}
          {/* Closing border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
