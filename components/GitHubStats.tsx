import {
  Star,
  GitFork,
  CircleDot,
  Tag,
  Scale,
  Github,
  Lock,
  Unlock,
} from "lucide-react";
import type { GitHubMeta } from "@/lib/types";
import { compactNumber } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

/**
 * Renders GitHub repo metadata. Built to accept any `GitHubMeta` — values that
 * are null (because the API hasn't been wired up) are simply hidden, so the
 * same component works for mock and live data.
 */
export function GitHubStats({
  meta,
  variant = "inline",
}: {
  meta: GitHubMeta;
  variant?: "inline" | "panel";
}) {
  if (!meta.repoUrl) return null;

  const items = [
    meta.stars != null && {
      icon: Star,
      value: compactNumber(meta.stars),
      label: "Stars",
    },
    meta.forks != null && {
      icon: GitFork,
      value: compactNumber(meta.forks),
      label: "Forks",
    },
    meta.openIssues != null && {
      icon: CircleDot,
      value: compactNumber(meta.openIssues),
      label: "Open Issues",
    },
  ].filter(Boolean) as { icon: typeof Star; value: string; label: string }[];

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        {items.map((it) => (
          <span key={it.label} className="inline-flex items-center gap-1">
            <it.icon className="h-4 w-4" />
            {it.value}
          </span>
        ))}
        {meta.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand" />
            {meta.language}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Github className="h-4 w-4" />
          Repository
        </div>
        {meta.isOpenSource ? (
          <Badge tone="accent">
            <Unlock className="h-3 w-3" /> Open Source
          </Badge>
        ) : (
          <Badge tone="warn">
            <Lock className="h-3 w-3" /> Private
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="rounded-xl bg-surface-2 p-3 text-center"
          >
            <it.icon className="mx-auto mb-1 h-4 w-4 text-muted" />
            <div className="font-bold">{it.value}</div>
            <div className="text-xs text-muted">{it.label}</div>
          </div>
        ))}
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        {meta.language && (
          <Row icon={<span className="h-3 w-3 rounded-full bg-brand" />} label="Language">
            {meta.language}
          </Row>
        )}
        {meta.latestRelease && (
          <Row icon={<Tag className="h-4 w-4 text-muted" />} label="Latest release">
            {meta.latestRelease}
          </Row>
        )}
        {meta.license && (
          <Row icon={<Scale className="h-4 w-4 text-muted" />} label="License">
            {meta.license}
          </Row>
        )}
      </dl>

      <a
        href={meta.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-border text-sm font-medium transition-colors hover:bg-surface-2"
      >
        <Github className="h-4 w-4" /> View on GitHub
      </a>

      {!meta.synced && (
        <p className="mt-3 text-center text-xs text-muted">
          Live data syncs via the GitHub API once connected.
        </p>
      )}
    </div>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <dt className="flex items-center gap-2 text-muted">
        {icon}
        {label}
      </dt>
      <dd className="font-medium">{children}</dd>
    </div>
  );
}
