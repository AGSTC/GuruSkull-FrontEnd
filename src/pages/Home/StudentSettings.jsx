import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  User,
  Shield,
  Bell,
  Globe,
  Eye,
  EyeOff,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Edit3,
  Check,
  X
} from 'lucide-react';

const StudentSettings = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Profile Information State
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@gmail.com',
    phone: '+91 98765 43210',
    dateOfBirth: '15-03-2006',
    emergencyContact: '+91 98765 76543',
    address: '123 Main Street, City, State 12345',
    parentEmail: 'parent@gmail.com'
  });

  // Temporary state for editing
  const [editData, setEditData] = useState({ ...profileData });

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

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing - reset to original data
      setEditData({ ...profileData });
    }
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Save changes
    setProfileData({ ...editData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
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
  };

  const ToggleSwitch = ({ isOn, onToggle, disabled = false }) => (
    <button
      onClick={onToggle}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        isOn 
          ? 'bg-blue-500' 
          : isDarkMode 
            ? 'bg-slate-600' 
            : 'bg-gray-200'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
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
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage your account preferences
              </p>
            </div>
            <div className="text-right">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Student ID: ST20240001
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Last updated: Jan 15, 2024
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            
            {/* Settings Sidebar */}
            <div className="xl:col-span-1">
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Security Settings
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                      <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                      <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Theme Preference
                    </label>
                    <select className={`w-full px-3 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}>
                      <option>Auto (System)</option>
                      <option>Light Mode</option>
                      <option>Dark Mode</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Language
                    </label>
                    <select className={`w-full px-3 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Settings Content */}
            <div className="xl:col-span-3 space-y-6">
              
              {/* Profile Information */}
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Profile Information
                  </h3>
                  <div className="flex items-center gap-2">
                    {isEditing ? (
                      <>
                        <button
                          onClick={handleEditToggle}
                          className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm"
                        >
                          <X size={16} />
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveChanges}
                          className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white hover:bg-green-600 rounded-lg text-sm"
                        >
                          <Check size={16} />
                          Save Changes
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={handleEditToggle}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg text-sm"
                      >
                        <Edit3 size={16} />
                        Edit Profile
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    A
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Alex Johnson
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Class 12 - Science Stream
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      Student ID: ST20240001
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      First Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Last Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.lastName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Date of Birth
                    </label>
                    {isEditing ? (
                      <input
                        type="date"
                        value={editData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.dateOfBirth}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Emergency Contact
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editData.emergencyContact}
                        onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.emergencyContact}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Address
                    </label>
                    {isEditing ? (
                      <textarea
                        value={editData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        rows={2}
                        className={`w-full px-3 py-2 rounded-lg border resize-none ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.address}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Parent Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editData.parentEmail}
                        onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`px-3 py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {profileData.parentEmail}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Notification Preferences
                </h3>
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Choose how you want to be notified
                </p>

                {/* Delivery Methods */}
                <div className="mb-8">
                  <h4 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Delivery Methods
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Mail size={20} className="text-blue-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Email Notifications
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Receive notifications via email
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.emailNotifications}
                        onToggle={() => handleNotificationToggle('emailNotifications')}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Phone size={20} className="text-green-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            SMS Notifications
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Receive notifications via SMS
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.smsNotifications}
                        onToggle={() => handleNotificationToggle('smsNotifications')}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Bell size={20} className="text-purple-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Push Notifications
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                  <h4 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Content Types
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Bell size={20} className="text-blue-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Announcements
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            School and class announcements
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.announcements}
                        onToggle={() => handleNotificationToggle('announcements')}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <User size={20} className="text-green-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Assignments
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            New assignments and due dates
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.assignments}
                        onToggle={() => handleNotificationToggle('assignments')}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Globe size={20} className="text-purple-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Grades
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Test scores and report cards
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.grades}
                        onToggle={() => handleNotificationToggle('grades')}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <User size={20} className="text-orange-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Attendance
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Attendance reports and alerts
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.attendance}
                        onToggle={() => handleNotificationToggle('attendance')}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Calendar size={20} className="text-red-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Events
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            School events and activities
                          </div>
                        </div>
                      </div>
                      <ToggleSwitch 
                        isOn={notificationSettings.events}
                        onToggle={() => handleNotificationToggle('events')}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <Bell size={20} className="text-yellow-500" />
                        <div>
                          <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Reminders
                          </div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    Save Notification Settings
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