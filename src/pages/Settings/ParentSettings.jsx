import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import parentProfileImage from '../../assets/images/parent-profile.png';
import studentProfile from '../../assets/images/student-profile.png';
import { 
  Edit3, 
  Plus, 
  Download, 
  CreditCard, 
  Trash2, 
  Save, 
  Calendar,
  Camera,
  Upload,
  X,
  CheckCircle,
  Check
} from 'lucide-react';

const ParentSettings = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('General');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(false);
  const [showChildPhotoModal, setShowChildPhotoModal] = useState(false);
  const [selectedChildIndex, setSelectedChildIndex] = useState(null);
  const [saveStatus, setSaveStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const profileFileInputRef = useRef(null);
  const childFileInputRef = useRef(null);

  // Parent profile state with photo
  const [parentProfile, setParentProfile] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@gmail.com',
    phone: '+91 98765 43421',
    dateOfBirth: '2006-03-15',
    emergencyContact: '+91 98998 76554',
    address: '123 Main Street, City, State 12345',
    alternateEmail: 'parent@gmail.com',
    profilePhoto: parentProfileImage
  });

  // Original profile data for comparison
  const [originalParentProfile, setOriginalParentProfile] = useState({ ...parentProfile });

  // Children data with photos and editing states
  const [children, setChildren] = useState([
    {
      id: 1,
      name: 'Aayush Sharma',
      email: 'aayush.sharma@gmail.com',
      firstName: 'Aayush',
      lastName: 'Sharma',
      emailAddress: 'aayush.sharma@gmail.com',
      phoneNumber: '+91 98765 43421',
      dateOfBirth: '2006-03-15',
      emergencyContact: '+91 98998 76554',
      allergies: 'None',
      medicalConditions: 'None',
      avatar: 'AS',
      profilePhoto: studentProfile,
      isEditing: false
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      firstName: 'Priya',
      lastName: 'Sharma',
      emailAddress: 'priya.sharma@gmail.com',
      phoneNumber: '+91 98765 43422',
      dateOfBirth: '2008-07-10',
      emergencyContact: '+91 98998 76554',
      allergies: 'Nuts',
      medicalConditions: 'Asthma',
      avatar: 'PS',
      profilePhoto: studentProfile,
      isEditing: false
    }
  ]);

  // Store original children data for comparison
  const [originalChildren, setOriginalChildren] = useState([...children]);

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

  // Original notification settings for comparison
  const [originalNotifications, setOriginalNotifications] = useState({ ...notifications });

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadProfileData = () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        const profileData = JSON.parse(localStorage.getItem('userProfile') || '{}');
        
        if (profileData.profilePhotoUrl || userData.profilePhotoUrl) {
          const photoUrl = profileData.profilePhotoUrl || userData.profilePhotoUrl;
          setParentProfile(prev => ({ ...prev, profilePhoto: photoUrl }));
          setOriginalParentProfile(prev => ({ ...prev, profilePhoto: photoUrl }));
        }
        
        if (userData.name || profileData.name) {
          const name = profileData.name || userData.name;
          const [firstName = '', lastName = ''] = name.split(' ');
          setParentProfile(prev => ({ 
            ...prev, 
            firstName, 
            lastName: lastName || prev.lastName 
          }));
          setOriginalParentProfile(prev => ({ 
            ...prev, 
            firstName, 
            lastName: lastName || prev.lastName 
          }));
        }
        
        if (userData.email || profileData.email) {
          const email = profileData.email || userData.email;
          setParentProfile(prev => ({ ...prev, email }));
          setOriginalParentProfile(prev => ({ ...prev, email }));
        }
        
        if (userData.phone || profileData.phone) {
          const phone = profileData.phone || userData.phone;
          setParentProfile(prev => ({ ...prev, phone }));
          setOriginalParentProfile(prev => ({ ...prev, phone }));
        }

      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    };

    loadProfileData();
  }, []);

  // Save profile data to localStorage and dispatch events
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

  // Update user data everywhere
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

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Check if profile has unsaved changes
  const hasUnsavedProfileChanges = () => {
    return JSON.stringify(parentProfile) !== JSON.stringify(originalParentProfile);
  };

  // Check if notifications have unsaved changes
  const hasUnsavedNotificationChanges = () => {
    return JSON.stringify(notifications) !== JSON.stringify(originalNotifications);
  };

  // Check if any child has unsaved changes
  const hasUnsavedChildChanges = () => {
    return JSON.stringify(children) !== JSON.stringify(originalChildren);
  };

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    setSaveStatus(null);
  };

  const handleSaveNotificationSettings = async () => {
    setIsLoading(true);
    setSaveStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setOriginalNotifications({ ...notifications });
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error('Error saving notification settings:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  // Profile photo handling
  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhotoUrl = e.target.result;
        setParentProfile(prev => ({ ...prev, profilePhoto: newPhotoUrl }));
        updateProfilePhotoEverywhere(newPhotoUrl);
        setShowProfilePhotoModal(false);
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
    }
  };

  const handleRemoveProfilePhoto = () => {
    setParentProfile(prev => ({ ...prev, profilePhoto: parentProfileImage }));
    updateProfilePhotoEverywhere(parentProfileImage);
    setShowProfilePhotoModal(false);
  };

  // Child photo handling
  const handleChildPhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file && selectedChildIndex !== null) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhotoUrl = e.target.result;
        setChildren(prev => prev.map((child, index) => 
          index === selectedChildIndex 
            ? { ...child, profilePhoto: newPhotoUrl }
            : child
        ));
        setShowChildPhotoModal(false);
        setSelectedChildIndex(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveChildPhoto = () => {
    if (selectedChildIndex !== null) {
      setChildren(prev => prev.map((child, index) => 
        index === selectedChildIndex 
          ? { ...child, profilePhoto: studentProfile }
          : child
      ));
      setShowChildPhotoModal(false);
      setSelectedChildIndex(null);
    }
  };

  // Profile editing functions
  const handleEditProfileToggle = () => {
    if (isEditingProfile) {
      setParentProfile({ ...originalParentProfile });
    }
    setIsEditingProfile(!isEditingProfile);
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const fullName = `${parentProfile.firstName} ${parentProfile.lastName}`;
      const updatedData = {
        name: fullName,
        email: parentProfile.email,
        phone: parentProfile.phone,
        profilePhotoUrl: parentProfile.profilePhoto
      };
      
      updateUserDataEverywhere(updatedData);
      setOriginalParentProfile({ ...parentProfile });
      setIsEditingProfile(false);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileInputChange = (field, value) => {
    setParentProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Child editing functions
  const handleEditChild = (index) => {
    setChildren(prev => prev.map((child, i) => 
      i === index ? { ...child, isEditing: true } : child
    ));
  };

  const handleSaveChild = async (index) => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setChildren(prev => prev.map((child, i) => 
        i === index ? { ...child, isEditing: false } : child
      ));
      setOriginalChildren([...children]);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error('Error saving child data:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelChildEdit = (index) => {
    const originalChild = originalChildren[index];
    setChildren(prev => prev.map((child, i) => 
      i === index ? { ...originalChild, isEditing: false } : child
    ));
  };

  const handleChildInputChange = (index, field, value) => {
    setChildren(prev => prev.map((child, i) => 
      i === index ? { ...child, [field]: value } : child
    ));
  };

  const handleRemoveChild = (index) => {
    setChildren(prev => prev.filter((_, i) => i !== index));
    setOriginalChildren(prev => prev.filter((_, i) => i !== index));
  };

  // Download ID Card function
  const downloadIdCard = async (child) => {
    // Create a simple ID card HTML
    const idCardHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          .id-card { 
            width: 350px; 
            height: 220px; 
            border: 2px solid #333; 
            border-radius: 10px; 
            padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            position: relative;
          }
          .header { text-align: center; margin-bottom: 15px; }
          .photo { 
            width: 60px; 
            height: 60px; 
            border-radius: 50%; 
            float: left; 
            margin-right: 15px; 
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-weight: bold;
          }
          .info { overflow: hidden; }
          .field { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="id-card">
          <div class="header">
            <h2>STUDENT ID CARD</h2>
          </div>
          <div class="photo">${child.avatar}</div>
          <div class="info">
            <div class="field"><strong>Name:</strong> ${child.firstName} ${child.lastName}</div>
            <div class="field"><strong>Email:</strong> ${child.emailAddress}</div>
            <div class="field"><strong>DOB:</strong> ${child.dateOfBirth}</div>
            <div class="field"><strong>Emergency:</strong> ${child.emergencyContact}</div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create a blob and download
    const blob = new Blob([idCardHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${child.firstName}_${child.lastName}_ID_Card.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show success message
    setSaveStatus('success');
    setTimeout(() => setSaveStatus(null), 3000);
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

  const SaveStatusMessage = () => {
    if (!saveStatus) return null;

    return (
      <div className={`flex items-center gap-2 p-3 rounded-lg mb-4 ${
        saveStatus === 'success' 
          ? 'bg-green-100 text-green-800 border border-green-200' 
          : 'bg-red-100 text-red-800 border border-red-200'
      }`}>
        {saveStatus === 'success' ? (
          <Check size={16} className="text-green-600" />
        ) : (
          <X size={16} className="text-red-600" />
        )}
        <span className="text-sm font-medium">
          {saveStatus === 'success' 
            ? 'Settings saved successfully!' 
            : 'Failed to save settings. Please try again.'
          }
        </span>
      </div>
    );
  };

  // Profile Photo Modal
  const ProfilePhotoModal = () => (
    showProfilePhotoModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className={`p-6 rounded-lg max-w-md w-full mx-4 ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Change Profile Photo</h3>
            <button
              onClick={() => setShowProfilePhotoModal(false)}
              className={`p-1 rounded ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
            >
              <X size={20} />
            </button>
          </div>

          <div className="text-center mb-6">
            <img
              src={parentProfile.profilePhoto}
              alt="Current profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={() => profileFileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Upload size={18} />
              Upload New Photo
            </button>

            <button
              onClick={handleRemoveProfilePhoto}
              className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg border ${isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-300 hover:bg-gray-50'}`}
            >
              <Trash2 size={18} />
              Remove Photo
            </button>
          </div>

          <input
            ref={profileFileInputRef}
            type="file"
            accept="image/*"
            onChange={handleProfilePhotoUpload}
            className="hidden"
          />
        </div>
      </div>
    )
  );

  // Child Photo Modal
  const ChildPhotoModal = () => (
    showChildPhotoModal && selectedChildIndex !== null && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className={`p-6 rounded-lg max-w-md w-full mx-4 ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Change Child Photo</h3>
            <button
              onClick={() => {
                setShowChildPhotoModal(false);
                setSelectedChildIndex(null);
              }}
              className={`p-1 rounded ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
            >
              <X size={20} />
            </button>
          </div>

          <div className="text-center mb-6">
            <img
              src={children[selectedChildIndex]?.profilePhoto}
              alt="Current photo"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={() => childFileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Upload size={18} />
              Upload New Photo
            </button>

            <button
              onClick={handleRemoveChildPhoto}
              className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg border ${isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-300 hover:bg-gray-50'}`}
            >
              <Trash2 size={18} />
              Remove Photo
            </button>
          </div>

          <input
            ref={childFileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChildPhotoUpload}
            className="hidden"
          />
        </div>
      </div>
    )
  );

  const renderProfileInformation = () => (
    <div className={`p-6 rounded-2xl border ${
      isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Profile Information
        </h3>
        <div className="flex items-center gap-2">
          {isEditingProfile ? (
            <>
              <button 
                onClick={handleEditProfileToggle}
                className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border transition-colors ${
                  isDarkMode 
                    ? 'border-slate-600 text-white hover:bg-slate-600' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <X size={14} />
                Cancel
              </button>
              <button 
                onClick={handleSaveProfile}
                disabled={isLoading || !hasUnsavedProfileChanges()}
                className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${
                  isLoading || !hasUnsavedProfileChanges()
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <CheckCircle size={14} />
                    Save Profile
                  </>
                )}
              </button>
            </>
          ) : (
            <button 
              onClick={handleEditProfileToggle}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Edit3 size={14} />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <SaveStatusMessage />

      {/* Profile Avatar and Basic Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img
            src={parentProfile.profilePhoto}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          {isEditingProfile && (
            <button 
              onClick={() => setShowProfilePhotoModal(true)}
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Camera size={12} />
            </button>
          )}
        </div>
        <div>
          <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {parentProfile.firstName} {parentProfile.lastName}
          </h4>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {parentProfile.email}
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            First Name
          </label>
          {isEditingProfile ? (
            <input
              type="text"
              value={parentProfile.firstName}
              onChange={(e) => handleProfileInputChange('firstName', e.target.value)}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.firstName}
            </p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Last Name
          </label>
          {isEditingProfile ? (
            <input
              type="text"
              value={parentProfile.lastName}
              onChange={(e) => handleProfileInputChange('lastName', e.target.value)}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.lastName}
            </p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          {isEditingProfile ? (
            <input
              type="email"
              value={parentProfile.email}
              onChange={(e) => handleProfileInputChange('email', e.target.value)}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.email}
            </p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Phone Number
          </label>
          {isEditingProfile ? (
            <input
              type="tel"
              value={parentProfile.phone}
              onChange={(e) => handleProfileInputChange('phone', e.target.value)}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.phone}
            </p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Date of Birth
          </label>
          {isEditingProfile ? (
            <input
              type="date"
              value={parentProfile.dateOfBirth}
              onChange={(e) => handleProfileInputChange('dateOfBirth', e.target.value)}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.dateOfBirth}
            </p>
          )}
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Emergency Contact
          </label>
          {isEditingProfile ? (
            <input
              type="tel"
              value={parentProfile.emergencyContact}
              onChange={(e) => handleProfileInputChange('emergencyContact', e.target.value)}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.emergencyContact}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Address
          </label>
          {isEditingProfile ? (
            <textarea
              value={parentProfile.address}
              onChange={(e) => handleProfileInputChange('address', e.target.value)}
              rows="3"
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.address}
            </p>
          )}
          {isEditingProfile && (
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              255/255 Characters
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Alternate Email
          </label>
          {isEditingProfile ? (
            <input
              type="email"
              value={parentProfile.alternateEmail}
              onChange={(e) => handleProfileInputChange('alternateEmail', e.target.value)}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-600 border-slate-500 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
          ) : (
            <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {parentProfile.alternateEmail}
            </p>
          )}
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
        <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-3">
            <div>
              {hasUnsavedNotificationChanges() && (
                <div className={`text-sm ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  You have unsaved notification changes
                </div>
              )}
            </div>
          </div>
          
          <button 
            onClick={handleSaveNotificationSettings}
            disabled={isLoading || !hasUnsavedNotificationChanges()}
            className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : hasUnsavedNotificationChanges()
                  ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-[1.02]'
                  : 'bg-gray-300 cursor-not-allowed text-gray-500'
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              'Save Notification Settings'
            )}
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
          <Plus size={14} />
          Add Child
        </button>
      </div>

      <SaveStatusMessage />

      <div className="space-y-8">
        {children.map((child, index) => (
          <div key={child.id} className={`p-6 rounded-lg border ${
            isDarkMode ? 'bg-slate-600 border-slate-500' : 'bg-gray-50 border-gray-200'
          }`}>
            {/* Child Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={child.profilePhoto}
                    alt={`${child.firstName} ${child.lastName}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {child.isEditing && (
                    <button 
                      onClick={() => {
                        setSelectedChildIndex(index);
                        setShowChildPhotoModal(true);
                      }}
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Camera size={10} />
                    </button>
                  )}
                </div>
                <div>
                  <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.firstName} {child.lastName}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {child.emailAddress}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {child.isEditing ? (
                  <>
                    <button 
                      onClick={() => handleCancelChildEdit(index)}
                      className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border transition-colors ${
                        isDarkMode 
                          ? 'border-slate-400 text-white hover:bg-slate-500' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <X size={14} />
                      Cancel
                    </button>
                    <button 
                      onClick={() => handleSaveChild(index)}
                      disabled={isLoading}
                      className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${
                        isLoading
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save size={14} />
                          Save Profile
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => handleEditChild(index)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Edit3 size={14} />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* Child Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  First Name
                </label>
                {child.isEditing ? (
                  <input
                    type="text"
                    value={child.firstName}
                    onChange={(e) => handleChildInputChange(index, 'firstName', e.target.value)}
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Last Name
                </label>
                {child.isEditing ? (
                  <input
                    type="text"
                    value={child.lastName}
                    onChange={(e) => handleChildInputChange(index, 'lastName', e.target.value)}
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.lastName}
                  </p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                {child.isEditing ? (
                  <input
                    type="email"
                    value={child.emailAddress}
                    onChange={(e) => handleChildInputChange(index, 'emailAddress', e.target.value)}
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.emailAddress}
                  </p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Phone Number
                </label>
                {child.isEditing ? (
                  <input
                    type="tel"
                    value={child.phoneNumber}
                    onChange={(e) => handleChildInputChange(index, 'phoneNumber', e.target.value)}
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Date of Birth
                </label>
                {child.isEditing ? (
                  <input
                    type="date"
                    value={child.dateOfBirth}
                    onChange={(e) => handleChildInputChange(index, 'dateOfBirth', e.target.value)}
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.dateOfBirth}
                  </p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Emergency Contact
                </label>
                {child.isEditing ? (
                  <input
                    type="tel"
                    value={child.emergencyContact}
                    onChange={(e) => handleChildInputChange(index, 'emergencyContact', e.target.value)}
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.emergencyContact}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Allergies
                </label>
                {child.isEditing ? (
                  <textarea
                    value={child.allergies}
                    onChange={(e) => handleChildInputChange(index, 'allergies', e.target.value)}
                    rows="3"
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.allergies}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Medical Conditions
                </label>
                {child.isEditing ? (
                  <textarea
                    value={child.medicalConditions}
                    onChange={(e) => handleChildInputChange(index, 'medicalConditions', e.target.value)}
                    rows="3"
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDarkMode ? 'bg-slate-500 border-slate-400 text-white' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                ) : (
                  <p className={`p-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {child.medicalConditions}
                  </p>
                )}
              </div>
            </div>

            {/* Child Actions */}
            <div className={`flex items-center gap-4 mt-6 pt-6 border-t ${
              isDarkMode ? 'border-slate-500' : 'border-gray-200'
            }`}>
              <button 
                onClick={() => downloadIdCard(child)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm transition-colors"
              >
                <Download size={14} />
                Download ID Card
              </button>
              <button 
                onClick={() => handleRemoveChild(index)}
                className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm ml-auto transition-colors"
              >
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
      <ProfilePhotoModal />
      <ChildPhotoModal />
    </div>
  );
};

export default ParentSettings;