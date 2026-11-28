import Link from "next/link";
import Icon from "./Icon";
import type { Article } from "@/lib/data";

/**
 * Reusable article card used across the blog listing, category pages and
 * "related reading" sections. Theme-matched white/black frames without loud gradient boxes.
 */
export default function ArticleCard({ article, basePath = "/blog" }: { article: Article; basePath?: string }) {
  return (
    <Link
      href={`${basePath}/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
    >
      {/* Clean Monochrome Framed Thumbnail */}
      <div className="relative h-48 overflow-hidden border-b border-slate-200/80 bg-slate-50 p-3 dark:border-white/10 dark:bg-[#050507]">
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/90 bg-white dark:border-white/15 dark:bg-[#0b0d12]">
          {article.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.image}
              alt={article.title}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Icon
                name={article.icon}
                size={40}
                className="text-[var(--text-muted)] transition duration-500 group-hover:scale-110"
              />
            </div>
          )}
        </div>

        <span className="absolute right-5 top-5 rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur dark:border-white/15 dark:bg-[#0d1017]/95 dark:text-slate-100">
          {article.category}
        </span>
      </div>

      {/* Body */}
      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">{article.excerpt}</p>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[var(--text-faint)]">
            <span className="inline-flex items-center gap-1.5">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-slate-200 bg-slate-100 text-[9px] font-bold text-slate-800 dark:border-white/15 dark:bg-white/10 dark:text-white">
                CL
              </span>
              {article.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="clock" size={13} /> {article.readingTime}
            </span>
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
            Read article <Icon name="arrowRight" size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
