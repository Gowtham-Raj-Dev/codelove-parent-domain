import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ArticleCard from "@/components/ArticleCard";
import { categories, activeCategories, getCategory, articlesByCategory } from "@/lib/data";

/* Pre-render every category page at build time. */
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Category not found · CodeLove" };
  
  const title = `${cat.title} Tutorials & Guides | CodeLove Learning Center`;
  const description = `${cat.blurb} Browse ${cat.title.toLowerCase()} tutorials, explainers and guides in the CodeLove Learning Center.`;
  
  return {
    title,
    description,
    keywords: [
      "CodeLove",
      "codelove",
      cat.title,
      `${cat.title} tutorials`,
      `${cat.title} guides`,
      "CodeLove Learning Center",
      "learn to code",
    ],
    alternates: { canonical: `/learn/${cat.slug}` },
    openGraph: {
      title,
      description,
      url: `https://codelove.in/learn/${cat.slug}`,
      siteName: "CodeLove",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    }
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const posts = articlesByCategory(cat.title);
  const others = activeCategories.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <Navbar />
      <main className="theme-learn">
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden pt-32 pb-14 sm:pt-36 sm:pb-[50px]">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className={`absolute -left-24 top-6 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br ${cat.gradient} opacity-20 blur-[120px]`} />
            <div className="absolute inset-0 bg-dots opacity-70 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
                <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <Link href="/learn" className="transition hover:text-[var(--text)]">Learning Center</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <span className="text-[var(--text)]">{cat.title}</span>
              </nav>
            </Reveal>

            <Reveal className="max-w-3xl">
              <span className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${cat.gradient} text-white shadow-[var(--shadow-glow)]`}>
                <Icon name={cat.icon} size={30} />
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                {cat.title} <span className="theme-text-gradient">tutorials &amp; guides</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                {cat.blurb} Explore clear, practical articles written and reviewed by practitioners.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  ARTICLES                                                    */}
        {/* ============================================================ */}
        <section className="container-px mx-auto max-w-7xl pb-[50px] pt-4 sm:pb-[50px]">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 3) * 70}>
                  <ArticleCard article={a} basePath="/learn/guide" />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mx-auto max-w-lg rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-12 text-center shadow-[var(--shadow-soft)]">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--surface)] text-[var(--text-faint)]">
                  <Icon name={cat.icon} size={26} />
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold">
                  Fresh {cat.title} guides are on the way
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  We&apos;re busy writing in-depth {cat.title.toLowerCase()} content. In the meantime, browse the full blog for everything we&apos;ve published so far.
                </p>
                <Link
                  href="/blog"
                  className="theme-grad mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_var(--t-solid)] transition hover:-translate-y-0.5"
                >
                  Read the blog <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </Reveal>
          )}
        </section>

        {/* ============================================================ */}
        {/*  OTHER TOPICS                                               */}
        {/* ============================================================ */}
        <section className="container-px mx-auto max-w-7xl pb-[50px]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              Explore other topics
            </h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/learn/${c.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--surface-border)] bg-[var(--bg-elevated)] py-2 pl-2 pr-4 text-sm font-medium shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--t-solid)_35%,transparent)]"
              >
                <span className={`grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${c.gradient} text-white`}>
                  <Icon name={c.icon} size={14} />
                </span>
                {c.title}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
