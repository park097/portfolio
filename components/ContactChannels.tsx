"use client";

import { FileText, Github, Mail, Phone } from "lucide-react";
import Link from "next/link";

const EMAIL = "qkralsgml24@gmail.com";

function emitFeedback(message: string) {
  window.dispatchEvent(new CustomEvent("app-feedback", { detail: { message } }));
}

export default function ContactChannels() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      emitFeedback("복사되었습니다.");
    } catch {
      emitFeedback("복사에 실패했습니다.");
    }
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <h2 className="text-xl font-medium">Contact Channels</h2>
      <p className="mt-2 text-sm text-zinc-400">원하시는 채널로 연락하실 수 있습니다.</p>
      <div className="mt-5 space-y-3">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex w-full items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
        >
          <span className="inline-flex items-center gap-2">
            <Mail size={16} />
            {EMAIL}
          </span>
          <span aria-hidden>→</span>
        </button>
        <Link
          href="https://www.notion.so/Full-Stack-Developer-Portfolio-23ad112469dd80d8b1c0cba116759e6b"
          className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
        >
          <span className="inline-flex items-center gap-2">
            <FileText size={16} />
            Notion
          </span>
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="https://github.com/park097"
          className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
        >
          <span className="inline-flex items-center gap-2">
            <Github size={16} />
            GitHub
          </span>
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="tel:01087422845"
          className="flex items-center justify-between rounded-lg border border-white/12 px-4 py-3 text-sm text-zinc-200 transition hover:border-primary/45 hover:text-primary"
        >
          <span className="inline-flex items-center gap-2">
            <Phone size={16} />
            010-8742-2845
          </span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
