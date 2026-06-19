/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-8 w-8",
  md: "h-11 w-11",
  lg: "h-16 w-16",
  xl: "h-28 w-28",
};

export function Avatar({
  src,
  alt,
  size = "md",
  className,
  ring,
}: {
  src: string;
  alt: string;
  size?: keyof typeof sizes;
  className?: string;
  ring?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "rounded-full bg-surface-2 object-cover",
        sizes[size],
        ring && "ring-2 ring-bg ring-offset-2 ring-offset-brand",
        className
      )}
    />
  );
}
