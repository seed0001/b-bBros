/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BadgeCheck, MapPin, Star, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Stat } from "@/components/ui/Stat";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ListingCard } from "@/components/cards/ListingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { compactNumber } from "@/lib/utils";
import {
  creators,
  getCreator,
  projectsByCreator,
  listingsByCreator,
} from "@/lib/data";

export function generateStaticParams() {
  return creators.map((c) => ({ username: c.username }));
}

export function generateMetadata({
  params,
}: {
  params: { username: string };
}): Metadata {
  const creator = getCreator(params.username);
  return {
    title: creator ? `${creator.name} (@${creator.username})` : "Creator",
    description: creator?.bio,
  };
}

export default function CreatorProfile({
  params,
}: {
  params: { username: string };
}) {
  const creator = getCreator(params.username);
  if (!creator) notFound();

  const projects = projectsByCreator(creator.username);
  const listings = listingsByCreator(creator.username);

  return (
    <>
      {/* Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-surface-2 sm:h-60">
        {creator.banner && (
          <img src={creator.banner} alt="" className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <Container className="relative pb-16">
        {/* Identity */}
        <div className="-mt-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <Avatar
              src={creator.avatar}
              alt={creator.name}
              size="xl"
              className="ring-4 ring-bg"
            />
            <div className="pb-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{creator.name}</h1>
                {creator.verified && (
                  <Badge tone="brand">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified Creator
                  </Badge>
                )}
              </div>
              <p className="text-muted">@{creator.username}</p>
            </div>
          </div>
          <div className="flex gap-2 pb-1">
            <Button>Follow</Button>
            <Button variant="outline">Message</Button>
          </div>
        </div>

        {/* Body grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-sm text-fg">{creator.bio}</p>
              <div className="mt-4 space-y-2 text-sm text-muted">
                {creator.location && (
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {creator.location}
                  </p>
                )}
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> Joined {creator.joined}
                </p>
              </div>
              <div className="mt-5">
                <SocialLinks links={creator.socials} />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center justify-around">
                <Stat value={compactNumber(creator.followers)} label="Followers" />
                <Stat value={compactNumber(creator.following)} label="Following" />
                <Stat value={creator.projectCount} label="Projects" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="mb-3 text-sm font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-1.5">
                {creator.skills.map((s) => (
                  <Badge key={s} tone="outline">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="mb-3 text-sm font-semibold">Achievements</h3>
              <ul className="space-y-2">
                {creator.achievements.map((a) => (
                  <li key={a.id} className="flex items-center gap-2 text-sm">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand">
                      <Icon name={a.icon} className="h-4 w-4" />
                    </span>
                    {a.label}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main column — portfolio */}
          <div className="space-y-12">
            <div>
              <SectionHeading title="Projects" />
              {projects.length ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              ) : (
                <Empty>No projects published yet.</Empty>
              )}
            </div>

            {listings.length > 0 && (
              <div>
                <SectionHeading title="Marketplace" />
                <div className="grid gap-6 sm:grid-cols-2">
                  {listings.map((l) => (
                    <ListingCard key={l.id} listing={l} />
                  ))}
                </div>
              </div>
            )}

            <div>
              <SectionHeading title="Reviews" />
              {creator.reviews.length ? (
                <div className="space-y-4">
                  {creator.reviews.map((r) => (
                    <div
                      key={r.id}
                      className="rounded-2xl border border-border bg-surface p-5"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-medium">@{r.author}</span>
                        <span className="inline-flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </span>
                        <span className="text-xs text-muted">{r.date}</span>
                      </div>
                      <p className="text-sm text-muted">{r.body}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <Empty>No reviews yet.</Empty>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface/50 p-8 text-center text-sm text-muted">
      {children}
    </div>
  );
}
