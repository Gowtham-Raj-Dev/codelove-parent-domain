import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ArticleCard from "@/components/ArticleCard";
import { resourceHub, docs, articles, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources · CodeLove",
  description:
    "Everything you need in one place — the Learning Center, blog, documentation, developer cheat sheets, free tools and templates. Start learning, building and shipping faster.",
  alternates: { canonical: "/resources" },
};

const featured = articles.filter((a) => a.featured).slice(0, 3);

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden pt-32 pb-[50px] sm:pt-36 sm:pb-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-15 blur-[120px]" />
            <div className="absolute inset-0 bg-grid opacity-60" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
                <Link href="/" className="transition hover:text-[var(--text)]">
                  Home
                </Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <span className="text-[var(--text)]">Resources</span>
              </nav>
            </Reveal>

            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                Resource hub
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                Everything you need, <span className="text-gradient">in one place</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Guides, articles, documentation, cheat sheets, free tools and templates — all curated to
                help you learn faster, build smarter and ship with confidence.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  RESOURCE HUB GRID                                           */}
        {/* ============================================================ */}
        <section className="container-px mx-auto max-w-7xl pt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resourceHub.slice(0, 2).map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 70}>
                <Link
                  href={r.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${r.gradient} text-white shadow-[var(--shadow-glow)] transition group-hover:scale-110`}
                  >
                    <Icon name={r.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{r.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    {r.cta} <Icon name="arrowRight" size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={140}>
              <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <img src="/images/base64_practice.png" alt="Level up your skills" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--text)]">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">Learn, Build, Ship</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">Everything you need to master modern web development.</p>
                </div>
              </div>
            </Reveal>

            {resourceHub.slice(2).map((r, i) => (
              <Reveal key={r.title} delay={((i + 3) % 3) * 70}>
                <Link
                  href={r.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${r.gradient} text-white shadow-[var(--shadow-glow)] transition group-hover:scale-110`}
                  >
                    <Icon name={r.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{r.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    {r.cta} <Icon name="arrowRight" size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        

        {/* ============================================================ */}
        {/*  FEATURED READING                                           */}
        {/* ============================================================ */}
        {featured.length > 0 && (
          <section className="relative overflow-hidden py-[50px]">
            <div aria-hidden className="pointer-events-none absolute right-0 top-10 -z-10 h-72 w-72 rounded-full bg-[var(--glow-primary)] blur-[120px]" />
            <div className="container-px mx-auto max-w-7xl">
              <Reveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Start here</span>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                    Featured reading
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
                >
                  View all <Icon name="arrowRight" size={15} />
                </Link>
              </Reveal>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 70}>
                    <ArticleCard article={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/*  CTA STRIP                                                   */}
        {/* ============================================================ */}
        <section className="container-px mx-auto max-w-7xl pb-[50px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-gradient-to-br from-primary to-secondary p-10 text-center text-white shadow-[var(--shadow-glow)] sm:p-14">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
              <div className="relative">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Ready to put it all to work?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  Jump into any of our {products.length} free tools and start building right now — no sign-up, no limits.
                </p>
                <Link
                  href="/products"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5"
                >
                  Explore all products <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
