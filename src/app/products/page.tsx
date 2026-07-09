import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Products & Tools | CodeLove",
  description:
    "Explore every CodeLove product — downloaders, developer utilities, video and PDF tools, AI features and more. Each lives on its own fast, free subdomain.",
  keywords: [
    "CodeLove",
    "codelove products",
    "CodeLove tools",
    "free online tools",
    "developer utilities",
    "video processing tools",
    "PDF tools",
    "CodeLove ecosystem",
    ...products.map(p => p.name),
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "All Products & Tools | CodeLove",
    description: "Explore every CodeLove product — downloaders, developer utilities, video and PDF tools, AI features and more.",
    url: "https://codelove.in/products",
    siteName: "CodeLove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Products & Tools | CodeLove",
    description: "Explore every CodeLove product — downloaders, developer utilities, video and PDF tools, AI features and more.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-[50px] sm:pt-36 sm:pb-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-15 blur-[120px]" />
            <div className="absolute inset-0 bg-grid opacity-60" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
                <Link href="/" className="transition hover:text-[var(--text)]">
                  Home
                </Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <span className="text-[var(--text)]">Products</span>
              </nav>
            </Reveal>

            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                {products.length} products
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                One ecosystem, <span className="text-gradient">every tool</span> you need
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Each CodeLove product lives on its own dedicated subdomain — purpose-built, fast and free.
                Click any product to learn how it works, then jump straight into the tool.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Grid */}
        <section className="container-px mx-auto max-w-7xl pb-[50px] pt-6 sm:pb-[50px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 3) * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
