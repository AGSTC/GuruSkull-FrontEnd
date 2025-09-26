import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { Save, RotateCcw, Check } from 'lucide-react';

const TeacherSettings = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  
  // Default settings
  const defaultSettings = {
    language: 'English',
    timezone: 'Asia/Kolkata (IST)',
    theme: 'Light',
    scheduleView: 'Week View',
    autoSaveAssignments: true,
    showStudentPhotos: true
  };

  // Settings state
  const [language, setLanguage] = useState(defaultSettings.language);
  const [timezone, setTimezone] = useState(defaultSettings.timezone);
  const [theme, setTheme] = useState(defaultSettings.theme);
  const [scheduleView, setScheduleView] = useState(defaultSettings.scheduleView);
  const [autoSaveAssignments, setAutoSaveAssignments] = useState(defaultSettings.autoSaveAssignments);
  const [showStudentPhotos, setShowStudentPhotos] = useState(defaultSettings.showStudentPhotos);

  // Load saved settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('teacherSettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setLanguage(parsed.language || defaultSettings.language);
        setTimezone(parsed.timezone || defaultSettings.timezone);
        setTheme(parsed.theme || defaultSettings.theme);
        setScheduleView(parsed.scheduleView || defaultSettings.scheduleView);
        setAutoSaveAssignments(parsed.autoSaveAssignments !== undefined ? parsed.autoSaveAssignments : defaultSettings.autoSaveAssignments);
        setShowStudentPhotos(parsed.showStudentPhotos !== undefined ? parsed.showStudentPhotos : defaultSettings.showStudentPhotos);
      } catch (error) {
        console.error('Error loading saved settings:', error);
      }
    }
    
    // Set initial theme based on current context
    setTheme(isDarkMode ? 'Dark' : 'Light');
  }, []);

  // Sync theme with context when theme state changes
  useEffect(() => {
    if (theme === 'Dark' && !isDarkMode) {
      toggleTheme();
    } else if (theme === 'Light' && isDarkMode) {
      toggleTheme();
    }
    // Auto theme would require additional logic based on system preference
    if (theme === 'Auto') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemDark && !isDarkMode) {
        toggleTheme();
      } else if (!systemDark && isDarkMode) {
        toggleTheme();
      }
    }
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleSavePreferences = () => {
    const settings = {
      language,
      timezone,
      theme,
      scheduleView,
      autoSaveAssignments,
      showStudentPhotos,
      savedAt: new Date().toISOString()
    };

    // Save to localStorage
    localStorage.setItem('teacherSettings', JSON.stringify(settings));
    
    // Show success message
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);

    console.log('Preferences saved:', settings);
  };

  const handleResetToDefault = () => {
    setLanguage(defaultSettings.language);
    setTimezone(defaultSettings.timezone);
    setTheme(defaultSettings.theme);
    setScheduleView(defaultSettings.scheduleView);
    setAutoSaveAssignments(defaultSettings.autoSaveAssignments);
    setShowStudentPhotos(defaultSettings.showStudentPhotos);
    
    // Clear saved settings
    localStorage.removeItem('teacherSettings');
    
    // Reset theme to light mode
    if (isDarkMode) {
      toggleTheme();
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Here you would typically integrate with i18n library
    console.log('Language changed to:', newLanguage);
    
    // Simulate language change effect
    document.documentElement.lang = newLanguage.toLowerCase().substring(0, 2);
  };

  const handleTimezoneChange = (newTimezone) => {
    setTimezone(newTimezone);
    console.log('Timezone changed to:', newTimezone);
    
    // Here you would update the application's timezone context
    // For now, we'll just update the state
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    console.log('Theme changed to:', newTheme);
  };

  const handleScheduleViewChange = (newView) => {
    setScheduleView(newView);
    console.log('Default schedule view changed to:', newView);
    
    // Here you would update the schedule component's default view
  };

  const ToggleSwitch = ({ enabled, onChange, label, description }) => (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {label}
        </p>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
          enabled ? 'bg-blue-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="settings" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Settings
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage your account preferences and configurations
            </p>
          </div>

          {/* Success Message */}
          {showSaveSuccess && (
            <div className={`mb-6 p-4 rounded-lg border ${
              isDarkMode ? 'bg-green-900 border-green-700 text-green-200' : 'bg-green-50 border-green-200 text-green-800'
            } flex items-center gap-2`}>
              <Check size={16} />
              <span>Settings saved successfully!</span>
            </div>
          )}

          {/* Main Settings Container */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          } mb-8`}>
            
            {/* Application Preferences Header */}
            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Application Preferences
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Customize your application experience
              </p>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              
              {/* Language Setting */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="English">English</option>
                  <option value="Hindi">हिंदी (Hindi)</option>
                  <option value="Spanish">Español (Spanish)</option>
                  <option value="French">Français (French)</option>
                  <option value="German">Deutsch (German)</option>
                  <option value="Chinese">中文 (Chinese)</option>
                </select>
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  Current: {language}
                </p>
              </div>

              {/* Timezone Setting */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => handleTimezoneChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Asia/Kolkata (IST)">Asia/Kolkata (IST)</option>
                  <option value="UTC">UTC</option>
                  <option value="America/New_York (EST)">America/New_York (EST)</option>
                  <option value="America/Los_Angeles (PST)">America/Los_Angeles (PST)</option>
                  <option value="Europe/London (GMT)">Europe/London (GMT)</option>
                  <option value="Europe/Paris (CET)">Europe/Paris (CET)</option>
                  <option value="Asia/Tokyo (JST)">Asia/Tokyo (JST)</option>
                  <option value="Australia/Sydney (AEST)">Australia/Sydney (AEST)</option>
                </select>
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  Current: {timezone} • {new Date().toLocaleTimeString()}
                </p>
              </div>

              {/* Theme Setting */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Theme
                </label>
                <select
                  value={theme}
                  onChange={(e) => handleThemeChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                  <option value="Auto">Auto (System)</option>
                </select>
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  Active: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </p>
              </div>

              {/* Schedule Default View Setting */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Schedule Default View
                </label>
                <select
                  value={scheduleView}
                  onChange={(e) => handleScheduleViewChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Day View">Day View</option>
                  <option value="Week View">Week View</option>
                  <option value="Month View">Month View</option>
                  <option value="Agenda View">Agenda View</option>
                </select>
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  Default view when opening schedule
                </p>
              </div>
            </div>

            {/* Display Options Section */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Display Options
              </h3>
              
              <div className="space-y-6">
                {/* Auto-save assignments */}
                <ToggleSwitch
                  enabled={autoSaveAssignments}
                  onChange={setAutoSaveAssignments}
                  label="Auto-save assignments"
                  description="Automatically save your work while creating assignments"
                />

                {/* Show student photos */}
                <ToggleSwitch
                  enabled={showStudentPhotos}
                  onChange={setShowStudentPhotos}
                  label="Show student photos"
                  description="Display student profile photos in attendance and gradebook"
                />
              </div>
            </div>

            {/* Current Settings Summary */}
            <div className={`mb-8 p-4 rounded-lg ${
              isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
            } border`}>
              <h4 className={`font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Current Settings Summary
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Language:</span>
                  <br />
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{language}</span>
                </div>
                <div>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Theme:</span>
                  <br />
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{theme}</span>
                </div>
                <div>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Schedule:</span>
                  <br />
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{scheduleView}</span>
                </div>
                <div>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Auto-save:</span>
                  <br />
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {autoSaveAssignments ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex items-center gap-4 pt-6 border-t ${
              isDarkMode ? 'border-slate-600' : 'border-gray-200'
            }`}>
              <button
                onClick={handleSavePreferences}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Save size={16} />
                Save Preferences
              </button>
              
              <button
                onClick={handleResetToDefault}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isDarkMode 
                    ? 'bg-slate-700 text-gray-300 hover:bg-slate-600 focus:ring-slate-500' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400'
                }`}
              >
                <RotateCcw size={16} />
                Reset to Default
              </button>
              
              <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {localStorage.getItem('teacherSettings') && (
                  <>Last saved: {new Date(JSON.parse(localStorage.getItem('teacherSettings')).savedAt).toLocaleString()}</>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherSettings;