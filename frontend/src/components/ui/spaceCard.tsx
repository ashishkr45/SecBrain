import { ShareIcon, DeleteIcon, TwitterIcon, Docx, Video, Links, Hash } from "../../icons/Icons";
import { z } from "zod";
import { YouTubeCard, ReelsCard, TweetCard } from "./mediaCard";

export const contentTypes = z.enum([
  "article",
  "audio",
  "tweet",
  "link",
  "document",
  "youtube",
  "code",
  "thread",
  "note",
  "quote",
  "presentation",
  "event",
  "bookmark",
  "post",
  "reel",
  "story",
]);

export interface CardProps {
  type: z.infer<typeof contentTypes>;
  title: string;
  tags: string[];
  time: Date | string;
  url?: string;
}

export const Card = (props: CardProps) => {
  const { type, title, tags, time, url} = props;

  // Delegate to YouTubeCard or TweetCard for specific types
  if (type === "youtube") {
    return <YouTubeCard type={type} title={title} tags={tags} time={time} url={url} />;
  }
  if (type === "tweet" ) {
    return <TweetCard type={type} title={title} tags={tags} time={time} url={url} />;
  }
  if (type === "reel") {
    return <ReelsCard type={type} title={title} tags={tags} time={time} url={url} />;
  }

  // Default card for other types
  return (
    <div className="bg-amber-100 rounded-md shadow-md outline-slate-100 p-3 m-3.5 w-full max-w-72 h-auto min-h-80 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-md">
          {renderTypeIcon(type)}
          <span className="truncate">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShareIcon size="lg" />
          <DeleteIcon size="lg" />
        </div>
      </div>

      {/* Body */}
      <div className="mb-4">
        <p className="text-gray-500 text-sm">Content type not supported</p>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-2 border-t border-gray-200 text-sm text-gray-500">
        <p className="truncate">Tags: {tags.join(", ")}</p>
        <p>Posted: {new Date(time).toLocaleDateString()}</p>
      </div>
    </div>
  );
};



// Helper function for icon rendering
const renderTypeIcon = (type: z.infer<typeof contentTypes>) => {
  switch (type) {
    case "tweet":
      return <TwitterIcon size="lg" />;
    case "youtube":
    case "reel":
    case "story":
      return <Video size="lg" />;
    case "document":
    case "presentation":
    case "article":
    case "note":
    case "quote":
    case "post":
      return <Docx size="lg" />;
    case "link":
    case "bookmark":
      return <Links size="lg" />;
    case "code":
    case "thread":
      return <Hash size="lg" />;
    default:
      return <Docx size="lg" />;
  }
};