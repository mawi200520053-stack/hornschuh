interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#255aa0" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
        style={{ color: light ? "#ffffff" : "#1a1a1a" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-lg leading-relaxed max-w-2xl"
          style={{
            color: light ? "#888888" : "#555555",
            marginLeft: centered ? "auto" : undefined,
            marginRight: centered ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
