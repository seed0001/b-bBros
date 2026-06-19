import { ArrowRight, Github, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-radial-brand" aria-hidden />

      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            A creator ecosystem built around GitHub
          </span>

          <h1 className="animate-fade-up text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
            <span className="block">Build.</span>
            <span className="block">Learn.</span>
            <span className="block">Share.</span>
            <span className="block bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              Own.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg text-muted [animation-delay:120ms]">
            A creator-first platform where builders publish AI projects, sell
            companion packages, teach their skills, and keep ownership of
            everything they create.
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-3 [animation-delay:240ms]">
            <ButtonLink href="/creators" size="lg">
              Explore Creators <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/creators/become" size="lg" variant="secondary">
              Become a Creator
            </ButtonLink>
            <ButtonLink href="/projects" size="lg" variant="outline">
              Browse Projects
            </ButtonLink>
          </div>

          <p className="mt-8 inline-flex animate-fade-in items-center gap-2 text-sm text-muted [animation-delay:360ms]">
            <Github className="h-4 w-4" />
            GitHub stays the source of truth. We add discovery, education, and
            business tools on top.
          </p>
        </div>
      </Container>
    </section>
  );
}
