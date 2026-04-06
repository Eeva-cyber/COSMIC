import FadeInSection from "../ui/FadeInSection";

const products = [
  {
    label: "The Mask",
    tag: "Core",
    detail:
      "Electrospun HA nanofibers with inkjet-printed pigment gradients. Three precision layers. Single use.",
  },
  {
    label: "The Spray",
    tag: "Activate + Seal",
    detail:
      "Dual-chamber bottle with rotary selector. One side activates, the other seals. One product.",
  },
  {
    label: "The App",
    tag: "Personalize",
    detail:
      "AI face scanning maps your shape, tone, and features. Every mask is printed for one person — you.",
  },
];

export default function Visual() {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-[11px] font-heading font-medium tracking-[0.3em] uppercase text-muted-light mb-8">
            The System
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-foreground max-w-md mb-20">
            Everything you need.
            <br />
            <span className="text-muted-light">Nothing you don&apos;t.</span>
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <div className="group">
                {/* Image placeholder */}
                <div className="aspect-[3/4] bg-surface border border-border flex items-center justify-center relative overflow-hidden group-hover:border-border-dark transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-3 border border-border rounded-full flex items-center justify-center group-hover:border-foreground transition-colors duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-light group-hover:bg-foreground transition-colors duration-500" />
                    </div>
                    <p className="text-[9px] text-muted-light uppercase tracking-[0.3em] font-heading">
                      Coming Soon
                    </p>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                      {product.label}
                    </h3>
                    <span className="text-[9px] font-heading tracking-[0.2em] uppercase text-muted-light border border-border px-2 py-0.5">
                      {product.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {product.detail}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
