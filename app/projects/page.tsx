import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsExplorer } from "./ProjectsExplorer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI companions, frameworks, applications, and research — built in the open on GitHub.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The work"
        title="Projects"
        description="Every project is a first-class GitHub citizen — stars, forks, releases, and contributors designed to sync live via the GitHub API."
      />
      <Container className="py-12">
        <ProjectsExplorer projects={projects} />
      </Container>
    </>
  );
}
