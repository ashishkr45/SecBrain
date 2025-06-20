import { IconProps, IconSizeVariants } from ".";

export const AddIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
);

export const ShareIcon = ({ size, color = "#d87656" }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
    strokeWidth={1.5} 
    stroke={color} 
    className={`${IconSizeVariants[size]} hover:stroke-blue-500 transition-colors duration-200 cursor-pointer`}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" 
    />
  </svg>
);


export const ChevronDownIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
		strokeWidth={1.5} stroke={color} 
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
	</svg>
);

export const XIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24"
		className={IconSizeVariants[size]}>
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
	</svg>
);

// LinkedIn Icon
export const LinkedInIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24"
    className={IconSizeVariants[size]}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Pinterest Icon
export const PinterestIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24"
    className={IconSizeVariants[size]}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.02.024.025.058.018.09-.105.437-.336 1.342-.383 1.529-.059.24-.192.29-.443.175-1.672-.776-2.712-3.213-2.712-5.174 0-4.212 3.057-8.08 8.826-8.08 4.637 0 8.244 3.307 8.244 7.728 0 4.611-2.907 8.315-6.947 8.315-1.355 0-2.632-.706-3.068-1.548 0 0-.672 2.563-.835 3.194-.302 1.163-1.117 2.625-1.666 3.516C9.247 23.859 10.578 24.029 12.017 24.029c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.12.017 0z"/>
  </svg>
);

export const DeleteIcon = ({ size, color = "#6b7280" }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
    strokeWidth={1.5} 
    stroke="currentColor"
    className={`${IconSizeVariants[size]} text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer`}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" 
    />
  </svg>
);

export const Docx = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
	</svg>
);

export const Video = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M10 15.5V8.5l6 3.5-6 3.5z" />
		<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25v7.5a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
	</svg>
);

export const Reel = ({ size, color = "#74777d" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke={color}
    className={IconSizeVariants[size]}>
    {/* Outer rectangle */}
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Play button */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5v5l4-2.5-4-2.5z" />
    
    {/* Film strip circles (optional aesthetic touch) */}
    <circle cx="7" cy="7" r="0.5" fill="#74777d" />
    <circle cx="11" cy="7" r="0.5" fill="#74777d" />
    <circle cx="15" cy="7" r="0.5" fill="#74777d" />
    <circle cx="17" cy="7" r="0.5" fill="#74777d" />
  </svg>
);

export const CrossIcon = ({ size }: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className={`${IconSizeVariants[size]} cursor-pointer text-gray-700 hover:text-red-500 transition-colors duration-200`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);

export const HamBurger = ({ size, color = "#74777d" }: IconProps) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		fill="none" 
		viewBox="0 0 24 24" 
		strokeWidth={1.5} 
		stroke={color} 
		className={IconSizeVariants[size]}>
  		<path 
			strokeLinecap="round" 
			strokeLinejoin="round" 
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
	</svg>
);

export const Links = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
	</svg>
);

export const Hash = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
	</svg>
);
