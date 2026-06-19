/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, Download, Github, ShieldCheck, History } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Button, ButtonLink } from "@/components/ui/Button";
import { compactNumber, formatPrice } from "@/lib/utils";
import { listings, getListing, getCreator } from "@/lib/data";

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const listing = getListing(params.slug);
  return { title: listing?.title ?? "Listing", description: listing?.summary };
}

export default function ListingDetail({
  params,
}: {
  params: { slug: string };
}) {
  const listing = getListing(params.slug);
  if (!listing) notFound();
  const author = getCreator(listing.authorUsername);

  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Main */}
        <div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
            {listing.cover && (
              <img src={listing.cover} alt="" className="h-full w-full object-cover" />
            )}
          </div>

          <Badge tone="outline" className="mt-6 capitalize">
            {listing.category.replace("-", " ")}
          </Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">{listing.title}</h1>
          <p className="mt-2 text-lg text-muted">{listing.summary}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {listing.rating.toFixed(1)} ({listing.reviewCount} reviews)
            </span>
            <span className="inline-flex items-center gap-1">
              <Download className="h-4 w-4" /> {compactNumber(listing.downloads)} downloads
            </span>
          </div>

          <div className="mt-8 space-y-6">
            <Section title="Description">
              <p className="text-muted">
                {listing.summary} This listing ships with documentation, support,
                and version history. License terms and pricing are set by the
                creator who owns it.
              </p>
            </Section>

            <Section title="Version history" icon={<History className="h-4 w-4" />}>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between rounded-lg bg-surface-2 px-3 py-2">
                  <span className="font-medium">v{listing.version}</span>
                  <span className="text-muted">Latest</span>
                </li>
                <li className="flex justify-between px-3 py-2 text-muted">
                  <span>Older releases</span>
                  <span>Synced from GitHub releases</span>
                </li>
              </ul>
            </Section>
          </div>
        </div>

        {/* Buy panel */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-3xl font-bold">{formatPrice(listing.priceCents)}</div>
            <Button size="lg" className="mt-4 w-full">
              {listing.priceCents ? "Buy now" : "Download free"}
            </Button>
            <Button variant="outline" size="lg" className="mt-2 w-full">
              Add to cart
            </Button>

            <dl className="mt-6 space-y-2 text-sm">
              <Row label="License">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-accent" /> {listing.license}
                </span>
              </Row>
              <Row label="Version">v{listing.version}</Row>
            </dl>

            {listing.repoUrl && (
              <ButtonLink
                href={listing.repoUrl}
                variant="outline"
                className="mt-4 w-full"
                external
              >
                <Github className="h-4 w-4" /> Source repository
              </ButtonLink>
            )}
          </div>

          {author && (
            <Link
              href={`/creators/${author.username}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-brand/50"
            >
              <Avatar src={author.avatar} alt={author.name} size="md" />
              <div>
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-xs text-muted">View creator profile</p>
              </div>
            </Link>
          )}
        </aside>
      </div>
    </Container>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium">{children}</dd>
    </div>
  );
}
