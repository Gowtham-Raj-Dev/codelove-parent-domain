"use client";

import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { faqs } from "@/lib/data";

const groups = ["All", ...Array.from(new Set(faqs.map((f) => f.group)))];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-soft)] transition">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--surface-border)] text-[var(--text-muted)] transition-transform duration-300 ${
            open ? "rotate-180 bg-gradient-to-br from-primary to-secondary text-white" : ""
          }`}
        >
          <Icon name="chevronDown" size={16} />
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--text-muted)]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [group, setGroup] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = useMemo(
    () => faqs.filter((f) => group === "All" || f.group === group),
    [group]
  );

  const mid = Math.ceil(filtered.length / 2);
  const columns = [filtered.slice(0, mid), filtered.slice(mid)];

  return (
    <section id="faq" className="container-px mx-auto max-w-6xl scroll-mt-24 py-[50px]">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Answers to <span className="text-gradient">40 common questions</span></>}
        description="Everything you might want to know about CodeLove — from products and privacy to legal, technical and support. Filter by topic to find what you need fast."
      />

      <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => {
              setGroup(g);
              setOpenIdx(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              group === g
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[var(--shadow-glow)]"
                : "border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {g}
          </button>
        ))}
      </Reveal>

      <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
        {columns.map((col, ci) => (
          <div key={ci} className="grid gap-4">
            {col.map((f, i) => {
              const idx = ci * mid + i;
              return (
                <Item
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={openIdx === idx}
                  onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
