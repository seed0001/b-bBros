import type { Metadata } from "next";
import {
  Compass,
  Video,
  FileText,
  Users,
  CalendarClock,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CourseCard } from "@/components/cards/CourseCard";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Learning Center",
  description: "Courses, tutorials, workshops, and roadmaps taught by creators.",
};

const formats = [
  { icon: GraduationCap, label: "Courses" },
  { icon: Video, label: "Videos & Tutorials" },
  { icon: FileText, label: "Docs & Guides" },
  { icon: Users, label: "Workshops" },
  { icon: CalendarClock, label: "Live Sessions" },
  { icon: Compass, label: "Mentorship" },
];

const paths = [
  {
    title: "Beginner Path",
    body: "Start from zero: how AI works, prompting, and shipping your first project.",
    tone: "accent" as const,
  },
  {
    title: "Advanced Path",
    body: "Go deep on RAG, agents, fine-tuning, and production deployment.",
    tone: "brand" as const,
  },
  {
    title: "AI Development Roadmap",
    body: "A guided sequence connecting courses, projects, and milestones end to end.",
    tone: "warn" as const,
  },
];

export default function LearningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Level up"
        title="Learning Center"
        description="Education built into the ecosystem — learn from the creators who actually ship the tools."
      />

      <Container className="py-12">
        {/* Formats */}
        <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {formats.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-5 text-center"
            >
              <f.icon className="h-6 w-6 text-brand" />
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Paths */}
        <SectionHeading
          eyebrow="Guided journeys"
          title="Choose your path"
        />
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {paths.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <Badge tone={p.tone}>{p.title}</Badge>
              <p className="mt-3 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <SectionHeading
          eyebrow="Featured"
          title="Courses & workshops"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </Container>
    </>
  );
}
