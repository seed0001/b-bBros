/** Compact brand mark — two interlocked "B" blocks in the brand gradient. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={
        "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent text-sm font-black text-brand-fg " +
        (className ?? "")
      }
      aria-hidden
    >
      B
    </span>
  );
}
