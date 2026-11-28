type PhoneSize = "sm" | "md" | "lg" | "xl";

type PhoneMockupProps = {
  slug?: string;
  src: string;
  alt: string;
  size?: PhoneSize;
  priority?: boolean;
  className?: string;
};

const PHONE_SURFACE: Record<
  string,
  { top: string; bottom: string; isDark?: boolean }
> = {
  apps: { top: "#090a0e", bottom: "#0e0f13", isDark: true },
  games: { top: "#fbf5dc", bottom: "#fbf5dc" },
  iloveconvert: { top: "#ffffff", bottom: "#ffffff" },
  javaplay: { top: "#0e0f14", bottom: "#0e0f14", isDark: true },
  linkinbio: { top: "#ffffff", bottom: "#ffffff" },
  models: { top: "#07060b", bottom: "#07060b", isDark: true },
  "satisfying-video-maker": { top: "#0a0a0a", bottom: "#0a0a0a", isDark: true },
  utubeflow: { top: "#ffffff", bottom: "#ffffff" },
  videocut: { top: "#fbfaff", bottom: "#fbfaff" },
  videomaker: { top: "#f5f4ef", bottom: "#f5f4ef" },
  videotogif: { top: "#ffffff", bottom: "#ffffff" },
  videotoimages: { top: "#ffffff", bottom: "#ffffff" },
  voltarc: { top: "#000000", bottom: "#000000", isDark: true },
  webly: { top: "#f6f7f9", bottom: "#f6f7f9" },
};

const SIZE_STYLES: Record<
  PhoneSize,
  {
    chassis: string;
    screen: string;
    topBar: string;
    island: string;
    bottomBar: string;
    homePill: string;
  }
> = {
  sm: {
    chassis:
      "rounded-[15px] border-[3.5px] shadow-[0_16px_36px_rgba(0,0,0,0.38)] dark:shadow-[0_20px_44px_rgba(0,0,0,0.88)]",
    screen: "rounded-[11px]",
    topBar: "h-[11px]",
    island: "h-[4.5px] w-[26%]",
    bottomBar: "h-[6px]",
    homePill: "h-[1.5px] w-[30%]",
  },
  md: {
    chassis:
      "rounded-[22px] border-[4.5px] shadow-[0_18px_40px_rgba(0,0,0,0.32)] dark:shadow-[0_20px_48px_rgba(0,0,0,0.85)]",
    screen: "rounded-[17px]",
    topBar: "h-[16px]",
    island: "h-[7px] w-[28%]",
    bottomBar: "h-[10px]",
    homePill: "h-[2px] w-[32%]",
  },
  lg: {
    chassis:
      "rounded-[28px] border-[5px] shadow-[0_20px_48px_rgba(0,0,0,0.32)] dark:shadow-[0_24px_56px_rgba(0,0,0,0.9)]",
    screen: "rounded-[22px]",
    topBar: "h-[19px]",
    island: "h-[8.5px] w-[28%]",
    bottomBar: "h-[11px]",
    homePill: "h-[2.5px] w-[32%]",
  },
  xl: {
    chassis:
      "rounded-[2.2rem] border-[7px] shadow-[var(--shadow-glow)]",
    screen: "rounded-[1.7rem]",
    topBar: "h-[22px]",
    island: "h-[10px] w-[30%]",
    bottomBar: "h-[12px]",
    homePill: "h-[3px] w-[32%]",
  },
};

export default function PhoneMockup({
  slug = "",
  src,
  alt,
  size = "lg",
  priority = false,
  className = "",
}: PhoneMockupProps) {
  const surface = PHONE_SURFACE[slug] ?? { top: "#0b0d12", bottom: "#0b0d12", isDark: true };
  const st = SIZE_STYLES[size];

  return (
    <div
      className={`relative overflow-hidden border-slate-900 bg-slate-950 ring-1 ring-black/15 dark:border-zinc-700 dark:bg-black dark:ring-white/20 ${st.chassis} ${className}`}
    >
      <div
        className={`flex aspect-[390/844] w-full flex-col overflow-hidden ${st.screen}`}
        style={{ backgroundColor: surface.bottom }}
      >
        {/* Dedicated top status bar above the viewport so Dynamic Island never overlaps site navbars */}
        <div
          style={{ backgroundColor: surface.top }}
          className={`flex shrink-0 items-center justify-center ${st.topBar}`}
          aria-hidden="true"
        >
          <span
            className={`rounded-full bg-[#090a0d] ring-1 ${
              surface.isDark ? "ring-white/15" : "ring-black/10"
            } ${st.island}`}
          />
        </div>

        {/* Clean full-width mobile website screen */}
        <div className="min-h-0 flex-1 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={390}
            height={844}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Dedicated bottom safe home-indicator strip */}
        <div
          style={{ backgroundColor: surface.bottom }}
          className={`flex shrink-0 items-center justify-center ${st.bottomBar}`}
          aria-hidden="true"
        >
          <span
            className={`rounded-full ${
              surface.isDark ? "bg-white/35" : "bg-slate-900/25"
            } ${st.homePill}`}
          />
        </div>
      </div>
    </div>
  );
}
