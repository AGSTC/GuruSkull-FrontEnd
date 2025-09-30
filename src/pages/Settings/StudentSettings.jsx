import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  User,
  Bell,
  Globe,
  Calendar,
  Mail,
  Phone,
  Check,
  X
} from 'lucide-react';

const StudentSettings = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'success', 'error', or null
  const [isLoading, setIsLoading] = useState(false);

  // Theme and Language Settings State
  const [themePreference, setThemePreference] = useState(() => {
    // Initialize based on current theme
    return isDarkMode ? 'Dark Mode' : 'Light Mode';
  });
  const [language, setLanguage] = useState('English');

  // Security Settings State
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginAlerts: false,
    passwordReminders: true,
    biometricLogin: false
  });

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    // Delivery Methods
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    
    // Content Types
    announcements: true,
    assignments: true,
    grades: true,
    attendance: true,
    events: true,
    reminders: true
  });

  // Original settings for comparison (to track changes)
  const [originalNotificationSettings, setOriginalNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    announcements: true,
    assignments: true,
    grades: true,
    attendance: true,
    events: true,
    reminders: true
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Check if settings have changed
  const hasUnsavedChanges = () => {
    return JSON.stringify(notificationSettings) !== JSON.stringify(originalNotificationSettings);
  };

  const handleSecurityToggle = (setting) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleNotificationToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
    // Clear save status when settings change
    setSaveStatus(null);
  };

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    setThemePreference(selectedTheme);
    
    // Apply theme immediately based on selection
    if (selectedTheme === 'Dark Mode' && !isDarkMode) {
      toggleTheme();
    } else if (selectedTheme === 'Light Mode' && isDarkMode) {
      toggleTheme();
    } else if (selectedTheme === 'Auto (System)') {
      // For auto mode, you might want to detect system preference
      // This is a basic implementation - you can enhance it
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if ((systemPrefersDark && !isDarkMode) || (!systemPrefersDark && isDarkMode)) {
        toggleTheme();
      }
    }
    
    console.log('Theme changed to:', selectedTheme);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Here you can add logic to actually change the language
    console.log('Language changed to:', e.target.value);
  };

  const handleSaveNotificationSettings = async () => {
    setIsLoading(true);
    setSaveStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would normally make an API call to save settings
      // const response = await fetch('/api/save-notification-settings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(notificationSettings)
      // });

      // Update original settings to new current settings
      setOriginalNotificationSettings({...notificationSettings});
      setSaveStatus('success');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveStatus(null), 3000);
      
    } catch (error) {
      console.error('Error saving notification settings:', error);
      setSaveStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSaveStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  // Update theme preference when isDarkMode changes (in case theme is changed elsewhere)
  React.useEffect(() => {
    setThemePreference(isDarkMode ? 'Dark Mode' : 'Light Mode');
  }, [isDarkMode]);

  const ToggleSwitch = ({ isOn, onToggle, disabled = false }) => (
    <button
      onClick={onToggle}
      disabled={disabled}
      className={`relative inline-flex h-5 w-9 md:h-6 md:w-11 items-center rounded-full transition-colors ${
        isOn 
          ? 'bg-blue-500' 
          : isDarkMode 
            ? 'bg-slate-600' 
            : 'bg-gray-200'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-3 w-3 md:h-4 md:w-4 transform rounded-full bg-white transition-transform ${
          isOn ? 'translate-x-4 md:translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  const SaveStatusMessage = () => {
    if (!saveStatus) return null;

    return (
      <div className={`flex items-center gap-2 p-2 md:p-3 rounded-lg mb-3 md:mb-4 ${
        saveStatus === 'success' 
          ? 'bg-green-100 text-green-800 border border-green-200' 
          : 'bg-red-100 text-red-800 border border-red-200'
      }`}>
        {saveStatus === 'success' ? (
          <Check size={14} className="md:w-4 md:h-4 text-green-600" />
        ) : (
          <X size={14} className="md:w-4 md:h-4 text-red-600" />
        )}
        <span className="text-xs md:text-sm font-medium">
          {saveStatus === 'success' 
            ? 'Notification settings saved successfully!' 
            : 'Failed to save settings. Please try again.'
          }
        </span>
      </div>
    );
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="settings" />

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 lg:mb-8 gap-3 sm:gap-0">
            <div className="text-left">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage your account preferences
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Student ID: ST20240001
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Last updated: Jan 15, 2024
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6">
            
            {/* Settings Sidebar */}
            <div className="xl:col-span-1">
              <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-base md:text-lg font-semibold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Security Settings
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Two-factor authentication
                      </div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Add extra security to your account
                      </div>
                    </div>
                    <ToggleSwitch 
                      isOn={securitySettings.twoFactorAuth}
                      onToggle={() => handleSecurityToggle('twoFactorAuth')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Login Alerts
                      </div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Get notified of new logins
                      </div>
                    </div>
                    <ToggleSwitch 
                      isOn={securitySettings.loginAlerts}
                      onToggle={() => handleSecurityToggle('loginAlerts')}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Show Ranking
                      </div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Show your class ranking
                      </div>
                    </div>
                    <ToggleSwitch 
                      isOn={securitySettings.passwordReminders}
                      onToggle={() => handleSecurityToggle('passwordReminders')}
                    />
                  </div>

                  <div className="pt-2">
                    <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Theme Preference
                    </label>
                    <select 
                      value={themePreference}
                      onChange={handleThemeChange}
                      className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' 
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                      }`}
                    >
                      <option value="Auto (System)">Auto (System)</option>
                      <option value="Light Mode">Light Mode</option>
                      <option value="Dark Mode">Dark Mode</option>
                    </select>
                    <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Current: {themePreference}
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Language
                    </label>
                    <select 
                      value={language}
                      onChange={handleLanguageChange}
                      className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' 
                          : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                      }`}
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                    <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Selected: {language}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Settings Content */}
            <div className="xl:col-span-3 space-y-4 md:space-y-6">
              

              {/* Notification Preferences */}
              <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg md:text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Notification Preferences
                </h3>
                <p className={`text-xs md:text-sm mb-4 md:mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Choose how you want to be notified
                </p>

                {/* Save Status Message */}
                <SaveStatusMessage />

                {/* Delivery Methods */}
                <div className="mb-6 md:mb-8">
                  <h4 className={`text-base md:text-lg font-medium mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Delivery Methods
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Mail size={16} className="md:w-5 md:h-5 text-blue-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Email Notifications
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Receive notifications via email
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.emailNotifications}
                        onToggle={() => handleNotificationToggle('emailNotifications')}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Phone size={16} className="md:w-5 md:h-5 text-green-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            SMS Notifications
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Receive notifications via SMS
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.smsNotifications}
                        onToggle={() => handleNotificationToggle('smsNotifications')}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Bell size={16} className="md:w-5 md:h-5 text-purple-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Push Notifications
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Receive push notifications on browser
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.pushNotifications}
                        onToggle={() => handleNotificationToggle('pushNotifications')}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Types */}
                <div>
                  <h4 className={`text-base md:text-lg font-medium mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Content Types
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Bell size={16} className="md:w-5 md:h-5 text-blue-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Announcements
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            School and class announcements
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.announcements}
                        onToggle={() => handleNotificationToggle('announcements')}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <User size={16} className="md:w-5 md:h-5 text-green-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Assignments
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            New assignments and due dates
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.assignments}
                        onToggle={() => handleNotificationToggle('assignments')}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Globe size={16} className="md:w-5 md:h-5 text-purple-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Grades
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Test scores and report cards
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.grades}
                        onToggle={() => handleNotificationToggle('grades')}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <User size={16} className="md:w-5 md:h-5 text-orange-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Attendance
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Attendance reports and alerts
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.attendance}
                        onToggle={() => handleNotificationToggle('attendance')}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Calendar size={16} className="md:w-5 md:h-5 text-red-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Events
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            School events and activities
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.events}
                        onToggle={() => handleNotificationToggle('events')}
                      />
                    </div>

                    <div className={`flex items-center justify-between p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Bell size={16} className="md:w-5 md:h-5 text-yellow-500" />
                        <div>
                          <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Reminders
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Due date reminders
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.reminders}
                        onToggle={() => handleNotificationToggle('reminders')}
                      />
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className={`mt-6 md:mt-8 pt-4 md:pt-6 border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div>
                      {hasUnsavedChanges() && (
                        <div className={`text-xs md:text-sm ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                          You have unsaved changes
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleSaveNotificationSettings}
                    disabled={isLoading || !hasUnsavedChanges()}
                    className={`w-full py-2 md:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-xs md:text-sm ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : hasUnsavedChanges()
                          ? 'bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-[1.02]'
                          : 'bg-gray-300 cursor-not-allowed text-gray-500'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      'Save Notification Settings'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default StudentSettings;