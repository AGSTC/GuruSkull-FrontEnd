import React, { useState, useRef, useEffect } from 'react';
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
  Edit,
  X,
  Upload,
  Trash2
} from 'lucide-react';

const Profile = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profilePhoto, setProfilePhoto] = useState(profile);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const fileInputRef = useRef(null);

  const [editStates, setEditStates] = useState({
    personal: false,
    address: false,
    contact: false,
    professional: false,
    tuition: false,
    security: false,
    notifications: false
  });

  const getStoredData = (key, defaultValue) => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      const profileData = JSON.parse(localStorage.getItem('userProfile') || '{}');
      return profileData[key] || userData[key] || defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  };

  const [personalInfo, setPersonalInfo] = useState({
    firstName: getStoredData('firstName', 'Rajesh Kumar'),
    lastName: getStoredData('lastName', 'Sharma'),
    email: getStoredData('email', 'rajesh@guruskull.com'),
    phone: getStoredData('phone', '+91 9876543210'),
    dateOfBirth: getStoredData('dateOfBirth', '1985-04-15'),
    gender: getStoredData('gender', 'Male')
  });

  const [addressInfo, setAddressInfo] = useState({
    street: getStoredData('street', '123, Linking Road, Bandra West'),
    city: getStoredData('city', 'Mumbai'),
    state: getStoredData('state', 'Maharashtra'),
    pinCode: getStoredData('pinCode', '400050')
  });

  const [contactInfo, setContactInfo] = useState({
    alternatePhone: getStoredData('alternatePhone', '+91 9876543211'),
    emergencyContactName: getStoredData('emergencyContactName', 'Priya Sharma'),
    emergencyContactPhone: getStoredData('emergencyContactPhone', '+91 9876543212')
  });

  const [professionalInfo, setProfessionalInfo] = useState({
    position: getStoredData('position', 'M.Sc Mathematics, B.Ed'),
    experience: getStoredData('experience', '15+ years in Education Sector'),
    bio: getStoredData('bio', 'Passionate educator with over 15 years of experience in mathematics and science education. Founded GuruSkull with a vision to provide quality education to students.')
  });

  const [tuitionDetails, setTuitionDetails] = useState({
    instituteName: getStoredData('instituteName', 'GuruSkull Learning Center'),
    establishedYear: getStoredData('establishedYear', '2010'),
    registrationNumber: getStoredData('registrationNumber', 'TUT/WB/2022/1345'),
    phoneNumber: getStoredData('phoneNumber', '+91 9876543210'),
    email: getStoredData('instituteEmail', 'info@guruskull.com'),
    website: getStoredData('website', 'www.guruskull.com'),
    address: getStoredData('instituteAddress', '123, Linking Road, Bandra West'),
    description: getStoredData('description', 'Passionate educator with over 15 years of experience in mathematics and science education. Founded GuruSkull with a vision to provide quality education to students.'),
    specializations: getStoredData('specializations', 'Mathematics, Physics, Chemistry, Biology, English'),
    facilitiesAvailable: getStoredData('facilitiesAvailable', 'Air-conditioned classrooms, Library, Computer Lab, Physics Lab, Chemistry Lab'),
    workingHours: getStoredData('workingHours', '6:00 AM - 10:00 PM'),
    workingDays: getStoredData('workingDays', 'Monday to Saturday'),
    maximumCapacity: getStoredData('maximumCapacity', '200'),
    currentStudents: getStoredData('currentStudents', '156'),
    totalTeachers: getStoredData('totalTeachers', '18'),
    totalStaff: getStoredData('totalStaff', '4')
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: getStoredData('currentPassword', true),
    twoFactorAuth: getStoredData('twoFactorAuth', true),
    sessionTimeout: getStoredData('sessionTimeout', '30 minutes')
  });

  const [notificationSettings, setNotificationSettings] = useState({
    newAnnouncement: getStoredData('newAnnouncement', true),
    attendanceReports: getStoredData('attendanceReports', true),
    feeMessages: getStoredData('feeMessages', false),
    feeCollection: getStoredData('feeCollection', true),
    systemUpdates: getStoredData('systemUpdates', false),
    emergencyAlerts: getStoredData('emergencyAlerts', true),
    attendanceAlerts: getStoredData('attendanceAlerts', true),
    feeReminders: getStoredData('feeReminders', false),
    examResults: getStoredData('examResults', true),
    newMessages: getStoredData('newMessages', true),
    newAnnouncement_push: getStoredData('newAnnouncement_push', true),
    attendanceUpdates: getStoredData('attendanceUpdates', false),
    systemAlerts: getStoredData('systemAlerts', true),
    quietHours: getStoredData('quietHours', true),
    quietStart: getStoredData('quietStart', '10:00 PM'),
    quietEnd: getStoredData('quietEnd', '7:00 AM'),
    weekendNotifications: getStoredData('weekendNotifications', false)
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  useEffect(() => {
    const loadProfileData = () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        const profileData = JSON.parse(localStorage.getItem('userProfile') || '{}');
        
        if (profileData.profilePhotoUrl) {
          setProfilePhoto(profileData.profilePhotoUrl);
        } else if (userData.profilePhotoUrl) {
          setProfilePhoto(userData.profilePhotoUrl);
        }
        
        setPersonalInfo(prev => ({
          ...prev,
          firstName: profileData.firstName || userData.firstName || prev.firstName,
          lastName: profileData.lastName || userData.lastName || prev.lastName,
          email: profileData.email || userData.email || prev.email,
          phone: profileData.phone || userData.phone || prev.phone,
          dateOfBirth: profileData.dateOfBirth || prev.dateOfBirth,
          gender: profileData.gender || prev.gender
        }));

        if (userData.name) {
          const nameParts = userData.name.split(' ');
          setPersonalInfo(prev => ({ 
            ...prev, 
            firstName: nameParts[0] || prev.firstName,
            lastName: nameParts.slice(1).join(' ') || prev.lastName
          }));
        }
      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    };

    loadProfileData();
  }, []);

  const saveProfileData = (data) => {
    try {
      const existingProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const updatedProfile = { ...existingProfile, ...data };
      localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUserData = { ...userData, ...data };
      localStorage.setItem('user', JSON.stringify(updatedUserData));
      
      return updatedProfile;
    } catch (error) {
      console.error('Error saving profile data:', error);
      return null;
    }
  };

  const updateUserDataEverywhere = (newData) => {
    const savedData = saveProfileData(newData);
    if (savedData) {
      window.dispatchEvent(new CustomEvent('userDataChanged', {
        detail: savedData
      }));
      
      window.dispatchEvent(new CustomEvent('profileDataChanged', {
        detail: savedData
      }));
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhotoUrl = e.target.result;
        setProfilePhoto(newPhotoUrl);
        updateProfilePhotoEverywhere(newPhotoUrl);
        setShowPhotoModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfilePhotoEverywhere = (photoUrl) => {
    const profileData = saveProfileData({ profilePhotoUrl: photoUrl });
    
    if (profileData) {
      window.dispatchEvent(new CustomEvent('profilePhotoChanged', {
        detail: { photoUrl }
      }));

      window.dispatchEvent(new CustomEvent('userDataChanged', {
        detail: profileData
      }));

      window.dispatchEvent(new CustomEvent('profileDataChanged', {
        detail: profileData
      }));
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(profile);
    updateProfilePhotoEverywhere(profile);
    setShowPhotoModal(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const toggleEditState = (section) => {
    setEditStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const saveSection = (section) => {
    let dataToSave = {};
    
    switch (section) {
      case 'personal':
        dataToSave = {
          firstName: personalInfo.firstName,
          lastName: personalInfo.lastName,
          name: `${personalInfo.firstName} ${personalInfo.lastName}`.trim(),
          email: personalInfo.email,
          phone: personalInfo.phone,
          dateOfBirth: personalInfo.dateOfBirth,
          gender: personalInfo.gender
        };
        break;
      case 'address':
        dataToSave = addressInfo;
        break;
      case 'contact':
        dataToSave = contactInfo;
        break;
      case 'professional':
        dataToSave = professionalInfo;
        break;
      case 'tuition':
        dataToSave = {
          instituteName: tuitionDetails.instituteName,
          establishedYear: tuitionDetails.establishedYear,
          registrationNumber: tuitionDetails.registrationNumber,
          phoneNumber: tuitionDetails.phoneNumber,
          instituteEmail: tuitionDetails.email,
          website: tuitionDetails.website,
          instituteAddress: tuitionDetails.address,
          description: tuitionDetails.description,
          specializations: tuitionDetails.specializations,
          facilitiesAvailable: tuitionDetails.facilitiesAvailable,
          workingHours: tuitionDetails.workingHours,
          workingDays: tuitionDetails.workingDays,
          maximumCapacity: tuitionDetails.maximumCapacity,
          currentStudents: tuitionDetails.currentStudents,
          totalTeachers: tuitionDetails.totalTeachers,
          totalStaff: tuitionDetails.totalStaff
        };
        break;
      case 'security':
        dataToSave = securitySettings;
        break;
      case 'notifications':
        dataToSave = notificationSettings;
        break;
      default:
        break;
    }
    
    if (Object.keys(dataToSave).length > 0) {
      updateUserDataEverywhere(dataToSave);
    }
    
    setEditStates(prev => ({
      ...prev,
      [section]: false
    }));
  };

  const cancelEdit = (section) => {
    const profileData = JSON.parse(localStorage.getItem('userProfile') || '{}');
    
    switch (section) {
      case 'personal':
        setPersonalInfo(prev => ({
          ...prev,
          firstName: profileData.firstName || prev.firstName,
          lastName: profileData.lastName || prev.lastName,
          email: profileData.email || prev.email,
          phone: profileData.phone || prev.phone,
          dateOfBirth: profileData.dateOfBirth || prev.dateOfBirth,
          gender: profileData.gender || prev.gender
        }));
        break;
      case 'address':
        setAddressInfo(prev => ({
          ...prev,
          street: profileData.street || prev.street,
          city: profileData.city || prev.city,
          state: profileData.state || prev.state,
          pinCode: profileData.pinCode || prev.pinCode
        }));
        break;
      case 'contact':
        setContactInfo(prev => ({
          ...prev,
          alternatePhone: profileData.alternatePhone || prev.alternatePhone,
          emergencyContactName: profileData.emergencyContactName || prev.emergencyContactName,
          emergencyContactPhone: profileData.emergencyContactPhone || prev.emergencyContactPhone
        }));
        break;
      case 'professional':
        setProfessionalInfo(prev => ({
          ...prev,
          position: profileData.position || prev.position,
          experience: profileData.experience || prev.experience,
          bio: profileData.bio || prev.bio
        }));
        break;
      case 'tuition':
        setTuitionDetails(prev => ({
          ...prev,
          instituteName: profileData.instituteName || prev.instituteName,
          establishedYear: profileData.establishedYear || prev.establishedYear,
          registrationNumber: profileData.registrationNumber || prev.registrationNumber,
          phoneNumber: profileData.phoneNumber || prev.phoneNumber,
          email: profileData.instituteEmail || prev.email,
          website: profileData.website || prev.website,
          address: profileData.instituteAddress || prev.address,
          description: profileData.description || prev.description,
          specializations: profileData.specializations || prev.specializations,
          facilitiesAvailable: profileData.facilitiesAvailable || prev.facilitiesAvailable,
          workingHours: profileData.workingHours || prev.workingHours,
          workingDays: profileData.workingDays || prev.workingDays,
          maximumCapacity: profileData.maximumCapacity || prev.maximumCapacity,
          currentStudents: profileData.currentStudents || prev.currentStudents,
          totalTeachers: profileData.totalTeachers || prev.totalTeachers,
          totalStaff: profileData.totalStaff || prev.totalStaff
        }));
        break;
      default:
        break;
    }
    
    setEditStates(prev => ({
      ...prev,
      [section]: false
    }));
  };

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
    saveSection('personal');
  };

  const handleSaveTuitionDetails = (e) => {
    e.preventDefault();
    saveSection('tuition');
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    saveSection('security');
  };

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'tuition', label: 'Tuition Details', icon: BookOpen },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const PhotoModal = () => (
    showPhotoModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`p-6 rounded-lg max-w-md w-full ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Change Profile Photo</h3>
            <button
              onClick={() => setShowPhotoModal(false)}
              className={`p-1 rounded ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
            >
              <X size={20} />
            </button>
          </div>

          <div className="text-center mb-6">
            <img
              src={profilePhoto}
              alt="Current profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={triggerFileInput}
              className="w-full flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              <Upload size={18} />
              Upload New Photo
            </button>

            <button
              onClick={handleRemovePhoto}
              className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg border text-sm ${isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-300 hover:bg-gray-50'}`}
            >
              <Trash2 size={18} />
              Remove Photo
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </div>
      </div>
    )
  );

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full"
              />
              <button
                onClick={() => setShowPhotoModal(true)}
                className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                <Camera size={16} />
              </button>
            </div>
            <div>
              <h2 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {personalInfo.firstName} {personalInfo.lastName}
              </h2>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tuition Owner</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>4.8 (124 reviews)</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => editStates.personal ? saveSection('personal') : toggleEditState('personal')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-base ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
          >
            {editStates.personal ? <Save size={18} /> : <Edit size={18} />}
            {editStates.personal ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <User className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Basic Information
            </h3>
          </div>
          <button
            onClick={() => editStates.personal ? saveSection('personal') : toggleEditState('personal')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.personal ? <Save size={14} /> : <Edit size={14} />}
            {editStates.personal ? 'Save' : 'Edit'}
          </button>
        </div>

        <form onSubmit={handleSavePersonalInfo}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                First Name
              </label>
              <input
                type="text"
                value={personalInfo.firstName}
                onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                disabled={!editStates.personal}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.personal ? 'opacity-70' : ''}`}
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
                disabled={!editStates.personal}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.personal ? 'opacity-70' : ''}`}
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
                disabled={!editStates.personal}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.personal ? 'opacity-70' : ''}`}
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
                disabled={!editStates.personal}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.personal ? 'opacity-70' : ''}`}
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
                disabled={!editStates.personal}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.personal ? 'opacity-70' : ''}`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Gender
              </label>
              <select
                value={personalInfo.gender}
                onChange={(e) => handlePersonalInfoChange('gender', e.target.value)}
                disabled={!editStates.personal}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.personal ? 'opacity-70' : ''}`}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {editStates.personal && (
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => cancelEdit('personal')}
                className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>

      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Address Information
            </h3>
          </div>
          <button
            onClick={() => editStates.address ? saveSection('address') : toggleEditState('address')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.address ? <Save size={14} /> : <Edit size={14} />}
            {editStates.address ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Street Address
            </label>
            <input
              type="text"
              value={addressInfo.street}
              onChange={(e) => handleAddressInfoChange('street', e.target.value)}
              disabled={!editStates.address}
              className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.address ? 'opacity-70' : ''}`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                City
              </label>
              <input
                type="text"
                value={addressInfo.city}
                onChange={(e) => handleAddressInfoChange('city', e.target.value)}
                disabled={!editStates.address}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.address ? 'opacity-70' : ''}`}
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
                disabled={!editStates.address}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.address ? 'opacity-70' : ''}`}
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
                disabled={!editStates.address}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.address ? 'opacity-70' : ''}`}
              />
            </div>
          </div>
        </div>

        {editStates.address && (
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              onClick={() => cancelEdit('address')}
              className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              Cancel
            </button>
            <button
              onClick={() => saveSection('address')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Phone className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
          </div>
          <button
            onClick={() => editStates.contact ? saveSection('contact') : toggleEditState('contact')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.contact ? <Save size={14} /> : <Edit size={14} />}
            {editStates.contact ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Alternate Phone
            </label>
            <input
              type="tel"
              value={contactInfo.alternatePhone}
              onChange={(e) => handleContactInfoChange('alternatePhone', e.target.value)}
              disabled={!editStates.contact}
              className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.contact ? 'opacity-70' : ''}`}
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
              disabled={!editStates.contact}
              className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.contact ? 'opacity-70' : ''}`}
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
              disabled={!editStates.contact}
              className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.contact ? 'opacity-70' : ''}`}
            />
          </div>
        </div>

        {editStates.contact && (
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              onClick={() => cancelEdit('contact')}
              className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              Cancel
            </button>
            <button
              onClick={() => saveSection('contact')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <GraduationCap className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Professional Information
            </h3>
          </div>
          <button
            onClick={() => editStates.professional ? saveSection('professional') : toggleEditState('professional')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.professional ? <Save size={14} /> : <Edit size={14} />}
            {editStates.professional ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Position/Qualifications
            </label>
            <input
              type="text"
              value={professionalInfo.position}
              onChange={(e) => handleProfessionalInfoChange('position', e.target.value)}
              disabled={!editStates.professional}
              className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.professional ? 'opacity-70' : ''}`}
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
              disabled={!editStates.professional}
              className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.professional ? 'opacity-70' : ''}`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Bio
            </label>
            <textarea
              value={professionalInfo.bio}
              onChange={(e) => handleProfessionalInfoChange('bio', e.target.value)}
              disabled={!editStates.professional}
              rows={4}
              className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.professional ? 'opacity-70' : ''}`}
            />
          </div>
        </div>

        {editStates.professional && (
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              onClick={() => cancelEdit('professional')}
              className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              Cancel
            </button>
            <button
              onClick={() => saveSection('professional')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderTuitionDetails = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Tuition Information
            </h3>
          </div>
          <button
            onClick={() => editStates.tuition ? saveSection('tuition') : toggleEditState('tuition')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.tuition ? <Save size={14} /> : <Edit size={14} />}
            {editStates.tuition ? 'Save' : 'Edit'}
          </button>
        </div>

        <form onSubmit={handleSaveTuitionDetails}>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Institute Name
              </label>
              <input
                type="text"
                value={tuitionDetails.instituteName}
                onChange={(e) => handleTuitionDetailsChange('instituteName', e.target.value)}
                disabled={!editStates.tuition}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Established Year
                </label>
                <input
                  type="text"
                  value={tuitionDetails.establishedYear}
                  onChange={(e) => handleTuitionDetailsChange('establishedYear', e.target.value)}
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Address
              </label>
              <input
                type="text"
                value={tuitionDetails.address}
                onChange={(e) => handleTuitionDetailsChange('address', e.target.value)}
                disabled={!editStates.tuition}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Description
              </label>
              <textarea
                value={tuitionDetails.description}
                onChange={(e) => handleTuitionDetailsChange('description', e.target.value)}
                disabled={!editStates.tuition}
                rows={3}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Specializations
              </label>
              <input
                type="text"
                value={tuitionDetails.specializations}
                onChange={(e) => handleTuitionDetailsChange('specializations', e.target.value)}
                disabled={!editStates.tuition}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Facilities Available
              </label>
              <textarea
                value={tuitionDetails.facilitiesAvailable}
                onChange={(e) => handleTuitionDetailsChange('facilitiesAvailable', e.target.value)}
                disabled={!editStates.tuition}
                rows={3}
                className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Working Hours
                </label>
                <input
                  type="text"
                  value={tuitionDetails.workingHours}
                  onChange={(e) => handleTuitionDetailsChange('workingHours', e.target.value)}
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
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
                  disabled={!editStates.tuition}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.tuition ? 'opacity-70' : ''}`}
                />
              </div>
            </div>
          </div>

          {editStates.tuition && (
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => cancelEdit('tuition')}
                className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Shield className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Change Password
            </h3>
          </div>
          <button
            onClick={() => editStates.security ? saveSection('security') : toggleEditState('security')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.security ? <Save size={14} /> : <Edit size={14} />}
            {editStates.security ? 'Save' : 'Edit'}
          </button>
        </div>

        <form onSubmit={handleUpdatePassword}>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwords.current}
                  onChange={(e) => handlePasswordChange('current', e.target.value)}
                  disabled={!editStates.security}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.security ? 'opacity-70' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  disabled={!editStates.security}
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
                  disabled={!editStates.security}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.security ? 'opacity-70' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  disabled={!editStates.security}
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
                  disabled={!editStates.security}
                  className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.security ? 'opacity-70' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={!editStates.security}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          {editStates.security && (
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => cancelEdit('security')}
                className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                Update Password
              </button>
            </div>
          )}
        </form>
      </div>

      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <SettingsIcon className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Security Settings
            </h3>
          </div>
          <button
            onClick={() => editStates.security ? saveSection('security') : toggleEditState('security')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.security ? <Save size={14} /> : <Edit size={14} />}
            {editStates.security ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Two-Factor Authentication
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                disabled={!editStates.security}
                className="sr-only peer"
              />
              <div className={`w-11 h-6 rounded-full peer ${isDarkMode ? 'bg-gray-700 peer-checked:bg-blue-600' : 'bg-gray-300 peer-checked:bg-blue-600'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Session Timeout
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                disabled={!editStates.security}
                className="sr-only peer"
              />
              <div className={`w-11 h-6 rounded-full peer ${isDarkMode ? 'bg-gray-700 peer-checked:bg-blue-600' : 'bg-gray-300 peer-checked:bg-blue-600'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
            </label>
          </div>
        </div>

        {editStates.security && (
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              onClick={() => cancelEdit('security')}
              className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              Cancel
            </button>
            <button
              onClick={() => saveSection('security')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center gap-2 mb-6">
          <Monitor className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Active Sessions
          </h3>
        </div>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
            <div className="flex items-center gap-3">
              <Monitor className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="flex-1">
                <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  MacBook Pro
                </h4>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Safari • Mumbai, India - 192.168.1.100
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Current Session
                </p>
              </div>
              <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'}`}>
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
            <div className="flex items-center gap-3">
              <Smartphone className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="flex-1">
                <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  iPhone 14
                </h4>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Safari Mobile • Mumbai, India - 192.168.1.101
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Last Active 5 minutes ago
                </p>
              </div>
              <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'}`}>
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
            <div className="flex items-center gap-3">
              <Monitor className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="flex-1">
                <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Chrome Browser
                </h4>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Chrome • Mumbai, India - 192.168.1.102
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Last Active 2 hours ago
                </p>
              </div>
              <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'}`}>
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className={`p-4 sm:p-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Bell className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Notification Settings
            </h3>
          </div>
          <button
            onClick={() => editStates.notifications ? saveSection('notifications') : toggleEditState('notifications')}
            className={`flex items-center gap-2 px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {editStates.notifications ? <Save size={14} /> : <Edit size={14} />}
            {editStates.notifications ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="mb-6">
          <h4 className={`font-medium mb-4 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Email Notifications
          </h4>
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
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings[item.id]}
                    onChange={() => handleNotificationToggle(item.id)}
                    disabled={!editStates.notifications}
                    className="sr-only peer"
                  />
                  <div className={`w-11 h-6 rounded-full peer ${isDarkMode ? 'bg-gray-700 peer-checked:bg-blue-600' : 'bg-gray-300 peer-checked:bg-blue-600'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className={`font-medium mb-4 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            SMS Notifications
          </h4>
          <div className="space-y-4">
            {[
              { id: 'emergencyAlerts', label: 'Emergency alerts', description: 'Receive emergency alerts via SMS' },
              { id: 'attendanceAlerts', label: 'Attendance alerts', description: 'Get SMS alerts for attendance' },
              { id: 'feeReminders', label: 'Fee reminders', description: 'Receive fee reminders via SMS' },
              { id: 'examResults', label: 'Exam results', description: 'Get exam results via SMS' }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings[item.id]}
                    onChange={() => handleNotificationToggle(item.id)}
                    disabled={!editStates.notifications}
                    className="sr-only peer"
                  />
                  <div className={`w-11 h-6 rounded-full peer ${isDarkMode ? 'bg-gray-700 peer-checked:bg-blue-600' : 'bg-gray-300 peer-checked:bg-blue-600'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className={`font-medium mb-4 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Push Notifications
          </h4>
          <div className="space-y-4">
            {[
              { id: 'newMessages', label: 'New messages', description: 'Get push notifications for new messages' },
              { id: 'newAnnouncement_push', label: 'New announcements', description: 'Receive push notifications for announcements' },
              { id: 'attendanceUpdates', label: 'Attendance updates', description: 'Get push notifications for attendance updates' },
              { id: 'systemAlerts', label: 'System alerts', description: 'Receive system alerts via push notifications' }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings[item.id]}
                    onChange={() => handleNotificationToggle(item.id)}
                    disabled={!editStates.notifications}
                    className="sr-only peer"
                  />
                  <div className={`w-11 h-6 rounded-full peer ${isDarkMode ? 'bg-gray-700 peer-checked:bg-blue-600' : 'bg-gray-300 peer-checked:bg-blue-600'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className={`font-medium mb-4 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Notification Preferences
          </h4>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quiet Hours
                </h4>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Do not disturb during specified hours
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings.quietHours}
                  onChange={() => handleNotificationToggle('quietHours')}
                  disabled={!editStates.notifications}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${isDarkMode ? 'bg-gray-700 peer-checked:bg-blue-600' : 'bg-gray-300 peer-checked:bg-blue-600'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
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
                    disabled={!editStates.notifications}
                    className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.notifications ? 'opacity-70' : ''}`}
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
                    disabled={!editStates.notifications}
                    className={`w-full p-3 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} ${!editStates.notifications ? 'opacity-70' : ''}`}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div>
                <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Weekend Notifications
                </h4>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Receive notifications on weekends
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings.weekendNotifications}
                  onChange={() => handleNotificationToggle('weekendNotifications')}
                  disabled={!editStates.notifications}
                  className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer ${isDarkMode ? 'bg-gray-700 peer-checked:bg-blue-600' : 'bg-gray-300 peer-checked:bg-blue-600'} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
              </label>
            </div>
          </div>
        </div>

        {editStates.notifications && (
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              onClick={() => cancelEdit('notifications')}
              className={`px-4 py-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              Cancel
            </button>
            <button
              onClick={() => saveSection('notifications')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Save Changes
            </button>
          </div>
        )}
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

      <main className={`transition-all duration-300 ${isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
          <div className="text-left mb-6">
            <h1 className={`text-2xl sm:text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Profile Settings
            </h1>
            <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage your profile information and account settings
            </p>
          </div>

          <div className={`mb-6 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <div className="flex overflow-x-auto border-b">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${isActive
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } ${isDarkMode && isActive ? '!text-blue-400' : ''} ${isDarkMode && !isActive ? '!text-gray-400 hover:!text-gray-300' : ''}`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="p-4 sm:p-6">
              {activeTab === 'personal' && renderPersonalInfo()}
              {activeTab === 'tuition' && renderTuitionDetails()}
              {activeTab === 'security' && renderSecurity()}
              {activeTab === 'notifications' && renderNotifications()}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
      <PhotoModal />
    </div>
  );
};

export default Profile;