import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { activeCategories } from "@/lib/data";

export default function LearningCenter() {
  return (
    <section id="learning" className="container-px mx-auto max-w-7xl scroll-mt-24 py-[50px]">
      <SectionHeading
        eyebrow="Learning Center"
        title={<>A knowledge hub that <span className="text-gradient">grows with you</span></>}
        description="Browse hundreds of tutorials, explainers and guides organised by topic. From your first line of code to advanced automation, there's a clear path forward."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {activeCategories.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 60}>
            <Link
              href={`/learn/${c.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-soft)] transition-all duration-400 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/12 to-secondary/12 text-primary ring-1 ring-inset ring-primary/15 transition group-hover:scale-110">
                  <Icon name={c.icon} size={20} />
                </span>
                <span className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-xs font-semibold text-[var(--text-faint)]">
                  {c.count}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{c.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Explore <Icon name="arrowRight" size={14} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Link
          href="/learn"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:brightness-110"
        >
          Visit the Learning Center
          <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </section>
  );
}
