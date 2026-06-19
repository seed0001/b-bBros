import type { Metadata } from "next";
import { CalendarDays, Trophy, Users2, Megaphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CommunityPostCard } from "@/components/cards/CommunityPostCard";
import { communityPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Community",
  description: "Showcases, devlogs, collaborations, events, and hackathons.",
};

const events = [
  {
    icon: Trophy,
    title: "Summer Build Jam",
    date: "Jun 28–30, 2026",
    body: "72-hour hackathon. Build anything AI + open source.",
  },
  {
    icon: Users2,
    title: "Creator AMA: Local-first AI",
    date: "Jul 9, 2026",
    body: "Live Q&A with top companion builders.",
  },
  {
    icon: Megaphone,
    title: "Robotics Showcase",
    date: "Jul 22, 2026",
    body: "Demos from the sim-to-real frontier.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Build together"
        title="Community"
        description="A feed for showcases, developer logs, progress journals, collaboration requests, and announcements."
      >
        <Button>Start a post</Button>
      </PageHeader>

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Feed */}
          <div>
            <SectionHeading title="Community feed" />
            <div className="space-y-4">
              {communityPosts.map((p) => (
                <CommunityPostCard key={p.id} post={p} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6" id="events">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <CalendarDays className="h-4 w-4 text-brand" /> Upcoming events
              </h3>
              <ul className="space-y-4">
                {events.map((e) => (
                  <li key={e.title} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                      <e.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{e.title}</p>
                      <p className="text-xs text-muted">{e.date}</p>
                      <p className="mt-1 text-xs text-muted">{e.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="mb-3 font-semibold">Boards</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Showcases",
                  "Discussions",
                  "Devlogs",
                  "Collaboration",
                  "Announcements",
                  "Help",
                ].map((b) => (
                  <Badge key={b} tone="outline">
                    {b}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
