"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import CustomSelect, { type SelectOption } from "./CustomSelect";

export type ToolId =
  | "image"
  | "crop"
  | "bitrate"
  | "aspect"
  | "json"
  | "seo"
  | "color"
  | "dev";

type SubdomainLink = {
  name: string;
  host: string;
  href: string;
  detailHref: string;
  desc: string;
  icon: IconName;
};

type ToolMeta = {
  id: ToolId;
  label: string;
  shortLabel: string;
  icon: IconName;
  badge: string;
  description: string;
  relatedApps: SubdomainLink[];
};

const SUBDOMAINS: Record<string, SubdomainLink> = {
  iloveconvert: {
    name: "iLoveConvert",
    host: "iloveconvert.codelove.in",
    href: "https://iloveconvert.codelove.in",
    detailHref: "/products/iloveconvert",
    desc: "Batch PDF, Office, image, audio & archive conversions",
    icon: "layers",
  },
  videocut: {
    name: "VideoCut",
    host: "videocut.codelove.in",
    href: "https://videocut.codelove.in",
    detailHref: "/products/videocut",
    desc: "Precision timeline trimmer, cutter & browser export studio",
    icon: "scissors",
  },
  videomaker: {
    name: "VideoMaker",
    host: "videomaker.codelove.in",
    href: "https://videomaker.codelove.in",
    detailHref: "/products/videomaker",
    desc: "AI script-to-video, captions & automated renders",
    icon: "sparkles",
  },
  videotogif: {
    name: "VideoToGIF",
    host: "videotogif.codelove.in",
    href: "https://videotogif.codelove.in",
    detailHref: "/products/videotogif",
    desc: "Convert MP4/WebM clips into smooth looping GIFs",
    icon: "film",
  },
  videotoimages: {
    name: "VideoToImages",
    host: "videotoimages.codelove.in",
    href: "https://videotoimages.codelove.in",
    detailHref: "/products/videotoimages",
    desc: "Extract crisp high-resolution video stills & frames",
    icon: "image",
  },
  satisfying: {
    name: "Satisfying Video Maker",
    host: "satisfying-video-maker.codelove.in",
    href: "https://satisfying-video-maker.codelove.in",
    detailHref: "/products/satisfying-video-maker",
    desc: "Physics loops & calming geometric motion reels",
    icon: "play",
  },
  utubeflow: {
    name: "uTubeFlow",
    host: "utubeflow.codelove.in",
    href: "https://utubeflow.codelove.in",
    detailHref: "/products/utubeflow",
    desc: "Creator upload planner, scripts & Shorts workflow",
    icon: "youtube",
  },
  webly: {
    name: "Webly Studio",
    host: "webly.codelove.in",
    href: "https://webly.codelove.in",
    detailHref: "/products/webly",
    desc: "Visual drag-and-drop website & landing page builder",
    icon: "layout",
  },
  linkinbio: {
    name: "LinkInBio",
    host: "linkinbio.codelove.in",
    href: "https://linkinbio.codelove.in",
    detailHref: "/products/linkinbio",
    desc: "Fast creator profile microsites & smart links",
    icon: "link",
  },
  models: {
    name: "CodeLove 3D Models",
    host: "models.codelove.in",
    href: "https://models.codelove.in",
    detailHref: "/products/models",
    desc: "Interactive PBR 3D asset browser & showcase",
    icon: "box",
  },
  voltarc: {
    name: "VoltArc Arcade",
    host: "voltarc.codelove.in",
    href: "https://voltarc.codelove.in",
    detailHref: "/products/voltarc",
    desc: "Playable web arcade with curated HTML5 games",
    icon: "zap",
  },
  apps: {
    name: "CodeLove Apps",
    host: "apps.codelove.in",
    href: "https://apps.codelove.in",
    detailHref: "/products/apps",
    desc: "Free Android 3D games & utility APKs",
    icon: "smartphone",
  },
  javaplay: {
    name: "JavaPlay",
    host: "javaplay.codelove.in",
    href: "https://javaplay.codelove.in",
    detailHref: "/products/javaplay",
    desc: "Zero-setup browser Java compiler & code sandbox",
    icon: "terminal",
  },
};

export const TOOLS_META: ToolMeta[] = [
  {
    id: "image",
    label: "Image Compressor & Converter",
    shortLabel: "Image Convert",
    icon: "image",
    badge: "Canvas WebP / JPG / PNG",
    description:
      "Shrink photo file sizes and convert between WebP, JPEG, and PNG locally inside your browser without uploading assets to external servers.",
    relatedApps: [SUBDOMAINS.iloveconvert, SUBDOMAINS.webly],
  },
  {
    id: "crop",
    label: "Social Aspect Cropper",
    shortLabel: "Aspect Crop",
    icon: "scissors",
    badge: "Exact Platform Sizes",
    description:
      "Reframe photos or covers to exact YouTube 16:9, Open Graph 1200x630, Shorts 9:16, Instagram 4:5, or 1:1 dimensions in one click.",
    relatedApps: [SUBDOMAINS.videotoimages, SUBDOMAINS.videotogif],
  },
  {
    id: "bitrate",
    label: "Video Bitrate & Size Planner",
    shortLabel: "Bitrate Calc",
    icon: "film",
    badge: "H.264 / HEVC / AV1",
    description:
      "Calculate ideal export bitrates, target file sizes, audio overhead, and ready-to-run FFmpeg commands for YouTube, Shorts, and web streaming.",
    relatedApps: [SUBDOMAINS.videocut, SUBDOMAINS.videomaker, SUBDOMAINS.satisfying],
  },
  {
    id: "aspect",
    label: "9:16 Safe-Zone Guide",
    shortLabel: "Safe Zones",
    icon: "smartphone",
    badge: "Shorts & Reels UI",
    description:
      "Preview where Shorts, Reels, TikTok, and 16:9 overlays sit so headlines, faces, and call-to-action buttons never get covered.",
    relatedApps: [SUBDOMAINS.utubeflow, SUBDOMAINS.videocut, SUBDOMAINS.videomaker],
  },
  {
    id: "json",
    label: "JSON Formatter & Sorter",
    shortLabel: "JSON Tool",
    icon: "code",
    badge: "Validate & Sort",
    description:
      "Validate malformed payloads, sort nested keys alphabetically, switch indentation, minify bundles, and inspect exact byte savings.",
    relatedApps: [SUBDOMAINS.iloveconvert, SUBDOMAINS.javaplay],
  },
  {
    id: "seo",
    label: "SERP & Open Graph Builder",
    shortLabel: "SEO & OG",
    icon: "search",
    badge: "HTML + JSON-LD",
    description:
      "Craft click-worthy titles, meta descriptions, live Google SERP snippets, social cards, and schema.org JSON-LD blocks cleanly.",
    relatedApps: [SUBDOMAINS.webly, SUBDOMAINS.linkinbio, SUBDOMAINS.utubeflow],
  },
  {
    id: "color",
    label: "WCAG Contrast & Gradient Lab",
    shortLabel: "Contrast & CSS",
    icon: "palette",
    badge: "WCAG 2.1 AA / AAA",
    description:
      "Verify accessible foreground/background contrast ratios for dark & light themes and copy production CSS linear gradients.",
    relatedApps: [SUBDOMAINS.webly, SUBDOMAINS.linkinbio, SUBDOMAINS.models],
  },
  {
    id: "dev",
    label: "Slug, Base64 & UUID Toolkit",
    shortLabel: "Slug & Dev",
    icon: "terminal",
    badge: "Crypto / UTM",
    description:
      "Clean SEO URL slugs with UTM tracking params, UTF-8 safe Base64 encoding/decoding, and cryptographic UUID v4 tokens.",
    relatedApps: [SUBDOMAINS.javaplay, SUBDOMAINS.voltarc, SUBDOMAINS.apps],
  },
];

