import { MessageSquare, Heart } from "lucide-react";
import { getCreator } from "@/lib/data";
import type { CommunityPost } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";

const kindTone: Record<
  CommunityPost["kind"],
  "brand" | "accent" | "default" | "warn"
> = {
  showcase: "accent",
  discussion: "default",
  devlog: "brand",
  announcement: "warn",
  collab: "brand",
  event: "warn",
};

export function CommunityPostCard({ post }: { post: CommunityPost }) {
  const author = getCreator(post.authorUsername);
  return (
    <Card interactive={false} className="p-5">
      <div className="flex items-start gap-3">
        {author && <Avatar src={author.avatar} alt={author.name} size="md" />}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <Badge tone={kindTone[post.kind]} className="capitalize">
              {post.kind}
            </Badge>
            <span className="text-xs text-muted">
              {author?.name} · {post.createdAt}
            </span>
          </div>
          <h3 className="font-semibold">{post.title}</h3>
          <p className="mt-1 text-sm text-muted">{post.body}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-1">
              <Heart className="h-4 w-4" /> {post.reactions}
            </span>
            <span className="inline-flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> {post.replies}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
