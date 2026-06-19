/* eslint-disable @next/next/no-img-element */
import { BadgeCheck, MapPin } from "lucide-react";
import type { Creator } from "@/lib/types";
import { compactNumber } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Card href={`/creators/${creator.username}`}>
      <div className="h-20 w-full overflow-hidden bg-surface-2">
        {creator.banner && (
          <img
            src={creator.banner}
            alt=""
            className="h-full w-full object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="px-5 pb-5">
        <div className="-mt-7 mb-3">
          <Avatar src={creator.avatar} alt={creator.name} size="lg" className="ring-4 ring-surface" />
        </div>
        <div className="flex items-center gap-1.5">
          <h3 className="font-semibold">{creator.name}</h3>
          {creator.verified && (
            <BadgeCheck className="h-4 w-4 text-brand" aria-label="Verified creator" />
          )}
        </div>
        <p className="text-sm text-muted">@{creator.username}</p>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{creator.bio}</p>

        {creator.location && (
          <p className="mt-3 inline-flex items-center gap-1 text-xs text-muted">
            <MapPin className="h-3.5 w-3.5" /> {creator.location}
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {creator.skills.slice(0, 3).map((s) => (
            <Badge key={s} tone="outline">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-sm text-muted">
          <span>
            <strong className="text-fg">{compactNumber(creator.followers)}</strong>{" "}
            followers
          </span>
          <span>
            <strong className="text-fg">{creator.projectCount}</strong> projects
          </span>
        </div>
      </div>
    </Card>
  );
}
