/**
 * Mock dataset for Phase 1.
 *
 * This is the single source of demo content. It is shaped exactly like the
 * production data contracts in `types.ts`, so swapping these arrays for live
 * API / database calls later requires no component changes.
 */

import type {
  Creator,
  Project,
  Listing,
  Course,
  CommunityPost,
} from "./types";

const av = (seed: string) =>
  `https://api.dicebear.com/9.x/glass/svg?seed=${seed}`;

export const creators: Creator[] = [
  {
    id: "c1",
    username: "ada",
    name: "Ada Okafor",
    avatar: av("ada-okafor"),
    banner:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=60",
    bio: "Building open-source AI companions that actually respect your privacy. Ex-research, now full-time creator.",
    location: "Lisbon, PT",
    verified: true,
    skills: ["LLMs", "RAG", "Python", "Rust", "On-device AI"],
    socials: [
      { platform: "github", url: "https://github.com/ada" },
      { platform: "youtube", url: "https://youtube.com/@ada" },
      { platform: "twitter", url: "https://x.com/ada" },
      { platform: "website", url: "https://ada.dev" },
    ],
    followers: 18400,
    following: 212,
    projectCount: 14,
    achievements: [
      { id: "a1", label: "Top Creator 2025", icon: "Trophy" },
      { id: "a2", label: "10k Followers", icon: "Users" },
      { id: "a3", label: "Open Source Hero", icon: "Heart" },
    ],
    reviews: [
      {
        id: "r1",
        author: "marco",
        rating: 5,
        body: "Ada's companion framework saved me weeks. Docs are immaculate.",
        date: "2026-04-12",
      },
    ],
    joined: "2023-02-01",
  },
  {
    id: "c2",
    username: "kenji",
    name: "Kenji Watanabe",
    avatar: av("kenji-watanabe"),
    banner:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=60",
    bio: "Robotics + reinforcement learning. I teach what I ship.",
    location: "Osaka, JP",
    verified: true,
    skills: ["Robotics", "RL", "C++", "ROS2", "Simulation"],
    socials: [
      { platform: "github", url: "https://github.com/kenji" },
      { platform: "tiktok", url: "https://tiktok.com/@kenji" },
      { platform: "discord", url: "https://discord.gg/kenji" },
    ],
    followers: 9300,
    following: 88,
    projectCount: 9,
    achievements: [
      { id: "a4", label: "Mentor", icon: "GraduationCap" },
      { id: "a5", label: "Verified", icon: "BadgeCheck" },
    ],
    reviews: [],
    joined: "2023-09-15",
  },
  {
    id: "c3",
    username: "lena",
    name: "Lena Brandt",
    avatar: av("lena-brandt"),
    banner:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=60",
    bio: "Prompt engineer & educator. Author of the AI Foundations course.",
    location: "Berlin, DE",
    verified: false,
    skills: ["Prompting", "Education", "Design", "TypeScript"],
    socials: [
      { platform: "github", url: "https://github.com/lena" },
      { platform: "linkedin", url: "https://linkedin.com/in/lena" },
      { platform: "youtube", url: "https://youtube.com/@lena" },
    ],
    followers: 5600,
    following: 340,
    projectCount: 6,
    achievements: [{ id: "a6", label: "Rising Star", icon: "Sparkles" }],
    reviews: [],
    joined: "2024-06-20",
  },
  {
    id: "c4",
    username: "diego",
    name: "Diego Santos",
    avatar: av("diego-santos"),
    banner:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=60",
    bio: "Desktop app tinkerer. I make local AI tools feel native.",
    location: "São Paulo, BR",
    verified: true,
    skills: ["Tauri", "Rust", "Local LLMs", "UX"],
    socials: [
      { platform: "github", url: "https://github.com/diego" },
      { platform: "website", url: "https://diego.app" },
    ],
    followers: 12100,
    following: 150,
    projectCount: 11,
    achievements: [{ id: "a7", label: "Verified", icon: "BadgeCheck" }],
    reviews: [],
    joined: "2023-04-10",
  },
];

const ghMeta = (
  repo: string,
  over: Partial<Project["github"]> = {}
): Project["github"] => ({
  repoUrl: `https://github.com/${repo}`,
  stars: 0,
  forks: 0,
  watchers: 0,
  openIssues: 0,
  latestRelease: null,
  lastCommit: null,
  language: null,
  license: "MIT",
  isOpenSource: true,
  contributors: [],
  synced: false,
  ...over,
});

