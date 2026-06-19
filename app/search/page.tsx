import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchClient } from "./SearchClient";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search creators, projects, repositories, frameworks, articles, courses, videos, and downloads.",
};

export default function SearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Find anything"
        title="Search"
        description="One search across creators, projects, repositories, frameworks, courses, articles, and downloads."
      />
      <Container className="py-12">
        <SearchClient />
      </Container>
    </>
  );
}
