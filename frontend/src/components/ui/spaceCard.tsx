import { ShareIcon, DeleteIcon, TwitterIcon, Docx, Video, Links, Hash } from "../../icons/Icons";
import { z } from 'zod';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { extractEmbedId } from '../../utility/embedId';
 
export const contentTypes = z.enum([
  "image", "video", "article", "audio", "tweet", "link", "document",
  "youtube", "code", "thread", "note", "quote", "presentation", "event",
  "bookmark", "post", "reel", "story"
]);

export interface CardProps {
  type: z.infer<typeof contentTypes>;
  title: string;
  tags: string[];
  time: Date | string;
  url?: string;
}


export const Card = (props: CardProps) => {
  const { type, title, tags, time, url } = props;
  const embedId = extractEmbedId(type, url);

  const renderIcon = () => {
    switch (type) {
      case "tweet":
        return <TwitterIcon size="lg" />;
      case "video":
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

  return (
    <div className="bg-amber-100 rounded-md shadow-md outline-slate-100 p-3 m-3.5 w-full max-w-72 h-auto min-h-80 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-md">
          {renderIcon()}
          <span className="truncate">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShareIcon size="lg" />
          <DeleteIcon size="lg" />
        </div>
      </div>

      {/* Body */}
      <div className="mb-4">
        {type === "youtube" && embedId ? (
         <div className="aspect-video w-full rounded-md overflow-hidden">
			<iframe
				src={`https://www.youtube.com/embed/${embedId}`}
				className="w-full h-full"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
        ) : null}

        {type === "tweet" && embedId && (
          <div className="mt-2">
            <TwitterTweetEmbed tweetId={embedId} options={{ align: 'center' }} />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-gray-200 text-sm text-gray-500">
        <p className="truncate">Tags: {tags.join(", ")}</p>
        <p>Posted: {new Date(time).toLocaleDateString()}</p>
      </div>
    </div>
  );
};