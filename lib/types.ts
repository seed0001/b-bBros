/**
 * Domain types for the B&B Bros platform.
 *
 * These shapes intentionally mirror what we can later hydrate from the
 * GitHub REST/GraphQL API (stars, forks, releases, languages, contributors).
 * Components consume these types only — never raw API responses — so the data
 * source can be swapped from mock -> live API without touching the UI.
 */

export type SocialPlatform =
  | "github"
  | "website"
  | "youtube"
  | "tiktok"
  | "discord"
  | "twitter"
  | "linkedin"
  | "portfolio";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

export interface Achievement {
  id: string;
  label: string;
  /** lucide-react icon name, resolved at render time. */
  icon: string;
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  authorAvatar?: string;
  rating: number; // 1-5
  body: string;
  date: string; // ISO
}

export interface Creator {
  id: string;
  username: string;
  name: string;
  avatar: string;
  banner?: string;
  bio: string;
  location?: string;
  verified: boolean;
  skills: string[];
  socials: SocialLink[];
  followers: number;
  following: number;
  projectCount: number;
  achievements: Achievement[];
  reviews: Review[];
  /** Joined date, ISO. */
  joined: string;
}

export type ProjectKind =
  | "repository"
  | "application"
  | "framework"
  | "companion"
  | "research"
  | "course"
  | "article";

/**
 * GitHub-derived metadata. Every field is optional + nullable so a component
 * can render gracefully whether or not the API has been wired up yet.
 */
export interface GitHubMeta {
  repoUrl: string | null;
  stars: number | null;
  forks: number | null;
  watchers: number | null;
  openIssues: number | null;
  latestRelease: string | null;
  lastCommit: string | null; // ISO
  language: string | null;
  license: string | null;
  isOpenSource: boolean;
  contributors: { login: string; avatar: string }[];
  /** True once data was actually fetched from the API. Drives "live" badges. */
  synced: boolean;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  kind: ProjectKind;
  cover?: string;
  tags: string[];
  authorUsername: string;
  github: GitHubMeta;
  createdAt: string;
}

export type ListingCategory =
  | "companion"
  | "framework"
  | "prompt-pack"
  | "template"
  | "plugin"
  | "python-tool"
  | "desktop-app"
  | "robotics"
  | "knowledge-pack"
  | "voice-pack"
  | "asset"
  | "download";

export interface Listing {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ListingCategory;
  cover?: string;
  images: string[];
  authorUsername: string;
  /** Price in cents; null = free. */
  priceCents: number | null;
  license: string;
  version: string;
  rating: number;
  reviewCount: number;
  downloads: number;
  repoUrl: string | null;
}

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface Course {
  id: string;
  slug: string;
  title: string;
  summary: string;
  level: CourseLevel;
  cover?: string;
  authorUsername: string;
  lessons: number;
  durationMins: number;
  enrolled: number;
  rating: number;
  priceCents: number | null;
  tags: string[];
}

export type CommunityPostKind =
  | "showcase"
  | "discussion"
  | "devlog"
  | "announcement"
  | "collab"
  | "event";

export interface CommunityPost {
  id: string;
  kind: CommunityPostKind;
  title: string;
  body: string;
  authorUsername: string;
  createdAt: string;
  replies: number;
  reactions: number;
  tags: string[];
}
