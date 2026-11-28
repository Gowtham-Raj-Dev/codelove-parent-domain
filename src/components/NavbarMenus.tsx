"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, products, type Product } from "@/lib/data";
import Icon, { type IconName } from "./Icon";
import ProductLogo from "./ProductLogo";
import { TOOLS_META } from "./QuickToolsWorkbench";

type MenuKey = "tools" | "apps" | null;

type AppGroup = {
  title: string;
  icon: IconName;
  slugs: string[];
};

const APP_GROUPS: AppGroup[] = [
  {
    title: "Video & Motion",
    icon: "film",
    slugs: [
      "videocut",
      "videomaker",
      "videotogif",
      "videotoimages",
      "satisfying-video-maker",
      "utubeflow",
    ],
  },
  {
    title: "Converters & Web",
    icon: "layout",
    slugs: ["iloveconvert", "webly", "linkinbio", "javaplay"],
  },
  {
    title: "3D, Android & Games",
    icon: "box",
    slugs: ["apps", "models", "voltarc", "games"],
  },
];

function getHost(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function DesktopNavMenus() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const bySlug = new Map(products.map((p) => [p.slug, p]));

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const secondaryLinks = navLinks.filter(
    (l) => l.href !== "/tools" && l.href !== "/products"
  );

  return (
    <div ref={wrapRef} className="relative flex items-center gap-1">
      {/* Tools Dropdown */}
      <div className="relative">
        <button
          type="button"
          aria-expanded={openMenu === "tools"}
          onClick={() => setOpenMenu((m) => (m === "tools" ? null : "tools"))}
          className={`cursor-pointer inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition ${
            openMenu === "tools" || pathname?.startsWith("/tools")
              ? "bg-[var(--surface)] text-[var(--text)]"
              : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
          }`}
        >
          <span>Tools</span>
          <Icon
            name="chevronDown"
            size={14}
            className={`transition-transform duration-150 ${
              openMenu === "tools" ? "rotate-180 text-primary" : "opacity-70"
            }`}
          />
        </button>

        {openMenu === "tools" && (
          <div className="absolute left-0 top-full z-50 mt-3 w-[540px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-white/15 dark:bg-[#0d121d]">
            <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5 dark:border-white/10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Browser-Local Utilities (8)
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Zero file uploads — everything runs in your browser
                </p>
              </div>
              <Link
                href="/tools"
                onClick={() => setOpenMenu(null)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                Open Workbench <Icon name="arrowRight" size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {TOOLS_META.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.id === "image" ? "/tools" : `/tools?tab=${tool.id}`}
                  onClick={() => setOpenMenu(null)}
                  className="flex items-start gap-2.5 rounded-xl p-2.5 transition hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={tool.icon} size={15} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-semibold text-slate-900 dark:text-white">
                      {tool.label}
                    </span>
                    <span className="block truncate text-[11px] text-slate-500 dark:text-slate-400">
                      {tool.badge}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Studio Subdomains Dropdown */}
      <div className="relative">
        <button
          type="button"
          aria-expanded={openMenu === "apps"}
          onClick={() => setOpenMenu((m) => (m === "apps" ? null : "apps"))}
          className={`cursor-pointer inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition ${
            openMenu === "apps" || pathname?.startsWith("/products")
              ? "bg-[var(--surface)] text-[var(--text)]"
              : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
          }`}
        >
          <span>Studio Apps</span>
          <Icon
            name="chevronDown"
            size={14}
            className={`transition-transform duration-150 ${
              openMenu === "apps" ? "rotate-180 text-primary" : "opacity-70"
            }`}
          />
        </button>

        {openMenu === "apps" && (
          <div className="absolute -left-24 top-full z-50 mt-3 w-[680px] max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-white/15 dark:bg-[#0d121d]">
            <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5 dark:border-white/10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  CodeLove Subdomain Ecosystem ({products.length} Apps)
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Launch specialized video, converter, web, 3D &amp; game subdomains directly
                </p>
              </div>
              <Link
                href="/products"
                onClick={() => setOpenMenu(null)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                All Apps &amp; Guides <Icon name="arrowRight" size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {APP_GROUPS.map((group) => {
                const list = group.slugs
                  .map((s) => bySlug.get(s))
                  .filter((p): p is Product => Boolean(p));

                return (
                  <div key={group.title} className="space-y-1.5">
                    <p className="flex items-center gap-1.5 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <Icon name={group.icon} size={12} className="text-primary" />
                      {group.title}
                    </p>
                    {list.map((app) => (
                      <a
                        key={app.slug}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-center gap-2.5 rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                      >
                        <ProductLogo product={app} size={28} className="shrink-0" />
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1 truncate text-xs font-semibold text-slate-900 dark:text-white">
                            {app.name}
                            <Icon
                              name="arrowUpRight"
                              size={11}
                              className="opacity-40 transition group-hover:text-primary group-hover:opacity-100"
                            />
                          </span>
                          <span className="block truncate font-mono text-[10px] text-slate-500 dark:text-slate-400">
                            {getHost(app.url)}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Remaining standard navigation links */}
      {secondaryLinks.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={() => setOpenMenu(null)}
          className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
            pathname?.startsWith(l.href)
              ? "bg-[var(--surface)] text-[var(--text)]"
              : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function MobileNavMenus({ onClose }: { onClose: () => void }) {
  const [section, setSection] = useState<MenuKey>("tools");

  const secondaryLinks = navLinks.filter(
    (l) => l.href !== "/tools" && l.href !== "/products"
  );

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => setSection((s) => (s === "tools" ? null : "tools"))}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface)]"
      >
        <span>Built-in Tools (8)</span>
        <Icon
          name="chevronDown"
          size={16}
          className={`transition-transform ${section === "tools" ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      {section === "tools" && (
        <div className="space-y-1.5 px-2 pb-2">
          <div className="grid grid-cols-2 gap-1">
            {TOOLS_META.map((tool) => (
              <Link
                key={tool.id}
                href={tool.id === "image" ? "/tools" : `/tools?tab=${tool.id}`}
                onClick={onClose}
                className="flex items-center gap-2 rounded-lg bg-[var(--surface)] px-2.5 py-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                <Icon name={tool.icon} size={13} className="text-primary shrink-0" />
                <span className="truncate">{tool.shortLabel}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/tools"
            onClick={onClose}
            className="flex items-center justify-between rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary"
          >
            <span>Open Full Tools Workbench</span>
            <Icon name="arrowRight" size={13} />
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={() => setSection((s) => (s === "apps" ? null : "apps"))}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface)]"
      >
        <span>Studio Subdomains ({products.length})</span>
        <Icon
          name="chevronDown"
          size={16}
          className={`transition-transform ${section === "apps" ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      {section === "apps" && (
        <div className="space-y-1.5 px-2 pb-2">
          <div className="grid max-h-60 grid-cols-1 gap-1 overflow-y-auto">
            {products.map((app) => (
              <a
                key={app.slug}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between rounded-lg bg-[var(--surface)] px-3 py-2 text-xs"
              >
                <span className="flex items-center gap-2 font-medium text-[var(--text)]">
                  <ProductLogo product={app} size={20} />
                  {app.name}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-primary">
                  {getHost(app.url)} <Icon name="arrowUpRight" size={11} />
                </span>
              </a>
            ))}
          </div>
          <Link
            href="/products"
            onClick={onClose}
            className="flex items-center justify-between rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary"
          >
            <span>All {products.length} Apps &amp; Subdomain Guides</span>
            <Icon name="arrowRight" size={13} />
          </Link>
        </div>
      )}

      {secondaryLinks.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={onClose}
          className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
