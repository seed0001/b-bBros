import {
  Github,
  Globe,
  Youtube,
  MessageCircle,
  Twitter,
  Linkedin,
  Music2,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import type { SocialLink, SocialPlatform } from "@/lib/types";

const iconFor: Record<SocialPlatform, LucideIcon> = {
  github: Github,
  website: Globe,
  youtube: Youtube,
  tiktok: Music2,
  discord: MessageCircle,
  twitter: Twitter,
  linkedin: Linkedin,
  portfolio: Briefcase,
};

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) => {
        const I = iconFor[link.platform];
        return (
          <a
            key={link.platform + link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={link.platform}
            title={link.platform}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-brand/50 hover:text-fg"
          >
            <I className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
