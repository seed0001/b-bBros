import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { CreatorCard } from "@/components/cards/CreatorCard";
import { creators } from "@/lib/data";

export const metadata: Metadata = {
  title: "Creators",
  description: "Discover builders, educators, and researchers on B&B Bros.",
};

export default function CreatorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The people"
        title="Creators"
        description="A cross between GitHub, LinkedIn, Patreon, and a portfolio — every creator owns their profile and their work."
      >
        <ButtonLink href="/creators/become">Become a Creator</ButtonLink>
      </PageHeader>

      <Container className="py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {creators.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      </Container>
    </>
  );
}
