import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import BlogListing from "@/components/BlogListing";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog & Articles | CodeLove",
  description:
    "Original, in-depth articles on development, video, AI, and design from CodeLove. Read platform updates, tutorials, and deep-dives by our engineering team.",
  keywords: [
    "CodeLove blog",
    "CodeLove articles",
    "codelove platform updates",
    "web development blog",
    "creator economy blog",
    "software engineering articles",
    "CodeLove news",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Articles | CodeLove",
    description: "Original, in-depth articles on development, video, AI, and design from CodeLove.",
    url: "https://codelove.in/blog",
    siteName: "CodeLove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Articles | CodeLove",
    description: "Original, in-depth articles on development, video, AI, and design from CodeLove.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      {/* theme-blog scopes the rose/amber editorial palette to this page only */}
      <main className="theme-blog">
        {/* Hero — editorial masthead */}
        <section className="relative overflow-hidden border-b border-[var(--surface-border)] pt-32 pb-[50px] sm:pt-36 sm:pb-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="theme-grad-br absolute right-1/4 top-0 h-[26rem] w-[26rem] rounded-full opacity-[0.13] blur-[130px]" />
            <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_35%,transparent_75%)]" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--t-solid)_28%,transparent)] bg-[var(--t-tint)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--t-solid)]">
                <Icon name="quote" size={13} />
                The CodeLove Journal · {articles.length} articles
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Learn something new in <span className="theme-text-gradient">every read</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                In-depth guides and explainers written and reviewed by practitioners — with authors,
                publish dates and last-updated timestamps so you always read current, trustworthy content.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Listing */}
        <section className="container-px mx-auto max-w-7xl pb-[50px] pt-6 sm:pb-[50px]">
          <Suspense fallback={<div className="h-40" />}>
            <BlogListing />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}
