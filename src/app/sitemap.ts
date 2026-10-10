import { MetadataRoute } from "next";
import { activeCategories, articles, blogs, legalPages, products } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codelove.in";

  const routes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/learn",
    "/products",
    "/resources",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Learning Center guides live under /learn/guide; only categories that have guides are listed.
  const guideRoutes = articles.map((article) => ({
    url: `${baseUrl}/learn/guide/${article.slug}`,
    lastModified: new Date(article.updated || article.published),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = activeCategories.map((category) => ({
    url: `${baseUrl}/learn/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.published),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legalRoutes = legalPages.map((page) => ({
    url: `${baseUrl}/legal/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...routes, ...productRoutes, ...guideRoutes, ...categoryRoutes, ...blogRoutes, ...legalRoutes];
}
