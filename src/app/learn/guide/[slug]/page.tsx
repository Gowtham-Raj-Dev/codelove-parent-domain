import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ArticleCard from "@/components/ArticleCard";
import ArticleToc from "@/components/ArticleToc";
import { articles, getArticle, getCategory } from "@/lib/data";

/** Turn a heading into a stable, URL-safe anchor id. */
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* Pre-render every article page at build time. */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found · CodeLove" };
  
  const title = `${article.title} | CodeLove Learning Center`;
  const description = article.excerpt;
  
  return {
    title,
    description,
    keywords: [
      "CodeLove",
      "codelove",
      "CodeLove Learning Center",
      article.category,
      "developer guide",
      "tutorial",
      ...article.takeaways,
    ],
    alternates: { canonical: `/learn/guide/${article.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://codelove.in/learn/guide/${article.slug}`,
      siteName: "CodeLove",
      images: article.image ? [{ url: `https://codelove.in${article.image}` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.image ? [`https://codelove.in${article.image}`] : undefined,
    }
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Category slug for the "in category" breadcrumb link, when it maps to a topic.
  const categorySlug = getCategory(article.category.toLowerCase())?.slug ?? null;

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .concat(articles.filter((a) => a.slug !== article.slug && a.category !== article.category))
    .slice(0, 3);

  // Anchor ids shared between the rendered sections and the table of contents.
  const sectionIds = article.content.map((s, i) => `s${i}-${slugify(s.heading)}`);
  const tocItems = [
    { id: "takeaways", label: "Key takeaways" },
    ...article.content.map((s, i) => ({ id: sectionIds[i], label: s.heading })),
  ];

  return (
    <>
      <Navbar />
      <main className="theme-learn">
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <article>
          <header className="relative overflow-hidden pt-[50px] pb-[50px] sm:pt-32">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className={`absolute -left-20 top-0 h-[24rem] w-[24rem] rounded-full bg-gradient-to-br ${article.gradient} opacity-20 blur-[120px]`} />
              <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_70%)]" />
            </div>

            <div className="container-px mx-auto max-w-5xl">
              <Reveal className="mb-8">
                <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-faint)]">
                  <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
                  <Icon name="chevronDown" size={14} className="-rotate-90" />
                  <Link href="/learn" className="transition hover:text-[var(--text)]">Learning Center</Link>
                  <Icon name="chevronDown" size={14} className="-rotate-90" />
                  <span className="text-[var(--text)]">{article.category}</span>
                </nav>
              </Reveal>

              <Reveal>
                <Link
                  href={categorySlug ? `/learn/${categorySlug}` : `/learn`}
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${article.gradient} px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-110`}
                >
                  <Icon name={article.icon} size={14} />
                  {article.category}
                </Link>
                <h1 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                  {article.title}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">{article.intro}</p>

                {/* Meta row */}
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[var(--surface-border)] py-4 text-sm text-[var(--text-faint)]">
                  <span className="inline-flex items-center gap-2 font-medium text-[var(--text-muted)]">
                    <span className="theme-grad-br grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-white">CL</span>
                    {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={15} /> {article.readingTime}</span>
                  <span className="inline-flex items-center gap-1.5"><Icon name="fileText" size={15} /> {article.published}</span>
                  <span>· Updated {article.updated}</span>
                </div>
              </Reveal>
            </div>
          </header>

          {/* Banner */}
          <div className="container-px mx-auto max-w-5xl">
            <Reveal>
              <div className={`relative flex h-40 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${article.gradient} shadow-[var(--shadow-glow)] sm:h-52`}>
                {article.image ? (
                  <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <>
                    <div aria-hidden className="absolute inset-0">
                      <div className="absolute -left-8 -top-10 h-48 w-48 rounded-full bg-white/25 blur-3xl" />
                      <div className="absolute bottom-0 right-6 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_55%)]" />
                    </div>
                    <div className="relative grid h-24 w-24 place-items-center rounded-3xl border border-white/30 bg-white/15 shadow-lg backdrop-blur-md">
                      <Icon name={article.icon} size={52} className="text-white" />
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          </div>

          {/* ============================================================ */}
          {/*  BODY                                                       */}
          {/* ============================================================ */}
          <div className="container-px mx-auto max-w-5xl py-14 sm:py-[50px]">
            <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-12">
              {/* Main column */}
              <div className="min-w-0">
                {/* Key takeaways */}
                <Reveal>
                  <div id="takeaways" className="scroll-mt-24 rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-7">
                    <h2 className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold">
                      <Icon name="zap" size={18} className="text-[var(--t-solid)]" />
                      Key takeaways
                    </h2>
                    <ul className="mt-4 grid gap-3">
                      {article.takeaways.map((t) => (
                        <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-muted)]">
                          <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {/* Sections */}
                <div className="mt-12 space-y-12">
                  {article.content.map((section, i) => (
                    <Reveal key={section.heading} delay={(i % 3) * 40}>
                      <section id={sectionIds[i]} className="scroll-mt-24">
                        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-[1.65rem]">
                          {section.heading}
                        </h2>
                        {section.image && (
                          <div className="my-8 max-w-sm overflow-hidden rounded-2xl border border-[var(--surface-border)] shadow-[var(--shadow-soft)] sm:max-w-md">
                            <img src={section.image} alt={section.heading} className="w-full object-cover" />
                          </div>
                        )}
                        <div className="mt-4 space-y-4">
                          {section.paragraphs.map((p, j) => (
                            <p key={j} className="text-base leading-relaxed text-[var(--text-muted)]">{p}</p>
                          ))}
                        </div>
                      </section>
                    </Reveal>
                  ))}
                </div>

                {/* Author box */}
                <Reveal className="mt-14">
                  <div className="flex items-center gap-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
                    <span className="theme-grad-br grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-sm font-bold text-white shadow-[0_18px_50px_-18px_var(--t-solid)]">
                      CL
                    </span>
                    <div>
                      <p className="font-semibold">{article.author}</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Solo developer and creator, writing clear guides and building tools so you always have current, trustworthy content.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Back link */}
                <Reveal className="mt-10">
                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold transition hover:text-[var(--text)]"
                  >
                    <Icon name="arrowRight" size={16} className="rotate-180" />
                    All guides
                  </Link>
                </Reveal>
              </div>

              {/* Table of contents — right sidebar (desktop only) */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <ArticleToc items={tocItems} />
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* ============================================================ */}
        {/*  RELATED                                                     */}
        {/* ============================================================ */}
        {related.length > 0 && (
          <section className="relative overflow-hidden border-t border-[var(--surface-border)] py-[50px]">
            <div aria-hidden className="pointer-events-none absolute left-0 top-10 -z-10 h-72 w-72 rounded-full bg-[var(--t-glow)] blur-[120px]" />
            <div className="container-px mx-auto max-w-7xl">
              <Reveal className="mb-10 flex items-end justify-between gap-4">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Keep reading
                </h2>
                <Link href="/learn" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[var(--t-solid)] transition hover:gap-2.5">
                  View all <Icon name="arrowRight" size={15} />
                </Link>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 70}>
                    <ArticleCard article={a} />
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
