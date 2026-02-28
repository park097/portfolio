"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type Filter = "All" | ProjectCategory;
const formatCategoryLabel = (value: Filter) => (value === "All" ? "All" : value === "web" ? "Web" : "App");

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visibleItems = useMemo<(Project | null)[]>(() => {
    if (filter !== "All") {
      return projects.filter((project) => project.category === filter);
    }

    const webProjects = projects.filter((project) => project.category === "web");
    const appProjects = projects.filter((project) => project.category === "app");
    const placeholdersNeeded = (3 - (webProjects.length % 3)) % 3;
    const placeholders = Array.from({ length: placeholdersNeeded }, () => null);

    return [...webProjects, ...placeholders, ...appProjects];
  }, [filter, projects]);

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
        {visibleItems.map((project, index) =>
          project ? (
            <ProjectCard key={project.slug} project={project} />
          ) : (
            <div key={`placeholder-${index}`} className="hidden lg:block" aria-hidden />
          )
        )}
      </div>
    </div>
  );
}
