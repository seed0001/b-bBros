/* eslint-disable @next/next/no-img-element */
import { Star, Clock, BookOpen, Users } from "lucide-react";
import { getCreator } from "@/lib/data";
import type { Course } from "@/lib/types";
import { compactNumber, formatPrice } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const levelTone: Record<Course["level"], "accent" | "brand" | "warn"> = {
  beginner: "accent",
  intermediate: "brand",
  advanced: "warn",
};

export function CourseCard({ course }: { course: Course }) {
  const author = getCreator(course.authorUsername);
  return (
    <Card href={`/learning/${course.slug}`} className="flex flex-col">
      {course.cover && (
        <div className="relative h-40 w-full overflow-hidden bg-surface-2">
          <img
            src={course.cover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge tone={levelTone[course.level]} className="absolute left-3 top-3 capitalize">
            {course.level}
          </Badge>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold">{course.title}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">
          {course.summary}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {course.lessons} lessons
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {Math.round(course.durationMins / 60)}h
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-4 w-4" />
            {compactNumber(course.enrolled)}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="inline-flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {course.rating.toFixed(1)}
          </span>
          <span className="font-bold">{formatPrice(course.priceCents)}</span>
        </div>
        {author && (
          <p className="mt-2 text-xs text-muted">by {author.name}</p>
        )}
      </div>
    </Card>
  );
}
