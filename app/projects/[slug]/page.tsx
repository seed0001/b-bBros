/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, CircleDot, FileCode2, MessagesSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { GitHubStats } from "@/components/GitHubStats";
import { projects, getProject, getCreator } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  return {
    title: project?.name ?? "Project",
    description: project?.tagline,
  };
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const author = getCreator(project.authorUsername);

  return (
    <>
      {project.cover && (
        <div className="relative h-56 w-full overflow-hidden bg-surface-2 sm:h-72">
          <img src={project.cover} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
        </div>
      )}

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* Main */}
          <article>
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge tone="brand" className="capitalize">
                {project.kind}
              </Badge>
              {project.tags.map((t) => (
                <Badge key={t} tone="outline">
                  {t}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>

            {author && (
              <Link
                href={`/creators/${author.username}`}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 transition-colors hover:border-brand/50"
              >
                <Avatar src={author.avatar} alt={author.name} size="sm" />
                <span className="text-sm">
                  by <span className="font-medium text-fg">{author.name}</span>
                </span>
              </Link>
            )}

            <div className="prose-invert mt-8 max-w-none">
              <h2 className="text-xl font-semibold">About this project</h2>
              <p className="mt-2 leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            {/* GitHub-citizen quick links (designed for live API data) */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: FileCode2, label: "Source code", sub: "Browse the repository" },
                { icon: BookOpen, label: "Documentation", sub: "Guides & API docs" },
                { icon: CircleDot, label: "Issue tracker", sub: "Report bugs & requests" },
                { icon: MessagesSquare, label: "Discussions", sub: "Ask the community" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={project.github.repoUrl ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-brand/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-brand">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{item.label}</span>
                    <span className="block text-xs text-muted">{item.sub}</span>
                  </span>
                </a>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-4">
            <GitHubStats meta={project.github} variant="panel" />
            <div className="rounded-2xl border border-border bg-surface p-5">
              <Button className="w-full">Follow project</Button>
              <Button variant="outline" className="mt-2 w-full">
                Add to collection
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