export const projects: Project[] = [
  {
    id: "p1",
    slug: "aria-companion",
    name: "Aria Companion",
    tagline: "A privacy-first AI companion that runs on your machine.",
    description:
      "Aria is an open, extensible AI companion framework. Plug in any local or hosted model, give it tools, memory, and a voice — all without sending your data anywhere you don't choose.",
    kind: "companion",
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=60",
    tags: ["AI Companion", "Local-first", "Privacy", "Open Source"],
    authorUsername: "ada",
    github: ghMeta("ada/aria-companion", {
      stars: 8420,
      forks: 612,
      language: "Python",
      latestRelease: "v2.4.1",
      lastCommit: "2026-06-10",
      openIssues: 37,
    }),
    createdAt: "2024-01-12",
  },
  {
    id: "p2",
    slug: "forge-rl",
    name: "Forge RL",
    tagline: "Reinforcement learning for real robots, batteries included.",
    description:
      "A modular RL framework with sim-to-real pipelines, ROS2 bindings, and a curriculum library. Train in simulation, deploy to hardware.",
    kind: "framework",
    cover:
      "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1200&q=60",
    tags: ["Robotics", "RL", "ROS2", "Simulation"],
    authorUsername: "kenji",
    github: ghMeta("kenji/forge-rl", {
      stars: 3120,
      forks: 240,
      language: "C++",
      latestRelease: "v1.1.0",
      lastCommit: "2026-05-28",
      openIssues: 19,
    }),
    createdAt: "2024-03-02",
  },
  {
    id: "p3",
    slug: "promptkit",
    name: "PromptKit",
    tagline: "Composable prompt packs with evals built in.",
    description:
      "Author, version, and test prompts like code. Ships with an eval harness and a marketplace-ready packaging format.",
    kind: "framework",
    cover:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=60",
    tags: ["Prompting", "Evals", "TypeScript"],
    authorUsername: "lena",
    github: ghMeta("lena/promptkit", {
      stars: 1540,
      forks: 96,
      language: "TypeScript",
      latestRelease: "v0.9.0",
      lastCommit: "2026-06-01",
      openIssues: 8,
    }),
    createdAt: "2024-08-19",
  },
  {
    id: "p4",
    slug: "localstudio",
    name: "LocalStudio",
    tagline: "A native desktop app for running and chatting with local models.",
    description:
      "Download, manage, and chat with local LLMs in a fast, native UI. Built with Tauri + Rust for a tiny footprint.",
    kind: "application",
    cover:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1200&q=60",
    tags: ["Desktop", "Local LLMs", "Tauri", "Rust"],
    authorUsername: "diego",
    github: ghMeta("diego/localstudio", {
      stars: 6200,
      forks: 410,
      language: "Rust",
      latestRelease: "v3.0.0",
      lastCommit: "2026-06-14",
      openIssues: 52,
    }),
    createdAt: "2023-11-05",
  },
  {
    id: "p5",
    slug: "rag-cookbook",
    name: "RAG Cookbook",
    tagline: "Battle-tested retrieval patterns, as runnable recipes.",
    description:
      "A research-backed collection of retrieval-augmented-generation patterns with benchmarks, trade-offs, and copy-paste code.",
    kind: "research",
    cover:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=60",
    tags: ["RAG", "Research", "Benchmarks"],
    authorUsername: "ada",
    github: ghMeta("ada/rag-cookbook", {
      stars: 4300,
      forks: 380,
      language: "Jupyter Notebook",
      lastCommit: "2026-04-22",
      openIssues: 12,
    }),
    createdAt: "2024-05-30",
  },
  {
    id: "p6",
    slug: "voicecraft",
    name: "VoiceCraft",
    tagline: "Open voice packs and a tiny TTS runtime.",
    description:
      "Bring expressive, low-latency speech to your companions. Includes a voice-pack format and an embeddable runtime.",
    kind: "framework",
    cover:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=60",
    tags: ["Voice", "TTS", "Audio"],
    authorUsername: "diego",
    github: ghMeta("diego/voicecraft", {
      stars: 2750,
      forks: 170,
      language: "Rust",
      latestRelease: "v0.6.2",
      lastCommit: "2026-06-08",
      openIssues: 24,
    }),
    createdAt: "2025-01-15",
  },
];

