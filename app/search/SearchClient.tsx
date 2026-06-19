"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import {
  creators,
  projects,
  listings,
  courses,
  communityPosts,
} from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

interface Result {
  type: string;
  title: string;
  subtitle: string;
  href: string;
}

/**
 * Global search across every entity type. Phase 1 is a client-side fuzzy
 * contains-match over the mock dataset; swap `buildIndex` for an API/search
 * service later without touching the UI.
 */
function buildIndex(): Result[] {
  return [
    ...creators.map((c) => ({
      type: "Creator",
      title: c.name,
      subtitle: `@${c.username} · ${c.skills.join(", ")}`,
      href: `/creators/${c.username}`,
    })),
    ...projects.map((p) => ({
      type: "Project",
      title: p.name,
      subtitle: p.tagline,
      href: `/projects/${p.slug}`,
    })),
    ...listings.map((l) => ({
      type: "Marketplace",
      title: l.title,
      subtitle: l.summary,
      href: `/marketplace/${l.slug}`,
    })),
    ...courses.map((c) => ({
      type: "Course",
      title: c.title,
      subtitle: c.summary,
      href: `/learning/${c.slug}`,
    })),
    ...communityPosts.map((p) => ({
      type: "Community",
      title: p.title,
      subtitle: p.body,
      href: "/community",
    })),
  ];
}

const index = buildIndex();

export function SearchClient() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return index.filter(
      (r) =>
        r.title.toLowerCase().includes(term) ||
        r.subtitle.toLowerCase().includes(term) ||
        r.type.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4">
        <SearchIcon className="h-5 w-5 text-muted" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search creators, projects, repos, courses, downloads…"
          className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted"
        />
      </div>

      <div className="mt-6 space-y-2">
        {q && results.length === 0 && (
          <p className="py-10 text-center text-muted">
            No results for &ldquo;{q}&rdquo;.
          </p>
        )}
        {results.map((r) => (
          <Link
            key={r.type + r.href + r.title}
            href={r.href}
            className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-brand/50"
          >
            <div className="min-w-0">
              <p className="truncate font-medium">{r.title}</p>
              <p className="truncate text-sm text-muted">{r.subtitle}</p>
            </div>
            <Badge tone="outline">{r.type}</Badge>
          </Link>
        ))}
        {!q && (
          <p className="py-10 text-center text-muted">
            Start typing to search across the whole platform.
          </p>
        )}
      </div>
    </div>
  );
}
