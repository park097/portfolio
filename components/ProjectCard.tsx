"use client";

import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block focus-visible:ring-2 focus-visible:ring-primary/70"
      aria-label={`${project.title} 상세 페이지 이동`}
    >
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        whileHover={{ y: -3, scale: 1.01 }}
        className="glass-card overflow-hidden p-4 transition duration-300 hover:border-primary/40 hover:shadow-glow"
      >
        <div className="relative mb-4 h-44 overflow-hidden border border-white/10">
          <Image
            src={project.thumbnail}
            alt={`${project.title} 프로젝트 썸네일`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">
              {project.category}
            </span>
          </div>
          <p className="line-clamp-2 text-sm text-zinc-300">{project.description}</p>

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
