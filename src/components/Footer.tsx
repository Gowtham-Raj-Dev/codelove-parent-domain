import Link from "next/link";
import Logo from "./Logo";
import HeartButton from "./HeartButton";
import { ContactLinks } from "./ContactLinks";
import { footerColumns } from "@/lib/data";

// Verified product apps & studios in the CodeLove ecosystem.
const networkSites = [
  { label: "Free 3D models (GLB) library", href: "https://models.codelove.in" },
  { label: "ILoveConvert: 54 browser utilities & converters", href: "https://iloveconvert.codelove.in" },
  { label: "VOLTARC: instant HTML5 & 3D cloud arcade", href: "https://voltarc.codelove.in" },
  { label: "Satisfying Video Maker: physics & ASMR studio", href: "https://satisfying-video-maker.codelove.in" },
  { label: "Webly: website analytics, SEO & problem fixer", href: "https://webly.codelove.in" },
  { label: "Free 3D browser games", href: "https://games.codelove.in" },
  { label: "Link in bio page builder", href: "https://linkinbio.codelove.in" },
  { label: "Video to GIF converter", href: "https://videotogif.codelove.in" },
  { label: "Video to images frame extractor", href: "https://videotoimages.codelove.in" },
  { label: "Video Cut: video to YouTube Shorts cutter", href: "https://videocut.codelove.in" },
  { label: "Video Maker: AI cartoon videos from a script", href: "https://videomaker.codelove.in" },
  { label: "UTubeFlow: free YouTube automation", href: "https://utubeflow.codelove.in" },
  { label: "JavaPlay: old Java phone games emulator", href: "https://javaplay.codelove.in" },
  { label: "CodeLove Apps for Android", href: "https://apps.codelove.in" },
  { label: "Gowtham, creative web developer portfolio", href: "https://gowtham.codelove.in" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--surface-border)] bg-[var(--bg-elevated)]">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[40rem] -translate-x-1/2 rounded-full bg-[var(--glow-primary)] blur-[120px]" />
      <div className="container-px mx-auto max-w-7xl py-[50px]">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" aria-label="CodeLove home" className="inline-flex items-center">
              <Logo variant="footer" className="h-9" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              CodeLove builds browser-local utilities, creator video editors, interactive 3D tools, and practical engineering tutorials with zero paywalls.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[var(--text-muted)] transition hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <nav aria-label="CodeLove network" className="mt-12 border-t border-[var(--surface-border)] pt-8">
          <h3 className="text-sm font-semibold">The CodeLove network</h3>
          <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {networkSites.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[var(--text-muted)] transition hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[var(--surface-border)] pt-8 sm:flex-row">
          <div className="flex items-center text-sm text-[var(--text-faint)]">
            <span>&copy; {new Date().getFullYear()} CodeLove. All rights reserved.</span>
          </div>
          <p className="flex flex-wrap items-center justify-center text-sm text-[var(--text-faint)]">
            Built with <HeartButton /> by
            <a
              href="https://gowtham.codelove.in"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium text-[var(--text)] transition hover:text-primary"
            >
              Gowtham
            </a>
            <span className="mx-1.5">·</span>
            <Link href="/" className="font-medium text-[var(--text)] transition hover:text-primary">
              CodeLove
            </Link>
            <span className="mx-1.5">·</span>
            <ContactLinks className="text-[var(--text)]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
