import Link from "next/link";
import Icon from "./Icon";
import type { Article } from "@/lib/data";

/**
 * Reusable article card used across the blog listing, category pages and
 * "related reading" sections. Links straight to the full article.
 */
export default function ArticleCard({ article, basePath = "/blog" }: { article: Article; basePath?: string }) {
  return (
    <Link
      href={`${basePath}/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] backdrop-blur-md shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--t-solid)]/20"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        {article.image ? (
          <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div className={`flex h-full items-center justify-center bg-gradient-to-br ${article.gradient}`}>
            <div aria-hidden className="absolute inset-0">
              <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 left-4 h-24 w-24 rounded-full bg-black/10 blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
            </div>
            <Icon
              name={article.icon}
              size={44}
              className="relative text-white/85 transition duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <span className="absolute left-4 top-4 rounded-full bg-[var(--bg)]/90 px-3 py-1 text-[11px] font-semibold text-[var(--text)] backdrop-blur border border-[var(--surface-border)]">
          {article.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 relative z-10">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:theme-text-gradient">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">{article.excerpt}</p>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--text-faint)] font-medium">
            <span className="inline-flex items-center gap-1.5">
              <span className="theme-grad-br grid h-6 w-6 place-items-center rounded-full text-[9px] font-bold text-white shadow-sm">
                CL
              </span>
              {article.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="clock" size={13} /> {article.readingTime}
            </span>
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--t-solid,var(--color-primary))] transition-all duration-300 group-hover:gap-2.5 opacity-0 group-hover:opacity-100">
            Read article <Icon name="arrowRight" size={14} />
          </span>
        </div>
        
        {/* Bottom animated glow line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--t-solid)] transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}
