import Link from "next/link";
import { products, type Product } from "@/lib/data";
import Icon, { type IconName } from "./Icon";
import ProductLogo from "./ProductLogo";

type SubdomainGroup = {
  title: string;
  subtitle: string;
  icon: IconName;
  slugs: string[];
};

const GROUPS: SubdomainGroup[] = [
  {
    title: "Media & Video Studios",
    subtitle: "Browser editing, AI shorts creation, GIF rendering & frame extraction.",
    icon: "film",
    slugs: [
      "videocut",
      "videomaker",
      "videotogif",
      "videotoimages",
      "satisfying-video-maker",
      "utubeflow",
    ],
  },
  {
    title: "Converters, Web & Creator Tools",
    subtitle: "Document/media batch conversions, visual web pages, bio hubs & Java sandbox.",
    icon: "layout",
    slugs: ["iloveconvert", "webly", "linkinbio", "javaplay"],
  },
  {
    title: "3D Models, Android Apps & Games",
    subtitle: "Free Android game/tool APKs, WebGL PBR models and curated browser game portals.",
    icon: "box",
    slugs: ["apps", "models", "voltarc", "games"],
  },
];

function SubdomainCard({ product }: { product: Product }) {
  const host = product.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-soft)] transition hover:border-primary/40">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <ProductLogo product={product} size={40} className="shrink-0" />
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-bold leading-tight">
                {product.name}
              </h3>
              <p className="mt-0.5 font-mono text-[11px] text-primary">{host}</p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
          {product.tagline}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--surface-border)] pt-3 text-xs font-semibold">
        <Link
          href={`/products/${product.slug}`}
          className="text-[var(--text-muted)] transition hover:text-[var(--text)]"
        >
          Overview &amp; Docs
        </Link>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1 text-primary transition hover:bg-primary hover:text-white"
        >
          Launch App <Icon name="arrowUpRight" size={13} />
        </a>
      </div>
    </div>
  );
}

export default function SubdomainDirectory() {
  const bySlug = new Map(products.map((p) => [p.slug, p]));

  return (
    <section
      aria-labelledby="subdomains-heading"
      className="mx-auto max-w-6xl px-4 pb-16 sm:px-6"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Icon name="globe" size={14} /> Dedicated Subdomain Workspaces
          </span>
          <h2
            id="subdomains-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Jump Straight Into Any CodeLove Studio Subdomain
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
            Need full multi-track timeline editing, heavy batch document conversion, or 3D
            WebGL viewing? Launch the specialized CodeLove web app directly on its dedicated
            subdomain.
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-primary/40"
        >
          Browse Product Catalog <Icon name="arrowRight" size={15} />
        </Link>
      </div>

      <div className="space-y-8">
        {GROUPS.map((group) => {
          const items = group.slugs
            .map((s) => bySlug.get(s))
            .filter((p): p is Product => Boolean(p));
          if (items.length === 0) return null;

          return (
            <div key={group.title}>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={group.icon} size={16} />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[var(--text-faint)]">{group.subtitle}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((product) => (
                  <SubdomainCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
