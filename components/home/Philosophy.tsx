import { Hammer, GraduationCap, Store, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    icon: Hammer,
    title: "I can build AI.",
    body: "Publish frameworks, companions, and tools. Ship from your repos with docs, releases, and versioning.",
  },
  {
    icon: GraduationCap,
    title: "I can learn AI.",
    body: "Follow guided paths, courses, and workshops taught by the creators actually building it.",
  },
  {
    icon: Store,
    title: "I can sell AI.",
    body: "List companion packs, plugins, and knowledge packs. Set your price, your license, your terms.",
  },
  {
    icon: ShieldCheck,
    title: "I own my work.",
    body: "Your code lives in your GitHub. We add discovery and business tools — never the ownership.",
  },
];

export function Philosophy() {
  return (
    <section className="border-b border-border py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand/40"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-muted">
          The platform exists to{" "}
          <span className="text-fg">empower creators</span>, not replace them.
          We&apos;re building an ecosystem — not just a website.
        </p>
      </Container>
    </section>
  );
}
