import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

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
  X
} from 'lucide-react';

const StudentProfile = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

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
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Student Profile
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                View and manage your academic profile
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className={`px-4 py-2 rounded-lg border ${
                isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Download size={16} className="inline mr-2" />
                Download Profile
              </button>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleEditToggle}
                    className={`px-4 py-2 rounded-lg border ${
                      isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <X size={16} className="inline mr-2" />
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    <CheckCircle size={16} className="inline mr-2" />
                    Save Changes
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <Edit3 size={16} className="inline mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Header Card */}
          <div className={`p-8 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  A
                </div>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600">
                  <Camera size={14} />
                </button>
              </div>
              
              <div className="flex-1">
                <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {studentInfo.name}
                </h2>
                <div className="flex items-center gap-6 text-sm mb-4">
                  <span className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <GraduationCap size={16} />
                    {studentInfo.class}
                  </span>
                  <span className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <User size={16} />
                    ID: {studentInfo.studentId}
                  </span>
                  <span className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Users size={16} />
                    Section {studentInfo.section} • Roll #{studentInfo.rollNumber}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {studentInfo.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {studentInfo.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Born: {studentInfo.dateOfBirth}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {academicStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = getColorClasses(stat.color);
              return (
                <div key={index} className={`p-6 rounded-2xl border ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-left">
                      <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.title}
                      </h3>
                      <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        {stat.subtext}
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl ${colorClasses.bg}`}>
                      <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tab Navigation */}
          <div className={`flex gap-2 mb-8 p-2 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-xl transition-all font-medium ${
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
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Personal Information */}
              <div className={`xl:col-span-2 p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Student ID
                    </label>
                    <p className={`py-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {studentInfo.studentId} (Read Only)
                    </p>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.phone}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.dateOfBirth}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Blood Group
                    </label>
                    {isEditing ? (
                      <select
                        value={editData.bloodGroup}
                        onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      >
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                      </select>
                    ) : (
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.bloodGroup}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Nationality
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.nationality}
                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.nationality}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Admission Date
                    </label>
                    <p className={`py-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {studentInfo.admissionDate} (Read Only)
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.address}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Parent/Guardian
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.parentName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Parent Contact
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editData.parentPhone}
                        onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    ) : (
                      <p className={`py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {studentInfo.parentPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Activities
                </h3>
                
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    const colorClasses = getColorClasses(activity.color);
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                          <Icon className={`w-4 h-4 ${colorClasses.icon}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject Performance
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {subjectPerformance.map((subject, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.subject}
                      </h4>
                      <span className={`text-lg font-bold ${getGradeColor(subject.grade)}`}>
                        {subject.grade}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm mb-2">
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
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Achievements & Awards
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className={`p-6 rounded-lg border ${
                      isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                          <Icon className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {achievement.title}
                          </h4>
                          <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Activity Timeline
              </h3>
              
              <div className="space-y-4">
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
                    <div key={index} className={`flex items-start gap-4 p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-200'
                    }`}>
                      <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                        <Icon className={`w-5 h-5 ${colorClasses.icon}`} />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {activity.title}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
    </div>
  );
};

export default StudentProfile;