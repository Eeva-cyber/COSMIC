import FadeInSection from "../ui/FadeInSection";

/**
 * Problem section — editorial approach inspired by Aesop's storytelling.
 * Stats are treated as typographic elements, not data cards.
 */
export default function Problem() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Lead statement — large, left-aligned, split line for emphasis */}
        <FadeInSection>
          <p className="text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8">
            The Problem
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] text-foreground max-w-3xl">
            Your morning shouldn&apos;t start with a 30&#8209;minute commitment.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl">
            Makeup is a daily ritual for millions — but the time, cost, and
            skill it demands hasn&apos;t changed in decades.
          </p>
        </FadeInSection>

        {/* Stats — oversized typography, minimal framing */}
        <div className="mt-20 grid md:grid-cols-3 gap-16 md:gap-8">
          {[
            { value: "30", unit: "min", caption: "The average daily makeup routine. That's 182 hours a year." },
            { value: "12", unit: "+", caption: "Products in a typical routine. Primers, foundations, brushes — the cost compounds." },
            { value: "73", unit: "%", caption: "Of women skip makeup because of time — not lack of interest." },
          ].map((stat, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <div className="border-t border-border pt-8">
                <p className="font-display text-[4.5rem] md:text-[5.5rem] font-bold leading-none tracking-tighter text-foreground">
                  {stat.value}
                  <span className="text-muted-light text-[2rem] md:text-[2.5rem] font-light ml-1">
                    {stat.unit}
                  </span>
                </p>
                <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
                  {stat.caption}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
