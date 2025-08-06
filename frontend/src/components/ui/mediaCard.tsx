import { Video, Reel, XIcon, LinkedInIcon, PinterestIcon, ShareIcon, DeleteIcon } from "../../icons/Icons";
import { CardProps } from "./spaceCard";
import { YouTubeEmbed, InstagramEmbed, XEmbed, LinkedInEmbed, PinterestEmbed } from 'react-social-media-embed';
import { lightPastelColors, darkPastelColors } from "./spaceCard";
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
  const { title, tags, time, url, mediaType, isDarkMode } = props;
  const { icon: IconComponent, iconBg, unavailableText } = getMediaConfig(mediaType);

  const getTagColor = (index: number, isDarkMode: boolean) => {
    const colors = isDarkMode ? darkPastelColors : lightPastelColors;
    return colors[index % colors.length];
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800/30 border-slate-900' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-2xl transition-all duration-300 w-full mb-4`}>
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
            <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
              <IconComponent size="md" color="#ffffff" />
            </div>
            <span className={`${isDarkMode ? 'text-gray-50' : 'text-gray-900'} text-sm font-medium truncate`}>{title}</span>
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
                  className={`${getTagColor(index, isDarkMode)} px-2 py-0.5 rounded-2xl text-xs font-medium`}
                >
                  {tag}
                </span>
              ))}
              <span className={`${isDarkMode ? 'text-white bg-stone-700 border-stone-900' : 'text-gray-500 bg-slate-200 border-stone-600'} text-xs px-2 py-0.5 rounded-2xl font-medium`}>
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