import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import AboutEditor from "@/components/AboutEditor";
import { values, products } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Gowtham — The Maker of CodeLove",
  description:
    "Gowtham (Gowthamraj) builds CodeLove independently: fast, privacy-respecting web tools, technical guides, and interactive utilities with zero paywalls.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero intro */}
        <section className="relative overflow-hidden pt-32 pb-6 sm:pt-40 sm:pb-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-[-6rem] h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-[var(--glow-primary)] opacity-60 blur-[130px]" />
            <div className="absolute inset-0 bg-dots opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,#000_25%,transparent_72%)]" />
          </div>

          <div className="container-px mx-auto max-w-3xl">
            <Reveal className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-1.5 font-mono text-xs text-[var(--text-muted)]">
                <span className="text-emerald-500">$</span> whoami
              </span>
              <h1 className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Built by one person, <span className="text-gradient">out loud</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                I&apos;m Gowthamraj — the solo developer designing, building and shipping every CodeLove tool, guide, and interactive utility from India.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/tools"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Open Built-In Tools
                  <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold transition hover:text-[var(--text)]"
                >
                  Explore products
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold transition hover:text-[var(--text)]"
                >
                  Get in touch
                </Link>
              </div>

              <p className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-faint)]">
                <Icon name="chevronDown" size={14} className="animate-bounce" /> scroll to read the source
              </p>
            </Reveal>
          </div>
        </section>

        {/* Scroll-pinned code editor */}
        <AboutEditor toolCount={products.length} />

        {/* Story & Engineering Standards */}
        <section className="container-px mx-auto max-w-3xl pb-4">
          <Reveal className="space-y-5 text-base leading-relaxed text-[var(--text-muted)]">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--text)]">
              Why CodeLove exists
            </h2>
            <p>
              CodeLove started with a practical frustration: everyday utilities — trimming a clip into vertical Shorts,
              compressing an image cleanly, inspecting JSON, or testing a 3D GLB file — were buried behind slow upload queues,
              forced account walls, or deceptive download buttons.
            </p>
            <p>
              I wanted one clean engineering home where tools process files directly inside modern browser APIs (Canvas,
              WebAssembly, WebAudio, and WebGL) so users keep privacy over their footage and images without waiting on server
              queues.
            </p>
            <h2 className="pt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--text)]">
              How tools &amp; guides are verified
            </h2>
            <p>
              Every product and written guide is authored and tested directly on real desktop and mobile browsers before launch.
              When a file format trade-off changes or browser codec support improves, guides carry explicit last-updated dates
              and practical examples. If you find an error or broken asset, you can message me directly on the{" "}
              <Link href="/contact" className="font-semibold text-primary hover:underline">
                Contact page
              </Link>
              .
            </p>
          </Reveal>
        </section>

        {/* Values */}
        <section className="container-px mx-auto max-w-7xl py-[50px]">
          <Reveal className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">What I care about</span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
              Principles I build by
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-[var(--shadow-glow)]">
                    <Icon name={v.icon} size={20} />
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-7xl py-[50px] pb-[50px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-gradient-to-br from-primary to-secondary p-10 text-center text-white shadow-[var(--shadow-glow)] sm:p-14">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
              <div className="relative">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Try what I&apos;ve built so far
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {products.length} free tools plus the built-in toolkit — no sign-up, no limits. Have an idea or found a bug?
                  I&apos;d love to hear from you.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5"
                  >
                    Explore products <Icon name="arrowRight" size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Contact me
                  </Link>
                  <a
                    href="https://gowtham.codelove.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Gowtham 3D Portfolio <Icon name="arrowUpRight" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
