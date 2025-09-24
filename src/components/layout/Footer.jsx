import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from "react-router-dom";


const Footer = ({ isSidebarExpanded }) => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`fixed bottom-0 right-0 h-12 transition-all duration-300 ${isSidebarExpanded ? 'left-64' : 'left-16'
      } ${isDarkMode ? 'bg-slate-900 border-t border-slate-700' : 'bg-white border-t border-gray-300'}`}>
      <div className="flex items-center justify-between h-full px-6">
        <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          © 2025 GuruSkull. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-xs">
          <Link
            to="/TermsConditions"
            className={`transition-colors focus:outline-none focus:ring-0 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Terms & Conditions
          </Link>
          <Link
            to="/PrivacyPolicy"
            className={`transition-colors focus:outline-none focus:ring-0 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/SafetySecurity"
            className={`transition-colors focus:outline-none focus:ring-0 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Safety & Security
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







































