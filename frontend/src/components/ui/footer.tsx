import React from 'react';
import SecBrainIcon from '../../icons/SecBrainIcon';
import { XIcon, LinkedInIcon, GithubIcon } from '../../icons/Icons';

// --- PROPS INTERFACE ---
interface FooterProps {
  isDarkMode: boolean;
}

// --- FOOTER COMPONENT ---
const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  
  // Style for the links, consistent across columns
  const linkStyle = `transition-colors duration-300 ${isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-indigo-700'}`;

  // Smooth scroll handler
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Outer wrapper for positioning the card
    <footer className={`w-full md:px-32 transition-all duration-300 ${isDarkMode ? 'bg-[#191a1a]': 'bg-[#eaeaea]'}`}>
      {/* The main visual "card" for the footer */}
      <div className={`w-full rounded-3xl transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/60' : 'bg-blue-900/10'}`}>
        
        {/* Content container with max-width and padding */}
        <div className="max-w-7xl mx-auto p-8 md:p-12">
          {/* Grid layout for the columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1: Logo */}
            <div >
              <SecBrainIcon width="45" height="45" className={isDarkMode ? 'text-white' : 'text-black'}/>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Quick Links</h3>
              <div className="flex flex-col space-y-3">
                <a href="#features" onClick={(e) => handleScroll(e, 'features')} className={linkStyle}>Features</a>
                <a href="/about" className={linkStyle}>About</a>
                {/* You can add more links here */}
              </div>
            </div>
            
            {/* Column 3: Contact (Example) */}
            <div>
              <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</h3>
              <div className="flex flex-col space-y-3">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqhSMCPjrnlxbcHbBXLmDdpLJNxszPtcjJWfBQZGrDJxjKFHHKgRzvfVsTzcvRDstSJjTG" 
					className={linkStyle} target="_blank"  >
					mail
				</a>
              </div>
            </div>

            {/* Column 4: Follow Us */}
            <div>
              <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Follow Us</h3>
              <div className="flex flex-col space-y-3">
                <a href="https://github.com/ashishkr45" target="_blank" className={`flex items-center space-x-3 ${linkStyle}`}>
                  <GithubIcon className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://x.com/Ashucifer" target="_blank" className={`flex items-center space-x-3 ${linkStyle}`}>
                  <XIcon size='lg' />
                  <span>X</span>
                </a>
				<a href="https://www.linkedin.com/in/ashishkr45/" target="_blank" className={`flex items-center space-x-3 ${linkStyle}`}>
					<LinkedInIcon size='lg'/>
					<span>Linkedin</span>
				</a>
              </div>
            </div>
          </div>

          {/* Copyright section with a top border separator */}
          <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Second Brain. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;