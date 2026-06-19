/**
 * GitHub integration boundary.
 *
 * Phase 1 returns mock-shaped data, but the function signatures match what a
 * live GitHub API client will expose. When the API is wired up, only the
 * bodies here change — every component already consumes `GitHubMeta`.
 *
 * Live implementation sketch (left intentionally as a placeholder):
 *   GET /repos/{owner}/{repo}            -> stars, forks, license, language
 *   GET /repos/{owner}/{repo}/releases   -> latestRelease
 *   GET /repos/{owner}/{repo}/commits    -> lastCommit
 *   GET /repos/{owner}/{repo}/contributors
 */

import type { GitHubMeta } from "./types";

/** Parse "https://github.com/owner/repo" -> { owner, repo }. */
export function parseRepoUrl(
  url: string | null
): { owner: string; repo: string } | null {
  if (!url) return null;
  const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

/**
 * Hydrate GitHub metadata for a repo. Currently a no-op pass-through that
 * marks data as not-yet-synced; swap the body for a fetch() against the API.
 */
export async function fetchGitHubMeta(
  repoUrl: string | null
): Promise<GitHubMeta> {
  // TODO(api): replace with real GitHub API calls + caching/revalidation.
  return {
    repoUrl,
    stars: null,
    forks: null,
    watchers: null,
    openIssues: null,
    latestRelease: null,
    lastCommit: null,
    language: null,
    license: null,
    isOpenSource: Boolean(repoUrl),
    contributors: [],
    synced: false,
  };
}
