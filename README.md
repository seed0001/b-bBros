# B&B Bros — Creator Platform (Phase 1)

The public website for **B&B Bros**: the front door to a creator ecosystem where
developers, AI builders, researchers, and creators publish, sell, teach, and
collaborate around GitHub projects — and keep ownership of everything they make.

> GitHub remains the source of truth for code and version control. This platform
> adds discovery, education, profiles, collaboration, marketplaces, and business
> tools on top of that foundation. We are **not** another Git host.

## Core philosophy

Visitors should immediately understand: **I can build AI. I can learn AI. I can
sell AI. I own my work.** The platform empowers creators instead of replacing
them.

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** with semantic design tokens (CSS variables)
- **Dark mode first**, light mode opt-in (no-flash theme script)
- **lucide-react** icons
- Fully responsive, subtle animations, modular component architecture

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/                     # App Router pages
  page.tsx               # Landing page
  creators/              # Creator directory, profiles, "become a creator"
  projects/              # Project directory + detail (GitHub-first)
  marketplace/           # Listings directory + detail
  learning/              # Courses, paths, course detail
  community/             # Feed, events, boards
  about/  signin/  search/
components/
  ui/                    # Reusable primitives: Button, Card, Badge, Avatar…
  cards/                 # Domain cards: Creator, Project, Listing, Course…
  layout/                # Navbar, Footer, PageHeader, ThemeToggle, Logo
  home/                  # Landing-page sections
lib/
  types.ts               # Domain contracts (GitHub-API-shaped)
  data.ts                # Mock dataset (single source of demo content)
  github.ts              # GitHub integration boundary (Phase 1 = mock)
  utils.ts
```

## GitHub integration

GitHub is a **first-class citizen**. Every project consumes a `GitHubMeta`
shape (`lib/types.ts`) that mirrors the GitHub REST/GraphQL API — stars, forks,
releases, issues, languages, contributors. Components render gracefully whether
or not data has been synced.

Nothing is hardcoded inside components: the data source is `lib/github.ts`,
which currently returns mock-shaped data. Swapping in live API calls there
requires **no UI changes**.

## Design system

- Semantic color tokens (`bg`, `surface`, `border`, `brand`, `accent`…) driven
  by CSS variables, so light/dark both work from one set of classes.
- Reusable, composable cards and sections — no one-off layouts.
- Rounded surfaces, clean spacing, smooth transitions.

## Roadmap (design placeholders in the UI)

Creator Dashboard, Business Dashboard, AI Companion Launcher, Local AI
Downloads, Companion/Framework/Prompt/API Marketplaces, Desktop Launcher, Cloud
Sync, Creator Verification, Organizations, Teams, Enterprise, Events, Research
Labs, Robotics.

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
