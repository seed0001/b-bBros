import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Design placeholders for modules that ship after Phase 1. */
const modules = [
  "AI Companion Launcher",
  "Local AI Downloads",
  "Companion Marketplace",
  "Framework Marketplace",
  "Desktop Launcher",
  "Cloud Sync",
  "Creator Verification",
  "Organization Pages",
  "Teams",
  "Enterprise",
  "Events",
  "Research Labs",
  "Robotics",
  "API Marketplace",
  "Prompt Marketplace",
];

export function FutureModules() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="On the roadmap"
          title="Built to grow"
          description="The UI leaves room for the modules coming next. Everything is modular, component-based, and ready to scale."
        />
        <div className="flex flex-wrap gap-3">
          {modules.map((m) => (
            <div
              key={m}
              className="flex items-center gap-2 rounded-xl border border-dashed border-border bg-surface/50 px-4 py-2.5 text-sm text-muted"
            >
              {m}
              <Badge tone="outline">Soon</Badge>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
