import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { docs } from "@/lib/data";

export default function Documentation() {
  return (
    <section id="documentation" className="relative overflow-hidden py-[50px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-60" />
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Documentation"
          title={<>Step-by-step guides for <span className="text-gradient">every product</span></>}
          description="Clear, structured documentation that walks you through each tool from your first click to advanced workflows — no guesswork, no jargon."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 70}>
              <a
                href="#learning"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[var(--shadow-glow)] transition group-hover:scale-110">
                    <Icon name={d.icon} size={22} />
                  </span>
                  <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-faint)]">
                    {d.steps} steps
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">{d.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{d.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                  Read the guide <Icon name="arrowRight" size={15} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
