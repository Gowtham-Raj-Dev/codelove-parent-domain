"use client";

import { useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import Icon from "./Icon";
import { navLinks, products, articles } from "@/lib/data";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    const id = requestAnimationFrame(sync);
    return () => cancelAnimationFrame(id);
  }, []);

  const toggle = () => {
    const next = !dark;

    if (!document.startViewTransition) {
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("codelove-theme", next ? "dark" : "light");
      } catch {}
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("codelove-theme", next ? "dark" : "light");
        } catch {}
      });
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-muted)] outline-none transition-all duration-300 hover:bg-[var(--surface-border)] hover:text-[var(--text)] hover:shadow-[var(--shadow-soft)] focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className={`absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`}>
        <Icon name="sun" size={18} />
      </div>
      <div className={`absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${dark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
        <Icon name="moon" size={18} />
      </div>
    </button>
  );
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const prod = products
      .filter(
        (p) =>
          !term ||
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
      )
      .slice(0, 5);
    const arts = articles
      .filter(
        (a) =>
          !term ||
          a.title.toLowerCase().includes(term) ||
          a.category.toLowerCase().includes(term)
      )
      .slice(0, 5);
    return { prod, arts };
  }, [q]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search CodeLove"
    >
      <button
        aria-label="Close search"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[var(--surface-border)] px-4">
          <Icon name="search" size={20} className="text-[var(--text-faint)]" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, tools and articles…"
            className="w-full bg-transparent py-4 text-base outline-none placeholder:text-[var(--text-faint)]"
          />
          <kbd className="hidden rounded-md border border-[var(--surface-border)] px-1.5 py-0.5 text-[10px] text-[var(--text-faint)] sm:block">
            ESC
          </kbd>
        </div>
        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.prod.length > 0 && (
            <div className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Products
            </div>
          )}
          {results.prod.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[var(--surface)]"
            >
              <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${p.gradient} text-white`}>
                <Icon name={p.icon} size={18} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{p.name}</span>
                <span className="block truncate text-xs text-[var(--text-faint)]">{p.domain}</span>
              </span>
              <Icon name="arrowUpRight" size={16} className="ml-auto text-[var(--text-faint)]" />
            </Link>
          ))}
          {results.arts.length > 0 && (
            <div className="px-2 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Articles
            </div>
          )}
          {results.arts.map((a) => (
            <Link
              key={a.title}
              href={`/blog/${a.slug}`}
              onClick={onClose}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[var(--surface)]"
            >
              <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${a.gradient} text-white`}>
                <Icon name={a.icon} size={16} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{a.title}</span>
                <span className="block truncate text-xs text-[var(--text-faint)]">{a.category} · {a.readingTime}</span>
              </span>
            </Link>
          ))}
          {results.prod.length === 0 && results.arts.length === 0 && (
            <div className="px-4 py-[50px] text-center text-sm text-[var(--text-faint)]">
              No results for “{q}”. Try “video”, “pdf” or “base64”.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="container-px mx-auto max-w-7xl">
          <div
            className={`flex items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4 ${
              scrolled
                ? "border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link href="/" className="flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-[var(--shadow-glow)]">
                <Icon name="heart" size={18} />
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
                Code<span className="text-gradient">Love</span>
              </span>
            </Link>
            </div>

            {/* Desktop nav */}

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 lg:flex-1">
              <button
                onClick={() => setSearch(true)}
                aria-label="Search"
                className="cursor-pointer grid h-10 w-10 place-items-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:text-[var(--text)] hover:shadow-sm"
              >
                <Icon name="search" size={18} />
              </button>
              <ThemeToggle />
              <Link
                href="/products"
                className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110 sm:flex"
              >
                Get Started
                <Icon name="arrowRight" size={16} />
              </Link>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-muted)] lg:hidden"
              >
                <Icon name={open ? "close" : "menu"} size={20} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="mt-2 overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-2 shadow-[var(--shadow-soft)] lg:hidden">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-white"
              >
                Get Started <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          )}
        </div>
      </header>

      {search && <SearchModal onClose={() => setSearch(false)} />}
    </>
  );
}
