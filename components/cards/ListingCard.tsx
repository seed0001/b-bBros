/* eslint-disable @next/next/no-img-element */
import { Star, Download } from "lucide-react";
import type { Listing } from "@/lib/types";
import { compactNumber, formatPrice } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Card href={`/marketplace/${listing.slug}`} className="flex flex-col">
      {listing.cover && (
        <div className="h-36 w-full overflow-hidden bg-surface-2">
          <img
            src={listing.cover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <Badge tone="outline" className="mb-2 w-fit capitalize">
          {listing.category.replace("-", " ")}
        </Badge>
        <h3 className="font-semibold">{listing.title}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">
          {listing.summary}
        </p>

        <div className="mt-4 flex items-center gap-3 text-sm text-muted">
          <span className="inline-flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {listing.rating.toFixed(1)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Download className="h-4 w-4" />
            {compactNumber(listing.downloads)}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="text-lg font-bold">
            {formatPrice(listing.priceCents)}
          </span>
          <span className="text-xs text-muted">{listing.license}</span>
        </div>
      </div>
    </Card>
  );
}
