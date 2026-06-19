import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Base surface card. `href` turns the whole card into a link with hover lift.
 * Every domain card (creator, project, listing, course…) composes this.
 */
export function Card({
  href,
  className,
  children,
  interactive = true,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
  interactive?: boolean;
}) {
  const classes = cn(
    "group relative rounded-2xl border border-border bg-surface overflow-hidden",
    interactive &&
      "transition-all duration-200 hover:border-brand/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}

export function CardBody({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("p-5", className)}>{children}</div>;
}
