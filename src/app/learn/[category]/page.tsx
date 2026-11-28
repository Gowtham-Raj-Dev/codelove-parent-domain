import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ArticleCard from "@/components/ArticleCard";
import { categories, activeCategories, getCategory, articlesByCategory } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

const CATEGORY_NOTES: Record<string, { overview: string; tips: string[]; toolHref: string; toolLabel: string }> = {
  video: {
    overview:
      "Digital video quality comes down to three controllable choices: container format (MP4, WebM, MOV), codec efficiency (H.264, HEVC, AV1), and target bitrate. Understanding how keyframes, audio tracks, and frame rate affect file weight lets you publish crisp clips and GIFs without uploading private footage to slow third-party servers.",
    tips: [
      "Keep MP4 + H.264 + AAC for maximum compatibility across browsers, phones, and social apps.",
      "Crop and resize clips before converting to animated GIF so pixels are never wasted on empty edges.",
      "Target 10–15 fps for GIFs and 8–10 Mbps for fast-motion 1080p vertical clips.",
    ],
    toolHref: "/tools",
    toolLabel: "Open Video Bitrate Calculator",
  },
  image: {
    overview:
      "Images make up the largest share of page weight on modern websites. Choosing the right codec (lossy WebP for photography, lossless WebP or PNG for crisp UI text and transparency) alongside right-sized pixel dimensions dramatically improves load speed and Core Web Vitals without visible artifacts.",
    tips: [
      "Crop to the final aspect ratio first, resize to display width second, and compress last.",
      "Use quality 75–85% in WebP or JPG for web hero banners and blog thumbnails.",
      "Reserve PNG for pixel-exact logos or screenshots before downstream conversion.",
    ],
    toolHref: "/tools",
    toolLabel: "Open Built-In Image Compressor",
  },
  creator: {
    overview:
      "Modern creator publishing blends clean landing hubs with strong technical performance. Whether organizing destinations behind a single bio link or auditing pages for search indexing, Structured Data, clean canonical tags, and fast mobile typography directly improve discoverability and conversion.",
    tips: [
      "Put your single highest-priority call to action at the top of any Link in Bio layout.",
      "Audit every published page for unique titles (50–60 chars), 150-char descriptions, and valid image URLs.",
      "Use fast browser utilities instead of bloated multi-step SaaS logins whenever local APIs suffice.",
    ],
    toolHref: "/products/webly",
    toolLabel: "Explore Webly SEO & Link in Bio",
  },
  "3d-models": {
    overview:
      "Real-time 3D on the web and in mobile game engines relies on compact binary glTF (.glb) containers that bundle geometry, PBR materials, textures, and skeletal animations in one portable file. Always verify polygon budget and open license terms before shipping assets in production.",
    tips: [
      "Inspect triangle counts and texture sizes in a live 3D viewer prior to downloading entire scene kits.",
      "Prefer shared low-poly asset collections so shading and proportions remain coherent across levels.",
      "Track CC BY attribution notices in a project credits file from day one.",
    ],
    toolHref: "/products/models",
    toolLabel: "Browse 3D Models Library",
  },
  youtube: {
    overview:
      "Consistent video publishing combines repeatable formatting with smart workflow automation: splitting long horizontal recordings into 9:16 vertical Shorts with Blur Fill framing, preserving the right dubbed audio track, and maintaining a predictable release cadence.",
    tips: [
      "Keep headlines and talking subjects inside the central 9:16 safe zone clear of bottom UI captions.",
      "Review generated AI scripts and timing line by line before voice rendering to avoid awkward pauses.",
      "Export multi-part clips in clean folders or queue them straight into scheduled time slots.",
    ],
    toolHref: "/products/videocut",
    toolLabel: "Open Video Cut & Video Maker",
  },
  games: {
    overview:
      "Browser gaming spans modern hardware-accelerated 3D WebGL experiences alongside nostalgic J2ME keypad classics preserved cleanly in the browser. Good orientation framing, touch-friendly controls, and instant loading make casual arcade sessions accessible on both laptops and mobile devices.",
    tips: [
      "Press sound unlock / focus controls inside embedded arcade stages when browsers pause WebAudio autoplay.",
      "Use portrait theater framing on desktop when previewing mobile-first vertical games.",
      "Check open-license and publisher notices when archiving classic J2ME .jar titles.",
    ],
    toolHref: "/products/voltarc",
    toolLabel: "Explore VOLTARC & 3D Games",
  },
};

