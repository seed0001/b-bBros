import type { Metadata } from "next";
import { Github, Users, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "B&B Bros is the public face of a creator ecosystem centered around GitHub.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Creators own their work",
    body: "GitHub remains the source of truth for code and version control. We add a layer — never the ownership.",
  },
  {
    icon: Users,
    title: "An ecosystem, not a site",
    body: "Discovery, education, profiles, collaboration, marketplaces, and business tools, all in one place.",
  },
  {
    icon: Sparkles,
    title: "Empower, don't replace",
    body: "Tools that amplify creators — builders, educators, researchers — instead of competing with them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our vision"
        title="The front door to a creator ecosystem"
        description="Developers, AI builders, researchers, and creators publish, sell, teach, and collaborate around GitHub projects — and keep ownership of everything they make."
      />

      <Container className="py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <h2 className="text-2xl font-bold">Why we exist</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-muted">
            <p>
              We are not trying to become another Git hosting service. GitHub
              remains the source of truth for code ownership and version
              control. Our platform adds discovery, education, creator profiles,
              collaboration, marketplaces, and business tools on top of that
              foundation.
            </p>
            <p>
              Visitors should immediately understand: <em>I can build AI. I can
              learn AI. I can sell AI. I own my work.</em> The platform empowers
              creators instead of replacing them.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/creators/become">Become a Creator</ButtonLink>
            <ButtonLink
              href="https://github.com/seed0001/b-bBros"
              variant="outline"
              external
            >
              <Github className="h-4 w-4" /> View the project on GitHub
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
