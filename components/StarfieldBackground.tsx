"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
  gold: boolean;
};

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let currentOffsetX = 0;
    let currentOffsetY = 0;
    let lastTime = 0;
    const fpsInterval = 1000 / 30;

    const isMobile = () => window.innerWidth < 768;

    const buildStars = () => {
      const count = isMobile() ? 60 : 110;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        speed: Math.random() * 0.06 + 0.015,
        size: Math.random() * 1.1 + 0.4,
        gold: Math.random() < 0.12,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = nx * 10;
      mouseY = ny * 10;
    };

    const onMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    const render = (time: number) => {
      rafRef.current = window.requestAnimationFrame(render);
      if (time - lastTime < fpsInterval) return;
      lastTime = time;

      currentOffsetX += (mouseX - currentOffsetX) * 0.05;
      currentOffsetY += (mouseY - currentOffsetY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        star.y -= star.speed * (1 + star.z);
        if (star.y < -2) {
          star.y = height + 2;
          star.x = Math.random() * width;
        }

        const px = star.x + currentOffsetX * star.z;
        const py = star.y + currentOffsetY * star.z;
        const alpha = 0.08 + star.z * 0.1;
        ctx.fillStyle = star.gold
          ? `rgba(224,195,108,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    rafRef.current = window.requestAnimationFrame(render);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-80" aria-hidden />
    </div>
  );
}
