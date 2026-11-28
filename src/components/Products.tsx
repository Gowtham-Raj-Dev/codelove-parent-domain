import Link from "next/link";
import SectionHeading from "./SectionHeading";
import DevicePreviewFrame from "./DevicePreviewFrame";
import Reveal from "./Reveal";
import Icon from "./Icon";
import ProductLogo from "./ProductLogo";
import { products, isProductLive, type Product } from "@/lib/data";

const ROW1_SLUGS = [
  "voltarc",
  "apps",
  "satisfying-video-maker",
  "webly",
  "iloveconvert",
  "videocut",
  "models",
];

const ROW2_SLUGS = [
  "videomaker",
  "linkinbio",
  "videotogif",
  "videotoimages",
  "games",
  "utubeflow",
  "javaplay",
];

function MarqueeProductCard({ product }: { product: Product }) {
  const isLive = isProductLive(product);
  return (
    <article className="group flex w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-primary/40 sm:w-[340px]">
      <DevicePreviewFrame product={product} />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <ProductLogo product={product} size={36} />
            <div className="min-w-0">
              <h3 className="truncate font-[family-name:var(--font-display)] text-base font-bold tracking-tight">
                {product.name}
              </h3>
              <p className="truncate font-mono text-[11px] text-[var(--text-faint)]">
                {product.domain}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">
            {product.category}
          </span>
        </div>

        <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-[var(--text-muted)]">
          {product.tagline} — {product.description}
        </p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-2.5 py-2 text-xs font-semibold transition hover:border-primary/40 hover:text-[var(--text)]"
          >
            Learn more
            <Icon name="arrowRight" size={13} />
          </Link>
          {isLive ? (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-primary/10 px-2.5 py-2 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              <span className="truncate">{product.cta ?? "Open"}</span>
              <Icon name="arrowUpRight" size={13} className="shrink-0" />
            </a>
          ) : (
            <span className="inline-flex items-center justify-center gap-1 rounded-xl px-2.5 py-2 text-xs font-semibold text-[var(--text-faint)]">
              Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  const bySlug = new Map(products.map((p) => [p.slug, p]));
  const row1 = ROW1_SLUGS.map((s) => bySlug.get(s)).filter((p): p is Product => Boolean(p));
  const row2 = ROW2_SLUGS.map((s) => bySlug.get(s)).filter((p): p is Product => Boolean(p));

  return (
    <section id="products" className="scroll-mt-24 overflow-hidden py-[50px]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Products"
          title={<>One ecosystem, <span className="text-gradient">every tool</span> you need</>}
          description="Each CodeLove product lives on its own dedicated subdomain — purpose-built, responsive on desktop & mobile, and completely free."
        />
      </div>

      {/* Dual-row opposing infinite marquee carousel */}
      <div className="mt-12 space-y-6">
        {/* Row 1: loops continuously LEFT */}
        <div className="group/row relative overflow-hidden mask-fade-x">
          <div className="flex w-max gap-5 py-2 animate-[marquee_46s_linear_infinite] group-hover/row:[animation-play-state:paused]">
            {[...row1, ...row1].map((product, idx) => (
              <MarqueeProductCard key={`r1-${product.slug}-${idx}`} product={product} />
            ))}
          </div>
        </div>

        {/* Row 2: loops continuously RIGHT */}
        <div className="group/row relative overflow-hidden mask-fade-x">
          <div className="flex w-max gap-5 py-2 animate-[marquee-reverse_48s_linear_infinite] group-hover/row:[animation-play-state:paused]">
            {[...row2, ...row2].map((product, idx) => (
              <MarqueeProductCard key={`r2-${product.slug}-${idx}`} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
          >
            View all {products.length} products
            <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
          <p className="text-sm text-[var(--text-muted)]">
            {products.length} web studios, 3D showcases, and Android APKs — hover any row to pause or explore all cards.
          </p>
        </Reveal>

        {/* Direct links to every CodeLove site, so visitors and search engines reach each subdomain from the home page. */}
        <nav aria-label="CodeLove sites" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <li key={product.slug}>
                <a
                  href={product.url}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] px-4 py-2 text-sm text-[var(--text-muted)] transition hover:border-primary hover:text-[var(--text)]"
                >
                  <ProductLogo product={product} size={18} className="!shadow-none" />
                  <span className="font-medium text-[var(--text)]">{product.name}</span>
                  <span>{product.domain}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
