"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const nav = [
  { label: "Creators", href: "/creators" },
  { label: "Projects", href: "/projects" },
  { label: "Learning", href: "/learning" },
  { label: "Community", href: "/community" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2" aria-label="B&B Bros home">
            <Logo />
            <span className="text-lg font-bold tracking-tight">B&amp;B Bros</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-surface-2 text-fg"
                      : "text-muted hover:text-fg"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="hidden h-9 items-center gap-2 rounded-lg border border-border px-3 text-sm text-muted transition-colors hover:text-fg sm:flex"
          >
            <Search className="h-4 w-4" />
            <span className="text-muted">Search…</span>
          </Link>
          <a
            href="https://github.com/seed0001/b-bBros"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:text-fg sm:flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <ButtonLink href="/signin" variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </ButtonLink>
          <ButtonLink href="/creators/become" size="sm" className="hidden md:inline-flex">
            Become a Creator
          </ButtonLink>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface-2 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <ButtonLink href="/signin" variant="outline" size="sm" className="flex-1">
                Sign In
              </ButtonLink>
              <ButtonLink href="/creators/become" size="sm" className="flex-1">
                Become a Creator
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
