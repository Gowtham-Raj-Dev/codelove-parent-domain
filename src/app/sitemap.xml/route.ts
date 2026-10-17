import { activeCategories, articles, blogs, legalPages, products } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * /sitemap.xml — written at build time (static export), so every deploy refreshes <lastmod>.
 * Routes come from the same data that each page's generateStaticParams uses, so new products,
 * guides, blog posts and legal pages are listed automatically.
 * URLs have no trailing slash, matching each page's canonical.
 */
export function GET() {
  const lastmod = new Date().toISOString();

  const paths = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/learn",
    "/products",
    "/resources",
    ...products.map((product) => `/products/${product.slug}`),
    // Learning Center guides live under /learn/guide.
    ...articles.map((article) => `/learn/guide/${article.slug}`),
    // Only categories that have guides are indexable; empty ones are noindex and left out.
    ...activeCategories.map((category) => `/learn/${category.slug}`),
    ...blogs.map((post) => `/blog/${post.slug}`),
    ...legalPages.map((page) => `/legal/${page.slug}`),
  ];

  const urls = paths
    .map(
      (path) =>
        `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
