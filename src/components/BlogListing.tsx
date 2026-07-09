"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ArticleCard from "./ArticleCard";
import { blogs, blogCategories, type Article } from "@/lib/data";

function FeaturedLead({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-[var(--surface-border)] bg-[var(--surface)] backdrop-blur-md shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--t-solid)]/20 lg:flex-row"
    >
      <div className="relative min-h-[16rem] w-full lg:w-1/2 overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[var(--t-tint)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {article.image ? (
          <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div className={`flex h-full items-center justify-center bg-gradient-to-br ${article.gradient}`}>
            <div aria-hidden className="absolute inset-0">
              <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 left-4 h-28 w-28 rounded-full bg-black/10 blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
            </div>
            <Icon name={article.icon} size={64} className="relative text-white/85 transition duration-500 group-hover:scale-110" />
          </div>
        )}
        <span className="absolute left-6 top-6 z-20 rounded-full bg-[var(--bg)]/90 px-3 py-1.5 text-xs font-semibold text-[var(--text)] backdrop-blur border border-[var(--surface-border)]">
          {article.category}
        </span>
      </div>

      <div className="flex w-full lg:w-1/2 flex-col justify-center p-8 sm:p-12 relative z-10">
        <span className="inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--t-solid)]">
          <Icon name="star" size={14} /> Editor&apos;s pick
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl transition-colors duration-300 group-hover:theme-text-gradient">
          {article.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">{article.excerpt}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--text-faint)] font-medium">
          <span className="inline-flex items-center gap-2">
            <span className="theme-grad-br grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold text-white shadow-sm">CL</span>
            {article.author}
          </span>
          <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={14} /> {article.readingTime}</span>
          <span>· {article.published}</span>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--t-solid)] transition-all duration-300 group-hover:gap-3 opacity-0 group-hover:opacity-100">
          Read article <Icon name="arrowRight" size={16} />
        </span>
        
        {/* Bottom animated glow line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--t-solid)] transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}

export default function BlogListing() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") ?? "All";
  const matched = blogCategories.find((c) => c.toLowerCase() === initial.toLowerCase());
  const [active, setActive] = useState<string>(matched ?? "All");

  const filtered = useMemo(
    () => (active === "All" ? blogs : blogs.filter((a) => a.category === active)),
    [active]
  );

  const showFeatured = active === "All";
  const lead = showFeatured ? blogs.find((a) => a.featured) ?? blogs[0] : null;
  const grid = lead ? filtered.filter((a) => a.slug !== lead.slug) : filtered;

  const tabs = ["All", ...blogCategories.filter(c => c !== "All")];

  return (
    <>
      {/* Filter tabs */}
      <Reveal className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "theme-grad border-transparent text-white shadow-[0_14px_40px_-16px_var(--t-solid)]"
                  : "border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </Reveal>

      {/* Featured lead (only on "All") */}
      {lead && (
        <div className="mt-10">
          <FeaturedLead article={lead} />
        </div>
      )}

      {/* Grid */}
      {grid.length > 0 ? (
        <>
          <div className="mt-12 mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--t-solid)]">
              {active === "All" ? "Latest articles" : `${active} articles`}
            </span>
            <span className="h-px flex-1 bg-[var(--surface-border)]" />
            <span className="text-xs text-[var(--text-faint)]">{grid.length} posts</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 60}>
                <ArticleCard article={a} basePath="/blog" />
              </Reveal>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-10 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-12 text-center text-sm text-[var(--text-faint)]">
          No articles in this topic yet — check back soon.
        </div>
      )}
    </>
  );
}
