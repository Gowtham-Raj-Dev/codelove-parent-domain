import Link from "next/link";
import Icon from "./Icon";
import type { Product } from "@/lib/data";

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const statusStyles =
    product.status === "Live"
      ? "bg-emerald-500/12 text-emerald-500 ring-emerald-500/20"
      : product.status === "New"
      ? "bg-blue-500/12 text-blue-500 ring-blue-500/20"
      : "bg-amber-500/12 text-amber-500 ring-amber-500/20";

  const isLive = product.status === "Live";
  const statusLabel = product.status === "Soon" ? "Coming soon" : product.status;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      {/* Illustration */}
      <div
        className={`relative overflow-hidden ${featured ? "lg:w-[46%]" : ""}`}
      >
        <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${product.gradient} ${featured ? "lg:h-full lg:min-h-[19rem]" : ""}`}>
          {product.image ? (
            <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          ) : (
            <>
              {/* decorative orbs */}
              <div aria-hidden className="absolute inset-0 opacity-90">
                <div className="absolute -left-6 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute bottom-2 right-6 h-24 w-24 rounded-full bg-black/10 blur-2xl" />
                <div className="absolute right-8 top-6 h-2 w-2 rounded-full bg-white/70" />
                <div className="absolute bottom-8 left-10 h-1.5 w-1.5 rounded-full bg-white/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)]" />
              </div>
              {/* glass icon tile */}
              <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <Icon name={product.icon} size={36} className="text-white" />
              </div>
            </>
          )}
          {/* status badge */}
          <span
            className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 ring-1 ring-inset ring-black/5 backdrop-blur`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${isLive ? "animate-pulse bg-emerald-500" : "bg-amber-500"}`} />
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
              {product.name}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-[var(--text-faint)]">{product.domain}</p>
          </div>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${statusStyles}`}>
            {product.category}
          </span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">{product.description}</p>

        <ul className={`mt-4 grid gap-2 ${featured ? "sm:grid-cols-2" : ""}`}>
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <Link
            href={`/products/${product.slug}`}
            className="group/btn inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold transition hover:border-transparent hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
          >
            Learn More
            <Icon name="arrowRight" size={16} className="transition group-hover/btn:translate-x-0.5" />
          </Link>
          {isLive ? (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/tool inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition hover:text-primary"
            >
              Access Tool
              <Icon name="arrowUpRight" size={16} className="transition group-hover/tool:translate-x-0.5 group-hover/tool:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[var(--text-faint)]">
              <Icon name="clock" size={16} />
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
