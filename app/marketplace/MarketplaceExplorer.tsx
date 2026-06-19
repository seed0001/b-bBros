"use client";

import { useMemo, useState } from "react";
import type { Listing, ListingCategory } from "@/lib/types";
import { ListingCard } from "@/components/cards/ListingCard";
import { FilterTabs } from "@/components/FilterTabs";

type Filter = "all" | ListingCategory;

const options: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "companion", label: "Companions" },
  { value: "framework", label: "Frameworks" },
  { value: "prompt-pack", label: "Prompt Packs" },
  { value: "plugin", label: "Plugins" },
  { value: "voice-pack", label: "Voice Packs" },
  { value: "knowledge-pack", label: "Knowledge Packs" },
  { value: "asset", label: "Assets" },
];

export function MarketplaceExplorer({ listings }: { listings: Listing[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = useMemo(
    () =>
      filter === "all"
        ? listings
        : listings.filter((l) => l.category === filter),
    [filter, listings]
  );

  return (
    <div className="space-y-8">
      <FilterTabs options={options} value={filter} onChange={setFilter} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
      {shown.length === 0 && (
        <p className="py-12 text-center text-muted">
          Nothing here yet — be the first to publish.
        </p>
      )}
    </div>
  );
}
