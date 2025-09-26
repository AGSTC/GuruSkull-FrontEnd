// Updated Header.jsx with profile photo handling
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Menu, Sun, Moon, Bell, User, Settings, LogOut } from 'lucide-react';
import logoDark from '../../assets/images/LogoforDark.png';
import logoLight from '../../assets/images/LogoforLight.png';
import profile from '../../assets/images/profile.png';
import teacherProfile from '../../assets/images/teacher-profile.png';
import studentProfile from '../../assets/images/student-profile.png';
import parentProfile from '../../assets/images/parent-profile.png';
import { Map } from 'lucide-react';
const Header = ({ isSidebarExpanded, toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState('tuition_owner');
  const [profilePhoto, setProfilePhoto] = useState(profile);
  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Get user data from localStorage and profile photo
  useEffect(() => {
    const getUserData = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          setUserData(user);
          setUserRole(user.role);
          
          // Set profile photo from localStorage if available
          if (user.profilePhotoUrl) {
            setProfilePhoto(user.profilePhotoUrl);
          } else {
            // Fallback to role-based profile images
            setProfilePhoto(getRoleBasedProfileImage(user.role));
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
          setUserData(null);
          setUserRole('tuition_owner');
          setProfilePhoto(profile);
        }
      } else {
        setUserData(null);
        setUserRole('tuition_owner');
        setProfilePhoto(profile);
      }
    };

    // Initial load
    getUserData();
    
    // Listen for profile photo changes
    const handleProfilePhotoChange = (event) => {
      if (event.detail && event.detail.photoUrl) {
        setProfilePhoto(event.detail.photoUrl);
      }
    };
    
    // Listen for storage changes
    const handleStorageChange = () => {
      getUserData();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userDataChanged', handleStorageChange);
    window.addEventListener('profilePhotoChanged', handleProfilePhotoChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userDataChanged', handleStorageChange);
      window.removeEventListener('profilePhotoChanged', handleProfilePhotoChange);
    };
  }, []);

  // Get role-based profile image
  const getRoleBasedProfileImage = (role) => {
    if (role === 'teacher') {
      return teacherProfile;
    } else if (role === 'student') {
      return studentProfile;
    } else if (role === 'parent') {
      return parentProfile;
    }
    return profile;
  };

  // Role-based notifications (existing code remains the same)
   const getNotifications = () => {
    if (userRole === 'teacher') {
      return [
        {
          id: 1,
          title: "New message from parent",
          description: "Mrs. Sharma asked about Rahul's progress",
          timeAgo: "5 minutes ago",
          type: "success",
          avatar: "👨‍👩‍👧‍👦"
        },
        {
          id: 2,
          title: "Assignment reminder",
          description: "Physics assignment due tomorrow for Class 12-A",
          timeAgo: "30 minutes ago", 
          type: "info",
          avatar: "📚"
        },
        {
          id: 3,
          title: "Class schedule update",
          description: "Mathematics class moved to Room 105",
          timeAgo: "1 hour ago",
          type: "info",
          avatar: "📅"
        }
      ];
    } else if (userRole === 'student') {
      return [
        {
          id: 1,
          title: "New assignment posted",
          description: "Physics Lab Report due on Sept 28",
          timeAgo: "10 minutes ago",
          type: "info",
          avatar: "📝"
        },
        {
          id: 2,
          title: "Test reminder",
          description: "Chemistry test tomorrow at 10:30 AM",
          timeAgo: "2 hours ago",
          type: "warning",
          avatar: "📊"
        },
        {
          id: 3,
          title: "Attendance alert",
          description: "You were marked present for today's classes",
          timeAgo: "4 hours ago",
          type: "success",
          avatar: "✅"
        }
      ];
    } else {
      // Original owner notifications
      return [
        {
          id: 1,
          title: "New Teacher registered online account",
          description: "Rahul Sharma joined Class 10 - Science",
          timeAgo: "5 minutes ago",
          type: "success",
          avatar: "🎓"
        },
        {
          id: 2,
          title: "Phone access approved- total scheme",
          description: "Monthly fee payment of ₹5,500 from Priya Patel",
          timeAgo: "30 minutes ago", 
          type: "info",
          avatar: "💰"
        }
      ];
    }
  };

  const Notification = getNotifications();


  // Get user title based on role
  const getUserTitle = () => {
    if (userRole === 'teacher') {
      return 'Teacher';
    } else if (userRole === 'student') {
      return 'Student';
    } else if (userRole === 'parent') {
      return 'Parent';
    }
    return 'Tuition Owner';
  };

  // Handle profile navigation based on role
  const handleProfileNavigation = () => {
    console.log('Header - Navigating to profile for role:', userRole);
    
    if (userRole === 'teacher') {
      navigate('/TeacherProfile');
    } else if (userRole === 'student') {
      navigate('/StudentProfile');
    } else if (userRole === 'parent') {
      navigate('/ParentSettings');
    } else {
      navigate('/Profile');
    }
    setIsProfileOpen(false);
  };

  // Handle settings navigation based on role
  const handleSettingsNavigation = () => {
    console.log('Header - Navigating to settings for role:', userRole);
    
    if (userRole === 'teacher') {
      navigate('/TeacherSettings');
    } else if (userRole === 'student') {
      navigate('/StudentSettings');
    } else if (userRole === 'parent') {
      navigate('/ParentSettings');
    } else {
      navigate('/SettingsManagement');
    }
    setIsProfileOpen(false);
  };

  const logouthandle = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleNotificationClick = (notificationId) => {
    navigate('/Notification');
    setIsNotificationOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 h-20 ${
      isDarkMode ? 'bg-slate-900 border-b border-slate-700' : 'bg-white border-b border-gray-300'
    }`}>
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-md focus:outline-none focus:ring-0 ${
              isDarkMode ? 'text-white hover:bg-slate-800' : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Menu size={26} />
          </button>

          <div className="flex items-center">
            <img src={isDarkMode ? logoDark : logoLight} alt="GuruSkull Logo" className="w-28 h-28" />
            <span className={`font-bold text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              GuruSkull
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            className={`relative w-20 h-10 rounded-full border-0 cursor-pointer transition-all duration-500 ease-in-out focus:outline-none focus:ring-0 ${isDarkMode
                ? 'bg-white'
                : 'bg-black'
              }`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {/* Sun Icon (Left side) */}
            <div className={`absolute left-2.5 top-1/2 transform -translate-y-1/2 transition-all duration-300`}>
              <Sun
                className={isDarkMode ? 'text-gray-400' : 'text-orange-500'}
                size={18}
              />
            </div>
  
            {/* Moon Icon (Right side) */}
            <div className={`absolute right-2.5 top-1/2 transform -translate-y-1/2 transition-all duration-300`}>
              <Moon
                className={isDarkMode ? 'text-blue-300' : 'text-white'}
                size={18}
              />
            </div>
  
            {/* Switch Slider Circle */}
            <div className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-500 ease-in-out shadow-md ${isDarkMode
                ? 'transform translate-x-11 bg-black'
                : 'transform translate-x-1 bg-white'
              }`}>
              {/* Small icon on the slider */}
              <div className="absolute inset-0 flex items-center justify-center">
                {isDarkMode ? (
                  <Moon className="text-white" size={14.5} />
                ) : (
                  <Sun className="text-orange-400" size={14.5} />
                )}
              </div>
            </div>
          </button>

          {/* Bell Icon with Hover */}
          <div 
            className="relative" 
            ref={notificationRef}
            onMouseEnter={() => setIsNotificationOpen(true)}
            onMouseLeave={() => setIsNotificationOpen(false)}
          >
            <button
              className={`p-2 rounded-md focus:outline-none focus:ring-0 ${
                isDarkMode ? 'text-white hover:bg-slate-800' : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bell size={26} />
              {Notification > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {Notification}
                </span>
              )}
            </button>

            {isNotificationOpen && (
              <div className={`absolute right-0 top-12 w-80 md:w-96 rounded-lg shadow-xl border z-50 ${
                isDarkMode ? 'bg-slate-800 border-slate-600' : 'bg-white border-gray-300'
              }`}>
                <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`}>
                  <h3 className={`font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Notifications
                  </h3>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {Notification.map((notification) => (
                    <div 
                      key={notification.id} 
                      onClick={() => handleNotificationClick(notification.id)}
                      className={`px-4 py-3 border-b cursor-pointer ${
                        isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-start gap-3 text-left">
                        <div className="text-xl">{notification.avatar}</div>
                        <div className="flex-1">
                          <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {notification.title}
                          </h4>
                          <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                            {notification.description}
                          </p>
                          <p className={`text-xs mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {notification.timeAgo}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* View All Notifications Button */}
                <div className={`px-4 py-3 border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`}>
                  <button 
                    onClick={() => handleNotificationClick('all')}
                    className={`w-full text-center py-2 text-sm font-medium ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    } transition-colors`}
                  >
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile with Hover */}
          <div 
            className="relative" 
            ref={profileRef}
            onMouseEnter={() => setIsProfileOpen(true)}
            onMouseLeave={() => setIsProfileOpen(false)}
          >
            <button
              className="flex items-center gap-2 p-1 rounded-md focus:outline-none focus:ring-0"
            >
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </button>

            {isProfileOpen && (
              <div className={`absolute right-0 top-12 w-72 rounded-lg shadow-xl border z-50 ${
                isDarkMode ? 'bg-slate-800 border-slate-600' : 'bg-white border-gray-300'
              }`}>
                <div className={`px-4 py-4 border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`}>
                  <div className="flex items-center gap-3 text-left">
                    <img
                      src={profilePhoto}
                      alt={userData ? userData.name : 'User'}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {userData ? userData.name : 'User'}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        {getUserTitle()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <button 
                    onClick={handleProfileNavigation}
                    className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors text-left w-full ${
                      isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <User size={16} />
                    My Profile
                  </button>
                  
                  <button 
                    onClick={handleSettingsNavigation}
                    className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors text-left w-full ${
                      isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Settings size={16} />
                    Settings
                  </button>
                  <button 
                    onClick={() => navigate('/Notification')}
                    className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors text-left w-full ${
                      isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Bell size={16} />
                    Notification
                  </button>
                </div>

                <div className={`border-t px-4 py-3 ${isDarkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-gray-300 hover:bg-gray-100'}`}>
                 
                  <button 
                    onClick={logouthandle} 
                    className="flex items-center gap-3 text-sm text-red-500 hover:text-red-600  transition-colors text-left w-full" 
                    type="button"
                  >
                    <LogOut size={16} />
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;