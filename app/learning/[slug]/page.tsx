/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Clock, BookOpen, Users, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { compactNumber, formatPrice } from "@/lib/utils";
import { courses, getCourse, getCreator } from "@/lib/data";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = getCourse(params.slug);
  return { title: course?.title ?? "Course", description: course?.summary };
}

export default function CourseDetail({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourse(params.slug);
  if (!course) notFound();
  const author = getCreator(course.authorUsername);

  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <Badge tone="brand" className="capitalize">
            {course.level}
          </Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-2 text-lg text-muted">{course.summary}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {course.rating.toFixed(1)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-4 w-4" /> {compactNumber(course.enrolled)} enrolled
            </span>
            <span className="inline-flex items-center gap-1">
              <BookOpen className="h-4 w-4" /> {course.lessons} lessons
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {Math.round(course.durationMins / 60)}h
            </span>
          </div>

          <h2 className="mt-10 text-xl font-semibold">Curriculum</h2>
          <ul className="mt-3 space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4"
              >
                <PlayCircle className="h-5 w-5 text-brand" />
                <span className="text-sm">
                  Lesson {i + 1}: {course.tags[i % course.tags.length]} fundamentals
                </span>
                <span className="ml-auto text-xs text-muted">
                  {8 + i} min
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-4">
          {course.cover && (
            <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface-2">
              <img src={course.cover} alt="" className="h-full w-full object-cover" />
            </div>
          )}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-3xl font-bold">{formatPrice(course.priceCents)}</div>
            <Button size="lg" className="mt-4 w-full">
              {course.priceCents ? "Enroll now" : "Start free"}
            </Button>
            {author && (
              <Link
                href={`/creators/${author.username}`}
                className="mt-4 flex items-center gap-3 border-t border-border pt-4"
              >
                <Avatar src={author.avatar} alt={author.name} size="md" />
                <div>
                  <p className="text-sm font-medium">{author.name}</p>
                  <p className="text-xs text-muted">Instructor</p>
                </div>
              </Link>
            )}
          </div>
        </aside>
      </div>
    </Container>
  );
}
