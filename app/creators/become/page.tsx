import type { Metadata } from "next";
import { Github, Upload, Rocket, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button, ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Become a Creator",
  description: "Publish AI projects, teach, and sell — while owning your work.",
};

const steps = [
  {
    icon: Github,
    title: "Connect GitHub",
    body: "Link your account so your repos, stars, and releases sync automatically.",
  },
  {
    icon: Upload,
    title: "Publish your work",
    body: "Showcase projects, frameworks, companions, courses, and downloads.",
  },
  {
    icon: Rocket,
    title: "Grow & earn",
    body: "Build a following, teach what you know, and sell on the marketplace.",
  },
];

const perks = [
  "Own everything — GitHub stays your source of truth",
  "Verified Creator badge",
  "Sell companion packs, plugins, and knowledge packs",
  "Teach courses and run live sessions",
  "Analytics, followers, and revenue tools",
  "Featured placement and community events",
];

export default function BecomeCreatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the ecosystem"
        title="Become a Creator"
        description="Build, learn, share, and own. Turn your GitHub projects into companions, courses, and a creator business."
      />

      <Container className="py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-muted">Step {i + 1}</p>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-2xl font-bold">What you get</h2>
            <ul className="mt-5 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-2xl font-bold">Get started</h2>
            <p className="mt-2 text-sm text-muted">
              Creator onboarding opens with GitHub. Account flows arrive in a
              later phase — for now, connect to reserve your handle.
            </p>
            <div className="mt-6 space-y-3">
              <ButtonLink
                href="https://github.com/seed0001/b-bBros"
                size="lg"
                className="w-full"
                external
              >
                <Github className="h-4 w-4" /> Continue with GitHub
              </ButtonLink>
              <Button variant="outline" size="lg" className="w-full">
                Join the waitlist
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
