"use client";

import { useEffect, useState } from "react";

type FeedbackDetail = {
  message: string;
};

export default function FeedbackModal() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<FeedbackDetail>).detail;
      if (!detail?.message) return;

      setMessage(detail.message);
      setOpen(true);

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setOpen(false);
      }, 1600);
    };

    window.addEventListener("app-feedback", handler as EventListener);
    return () => {
      window.removeEventListener("app-feedback", handler as EventListener);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[80]">
      <div className="flex min-w-[260px] items-center gap-3 rounded-xl border border-primary/45 bg-[#14161f]/95 px-5 py-4 text-zinc-100 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <div className="rounded-lg border border-primary/45 bg-primary/10 p-2 text-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12.5l4.2 4.2L19 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
