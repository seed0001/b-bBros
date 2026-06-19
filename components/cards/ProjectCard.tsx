/* eslint-disable @next/next/no-img-element */
import { getCreator } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { GitHubStats } from "@/components/GitHubStats";

const kindTone: Record<Project["kind"], "brand" | "accent" | "default"> = {
  companion: "brand",
  framework: "accent",
  application: "brand",
  repository: "default",
  research: "default",
  course: "accent",
  article: "default",
};

export function ProjectCard({ project }: { project: Project }) {
  const author = getCreator(project.authorUsername);
  return (
    <Card href={`/projects/${project.slug}`} className="flex flex-col">
      {project.cover && (
        <div className="h-40 w-full overflow-hidden bg-surface-2">
          <img
            src={project.cover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <Badge tone={kindTone[project.kind]} className="capitalize">
            {project.kind}
          </Badge>
        </div>
        <h3 className="font-semibold">{project.name}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">
          {project.tagline}
        </p>

        <div className="mt-4">
          <GitHubStats meta={project.github} variant="inline" />
        </div>

        {author && (
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
            <Avatar src={author.avatar} alt={author.name} size="sm" />
            <span className="text-sm text-muted">{author.name}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
