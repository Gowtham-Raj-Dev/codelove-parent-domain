"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section id="newsletter" className="container-px mx-auto max-w-7xl scroll-mt-24 py-[50px]">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--surface-border)] bg-gradient-to-br from-primary via-secondary to-accent p-8 shadow-[var(--shadow-glow)] sm:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-20" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur">
              <Icon name="mail" size={14} /> Join 120,000+ subscribers
            </span>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Get the best of CodeLove in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              New product launches, fresh tutorials and curated tips — delivered occasionally, never as spam. Unsubscribe anytime.
            </p>

            {done ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur">
                <Icon name="check" size={20} />
                <span className="font-medium">You&apos;re in! Check your inbox to confirm.</span>
              </div>
            ) : (
              <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3.5 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur focus:border-white/50"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
                >
                  Subscribe <Icon name="arrowRight" size={16} />
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/70">
              By subscribing you agree to our Privacy Policy and Terms.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
