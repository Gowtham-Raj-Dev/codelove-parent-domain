import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ArticleCard from "@/components/ArticleCard";
import { activeCategories, articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learning Center | CodeLove",
  description:
    "A knowledge hub that grows with you. Browse hundreds of CodeLove tutorials, explainers, and guides organised by topic — from your first line of code to advanced automation.",
  keywords: [
    "CodeLove",
    "codelove learning",
    "CodeLove tutorials",
    "CodeLove guides",
    "web development tutorials",
    "developer tools learning",
    "learn to code",
  ],
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Learning Center | CodeLove",
    description: "Browse hundreds of CodeLove tutorials, explainers, and guides.",
    url: "https://codelove.in/learn",
    siteName: "CodeLove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Center | CodeLove",
    description: "Browse hundreds of CodeLove tutorials, explainers, and guides.",
  },
};

const totalArticles = articles.length;
const featured = articles.filter((a) => a.featured).slice(0, 3);

export default function LearnPage() {
  return (
    <>
      <Navbar />
      {/* theme-learn scopes the emerald/teal academy palette to this page only */}
      <main className="theme-learn">
        {/* ============================================================ */}
        {/*  HERO — centred "academy" hub with dotted backdrop          */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden pt-32 pb-14 sm:pt-36 sm:pb-[50px]">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="theme-grad-br absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full opacity-[0.14] blur-[130px]" />
            <div className="absolute inset-0 bg-dots opacity-70 [mask-image:radial-gradient(ellipse_at_top,#000_35%,transparent_75%)]" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--t-solid)_28%,transparent)] bg-[var(--t-tint)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--t-solid)]">
                <Icon name="rocket" size={14} />
                Learning Center
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                A knowledge hub that <span className="theme-text-gradient">grows with you</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Browse hundreds of tutorials, explainers and guides organised by topic. From your first
                line of code to advanced automation, there&apos;s a clear path forward.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#categories"
                  className="theme-grad group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_var(--t-solid)] transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  Browse topics
                  <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="mx-auto mt-12 flex max-w-lg flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[var(--surface-border)] pt-8 text-center">
                <div>
                  <p className="theme-text-gradient font-[family-name:var(--font-display)] text-2xl font-bold">{totalArticles}+</p>
                  <p className="text-xs text-[var(--text-faint)]">Guides &amp; tutorials</p>
                </div>
                <div>
                  <p className="theme-text-gradient font-[family-name:var(--font-display)] text-2xl font-bold">{activeCategories.length}</p>
                  <p className="text-xs text-[var(--text-faint)]">Topics covered</p>
                </div>
                <div>
                  <p className="theme-text-gradient font-[family-name:var(--font-display)] text-2xl font-bold">Free</p>
                  <p className="text-xs text-[var(--text-faint)]">Always &amp; forever</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CATEGORY GRID — large 2-column "guide" cards               */}
        {/* ============================================================ */}
        <section id="categories" className="container-px mx-auto max-w-7xl scroll-mt-24 py-[50px]">
          <Reveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--t-solid)]">Curriculum</span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                Explore by topic
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[var(--text-muted)]">
                Pick a track to dive into focused guides, or read everything in the blog.
              </p>
            </div>

          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/learn/${c.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--t-solid)]/20 sm:p-8"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--t-tint)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Watermark icon */}
                  <Icon 
                    name={c.icon} 
                    size={120} 
                    className="absolute -right-6 -top-6 z-0 text-[var(--text-muted)] opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[var(--t-solid)] group-hover:opacity-10" 
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="theme-grad-br grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        <Icon name={c.icon} size={28} />
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--text-muted)] transition-colors duration-300 group-hover:border-[var(--t-solid)]/30 group-hover:text-[var(--t-solid)]">
                        {c.count} {c.count === 1 ? "guide" : "guides"}
                      </span>
                    </div>
                    
                    <h3 className="mt-8 font-[family-name:var(--font-display)] text-xl font-bold transition-colors duration-300 group-hover:theme-text-gradient">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                      {c.blurb}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-bold text-[var(--t-solid)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore track
                    <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  
                  {/* Bottom animated glow line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--t-solid)] transition-all duration-500 group-hover:w-full" />
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
            <div aria-hidden className="pointer-events-none absolute right-0 top-10 -z-10 h-72 w-72 rounded-full bg-[var(--t-glow)] blur-[120px]" />
            <div className="container-px mx-auto max-w-7xl">
              <Reveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--t-solid)]">Start here</span>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                    Featured reading
                  </h2>
                </div>

              </Reveal>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 70}>
                    <ArticleCard article={a} basePath="/learn/guide" />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
