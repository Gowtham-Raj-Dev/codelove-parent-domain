import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { products, getProduct } from "@/lib/data";

/* Pre-render every product page at build time. */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found · CodeLove" };
  
  const title = `${product.name} — ${product.tagline} | CodeLove`;
  const description = product.detail?.overview ?? product.description;
  
  return {
    title,
    description,
    keywords: [
      "CodeLove",
      "codelove",
      product.name,
      product.name.toLowerCase(),
      product.category,
      "free online tool",
      "developer utility",
      product.tagline
    ],
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `https://codelove.in/products/${product.slug}`,
      siteName: "CodeLove",
      type: "website",
      images: product.image ? [{ url: `https://codelove.in${product.image}` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.image ? [`https://codelove.in${product.image}`] : undefined,
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const detail = product.detail;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const isLive = product.status === "Live";
  const statusLabel = product.status === "Soon" ? "Coming soon" : product.status;

  return (
    <>
      <Navbar />
      <main>
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden pt-28 pb-[50px] sm:pt-32 sm:pb-[50px]">
          {/* backdrop */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className={`absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br ${product.gradient} opacity-25 blur-[120px]`} />
            <div className={`absolute -right-24 top-40 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br ${product.gradient} opacity-20 blur-[120px]`} />
            <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            {/* Breadcrumb */}
            <Reveal className="mb-10">
              <nav className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
                <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <Link href="/products" className="transition hover:text-[var(--text)]">Products</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <span className="text-[var(--text)]">{product.name}</span>
              </nav>
            </Reveal>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* ---- Copy ---- */}
              <Reveal>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${product.gradient} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
                    <span className={`h-1.5 w-1.5 rounded-full bg-white ${isLive ? "animate-pulse" : ""}`} />
                    {statusLabel}
                  </span>
                  <span className="rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                    {product.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-faint)]">
                    <Icon name="globe" size={13} />
                    {product.domain}
                  </span>
                </div>

                <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-xl font-medium text-[var(--text)]">{product.tagline}</p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
                  {detail?.overview ?? product.description}
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {isLive ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${product.gradient} px-7 py-4 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:brightness-110`}
                    >
                      Access Tool
                      <Icon name="arrowUpRight" size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--text-faint)]">
                      <Icon name="clock" size={18} />
                      Coming soon
                    </span>
                  )}
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-6 py-4 text-sm font-semibold transition hover:text-[var(--text)]"
                  >
                    <Icon name="arrowRight" size={16} className="rotate-180" />
                    All products
                  </Link>
                </div>

                {/* highlight chips */}
                {detail?.highlights && (
                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-[var(--surface-border)] pt-7">
                    {detail.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)]">
                        <Icon name="check" size={15} className="text-accent" />
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>

              {/* ---- Browser-window mockup ---- */}
              <Reveal delay={120}>
                <div className="relative">
                  {/* glow behind window */}
                  <div className={`absolute inset-6 rounded-[2rem] bg-gradient-to-br ${product.gradient} opacity-30 blur-3xl`} />

                  {/* floating badges */}
                  <div className="absolute -left-4 top-16 z-20 hidden animate-float rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-4 py-3 shadow-[var(--shadow-soft)] sm:block">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/12 text-emerald-500">
                        <Icon name="zap" size={16} />
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs font-semibold">Blazing fast</p>
                        <p className="text-[10px] text-[var(--text-faint)]">Edge delivered</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-3 bottom-14 z-20 hidden animate-float-slow rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-4 py-3 shadow-[var(--shadow-soft)] sm:block">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/12 text-primary">
                        <Icon name="shield" size={16} />
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs font-semibold">Private &amp; secure</p>
                        <p className="text-[10px] text-[var(--text-faint)]">HTTPS everywhere</p>
                      </div>
                    </div>
                  </div>

                  {/* window */}
                  <div className="relative overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-glow)]">
                    {/* window chrome */}
                    <div className="flex items-center gap-2 border-b border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                      <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-1.5">
                        <Icon name="lock" size={12} className="text-[var(--text-faint)]" />
                        <span className="truncate text-[11px] text-[var(--text-faint)]">{product.domain}</span>
                      </div>
                    </div>

                    {/* window body */}
                    <div className={`relative grid w-full place-items-center bg-gradient-to-br ${product.gradient} ${product.image ? 'p-0' : 'p-10 sm:p-14'}`}>
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="aspect-square w-full object-cover sm:aspect-[4/3]" />
                      ) : (
                        <>
                          <div aria-hidden className="absolute inset-0">
                            <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full bg-white/25 blur-2xl" />
                            <div className="absolute bottom-2 right-6 h-32 w-32 rounded-full bg-black/10 blur-2xl" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_55%)]" />
                          </div>
                          <div className="relative flex flex-col items-center">
                            <div className="grid h-24 w-24 place-items-center rounded-3xl border border-white/30 bg-white/15 shadow-lg backdrop-blur-md">
                              <Icon name={product.icon} size={52} className="text-white" />
                            </div>
                            {/* fake UI skeleton */}
                            <div className="mt-8 w-full max-w-[15rem] space-y-2.5">
                              <div className="h-9 rounded-lg border border-white/25 bg-white/15 backdrop-blur-sm" />
                              <div className="flex gap-2">
                                <div className="h-2.5 flex-1 rounded-full bg-white/25" />
                                <div className="h-2.5 w-10 rounded-full bg-white/40" />
                              </div>
                              <div className="h-2.5 w-2/3 rounded-full bg-white/20" />
                              <div className="mt-1 h-9 rounded-lg bg-white/90 shadow-sm" />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  HOW IT WORKS — timeline                                    */}
        {/* ============================================================ */}
        {detail?.steps && (
          <section className="relative py-[50px]">
            <div className="container-px mx-auto max-w-6xl">
              <Reveal className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  How it works
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                  From start to finish in <span className="text-gradient">{detail.steps.length} simple steps</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
                  No learning curve, no setup — here&apos;s exactly what happens when you use {product.name}.
                </p>
              </Reveal>

              <div className="relative mt-16">
                {/* connecting line (desktop) */}
                <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--surface-border)] to-transparent lg:block" />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                  {detail.steps.map((step, i) => (
                    <Reveal key={step.title} delay={i * 90}>
                      <div className="group relative flex h-full flex-col rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                        {/* node */}
                        <div className="flex items-center justify-between">
                          <span className={`relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${product.gradient} text-white shadow-md transition-transform duration-500 group-hover:scale-110`}>
                            <Icon name={step.icon} size={26} />
                          </span>
                          <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--surface-border)]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{step.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/*  FEATURES                                                   */}
        {/* ============================================================ */}
        <section className="py-[50px]">
          <div className="container-px mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  Features
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                  Everything <span className="text-gradient">{product.name}</span> gives you
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
                  {product.description}
                </p>
                {isLive ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${product.gradient} px-7 py-4 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:brightness-110`}
                  >
                    Access Tool
                    <Icon name="arrowUpRight" size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--text-faint)]">
                    <Icon name="clock" size={18} />
                    Coming soon
                  </span>
                )}
              </Reveal>

              <Reveal delay={100}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {product.features.map((f, i) => (
                    <li
                      key={f}
                      className="group flex items-start gap-3.5 rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                    >
                      <span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${product.gradient} text-white shadow-sm transition-transform duration-500 group-hover:scale-110`}>
                        <Icon name="check" size={18} />
                      </span>
                      <span className="text-sm font-medium leading-relaxed text-[var(--text)]">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ                                                        */}
        {/* ============================================================ */}
        {detail?.faqs && (
          <section className="py-[50px]">
            <div className="container-px mx-auto max-w-3xl">
              <Reveal className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  FAQ
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                  Frequently asked <span className="text-gradient">questions</span>
                </h2>
              </Reveal>
              <div className="mt-10 space-y-3">
                {detail.faqs.map((faq, i) => (
                  <Reveal key={faq.q} delay={(i % 3) * 60}>
                    <details className="group rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-soft)] transition open:shadow-[var(--shadow-glow)]">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                        {faq.q}
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-faint)] transition group-open:rotate-180">
                          <Icon name="chevronDown" size={16} />
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{faq.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/*  FINAL CTA + related                                        */}
        {/* ============================================================ */}
        <section className="container-px mx-auto max-w-6xl pb-[50px]">
          <Reveal>
            <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${product.gradient} p-10 text-center shadow-[var(--shadow-glow)] sm:p-16`}>
              <div aria-hidden className="absolute inset-0 opacity-90">
                <div className="absolute -left-10 -top-12 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-black/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />
              </div>
              <div className="relative">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur-md">
                  <Icon name={product.icon} size={32} className="text-white" />
                </div>
                <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {isLive ? `Ready to try ${product.name}?` : `${product.name} is launching soon`}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/85">
                  {isLive
                    ? `Jump straight into ${product.domain} and start using it now — it's fast, free and ready when you are.`
                    : `We're putting the finishing touches on ${product.name}. It'll be live at ${product.domain} very soon — check back shortly.`}
                </p>
                {isLive ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Access Tool
                    <Icon name="arrowUpRight" size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/90 px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg">
                    <Icon name="clock" size={18} />
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          </Reveal>

          {/* Related products */}
          <div className="mt-20">
            <Reveal className="flex items-end justify-between gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                Explore more products
              </h2>
              <Link href="/products" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5">
                View all
                <Icon name="arrowRight" size={15} />
              </Link>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
                  >
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-sm transition-transform duration-500 group-hover:scale-110`}>
                      <Icon name={p.icon} size={24} />
                    </span>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-[var(--text-muted)]">{p.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                      Learn more
                      <Icon name="arrowRight" size={15} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
