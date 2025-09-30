import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import studentProfile from '../../assets/images/student-profile.png';

import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  BookOpen,
  TrendingUp,
  Clock,
  Users,
  Target,
  Star,
  Download,
  Edit3,
  Camera,
  CheckCircle,
  Trophy,
  Activity,
  BarChart3,
  X,
  Save,
  Upload,
  Trash2
} from 'lucide-react';

const StudentProfile = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(studentProfile);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const fileInputRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Student basic info with state management for editing
  const [studentInfo, setStudentInfo] = useState({
    name: 'Alex Johnson',
    studentId: 'ST20240001',
    class: 'Class 12 - Science Stream',
    section: 'A',
    rollNumber: '15',
    email: 'alex.johnson@gmail.com',
    phone: '+91 98765 43210',
    dateOfBirth: '15th March, 2006',
    address: '123 Main Street, City, State 12345',
    parentName: 'John Johnson',
    parentPhone: '+91 98765 76543',
    admissionDate: '1st April, 2022',
    bloodGroup: 'O+',
    nationality: 'Indian'
  });

  // Temporary state for editing
  const [editData, setEditData] = useState({ ...studentInfo });

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const loadProfileData = () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        const profileData = JSON.parse(localStorage.getItem('userProfile') || '{}');
        
        // Load profile photo
        if (profileData.profilePhotoUrl) {
          setProfilePhoto(profileData.profilePhotoUrl);
        } else if (userData.profilePhotoUrl) {
          setProfilePhoto(userData.profilePhotoUrl);
        }
        
        // Update student info from stored data
        if (userData.name || profileData.name) {
          const name = profileData.name || userData.name;
          setStudentInfo(prev => ({ ...prev, name }));
          setEditData(prev => ({ ...prev, name }));
        }
        
        if (userData.email || profileData.email) {
          const email = profileData.email || userData.email;
          setStudentInfo(prev => ({ ...prev, email }));
          setEditData(prev => ({ ...prev, email }));
        }
        
        if (userData.phone || profileData.phone) {
          const phone = profileData.phone || userData.phone;
          setStudentInfo(prev => ({ ...prev, phone }));
          setEditData(prev => ({ ...prev, phone }));
        }

        // Load other profile data if available
        Object.keys(profileData).forEach(key => {
          if (studentInfo.hasOwnProperty(key)) {
            setStudentInfo(prev => ({ ...prev, [key]: profileData[key] }));
            setEditData(prev => ({ ...prev, [key]: profileData[key] }));
          }
        });

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
      
      // Also update user data for immediate sync
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUserData = { ...userData, ...data };
      localStorage.setItem('user', JSON.stringify(updatedUserData));
      
      return updatedProfile;
    } catch (error) {
      console.error('Error saving profile data:', error);
      return null;
    }
  };

  // Update user data everywhere (Header, Sidebar, etc.)
  const updateUserDataEverywhere = (newData) => {
    const savedData = saveProfileData(newData);
    if (savedData) {
      // Dispatch events to notify Header and Sidebar
      window.dispatchEvent(new CustomEvent('userDataChanged', {
        detail: savedData
      }));
      
      window.dispatchEvent(new CustomEvent('profileDataChanged', {
        detail: savedData
      }));
    }
  };

  // Handle profile photo upload
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

  // Update profile photo everywhere
  const updateProfilePhotoEverywhere = (photoUrl) => {
    const profileData = saveProfileData({ profilePhotoUrl: photoUrl });
    
    if (profileData) {
      // Dispatch events to update Header and Sidebar
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

  // Handle photo removal
  const handleRemovePhoto = () => {
    setProfilePhoto(studentProfile);
    updateProfilePhotoEverywhere(studentProfile);
    setShowPhotoModal(false);
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Handle edit functions
  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing - reset to original data
      setEditData({ ...studentInfo });
    }
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Save changes
    setStudentInfo({ ...editData });
    
    // Update localStorage and notify other components
    const updatedData = {
      name: editData.name,
      email: editData.email,
      phone: editData.phone,
      dateOfBirth: editData.dateOfBirth,
      address: editData.address,
      parentName: editData.parentName,
      parentPhone: editData.parentPhone,
      bloodGroup: editData.bloodGroup,
      nationality: editData.nationality
    };
    
    updateUserDataEverywhere(updatedData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Academic stats
  const academicStats = [
    {
      title: 'Overall Grade',
      value: 'A+',
      subtext: '91.5%',
      color: 'green',
      icon: GraduationCap
    },
    {
      title: 'Class Rank',
      value: '#3',
      subtext: 'out of 45 students',
      color: 'blue',
      icon: Trophy
    },
    {
      title: 'Attendance',
      value: '96.2%',
      subtext: '178 of 185 days',
      color: 'purple',
      icon: CheckCircle
    },
    {
      title: 'Assignments',
      value: '42/45',
      subtext: '93.3% completion',
      color: 'orange',
      icon: BookOpen
    }
  ];

  // Subject performance
  const subjectPerformance = [
    {
      subject: 'Mathematics',
      grade: 'A+',
      percentage: 95,
      teacher: 'Mr. Sharma',
      lastTest: 94
    },
    {
      subject: 'Physics',
      grade: 'A',
      percentage: 89,
      teacher: 'Dr. Singh',
      lastTest: 87
    },
    {
      subject: 'Chemistry',
      grade: 'A+',
      percentage: 92,
      teacher: 'Ms. Patel',
      lastTest: 90
    },
    {
      subject: 'Biology',
      grade: 'A',
      percentage: 88,
      teacher: 'Dr. Gupta',
      lastTest: 85
    },
    {
      subject: 'English',
      grade: 'A+',
      percentage: 93,
      teacher: 'Ms. Johnson',
      lastTest: 91
    },
    {
      subject: 'Computer Science',
      grade: 'A+',
      percentage: 96,
      teacher: 'Mr. Kumar',
      lastTest: 98
    }
  ];

  // Recent activities
  const recentActivities = [
    {
      type: 'assignment',
      title: 'Physics Lab Report submitted',
      date: '2 hours ago',
      icon: BookOpen,
      color: 'blue'
    },
    {
      type: 'test',
      title: 'Mathematics Test - Scored 94%',
      date: '1 day ago',
      icon: Award,
      color: 'green'
    },
    {
      type: 'attendance',
      title: 'Perfect Attendance this week',
      date: '3 days ago',
      icon: CheckCircle,
      color: 'purple'
    },
    {
      type: 'achievement',
      title: 'Science Olympiad - Gold Medal',
      date: '1 week ago',
      icon: Trophy,
      color: 'yellow'
    }
  ];

  // Achievements
  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Top 5% of class for 3 consecutive terms',
      date: 'January 2024',
      type: 'academic',
      icon: GraduationCap
    },
    {
      title: 'Science Olympiad Winner',
      description: 'Gold medal in Regional Science Olympiad',
      date: 'December 2023',
      type: 'competition',
      icon: Trophy
    },
    {
      title: 'Perfect Attendance',
      description: '100% attendance for 6 months',
      date: 'November 2023',
      type: 'attendance',
      icon: CheckCircle
    },
    {
      title: 'Mathematics Champion',
      description: 'Winner of Inter-school Math Competition',
      date: 'October 2023',
      type: 'competition',
      icon: Award
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'text-blue-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', icon: 'text-green-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'text-purple-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'text-orange-600' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', icon: 'text-yellow-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getGradeColor = (grade) => {
    if (grade === 'A+') return 'text-green-600';
    if (grade === 'A') return 'text-blue-600';
    if (grade === 'B+') return 'text-orange-600';
    return 'text-gray-600';
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'academic', label: 'Academic Records' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'activities', label: 'Activities' }
  ];

  // Photo Modal Component
  const PhotoModal = () => (
    showPhotoModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
        <div className={`w-full max-w-md rounded-xl md:rounded-2xl ${
          isDarkMode ? 'bg-slate-800' : 'bg-white'
        } shadow-2xl overflow-hidden`}>
          
          <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
            isDarkMode ? 'border-slate-700' : 'border-gray-300'
          }`}>
            <div>
              <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Change Profile Photo
              </h2>
            </div>
            <button
              onClick={() => setShowPhotoModal(false)}
              className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
                isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
              }`}
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
          </div>

          <div className="p-4 md:p-6">
            <div className="text-center mb-6">
              <img
                src={profilePhoto}
                alt="Current profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4"
              />
            </div>

            <div className="space-y-3">
              <button
                onClick={triggerFileInput}
                className="w-full flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm md:text-base"
              >
                <Upload size={18} />
                Upload New Photo
              </button>

              <button
                onClick={handleRemovePhoto}
                className={`w-full flex items-center justify-center gap-2 p-3 rounded-lg border text-sm md:text-base ${
                  isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Trash2 size={18} />
                Remove Photo
              </button>
            </div>
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

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="profile" />

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 lg:mb-8 gap-3 sm:gap-0">
            <div className="text-left">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Student Profile
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                View and manage your academic profile
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleEditToggle}
                    className={`px-3 py-2 md:px-4 md:py-2 rounded-lg border text-xs md:text-sm ${
                      isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <X size={14} className="inline mr-1 md:mr-2" />
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-3 py-2 md:px-4 md:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xs md:text-sm"
                  >
                    <CheckCircle size={14} className="inline mr-1 md:mr-2" />
                    Save Changes
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs md:text-sm"
                >
                  <Edit3 size={14} className="inline mr-1 md:mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Header Card */}
          <div className={`p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border mb-6 md:mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                />
                <button 
                  onClick={() => setShowPhotoModal(true)}
                  className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Camera size={12} className="md:w-4 md:h-4" />
                </button>
              </div>
              
              <div className="flex-1">
                <h2 className={`text-xl md:text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {studentInfo.name}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-6 text-xs md:text-sm mb-3 md:mb-4">
                  <span className={`flex items-center gap-1 md:gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <GraduationCap size={14} className="md:w-4 md:h-4" />
                    {studentInfo.class}
                  </span>
                  <span className={`flex items-center gap-1 md:gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <User size={14} className="md:w-4 md:h-4" />
                    ID: {studentInfo.studentId}
                  </span>
                  <span className={`flex items-center gap-1 md:gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Users size={14} className="md:w-4 md:h-4" />
                    Section {studentInfo.section} • Roll #{studentInfo.rollNumber}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 mb-3 md:mb-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Mail size={14} className={`md:w-4 md:h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {studentInfo.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <Phone size={14} className={`md:w-4 md:h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {studentInfo.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <Calendar size={14} className={`md:w-4 md:h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Born: {studentInfo.dateOfBirth}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Nationality
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.nationality}
                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.nationality}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Admission Date
                    </label>
                    <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {studentInfo.admissionDate} (Read Only)
                    </p>
                  </div>
                  
                  <div className="md:col-span-2 lg:col-span-3">
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Address
                    </label>
                    {isEditing ? (
                      <textarea
                        value={editData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        rows={2}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border resize-none text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.address}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Parent/Guardian
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.parentName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Parent Contact
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editData.parentPhone}
                        onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.parentPhone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Blood Group
                    </label>
                    {isEditing ? (
                      <select
                        value={editData.bloodGroup}
                        onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.bloodGroup}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
            {academicStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = getColorClasses(stat.color);
              return (
                <div key={index} className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="text-left">
                      <h3 className={`text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.title}
                      </h3>
                      <p className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </p>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        {stat.subtext}
                      </p>
                    </div>
                    <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${colorClasses.bg}`}>
                      <Icon className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${colorClasses.icon}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tab Navigation */}
          <div className={`flex gap-1 md:gap-2 mb-6 md:mb-8 p-1 md:p-2 rounded-xl md:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl transition-all font-medium text-xs md:text-sm ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-sm'
                    : isDarkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-slate-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              
              {/* Personal Information */}
              <div className={`xl:col-span-2 p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Student ID
                    </label>
                    <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {studentInfo.studentId} (Read Only)
                    </p>
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.phone}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Date of Birth
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.dateOfBirth}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Blood Group
                    </label>
                    {isEditing ? (
                      <select
                        value={editData.bloodGroup}
                        onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                        className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    ) : (
                      <p className={`py-1 md:py-2 text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.bloodGroup}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Activities
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    const colorClasses = getColorClasses(activity.color);
                    return (
                      <div key={index} className="flex items-start gap-2 md:gap-3">
                        <div className={`p-1 md:p-2 rounded-lg ${colorClasses.bg}`}>
                          <Icon className={`w-3 h-3 md:w-4 md:h-4 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {activity.title}
                          </p>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'academic' && (
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject Performance
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                {subjectPerformance.map((subject, index) => (
                  <div key={index} className={`p-3 md:p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <h4 className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.subject}
                      </h4>
                      <span className={`text-base md:text-lg font-bold ${getGradeColor(subject.grade)}`}>
                        {subject.grade}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs md:text-sm mb-2">
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Overall: {subject.percentage}%
                      </span>
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Last Test: {subject.lastTest}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${subject.percentage}%` }}
                      ></div>
                    </div>
                    
                    <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      Teacher: {subject.teacher}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Achievements & Awards
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className={`p-4 md:p-6 rounded-lg border ${
                      isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="p-2 md:p-3 bg-yellow-100 rounded-lg">
                          <Icon className="w-4 h-4 md:w-6 md:h-6 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold text-sm md:text-base mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {achievement.title}
                          </h4>
                          <p className={`text-xs md:text-sm mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {achievement.description}
                          </p>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'activities' && (
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Activity Timeline
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {recentActivities.concat([
                  {
                    type: 'assignment',
                    title: 'Chemistry Assignment completed',
                    date: '2 weeks ago',
                    icon: BookOpen,
                    color: 'green'
                  },
                  {
                    type: 'test',
                    title: 'Biology Test - Scored 88%',
                    date: '3 weeks ago',
                    icon: Award,
                    color: 'blue'
                  }
                ]).map((activity, index) => {
                  const Icon = activity.icon;
                  const colorClasses = getColorClasses(activity.color);
                  return (
                    <div key={index} className={`flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className={`p-2 md:p-3 rounded-lg ${colorClasses.bg}`}>
                        <Icon className={`w-3 h-3 md:w-5 md:h-5 ${colorClasses.icon}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {activity.title}
                        </p>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {activity.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
      <PhotoModal />
    </div>
  );
};

export default StudentProfile;