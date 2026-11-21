import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { articles, blogs } from "@/lib/data";

/**
 * Home-page section for the searches CodeLove wants to be found for ("code lovers", "codelove tools",
 * "free online tools", "free video tools", "gowtham codelove"), plus a plain link index of every
 * Learning Center guide and blog post so crawlers reach each one straight from the home page.
 * The FAQ text is mirrored in the FAQPage JSON-LD exported below; keep the two in sync.
 */
export const codeLoversFaqs: { q: string; a: string }[] = [
  {
    q: "What are CodeLove tools?",
    a: "CodeLove tools are free web apps by one developer: Video Cut, the AI Video Maker, Video to GIF, Video to Images, UTubeFlow, Link in Bio, Insta Downloader, a free 3D model library, free 3D browser games and JavaPlay for old Java phone games. They open in the browser, with no sign-up.",
  },
  {
    q: "Which free video tools does CodeLove have?",
    a: "Video Cut turns long videos into 9:16 Shorts and Reels, Video Maker turns a script into a cartoon video with AI voices, Video to GIF makes and shrinks GIFs, Video to Images saves frames and MP3 audio, and UTubeFlow schedules YouTube Shorts in bulk. All of them are free.",
  },
  {
    q: "Are these free online tools really free?",
    a: "Yes. There are no paid plans, and the video, GIF and image tools do their work inside your browser, so most files are never uploaded. The sites are paid for by ads.",
  },
  {
    q: "Is CodeLove the same as Code Love or Code with Love?",
    a: "Yes. CodeLove is also written Code Love or Code with Love. It is one free tools site at codelove.in, made by Gowtham, with the tools, guides and blog all in one place.",
  },
  {
    q: "How do I start using CodeLove tools?",
    a: "Open the products page, pick a tool such as Video Cut or Video to GIF, and use it straight in your browser. There is nothing to install and no account to create.",
  },
  {
    q: "Who makes CodeLove?",
    a: "Gowtham (Gowthamraj), a solo full-stack developer from India, designs, codes and runs every CodeLove site. You can read his story on the About page or see his portfolio at gowtham.codelove.in.",
  },
  {
    q: "How do I find web development tutorials on CodeLove?",
    a: "The Learning Center is mostly about video, images, 3D models and YouTube. For web developers, the 3D guides explain GLB files and how to load free 3D models in three.js, Blender or a game engine.",
  },
];

const videoTools = [
  { label: "Video Cut — long video to Shorts", href: "/products/videocut" },
  { label: "Free AI Video Maker", href: "/products/videomaker" },
  { label: "Video to GIF", href: "/products/videotogif" },
  { label: "Video to Images & MP3", href: "/products/videotoimages" },
  { label: "UTubeFlow — free YouTube automation", href: "/products/utubeflow" },
];

export default function CodeLovers() {
  return (
    <section id="code-lovers" className="container-px mx-auto max-w-7xl py-[50px]">
      <SectionHeading
        eyebrow="For code lovers & creators"
        title={<>Free online tools for <span className="text-gradient">code lovers</span></>}
        description="CodeLove is a small home on the web for code lovers, creators and students: free online tools, free video tools, 3D models and games, all made by one developer and all free to use."
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

        {/* Quick links */}
        <Reveal delay={80}>
          <div className="h-full rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight">Free video tools</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {videoTools.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[var(--text-muted)] transition hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-[family-name:var(--font-display)] text-base font-bold tracking-tight">More from CodeLove</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-[var(--text-muted)] transition hover:text-primary">
                  All CodeLove tools
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-[var(--text-muted)] transition hover:text-primary">
                  Learning Center tutorials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--text-muted)] transition hover:text-primary">
                  CodeLove blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--text-muted)] transition hover:text-primary">
                  About Gowtham, the maker of CodeLove
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[var(--text-muted)] transition hover:text-primary">
                  Resource hub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-muted)] transition hover:text-primary">
                  Contact CodeLove
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Every guide and post, so each one is one click from the home page */}
      <Reveal className="mt-6">
        <div className="grid gap-8 rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] md:grid-cols-2">
          <nav aria-label="All Learning Center guides">
            <h3 className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight">All guides</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/learn/guide/${a.slug}`} className="text-[var(--text-muted)] transition hover:text-primary">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="All blog posts">
            <h3 className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight">All blog posts</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {blogs.map((b) => (
                <li key={b.slug}>
                  <Link href={`/blog/${b.slug}`} className="text-[var(--text-muted)] transition hover:text-primary">
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Reveal>
    </section>
  );
}
