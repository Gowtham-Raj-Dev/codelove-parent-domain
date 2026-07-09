import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { products } from "@/lib/data";

export default function Products() {
  // Home shows a small sample; the full lineup lives on /products.
  const sample = products.slice(0, 3);

  return (
    <section id="products" className="container-px mx-auto max-w-7xl scroll-mt-24 py-[50px]">
      <SectionHeading
        eyebrow="Products"
        title={<>One ecosystem, <span className="text-gradient">every tool</span> you need</>}
        description="Each CodeLove product lives on its own dedicated subdomain — purpose-built, fast and free. Here's a taste of the lineup — explore them all on the products page."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sample.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
        <Link
          href="/products"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
        >
          Show more products
          <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
        </Link>
        <p className="text-sm text-[var(--text-muted)]">
          {products.length} products and counting — browse the full collection.
        </p>
      </Reveal>
    </section>
  );
}
