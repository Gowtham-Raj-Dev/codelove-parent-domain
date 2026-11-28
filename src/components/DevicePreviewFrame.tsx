import type { Product } from "@/lib/data";
import PhoneMockup from "./PhoneMockup";

type PreviewMode = "both" | "desktop" | "mobile";

type DevicePreviewFrameProps = {
  product: Pick<Product, "slug" | "name" | "domain" | "status" | "image" | "screens" | "phone">;
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
      {/* Subtle monochrome dot pattern — white canvas in Light mode, pure black canvas in Dark mode */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] dark:opacity-35"
      />

      <div
        className={`relative flex aspect-[4/3] w-full items-center justify-center p-4 sm:p-5 ${
          featured ? "lg:aspect-auto lg:h-full lg:min-h-[20rem]" : ""
        }`}
      >
        {mode === "mobile" ? (
          <div className="relative flex h-full max-h-[260px] items-center justify-center py-1">
            <PhoneMockup
              slug={product.slug}
              src={phoneSrc}
              alt={`${product.name} mobile view`}
              size="md"
              className="h-full"
            />
          </div>
        ) : (
          /* Vertically centered Desktop + Mobile device lockup so nothing leaves dead gaps or gets cropped */
          <div className="relative w-full -translate-y-1">
            {/* Desktop Window */}
            <div
              className={`relative overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.09)] transition-transform duration-500 group-hover:scale-[1.015] dark:border-white/15 dark:bg-[#0b0d12] dark:shadow-[0_18px_42px_rgba(0,0,0,0.75)] ${
                mode === "desktop" ? "w-full" : "w-[85%]"
              }`}
            >
              {/* Clean macOS-style browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-slate-200/80 bg-slate-100/90 px-2.5 py-1.5 dark:border-white/10 dark:bg-[#11141c]">
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-zinc-600" />
                <span className="ml-1.5 truncate rounded bg-white/85 px-2 py-0.5 font-mono text-[9px] text-slate-500 dark:bg-black/50 dark:text-slate-400">
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

            {/* Mobile Frame — tucked cleanly onto the bottom-right corner of the desktop frame */}
            {mode === "both" && (
              <div className="absolute -bottom-3 right-0 z-10 w-[23.5%] min-w-[70px] max-w-[106px] transition-transform duration-500 group-hover:-translate-y-1">
                <PhoneMockup
                  slug={product.slug}
                  src={phoneSrc}
                  alt={`${product.name} mobile interface`}
                  size="sm"
                />
              </div>
            )}
          </div>
        )}

        {/* Compact Status Pill cleanly docked top-right without colliding with chrome or frames */}
        <span className="absolute right-3.5 top-2.5 z-20 inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur dark:border-white/15 dark:bg-[#0d1017]/95 dark:text-slate-100">
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
