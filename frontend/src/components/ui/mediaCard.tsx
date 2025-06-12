import { Video, Reel, XIcon, LinkedInIcon, PinterestIcon, ShareIcon, DeleteIcon } from "../../icons/Icons";
import { CardProps } from "./spaceCard";
import { YouTubeEmbed, InstagramEmbed, XEmbed, LinkedInEmbed, PinterestEmbed } from 'react-social-media-embed';

const pastelColors = [
  "bg-pink-100 text-pink-700 border-pink-200",
  "bg-blue-100 text-blue-700 border-blue-200", 
  "bg-green-100 text-green-700 border-green-200",
  "bg-yellow-100 text-yellow-700 border-yellow-200",
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-indigo-100 text-indigo-700 border-indigo-200",
  "bg-red-100 text-red-700 border-red-200",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-teal-100 text-teal-700 border-teal-200",
  "bg-cyan-100 text-cyan-700 border-cyan-200"
];

const getTagColor = (index: number) => {
  return pastelColors[index % pastelColors.length];
};

export type MediaType = 'youtube' | 'instagram' | 'twitter' | 'linkedin' | 'pinterest';

interface MediaCardProps extends CardProps {
  mediaType: MediaType;
}

const getMediaConfig = (mediaType: MediaType) => {
  switch (mediaType) {
    case 'youtube':
      return {
        icon: Video,
        iconBg: "bg-red-600",
        unavailableText: "YouTube video unavailable"
      };
    case 'instagram':
      return {
        icon: Reel,
        iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
        unavailableText: "Instagram Reel unavailable"
      };
    case 'twitter':
      return {
        icon: XIcon,
        iconBg: "bg-black",
        unavailableText: "Tweet unavailable"
      };
    case 'linkedin':
      return {
        icon: LinkedInIcon, // You might want to create a LinkedIn icon
        iconBg: "bg-blue-600",
        unavailableText: "LinkedIn post unavailable"
      };
    case 'pinterest':
      return {
        icon: PinterestIcon, // You might want to create a Pinterest icon
        iconBg: "bg-red-500",
        unavailableText: "Pinterest pin unavailable"
      };
  }
};

const renderEmbed = (mediaType: MediaType, url: string | undefined, unavailableText: string) => {
  if (!url) {
    return (
      <div className="text-gray-400 text-xs text-center py-8 bg-gray-50 rounded-md">
        {unavailableText}
      </div>
    );
  }

  switch (mediaType) {
    case 'youtube':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div className="aspect-video w-full">
            <YouTubeEmbed 
              url={url} 
              width="100%" 
              height="100%"
            />
          </div>
        </div>
      );
    
    case 'instagram':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div className="w-full" style={{ height: '400px', maxHeight: '400px' }}>
            <InstagramEmbed 
              url={url} 
              width="100%" 
              height={400}
            />
          </div>
        </div>
      );
    
    case 'twitter':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div className="w-full min-h-[150px]">
            <XEmbed 
              url={url} 
              width="100%"
            />
          </div>
        </div>
      );
    
    case 'linkedin':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div className="w-full min-h-[200px]">
            <LinkedInEmbed 
              url={url} 
              width="100%"
            />
          </div>
        </div>
      );
    
    case 'pinterest':
      return (
        <div className="rounded-md overflow-hidden bg-gray-100 w-full">
          <div className="w-full min-h-[300px]">
            <PinterestEmbed 
              url={url} 
              width="100%"
            />
          </div>
        </div>
      );
  }
};

export const MediaEmbedCard = (props: MediaCardProps) => {
  const { title, tags, time, url, mediaType } = props;
  const { icon: IconComponent, iconBg, unavailableText } = getMediaConfig(mediaType);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow break-inside-avoid w-full mb-4">
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
            <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
              <IconComponent size="md" color="#ffffff" />
            </div>
            <span className="text-sm font-medium text-gray-900 truncate">{title}</span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors flex items-center justify-center">
              <ShareIcon size="md" color="#646b76" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors flex items-center justify-center">
              <DeleteIcon size="md" color="#646b76" />
            </button>
          </div>
        </div>

        {/* Media Embed */}
        <div className="mb-3 w-full">
          {renderEmbed(mediaType, url, unavailableText)}
        </div>

        {/* Footer */}
        <div className="space-y-2">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`${getTagColor(index)} px-2 py-0.5 rounded-2xl text-xs font-medium`}
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs px-2 py-0.5 rounded-2xl text-gray-500 bg-slate-200 border-stone-600 font-medium">
                {new Date(time).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Legacy exports for backward compatibility (optional)
export const YouTubeCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="youtube" />
);

export const ReelsCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="instagram" />
);

export const TweetCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="twitter" />
);

export const LinkedInCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="linkedin" />
);

export const PinterestCard = (props: CardProps) => (
  <MediaEmbedCard {...props} mediaType="pinterest" />
);