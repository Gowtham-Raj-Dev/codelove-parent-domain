import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { values } from "@/lib/data";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-[50px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-70" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[var(--glow-secondary)] blur-[120px]" />

      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why CodeLove"
          title={<>Built on principles that <span className="text-gradient">respect your time</span></>}
          description="Every product in the ecosystem is engineered around the same commitments — so whichever tool you pick, the experience feels premium, private and fast."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1">
                <div aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-accent transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary ring-1 ring-inset ring-primary/15 transition group-hover:scale-110">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
