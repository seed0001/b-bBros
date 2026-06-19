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
npm run dev      # http://localhost:3000  (no base path in dev)
npm run build    # static export -> ./out
```

## Deployment (GitHub Pages)

This site is a **static export** (`next.config.mjs` -> `output: "export"`,
base path `/b-bBros`) served from the **`gh-pages` branch**.

> Note: GitHub **Actions is currently billing-locked on this account**, so the
> automated workflow cannot run. We deploy manually from the branch instead,
> which uses GitHub's legacy Pages builder (not billed as Actions).

To publish an update:

```bash
npm run build                               # regenerate ./out
git worktree add ../bb-ghpages gh-pages     # (first time: add -b gh-pages)
cd ../bb-ghpages
git rm -rqf .
cp -r ../"New folder (37)"/out/. .
touch .nojekyll                             # ensures _next/ is served as-is
git add -A && git commit -m "Update site"
git push origin gh-pages
```

Pages source is set to **gh-pages / root** (Settings → Pages). The live URL is
**https://seed0001.github.io/b-bBros/**. Once the Actions billing issue is
resolved, the Actions-based workflow can be restored for automatic deploys.

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
