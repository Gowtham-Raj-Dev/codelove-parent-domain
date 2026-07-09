import Icon from "@/components/Icon";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg)] px-4">
      {/* Background grid pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-50" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Pulsating logo/icon */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-white shadow-[var(--shadow-glow)] animate-pulse">
          <Icon name="heart" size={32} className="animate-spin-slow" />
        </div>

        {/* Loading text */}
        <h2 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
          Code<span className="text-gradient">Love</span>
        </h2>
        <p className="mt-2 text-xs text-[var(--text-faint)] tracking-wider uppercase animate-pulse">
          Loading resources...
        </p>

        {/* Sleek loading bar */}
        <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-[var(--surface-border)]">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{
              width: "100%",
              animation: "loadingProgress 1.6s infinite ease-in-out",
            }}
          />
          <style>{`
            @keyframes loadingProgress {
              0% { transform: translateX(-100%); }
              50% { transform: translateX(0); }
              100% { transform: translateX(100%); }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
