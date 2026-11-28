import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { articles, type Article } from "@/lib/data";

function Thumb({ article, big = false }: { article: Article; big?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden border-b border-slate-200/80 bg-slate-50 dark:border-white/10 dark:bg-[#050507] ${
        big ? "h-full min-h-[16rem] sm:border-b-0 sm:border-r" : "h-44"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-35 dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] dark:opacity-30"
      />
      <div className="relative flex h-full w-full items-center justify-center p-3.5 sm:p-4">
        {article.image ? (
          <div className="h-full w-full overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm dark:border-white/15 dark:bg-[#0b0d12]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image}
              alt={article.title}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-slate-200/90 bg-white dark:border-white/15 dark:bg-[#0b0d12]">
            <Icon name={article.icon} size={big ? 52 : 34} className="text-[var(--text-muted)] transition duration-500 group-hover:scale-110" />
          </div>
        )}
        <span className="absolute right-5 top-5 rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur dark:border-white/15 dark:bg-[#0d1017]/95 dark:text-slate-100">
          {article.category}
        </span>
      </div>
    </div>
  );
}

function Meta({ article }: { article: Article }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--text-faint)]">
      <span className="inline-flex items-center gap-1.5">
        <span className="grid h-6 w-6 place-items-center rounded-full border border-slate-200 bg-slate-100 text-[9px] font-bold text-slate-800 dark:border-white/15 dark:bg-white/10 dark:text-white">
          CL
        </span>
        {article.author}
      </span>
      <span className="inline-flex items-center gap-1">
        <Icon name="clock" size={13} /> {article.readingTime}
      </span>
      <span>· {article.published}</span>
    </div>
  );
}

export default function Articles() {
  const [lead, ...rest] = articles;
  const feature = rest.slice(0, 3);
  const grid = rest.slice(3, 9);

  return (
    <section id="articles" className="relative overflow-hidden py-[50px]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog & Articles"
          title={<>Learn something new in <span className="text-gradient">every read</span></>}
          description="Original, in-depth articles written and reviewed by practitioners — with authors, publish dates and last-updated timestamps so you always read current, trustworthy content."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Lead article */}
          <Reveal>
            <Link
              href={`/learn/guide/${lead.slug}`}
              className="group grid h-full overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] sm:grid-cols-2"
            >
              <Thumb article={lead} big />
              <div className="flex flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Featured</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight">
                  {lead.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{lead.excerpt}</p>
                <Meta article={lead} />
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                  Read article <Icon name="arrowRight" size={15} />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Three stacked features */}
          <div className="grid gap-6">
            {feature.map((a, i) => (
              <Reveal key={a.title} delay={i * 70}>
                <Link
                  href={`/learn/guide/${a.slug}`}
                  className="group flex overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/35"
                >
                  <div className="relative w-32 shrink-0 overflow-hidden border-r border-slate-200/80 bg-slate-50 p-2 dark:border-white/10 dark:bg-[#050507] sm:w-44">
                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-slate-200/90 bg-white dark:border-white/15 dark:bg-[#0b0d12]">
                      {a.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={a.image}
                          alt={a.title}
                          width={400}
                          height={300}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Icon name={a.icon} size={28} className="text-[var(--text-muted)]" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col p-4 sm:p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{a.category}</span>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-base font-bold leading-snug tracking-tight">
                      {a.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--text-faint)]">
                      <span className="inline-flex items-center gap-1"><Icon name="clock" size={12} /> {a.readingTime}</span>
                      <span>· Updated {a.updated}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Grid of more articles */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 70}>
              <Link
                href={`/learn/guide/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <Thumb article={a} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold leading-snug tracking-tight transition group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">{a.excerpt}</p>
                  <div className="mt-auto">
                    <Meta article={a} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold backdrop-blur transition hover:shadow-sm"
          >
            Browse all articles <Icon name="arrowRight" size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
