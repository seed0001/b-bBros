"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectKind } from "@/lib/types";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FilterTabs } from "@/components/FilterTabs";

type Filter = "all" | ProjectKind;

const options: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "companion", label: "AI Companions" },
  { value: "framework", label: "Frameworks" },
  { value: "application", label: "Applications" },
  { value: "research", label: "Research" },
];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.kind === filter),
    [filter, projects]
  );

  return (
    <div className="space-y-8">
      <FilterTabs options={options} value={filter} onChange={setFilter} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      {shown.length === 0 && (
        <p className="py-12 text-center text-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
