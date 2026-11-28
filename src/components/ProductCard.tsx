import Link from "next/link";
import Icon from "./Icon";
import ProductLogo from "./ProductLogo";
import DevicePreviewFrame from "./DevicePreviewFrame";
import { isProductLive, type Product } from "@/lib/data";

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const statusStyles =
    product.status === "Live"
      ? "bg-emerald-500/12 text-emerald-500 ring-emerald-500/20"
      : product.status === "New"
      ? "bg-blue-500/12 text-blue-500 ring-blue-500/20"
      : "bg-amber-500/12 text-amber-500 ring-amber-500/20";

  const isLive = isProductLive(product);

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      {/* Theme-matched Desktop + Mobile preview frames */}
      <DevicePreviewFrame product={product} featured={featured} />

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <ProductLogo product={product} size={40} />
            <div className="min-w-0">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                {product.name}
              </h3>
              <p className="mt-0.5 truncate text-xs font-medium text-[var(--text-faint)]">{product.domain}</p>
            </div>
          </div>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${statusStyles}`}>
            {product.category}
          </span>
        </div>

        {/* Always three lines tall, so the feature lists and buttons line up across a row of cards. */}
        <p className="mt-3 line-clamp-3 min-h-[calc(3*1.625*0.875rem)] text-sm leading-relaxed text-[var(--text-muted)]">{product.description}</p>

        <ul className={`mt-4 grid gap-2 ${featured ? "sm:grid-cols-2" : ""}`}>
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* mt-auto pins the buttons to the bottom of every card; two equal columns keep them on one line. */}
        <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
          <Link
            href={`/products/${product.slug}`}
            aria-label={`Explore ${product.name} features and guide`}
            className="group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-2.5 text-sm font-semibold transition hover:border-transparent hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
          >
            Learn more
            <Icon name="arrowRight" size={16} className="transition group-hover/btn:translate-x-0.5" />
          </Link>
          {isLive ? (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${product.cta ?? "Open"} ${product.name} (opens ${product.domain})`}
              className="group/tool inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition hover:text-primary"
            >
              {product.cta ?? "Open tool"}
              <Icon name="arrowUpRight" size={16} className="transition group-hover/tool:translate-x-0.5 group-hover/tool:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--text-faint)]">
              <Icon name="clock" size={16} />
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
