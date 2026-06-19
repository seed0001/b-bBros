import { ArrowRight, Github, Star, GitFork, Boxes } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { FutureModules } from "@/components/home/FutureModules";
import { CreatorCard } from "@/components/cards/CreatorCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ListingCard } from "@/components/cards/ListingCard";
import { CourseCard } from "@/components/cards/CourseCard";
import { CommunityPostCard } from "@/components/cards/CommunityPostCard";
import {
  creators,
  projects,
  listings,
  courses,
  communityPosts,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />

      {/* GitHub-first band */}
      <section className="border-b border-border bg-surface py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
                GitHub-first
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Your repos, front and center
              </h2>
              <p className="mt-3 text-muted">
                Every project is a first-class GitHub citizen. Stars, forks,
                releases, issues, languages, and contributors — designed to sync
                live through the GitHub API. We never become another Git host;
                GitHub stays the source of truth for your code and ownership.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/projects">
                  Browse Projects <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/seed0001/b-bBros"
                  variant="outline"
                  external
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Star, label: "Stars synced", value: "Live" },
                { icon: GitFork, label: "Forks tracked", value: "Live" },
                { icon: Boxes, label: "Releases", value: "Auto" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-bg p-5 text-center"
                >
                  <s.icon className="mx-auto mb-2 h-6 w-6 text-brand" />
                  <div className="text-lg font-bold">{s.value}</div>
                  <div className="text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured creators */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="The people"
            title="Featured creators"
            description="Builders, educators, and researchers shipping in the open."
            action={{ label: "All creators", href: "/creators" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {creators.map((c) => (
              <CreatorCard key={c.id} creator={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="border-y border-border bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="The work"
            title="Trending projects"
            description="AI companions, frameworks, applications, and research."
            action={{ label: "All projects", href: "/projects" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Marketplace */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Sell your work"
            title="Marketplace"
            description="Companion packs, plugins, prompt packs, voice packs, and more."
            action={{ label: "Explore marketplace", href: "/marketplace" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.slice(0, 3).map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </Container>
      </section>

      {/* Learning */}
      <section className="border-y border-border bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="Level up"
            title="Learning center"
            description="Courses and paths taught by the creators building it."
            action={{ label: "Browse learning", href: "/learning" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Build together"
            title="From the community"
            description="Showcases, devlogs, collaborations, and announcements."
            action={{ label: "Open community", href: "/community" }}
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {communityPosts.map((p) => (
              <CommunityPostCard key={p.id} post={p} />
            ))}
          </div>
        </Container>
      </section>

      <FutureModules />

      {/* Final CTA */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
            <div className="absolute inset-0 bg-radial-brand" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to build, teach, and own your work?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted">
                Join a community of creators turning GitHub projects into
                companions, courses, and businesses.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ButtonLink href="/creators/become" size="lg">
                  Become a Creator <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/projects" size="lg" variant="outline">
                  Browse Projects
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
