import type { Product } from "@/lib/data";

type PreviewMode = "both" | "desktop" | "mobile";

type DevicePreviewFrameProps = {
  product: Pick<Product, "name" | "domain" | "status" | "image" | "screens" | "phone">;
  featured?: boolean;
  mode?: PreviewMode;
  className?: string;
};

export default function DevicePreviewFrame({
  product,
  featured = false,
  mode = "both",
  className = "",
}: DevicePreviewFrameProps) {
  const isLive = product.status !== "Soon";
  const statusLabel = product.status === "Soon" ? "Coming soon" : product.status;
  const desktopSrc = product.screens[0]?.src ?? product.image ?? "/og.png";
  const phoneSrc = product.phone || desktopSrc;

  return (
    <div
      className={`relative overflow-hidden border-b border-slate-200/80 bg-slate-50 dark:border-white/10 dark:bg-[#050507] ${
        featured ? "lg:w-[46%] lg:border-b-0 lg:border-r" : ""
      } ${className}`}
    >
      {/* Subtle monochrome architectural dot pattern — crisp white in light mode, pure black in dark mode */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] dark:opacity-35"
      />

      <div
        className={`relative flex aspect-[4/3] w-full items-center justify-center p-3.5 sm:p-4 ${
          featured ? "lg:aspect-auto lg:h-full lg:min-h-[20rem]" : ""
        }`}
      >
        {mode === "mobile" ? (
          /* Standalone centered mobile phone frame */
          <div className="relative flex h-full max-h-[280px] items-center justify-center py-1">
            <div className="relative aspect-[390/844] h-full overflow-hidden rounded-[22px] border-[5px] border-slate-900 bg-slate-950 p-[2px] shadow-[0_18px_40px_rgba(0,0,0,0.28)] ring-1 ring-black/10 dark:border-zinc-700 dark:bg-black dark:shadow-[0_20px_48px_rgba(0,0,0,0.8)] dark:ring-white/15">
              <div
                aria-hidden
                className="mx-auto my-1 h-1 w-8 rounded-full bg-slate-800 dark:bg-zinc-800"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={phoneSrc}
                alt={`${product.name} mobile view`}
                width={390}
                height={844}
                loading="lazy"
                decoding="async"
                className="h-[calc(100%-10px)] w-full rounded-[15px] object-cover object-top"
              />
            </div>
          </div>
        ) : (
          /* Desktop browser mockup (left/top) with optional unclipped Mobile phone frame (bottom/right) */
          <div className="relative h-full w-full">
            {/* Desktop Window */}
            <div
              className={`relative overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-transform duration-500 group-hover:scale-[1.015] dark:border-white/15 dark:bg-[#0b0d12] dark:shadow-[0_16px_38px_rgba(0,0,0,0.72)] ${
                mode === "desktop" ? "h-full w-full" : "w-[84%] max-w-[92%]"
              }`}
            >
              {/* Clean macOS-style browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-slate-200/80 bg-slate-100/90 px-2.5 py-1.5 dark:border-white/10 dark:bg-[#11141c]">
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-zinc-600" />
                <span className="ml-1.5 truncate rounded bg-white/80 px-2 py-0.5 font-mono text-[9px] text-slate-500 dark:bg-black/50 dark:text-slate-400">
                  {product.domain}
                </span>
              </div>

              <div className="aspect-[16/10] w-full overflow-hidden bg-white dark:bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={desktopSrc}
                  alt={`${product.name} desktop interface`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Mobile Frame — strictly inset inside right/bottom padding so zero edge clipping */}
            {mode === "both" && (
              <div className="absolute bottom-0 right-0 z-10 w-[25%] min-w-[72px] max-w-[112px] transition-transform duration-500 group-hover:-translate-y-1">
                <div className="overflow-hidden rounded-[15px] border-[3.5px] border-slate-900 bg-slate-950 p-[2px] shadow-[0_14px_32px_rgba(0,0,0,0.34)] ring-1 ring-white/40 dark:border-zinc-700 dark:bg-black dark:shadow-[0_18px_42px_rgba(0,0,0,0.85)] dark:ring-white/15">
                  <div
                    aria-hidden
                    className="mx-auto my-0.5 h-1 w-5 rounded-full bg-slate-800 dark:bg-zinc-800"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={phoneSrc}
                    alt={`${product.name} mobile interface`}
                    width={390}
                    height={844}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[390/820] w-full rounded-[10px] object-cover object-top"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Theme-neutral Status Pill — placed cleanly bottom-left so chrome bar stays unobscured */}
        <span className="absolute bottom-3 left-3.5 z-20 inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur dark:border-white/15 dark:bg-[#0d1017]/95 dark:text-slate-100">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isLive ? "animate-pulse bg-emerald-500" : "bg-amber-500"
            }`}
          />
          {statusLabel}
        </span>
      </div>
    </div>
  );
}
