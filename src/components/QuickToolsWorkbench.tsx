"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon";

type ToolTab = "image" | "bitrate" | "aspect" | "json-seo";

const TABS: { id: ToolTab; label: string; desc: string }[] = [
  { id: "image", label: "Image Compressor & Converter", desc: "Resize & convert to WebP, JPG, or PNG locally" },
  { id: "bitrate", label: "Video Bitrate & Size Calculator", desc: "Calculate MP4 export size & codec bitrates" },
  { id: "aspect", label: "Shorts & Aspect Ratio Planner", desc: "Exact crop dimensions & 9:16 safe-zone guide" },
  { id: "json-seo", label: "JSON & Meta Previewer", desc: "Format JSON or check Google snippet limits" },
];

function formatBytes(bytes: number): string {
  if (!bytes || bytes < 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

function ImageOptimizerTool() {
  const [sourceUrl, setSourceUrl] = useState<string>("");
  const [sourceName, setSourceName] = useState<string>("sample-graphic.png");
  const [origSize, setOrigSize] = useState<number>(0);
  const [origDims, setOrigDims] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [format, setFormat] = useState<"image/webp" | "image/jpeg" | "image/png">("image/webp");
  const [quality, setQuality] = useState<number>(82);
  const [maxWidth, setMaxWidth] = useState<number>(1600);
  const [outUrl, setOutUrl] = useState<string>("");
  const [outSize, setOutSize] = useState<number>(0);
  const [outDims, setOutDims] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  const [processing, setProcessing] = useState<boolean>(false);
  const loadedImgRef = useRef<HTMLImageElement | null>(null);

  const reencode = useCallback(
    (img: HTMLImageElement, fmt: typeof format, q: number, limitW: number) => {
      setProcessing(true);
      const scale = limitW > 0 && img.naturalWidth > limitW ? limitW / img.naturalWidth : 1;
      const targetW = Math.max(1, Math.round(img.naturalWidth * scale));
      const targetH = Math.max(1, Math.round(img.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setProcessing(false);
        return;
      }
      if (fmt === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, targetW, targetH);
      }
      ctx.drawImage(img, 0, 0, targetW, targetH);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            setOutUrl((prev) => {
              if (prev) URL.revokeObjectURL(prev);
              return URL.createObjectURL(blob);
            });
            setOutSize(blob.size);
            setOutDims({ w: targetW, h: targetH });
          }
          setProcessing(false);
        },
        fmt,
        fmt === "image/png" ? undefined : q / 100
      );
    },
    []
  );

  const loadFromFile = useCallback(
    (file: File) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        loadedImgRef.current = img;
        setSourceUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return url;
        });
        setSourceName(file.name);
        setOrigSize(file.size);
        setOrigDims({ w: img.naturalWidth, h: img.naturalHeight });
        reencode(img, format, quality, maxWidth);
      };
      img.src = url;
    },
    [format, maxWidth, quality, reencode]
  );

  const loadSampleImage = useCallback(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1280;
    canvas.height = 800;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const grad = ctx.createLinearGradient(0, 0, 1280, 800);
    grad.addColorStop(0, "#1e1b4b");
    grad.addColorStop(0.5, "#3b82f6");
    grad.addColorStop(1, "#a855f7");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 800);
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = `rgba(255,255,255,${0.08 + i * 0.03})`;
      ctx.beginPath();
      ctx.arc(220 + i * 170, 260 + (i % 2) * 220, 90 + i * 14, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 54px system-ui, sans-serif";
    ctx.fillText("CodeLove Image Lab", 110, 390);
    ctx.font = "28px system-ui, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillText("Sample 1280x800 asset — test WebP / JPG / PNG compression locally", 110, 445);
    canvas.toBlob((blob) => {
      if (!blob) return;
      loadFromFile(new File([blob], "codelove-sample.png", { type: "image/png" }));
    }, "image/png");
  }, [loadFromFile]);

  useEffect(() => {
    if (loadedImgRef.current) {
      reencode(loadedImgRef.current, format, quality, maxWidth);
    }
  }, [format, quality, maxWidth, reencode]);

  const savingsPct = origSize > 0 && outSize > 0 ? Math.round(((origSize - outSize) / origSize) * 100) : 0;
  const ext = format === "image/webp" ? "webp" : format === "image/jpeg" ? "jpg" : "png";
  const downloadName = `${sourceName.replace(/\.[^.]+$/, "")}-optimized.${ext}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-5 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-6">
        <div>
          <label className="block text-sm font-semibold text-[var(--text)]">Choose an image file</label>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            Runs via browser HTML5 Canvas — your file stays strictly on your device.
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-110">
              <Icon name="image" size={15} />
              Upload Image
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp,image/gif,image/bmp"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) loadFromFile(file);
                }}
              />
            </label>
            <button
              type="button"
              onClick={loadSampleImage}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-xs font-semibold text-[var(--text)] transition hover:border-primary"
            >
              <Icon name="sparkles" size={14} />
              Try Sample Graphic
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="img-format" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Output Format
            </label>
            <select
              id="img-format"
              value={format}
              onChange={(e) => setFormat(e.target.value as typeof format)}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            >
              <option value="image/webp">WebP (Smallest modern web)</option>
              <option value="image/jpeg">JPG (Best for photos)</option>
              <option value="image/png">PNG (Lossless &amp; alpha)</option>
            </select>
          </div>

          <div>
            <label htmlFor="img-max-w" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Max Width (px)
            </label>
            <select
              id="img-max-w"
              value={maxWidth}
              onChange={(e) => setMaxWidth(Number(e.target.value))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            >
              <option value={0}>Original width</option>
              <option value={1920}>1920 px (Full HD)</option>
              <option value={1600}>1600 px (Blog hero)</option>
              <option value={1200}>1200 px (Social / OG)</option>
              <option value={800}>800 px (Compact)</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="uppercase tracking-wider text-[var(--text-faint)]">Compression Quality</span>
            <span className="text-primary">{format === "image/png" ? "Lossless" : `${quality}%`}</span>
          </div>
          <input
            type="range"
            min={15}
            max={100}
            value={quality}
            disabled={format === "image/png"}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="mt-2 w-full accent-primary disabled:opacity-40"
          />
        </div>

        {origSize > 0 && (
          <div className="grid grid-cols-3 gap-2.5 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-3 text-center">
            <div>
              <p className="text-[11px] text-[var(--text-faint)]">Original</p>
              <p className="text-sm font-bold">{formatBytes(origSize)}</p>
              <p className="text-[10px] text-[var(--text-muted)]">{origDims.w}×{origDims.h}</p>
            </div>
            <div>
              <p className="text-[11px] text-[var(--text-faint)]">Optimized</p>
              <p className="text-sm font-bold text-primary">{formatBytes(outSize)}</p>
              <p className="text-[10px] text-[var(--text-muted)]">{outDims.w}×{outDims.h}</p>
            </div>
            <div>
              <p className="text-[11px] text-[var(--text-faint)]">Change</p>
              <p className={`text-sm font-bold ${savingsPct >= 0 ? "text-emerald-500" : "text-amber-500"}`}>
                {savingsPct >= 0 ? `-${savingsPct}%` : `+${Math.abs(savingsPct)}%`}
              </p>
              <p className="text-[10px] text-[var(--text-muted)]">{ext.toUpperCase()}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-6">
        <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-[var(--surface-border)] bg-[var(--bg-elevated)] p-4 text-center min-h-[16rem]">
          {outUrl ? (
            <div className="grid w-full gap-3 sm:grid-cols-2">
              {sourceUrl && (
                <figure className="space-y-1.5">
                  <figcaption className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">Original</figcaption>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sourceUrl} alt="Original upload preview" className="mx-auto max-h-52 rounded-lg object-contain" />
                </figure>
              )}
              <figure className="space-y-1.5">
                <figcaption className="text-[11px] font-semibold uppercase tracking-wider text-primary">Optimized ({ext.toUpperCase()})</figcaption>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={outUrl} alt="Optimized preview" className="mx-auto max-h-52 rounded-lg object-contain" />
              </figure>
            </div>
          ) : (
            <div className="max-w-xs space-y-2 text-sm text-[var(--text-muted)]">
              <p className="font-semibold text-[var(--text)]">Live Preview Ready</p>
              <p className="text-xs">
                Upload a JPG, PNG, or WebP file on the left — or click <strong>Try Sample Graphic</strong> to test optimization immediately.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[var(--text-muted)]">
            {processing ? "Encoding in browser..." : outUrl ? `Ready: ${downloadName}` : "Zero server uploads"}
          </span>
          {outUrl && (
            <a
              href={outUrl}
              download={downloadName}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              <Icon name="download" size={14} />
              Download {ext.toUpperCase()}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function VideoBitrateTool() {
  const [minutes, setMinutes] = useState<number>(3);
  const [seconds, setSeconds] = useState<number>(0);
  const [preset, setPreset] = useState<"yt1080" | "yt4k" | "shorts" | "target">("shorts");
  const [targetMb, setTargetMb] = useState<number>(25);
  const [codec, setCodec] = useState<"h264" | "hevc" | "av1">("h264");
  const [audioKbps, setAudioKbps] = useState<number>(192);

  const calc = useMemo(() => {
    const totalSec = Math.max(1, minutes * 60 + seconds);
    const codecFactor = codec === "h264" ? 1 : codec === "hevc" ? 0.72 : 0.62;
    const baseKbps =
      preset === "yt4k" ? 35000 : preset === "yt1080" ? 8000 : preset === "shorts" ? 10000 : 0;

    let videoKbps = Math.round(baseKbps * codecFactor);
    if (preset === "target") {
      const totalKbits = targetMb * 8192;
      videoKbps = Math.max(250, Math.floor(totalKbits / totalSec - audioKbps));
    }
    const totalKbps = videoKbps + audioKbps;
    const estMb = (totalKbps * totalSec) / 8192;
    const uploadMbpsSec = estMb * 8 / 25;
    return { totalSec, videoKbps, totalKbps, estMb, uploadMbpsSec };
  }, [audioKbps, codec, minutes, preset, seconds, targetMb]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-6">
        <div>
          <label htmlFor="br-preset" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            Export Profile
          </label>
          <select
            id="br-preset"
            value={preset}
            onChange={(e) => setPreset(e.target.value as typeof preset)}
            className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="shorts">Shorts / Reels 1080×1920 (High motion)</option>
            <option value="yt1080">YouTube 1080p Standard (30 fps)</option>
            <option value="yt4k">YouTube 4K UHD (30–60 fps)</option>
            <option value="target">Target File Size Limit (MB cap)</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="br-min" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Minutes
            </label>
            <input
              id="br-min"
              type="number"
              min={0}
              max={600}
              value={minutes}
              onChange={(e) => setMinutes(Math.max(0, Number(e.target.value) || 0))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="br-sec" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Seconds
            </label>
            <input
              id="br-sec"
              type="number"
              min={0}
              max={59}
              value={seconds}
              onChange={(e) => setSeconds(Math.max(0, Math.min(59, Number(e.target.value) || 0)))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        {preset === "target" && (
          <div>
            <label htmlFor="br-mb" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Max Output Size (MB)
            </label>
            <input
              id="br-mb"
              type="number"
              min={1}
              max={4096}
              value={targetMb}
              onChange={(e) => setTargetMb(Math.max(1, Number(e.target.value) || 10))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="br-codec" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Video Codec
            </label>
            <select
              id="br-codec"
              value={codec}
              onChange={(e) => setCodec(e.target.value as typeof codec)}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            >
              <option value="h264">H.264 / AVC (Universal)</option>
              <option value="hevc">H.265 / HEVC (~28% smaller)</option>
              <option value="av1">AV1 (~38% smaller)</option>
            </select>
          </div>
          <div>
            <label htmlFor="br-audio" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Audio Bitrate
            </label>
            <select
              id="br-audio"
              value={audioKbps}
              onChange={(e) => setAudioKbps(Number(e.target.value))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            >
              <option value={128}>128 kbps (Voice / AAC)</option>
              <option value={192}>192 kbps (Standard Stereo)</option>
              <option value={320}>320 kbps (High Fidelity)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Recommended Export Parameters</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-4">
              <p className="text-xs text-[var(--text-faint)]">Video Bitrate</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
                {calc.videoKbps.toLocaleString()} kbps
              </p>
              <p className="text-[11px] text-[var(--text-muted)]">{(calc.videoKbps / 1000).toFixed(2)} Mbps</p>
            </div>
            <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-4">
              <p className="text-xs text-[var(--text-faint)]">Estimated MP4 Size</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold">
                {calc.estMb >= 1024 ? `${(calc.estMb / 1024).toFixed(2)} GB` : `${calc.estMb.toFixed(1)} MB`}
              </p>
              <p className="text-[11px] text-[var(--text-muted)]">Over {calc.totalSec}s total duration</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-xs text-[var(--text-muted)]">
            <li className="flex items-center justify-between border-b border-[var(--surface-border)] pb-2">
              <span>Combined bitrate (Video + Audio)</span>
              <strong className="text-[var(--text)]">{calc.totalKbps.toLocaleString()} kbps</strong>
            </li>
            <li className="flex items-center justify-between border-b border-[var(--surface-border)] pb-2">
              <span>2-pass / VBR ceiling (+15%)</span>
              <strong className="text-[var(--text)]">{Math.round(calc.videoKbps * 1.15).toLocaleString()} kbps</strong>
            </li>
            <li className="flex items-center justify-between">
              <span>Min upload speed for 25s upload</span>
              <strong className="text-[var(--text)]">{calc.uploadMbpsSec.toFixed(1)} Mbps</strong>
            </li>
          </ul>
        </div>

        <p className="mt-4 rounded-xl bg-[var(--bg-elevated)] px-3.5 py-2.5 text-xs text-[var(--text-muted)]">
          Tip: Use <strong>H.264 + AAC 192 kbps</strong> inside an <strong>.mp4</strong> container when uploading to Shorts, Reels, or older mobile players.
        </p>
      </div>
    </div>
  );
}

function AspectRatioTool() {
  const [srcW, setSrcW] = useState<number>(1920);
  const [srcH, setSrcH] = useState<number>(1080);
  const [ratio, setRatio] = useState<"9:16" | "16:9" | "1:1" | "4:5">("9:16");

  const result = useMemo(() => {
    const [rw, rh] = ratio.split(":").map(Number);
    const targetRatio = rw / rh;
    const srcRatio = srcW / Math.max(1, srcH);
    let cropW = srcW;
    let cropH = srcH;
    if (srcRatio > targetRatio) {
      cropW = Math.round(srcH * targetRatio);
    } else {
      cropH = Math.round(srcW / targetRatio);
    }
    const evenCropW = cropW - (cropW % 2);
    const evenCropH = cropH - (cropH % 2);
    const stdOut =
      ratio === "9:16"
        ? "1080 × 1920"
        : ratio === "16:9"
        ? "1920 × 1080"
        : ratio === "4:5"
        ? "1080 × 1350"
        : "1080 × 1080";
    return { evenCropW, evenCropH, stdOut, retainedPct: Math.round(((evenCropW * evenCropH) / Math.max(1, srcW * srcH)) * 100) };
  }, [ratio, srcH, srcW]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="ar-w" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Source Width (px)
            </label>
            <input
              id="ar-w"
              type="number"
              min={100}
              max={7680}
              value={srcW}
              onChange={(e) => setSrcW(Math.max(100, Number(e.target.value) || 1920))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="ar-h" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
              Source Height (px)
            </label>
            <input
              id="ar-h"
              type="number"
              min={100}
              max={4320}
              value={srcH}
              onChange={(e) => setSrcH(Math.max(100, Number(e.target.value) || 1080))}
              className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            Target Aspect Ratio
          </span>
          <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {(["9:16", "16:9", "4:5", "1:1"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRatio(r)}
                className={`cursor-pointer rounded-xl border px-3 py-2 text-xs font-bold transition ${
                  ratio === r
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-[var(--surface-border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-3.5 text-center">
          <div>
            <p className="text-[11px] text-[var(--text-faint)]">Exact Crop</p>
            <p className="text-sm font-bold text-primary">{result.evenCropW}×{result.evenCropH}</p>
          </div>
          <div>
            <p className="text-[11px] text-[var(--text-faint)]">Export Standard</p>
            <p className="text-sm font-bold">{result.stdOut}</p>
          </div>
          <div>
            <p className="text-[11px] text-[var(--text-faint)]">Frame Kept</p>
            <p className="text-sm font-bold">{result.retainedPct}%</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-6">
        <div
          className={`relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-primary/50 bg-[var(--bg-elevated)] ${
            ratio === "9:16"
              ? "h-64 w-36"
              : ratio === "4:5"
              ? "h-60 w-48"
              : ratio === "1:1"
              ? "h-52 w-52"
              : "h-44 w-72"
          }`}
        >
          {ratio === "9:16" && (
            <>
              <div className="absolute inset-x-0 top-0 h-[14%] bg-amber-500/20 text-center text-[9px] font-semibold leading-7 text-amber-400">
                Top Header Margin
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[24%] bg-rose-500/20 text-center text-[9px] font-semibold leading-10 text-rose-400">
                Captions / Title UI Zone
              </div>
            </>
          )}
          <div className="border border-dashed border-emerald-500/70 bg-emerald-500/10 px-3 py-2 text-center">
            <p className="text-xs font-bold text-emerald-500">Safe Subject Area</p>
            <p className="text-[10px] text-[var(--text-muted)]">{result.stdOut}</p>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-[var(--text-muted)]">
          All dimensions rounded to even pixel multiples required by H.264 / MP4 encoders.
        </p>
      </div>
    </div>
  );
}

function JsonSeoTool() {
  const [subMode, setSubMode] = useState<"seo" | "json">("seo");
  const [metaTitle, setMetaTitle] = useState<string>("How Browser Media Compression Works Without Server Uploads");
  const [metaDesc, setMetaDesc] = useState<string>(
    "Learn how WebAssembly and Canvas shrink images and videos locally in your browser without sacrificing clarity or privacy."
  );
  const [jsonText, setJsonText] = useState<string>('{"brand":"CodeLove","free":true,"tools":["Image Lab","Bitrate Calc","Aspect Planner"]}');
  const [jsonErr, setJsonErr] = useState<string>("");

  const formatJson = (pretty: boolean) => {
    try {
      const parsed = JSON.parse(jsonText);
      setJsonText(pretty ? JSON.stringify(parsed, null, 2) : JSON.stringify(parsed));
      setJsonErr("");
    } catch (e) {
      setJsonErr(e instanceof Error ? e.message : "Invalid JSON");
    }
  };

  return (
    <div className="space-y-4 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-5 sm:p-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSubMode("seo")}
          className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition ${
            subMode === "seo"
              ? "bg-gradient-to-r from-primary to-secondary text-white"
              : "border border-[var(--surface-border)] bg-[var(--bg-elevated)] text-[var(--text-muted)]"
          }`}
        >
          Google SERP &amp; Meta Preview
        </button>
        <button
          type="button"
          onClick={() => setSubMode("json")}
          className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition ${
            subMode === "json"
              ? "bg-gradient-to-r from-primary to-secondary text-white"
              : "border border-[var(--surface-border)] bg-[var(--bg-elevated)] text-[var(--text-muted)]"
          }`}
        >
          JSON Validator &amp; Formatter
        </button>
      </div>

      {subMode === "seo" ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <label htmlFor="seo-title" className="text-[var(--text)]">Page Title</label>
                <span className={metaTitle.length > 60 ? "text-amber-500" : "text-emerald-500"}>
                  {metaTitle.length} / 60 chars
                </span>
              </div>
              <input
                id="seo-title"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <label htmlFor="seo-desc" className="text-[var(--text)]">Meta Description</label>
                <span className={metaDesc.length > 160 || metaDesc.length < 70 ? "text-amber-500" : "text-emerald-500"}>
                  {metaDesc.length} / 160 chars
                </span>
              </div>
              <textarea
                id="seo-desc"
                rows={3}
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">Search Snippet Preview</p>
            <div className="mt-3 space-y-1">
              <p className="text-xs text-[var(--text-muted)]">https://codelove.in/learn</p>
              <h3 className="text-lg font-semibold leading-snug text-primary">
                {metaTitle.slice(0, 62)}{metaTitle.length > 62 ? "..." : ""}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                {metaDesc.slice(0, 160)}{metaDesc.length > 160 ? "..." : ""}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => formatJson(true)}
                className="cursor-pointer rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-semibold text-white"
              >
                Format &amp; Validate
              </button>
              <button
                type="button"
                onClick={() => formatJson(false)}
                className="cursor-pointer rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] px-4 py-2 text-xs font-semibold"
              >
                Minify
              </button>
            </div>
            <span className={`text-xs font-semibold ${jsonErr ? "text-rose-500" : "text-emerald-500"}`}>
              {jsonErr ? `Syntax Error: ${jsonErr}` : `${new Blob([jsonText]).size} bytes`}
            </span>
          </div>
          <textarea
            rows={8}
            value={jsonText}
            onChange={(e) => {
              setJsonText(e.target.value);
              setJsonErr("");
            }}
            spellCheck={false}
            className="w-full rounded-xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-3.5 font-mono text-xs leading-relaxed outline-none focus:border-primary"
          />
        </div>
      )}
    </div>
  );
}

export default function QuickToolsWorkbench() {
  const [active, setActive] = useState<ToolTab>("image");

  return (
    <div className="rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-4 shadow-[var(--shadow-soft)] sm:p-7">
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {TABS.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`cursor-pointer rounded-2xl border p-3.5 text-left transition ${
                isActive
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-[var(--surface-border)] bg-[var(--surface)] hover:border-primary/40"
              }`}
            >
              <p className={`text-sm font-bold ${isActive ? "text-primary" : "text-[var(--text)]"}`}>{t.label}</p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">{t.desc}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {active === "image" && <ImageOptimizerTool />}
        {active === "bitrate" && <VideoBitrateTool />}
        {active === "aspect" && <AspectRatioTool />}
        {active === "json-seo" && <JsonSeoTool />}
      </div>
    </div>
  );
}
