import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const originalText = "back to home";
  const [linkText, setLinkText] = useState(originalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // This function handles the animation on hover
  const handleHover = () => {
    // Stop any existing animation
    if (intervalRef.current) clearInterval(intervalRef.current);

    let iteration = 0;
    const reversedText = originalText.split('').reverse().join('');
    setLinkText(reversedText); // Instantly set to the reversed text

    // After a short delay, start animating back to the original
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        // At each step, reveal one more character of the original text
        const newText = originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            // For the remaining part, you could show random chars,
            // but simply showing the reversed text looks clean.
            return reversedText[index];
          })
          .join("");

        setLinkText(newText);

        if (iteration >= originalText.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }

        iteration += 1 / 2; // Adjust this number for speed (e.g., 1/3 is slower, 1 is faster)
      }, 50); // Adjust interval timing for speed (e.g., 30ms is faster)
    }, 150); // Initial delay before animating back
  };

  // Resets the text when the mouse leaves the link
  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setLinkText(originalText);
  };
  
  // Clean up the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Reusable component for the faint background text
  const DecorText = ({ className }: { className?: string }) => (
    <p className={`absolute select-none text-2xl font-semibold text-gray-200 ${className}`}>
      404
    </p>
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      
      <div className="absolute top-8 left-8 text-lg font-bold text-gray-400">
        <Link to="/">Second Brain</Link>
      </div>

      <DecorText className="top-8 right-8" />
      <DecorText className="top-1/3 left-1/4" />
      <DecorText className="bottom-1/2 right-1/3" />
      <DecorText className="bottom-8 right-8" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* ▼▼▼ KEY CHANGE IS HERE ▼▼▼ */}
        <Link 
          to="/" 
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className="text-lg font-medium text-red-600 tracking-wider" // Added tracking for better letter spacing
        >
          {linkText}
        </Link>
      </div>

      <div className="absolute bottom-8 left-8 flex items-center space-x-4">
        <h1 className="text-8xl font-black text-red-600">404</h1>
        <p className="max-w-xs text-md font-medium text-red-600">
          indicates that the browser was able to communicate with the server, but the server could not find the requested resource.
        </p>
      </div>

    </div>
  );
};

export default ErrorPage;