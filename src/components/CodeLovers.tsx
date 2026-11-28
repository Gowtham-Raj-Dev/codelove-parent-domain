import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";

/**
 * Home-page FAQ & quick start band highlighting built-in browser tools (/tools)
 * and honest answers about privacy, local execution, and licensing.
 */
export const codeLoversFaqs: { q: string; a: string }[] = [
  {
    q: "What can I run directly on codelove.in?",
    a: "You can run four browser-local utilities right on codelove.in/tools — Image Compressor & WebP Converter, Video Bitrate & Size Calculator, Shorts 9:16 Safe-Zone Planner, and JSON/SEO Meta Previewer — alongside deep technical guides and studio web apps.",
  },
  {
    q: "Are uploaded images and videos sent to your servers?",
    a: "Most CodeLove tools run completely inside your own browser tab using WebAssembly, HTML5 Canvas, and WebAudio APIs, so files never leave your device. For cloud features like scheduled YouTube posting in UTubeFlow, we only process what is strictly required.",
  },
  {
    q: "Which tools help with YouTube Shorts and creator workflows?",
    a: "Video Cut trims and splits long videos into vertical 9:16 clips with Blur Fill framing, Video Maker renders scripted AI voices with synced captions, Video to GIF optimizes lightweight loops, and UTubeFlow handles scheduled bulk publishing.",
  },
  {
    q: "Can I use the 3D GLB models and converted assets in commercial projects?",
    a: "Your exported images, videos, and GIFs remain 100% yours with zero watermarks. Every 3D model in models.codelove.in displays its specific open license (such as CC0, MIT, or CC BY attribution) right on its download page.",
  },
  {
    q: "Who designs and maintains CodeLove?",
    a: "Gowtham (Gowthamraj), an independent full-stack developer based in India, builds, tests, and maintains CodeLove products and technical documentation. You can reach out directly through the Contact page for bug fixes or guide requests.",
  },
];

const featuredPaths = [
  { label: "Built-in Image Compressor & Converter", href: "/tools" },
  { label: "Video Cut — Shorts & Clip Splitter", href: "/products/videocut" },
  { label: "ILoveConvert — 54 Browser Utilities", href: "/products/iloveconvert" },
  { label: "Free AI Video Maker", href: "/products/videomaker" },
  { label: "Webly — Technical SEO & Analytics Audit", href: "/products/webly" },
  { label: "Browser Media Engineering Guide", href: "/learn/guide/how-browser-media-tools-work-wasm-webcodecs" },
  { label: "Technical SEO & Core Web Vitals Checklist", href: "/learn/guide/technical-seo-and-core-web-vitals-checklist" },
];

export default function CodeLovers() {
  return (
    <section id="code-lovers" className="container-px mx-auto max-w-7xl py-[50px]">
      <SectionHeading
        eyebrow="Built for creators & developers"
        title={<>Common questions about <span className="text-gradient">CodeLove tools</span></>}
        description="Plain answers about how browser-local tools run, how assets are licensed, and where to launch utilities directly."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* FAQ */}
        <Reveal>
          <div className="space-y-3">
            {codeLoversFaqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{f.a}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Highlighted destinations */}
        <Reveal delay={80}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight">Popular starting points</h3>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">
                Jump straight into an interactive tool on codelove.in or read a practical engineering guide.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {featuredPaths.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex items-center gap-2 text-[var(--text-muted)] transition hover:text-primary">
                      <Icon name="arrowRight" size={14} className="shrink-0 text-primary" />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5 border-t border-[var(--surface-border)] pt-5">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Open Built-In Toolkit <Icon name="arrowRight" size={14} />
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-2.5 text-xs font-semibold transition hover:border-primary"
              >
                Learning Center
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-2.5 text-xs font-semibold transition hover:border-primary"
              >
                Report a Bug
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
