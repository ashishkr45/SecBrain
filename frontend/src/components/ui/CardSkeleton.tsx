interface CardSkeletonProps {
  isDarkMode: boolean;
}

export const CardSkeleton = ({ isDarkMode }: CardSkeletonProps) => {
  const themeClasses = isDarkMode 
    ? "bg-gray-700" 
    : "bg-gray-300";

  return (
    // The main container uses animate-pulse to create the loading effect
    <div className={`p-4 rounded-lg shadow-md animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="space-y-3">
        {/* Placeholder for the title */}
        <div className={`h-4 w-3/4 rounded ${themeClasses}`}></div>
        {/* Placeholder for a line of text or tags */}
        <div className={`h-3 w-1/2 rounded ${themeClasses}`}></div>
        {/* Placeholder for another line of text */}
        <div className={`h-3 w-5/6 rounded ${themeClasses}`}></div>
      </div>
    </div>
  );
};