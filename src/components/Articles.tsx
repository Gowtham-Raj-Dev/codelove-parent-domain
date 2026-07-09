import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { articles, type Article } from "@/lib/data";

function Thumb({ article, big = false }: { article: Article; big?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${big ? "h-full min-h-[16rem]" : "h-44"}`}>
      <div className={`flex h-full items-center justify-center bg-gradient-to-br ${article.gradient}`}>
        {article.image ? (
          <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <>
            <div aria-hidden className="absolute inset-0">
              <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-0 left-4 h-24 w-24 rounded-full bg-black/10 blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
            </div>
            <Icon name={article.icon} size={big ? 64 : 40} className="relative text-white/85 transition duration-500 group-hover:scale-110" />
          </>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 backdrop-blur">
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
        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-[9px] font-bold text-white">
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
      <div aria-hidden className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-[var(--glow-primary)] blur-[120px]" />
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
              href={`/blog/${lead.slug}`}
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
                  href={`/blog/${a.slug}`}
                  className="group flex overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative w-28 shrink-0 overflow-hidden sm:w-40">
                    <div className={`flex h-full items-center justify-center bg-gradient-to-br ${a.gradient}`}>
                      {a.image ? (
                        <img src={a.image} alt={a.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      ) : (
                        <Icon name={a.icon} size={30} className="text-white/85" />
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
                href={`/blog/${a.slug}`}
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
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold backdrop-blur transition hover:shadow-sm"
          >
            Browse all articles <Icon name="arrowRight" size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