const VALID_IDS = new Set<ToolId>(TOOLS_META.map((t) => t.id));
function isValidToolId(value: string | null): value is ToolId {
  return Boolean(value && VALID_IDS.has(value as ToolId));
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

// ============================================================================
// TOOL 1: IMAGE COMPRESSOR & CONVERTER
// ============================================================================
type ImageFormat = "image/webp" | "image/jpeg" | "image/png";
type WidthOption = "0" | "1920" | "1280" | "1080" | "800";
type FillOption = "#ffffff" | "#000000" | "#0f172a";

const IMG_FORMAT_OPTIONS: SelectOption<ImageFormat>[] = [
  { value: "image/webp", label: "WebP (Best for web SEO)", hint: "~30% smaller" },
  { value: "image/jpeg", label: "JPEG (Universal photos)", hint: "Wide compat" },
  { value: "image/png", label: "PNG (Lossless / UI)", hint: "Alpha support" },
];

const IMG_WIDTH_OPTIONS: SelectOption<WidthOption>[] = [
  { value: "0", label: "Keep original dimensions" },
  { value: "1920", label: "1920 px wide (Full HD)" },
  { value: "1280", label: "1280 px wide (HD / Blog)" },
  { value: "1080", label: "1080 px wide (Social cover)" },
  { value: "800", label: "800 px wide (Thumbnails)" },
];

const IMG_FILL_OPTIONS: SelectOption<FillOption>[] = [
  { value: "#ffffff", label: "Crisp White (#FFFFFF)" },
  { value: "#000000", label: "Pure Black (#000000)" },
  { value: "#0f172a", label: "Deep Slate (#0F172A)" },
];

function ImageCompressorTool() {
  const inputRef = useRef<HTMLInputElement>(null);
  const outUrlRef = useRef<string>("");
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [outUrl, setOutUrl] = useState<string>("");
  const [outSize, setOutSize] = useState<number>(0);
  const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(null);
  const [format, setFormat] = useState<ImageFormat>("image/webp");
  const [quality, setQuality] = useState<number>(82);
  const [maxWidth, setMaxWidth] = useState<WidthOption>("1920");
  const [jpgFill, setJpgFill] = useState<FillOption>("#ffffff");
  const [processing, setProcessing] = useState(false);

  const runConversion = useCallback(
    async (
      file: File,
      targetFmt: ImageFormat,
      q: number,
      capW: number,
      bgFill: FillOption
    ) => {
      setProcessing(true);
      try {
        const objectUrl = URL.createObjectURL(file);
        const img = new window.Image();
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error("Could not decode image"));
          img.src = objectUrl;
        });

        let targetW = img.naturalWidth;
        let targetH = img.naturalHeight;
        if (capW > 0 && targetW > capW) {
          targetH = Math.round((targetH * capW) / targetW);
          targetW = capW;
        }

        const canvas = document.createElement("canvas");
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas unavailable");

        if (targetFmt === "image/jpeg") {
          ctx.fillStyle = bgFill;
          ctx.fillRect(0, 0, targetW, targetH);
        }
        ctx.drawImage(img, 0, 0, targetW, targetH);
        URL.revokeObjectURL(objectUrl);

        const blob = await new Promise<Blob | null>((resolve) =>
          canvas.toBlob((b) => resolve(b), targetFmt, q / 100)
        );
        if (!blob) return;

        const nextOutUrl = URL.createObjectURL(blob);
        if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current);
        outUrlRef.current = nextOutUrl;
        setOutUrl(nextOutUrl);
        setOutSize(blob.size);
        setDimensions({ w: targetW, h: targetH });
      } catch {
        // Ignore invalid files cleanly
      } finally {
        setProcessing(false);
      }
    },
    []
  );

  const handleFile = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    setSourceFile(file);
    void runConversion(file, format, quality, Number(maxWidth), jpgFill);
  };

  useEffect(() => {
    return () => {
      if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current);
    };
  }, []);

  const ext = format.split("/")[1] || "webp";
  const savings =
    sourceFile && outSize > 0
      ? Math.round(((sourceFile.size - outSize) / sourceFile.size) * 100)
      : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-5 lg:col-span-5">
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFile(e.dataTransfer.files[0]);
          }}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-[var(--surface-border)] bg-[var(--surface)] p-6 text-center transition hover:border-primary/60"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon name="image" size={24} />
          </div>
          <p className="mt-3 text-sm font-semibold">
            {sourceFile ? sourceFile.name : "Drop an image or click to browse"}
          </p>
          <p className="mt-1 text-xs text-[var(--text-faint)]">
            PNG, JPEG, WebP, or SVG — processed 100% locally in your browser
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
          <CustomSelect
            id="img-format"
            label="Output Format"
            value={format}
            onChange={(next) => {
              setFormat(next);
              if (sourceFile) void runConversion(sourceFile, next, quality, Number(maxWidth), jpgFill);
            }}
            options={IMG_FORMAT_OPTIONS}
          />

          <div>
            <div className="flex justify-between text-xs font-medium">
              <span className="uppercase tracking-wider text-[var(--text-faint)]">
                Quality
              </span>
              <span className="font-mono text-primary">{quality}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={100}
              value={quality}
              onChange={(e) => {
                const nextQ = Number(e.target.value);
                setQuality(nextQ);
                if (sourceFile) void runConversion(sourceFile, format, nextQ, Number(maxWidth), jpgFill);
              }}
              className="mt-2 w-full accent-primary"
            />
          </div>

          <CustomSelect
            id="img-max-w"
            label="Max Width Cap"
            value={maxWidth}
            onChange={(next) => {
              setMaxWidth(next);
              if (sourceFile) void runConversion(sourceFile, format, quality, Number(next), jpgFill);
            }}
            options={IMG_WIDTH_OPTIONS}
          />

          {format === "image/jpeg" && (
            <CustomSelect
              id="img-fill"
              label="Transparent Backdrop Fill"
              value={jpgFill}
              onChange={(next) => {
                setJpgFill(next);
                if (sourceFile) void runConversion(sourceFile, format, quality, Number(maxWidth), next);
              }}
              options={IMG_FILL_OPTIONS}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-7">
        {outUrl && sourceFile ? (
          <>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/60 p-3">
                <p className="text-[11px] uppercase tracking-wider text-[var(--text-faint)]">
                  Original
                </p>
                <p className="mt-1 font-mono text-sm font-bold">
                  {formatBytes(sourceFile.size)}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/60 p-3">
                <p className="text-[11px] uppercase tracking-wider text-[var(--text-faint)]">
                  Converted
                </p>
                <p className="mt-1 font-mono text-sm font-bold text-primary">
                  {formatBytes(outSize)}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/60 p-3">
                <p className="text-[11px] uppercase tracking-wider text-[var(--text-faint)]">
                  Saved
                </p>
                <p
                  className={`mt-1 font-mono text-sm font-bold ${
                    savings >= 0 ? "text-emerald-500" : "text-amber-500"
                  }`}
                >
                  {savings >= 0 ? `-${savings}%` : `+${Math.abs(savings)}%`}
                </p>
              </div>
            </div>

            <div className="my-4 flex min-h-[210px] items-center justify-center overflow-hidden rounded-xl border border-[var(--surface-border)] bg-black/5 p-3 dark:bg-white/[0.03]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={outUrl}
                alt="Converted preview"
                className="max-h-[240px] rounded-lg object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-[var(--text-faint)]">
                {dimensions ? `${dimensions.w} × ${dimensions.h} px` : ""} •{" "}
                {processing ? "Processing..." : `${ext.toUpperCase()} ready`}
              </p>
              <a
                href={outUrl}
                download={`${sourceFile.name.replace(/\.[^.]+$/, "")}.${ext}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
              >
                Download {ext.toUpperCase()} <Icon name="download" size={16} />
              </a>
            </div>
          </>
        ) : (
          <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center text-[var(--text-muted)]">
            <Icon name="sliders" size={32} className="text-primary/70" />
            <p className="mt-3 text-sm font-semibold">Live Preview Ready</p>
            <p className="mt-1 max-w-sm text-xs text-[var(--text-faint)]">
              Select a PNG or JPEG photo on the left to inspect size savings and export clean WebP or compressed JPG output instantly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// TOOL 2: SOCIAL ASPECT CROPPER & RESIZER
// ============================================================================
type CropPresetId = "yt-thumb" | "og-card" | "shorts-cover" | "ig-portrait" | "square";
type FitMode = "cover" | "contain-dark" | "contain-blur";
type CropFormat = "image/webp" | "image/png" | "image/jpeg";

const CROP_PRESETS: Record<
  CropPresetId,
  { w: number; h: number; label: string; ratio: string }
> = {
  "yt-thumb": { w: 1280, h: 720, label: "YouTube Thumbnail (16:9 · 1280×720)", ratio: "16:9" },
  "og-card": { w: 1200, h: 630, label: "Open Graph / Blog (1.91:1 · 1200×630)", ratio: "1.91:1" },
  "shorts-cover": { w: 1080, h: 1920, label: "Shorts / Reels Frame (9:16 · 1080×1920)", ratio: "9:16" },
  "ig-portrait": { w: 1080, h: 1350, label: "Instagram Feed (4:5 · 1080×1350)", ratio: "4:5" },
  square: { w: 1080, h: 1080, label: "Square Card / Avatar (1:1 · 1080×1080)", ratio: "1:1" },
};

const CROP_PRESET_OPTIONS: SelectOption<CropPresetId>[] = Object.entries(
  CROP_PRESETS
).map(([value, meta]) => ({
  value: value as CropPresetId,
  label: meta.label,
  hint: meta.ratio,
}));

const FIT_MODE_OPTIONS: SelectOption<FitMode>[] = [
  { value: "cover", label: "Smart Center Crop (Fill Frame)" },
  { value: "contain-blur", label: "Letterbox + Soft Ambient Frame" },
  { value: "contain-dark", label: "Fit Whole Image (Deep Onyx Backdrop)" },
];

const CROP_FMT_OPTIONS: SelectOption<CropFormat>[] = [
  { value: "image/webp", label: "WebP (Lightweight web)" },
  { value: "image/png", label: "PNG (Lossless graphic)" },
  { value: "image/jpeg", label: "JPEG (Compatible upload)" },
];

function SocialCropTool() {
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState<CropPresetId>("yt-thumb");
  const [fitMode, setFitMode] = useState<FitMode>("cover");
  const [outFmt, setOutFmt] = useState<CropFormat>("image/webp");

  useEffect(() => {
    let cancelled = false;

    async function drawPreview() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const { w, h, ratio } = CROP_PRESETS[preset];
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      if (!file) {
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, "#0b1220");
        grad.addColorStop(0.55, "#1d4ed8");
        grad.addColorStop(1, "#0ea5e9");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = "rgba(255,255,255,0.22)";
        ctx.lineWidth = Math.max(4, w / 250);
        ctx.strokeRect(w * 0.06, h * 0.06, w * 0.88, h * 0.88);

        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.font = `700 ${Math.round(Math.min(w, h) * 0.08)}px sans-serif`;
        ctx.fillText(`${w} × ${h} px`, w / 2, h / 2 - 12);
        ctx.fillStyle = "rgba(255,255,255,0.78)";
        ctx.font = `500 ${Math.round(Math.min(w, h) * 0.04)}px sans-serif`;
        ctx.fillText(`Ratio ${ratio} · Upload photo to crop`, w / 2, h / 2 + 42);
        return;
      }

      const objUrl = URL.createObjectURL(file);
      try {
        const img = new window.Image();
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error("Image load failed"));
          img.src = objUrl;
        });
        if (cancelled) return;

        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        if (fitMode === "cover") {
          const scale = Math.max(w / iw, h / ih);
          const sw = iw * scale;
          const sh = ih * scale;
          ctx.drawImage(img, (w - sw) / 2, (h - sh) / 2, sw, sh);
        } else {
          if (fitMode === "contain-blur") {
            ctx.save();
            ctx.filter = "blur(28px) brightness(0.55)";
            const coverScale = Math.max(w / iw, h / ih) * 1.1;
            const bw = iw * coverScale;
            const bh = ih * coverScale;
            ctx.drawImage(img, (w - bw) / 2, (h - bh) / 2, bw, bh);
            ctx.restore();
          } else {
            ctx.fillStyle = "#090d16";
            ctx.fillRect(0, 0, w, h);
          }
          const containScale = Math.min(w / iw, h / ih);
          const cw = iw * containScale;
          const ch = ih * containScale;
          ctx.drawImage(img, (w - cw) / 2, (h - ch) / 2, cw, ch);
        }
      } catch {
        // Ignore decode failure gracefully
      } finally {
        URL.revokeObjectURL(objUrl);
      }
    }

    void drawPreview();
    return () => {
      cancelled = true;
    };
  }, [file, preset, fitMode]);

  const activePreset = CROP_PRESETS[preset];
  const ext = outFmt.split("/")[1] || "webp";

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `codelove-${preset}-${activePreset.w}x${activePreset.h}.${ext}`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      },
      outFmt,
      0.92
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-4 lg:col-span-5">
        <div
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-[var(--surface-border)] bg-[var(--surface)] p-5 text-center transition hover:border-primary/60"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f && f.type.startsWith("image/")) setFile(f);
            }}
          />
          <p className="text-sm font-semibold">
            {file ? file.name : "Upload image (or preview template below)"}
          </p>
          <p className="mt-1 text-xs text-[var(--text-faint)]">
            Automatically crops or fits to exact platform pixel specs
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
          <CustomSelect
            id="crop-preset"
            label="Target Dimensions"
            value={preset}
            onChange={setPreset}
            options={CROP_PRESET_OPTIONS}
          />
          <CustomSelect
            id="crop-fit"
            label="Framing Mode"
            value={fitMode}
            onChange={setFitMode}
            options={FIT_MODE_OPTIONS}
          />
          <CustomSelect
            id="crop-fmt"
            label="Export Format"
            value={outFmt}
            onChange={setOutFmt}
            options={CROP_FMT_OPTIONS}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-7">
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
          <span className="font-semibold uppercase tracking-wider text-primary">
            Output: {activePreset.w} × {activePreset.h} px ({activePreset.ratio})
          </span>
          <span className="font-mono uppercase">{ext}</span>
        </div>

        <div className="my-4 flex min-h-[240px] items-center justify-center rounded-xl border border-[var(--surface-border)] bg-black/5 p-3 dark:bg-white/[0.03]">
          <canvas
            ref={canvasRef}
            className="max-h-[260px] max-w-full rounded-lg object-contain shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[var(--text-faint)]">
            Zero server upload · Exact canvas export
          </span>
          <button
            type="button"
            onClick={handleDownload}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
          >
            Download {activePreset.w}×{activePreset.h} <Icon name="download" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TOOL 3: VIDEO BITRATE & MP4 SIZE PLANNER
// ============================================================================
type BitratePreset = "shorts" | "yt1080" | "yt4k" | "custom";
type VideoCodec = "h264" | "h265" | "av1";
type AudioRate = "128" | "192" | "320";

const BR_PRESET_OPTIONS: SelectOption<BitratePreset>[] = [
  { value: "shorts", label: "Shorts / Reels 1080×1920 (High motion)", hint: "10 Mbps" },
  { value: "yt1080", label: "YouTube 1080p Standard (30 fps)", hint: "8 Mbps" },
  { value: "yt4k", label: "YouTube 4K UHD (30–60 fps)", hint: "35 Mbps" },
  { value: "custom", label: "Target File Size Limit (MB cap)", hint: "Exact fit" },
];

const BR_CODEC_OPTIONS: SelectOption<VideoCodec>[] = [
  { value: "h264", label: "H.264 / AVC (Universal)", hint: "libx264" },
  { value: "h265", label: "H.265 / HEVC (~30% smaller)", hint: "libx265" },
  { value: "av1", label: "AV1 (Smallest high-efficiency)", hint: "libsvtav1" },
];

const BR_AUDIO_OPTIONS: SelectOption<AudioRate>[] = [
  { value: "128", label: "128 kbps (Voice / Podcast)" },
  { value: "192", label: "192 kbps (Standard Stereo)" },
  { value: "320", label: "320 kbps (Music Master)" },
];

function BitrateCalculatorTool() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [targetSizeMb, setTargetSizeMb] = useState(50);
  const [preset, setPreset] = useState<BitratePreset>("shorts");
  const [codec, setCodec] = useState<VideoCodec>("h264");
  const [audioKbps, setAudioKbps] = useState<AudioRate>("192");
  const [copiedFfmpeg, setCopiedFfmpeg] = useState(false);

  const totalSeconds = Math.max(1, minutes * 60 + seconds);
  const audioRateNum = Number(audioKbps);

  const presetBaseKbps: Record<Exclude<BitratePreset, "custom">, number> = {
    yt1080: 8000,
    yt4k: 35000,
    shorts: 10000,
  };

  const codecEfficiency = codec === "av1" ? 0.62 : codec === "h265" ? 0.72 : 1;

  const recommendedVideoKbps =
    preset === "custom"
      ? Math.max(250, Math.round((targetSizeMb * 8192) / totalSeconds - audioRateNum))
      : Math.round(presetBaseKbps[preset] * codecEfficiency);

  const totalBitrateKbps = recommendedVideoKbps + audioRateNum;
  const estimatedSizeMb = ((totalBitrateKbps * totalSeconds) / 8192).toFixed(1);
  const uploadMbpsNeeded = (Number(estimatedSizeMb) * 8) / 25;

  const ffmpegCodec =
    codec === "av1" ? "libsvtav1" : codec === "h265" ? "libx265" : "libx264";
  const ffmpegCmd = `ffmpeg -i input.mp4 -c:v ${ffmpegCodec} -b:v ${recommendedVideoKbps}k -maxrate ${Math.round(
    recommendedVideoKbps * 1.15
  )}k -bufsize ${recommendedVideoKbps * 2}k -c:a aac -b:a ${audioRateNum}k output.mp4`;

  const copyCmd = async () => {
    await navigator.clipboard?.writeText(ffmpegCmd);
    setCopiedFfmpeg(true);
    setTimeout(() => setCopiedFfmpeg(false), 1800);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-6">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="br-min"
              className="block text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]"
            >
              Duration (Min)
            </label>
            <input
              id="br-min"
              type="number"
              min={0}
              max={240}
              value={minutes}
              onChange={(e) => setMinutes(Math.max(0, Number(e.target.value)))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="br-sec"
              className="block text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]"
            >
              Seconds
            </label>
            <input
              id="br-sec"
              type="number"
              min={0}
              max={59}
              value={seconds}
              onChange={(e) => setSeconds(Math.min(59, Math.max(0, Number(e.target.value))))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        <CustomSelect
          id="br-preset"
          label="Export Profile"
          value={preset}
          onChange={setPreset}
          options={BR_PRESET_OPTIONS}
        />

        {preset === "custom" && (
          <div>
            <label
              htmlFor="br-cap"
              className="block text-xs font-medium uppercase tracking-wider text-[var(--text-faint)]"
            >
              Max Allowed File Size (MB)
            </label>
            <input
              id="br-cap"
              type="number"
              min={1}
              max={4000}
              value={targetSizeMb}
              onChange={(e) => setTargetSizeMb(Math.max(1, Number(e.target.value)))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <CustomSelect
            id="br-codec"
            label="Video Codec"
            value={codec}
            onChange={setCodec}
            options={BR_CODEC_OPTIONS}
          />
          <CustomSelect
            id="br-audio"
            label="Audio Bitrate"
            value={audioKbps}
            onChange={setAudioKbps}
            options={BR_AUDIO_OPTIONS}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Recommended Export Parameters
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/70 p-4">
              <p className="text-xs text-[var(--text-faint)]">Video Bitrate</p>
              <p className="mt-1 font-mono text-2xl font-bold text-primary">
                {recommendedVideoKbps.toLocaleString()} kbps
              </p>
              <p className="mt-0.5 text-xs text-[var(--text-faint)]">
                {(recommendedVideoKbps / 1000).toFixed(2)} Mbps
              </p>
            </div>
            <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/70 p-4">
              <p className="text-xs text-[var(--text-faint)]">Estimated File Size</p>
              <p className="mt-1 font-mono text-2xl font-bold">{estimatedSizeMb} MB</p>
              <p className="mt-0.5 text-xs text-[var(--text-faint)]">
                For {Math.floor(totalSeconds / 60)}m {totalSeconds % 60}s duration
              </p>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-xs text-[var(--text-muted)]">
            <li className="flex items-center justify-between rounded-lg border border-[var(--surface-border)] px-3 py-2">
              <span>Combined bitrate (Video + Audio)</span>
              <span className="font-mono font-semibold">{totalBitrateKbps.toLocaleString()} kbps</span>
            </li>
            <li className="flex items-center justify-between rounded-lg border border-[var(--surface-border)] px-3 py-2">
              <span>2-pass / VBR ceiling (+15%)</span>
              <span className="font-mono font-semibold">
                {Math.round(recommendedVideoKbps * 1.15).toLocaleString()} kbps
              </span>
            </li>
            <li className="flex items-center justify-between rounded-lg border border-[var(--surface-border)] px-3 py-2">
              <span>Min upload speed for 25s upload</span>
              <span className="font-mono font-semibold">{uploadMbpsNeeded.toFixed(1)} Mbps</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/80 p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              FFmpeg CLI Command
            </span>
            <button
              type="button"
              onClick={copyCmd}
              className="cursor-pointer rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-medium text-primary hover:border-primary/40"
            >
              {copiedFfmpeg ? "Copied!" : "Copy Command"}
            </button>
          </div>
          <code className="mt-1.5 block overflow-x-auto font-mono text-[11px] text-[var(--text-muted)]">
            {ffmpegCmd}
          </code>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TOOL 4: 9:16 SAFE-ZONE & ASPECT RATIO PLANNER
// ============================================================================
type SafePlatform = "shorts" | "reels" | "tiktok" | "youtube16x9";
type CanvasTheme = "midnight" | "neon" | "editorial";

const SAFE_PLATFORMS: Record<
  SafePlatform,
  { label: string; w: number; h: number; topPx: number; bottomPx: number; rightPx: number; note: string }
> = {
  shorts: {
    label: "YouTube Shorts (9:16)",
    w: 1080,
    h: 1920,
    topPx: 140,
    bottomPx: 420,
    rightPx: 170,
    note: "Keep subtitles above y=1500 and avoid bottom channel handle + sound chip.",
  },
  reels: {
    label: "Instagram Reels (9:16)",
    w: 1080,
    h: 1920,
    topPx: 180,
    bottomPx: 440,
    rightPx: 180,
    note: "4:5 feed crop trims the top & bottom ~285px; center key titles tightly.",
  },
  tiktok: {
    label: "TikTok Feed (9:16)",
    w: 1080,
    h: 1920,
    topPx: 220,
    bottomPx: 430,
    rightPx: 190,
    note: "Top For-You/Following tabs sit higher; keep logos below y=220.",
  },
  youtube16x9: {
    label: "YouTube Landscape (16:9)",
    w: 1920,
    h: 1080,
    topPx: 70,
    bottomPx: 110,
    rightPx: 80,
    note: "Leave lower corner clean for the scrub timeline and end-screen cards.",
  },
};

const PLATFORM_OPTIONS: SelectOption<SafePlatform>[] = Object.entries(SAFE_PLATFORMS).map(
  ([value, meta]) => ({
    value: value as SafePlatform,
    label: meta.label,
    hint: `${meta.w}×${meta.h}`,
  })
);

const STAGE_THEME_OPTIONS: SelectOption<CanvasTheme>[] = [
  { value: "midnight", label: "Midnight Blue Studio" },
  { value: "neon", label: "Cyber Gradient Backdrop" },
  { value: "editorial", label: "Minimal Slate Frame" },
];

function AspectSafeZoneTool() {
  const [platform, setPlatform] = useState<SafePlatform>("shorts");
  const [stageTheme, setStageTheme] = useState<CanvasTheme>("midnight");
  const [showOverlay, setShowOverlay] = useState(true);
  const current = SAFE_PLATFORMS[platform];
  const isVertical = current.h > current.w;

  const safeW = current.w - current.rightPx - 60;
  const safeH = current.h - current.topPx - current.bottomPx;

  const bgGradient =
    stageTheme === "neon"
      ? "from-fuchsia-950/60 via-slate-950 to-cyan-950/60"
      : stageTheme === "editorial"
      ? "from-slate-800/70 via-slate-900 to-zinc-950"
      : "from-slate-900 via-[#0a1329] to-black";

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-6">
        <CustomSelect
          id="safe-platform"
          label="Target Video Format"
          value={platform}
          onChange={setPlatform}
          options={PLATFORM_OPTIONS}
        />

        <CustomSelect
          id="safe-stage"
          label="Preview Canvas Theme"
          value={stageTheme}
          onChange={setStageTheme}
          options={STAGE_THEME_OPTIONS}
        />

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/60 p-3">
            <p className="text-[var(--text-faint)]">Export Resolution</p>
            <p className="mt-1 font-mono text-sm font-bold">
              {current.w} × {current.h} px
            </p>
          </div>
          <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/60 p-3">
            <p className="text-[var(--text-faint)]">Usable Safe Canvas</p>
            <p className="mt-1 font-mono text-sm font-bold text-primary">
              {safeW} × {safeH} px
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowOverlay((v) => !v)}
          className="cursor-pointer flex w-full items-center justify-between rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/60 px-4 py-2.5 text-xs font-medium transition hover:border-primary/40"
        >
          <span>Toggle Red/Amber Platform UI Zones</span>
          <span className="font-mono text-primary">{showOverlay ? "Visible" : "Hidden"}</span>
        </button>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-[var(--text-muted)]">
          <strong className="text-primary">Editor tip:</strong> {current.note}
        </div>
      </div>

      <div className="flex items-center justify-center rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 lg:col-span-6">
        <div
          className={`relative overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-gradient-to-br ${bgGradient} text-white shadow-inner ${
            isVertical ? "h-[340px] w-[192px]" : "h-[202px] w-[360px]"
          }`}
        >
          {showOverlay && (
            <>
              <div
                style={{ height: `${(current.topPx / current.h) * 100}%` }}
                className="absolute inset-x-0 top-0 border-b border-dashed border-red-400/60 bg-red-500/20 px-2 py-1 text-[9px] font-mono text-red-200"
              >
                Top HUD ({current.topPx}px)
              </div>
              <div
                style={{ height: `${(current.bottomPx / current.h) * 100}%` }}
                className="absolute inset-x-0 bottom-0 flex items-end border-t border-dashed border-red-400/60 bg-red-500/20 px-2 py-1 text-[9px] font-mono text-red-200"
              >
                Caption / Controls ({current.bottomPx}px)
              </div>
              <div
                style={{ width: `${(current.rightPx / current.w) * 100}%` }}
                className="absolute inset-y-0 right-0 flex items-center justify-center border-l border-dashed border-amber-400/60 bg-amber-500/15 text-[9px] font-mono text-amber-200 [writing-mode:vertical-rl]"
              >
                Buttons ({current.rightPx}px)
              </div>
            </>
          )}
          <div className="relative z-10 flex h-full items-center justify-center p-4 text-center">
            <div className="rounded-xl border border-emerald-400/50 bg-emerald-500/15 px-3 py-2 text-[11px] font-semibold text-emerald-200 backdrop-blur-sm">
              Safe Subtitle &amp; Hook Zone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TOOL 5: JSON FORMATTER, VALIDATOR & SORTER
// ============================================================================
type JsonIndent = "2" | "4" | "0";
type JsonSort = "keep" | "asc";

const JSON_INDENT_OPTIONS: SelectOption<JsonIndent>[] = [
  { value: "2", label: "2 Spaces (Standard)" },
  { value: "4", label: "4 Spaces (Expanded)" },
  { value: "0", label: "Minify (Single Line)" },
];

const JSON_SORT_OPTIONS: SelectOption<JsonSort>[] = [
  { value: "keep", label: "Preserve Original Key Order" },
  { value: "asc", label: "Sort All Object Keys A → Z" },
];

function sortKeysDeep(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortKeysDeep);
  if (value !== null && typeof value === "object") {
    return Object.keys(value as Record<string, unknown>)
      .sort()
      .reduce<Record<string, unknown>>((acc, key) => {
        acc[key] = sortKeysDeep((value as Record<string, unknown>)[key]);
        return acc;
      }, {});
  }
  return value;
}

const SAMPLE_JSON = `{"platform":"CodeLove Studio","subdomain":"models.codelove.in","features":["PBR 3D","WebGL","Zero-Setup"],"metrics":{"fast":true,"tools":8},"license":"browser-local"}`;

function JsonFormatterTool() {
  const [raw, setRaw] = useState(SAMPLE_JSON);
  const [indent, setIndent] = useState<JsonIndent>("2");
  const [sortMode, setSortMode] = useState<JsonSort>("asc");
  const [copied, setCopied] = useState(false);

  const parsedResult = useMemo(() => {
    if (!raw.trim()) {
      return { ok: false as const, error: "Paste JSON on the left to validate.", formatted: "" };
    }
    try {
      const data = JSON.parse(raw);
      const prepared = sortMode === "asc" ? sortKeysDeep(data) : data;
      const formatted = JSON.stringify(prepared, null, Number(indent));
      const savings = raw.length - formatted.length;
      return { ok: true as const, formatted, savings };
    } catch (err) {
      return {
        ok: false as const,
        error: err instanceof Error ? err.message : "Invalid JSON syntax",
        formatted: "",
      };
    }
  }, [raw, indent, sortMode]);

  const copyOut = async () => {
    if (!parsedResult.ok) return;
    await navigator.clipboard?.writeText(parsedResult.formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-4 sm:grid-cols-3 sm:items-end">
        <CustomSelect
          id="json-indent"
          label="Indentation"
          value={indent}
          onChange={setIndent}
          options={JSON_INDENT_OPTIONS}
        />
        <CustomSelect
          id="json-sort"
          label="Key Ordering"
          value={sortMode}
          onChange={setSortMode}
          options={JSON_SORT_OPTIONS}
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setRaw(SAMPLE_JSON)}
            className="cursor-pointer flex-1 rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3 py-2.5 text-xs font-semibold hover:border-primary/40"
          >
            Reset Sample
          </button>
          <button
            type="button"
            onClick={copyOut}
            disabled={!parsedResult.ok}
            className="cursor-pointer flex-1 rounded-xl bg-primary px-3 py-2.5 text-xs font-semibold text-white disabled:opacity-40"
          >
            {copied ? "Copied!" : "Copy Output"}
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Input JSON
            </span>
            <span className="font-mono text-[var(--text-faint)]">
              {formatBytes(raw.length)}
            </span>
          </div>
          <textarea
            rows={10}
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            spellCheck={false}
            className="w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] p-3 font-mono text-xs leading-relaxed outline-none focus:border-primary"
          />
        </div>

        <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              {parsedResult.ok ? "Valid Formatted Output" : "Validation Status"}
            </span>
            {parsedResult.ok ? (
              <span className="font-mono text-emerald-500">
                Valid · {formatBytes(parsedResult.formatted.length)}
              </span>
            ) : (
              <span className="font-mono text-red-500">Syntax Error</span>
            )}
          </div>
          {parsedResult.ok ? (
            <pre className="h-[214px] overflow-auto rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] p-3 font-mono text-xs leading-relaxed text-[var(--text-muted)]">
              {parsedResult.formatted}
            </pre>
          ) : (
            <div className="flex h-[214px] items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center font-mono text-xs text-red-400">
              {parsedResult.error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TOOL 6: GOOGLE SERP, OPEN GRAPH & JSON-LD SNIPPET BUILDER
// ============================================================================
type SchemaType = "WebApplication" | "SoftwareApplication" | "Article" | "Organization";
type PreviewSurface = "google" | "opengraph";

const SCHEMA_OPTIONS: SelectOption<SchemaType>[] = [
  { value: "WebApplication", label: "WebApplication (SaaS / Utility)" },
  { value: "SoftwareApplication", label: "SoftwareApplication (Tool)" },
  { value: "Article", label: "Article / Tutorial Guide" },
  { value: "Organization", label: "Organization / Brand" },
];

const PREVIEW_OPTIONS: SelectOption<PreviewSurface>[] = [
  { value: "google", label: "Google Search SERP Card" },
  { value: "opengraph", label: "Social Open Graph Share Card" },
];

function SeoSnippetTool() {
  const [title, setTitle] = useState(
    "CodeLove Studio — Free Browser Video, File & 3D Creator Tools"
  );
  const [desc, setDesc] = useState(
    "Trim videos, convert PDFs, compress WebP images, generate Shorts loops, and explore PBR 3D models directly in your browser."
  );
  const [url, setUrl] = useState("https://codelove.in/tools");
  const [schemaType, setSchemaType] = useState<SchemaType>("WebApplication");
  const [surface, setSurface] = useState<PreviewSurface>("google");
  const [copied, setCopied] = useState(false);

  const metaSnippet = `<title>${title}</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="${url}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:url" content="${url}" />
<script type="application/ld+json">
${JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    description: desc,
    url,
  },
  null,
  2
)}
</script>`;

  const copyHtml = async () => {
    await navigator.clipboard?.writeText(metaSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const titleOk = title.length >= 45 && title.length <= 65;
  const descOk = desc.length >= 110 && desc.length <= 160;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-6">
        <div>
          <div className="flex justify-between text-xs">
            <label htmlFor="seo-title" className="uppercase tracking-wider text-[var(--text-faint)]">
              Page Title
            </label>
            <span className={`font-mono ${titleOk ? "text-emerald-500" : "text-amber-500"}`}>
              {title.length} / 60 chars
            </span>
          </div>
          <input
            id="seo-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs">
            <label htmlFor="seo-desc" className="uppercase tracking-wider text-[var(--text-faint)]">
              Meta Description
            </label>
            <span className={`font-mono ${descOk ? "text-emerald-500" : "text-amber-500"}`}>
              {desc.length} / 160 chars
            </span>
          </div>
          <textarea
            id="seo-desc"
            rows={3}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="seo-url"
            className="block text-xs uppercase tracking-wider text-[var(--text-faint)]"
          >
            Canonical URL
          </label>
          <input
            id="seo-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2.5 font-mono text-xs outline-none focus:border-primary"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <CustomSelect
            id="seo-schema"
            label="Schema.org Type"
            value={schemaType}
            onChange={setSchemaType}
            options={SCHEMA_OPTIONS}
          />
          <CustomSelect
            id="seo-surface"
            label="Preview Surface"
            value={surface}
            onChange={setSurface}
            options={PREVIEW_OPTIONS}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-6">
        {surface === "google" ? (
          <div className="rounded-xl border border-[var(--surface-border)] bg-white p-4 text-left shadow-sm dark:bg-[#0d121d]">
            <p className="truncate font-mono text-xs text-emerald-700 dark:text-emerald-400">
              {url}
            </p>
            <p className="mt-1 line-clamp-1 text-base font-semibold text-blue-700 dark:text-blue-400">
              {title || "Untitled Page"}
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {desc}
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/15 to-primary/10 px-4 py-6 text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                {schemaType} · Open Graph Card
              </span>
            </div>
            <div className="p-4">
              <p className="font-mono text-[11px] uppercase text-[var(--text-faint)]">
                {url.replace(/^https?:\/\//, "").split("/")[0]}
              </p>
              <p className="mt-1 line-clamp-1 text-sm font-bold">{title}</p>
              <p className="mt-1 line-clamp-2 text-xs text-[var(--text-muted)]">{desc}</p>
            </div>
          </div>
        )}

        <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/80 p-3">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Ready Meta + JSON-LD Tags
            </span>
            <button
              type="button"
              onClick={copyHtml}
              className="cursor-pointer rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-semibold text-primary hover:border-primary/40"
            >
              {copied ? "Copied!" : "Copy HTML"}
            </button>
          </div>
          <pre className="max-h-[155px] overflow-auto font-mono text-[11px] leading-relaxed text-[var(--text-muted)]">
            {metaSnippet}
          </pre>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TOOL 7: WCAG CONTRAST & CSS GRADIENT LAB
// ============================================================================
type PalettePreset = "midnight" | "teal" | "paper" | "sunset";
type GradAngle = "135deg" | "90deg" | "180deg";

const PALETTE_PRESETS: Record<
  PalettePreset,
  { fg: string; bg: string; accent: string; label: string }
> = {
  midnight: { fg: "#f8fafc", bg: "#020617", accent: "#2563eb", label: "CodeLove Midnight" },
  teal: { fg: "#ecfeff", bg: "#042f2e", accent: "#06b6d4", label: "Studio Teal" },
  paper: { fg: "#0f172a", bg: "#f8fafc", accent: "#3b82f6", label: "Crisp Light Paper" },
  sunset: { fg: "#fff7ed", bg: "#431407", accent: "#f97316", label: "Creator Sunset" },
};

const PALETTE_OPTIONS: SelectOption<PalettePreset>[] = Object.entries(PALETTE_PRESETS).map(
  ([value, meta]) => ({
    value: value as PalettePreset,
    label: meta.label,
  })
);

const ANGLE_OPTIONS: SelectOption<GradAngle>[] = [
  { value: "135deg", label: "135deg (Diagonal Hero)" },
  { value: "90deg", label: "90deg (Horizontal Bar)" },
  { value: "180deg", label: "180deg (Vertical Card)" },
];

function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace("#", "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned.padEnd(6, "0").slice(0, 6);
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return [0, 0, 0];
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const chan = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * chan[0] + 0.7152 * chan[1] + 0.0722 * chan[2];
}

function contrastRatio(hexA: string, hexB: string): number {
  const l1 = relativeLuminance(hexToRgb(hexA));
  const l2 = relativeLuminance(hexToRgb(hexB));
  const brightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function ColorContrastTool() {
  const [preset, setPreset] = useState<PalettePreset>("midnight");
  const [fg, setFg] = useState("#f8fafc");
  const [bg, setBg] = useState("#020617");
  const [accent, setAccent] = useState("#2563eb");
  const [angle, setAngle] = useState<GradAngle>("135deg");
  const [copiedCss, setCopiedCss] = useState(false);

  const handlePreset = (next: PalettePreset) => {
    setPreset(next);
    setFg(PALETTE_PRESETS[next].fg);
    setBg(PALETTE_PRESETS[next].bg);
    setAccent(PALETTE_PRESETS[next].accent);
  };

  const ratio = contrastRatio(fg, bg);
  const passAA = ratio >= 4.5;
  const passAAA = ratio >= 7.0;
  const cssBlock = `:root {
  --text: ${fg};
  --bg: ${bg};
  --accent: ${accent};
  --hero-gradient: linear-gradient(${angle}, ${bg}, ${accent});
}`;

  const copyCss = async () => {
    await navigator.clipboard?.writeText(cssBlock);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 1800);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-5">
        <CustomSelect
          id="col-preset"
          label="Load Studio Palette"
          value={preset}
          onChange={handlePreset}
          options={PALETTE_OPTIONS}
        />

        <div className="grid grid-cols-3 gap-2.5">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[var(--text-faint)]">
              Text
            </label>
            <input
              type="color"
              value={fg}
              onChange={(e) => setFg(e.target.value)}
              className="mt-1 h-10 w-full cursor-pointer rounded-lg border border-[var(--surface-border)] bg-transparent"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[var(--text-faint)]">
              Surface
            </label>
            <input
              type="color"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
              className="mt-1 h-10 w-full cursor-pointer rounded-lg border border-[var(--surface-border)] bg-transparent"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[var(--text-faint)]">
              Accent
            </label>
            <input
              type="color"
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="mt-1 h-10 w-full cursor-pointer rounded-lg border border-[var(--surface-border)] bg-transparent"
            />
          </div>
        </div>

        <CustomSelect
          id="col-angle"
          label="Gradient Angle"
          value={angle}
          onChange={setAngle}
          options={ANGLE_OPTIONS}
        />
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:col-span-7">
        <div
          style={{ backgroundColor: bg, color: fg }}
          className="rounded-xl border border-[var(--surface-border)] p-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-2xl font-extrabold">
              {ratio.toFixed(2)} : 1
            </span>
            <div className="flex gap-2 text-xs font-bold">
              <span
                className={`rounded-full px-2.5 py-0.5 ${
                  passAA ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/20 text-red-300"
                }`}
              >
                AA {passAA ? "PASS" : "FAIL"}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 ${
                  passAAA ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
                }`}
              >
                AAA {passAAA ? "PASS" : "FAIL"}
              </span>
            </div>
          </div>
          <p className="mt-3 text-base font-semibold">
            Accessible UI typography preview at normal weight.
          </p>
          <div
            style={{ background: `linear-gradient(${angle}, ${bg}, ${accent})` }}
            className="mt-4 h-10 rounded-lg border border-white/15"
          />
        </div>

        <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/80 p-3">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              CSS Variables &amp; Gradient
            </span>
            <button
              type="button"
              onClick={copyCss}
              className="cursor-pointer rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-semibold text-primary"
            >
              {copiedCss ? "Copied!" : "Copy CSS"}
            </button>
          </div>
          <pre className="font-mono text-[11px] leading-relaxed text-[var(--text-muted)]">
            {cssBlock}
          </pre>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TOOL 8: SLUG, BASE64 & CRYPTO UUID TOOLKIT
// ============================================================================
type DevMode = "slug" | "base64" | "uuid";
type SlugSep = "-" | "_";
type UuidFormat = "standard" | "upper" | "prefixed";

const DEV_MODE_OPTIONS: SelectOption<DevMode>[] = [
  { value: "slug", label: "SEO URL Slug & UTM Builder" },
  { value: "base64", label: "Base64 Encode / Decode (UTF-8)" },
  { value: "uuid", label: "Cryptographic UUID v4 Generator" },
];

const SLUG_SEP_OPTIONS: SelectOption<SlugSep>[] = [
  { value: "-", label: "Hyphen (- Recommended for URLs)" },
  { value: "_", label: "Underscore (_ Code Identifier)" },
];

const UUID_FMT_OPTIONS: SelectOption<UuidFormat>[] = [
  { value: "standard", label: "Standard Lowercase UUID v4" },
  { value: "upper", label: "Uppercase Compact (No Hyphens)" },
  { value: "prefixed", label: "API Key Style (cl_...)" },
];

function createUuidBatch(format: UuidFormat): string[] {
  return Array.from({ length: 5 }, () => {
    const raw =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Math.random().toString(16).slice(2, 10)}-4000-8000-${Math.random()
            .toString(16)
            .slice(2, 14)}`;
    if (format === "upper") return raw.replace(/-/g, "").toUpperCase();
    if (format === "prefixed") return `cl_${raw.replace(/-/g, "").slice(0, 24)}`;
    return raw;
  });
}

function DevUtilitiesTool() {
  const [mode, setMode] = useState<DevMode>("slug");
  const [slugInput, setSlugInput] = useState(
    "How to Compress Videos & Prepare 9:16 Shorts in 2026"
  );
  const [sep, setSep] = useState<SlugSep>("-");
  const [utmSource, setUtmSource] = useState("codelove_tools");
  const [b64Text, setB64Text] = useState("https://models.codelove.in");
  const [b64Encoded, setB64Encoded] = useState("aHR0cHM6Ly9tb2RlbHMuY29kZWxvdmUuaW4=");
  const [b64Error, setB64Error] = useState("");
  const [uuidFmt, setUuidFmt] = useState<UuidFormat>("standard");
  const [uuids, setUuids] = useState<string[]>([
    "550e8400-e29b-41d4-a716-446655440000",
    "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  ]);
  const [copied, setCopied] = useState(false);

  const cleanSlug = useMemo(() => {
    return slugInput
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-_]/g, "")
      .replace(/[\s_-]+/g, sep)
      .replace(new RegExp(`^${sep}+|${sep}+$`, "g"), "");
  }, [slugInput, sep]);

  const builtUrl = `https://codelove.in/blog/${cleanSlug || "guide"}${
    utmSource.trim() ? `?utm_source=${encodeURIComponent(utmSource.trim())}` : ""
  }`;

  const handleEncode = (val: string) => {
    setB64Text(val);
    setB64Error("");
    try {
      const bytes = new TextEncoder().encode(val);
      let bin = "";
      bytes.forEach((b) => {
        bin += String.fromCharCode(b);
      });
      setB64Encoded(btoa(bin));
    } catch {
      setB64Error("Encoding failed");
    }
  };

  const handleDecode = (val: string) => {
    setB64Encoded(val);
    setB64Error("");
    try {
      const bin = atob(val.trim());
      const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
      setB64Text(new TextDecoder().decode(bytes));
    } catch {
      setB64Error("Invalid Base64 string");
    }
  };

  const copyValue = async (text: string) => {
    await navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-4 sm:grid-cols-2">
        <CustomSelect
          id="dev-mode"
          label="Developer Utility Mode"
          value={mode}
          onChange={setMode}
          options={DEV_MODE_OPTIONS}
        />

        {mode === "slug" && (
          <CustomSelect
            id="dev-sep"
            label="Word Separator"
            value={sep}
            onChange={setSep}
            options={SLUG_SEP_OPTIONS}
          />
        )}

        {mode === "uuid" && (
          <CustomSelect
            id="dev-uuid-fmt"
            label="Token Format"
            value={uuidFmt}
            onChange={(next) => {
              setUuidFmt(next);
              setUuids(createUuidBatch(next));
            }}
            options={UUID_FMT_OPTIONS}
          />
        )}
      </div>

      {mode === "slug" && (
        <div className="grid gap-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:grid-cols-2">
          <div className="space-y-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--text-faint)]">
                Article or Product Title
              </label>
              <input
                value={slugInput}
                onChange={(e) => setSlugInput(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[var(--text-faint)]">
                UTM Source Tag (Optional)
              </label>
              <input
                value={utmSource}
                onChange={(e) => setUtmSource(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2.5 font-mono text-xs outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/80 p-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
                Generated Slug &amp; Canonical Share URL
              </p>
              <p className="mt-2 break-all font-mono text-sm font-bold text-primary">
                {cleanSlug}
              </p>
              <p className="mt-2 break-all font-mono text-xs text-[var(--text-muted)]">
                {builtUrl}
              </p>
            </div>
            <button
              type="button"
              onClick={() => copyValue(builtUrl)}
              className="mt-4 cursor-pointer self-start rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white"
            >
              {copied ? "Copied!" : "Copy Full URL"}
            </button>
          </div>
        </div>
      )}

      {mode === "base64" && (
        <div className="grid gap-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 lg:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Plain UTF-8 Text
            </label>
            <textarea
              rows={5}
              value={b64Text}
              onChange={(e) => handleEncode(e.target.value)}
              className="w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] p-3 font-mono text-xs outline-none focus:border-primary"
            />
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-semibold uppercase tracking-wider text-[var(--text-faint)]">
                Base64 Output
              </span>
              {b64Error && <span className="text-red-400">{b64Error}</span>}
            </div>
            <textarea
              rows={5}
              value={b64Encoded}
              onChange={(e) => handleDecode(e.target.value)}
              className="w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] p-3 font-mono text-xs outline-none focus:border-primary"
            />
          </div>
        </div>
      )}

      {mode === "uuid" && (
        <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Fresh Batch (5 Cryptographic Tokens)
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setUuids(createUuidBatch(uuidFmt))}
                className="cursor-pointer rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-white"
              >
                Regenerate
              </button>
              <button
                type="button"
                onClick={() => copyValue(uuids.join("\n"))}
                className="cursor-pointer rounded-xl border border-[var(--surface-border)] bg-[var(--bg)] px-3.5 py-2 text-xs font-semibold"
              >
                {copied ? "Copied!" : "Copy All 5"}
              </button>
            </div>
          </div>
          <div className="grid gap-2">
            {uuids.map((id) => (
              <div
                key={id}
                className="flex items-center justify-between rounded-xl border border-[var(--surface-border)] bg-[var(--bg)]/80 px-4 py-2.5 font-mono text-xs"
              >
                <span>{id}</span>
                <button
                  type="button"
                  onClick={() => copyValue(id)}
                  className="cursor-pointer text-[11px] font-semibold text-primary hover:underline"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MAIN WORKBENCH SHELL WITH URL SYNC & SUBDOMAIN LAUNCH BAR
// ============================================================================
function WorkbenchInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const paramTab = searchParams.get("tab");
  const resolvedParam: ToolId = isValidToolId(paramTab) ? paramTab : "image";

  const [selected, setSelected] = useState<{
    tab: ToolId;
    forParam: string | null;
  } | null>(null);

  const activeTab: ToolId =
    selected && selected.forParam === paramTab ? selected.tab : resolvedParam;

  const selectTab = (next: ToolId) => {
    setSelected({ tab: next, forParam: paramTab });
    if (typeof window !== "undefined") {
      const nextUrl = next === "image" ? pathname : `${pathname}?tab=${next}`;
      window.history.replaceState(null, "", nextUrl);
    }
  };

  const currentMeta =
    TOOLS_META.find((t) => t.id === activeTab) ?? TOOLS_META[0];

  return (
    <div className="rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-4 shadow-[var(--shadow-soft)] sm:p-6">
      <div className="flex flex-wrap gap-2 border-b border-[var(--surface-border)] pb-4">
        {TOOLS_META.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => selectTab(t.id)}
              className={`cursor-pointer inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                isActive
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[var(--shadow-glow)]"
                  : "border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-primary/40 hover:text-[var(--text)]"
              }`}
            >
              <Icon name={t.icon} size={15} />
              <span>{t.shortLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
            {currentMeta.badge}
          </span>
          <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">
            {currentMeta.label}
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-[var(--text-muted)]">
            {currentMeta.description}
          </p>
        </div>
      </div>

      {activeTab === "image" && <ImageCompressorTool />}
      {activeTab === "crop" && <SocialCropTool />}
      {activeTab === "bitrate" && <BitrateCalculatorTool />}
      {activeTab === "aspect" && <AspectSafeZoneTool />}
      {activeTab === "json" && <JsonFormatterTool />}
      {activeTab === "seo" && <SeoSnippetTool />}
      {activeTab === "color" && <ColorContrastTool />}
      {activeTab === "dev" && <DevUtilitiesTool />}

      {/* Contextual CodeLove Subdomain Navigation */}
      <div className="mt-7 border-t border-[var(--surface-border)] pt-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            Need heavier workflows? Launch matching CodeLove subdomain studios
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            View all 14 CodeLove Apps <Icon name="arrowRight" size={13} />
          </Link>
        </div>

        <div
          className={`grid gap-3 ${
            currentMeta.relatedApps.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {currentMeta.relatedApps.map((app) => (
            <div
              key={app.host}
              className="flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-4 transition hover:border-primary/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-semibold text-sm">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon name={app.icon} size={15} />
                    </span>
                    {app.name}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--text-faint)]">
                    {app.host}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  {app.desc}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-[var(--surface-border)] pt-2.5 text-xs font-semibold">
                <Link
                  href={app.detailHref}
                  className="text-[var(--text-muted)] hover:text-[var(--text)]"
                >
                  Docs &amp; Guide
                </Link>
                <a
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  Open App <Icon name="arrowUpRight" size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function QuickToolsWorkbench() {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-8 text-center text-sm text-[var(--text-muted)]">
          Loading interactive browser workbench...
        </div>
      }
    >
      <WorkbenchInner />
    </Suspense>
  );
}
