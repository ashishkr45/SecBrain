import { CardProps } from "../components/ui/spaceCard";

export const extractEmbedId = (type: CardProps["type"], url?: string): string | null => {
	if(!url) return null;
	try {
		const parsedUrl = new URL(url);
		if(type === "youtube") {
			if(parsedUrl.hostname.includes("youtube.com")) {
				if(parsedUrl.pathname.includes("/shorts")) {
					return parsedUrl.pathname.split("/shorts/")[1];
				} else if(parsedUrl.pathname === "/watch") {
					return parsedUrl.searchParams.get("v");
				} else {
					return parsedUrl.pathname.split("/")[1];
				}
			} else if (parsedUrl.hostname.includes("youtu.be")) {
				return parsedUrl.pathname.slice(1);
			}
		}

		if (type === "tweet") {
			  const match = url.match(/status\/(\d+)/);
			  return match ? match[1] : null;
		}

		return null;
	} catch(err) {
		return null;
	}
} 