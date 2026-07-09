"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

/**
 * Scroll-pinned code editor.
 * As the tall wrapper scrolls, the inner window stays pinned to the viewport,
 * grows from small to full size, holds ("stops") at full size, then releases
 * so the page scrolls on to the next section.
 */
export default function AboutEditor({ toolCount }: { toolCount: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight; // scrollable distance while pinned
      if (total <= 0) {
        setProgress(1);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(scrolled / total);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Grow during the first 70% of the scroll, then hold at full size ("stop").
  const grow = Math.min(progress / 0.7, 1);
  const scale = 0.82 + grow * 0.18; // 0.82 → 1
  const opacity = 0.55 + Math.min(grow * 1.6, 1) * 0.45;
  const y = (1 - grow) * 40; // slides up slightly as it grows

  return (
    <section ref={wrapRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">
        {/* backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-1/2 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow-primary)] blur-[130px]"
            style={{ opacity: 0.35 + grow * 0.4 }}
          />
          <div className="absolute inset-0 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_72%)]" />
        </div>

        <div
          className="w-full max-w-3xl will-change-transform"
          style={{ transform: `translateY(${y}px) scale(${scale})`, opacity }}
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl"
              style={{ opacity: 0.5 + grow * 0.5 }}
            />

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] font-mono text-[13px] leading-relaxed shadow-2xl sm:text-sm">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex items-center gap-2 text-xs text-slate-400">
                  <Icon name="fileText" size={13} /> gowthamraj.ts
                </span>
                <span className="ml-auto hidden rounded-md bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-500 sm:block">
                  read-only
                </span>
              </div>

              {/* Code body */}
              <div className="overflow-x-auto px-5 py-5 text-slate-300">
                <pre className="whitespace-pre">
<span className="select-none text-slate-600">1  </span><span className="text-violet-400">const</span> <span className="text-sky-300">maker</span> <span className="text-slate-500">=</span> <span className="text-slate-500">{"{"}</span>
{"\n"}<span className="select-none text-slate-600">2  </span>{"  "}<span className="text-sky-400">name</span><span className="text-slate-500">:</span> <span className="text-emerald-400">&quot;Gowthamraj&quot;</span><span className="text-slate-500">,</span>
{"\n"}<span className="select-none text-slate-600">3  </span>{"  "}<span className="text-sky-400">role</span><span className="text-slate-500">:</span> <span className="text-emerald-400">&quot;Solo developer &amp; maker&quot;</span><span className="text-slate-500">,</span>
{"\n"}<span className="select-none text-slate-600">4  </span>{"  "}<span className="text-sky-400">building</span><span className="text-slate-500">:</span> <span className="text-emerald-400">&quot;CodeLove&quot;</span><span className="text-slate-500">,</span>
{"\n"}<span className="select-none text-slate-600">5  </span>{"  "}<span className="text-sky-400">tools</span><span className="text-slate-500">:</span> <span className="text-orange-400">{toolCount}</span><span className="text-slate-500">,</span>
{"\n"}<span className="select-none text-slate-600">6  </span>{"  "}<span className="text-sky-400">values</span><span className="text-slate-500">:</span> <span className="text-slate-500">[</span><span className="text-emerald-400">&quot;fast&quot;</span><span className="text-slate-500">,</span> <span className="text-emerald-400">&quot;free&quot;</span><span className="text-slate-500">,</span> <span className="text-emerald-400">&quot;honest&quot;</span><span className="text-slate-500">],</span>
{"\n"}<span className="select-none text-slate-600">7  </span>{"  "}<span className="text-sky-400">openSource</span><span className="text-slate-500">:</span> <span className="text-rose-400">true</span><span className="text-slate-500">,</span>
{"\n"}<span className="select-none text-slate-600">8  </span>{"  "}<span className="text-sky-400">status</span><span className="text-slate-500">:</span> <span className="text-emerald-400">&quot;shipping&quot;</span> <span className="text-slate-600">{"// one release at a time"}</span>
{"\n"}<span className="select-none text-slate-600">9  </span><span className="text-slate-500">{"}"}</span><span className="text-slate-500">;</span>
{"\n"}<span className="select-none text-slate-600">10 </span><span className="inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] animate-pulse bg-primary" />
                </pre>
              </div>

              {/* Status bar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 bg-white/[0.03] px-5 py-2.5 text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> online
                </span>
                <span>{toolCount} tools live</span>
                <span>TypeScript</span>
                <a href="https://gowtham.codelove.in" className="ml-auto inline-flex items-center gap-1 text-slate-300 transition hover:text-white">
                  gowtham.codelove.in <Icon name="arrowUpRight" size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
