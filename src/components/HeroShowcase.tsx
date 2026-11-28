"use client";

import { useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/lib/data";
import Icon from "./Icon";
import ProductLogo from "./ProductLogo";

type ViewMode = "both" | "desktop" | "mobile";

const FEATURED_SLUGS = [
  "voltarc",
  "apps",
  "satisfying-video-maker",
  "webly",
  "iloveconvert",
  "videocut",
  "models",
  "videomaker",
];

export default function HeroShowcase() {
  const featuredList = FEATURED_SLUGS.map((slug) =>
    products.find((p) => p.slug === slug)
  ).filter((p): p is Product => Boolean(p));

  const [selectedSlug, setSelectedSlug] = useState<string>(
    featuredList[0]?.slug ?? "voltarc"
  );
  const [viewMode, setViewMode] = useState<ViewMode>("both");

  const active =
    featuredList.find((p) => p.slug === selectedSlug) ?? featuredList[0];
  if (!active) return null;

  const desktopSrc = active.screens[0]?.src ?? active.image ?? "/og.png";
  const phoneSrc = active.phone || desktopSrc;

  return (
    <div className="mx-auto mt-10 max-w-5xl text-left">
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-white/15 dark:bg-[#06070a] dark:shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Top app switcher bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-slate-50/90 px-4 py-3 dark:border-white/10 dark:bg-[#0c0e14]">
          <div className="flex flex-wrap items-center gap-1.5">
            {featuredList.map((item) => {
              const isCurrent = item.slug === active.slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setSelectedSlug(item.slug)}
                  className={`cursor-pointer inline-flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition ${
                    isCurrent
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-950"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  <ProductLogo
                    product={item}
                    size={16}
                    className="!rounded-[22%] !shadow-none !ring-0"
                  />
                  <span>{item.name}</span>
                  {item.status === "New" && (
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isCurrent ? "bg-emerald-400" : "bg-primary"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop / Mobile / Both Switcher */}
          <div
            role="group"
            aria-label="Preview device layout"
            className="inline-flex rounded-xl border border-slate-200 bg-white p-0.5 text-xs dark:border-white/15 dark:bg-black/60"
          >
            {(
              [
                { id: "both", label: "Desktop + Mobile" },
                { id: "desktop", label: "Desktop" },
                { id: "mobile", label: "Mobile" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setViewMode(opt.id)}
                className={`cursor-pointer rounded-lg px-2.5 py-1 font-medium transition ${
                  viewMode === opt.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Neutral Monochrome Stage Canvas (pure white on light theme, pure black on dark theme) */}
        <div className="relative bg-white p-4 sm:p-6 dark:bg-[#040507]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px] opacity-35 dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] dark:opacity-30"
          />

          <div className="relative z-10 flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-end">
            {viewMode !== "mobile" && (
              <div
                className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.09)] dark:border-white/15 dark:bg-[#0b0d13] dark:shadow-[0_24px_55px_rgba(0,0,0,0.85)] ${
                  viewMode === "both" ? "lg:flex-1" : "max-w-4xl"
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/85 px-3.5 py-2 dark:border-white/10 dark:bg-[#12151f]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/85" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/85" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/85" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-black/60 dark:text-slate-300">
                    <Icon name="lock" size={10} className="text-emerald-500" />
                    <span>{active.domain}</span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Desktop
                  </span>
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-50 dark:bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={desktopSrc}
                    alt={`${active.name} desktop workspace`}
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            )}

            {viewMode !== "desktop" && (
              <div
                className={`shrink-0 ${
                  viewMode === "mobile"
                    ? "flex w-full flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10"
                    : "w-[180px] sm:w-[205px]"
                }`}
              >
                <div
                  className={`${
                    viewMode === "mobile" ? "w-[220px] sm:w-[238px]" : "w-full"
                  } overflow-hidden rounded-[26px] border-[5px] border-slate-900 bg-slate-950 p-[3px] shadow-[0_20px_48px_rgba(0,0,0,0.3)] ring-1 ring-black/10 dark:border-zinc-700 dark:bg-black dark:shadow-[0_24px_56px_rgba(0,0,0,0.9)] dark:ring-white/15`}
                >
                  <div
                    aria-hidden
                    className="mx-auto my-1 h-1.5 w-10 rounded-full bg-slate-800 dark:bg-zinc-800"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={phoneSrc}
                    alt={`${active.name} mobile view`}
                    width={390}
                    height={844}
                    className="aspect-[390/820] w-full rounded-[19px] object-cover object-top"
                  />
                </div>

                {viewMode === "mobile" && (
                  <div className="max-w-sm space-y-3 text-center md:text-left">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/15 dark:bg-white/10 dark:text-slate-200">
                      <Icon name="smartphone" size={13} className="text-primary" />
                      Mobile Ready ({active.domain})
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                      {active.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                      {active.description}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom action summary bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 dark:border-white/10 dark:bg-[#0c0e14]">
          <div className="flex items-center gap-3 min-w-0">
            <ProductLogo product={active} size={32} />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{active.name}</span>
                <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300">
                  {active.category}
                </span>
              </div>
              <p className="truncate text-xs text-[var(--text-muted)]">
                {active.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={`/products/${active.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition hover:border-primary/40 hover:text-slate-900 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:text-white"
            >
              Features &amp; Guide
            </Link>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              {active.cta ?? `Open ${active.name}`}
              <Icon name="arrowUpRight" size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
