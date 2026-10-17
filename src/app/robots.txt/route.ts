import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/** /robots.txt — written at build time (static export). */
export function GET() {
  const body = [
    "# CodeLove is updated often. Every page is open to crawl; new pages are listed in the sitemap below.",
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
