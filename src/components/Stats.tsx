"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function StatItem({ value, suffix, label, active }: (typeof stats)[number] & { active: boolean }) {
  const current = useCountUp(value, active);
  const display = value % 1 !== 0 ? current.toFixed(1) : Math.round(current).toString();
  return (
    <div className="text-center">
      <div className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="text-gradient">{display}</span>
        <span className="text-gradient">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-[var(--text-muted)]">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="container-px relative z-10 mx-auto -mt-4 max-w-6xl">
      <div
        ref={ref}
        className="surface grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-[50px] shadow-[var(--shadow-soft)] sm:px-10 md:grid-cols-5 md:gap-y-0"
      >
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}
