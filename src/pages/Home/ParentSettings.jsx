import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { Edit3, Plus, Download, CreditCard, Trash2, Save, Calendar } from 'lucide-react';

const ParentSettings = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('General');

  // Parent profile state
  const [parentProfile, setParentProfile] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@gmail.com',
    phone: '+91 98765 43421',
    dateOfBirth: '15-03-2006',
    emergencyContact: '+91 98998 76554',
    address: '123 Main Street, City, State 12345',
    alternateEmail: 'parent@gmail.com'
  });

  // Children data
  const [children, setChildren] = useState([
    {
      id: 1,
      name: 'Aayush Sharma',
      email: 'aayush.sharma@gmail.com',
      firstName: 'Aayush',
      lastName: 'Johnson',
      emailAddress: 'alex.johnson@gmail.com',
      phoneNumber: '+91 98765 43421',
      dateOfBirth: '15-03-2006',
      emergencyContact: '+91 98998 76554',
      allergies: 'None',
      medicalConditions: 'None',
      avatar: 'AS'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'alex.johnson@gmail.com',
      firstName: 'Alex',
      lastName: 'Johnson',
      emailAddress: 'alex.johnson@gmail.com',
      phoneNumber: '+91 98765 43421',
      dateOfBirth: '15-03-2006',
      emergencyContact: '+91 98998 76554',
      allergies: 'None',
      medicalConditions: 'None',
      avatar: 'PS'
    }
  ]);

  // Notification preferences
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    announcements: true,
    assignments: true,
    grades: true,
    attendance: false,
    events: true,
    reminders: true
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const ToggleSwitch = ({ enabled, onChange }) => (
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
  );

  const renderProfileInformation = () => (
    <div className={`p-6 rounded-2xl border ${
      isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Profile Information
        </h3>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
          <Edit3 size={14} />
          Edit Profile
        </button>
      </div>

      {/* Profile Avatar and Basic Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
          AJ
        </div>
        <div>
          <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Alex Johnson
          </h4>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            alex.johnson@gmail.com
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            First Name
          </label>
          <input
            type="text"
            value={parentProfile.firstName}
            onChange={(e) => setParentProfile(prev => ({...prev, firstName: e.target.value}))}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Last Name
          </label>
          <input
            type="text"
            value={parentProfile.lastName}
            onChange={(e) => setParentProfile(prev => ({...prev, lastName: e.target.value}))}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          <input
            type="email"
            value={parentProfile.email}
            onChange={(e) => setParentProfile(prev => ({...prev, email: e.target.value}))}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Phone Number
          </label>
          <input
            type="tel"
            value={parentProfile.phone}
            onChange={(e) => setParentProfile(prev => ({...prev, phone: e.target.value}))}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Date of Birth
          </label>
          <input
            type="date"
            value="2006-03-15"
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Emergency Contact
          </label>
          <input
            type="tel"
            value={parentProfile.emergencyContact}
            onChange={(e) => setParentProfile(prev => ({...prev, emergencyContact: e.target.value}))}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <div className="md:col-span-2">
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Address
          </label>
          <textarea
            value={parentProfile.address}
            onChange={(e) => setParentProfile(prev => ({...prev, address: e.target.value}))}
            rows="3"
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
          <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            255/255 Characters
          </p>
        </div>

        <div className="md:col-span-2">
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Alternate Email
          </label>
          <input
            type="email"
            value={parentProfile.alternateEmail}
            onChange={(e) => setParentProfile(prev => ({...prev, alternateEmail: e.target.value}))}
            className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="mt-8">
        <h4 className={`text-lg font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Notification Preferences
        </h4>
        <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Choose how you want to receive notifications
        </p>

        {/* Delivery Methods */}
        <div className="mb-6">
          <h5 className={`text-base font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Delivery Methods
          </h5>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Notifications</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive notifications via email</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.emailNotifications}
                onChange={() => handleNotificationToggle('emailNotifications')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>SMS Notifications</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive notifications via SMS</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.smsNotifications}
                onChange={() => handleNotificationToggle('smsNotifications')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Push Notifications</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receive push notifications on browser</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.pushNotifications}
                onChange={() => handleNotificationToggle('pushNotifications')}
              />
            </div>
          </div>
        </div>

        {/* Content Types */}
        <div>
          <h5 className={`text-base font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Content Types
          </h5>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Announcements</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Important updates and news</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.announcements}
                onChange={() => handleNotificationToggle('announcements')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Assignments</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>New assignments and due dates</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.assignments}
                onChange={() => handleNotificationToggle('assignments')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Grades</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Grade updates and report cards</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.grades}
                onChange={() => handleNotificationToggle('grades')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Attendance</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Attendance reports and alerts</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.attendance}
                onChange={() => handleNotificationToggle('attendance')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Events</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Upcoming events and activities</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.events}
                onChange={() => handleNotificationToggle('events')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Reminders</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Class and exam reminders</p>
              </div>
              <ToggleSwitch 
                enabled={notifications.reminders}
                onChange={() => handleNotificationToggle('reminders')}
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Save Notification Settings
          </button>
        </div>
      </div>
    </div>
  );

  const renderChildrenInformation = () => (
    <div className={`p-6 rounded-2xl border ${
      isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Children Information
        </h3>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Add Child
        </button>
      </div>

      <div className="space-y-8">
        {children.map((child, index) => (
          <div key={child.id} className={`p-6 rounded-lg border ${
            isDarkMode ? 'bg-slate-600 border-slate-500' : 'bg-gray-50 border-gray-200'
          }`}>
            {/* Child Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {child.avatar}
                </div>
                <div>
                  <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.name}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {child.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  <Save size={14} />
                  Save Profile
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                  <Edit3 size={14} />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Child Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  First Name
                </label>
                <input
                  type="text"
                  value={child.firstName}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Last Name
                </label>
                <input
                  type="text"
                  value={child.lastName}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={child.emailAddress}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={child.phoneNumber}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  value="2006-03-15"
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Emergency Contact
                </label>
                <input
                  type="tel"
                  value={child.emergencyContact}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Allergies
                </label>
                <textarea
                  value={child.allergies}
                  rows="3"
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Medical Conditions
                </label>
                <textarea
                  value={child.medicalConditions}
                  rows="3"
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
            </div>

            {/* Child Actions */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm">
                <Download size={14} />
                Download Profile
              </button>
              <button className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm">
                <CreditCard size={14} />
                Print ID Card
              </button>
              <button className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm ml-auto">
                <Trash2 size={14} />
                Remove Child
              </button>
            </div>
          </div>
        ))}
      </div>
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
              Manage your account preferences
            </p>
          </div>

          <div className="flex gap-8">
            {/* Settings Menu */}
            <div className={`w-64 p-4 rounded-2xl border h-fit ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
            }`}>
              <h3 className={`text-base font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings Menu
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('General')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeTab === 'General'
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-slate-700'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  General
                </button>
                <button
                  onClick={() => setActiveTab('Children')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeTab === 'Children'
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-slate-700'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Children
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'General' && renderProfileInformation()}
              {activeTab === 'Children' && renderChildrenInformation()}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default ParentSettings;