"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type Filter = "All" | ProjectCategory;
const formatCategoryLabel = (value: Filter) => (value === "All" ? "All" : value === "web" ? "Web" : "App");

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter, projects]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === item
                ? "border-primary/60 bg-primary/15 text-primary"
                : "border-white/15 text-zinc-300 hover:border-primary/35 hover:text-primary"
            }`}
          >
            {formatCategoryLabel(item)}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
