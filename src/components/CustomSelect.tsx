"use client";

import { useEffect, useId, useRef, useState } from "react";
import Icon from "./Icon";

export type SelectOption<T extends string | number> = {
  value: T;
  label: string;
  hint?: string;
};

type CustomSelectProps<T extends string | number> = {
  id?: string;
  label?: string;
  value: T;
  onChange: (value: T) => void;
  options: SelectOption<T>[];
  disabled?: boolean;
  className?: string;
};

export default function CustomSelect<T extends string | number>({
  id,
  label,
  value,
  onChange,
  options,
  disabled = false,
  className = "",
}: CustomSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const fallbackId = useId();
  const controlId = id ?? fallbackId;

  const selected = options.find((opt) => opt.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${open ? "z-40" : "z-10"} ${className}`}>
      {label && (
        <label
          htmlFor={controlId}
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]"
        >
          {label}
        </label>
      )}
      <button
        id={controlId}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left text-sm transition outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
          open
            ? "border-primary bg-[var(--bg-elevated)] ring-2 ring-primary/20"
            : "border-[var(--surface-border)] bg-[var(--bg-elevated)] hover:border-primary/50"
        }`}
      >
        <span className="min-w-0 truncate font-medium text-[var(--text)]">
          {selected?.label ?? String(value)}
        </span>
        <Icon
          name="chevronDown"
          size={16}
          className={`shrink-0 text-[var(--text-faint)] transition-transform duration-200 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={controlId}
          className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-64 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:border-white/15 dark:bg-[#0d121d] dark:ring-white/10"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li key={String(opt.value)} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    isSelected
                      ? "bg-primary/12 font-semibold text-primary dark:bg-primary/20"
                      : "text-[var(--text)] hover:bg-slate-100 dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate">{opt.label}</span>
                    {opt.hint && (
                      <span className="block truncate text-[11px] font-normal text-[var(--text-faint)]">
                        {opt.hint}
                      </span>
                    )}
                  </span>
                  {isSelected && <Icon name="check" size={15} className="shrink-0 text-primary" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
