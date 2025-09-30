import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from "react-router-dom";

const Footer = ({ isSidebarExpanded }) => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`fixed bottom-0 left-0 right-0 h-10 md:h-12 transition-all duration-300 ${
      isDarkMode ? 'bg-slate-900 border-t border-slate-700' : 'bg-white border-t border-gray-300'
    } ${isSidebarExpanded ? 'md:ml-48 lg:ml-64' : 'md:ml-16'}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between h-full px-3 md:px-6 py-1 md:py-0 text-center sm:text-left">
        <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mb-1 sm:mb-0`}>
          © 2025 GuruSkull. All rights reserved.
        </div>
        <div className="flex items-center gap-2 md:gap-4 text-xs flex-wrap justify-center">
          <Link
            to="/TermsConditions"
            className={`transition-colors focus:outline-none focus:ring-0 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Terms
          </Link>
          <Link
            to="/PrivacyPolicy"
            className={`transition-colors focus:outline-none focus:ring-0 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Privacy
          </Link>
          <Link
            to="/SafetySecurity"
            className={`transition-colors focus:outline-none focus:ring-0 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;