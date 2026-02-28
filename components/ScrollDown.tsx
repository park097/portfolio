"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

type ScrollDownProps = {
  targetId: string;
};

export default function ScrollDown({ targetId }: ScrollDownProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="다음 섹션으로 스크롤"
      className="group inline-flex flex-col items-center gap-2 text-zinc-400 transition hover:text-primary/90"
    >
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="flex h-11 w-7 items-start justify-center rounded-full border border-white/20 p-1.5 group-hover:border-primary/45 group-hover:shadow-[0_0_16px_rgba(224,195,108,0.22)]"
      >
        <motion.span
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-2 w-1 rounded-full bg-primary"
        />
      </motion.span>
      <ArrowDown size={15} />
    </button>
  );
}
