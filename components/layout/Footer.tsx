import Link from "next/link";
import { Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const groups = [
  {
    title: "Platform",
    links: [
      { label: "Creators", href: "/creators" },
      { label: "Projects", href: "/projects" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Learning", href: "/learning" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Community Feed", href: "/community" },
      { label: "Events", href: "/community#events" },
      { label: "Hackathons", href: "/community#events" },
      { label: "Collaborate", href: "/community" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Become a Creator", href: "/creators/become" },
      { label: "Sign In", href: "/signin" },
      { label: "GitHub", href: "https://github.com/seed0001/b-bBros" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-bold">B&amp;B Bros</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              The creator-first platform built around GitHub. Build, learn,
              share, and own your work.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="mb-3 text-sm font-semibold">{g.title}</h4>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} B&amp;B Bros. GitHub remains the source
            of truth for your code.
          </p>
          <a
            href="https://github.com/seed0001/b-bBros"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <Github className="h-4 w-4" /> seed0001/b-bBros
          </a>
        </div>
      </Container>
    </footer>
  );
}