export const listings: Listing[] = [
  {
    id: "l1",
    slug: "aria-pro-pack",
    title: "Aria Pro Companion Pack",
    summary:
      "Premium personalities, long-term memory module, and priority support for Aria Companion.",
    category: "companion",
    cover:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=60",
    images: [],
    authorUsername: "ada",
    priceCents: 2900,
    license: "Commercial",
    version: "2.4.1",
    rating: 4.9,
    reviewCount: 214,
    downloads: 8800,
    repoUrl: "https://github.com/ada/aria-companion",
  },
  {
    id: "l2",
    slug: "robotics-curriculum",
    title: "Robotics RL Curriculum",
    summary:
      "20 progressive training environments + solutions for Forge RL.",
    category: "knowledge-pack",
    cover:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=60",
    images: [],
    authorUsername: "kenji",
    priceCents: 4900,
    license: "Commercial",
    version: "1.1.0",
    rating: 4.8,
    reviewCount: 96,
    downloads: 2100,
    repoUrl: null,
  },
  {
    id: "l3",
    slug: "starter-prompt-pack",
    title: "Starter Prompt Pack",
    summary: "120 ready-to-use prompts for coding, writing, and analysis.",
    category: "prompt-pack",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=60",
    images: [],
    authorUsername: "lena",
    priceCents: null,
    license: "CC BY 4.0",
    version: "3.0.0",
    rating: 4.7,
    reviewCount: 540,
    downloads: 31000,
    repoUrl: "https://github.com/lena/promptkit",
  },
  {
    id: "l4",
    slug: "expressive-voices",
    title: "Expressive Voice Pack",
    summary: "8 studio-quality voices for VoiceCraft, royalty-free.",
    category: "voice-pack",
    cover:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=60",
    images: [],
    authorUsername: "diego",
    priceCents: 1900,
    license: "Royalty-free",
    version: "0.6.2",
    rating: 4.9,
    reviewCount: 132,
    downloads: 5400,
    repoUrl: null,
  },
  {
    id: "l5",
    slug: "localstudio-themes",
    title: "LocalStudio Theme Bundle",
    summary: "12 hand-crafted themes + icon packs for LocalStudio.",
    category: "asset",
    cover:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=60",
    images: [],
    authorUsername: "diego",
    priceCents: 900,
    license: "Commercial",
    version: "1.2.0",
    rating: 4.6,
    reviewCount: 78,
    downloads: 3300,
    repoUrl: null,
  },
  {
    id: "l6",
    slug: "agent-tools-plugin",
    title: "Agent Tools Plugin Suite",
    summary: "Web search, file IO, and code-exec tools for any agent runtime.",
    category: "plugin",
    cover:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=60",
    images: [],
    authorUsername: "ada",
    priceCents: 3900,
    license: "Commercial",
    version: "1.0.0",
    rating: 4.8,
    reviewCount: 61,
    downloads: 1900,
    repoUrl: "https://github.com/ada/aria-companion",
  },
];

export const courses: Course[] = [
  {
    id: "co1",
    slug: "ai-foundations",
    title: "AI Foundations: From Zero to Your First Model",
    summary:
      "A beginner path covering how modern AI works, prompting, and shipping your first project.",
    level: "beginner",
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=60",
    authorUsername: "lena",
    lessons: 42,
    durationMins: 540,
    enrolled: 12400,
    rating: 4.9,
    priceCents: null,
    tags: ["Beginner", "LLMs", "Prompting"],
  },
  {
    id: "co2",
    slug: "build-an-ai-companion",
    title: "Build an AI Companion",
    summary:
      "Ship a memory-equipped, tool-using companion with Aria, end to end.",
    level: "intermediate",
    cover:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=60",
    authorUsername: "ada",
    lessons: 28,
    durationMins: 420,
    enrolled: 5300,
    rating: 4.8,
    priceCents: 4900,
    tags: ["Companions", "RAG", "Python"],
  },
  {
    id: "co3",
    slug: "rl-for-robots",
    title: "Reinforcement Learning for Real Robots",
    summary:
      "Advanced sim-to-real RL: curricula, reward shaping, and hardware deployment.",
    level: "advanced",
    cover:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=60",
    authorUsername: "kenji",
    lessons: 36,
    durationMins: 680,
    enrolled: 2100,
    rating: 4.9,
    priceCents: 8900,
    tags: ["Robotics", "RL", "Advanced"],
  },
];

export const communityPosts: CommunityPost[] = [
  {
    id: "cp1",
    kind: "showcase",
    title: "Shipped my first companion built on Aria 🎉",
    body: "After 3 weekends I have a working journaling companion with local memory. Feedback welcome!",
    authorUsername: "lena",
    createdAt: "2026-06-18",
    replies: 24,
    reactions: 187,
    tags: ["showcase", "companions"],
  },
  {
    id: "cp2",
    kind: "devlog",
    title: "Forge RL devlog #12: sim-to-real gap, mostly closed",
    body: "Domain randomization + a tighter actuator model got us from 40% to 88% transfer success. Numbers inside.",
    authorUsername: "kenji",
    createdAt: "2026-06-16",
    replies: 11,
    reactions: 92,
    tags: ["robotics", "devlog"],
  },
  {
    id: "cp3",
    kind: "collab",
    title: "Looking for a designer for an open voice-journaling app",
    body: "I'll handle the Rust + AI side. Need someone who loves calm, minimal UI. Revenue-share or just for fun.",
    authorUsername: "diego",
    createdAt: "2026-06-15",
    replies: 8,
    reactions: 41,
    tags: ["collab", "design"],
  },
  {
    id: "cp4",
    kind: "announcement",
    title: "Summer Build Jam — June 28–30",
    body: "72 hours, build anything AI + open source. Prizes, mentorship, and a featured spot on the homepage.",
    authorUsername: "ada",
    createdAt: "2026-06-12",
    replies: 56,
    reactions: 410,
    tags: ["event", "hackathon"],
  },
];

// ---- Lookup helpers -------------------------------------------------------

export function getCreator(username: string): Creator | undefined {
  return creators.find((c) => c.username === username);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectsByCreator(username: string): Project[] {
  return projects.filter((p) => p.authorUsername === username);
}

export function listingsByCreator(username: string): Listing[] {
  return listings.filter((l) => l.authorUsername === username);
}

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
