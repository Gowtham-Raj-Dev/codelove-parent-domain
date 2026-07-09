import Icon from "./Icon";
import Reveal from "./Reveal";
import { products } from "@/lib/data";

const floating = [
  { p: products[0], className: "left-[8%] top-[20%]", delay: "0s", anim: "animate-float" },
  { p: products[4], className: "right-[8%] top-[20%]", delay: "0.8s", anim: "animate-float-slow" },
  { p: products[2], className: "left-[8%] bottom-[15%]", delay: "1.4s", anim: "animate-float-slow" },
  { p: products[7], className: "right-[8%] bottom-[12%]", delay: "0.4s", anim: "animate-float" },
];

const trust = ["Developers", "Creators", "Students", "Marketers", "Designers", "Businesses"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-[50px] sm:pt-32 sm:pb-[50px]">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-aurora absolute -left-40 -top-32 h-[36rem] w-[36rem] rounded-full bg-[var(--glow-primary)] blur-[120px]" />
        <div className="animate-aurora absolute -right-32 top-10 h-[32rem] w-[32rem] rounded-full bg-[var(--glow-secondary)] blur-[120px] [animation-delay:-6s]" />
        <div className="animate-aurora absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--glow-accent)] blur-[120px] [animation-delay:-12s]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />

      {/* Floating product cards (desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 hidden 2xl:block">
        {floating.map(({ p, className, delay, anim }) => (
          <div key={p.slug} className={`absolute ${className} ${anim}`} style={{ animationDelay: delay }}>
            <div className="surface flex w-52 items-center gap-3 rounded-2xl p-3 shadow-[var(--shadow-soft)]">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${p.gradient} text-white`}>
                <Icon name={p.icon} size={20} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{p.name}</span>
                <span className="block truncate text-xs text-[var(--text-faint)]">{p.tagline}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="container-px mx-auto max-w-4xl text-center">
        <Reveal>
          <a
            href="https://aivideos.codelove.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] py-1.5 pl-1.5 pr-4 text-sm backdrop-blur"
          >
            <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-2.5 py-0.5 text-xs font-semibold text-white">
              New
            </span>
            <span className="text-[var(--text-muted)]">AI Videos showcase is now live</span>
            <Icon name="arrowRight" size={14} className="text-[var(--text-faint)] transition group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7.5xl">
            Everything You Need.
            <br />
            <span className="text-gradient">One Platform.</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {["Build", "Create", "Convert", "Automate"].map((w) => (
              <span
                key={w}
                className="rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 font-[family-name:var(--font-display)] text-sm font-medium text-[var(--text-muted)] backdrop-blur"
              >
                {w}.
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Explore powerful online tools, developer utilities, creative resources, media applications and
            educational content — built for creators, developers, students and businesses who want to move faster.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="btn-shine animate-shimmer flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110 sm:w-auto"
            >
              Explore Products
              <Icon name="arrowRight" size={16} />
            </a>
            <a
              href="#articles"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:shadow-sm sm:w-auto"
            >
              <Icon name="fileText" size={16} />
              Read Articles
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
              Trusted by millions of
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trust.map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)]">
                  <Icon name="check" size={15} className="text-accent" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
