import Link from "next/link";
import Logo from "./Logo";
import HeartButton from "./HeartButton";
import { footerColumns } from "@/lib/data";

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
              Free online tools for creators and developers — a media downloader, video and image tools, a
              link-in-bio builder and a 3D model library.
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--surface-border)] pt-8 sm:flex-row">
          <div className="flex items-center text-sm text-[var(--text-faint)]">
            <span>&copy; {new Date().getFullYear()} CodeLove. All rights reserved.</span>
          </div>
          <p className="flex items-center text-sm text-[var(--text-faint)]">
            Developed with <HeartButton /> by <span className="font-medium text-[var(--text)] ml-1">CodeLove.in</span> <span className="mx-1.5">·</span> Created by Gowtham
          </p>
        </div>
      </div>
    </footer>
  );
}
