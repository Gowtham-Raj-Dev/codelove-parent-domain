import Link from "next/link";
import Icon from "./Icon";
import ProductLogo from "./ProductLogo";
import Reveal from "./Reveal";
import { products } from "@/lib/data";

const pick = (slug: string) => products.find((p) => p.slug === slug) ?? products[0];

const floating = [
  { slug: "voltarc", className: "left-[6%] top-[20%]", delay: "0s", anim: "animate-float" },
  { slug: "apps", className: "right-[6%] top-[20%]", delay: "0.8s", anim: "animate-float-slow" },
  { slug: "satisfying-video-maker", className: "left-[6%] bottom-[16%]", delay: "1.4s", anim: "animate-float-slow" },
  { slug: "webly", className: "right-[6%] bottom-[14%]", delay: "0.4s", anim: "animate-float" },
];

const trust = ["Developers", "Creators", "Students", "Marketers", "Designers", "Educators"];

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

      {/* Floating product cards (ultrawide desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 hidden 2xl:block">
        {floating.map(({ slug, className, delay, anim }, i) => {
          const p = pick(slug);
          return (
            <Reveal key={p.slug} className={`absolute ${className}`} delay={400 + i * 160}>
              <div className={anim} style={{ animationDelay: delay }}>
                <div className="surface flex w-52 items-center gap-3 rounded-2xl p-3 shadow-[var(--shadow-soft)]">
                  <ProductLogo product={p} size={40} />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{p.name}</span>
                    <span className="block truncate text-xs text-[var(--text-faint)]">{p.tagline}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="container-px mx-auto max-w-4xl text-center">
        <Reveal>
          <Link
            href="/tools"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] py-1.5 pl-1.5 pr-4 text-sm backdrop-blur"
          >
            <span className="rounded-full bg-gradient-to-r from-primary to-secondary px-2.5 py-0.5 text-xs font-semibold text-white">
              New
            </span>
            <span className="text-[var(--text-muted)]">8 Built-in Tools, VOLTARC Arcade &amp; CodeLove Apps</span>
            <Icon name="arrowRight" size={14} className="text-[var(--text-faint)] transition group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7.5xl">
            <span className="mb-4 block font-[family-name:var(--font-sans)] text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-base">
              CodeLove · Free online tools for code lovers
            </span>
            Everything You Need.
            <br />
            <span className="text-gradient">One Platform.</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {["Build", "Create", "Convert", "Play"].map((w) => (
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
            Run browser-local image, video bitrate, and SEO utilities right here on codelove.in — or launch VOLTARC,
            Satisfying Video Maker, Webly, Android Apps, 3D models, and creative studios across desktop &amp; mobile.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="btn-shine animate-shimmer flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110 sm:w-auto"
            >
              Open Built-In Tools
              <Icon name="arrowRight" size={16} />
            </Link>
            <Link
              href="/products"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:shadow-sm sm:w-auto"
            >
              <Icon name="layout" size={16} />
              Explore All {products.length} Apps
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]">
              Built cleanly for
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
