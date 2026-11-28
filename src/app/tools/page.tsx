import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickToolsWorkbench from "@/components/QuickToolsWorkbench";
import Icon from "@/components/Icon";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Free Online Creator & Developer Tools",
  description:
    "Run local browser tools directly on codelove.in: WebP/JPG/PNG image compression, video bitrate & MP4 size calculation, Shorts 9:16 safe-zone sizing, and JSON/SEO validation.",
  path: "/tools",
  keywords: [
    "online image compressor",
    "video bitrate calculator",
    "youtube shorts aspect ratio calculator",
    "json formatter",
    "meta tag preview tool",
    "browser developer tools",
  ],
});

const toolFaqs = [
  {
    q: "Are images and text processed on your server?",
    a: "No. All four tools run purely inside your browser tab using standard HTML5 Canvas, JavaScript math, and local DOM APIs. Uploaded graphics and pasted JSON never cross the network.",
  },
  {
    q: "Why does converting PNG screenshots to WebP save so much space?",
    a: "PNG uses lossless DEFLATE compression, which stores exact pixel colors for graphics. WebP supports both lossless compression (typically 25–30% smaller than PNG) and adjustable lossy compression with alpha transparency.",
  },
  {
    q: "How should I pick a video bitrate for 1080p Shorts vs standard YouTube?",
    a: "Fast-moving vertical Shorts and Reels hold sharp detail around 8,000–12,000 kbps in H.264, while talking-head 1080p uploads look clean around 5,000–8,000 kbps. HEVC and AV1 preserve similar perceptual detail at roughly 28–38% lower bitrates.",
  },
  {
    q: "When should I open the dedicated CodeLove studio apps instead?",
    a: "Use the built-in tools here for fast compression checks, export math, cropping plans, and metadata QA. For multi-minute timeline cutting, multi-language AI video generation, PDF editing, or bulk scheduling, launch the dedicated browser apps from the Products directory.",
  },
];

const toolsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "CodeLove Built-In Creator & Developer Toolkit",
      url: `${SITE_URL}/tools`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: toolFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsJsonLd) }} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-10 sm:pt-36">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-[var(--glow-primary)] opacity-50 blur-[130px]" />
            <div className="absolute inset-0 bg-grid opacity-55" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            <nav className="mb-6 flex items-center gap-2 text-sm text-[var(--text-faint)]">
              <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
              <Icon name="chevronDown" size={14} className="-rotate-90" />
              <span className="text-[var(--text)]">Interactive Tools</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                <Icon name="zap" size={13} className="text-primary" />
                Runs locally in your browser
              </span>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                Interactive Creator &amp; <span className="text-gradient">Developer Toolkit</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Optimize images to WebP, estimate MP4 bitrates before exporting, check 9:16 vertical safe-zone dimensions,
                or validate JSON and Google search snippet lengths right here on codelove.in.
              </p>
            </div>
          </div>
        </section>

        <section className="container-px mx-auto max-w-7xl pb-14">
          <QuickToolsWorkbench />
        </section>

        {/* Practical Reference Manual */}
        <section className="container-px mx-auto max-w-7xl space-y-12 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                Web Image Format Reference: JPG vs PNG vs WebP
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Choosing the wrong image codec inflates page weight, hurts Core Web Vitals (Largest Contentful Paint), and
                introduces visible ringing around crisp typography. Match the file format to how the image was made:
              </p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[var(--surface-border)] text-[var(--text-faint)]">
                      <th className="py-2 pr-4 font-semibold">Format</th>
                      <th className="py-2 pr-4 font-semibold">Alpha</th>
                      <th className="py-2 pr-4 font-semibold">Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--surface-border)] text-[var(--text-muted)]">
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold text-[var(--text)]">WebP</td>
                      <td className="py-2.5 pr-4">Yes</td>
                      <td className="py-2.5">Modern web images, UI cards, transparent banners at 25–35% smaller sizes</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold text-[var(--text)]">JPG</td>
                      <td className="py-2.5 pr-4">No</td>
                      <td className="py-2.5">Photographs and natural gradients where legacy compatibility is required</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 pr-4 font-semibold text-[var(--text)]">PNG</td>
                      <td className="py-2.5 pr-4">Yes</td>
                      <td className="py-2.5">UI screenshots, logos, and pixel-exact diagrams prior to editing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                Deep dive: <Link href="/learn/guide/jpg-vs-png-vs-webp" className="font-semibold text-primary hover:underline">Read the full JPG vs PNG vs WebP guide</Link>.
              </p>
            </article>

            <article className="rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                Video Bitrate &amp; Safe-Zone Planning Guide
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Vertical video feeds overlay channel handles, descriptions, and action buttons over the top 14% and bottom 24%
                of a 9:16 frame. Keeping headlines inside the central safe zone prevents cropped subtitles across mobile screens.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--text-muted)]">
                <li>
                  <strong className="text-[var(--text)]">1080×1920 Shorts &amp; Reels:</strong> Target 8,000–10,000 kbps H.264 with
                  48 kHz AAC audio at 192 kbps so fast camera cuts stay crisp after platform re-encoding.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Target file-size math:</strong> Subtract audio bitrate from{" "}
                  <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-xs">(MB × 8,192) ÷ duration_sec</code> before encoding.
                </li>
                <li>
                  <strong className="text-[var(--text)]">Even dimensions:</strong> YUV 4:2:0 chroma subsampling in H.264/HEVC requires even
                  pixel widths and heights — the planner automatically snaps values to even integers.
                </li>
              </ul>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                Full walkthrough: <Link href="/learn/guide/landscape-video-to-vertical-shorts-blur-crop-letterbox" className="font-semibold text-primary hover:underline">Blur Fill vs Crop vs Letterbox for Shorts</Link>.
              </p>
            </article>
          </div>

          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-3">
              {toolFaqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-soft)]">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
