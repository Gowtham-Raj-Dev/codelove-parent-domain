import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — Support, Bug Reports & Partnerships",
  description:
    "Reach the CodeLove team directly for support, bug reports, licensing questions, corrections, or partnerships.",
  path: "/contact",
});

const CONTACT_EMAIL = "support@codelove.in";

const channels: { icon: Parameters<typeof Icon>[0]["name"]; title: string; text: string }[] = [
  { icon: "mail", title: "General support", text: "Questions about tools, guides, account-free workflows, or browser compatibility." },
  { icon: "zap", title: "Bug reports & corrections", text: "Broken page, encoding glitch, or article error? Share steps to reproduce so we can fix it fast." },
  { icon: "briefcase", title: "Partnerships & licensing", text: "3D asset attribution questions, game catalog notices, media enquiries, and collaborations." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-10 sm:pt-36">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-15 blur-[120px]" />
            <div className="absolute inset-0 bg-grid opacity-60" />
          </div>

          <div className="container-px mx-auto max-w-4xl">
            <Reveal className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-[var(--text-faint)]">
                <Link href="/" className="transition hover:text-[var(--text)]">Home</Link>
                <Icon name="chevronDown" size={14} className="-rotate-90" />
                <span className="text-[var(--text)]">Contact</span>
              </nav>
            </Reveal>

            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                Get in touch
              </span>
              <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                Direct support from <span className="text-gradient">the maker</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">
                CodeLove is independently developed and maintained by Gowthamraj in India. Every support message,
                article correction, and bug report is read personally — typical response time is within 1–2 business days.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-7xl pb-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-[var(--shadow-glow)]">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold">{c.title}</h2>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{c.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    {CONTACT_EMAIL} <Icon name="arrowUpRight" size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-px mx-auto max-w-7xl pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <ContactForm supportEmail={CONTACT_EMAIL} />

            <aside className="space-y-5 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                Helpful details for faster fixes
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Because CodeLove utilities run locally inside your browser without storing uploaded files on a server, we
                cannot look up session logs automatically. Including these details lets us reproduce browser issues quickly:
              </p>
              <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Exact page URL (e.g. codelove.in/tools or a guide slug).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Device &amp; browser (Chrome, Edge, Safari, Android, iOS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Approximate file type and size if a conversion stalled.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>Links to review for copyright, asset credit, or policy notices.</span>
                </li>
              </ul>

              <div className="border-t border-[var(--surface-border)] pt-4 text-xs text-[var(--text-muted)]">
                <p>
                  Direct email:{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p className="mt-1">Response window: Monday–Saturday, within 24–48 hours.</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
