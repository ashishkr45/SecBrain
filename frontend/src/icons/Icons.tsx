import { IconProps, IconSizeVariants } from ".";

export const AddIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
);

export const ShareIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
	</svg>
);

export const ChevronDownIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
		strokeWidth={1.5} stroke={color} 
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
	</svg>
);

export const TwitterIcon = ({ size, color = "#74777d" }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		strokeWidth={1.5} stroke={color}
		className={IconSizeVariants[size]}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M8 19c7.732 0 11.945-6.41 11.945-11.946 0-.182 0-.364-.012-.546A8.534 8.534 0 0 0 22 4.5a8.19 8.19 0 0 1-2.357.646 4.117 4.117 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.106 4.106 0 0 0-6.994 3.742A11.652 11.652 0 0 1 3 3.883a4.106 4.106 0 0 0 1.27 5.482A4.072 4.072 0 0 1 3 8.44v.052a4.106 4.106 0 0 0 3.29 4.022 4.095 4.095 0 0 1-1.085.145c-.265 0-.522-.026-.774-.075a4.11 4.11 0 0 0 3.834 2.85A8.233 8.233 0 0 1 3 18.407 11.615 11.615 0 0 0 8 19z" />
	</svg>
);

export const DeleteIcon = ({ size, color = "#74777d" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke={color}
    className={IconSizeVariants[size]}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 6h-15M9 6V4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5V6m3 0v13.5A1.5 1.5 0 0116.5 21h-9A1.5 1.5 0 016 19.5V6h12zM10 11v6m4-6v6" />
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

export const CrossIcon = ({ size, color = "#74777d" }: IconProps) => (
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
