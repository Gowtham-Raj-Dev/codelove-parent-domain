import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { legalPages, getLegalPage } from "@/lib/data";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return { title: "Not found · CodeLove" };
  return {
    title: `${page.title} · CodeLove`,
    description: page.description,
    alternates: { canonical: `/legal/${page.slug}` },
  };
}

export default async function LegalPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-[50px] sm:pt-36 sm:pb-[50px]">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 blur-[120px]" />
            <div className="absolute inset-0 bg-grid opacity-50" />
          </div>

          <div className="container-px mx-auto max-w-3xl">
            <Reveal className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
                <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <span className="text-[var(--text)]">{page.title}</span>
              </nav>
            </Reveal>

            <Reveal>
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                {page.title}
              </h1>
              <p className="mt-3 inline-flex items-center gap-2 text-xs text-[var(--text-faint)]">
                <Icon name="clock" size={14} /> Last updated {page.updated}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">{page.intro}</p>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="container-px mx-auto max-w-3xl pb-[50px]">
          <div className="space-y-10">
            {page.sections.map((section, i) => (
              <Reveal key={section.heading} delay={(i % 3) * 40}>
                <section>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-base leading-relaxed text-[var(--text-muted)]">{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          {/* Contact prompt */}
          <Reveal className="mt-14">
            <div className="flex flex-col items-start gap-3 rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[var(--text-muted)]">
                Questions about this policy? We&apos;re happy to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Contact us <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
