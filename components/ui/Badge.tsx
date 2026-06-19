import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "brand" | "accent" | "outline" | "warn";

const tones: Record<Tone, string> = {
  default: "bg-surface-2 text-muted",
  brand: "bg-brand/15 text-brand",
  accent: "bg-accent/15 text-accent",
  outline: "border border-border text-muted",
  warn: "bg-amber-500/15 text-amber-400",
};

export function Badge({
  tone = "default",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
