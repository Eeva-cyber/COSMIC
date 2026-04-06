"use client";

/**
 * Infinite scrolling text band — a design pattern used by Jacquemus,
 * Balenciaga, and many editorial fashion/beauty sites to add kinetic
 * energy between static sections.
 */
export default function Marquee({
  text = "COSMIC",
  separator = "✦",
  className = "",
}: {
  text?: string;
  separator?: string;
  className?: string;
}) {
  // Duplicate the content so the loop is seamless
  const content = Array(12)
    .fill(null)
    .map((_, i) => (
      <span key={i} className="flex items-center gap-8 shrink-0">
        <span>{text}</span>
        <span className="text-muted-light text-xs">{separator}</span>
      </span>
    ));

  return (
    <div
      className={`overflow-hidden border-y border-border py-4 ${className}`}
    >
      <div className="flex gap-8 animate-marquee whitespace-nowrap font-display text-sm font-bold tracking-[0.3em] uppercase text-foreground/80">
        {content}
        {content}
      </div>
    </div>
  );
}
