import { Video, Reel, TwitterIcon, ShareIcon, DeleteIcon } from "../../icons/Icons";
import { CardProps } from "./spaceCard";
import { extractEmbedId } from "../../utility/embedId";
import { TwitterTweetEmbed } from "react-twitter-embed";

export const YouTubeCard = (props: CardProps) => {
  const { type, title, tags, time, url } = props;
  const embedId = extractEmbedId(type, url);

  return (
    <div className="bg-[#fffdf8] rounded-md shadow-zinc-300 shadow-md p-3 w-full h-fit flex flex-col m-4 break-inside-avoid">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-md">
          <Video size="lg" />
          <span className="truncate max-w-40">{title}</span>
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
        ) : (
          <p className="text-gray-500 text-sm">Invalid or missing YouTube video ID</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-2 border-t border-gray-200 text-sm text-gray-500">
        <p className="truncate">Tags: {tags.join(", ")}</p>
        <p>Posted: {new Date(time).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export const ReelsCard = (props: CardProps) => {
  const { type, title, tags, time, url } = props;
  const embedId = extractEmbedId(type, url);

  return (
    <div className="bg-[#fffdf8] rounded-md shadow-zinc-300 shadow-md p-3 w-full h-fit flex flex-col m-4 break-inside-avoid">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-md">
          <Reel size="lg" />
          <span className="truncate max-w-48">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShareIcon size="lg" />
          <DeleteIcon size="lg" />
        </div>
      </div>

      {/* Reel Body */}
      <div className="mb-4">
        {type === "reel" && embedId ? (
          <div className="aspect-[9/16] w-full rounded-md overflow-hidden max-h-96">
            <iframe
              src={`https://www.instagram.com/reel/${embedId}/embed/`}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            />
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Invalid or missing Reel ID</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-2 border-t border-gray-200 text-sm text-gray-500">
        <p className="truncate ">Tags: {tags.join(", ")}</p>
        <p>Posted: {new Date(time).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export const TweetCard = (props: CardProps) => {
  const { type, title, tags, time, url } = props;
  const embedId = extractEmbedId(type, url);
  
  return (
    <div className="bg-[#fffdf8] rounded-md shadow-zinc-300 shadow-md p-3 min-w-full max-w-16 h-fit flex flex-col m-4 break-inside-avoid">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-md">
          <TwitterIcon size="lg" />
          <span className="truncate max-w-48">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShareIcon size="lg" />
          <DeleteIcon size="lg" />
        </div>
      </div>

      {/* Tweet Body */}
      <div className="mb-4">
        {type === "tweet" && embedId ? (
          <div className="max-w-full">
            <TwitterTweetEmbed tweetId={embedId} options={{ align: "center" }} />
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Invalid or missing tweet ID</p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-2 border-t border-gray-200 text-sm text-gray-500">
        <p className="truncate">Tags: {tags.join(", ")}</p>
        <p>Posted: {new Date(time).toLocaleDateString()}</p>
      </div>
    </div>
  );
};