import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import AboutEditor from "@/components/AboutEditor";
import { values, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "About · CodeLove",
  description:
    "CodeLove is built by Gowthamraj — a solo developer creating fast, free web tools for creators and developers. Learn what I'm building and why.",
  alternates: { canonical: "/about" },
};

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
                I&apos;m Gowthamraj — the solo developer designing, building and shipping every CodeLove tool, in the
                open, one release at a time.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Explore products
                  <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
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

        {/* Story */}
        <section className="container-px mx-auto max-w-3xl pb-4">
          <Reveal className="space-y-5 text-base leading-relaxed text-[var(--text-muted)]">
            <p>
              CodeLove started with a simple frustration: the tools I reached for every day were scattered across
              a dozen cluttered, ad-heavy sites. I wanted one place — clean, quick and honest — where a tool does
              exactly what it says and then gets out of your way.
            </p>
            <p>
              So I started building them myself, one product at a time. Everything you see here is made by a single
              person, which means it&apos;s early and always evolving — but it also means I can move fast, keep
              things simple and answer you directly. If something feels rough, tell me. That feedback is exactly
              what shapes what I build next.
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
                  {products.length} free tools and counting — no sign-up, no limits. Have an idea or found a bug?
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
