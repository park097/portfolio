"use client";

import { motion } from "framer-motion";
import OrbitLines from "@/components/OrbitLines";
import StarfieldBackground from "@/components/StarfieldBackground";
import ScrollDown from "@/components/ScrollDown";

export default function Hero() {
  return (
    <section id="home" className="section relative scroll-mt-24 pt-24 md:pt-28">
      <StarfieldBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,195,108,0.2)_0%,rgba(255,255,255,0.08)_26%,rgba(10,10,13,0)_70%)] blur-3xl" />
      <div className="container flex min-h-[72svh] flex-col items-center justify-center gap-12 md:min-h-[76svh] md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 max-w-[80rem] space-y-6 text-center"
        >
          <OrbitLines />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-muted">
              <span className="accent-dot" />
              Developer Portfolio
            </div>
            <h1 className="hero-title mt-3 text-5xl font-medium leading-[1.06] tracking-tight md:text-7xl lg:text-8xl">
              I build and deploy reliable
              <span className="hero-title-accent block">web & app systems.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl whitespace-pre-line text-base leading-relaxed text-zinc-300 md:text-lg">
              SOFTWARE ENGINEER{"\n"}FULL-STACK DEVELOPER · WEB, APP & INFRASTRUCTURE
            </p>
          </div>
        </motion.div>

        <div className="relative z-10 mt-8 md:mt-14">
          <ScrollDown targetId="projects" />
        </div>
      </div>
    </section>
  );
}