/* Pre-render every category page at build time. */
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Category not found · CodeLove" };

  const description = `${cat.blurb} Browse ${cat.title.toLowerCase()} tutorials, explainers and guides in the CodeLove Learning Center.`;

  return pageMetadata({
    title: `${cat.title} Tutorials & Guides | Learning Center`,
    description,
    path: `/learn/${cat.slug}`,
    keywords: [
      "CodeLove",
      "codelove",
      cat.title,
      `${cat.title} tutorials`,
      `${cat.title} guides`,
      "CodeLove Learning Center",
      "how-to guides",
    ],
    index: articlesByCategory(cat.title).length > 0,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const posts = articlesByCategory(cat.title);
  const others = activeCategories.filter((c) => c.slug !== cat.slug);
  const note = CATEGORY_NOTES[cat.slug];

  return (
    <>
      <Navbar />
      <main className="theme-learn">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-12 sm:pt-36">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className={`absolute -left-24 top-6 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br ${cat.gradient} opacity-20 blur-[120px]`} />
            <div className="absolute inset-0 bg-dots opacity-70 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
          </div>

          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
                <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <Link href="/learn" className="transition hover:text-[var(--text)]">Learning Center</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <span className="text-[var(--text)]">{cat.title}</span>
              </nav>
            </Reveal>

            <Reveal className="max-w-3xl">
              <span className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${cat.gradient} text-white shadow-[var(--shadow-glow)]`}>
                <Icon name={cat.icon} size={30} />
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                {cat.title} <span className="theme-text-gradient">tutorials &amp; guides</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                {cat.blurb} Explore clear, practical articles written and reviewed alongside real CodeLove tools.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TOPIC EDITORIAL OVERVIEW */}
        {note && (
          <section className="container-px mx-auto max-w-7xl pb-10">
            <div className="grid gap-6 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1.2fr_0.8fr] sm:p-8">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight sm:text-2xl">
                  Key principles in {cat.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                  {note.overview}
                </p>
                <Link
                  href={note.toolHref}
                  className="theme-grad mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  {note.toolLabel} <Icon name="arrowRight" size={14} />
                </Link>
              </div>
              <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">Quick Checklist</p>
                <ul className="mt-3 space-y-2.5 text-sm text-[var(--text-muted)]">
                  {note.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLES */}
        <section className="container-px mx-auto max-w-7xl pb-[50px] pt-4 sm:pb-[50px]">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 3) * 70}>
                  <ArticleCard article={a} basePath="/learn/guide" />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mx-auto max-w-lg rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-12 text-center shadow-[var(--shadow-soft)]">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--surface)] text-[var(--text-faint)]">
                  <Icon name={cat.icon} size={26} />
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold">
                  Fresh {cat.title} guides are on the way
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  We&apos;re writing in-depth {cat.title.toLowerCase()} documentation. Meanwhile, explore our full blog and interactive tools.
                </p>
                <Link
                  href="/blog"
                  className="theme-grad mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_var(--t-solid)] transition hover:-translate-y-0.5"
                >
                  Read the blog <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </Reveal>
          )}
        </section>

        {/* OTHER TOPICS */}
        <section className="container-px mx-auto max-w-7xl pb-[50px]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              Explore other topics
            </h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/learn/${c.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--surface-border)] bg-[var(--bg-elevated)] py-2 pl-2 pr-4 text-sm font-medium shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--t-solid)_35%,transparent)]"
              >
                <span className={`grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${c.gradient} text-white`}>
                  <Icon name={c.icon} size={14} />
                </span>
                {c.title}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
