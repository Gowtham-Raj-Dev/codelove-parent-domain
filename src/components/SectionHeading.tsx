import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] backdrop-blur ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
