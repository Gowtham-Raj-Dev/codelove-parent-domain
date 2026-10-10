import type { Metadata } from "next";
import type { Article } from "@/lib/data";

export const SITE_URL = "https://codelove.in";
/** Shared social preview image (public/og.png, 1200x630). */
export const DEFAULT_OG_IMAGE = "/og.png";

type PageMeta = {
  /** Page title without the brand — the root layout's template appends " · CodeLove". */
  title: string;
  description: string;
  /** Route path starting with "/". */
  path: string;
  /** Site-relative image path; defaults to the shared social card. */
  image?: string;
  keywords?: string[];
  /** Set false for thin pages that should stay out of search results. */
  index?: boolean;
};

/**
 * Per-page metadata: canonical plus complete Open Graph / Twitter tags.
 * A page-level `openGraph` replaces the root layout's object instead of merging with it,
 * so the site name, URL and image are repeated here for every page.
 */
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, keywords, index = true }: PageMeta): Metadata {
  const fullTitle = `${title} · CodeLove`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    // Only set when hiding a page: an explicit `robots: undefined` would drop the root layout's defaults.
    ...(index ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "CodeLove",
      url: `${SITE_URL}${path}`,
      title: fullTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/** "Jul 8, 2026" -> "2026-07-08", built from local date parts so the day cannot shift with the time zone. */
function isoDate(value: string) {
  const d = new Date(value);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Article + breadcrumb structured data for a Learning Center guide or a blog post. */
export function articleJsonLd(article: Article, path: string, section: { name: string; path: string }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        image: `${SITE_URL}${article.image ?? DEFAULT_OG_IMAGE}`,
        datePublished: isoDate(article.published),
        dateModified: isoDate(article.updated || article.published),
        author: { "@type": article.author.includes("CodeLove") ? "Organization" : "Person", name: article.author },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: section.name, item: `${SITE_URL}${section.path}` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}
