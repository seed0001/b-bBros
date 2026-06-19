import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { MarketplaceExplorer } from "./MarketplaceExplorer";
import { listings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "AI companions, frameworks, prompt packs, plugins, voice packs, knowledge packs, and downloads.",
};

export default function MarketplacePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sell your work"
        title="Marketplace"
        description="Creators publish companion packs, plugins, templates, voice packs, and more — each with pricing, license, version history, and reviews."
      >
        <ButtonLink href="/creators/become">Publish a listing</ButtonLink>
      </PageHeader>
      <Container className="py-12">
        <MarketplaceExplorer listings={listings} />
      </Container>
    </>
  );
}
