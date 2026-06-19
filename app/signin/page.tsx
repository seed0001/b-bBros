import type { Metadata } from "next";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to B&B Bros.",
};

export default function SignInPage() {
  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <Logo className="h-10 w-10" />
          <h1 className="mt-4 text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted">
            Sign in to manage your projects and profile.
          </p>
        </div>

        <ButtonLink
          href="https://github.com/seed0001/b-bBros"
          size="lg"
          className="w-full"
          external
        >
          <Github className="h-4 w-4" /> Continue with GitHub
        </ButtonLink>

        <div className="my-5 flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
        </div>

        <label className="block text-sm font-medium">Email</label>
        <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-border bg-bg px-3">
          <Mail className="h-4 w-4 text-muted" />
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>
        <Button size="lg" variant="secondary" className="mt-4 w-full">
          Continue with email
        </Button>

        <p className="mt-6 text-center text-sm text-muted">
          New here?{" "}
          <Link href="/creators/become" className="text-brand hover:underline">
            Become a Creator
          </Link>
        </p>
        <p className="mt-2 text-center text-xs text-muted">
          Authentication is wired up in a later phase.
        </p>
      </div>
    </Container>
  );
}
