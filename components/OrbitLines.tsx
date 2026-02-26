"use client";

export default function OrbitLines() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
      <svg
        viewBox="-120 -120 1440 880"
        className="h-[360px] w-[min(116vw,1260px)] overflow-visible opacity-70 md:h-[540px] md:w-[min(112vw,1260px)]"
        aria-hidden
      >
        <g>
          <ellipse
            cx="600"
            cy="320"
            rx="650"
            ry="200"
            transform="rotate(-18 600 320)"
            className="orbit-line orbit-line-soft"
          />
          <ellipse
            cx="600"
            cy="320"
            rx="650"
            ry="200"
            transform="rotate(19 600 320)"
            className="orbit-line orbit-line-gold"
          />
        </g>
      </svg>
    </div>
  );
}
