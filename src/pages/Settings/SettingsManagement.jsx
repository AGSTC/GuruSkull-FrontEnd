import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import {
  Settings as SettingsIcon,
  Monitor,
  Bell,
  Shield,
  HardDrive,
  Puzzle,
  ChevronDown,
  Save,
  RotateCcw,
  Download,
  Upload,
  Calendar,
  Clock,
  Users,
  Database,
  Cpu,
  Activity,
  BarChart3,
  Globe,
  Mail,
  Phone,
  MapPin,
  User,
  Building,
  DollarSign,
  GraduationCap,
  BookOpen,
  UserCheck,
  FileText,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  RefreshCw,
  Trash2,
  CloudDownload,
  CloudUpload,
  Server,
  Zap,
  Smartphone,
  MessageSquare,
  Webhook,
  Code,
  Key,
  Sliders,
  Palette,
  Languages,
  Camera,
  Video,
  Mic,
  Volume2,
  Wifi,
  Bluetooth,
  Battery,
  Power
} from 'lucide-react';

const SettingsManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('general');
  
  const [generalSettings, setGeneralSettings] = useState({
    centerName: 'GuruSkull Learning Center',
    ownerName: 'Rajesh Kumar Sharma',
    email: 'admin@guruskull.com',
    phone: '+91 98765 43210',
    address: '123, Learning Road, Bandra West, Mumbai',
    timezone: 'Asia/Kolkata (IST)',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '12-hour (AM/PM)',
    currency: 'INR (₹)',
    academicYear: '2024-25',
    sessionDuration: '60',
    maxStudentPerBatch: '25',
    onlinePayments: true,
    smsNotifications: true,
    autoBackup: true
  });

  const [systemSettings, setSystemSettings] = useState({
    version: '2.1.4',
    totalUsers: '1,245',
    databaseSize: '240 MB',
    uptime: '15 days, 4 hours',
    maxFileSize: '15',
    sessionTimeout: '30',
    cacheTimeout: '60',
    maxConcurrentUsers: '500',
    systemTheme: 'Light Theme',
    serverLoad: 75,
    memoryUsage: 60,
    diskSpace: 78,
    maxLoginAttempts: '5',
    passwordExpiry: '90',
    debugMode: false,
    systemLogging: true,
    dataCompression: true
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsAlerts: true,
    attendanceReminders: true,
    feeReminders: true,
    examNotifications: true,
    assignmentDeadlines: true,
    parentUpdates: true,
    teacherAnnouncements: true,
    systemAlerts: true,
    marketingEmails: false,
    weeklyReports: true,
    monthlyReports: true,
    performanceReports: true,
    backupNotifications: true,
    securityAlerts: true,
    maintenanceAlerts: true,
    reminderFrequency: 'Daily',
    notificationTime: '09:00 AM',
    silentHours: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    sessionTimeout: true,
    ipWhitelist: false,
    auditLogging: true,
    passwordPolicy: true,
    accountLockout: true,
    secureHeaders: true,
    dataEncryption: true,
    backupEncryption: true,
    accessControl: true,
    apiSecurity: true,
    firewallProtection: true
  });

  const [backupSettings, setBackupSettings] = useState({
    automaticBackup: true,
    backupFrequency: 'Daily',
    backupTime: '02:00 AM',
    retentionPeriod: '30 days',
    cloudBackup: true,
    localBackup: true,
    encryptBackups: true,
    compressBackups: true,
    userData: 145.8,
    systemData: 78.2,
    databaseData: 102.4,
    mediaData: 2.5
  });

  const [integrationSettings, setIntegrationSettings] = useState({
    emailService: true,
    smsService: true,
    paymentGateway: true,
    googleCalendar: false,
    zoomMeeting: true,
    whatsappService: false,
    googleAnalytics: true,
    webhooks: false,
    apiAccess: true,
    thirdPartyIntegrations: true,
    socialMediaLogin: false,
    calendarSync: true,
    notificationSync: true,
    dataSync: true
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const categories = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'system', label: 'System', icon: Monitor },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'backup', label: 'Backup', icon: HardDrive },
    { id: 'integrations', label: 'Integrations', icon: Puzzle }
  ];

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  const handleReset = () => {
  if (window.confirm('Are you sure you want to reset to default settings?')) {
    alert('Settings reset to default values!');
  }
};

  const handleExport = () => {
    alert('Settings exported successfully!');
  };

  const renderToggle = (checked, onChange, disabled = false) => (
    <div 
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
        disabled 
          ? 'bg-gray-300 cursor-not-allowed' 
          : checked 
            ? 'bg-blue-500' 
            : isDarkMode 
              ? 'bg-gray-600' 
              : 'bg-gray-300'
      }`}
      onClick={disabled ? undefined : onChange}
    >
      <div className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`} />
    </div>
  );

  const renderInput = (value, onChange, placeholder = '', type = 'text') => (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded-lg transition-colors ${
        isDarkMode 
          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
    />
  );

  const renderSelect = (value, onChange, options) => (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 border rounded-lg appearance-none transition-colors ${
          isDarkMode 
            ? 'bg-slate-700 border-slate-600 text-white' 
            : 'bg-white border-gray-300 text-gray-900'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Building className="w-5 h-5 text-blue-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Basic Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Tuition Center Name
            </label>
            {renderInput(
              generalSettings.centerName,
              (value) => setGeneralSettings({...generalSettings, centerName: value})
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Owner Name
            </label>
            {renderInput(
              generalSettings.ownerName,
              (value) => setGeneralSettings({...generalSettings, ownerName: value})
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Email Address
            </label>
            {renderInput(
              generalSettings.email,
              (value) => setGeneralSettings({...generalSettings, email: value}),
              'Enter email address',
              'email'
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Phone Number
            </label>
            {renderInput(
              generalSettings.phone,
              (value) => setGeneralSettings({...generalSettings, phone: value}),
              'Enter phone number',
              'tel'
            )}
          </div>
          <div className="md:col-span-2">
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Address
            </label>
            {renderInput(
              generalSettings.address,
              (value) => setGeneralSettings({...generalSettings, address: value}),
              'Enter complete address'
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-green-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Regional Settings
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Timezone
            </label>
            {renderSelect(
              generalSettings.timezone,
              (value) => setGeneralSettings({...generalSettings, timezone: value}),
              [
                { value: 'Asia/Kolkata (IST)', label: 'Asia/Kolkata (IST)' },
                { value: 'UTC', label: 'UTC' },
                { value: 'America/New_York', label: 'America/New_York' }
              ]
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Date Format
            </label>
            {renderSelect(
              generalSettings.dateFormat,
              (value) => setGeneralSettings({...generalSettings, dateFormat: value}),
              [
                { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
                { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
                { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' }
              ]
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Time Format
            </label>
            {renderSelect(
              generalSettings.timeFormat,
              (value) => setGeneralSettings({...generalSettings, timeFormat: value}),
              [
                { value: '12-hour (AM/PM)', label: '12-hour (AM/PM)' },
                { value: '24-hour', label: '24-hour' }
              ]
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Currency
            </label>
            {renderSelect(
              generalSettings.currency,
              (value) => setGeneralSettings({...generalSettings, currency: value}),
              [
                { value: 'INR (₹)', label: 'INR (₹)' },
                { value: 'USD ($)', label: 'USD ($)' },
                { value: 'EUR (€)', label: 'EUR (€)' }
              ]
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-purple-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Academic Settings
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Academic Year
            </label>
            {renderInput(
              generalSettings.academicYear,
              (value) => setGeneralSettings({...generalSettings, academicYear: value})
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Session Duration(minutes)
            </label>
            {renderInput(
              generalSettings.sessionDuration,
              (value) => setGeneralSettings({...generalSettings, sessionDuration: value}),
              '60',
              'number'
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Max Student Per Batch
            </label>
            {renderInput(
              generalSettings.maxStudentPerBatch,
              (value) => setGeneralSettings({...generalSettings, maxStudentPerBatch: value}),
              '25',
              'number'
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-yellow-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Feature Settings
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Online Payments
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Allow students to pay fees online
              </p>
            </div>
            {renderToggle(
              generalSettings.onlinePayments,
              () => setGeneralSettings({...generalSettings, onlinePayments: !generalSettings.onlinePayments})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                SMS Notifications
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Send SMS notifications to students and parents
              </p>
            </div>
            {renderToggle(
              generalSettings.smsNotifications,
              () => setGeneralSettings({...generalSettings, smsNotifications: !generalSettings.smsNotifications})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Auto Backup
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Automatically backup data daily
              </p>
            </div>
            {renderToggle(
              generalSettings.autoBackup,
              () => setGeneralSettings({...generalSettings, autoBackup: !generalSettings.autoBackup})
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Monitor className="w-5 h-5 text-blue-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            System Information
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                {systemSettings.version}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Version
              </div>
            </div>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {systemSettings.totalUsers}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Users
              </div>
            </div>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                {systemSettings.databaseSize}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Database Size
              </div>
            </div>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                {systemSettings.uptime}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-green-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Performance Settings
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Max File Size (MB)
            </label>
            {renderInput(
              systemSettings.maxFileSize,
              (value) => setSystemSettings({...systemSettings, maxFileSize: value}),
              '15',
              'number'
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Session Timeout(minutes)
            </label>
            {renderInput(
              systemSettings.sessionTimeout,
              (value) => setSystemSettings({...systemSettings, sessionTimeout: value}),
              '30',
              'number'
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Cache Timeout (minutes)
            </label>
            {renderInput(
              systemSettings.cacheTimeout,
              (value) => setSystemSettings({...systemSettings, cacheTimeout: value}),
              '60',
              'number'
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Max Concurrent Users
            </label>
            {renderInput(
              systemSettings.maxConcurrentUsers,
              (value) => setSystemSettings({...systemSettings, maxConcurrentUsers: value}),
              '500',
              'number'
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              System Theme
            </label>
            {renderSelect(
              systemSettings.systemTheme,
              (value) => setSystemSettings({...systemSettings, systemTheme: value}),
              [
                { value: 'Light Theme', label: 'Light Theme' },
                { value: 'Dark Theme', label: 'Dark Theme' },
                { value: 'Auto', label: 'Auto' }
              ]
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-red-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Security Settings
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Max Login Attempts
            </label>
            {renderInput(
              systemSettings.maxLoginAttempts,
              (value) => setSystemSettings({...systemSettings, maxLoginAttempts: value}),
              '5',
              'number'
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Password Expiry (days)
            </label>
            {renderInput(
              systemSettings.passwordExpiry,
              (value) => setSystemSettings({...systemSettings, passwordExpiry: value}),
              '90',
              'number'
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-cyan-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            System Status
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Server Load
              </span>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {systemSettings.serverLoad}%
              </span>
            </div>
            <div className={`w-full bg-gray-200 rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${systemSettings.serverLoad}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Memory Usage
              </span>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {systemSettings.memoryUsage}%
              </span>
            </div>
            <div className={`w-full bg-gray-200 rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${systemSettings.memoryUsage}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Disk Space
              </span>
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {systemSettings.diskSpace}%
              </span>
            </div>
            <div className={`w-full bg-gray-200 rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${systemSettings.diskSpace}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Sliders className="w-5 h-5 text-indigo-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            System Controls
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Debug Mode
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Enable detailed error logging and debugging
              </p>
            </div>
            {renderToggle(
              systemSettings.debugMode,
              () => setSystemSettings({...systemSettings, debugMode: !systemSettings.debugMode})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                System Logging
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Log system activities and user actions
              </p>
            </div>
            {renderToggle(
              systemSettings.systemLogging,
              () => setSystemSettings({...systemSettings, systemLogging: !systemSettings.systemLogging})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Data Compression
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Compress data to save storage space
              </p>
            </div>
            {renderToggle(
              systemSettings.dataCompression,
              () => setSystemSettings({...systemSettings, dataCompression: !systemSettings.dataCompression})
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsSettings = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-blue-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Email Notifications
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Email Notifications
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Receive notifications via email
              </p>
            </div>
            {renderToggle(
              notificationSettings.emailNotifications,
              () => setNotificationSettings({...notificationSettings, emailNotifications: !notificationSettings.emailNotifications})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Push Notifications
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Receive browser push notifications
              </p>
            </div>
            {renderToggle(
              notificationSettings.pushNotifications,
              () => setNotificationSettings({...notificationSettings, pushNotifications: !notificationSettings.pushNotifications})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                SMS Alerts
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Receive important alerts via SMS
              </p>
            </div>
            {renderToggle(
              notificationSettings.smsAlerts,
              () => setNotificationSettings({...notificationSettings, smsAlerts: !notificationSettings.smsAlerts})
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-green-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Academic Notifications
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Attendance Reminders
              </h4>
            </div>
            {renderToggle(
              notificationSettings.attendanceReminders,
              () => setNotificationSettings({...notificationSettings, attendanceReminders: !notificationSettings.attendanceReminders})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Fee Reminders
              </h4>
            </div>
            {renderToggle(
              notificationSettings.feeReminders,
              () => setNotificationSettings({...notificationSettings, feeReminders: !notificationSettings.feeReminders})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Exam Notifications
              </h4>
            </div>
            {renderToggle(
              notificationSettings.examNotifications,
              () => setNotificationSettings({...notificationSettings, examNotifications: !notificationSettings.examNotifications})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Assignment Deadlines
              </h4>
            </div>
            {renderToggle(
              notificationSettings.assignmentDeadlines,
              () => setNotificationSettings({...notificationSettings, assignmentDeadlines: !notificationSettings.assignmentDeadlines})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Parent Updates
              </h4>
            </div>
            {renderToggle(
              notificationSettings.parentUpdates,
              () => setNotificationSettings({...notificationSettings, parentUpdates: !notificationSettings.parentUpdates})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Teacher Announcements
              </h4>
            </div>
            {renderToggle(
              notificationSettings.teacherAnnouncements,
              () => setNotificationSettings({...notificationSettings, teacherAnnouncements: !notificationSettings.teacherAnnouncements})
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-purple-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            System Notifications
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                System Alerts
              </h4>
            </div>
            {renderToggle(
              notificationSettings.systemAlerts,
              () => setNotificationSettings({...notificationSettings, systemAlerts: !notificationSettings.systemAlerts})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Marketing Emails
              </h4>
            </div>
            {renderToggle(
              notificationSettings.marketingEmails,
              () => setNotificationSettings({...notificationSettings, marketingEmails: !notificationSettings.marketingEmails})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Weekly Reports
              </h4>
            </div>
            {renderToggle(
              notificationSettings.weeklyReports,
              () => setNotificationSettings({...notificationSettings, weeklyReports: !notificationSettings.weeklyReports})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Monthly Reports
              </h4>
            </div>
            {renderToggle(
              notificationSettings.monthlyReports,
              () => setNotificationSettings({...notificationSettings, monthlyReports: !notificationSettings.monthlyReports})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Performance Reports
              </h4>
            </div>
            {renderToggle(
              notificationSettings.performanceReports,
              () => setNotificationSettings({...notificationSettings, performanceReports: !notificationSettings.performanceReports})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Backup Notifications
              </h4>
            </div>
            {renderToggle(
              notificationSettings.backupNotifications,
              () => setNotificationSettings({...notificationSettings, backupNotifications: !notificationSettings.backupNotifications})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Security Alerts
              </h4>
            </div>
            {renderToggle(
              notificationSettings.securityAlerts,
              () => setNotificationSettings({...notificationSettings, securityAlerts: !notificationSettings.securityAlerts})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Maintenance Alerts
              </h4>
            </div>
            {renderToggle(
              notificationSettings.maintenanceAlerts,
              () => setNotificationSettings({...notificationSettings, maintenanceAlerts: !notificationSettings.maintenanceAlerts})
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-orange-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Notification Timing
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Reminder Frequency
            </label>
            {renderSelect(
              notificationSettings.reminderFrequency,
              (value) => setNotificationSettings({...notificationSettings, reminderFrequency: value}),
              [
                { value: 'Daily', label: 'Daily' },
                { value: 'Weekly', label: 'Weekly' },
                { value: 'Monthly', label: 'Monthly' }
              ]
            )}
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Notification Time
            </label>
            {renderInput(
              notificationSettings.notificationTime,
              (value) => setNotificationSettings({...notificationSettings, notificationTime: value}),
              '09:00 AM'
            )}
          </div>
          <div className="flex items-center justify-between mt-8">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Silent Hours
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No notifications during sleep hours
              </p>
            </div>
            {renderToggle(
              notificationSettings.silentHours,
              () => setNotificationSettings({...notificationSettings, silentHours: !notificationSettings.silentHours})
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Lock className="w-5 h-5 text-red-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Access Control
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Two-Factor Authentication
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Secure login with 2FA
              </p>
            </div>
            {renderToggle(
              securitySettings.twoFactorAuth,
              () => setSecuritySettings({...securitySettings, twoFactorAuth: !securitySettings.twoFactorAuth})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Session Timeout
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Auto logout inactive users
              </p>
            </div>
            {renderToggle(
              securitySettings.sessionTimeout,
              () => setSecuritySettings({...securitySettings, sessionTimeout: !securitySettings.sessionTimeout})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                IP Whitelist
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Restrict access by IP address
              </p>
            </div>
            {renderToggle(
              securitySettings.ipWhitelist,
              () => setSecuritySettings({...securitySettings, ipWhitelist: !securitySettings.ipWhitelist})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Audit Logging
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Log all user activities
              </p>
            </div>
            {renderToggle(
              securitySettings.auditLogging,
              () => setSecuritySettings({...securitySettings, auditLogging: !securitySettings.auditLogging})
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Key className="w-5 h-5 text-yellow-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Password Policy
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Password Policy
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Enforce strong password rules
              </p>
            </div>
            {renderToggle(
              securitySettings.passwordPolicy,
              () => setSecuritySettings({...securitySettings, passwordPolicy: !securitySettings.passwordPolicy})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Account Lockout
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Lock accounts after failed attempts
              </p>
            </div>
            {renderToggle(
              securitySettings.accountLockout,
              () => setSecuritySettings({...securitySettings, accountLockout: !securitySettings.accountLockout})
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-green-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Data Protection
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Secure Headers
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Add security headers to responses
              </p>
            </div>
            {renderToggle(
              securitySettings.secureHeaders,
              () => setSecuritySettings({...securitySettings, secureHeaders: !securitySettings.secureHeaders})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Data Encryption
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Encrypt sensitive data
              </p>
            </div>
            {renderToggle(
              securitySettings.dataEncryption,
              () => setSecuritySettings({...securitySettings, dataEncryption: !securitySettings.dataEncryption})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Backup Encryption
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Encrypt backup files
              </p>
            </div>
            {renderToggle(
              securitySettings.backupEncryption,
              () => setSecuritySettings({...securitySettings, backupEncryption: !securitySettings.backupEncryption})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Access Control
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Role-based access control
              </p>
            </div>
            {renderToggle(
              securitySettings.accessControl,
              () => setSecuritySettings({...securitySettings, accessControl: !securitySettings.accessControl})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                API Security
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Secure API endpoints
              </p>
            </div>
            {renderToggle(
              securitySettings.apiSecurity,
              () => setSecuritySettings({...securitySettings, apiSecurity: !securitySettings.apiSecurity})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Firewall Protection
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Enable firewall protection
              </p>
            </div>
            {renderToggle(
              securitySettings.firewallProtection,
              () => setSecuritySettings({...securitySettings, firewallProtection: !securitySettings.firewallProtection})
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBackupSettings = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-5 h-5 text-blue-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Storage Overview
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              {backupSettings.userData} GB
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              User Data
            </div>
          </div>
          <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {backupSettings.systemData} GB
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              System Data
            </div>
          </div>
          <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
              {backupSettings.databaseData} GB
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Database
            </div>
          </div>
          <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              {backupSettings.mediaData} GB
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Media Files
            </div>
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <SettingsIcon className="w-5 h-5 text-green-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Backup Configuration
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Automatic Backups
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Automatically backup data at scheduled intervals
              </p>
            </div>
            {renderToggle(
              backupSettings.automaticBackup,
              () => setBackupSettings({...backupSettings, automaticBackup: !backupSettings.automaticBackup})
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Backup Frequency
              </label>
              {renderSelect(
                backupSettings.backupFrequency,
                (value) => setBackupSettings({...backupSettings, backupFrequency: value}),
                [
                  { value: 'Daily', label: 'Daily' },
                  { value: 'Weekly', label: 'Weekly' },
                  { value: 'Monthly', label: 'Monthly' }
                ]
              )}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Backup Time
              </label>
              {renderInput(
                backupSettings.backupTime,
                (value) => setBackupSettings({...backupSettings, backupTime: value}),
                '02:00 AM'
              )}
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Retention Period
              </label>
              {renderSelect(
                backupSettings.retentionPeriod,
                (value) => setBackupSettings({...backupSettings, retentionPeriod: value}),
                [
                  { value: '7 days', label: '7 days' },
                  { value: '30 days', label: '30 days' },
                  { value: '90 days', label: '90 days' }
                ]
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <CloudDownload className="w-5 h-5 text-purple-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Backup Options
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Cloud Backup
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Store backups in cloud storage
              </p>
            </div>
            {renderToggle(
              backupSettings.cloudBackup,
              () => setBackupSettings({...backupSettings, cloudBackup: !backupSettings.cloudBackup})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Local Backup
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Store backups on local server
              </p>
            </div>
            {renderToggle(
              backupSettings.localBackup,
              () => setBackupSettings({...backupSettings, localBackup: !backupSettings.localBackup})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Encrypt Backups
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Encrypt backup files for security
              </p>
            </div>
            {renderToggle(
              backupSettings.encryptBackups,
              () => setBackupSettings({...backupSettings, encryptBackups: !backupSettings.encryptBackups})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Compress Backups
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Compress backup files to save space
              </p>
            </div>
            {renderToggle(
              backupSettings.compressBackups,
              () => setBackupSettings({...backupSettings, compressBackups: !backupSettings.compressBackups})
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Download className="w-5 h-5 text-orange-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Manual Backup Options
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors">
            <CloudDownload size={24} className="mb-2" />
            <span className="font-medium text-sm">Full Backup</span>
            <span className="text-xs opacity-90">Complete system backup</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
            <Database size={24} className="mb-2" />
            <span className="font-medium text-sm">Data Only</span>
            <span className="text-xs opacity-90">Backup only data files</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors">
            <FileText size={24} className="mb-2" />
            <span className="font-medium text-sm">Settings Only</span>
            <span className="text-xs opacity-90">Backup configuration only</span>
          </button>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-500" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Backup History
            </h3>
          </div>
          <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
            View All
          </button>
        </div>
        <div className="space-y-3">
          {[
            { date: '2024-01-15', time: '02:00', type: 'Automatic', size: '145.8 MB', status: 'Success' },
            { date: '2024-01-14', time: '02:00', type: 'Automatic', size: '143.2 MB', status: 'Success' },
            { date: '2024-01-13', time: '02:00', type: 'Manual', size: '147.6 MB', status: 'Success' },
            { date: '2024-01-12', time: '02:00', type: 'Automatic', size: '142.1 MB', status: 'Failed' },
            { date: '2024-01-11', time: '02:00', type: 'Automatic', size: '144.9 MB', status: 'Success' }
          ].map((backup, index) => (
            <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
              isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  backup.status === 'Success' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <div>
                  <div className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {backup.date}
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {backup.time} • {backup.type}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {backup.size}
                </div>
                <div className={`text-xs ${
                  backup.status === 'Success' 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {backup.status}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-slate-600">
                  <Download size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                </button>
                <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-slate-600">
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIntegrationsSettings = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Puzzle className="w-5 h-5 text-blue-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Third-party Integrations
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Email Service
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Send automated emails
                  </p>
                </div>
              </div>
              {renderToggle(
                integrationSettings.emailService,
                () => setIntegrationSettings({...integrationSettings, emailService: !integrationSettings.emailService})
              )}
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    SMS Service
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Send SMS notifications
                  </p>
                </div>
              </div>
              {renderToggle(
                integrationSettings.smsService,
                () => setIntegrationSettings({...integrationSettings, smsService: !integrationSettings.smsService})
              )}
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Payment Gateway
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Process online payments
                  </p>
                </div>
              </div>
              {renderToggle(
                integrationSettings.paymentGateway,
                () => setIntegrationSettings({...integrationSettings, paymentGateway: !integrationSettings.paymentGateway})
              )}
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Google Calendar
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Sync with Google Calendar
                  </p>
                </div>
              </div>
              {renderToggle(
                integrationSettings.googleCalendar,
                () => setIntegrationSettings({...integrationSettings, googleCalendar: !integrationSettings.googleCalendar})
              )}
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Zoom Meeting
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Schedule online classes
                  </p>
                </div>
              </div>
              {renderToggle(
                integrationSettings.zoomMeeting,
                () => setIntegrationSettings({...integrationSettings, zoomMeeting: !integrationSettings.zoomMeeting})
              )}
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    WhatsApp Service
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Send WhatsApp messages
                  </p>
                </div>
              </div>
              {renderToggle(
                integrationSettings.whatsappService,
                () => setIntegrationSettings({...integrationSettings, whatsappService: !integrationSettings.whatsappService})
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Webhook className="w-5 h-5 text-orange-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Webhooks
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Configure Webhooks
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Send real-time data to external services
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
              Add Webhook
            </button>
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-5 h-5 text-cyan-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            API Settings
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Enable API Access
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Allow external applications to access data
              </p>
            </div>
            {renderToggle(
              integrationSettings.apiAccess,
              () => setIntegrationSettings({...integrationSettings, apiAccess: !integrationSettings.apiAccess})
            )}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Third-party Integrations
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Allow integration with external services
              </p>
            </div>
            {renderToggle(
              integrationSettings.thirdPartyIntegrations,
              () => setIntegrationSettings({...integrationSettings, thirdPartyIntegrations: !integrationSettings.thirdPartyIntegrations})
            )}
          </div>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
      }`}>
        <div className="flex items-center gap-2 mb-4">
          <Upload className="w-5 h-5 text-indigo-500" />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Import/Export Data
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
            <Upload size={24} className="mb-2" />
            <span className="font-medium text-sm">Import Data</span>
            <span className="text-xs opacity-90">Import from CSV/Excel files</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors">
            <Download size={24} className="mb-2" />
            <span className="font-medium text-sm">Export Data</span>
            <span className="text-xs opacity-90">Export to CSV/Excel files</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentCategory = () => {
    switch(activeCategory) {
      case 'general':
        return renderGeneralSettings();
      case 'system':
        return renderSystemSettings();
      case 'notifications':
        return renderNotificationsSettings();
      case 'security':
        return renderSecuritySettings();
      case 'backup':
        return renderBackupSettings();
      case 'integrations':
        return renderIntegrationsSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="settings" />

      <main className={`transition-all duration-300 ${isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="text-left">
              <h1 className={`text-2xl sm:text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings
              </h1>
              <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage your tuition center and preferences
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={handleExport}
                className={`px-3 md:px-4 py-2 border rounded-lg flex items-center justify-center gap-2 transition-colors text-sm ${isDarkMode 
                    ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Download size={16} />
                <span className="hidden sm:inline">Export Settings</span>
                <span className="sm:hidden">Export</span>
              </button>
              <button
                onClick={handleReset}
                className={`px-3 md:px-4 py-2 border rounded-lg flex items-center justify-center gap-2 transition-colors text-sm ${isDarkMode 
                    ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <RotateCcw size={16} />
                <span className="hidden sm:inline">Reset to Default</span>
                <span className="sm:hidden">Reset</span>
              </button>
              <button
                onClick={handleSave}
                className="px-3 md:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Save size={16} />
                <span className="hidden sm:inline">Save All Changes</span>
                <span className="sm:hidden">Save</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className={`w-full lg:w-64 p-4 sm:p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
            }`}>
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Settings Categories
              </h2>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-500 text-white'
                          : isDarkMode
                            ? 'text-gray-300 hover:bg-slate-700'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium text-sm">{category.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="flex-1">
              {renderCurrentCategory()}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default SettingsManagement;