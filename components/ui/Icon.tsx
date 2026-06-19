import {
  Trophy,
  Users,
  Heart,
  GraduationCap,
  BadgeCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

/** Maps the string icon names stored in data -> lucide components. */
const registry: Record<string, LucideIcon> = {
  Trophy,
  Users,
  Heart,
  GraduationCap,
  BadgeCheck,
  Sparkles,
  Star,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp className={className} />;
}
