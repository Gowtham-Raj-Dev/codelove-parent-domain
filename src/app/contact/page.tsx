import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact · CodeLove",
  description:
    "Get in touch with the CodeLove team — questions, feedback, bug reports, partnerships or press. We read every message.",
  alternates: { canonical: "/contact" },
};

const CONTACT_EMAIL = "support@codelove.in";

const channels: { icon: Parameters<typeof Icon>[0]["name"]; title: string; text: string }[] = [
  { icon: "mail", title: "General & support", text: "Questions about a tool, feedback or anything else." },
  { icon: "zap", title: "Bugs & issues", text: "Something broken? Send steps to reproduce and I'll jump on it." },
  { icon: "briefcase", title: "Partnerships & press", text: "Collaborations, media enquiries and business chats." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-[50px] sm:pt-36 sm:pb-[50px]">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-secondary opacity-15 blur-[120px]" />
            <div className="absolute inset-0 bg-grid opacity-60" />
          </div>

          <div className="container-px mx-auto max-w-3xl">
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
                I&apos;d love to <span className="text-gradient">hear from you</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">
                CodeLove is a one-person project, and I read every message myself. Whether it&apos;s a bug, a
                feature idea or just hello — reach out and I&apos;ll get back to you as soon as I can.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Channels */}
        <section className="container-px mx-auto max-w-7xl pb-[50px]">
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
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-bold">{c.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{c.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
                    {CONTACT_EMAIL} <Icon name="arrowUpRight" size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Direct email band */}
        <section className="container-px mx-auto max-w-7xl pb-[50px]">
          <Reveal>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-10 text-center shadow-[var(--shadow-soft)] sm:p-14">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[var(--shadow-glow)]">
                <Icon name="mail" size={22} />
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                Prefer email?
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
                Drop me a line directly and I&apos;ll reply personally, usually within a couple of days.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <Icon name="mail" size={16} /> {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
