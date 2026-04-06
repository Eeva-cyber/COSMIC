export default function SectionHeading({
  title,
  subtitle,
  inverted = false,
}: {
  title: string;
  subtitle?: string;
  inverted?: boolean;
}) {
  return (
    <div className="mb-16 md:mb-20">
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-tight ${
          inverted ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-xl leading-relaxed ${
            inverted ? "text-white/50" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
