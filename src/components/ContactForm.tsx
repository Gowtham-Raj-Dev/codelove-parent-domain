"use client";

import { useState } from "react";
import CustomSelect from "./CustomSelect";
import Icon from "./Icon";

const TOPIC_OPTIONS = [
  { value: "Bug report", label: "Bug report", hint: "Broken page, conversion error, or visual issue" },
  { value: "Feature idea", label: "Feature idea", hint: "Suggest a tool or improvement" },
  { value: "Tool feedback", label: "Tool feedback", hint: "General experience & usability note" },
  { value: "Licensing / attribution", label: "Licensing / attribution", hint: "3D models, J2ME games, or credit enquiries" },
  { value: "Partnerships & press", label: "Partnerships & press", hint: "Collaborations & media enquiries" },
];

export default function ContactForm({ supportEmail }: { supportEmail: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPIC_OPTIONS[0].value);
  const [pageUrl, setPageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const formattedBody = [
    `Topic: ${topic}`,
    `Name: ${name.trim() || "Not provided"}`,
    `Reply Email: ${email.trim() || "Not provided"}`,
    `Tool / Page URL: ${pageUrl.trim() || "https://codelove.in"}`,
    "",
    message.trim(),
  ].join("\n");

  const handleCompose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || message.trim().length < 10) {
      setStatus({ type: "err", text: "Please describe your question or issue (at least 10 characters)." });
      return;
    }
    const subject = encodeURIComponent(`[CodeLove ${topic}] ${name.trim() || "Message"}`);
    const body = encodeURIComponent(formattedBody);
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
    setStatus({
      type: "ok",
      text: `Draft prepared for ${supportEmail}. If your mail client did not open automatically, copy the formatted note below.`,
    });
  };

  const handleCopy = async () => {
    if (!message.trim()) {
      setStatus({ type: "err", text: "Enter your message above before copying." });
      return;
    }
    try {
      await navigator.clipboard.writeText(`To: ${supportEmail}\nSubject: [CodeLove ${topic}]\n\n${formattedBody}`);
      setStatus({ type: "ok", text: `Copied message and recipient (${supportEmail}) to clipboard.` });
    } catch {
      setStatus({ type: "err", text: "Clipboard access was blocked by the browser. Please copy manually." });
    }
  };

  return (
    <form
      onSubmit={handleCompose}
      className="space-y-4 rounded-3xl border border-[var(--surface-border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight sm:text-2xl">
          Send a structured inquiry
        </h2>
        <p className="mt-1.5 text-sm text-[var(--text-muted)]">
          Prepare a pre-formatted support note with tool URL details so we can reproduce issues faster.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            Your Name
          </label>
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Arun"
            className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            Reply Email
          </label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <CustomSelect
          id="cf-topic"
          label="Topic"
          value={topic}
          onChange={setTopic}
          options={TOPIC_OPTIONS}
        />
        <div>
          <label htmlFor="cf-url" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
            Related Tool or Page (optional)
          </label>
          <input
            id="cf-url"
            type="text"
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
            placeholder="e.g. codelove.in/tools or videocut"
            className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-msg" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)]">
          Message
        </label>
        <textarea
          id="cf-msg"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what happened, browser version, or the feature you would find helpful..."
          className="mt-1.5 w-full rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-3.5 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      {status && (
        <p className={`rounded-xl px-3.5 py-2.5 text-xs font-medium ${status.type === "ok" ? "bg-emerald-500/12 text-emerald-500" : "bg-rose-500/12 text-rose-500"}`}>
          {status.text}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
        >
          <Icon name="mail" size={16} />
          Open Email Draft
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold transition hover:border-primary"
        >
          <Icon name="fileText" size={16} />
          Copy Formatted Note
        </button>
      </div>
    </form>
  );
}
