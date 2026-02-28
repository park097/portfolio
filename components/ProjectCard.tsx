"use client";

import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabel = project.category === "web" ? "Web" : "App";
  const hasSecondaryImage = Boolean(project.secondaryThumbnail);
  const imageHeight = 350;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus-visible:ring-2 focus-visible:ring-primary/70"
      aria-label={`${project.title} details`}
    >
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        whileHover={{ y: -3, scale: 1.01 }}
        className="glass-card overflow-hidden p-4 transition duration-300 hover:border-primary/40 hover:shadow-glow"
      >
        <div
          className="relative mb-4 overflow-hidden border border-white/10 bg-slate-900/40"
          style={{ height: `${imageHeight}px` }}
        >
          {!hasSecondaryImage && (
            <Image
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          {hasSecondaryImage && (
            <>
              <div className="absolute inset-y-0 left-0 w-[58%]">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} primary thumbnail`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 55vw, 30vw"
                />
              </div>
              <div className="absolute inset-y-2 right-2 w-[40%] overflow-hidden rounded-lg border border-white/25 bg-black/35 shadow-lg">
                <Image
                  src={project.secondaryThumbnail as string}
                  alt={`${project.title} secondary thumbnail`}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 35vw, 18vw"
                />
              </div>
            </>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">
              {categoryLabel}
            </span>
          </div>
          <p className="line-clamp-1 text-sm text-zinc-300">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((item) => (
              <span key={item} className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
