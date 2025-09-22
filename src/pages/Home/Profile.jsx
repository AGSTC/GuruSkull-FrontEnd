import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import profile from '../../assets/images/profile.png';
import { 
  User, 
  BookOpen, 
  Shield, 
  Bell,
  Camera,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users as UsersIcon,
  Clock,
  GraduationCap,
  Eye,
  EyeOff,
  Smartphone,
  Monitor,
  MoreHorizontal,
  QrCode,
  Settings as SettingsIcon,
  Star,
  Save,
  Edit
} from 'lucide-react';

const Profile = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Form states
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Rajesh Kumar',
    lastName: 'Sharma',
    email: 'rajesh@guruskull.com',
    phone: '+91 9876543210',
    dateOfBirth: '1985-04-15',
    gender: 'Male'
  });

  const [addressInfo, setAddressInfo] = useState({
    street: '123, Linking Road, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pinCode: '400050'
  });

  const [contactInfo, setContactInfo] = useState({
    alternatePhone: '+91 9876543211',
    emergencyContactName: 'Priya Sharma',
    emergencyContactPhone: '+91 9876543212'
  });

  const [professionalInfo, setProfessionalInfo] = useState({
    position: 'M.Sc Mathematics, B.Ed',
    experience: '15+ years in Education Sector',
    bio: 'Passionate educator with over 15 years of experience in mathematics and science education. Founded GuruSkull with a vision to provide quality education to students.'
  });

  const [tuitionDetails, setTuitionDetails] = useState({
    instituteName: 'GuruSkull Learning Center',
    establishedYear: '2010',
    registrationNumber: 'TUT/WB/2022/1345',
    phoneNumber: '+91 9876543210',
    email: 'info@guruskull.com',
    website: 'www.guruskull.com',
    address: '123, Linking Road, Bandra West',
    description: 'Passionate educator with over 15 years of experience in mathematics and science education. Founded GuruSkull with a vision to provide quality education to students.',
    specializations: 'Mathematics, Physics, Chemistry, Biology, English',
    facilitiesAvailable: 'Air-conditioned classrooms, Library, Computer Lab, Physics Lab, Chemistry Lab',
    workingHours: '6:00 AM - 10:00 PM',
    workingDays: 'Monday to Saturday',
    maximumCapacity: '200',
    currentStudents: '156',
    totalTeachers: '18',
    totalStaff: '4'
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: true,
    twoFactorAuth: true,
    sessionTimeout: '30 minutes'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    // Email Notifications
    newAnnouncement: true,
    attendanceReports: true,
    feeMessages: false,
    feeCollection: true,
    systemUpdates: false,
    
    // SMS Notifications  
    emergencyAlerts: true,
    attendanceAlerts: true,
    feeReminders: false,
    examResults: true,
    
    // Push Notifications
    newMessages: true,
    newAnnouncement_push: true,
    attendanceUpdates: false,
    systemAlerts: true,
    
    // Notification Timing
    quietHours: true,
    quietStart: '10:00 PM',
    quietEnd: '7:00 AM',
    weekendNotifications: false
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleAddressInfoChange = (field, value) => {
    setAddressInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleContactInfoChange = (field, value) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleProfessionalInfoChange = (field, value) => {
    setProfessionalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleTuitionDetailsChange = (field, value) => {
    setTuitionDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
  };

  const handleSavePersonalInfo = (e) => {
    e.preventDefault();
    console.log('Saving personal info:', personalInfo);
    setIsEditing(false);
  };

  const handleSaveTuitionDetails = (e) => {
    e.preventDefault();
    console.log('Saving tuition details:', tuitionDetails);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    console.log('Updating password');
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'tuition', label: 'Tuition Details', icon: BookOpen },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={profile}
                alt="Profile"
                className="w-28 h-28 rounded-full"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full">
                <Camera size={16} />
              </button>
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {personalInfo.firstName} {personalInfo.lastName}
              </h2>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Tuition Owner</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>4.8 (124 reviews)</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'
            }`}
          >
            {isEditing ? <Save size={18} /> : <Edit size={18} />}
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {/* Basic Information */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <User className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Basic Information
          </h3>
        </div>
        
        <form onSubmit={handleSavePersonalInfo}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                First Name
              </label>
              <input
                type="text"
                value={personalInfo.firstName}
                onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                } ${!isEditing ? 'opacity-70' : ''}`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Last Name
              </label>
              <input
                type="text"
                value={personalInfo.lastName}
                onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                } ${!isEditing ? 'opacity-70' : ''}`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              <input
                type="email"
                value={personalInfo.email}
                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                } ${!isEditing ? 'opacity-70' : ''}`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Phone Number
              </label>
              <input
                type="tel"
                value={personalInfo.phone}
                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                } ${!isEditing ? 'opacity-70' : ''}`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Date of Birth
              </label>
              <input
                type="date"
                value={personalInfo.dateOfBirth}
                onChange={(e) => handlePersonalInfoChange('dateOfBirth', e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                } ${!isEditing ? 'opacity-70' : ''}`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Gender
              </label>
              <select
                value={personalInfo.gender}
                onChange={(e) => handlePersonalInfoChange('gender', e.target.value)}
                disabled={!isEditing}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                } ${!isEditing ? 'opacity-70' : ''}`}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          {isEditing && (
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className={`px-4 py-2 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-700'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Address Information */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Address Information
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Street Address
            </label>
            <input
              type="text"
              value={addressInfo.street}
              onChange={(e) => handleAddressInfoChange('street', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              City
            </label>
            <input
              type="text"
              value={addressInfo.city}
              onChange={(e) => handleAddressInfoChange('city', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              State
            </label>
            <input
              type="text"
              value={addressInfo.state}
              onChange={(e) => handleAddressInfoChange('state', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              PIN Code
            </label>
            <input
              type="text"
              value={addressInfo.pinCode}
              onChange={(e) => handleAddressInfoChange('pinCode', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <Phone className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact Information
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Alternate Phone
            </label>
            <input
              type="tel"
              value={contactInfo.alternatePhone}
              onChange={(e) => handleContactInfoChange('alternatePhone', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Emergency Contact Name
            </label>
            <input
              type="text"
              value={contactInfo.emergencyContactName}
              onChange={(e) => handleContactInfoChange('emergencyContactName', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Emergency Contact Phone
            </label>
            <input
              type="tel"
              value={contactInfo.emergencyContactPhone}
              onChange={(e) => handleContactInfoChange('emergencyContactPhone', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Information
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Position/Qualifications
            </label>
            <input
              type="text"
              value={professionalInfo.position}
              onChange={(e) => handleProfessionalInfoChange('position', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Experience
            </label>
            <input
              type="text"
              value={professionalInfo.experience}
              onChange={(e) => handleProfessionalInfoChange('experience', e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Bio
            </label>
            <textarea
              value={professionalInfo.bio}
              onChange={(e) => handleProfessionalInfoChange('bio', e.target.value)}
              disabled={!isEditing}
              rows={4}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-gray-100 border-gray-300 text-gray-900'
              } ${!isEditing ? 'opacity-70' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderTuitionDetails = () => (
    <div className="space-y-6">
      {/* Tuition Information */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Tuition Information
          </h3>
        </div>
        
        <form onSubmit={handleSaveTuitionDetails}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Institute Name
              </label>
              <input
                type="text"
                value={tuitionDetails.instituteName}
                onChange={(e) => handleTuitionDetailsChange('instituteName', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Established Year
              </label>
              <input
                type="text"
                value={tuitionDetails.establishedYear}
                onChange={(e) => handleTuitionDetailsChange('establishedYear', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Registration Number
              </label>
              <input
                type="text"
                value={tuitionDetails.registrationNumber}
                onChange={(e) => handleTuitionDetailsChange('registrationNumber', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Phone Number
              </label>
              <input
                type="tel"
                value={tuitionDetails.phoneNumber}
                onChange={(e) => handleTuitionDetailsChange('phoneNumber', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                value={tuitionDetails.email}
                onChange={(e) => handleTuitionDetailsChange('email', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Website
              </label>
              <input
                type="url"
                value={tuitionDetails.website}
                onChange={(e) => handleTuitionDetailsChange('website', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Address
              </label>
              <input
                type="text"
                value={tuitionDetails.address}
                onChange={(e) => handleTuitionDetailsChange('address', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Description
              </label>
              <textarea
                value={tuitionDetails.description}
                onChange={(e) => handleTuitionDetailsChange('description', e.target.value)}
                rows={3}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Specializations
              </label>
              <input
                type="text"
                value={tuitionDetails.specializations}
                onChange={(e) => handleTuitionDetailsChange('specializations', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Facilities Available
              </label>
              <textarea
                value={tuitionDetails.facilitiesAvailable}
                onChange={(e) => handleTuitionDetailsChange('facilitiesAvailable', e.target.value)}
                rows={3}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Working Hours
              </label>
              <input
                type="text"
                value={tuitionDetails.workingHours}
                onChange={(e) => handleTuitionDetailsChange('workingHours', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Working Days
              </label>
              <input
                type="text"
                value={tuitionDetails.workingDays}
                onChange={(e) => handleTuitionDetailsChange('workingDays', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Maximum Capacity
              </label>
              <input
                type="number"
                value={tuitionDetails.maximumCapacity}
                onChange={(e) => handleTuitionDetailsChange('maximumCapacity', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Current Students
              </label>
              <input
                type="number"
                value={tuitionDetails.currentStudents}
                onChange={(e) => handleTuitionDetailsChange('currentStudents', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Total Teachers
              </label>
              <input
                type="number"
                value={tuitionDetails.totalTeachers}
                onChange={(e) => handleTuitionDetailsChange('totalTeachers', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Total Staff
              </label>
              <input
                type="number"
                value={tuitionDetails.totalStaff}
                onChange={(e) => handleTuitionDetailsChange('totalStaff', e.target.value)}
                className={`w-full p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-gray-100 border-gray-300 text-gray-900'
                }`}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              className={`px-4 py-2 rounded-lg border ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-700'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      {/* Change Password */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <Shield className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Change Password
          </h3>
        </div>
        
        <form onSubmit={handleUpdatePassword}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwords.current}
                  onChange={(e) => handlePasswordChange('current', e.target.value)}
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={passwords.new}
                  onChange={(e) => handlePasswordChange('new', e.target.value)}
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwords.confirm}
                  onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Security Settings */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <SettingsIcon className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Security Settings
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Two-Factor Authentication
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Add an extra layer of security to your account
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={securitySettings.twoFactorAuth}
                onChange={() => setSecuritySettings(prev => ({
                  ...prev,
                  twoFactorAuth: !prev.twoFactorAuth
                }))}
                className="sr-only peer" 
              />
              <div className={`w-11 h-6 rounded-full peer ${
                isDarkMode 
                  ? 'bg-gray-700 peer-checked:bg-blue-600' 
                  : 'bg-gray-300 peer-checked:bg-blue-600'
              } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Session Timeout
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Automatically log out after 30 minutes of inactivity
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={securitySettings.sessionTimeout === '30 minutes'}
                onChange={() => setSecuritySettings(prev => ({
                  ...prev,
                  sessionTimeout: prev.sessionTimeout === '30 minutes' ? 'Never' : '30 minutes'
                }))}
                className="sr-only peer" 
              />
              <div className={`w-11 h-6 rounded-full peer ${
                isDarkMode 
                  ? 'bg-gray-700 peer-checked:bg-blue-600' 
                  : 'bg-gray-300 peer-checked:bg-blue-600'
              } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>
        </div>
      </div>

      {/* Active Sessions */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <Monitor className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Active Sessions
          </h3>
        </div>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Monitor className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="flex-1">
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  MacBook Pro
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Safari • Mumbai, India - 192.168.1.100
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Current Session
                </p>
              </div>
              <button className={`p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'
              }`}>
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Smartphone className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="flex-1">
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  iPhone 14
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Safari Mobile • Mumbai, India - 192.168.1.101
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Last Active 5 minutes ago
                </p>
              </div>
              <button className={`p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'
              }`}>
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Monitor className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="flex-1">
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Chrome Browser
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Chrome • Mumbai, India - 192.168.1.102
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Last Active 2 hours ago
                </p>
              </div>
              <button className={`p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'
              }`}>
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <button className={`w-full mt-4 py-2 text-center rounded-lg border ${
          isDarkMode 
            ? 'border-slate-600 text-white hover:bg-slate-700' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
        }`}>
          View All Sessions
        </button>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      {/* Email Notifications */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <Mail className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Email Notifications
          </h3>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 'newAnnouncement', label: 'New announcements', description: 'Get notified about new announcements' },
            { id: 'attendanceReports', label: 'Attendance reports', description: 'Receive daily attendance reports' },
            { id: 'feeMessages', label: 'Fee messages', description: 'Get notifications about fee messages' },
            { id: 'feeCollection', label: 'Fee collection', description: 'Receive notifications when fees are collected' },
            { id: 'systemUpdates', label: 'System updates', description: 'Get notified about system updates and maintenance' }
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.label}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={notificationSettings[item.id]}
                  onChange={() => handleNotificationToggle(item.id)}
                  className="sr-only peer" 
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  isDarkMode 
                    ? 'bg-gray-700 peer-checked:bg-blue-600' 
                    : 'bg-gray-300 peer-checked:bg-blue-600'
                } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* SMS Notifications */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <Smartphone className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            SMS Notifications
          </h3>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 'emergencyAlerts', label: 'Emergency alerts', description: 'Receive emergency alerts via SMS' },
            { id: 'attendanceAlerts', label: 'Attendance alerts', description: 'Get SMS alerts for attendance' },
            { id: 'feeReminders', label: 'Fee reminders', description: 'Receive fee reminders via SMS' },
            { id: 'examResults', label: 'Exam results', description: 'Get exam results via SMS' }
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.label}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={notificationSettings[item.id]}
                  onChange={() => handleNotificationToggle(item.id)}
                  className="sr-only peer" 
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  isDarkMode 
                    ? 'bg-gray-700 peer-checked:bg-blue-600' 
                    : 'bg-gray-300 peer-checked:bg-blue-600'
                } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Push Notifications */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <Bell className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Push Notifications
          </h3>
        </div>
        
        <div className="space-y-4">
          {[
            { id: 'newMessages', label: 'New messages', description: 'Get push notifications for new messages' },
            { id: 'newAnnouncement_push', label: 'New announcements', description: 'Receive push notifications for announcements' },
            { id: 'attendanceUpdates', label: 'Attendance updates', description: 'Get push notifications for attendance updates' },
            { id: 'systemAlerts', label: 'System alerts', description: 'Receive system alerts via push notifications' }
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.label}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={notificationSettings[item.id]}
                  onChange={() => handleNotificationToggle(item.id)}
                  className="sr-only peer" 
                />
                <div className={`w-11 h-6 rounded-full peer ${
                  isDarkMode 
                    ? 'bg-gray-700 peer-checked:bg-blue-600' 
                    : 'bg-gray-300 peer-checked:bg-blue-600'
                } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Preferences */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-2 mb-6">
          <Clock className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Notification Preferences
          </h3>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Quiet Hours
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Do not disturb during specified hours
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notificationSettings.quietHours}
                onChange={() => handleNotificationToggle('quietHours')}
                className="sr-only peer" 
              />
              <div className={`w-11 h-6 rounded-full peer ${
                isDarkMode 
                  ? 'bg-gray-700 peer-checked:bg-blue-600' 
                  : 'bg-gray-300 peer-checked:bg-blue-600'
              } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>
          
          {notificationSettings.quietHours && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Start Time
                </label>
                <input
                  type="time"
                  value={notificationSettings.quietStart}
                  onChange={(e) => setNotificationSettings(prev => ({
                    ...prev,
                    quietStart: e.target.value
                  }))}
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  End Time
                </label>
                <input
                  type="time"
                  value={notificationSettings.quietEnd}
                  onChange={(e) => setNotificationSettings(prev => ({
                    ...prev,
                    quietEnd: e.target.value
                  }))}
                  className={`w-full p-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-gray-100 border-gray-300 text-gray-900'
                  }`}
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Weekend Notifications
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Receive notifications on weekends
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notificationSettings.weekendNotifications}
                onChange={() => handleNotificationToggle('weekendNotifications')}
                className="sr-only peer" 
              />
              <div className={`w-11 h-6 rounded-full peer ${
                isDarkMode 
                  ? 'bg-gray-700 peer-checked:bg-blue-600' 
                  : 'bg-gray-300 peer-checked:bg-blue-600'
              } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="profile" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Profile Settings
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage your profile information and account settings
            </p>
          </div>

          {/* Tabs */}
          <div className={`mb-8 rounded-lg border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex flex-wrap border-b">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      isActive
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } ${isDarkMode && isActive ? '!text-blue-400' : ''} ${
                      isDarkMode && !isActive ? '!text-gray-400 hover:!text-gray-300' : ''
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'personal' && renderPersonalInfo()}
              {activeTab === 'tuition' && renderTuitionDetails()}
              {activeTab === 'security' && renderSecurity()}
              {activeTab === 'notifications' && renderNotifications()}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default Profile;