import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import profile from '../../assets/images/profile.png';
import teacherProfile from '../../assets/images/teacher-profile.png';
import studentProfile from '../../assets/images/student-profile.png';
import parentProfile from '../../assets/images/parent-profile.png';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  CreditCard,
  Users,
  UserCheck,
  Megaphone,
  MessageSquare,
  Settings,
  BookOpen,
  ClipboardList
} from 'lucide-react';

const Sidebar = ({ isExpanded, activeItem = 'dashboard' }) => {
  const { isDarkMode } = useTheme();
  const [userRole, setUserRole] = useState('tuition_owner');
  const [userData, setUserData] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(profile);
  const navigate = useNavigate();

  const getCurrentUserData = () => {
    try {
      const storedUser = localStorage.getItem('user');
      console.log('Sidebar - Raw stored user:', storedUser);
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log('Sidebar - Parsed user data:', user);
        setUserData(user);
        setUserRole(user.role || 'tuition_owner');
        
        if (user.profilePhotoUrl) {
          setProfilePhoto(user.profilePhotoUrl);
        } else {
          setProfilePhoto(getRoleBasedProfileImage(user.role || 'tuition_owner'));
        }
      } else {
        console.log('Sidebar - No user data found');
        setUserData(null);
        setUserRole('tuition_owner');
        setProfilePhoto(profile);
      }
    } catch (error) {
      console.error('Sidebar - Error parsing user data:', error);
      setUserData(null);
      setUserRole('tuition_owner');
      setProfilePhoto(profile);
    }
  };

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

  useEffect(() => {
    getCurrentUserData();
    
    const handleUserDataChange = () => {
      console.log('Sidebar - User data change detected');
      getCurrentUserData();
    };
    
    const handleProfilePhotoChange = (event) => {
      if (event.detail && event.detail.photoUrl) {
        setProfilePhoto(event.detail.photoUrl);
        
        const updatedUser = JSON.parse(localStorage.getItem('user') || '{}');
        updatedUser.profilePhotoUrl = event.detail.photoUrl;
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUserData(updatedUser);
      }
    };
    
    window.addEventListener('userDataChanged', handleUserDataChange);
    window.addEventListener('profilePhotoChanged', handleProfilePhotoChange);
    window.addEventListener('storage', handleUserDataChange);
    
    return () => {
      window.removeEventListener('userDataChanged', handleUserDataChange);
      window.removeEventListener('profilePhotoChanged', handleProfilePhotoChange);
      window.removeEventListener('storage', handleUserDataChange);
    };
  }, []);

  useEffect(() => {
    console.log('Sidebar - isExpanded changed, refreshing user data');
    getCurrentUserData();
  }, [isExpanded]);

  const ownerMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/Dashboard' },
    { id: 'schedule', name: 'Schedule', icon: Calendar, path: '/Schedule' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, path: '/ReportsAnalytics' },
    { id: 'payments', name: 'Payments', icon: CreditCard, path: '/Payment' },
    { id: 'attendance', name: 'Attendance', icon: UserCheck, path: '/AttendanceManagement' },
    { id: 'user-roles', name: 'User Roles', icon: Users, path: '/UserRoleManagement' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/AnnouncementManagement' },
    { id: 'messages', name: 'Messages', icon: MessageSquare, path: '/Messages' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/SettingsManagement' }
  ];

  const studentMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/StudentDashboard' },
    { id: 'schedule', name: 'Class Schedule', icon: Calendar, path: '/StudentSchedule' },
    { id: 'attendance', name: 'My Attendance', icon: UserCheck, path: '/StudentAttendance' },
    { id: 'assignments', name: 'Assignments', icon: ClipboardList, path: '/StudentAssignments' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/TeacherAnnouncements' },
    { id: 'messages', name: 'Chat', icon: MessageSquare, path: '/Messages' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/StudentSettings' }
  ];

  const teacherMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/TeacherDashboard' },
    { id: 'schedule', name: 'Schedule', icon: Calendar, path: '/TeacherSchedule' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, path: '/TeacherReportsAnalytics' },
    { id: 'attendance', name: 'Attendance', icon: UserCheck, path: '/TeacherAttendanceManagement' },
    { id: 'assignments', name: 'Assignments', icon: ClipboardList, path: '/TeacherAssignmentsManagement' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/TeacherAnnouncements' },
    { id: 'messages', name: 'Messages', icon: MessageSquare, path: '/Messages' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/TeacherSettings' }
  ];

  const parentMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/ParentDashboard' },
    { id: 'schedule', name: 'Schedule', icon: Calendar, path: '/ParentSchedule' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, path: '/ParentReportsAnalytics' },
    { id: 'attendance', name: 'Attendance', icon: UserCheck, path: '/ParentAttendanceManagement' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/ParentAnnouncements' },
    { id: 'messages', name: 'Messages', icon: MessageSquare, path: '/Messages' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/ParentSettings'}
  ];

  const getMenuItems = () => {
    console.log('Sidebar - Getting menu items for role:', userRole);
    if (userRole === 'teacher') return teacherMenuItems;
    if (userRole === 'student') return studentMenuItems;
    if (userRole === 'parent') return parentMenuItems;
    return ownerMenuItems;
  };

  const handleProfile = () => {
    if (userRole === 'teacher') {
      navigate('/TeacherProfile');
    } else if (userRole === 'student') {
      navigate('/StudentProfile');
    } else if (userRole === 'parent') {
      navigate('/ParentSettings');
    } else {
      navigate('/Profile');
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className={`fixed left-0 top-0 h-screen z-30 transition-all duration-300 flex flex-col ${
  isExpanded ? 'w-48 md:w-64' : 'w-0 md:w-16'
} ${
  isDarkMode ? 'bg-slate-800 border-r border-slate-700' : 'bg-white border-r border-gray-300'
} pt-16 md:pt-20 overflow-hidden`}>

      <div className={`p-2 md:p-4 border-b ${
        isDarkMode ? 'border-slate-700' : 'border-gray-300'
      } flex flex-col items-center text-center`}>
        <img
          src={profilePhoto}
          alt="Profile"
          className={`rounded-full flex-shrink-0 transition-all duration-300 ${
            isExpanded ? 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20' : 'w-6 h-6 md:w-8 md:h-8'
          }`}
        />
        {isExpanded && (
          <>
            <h3 className={`font-semibold text-sm md:text-lg mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {userData ? userData.name : 'Loading...'}
            </h3>
            <p className={`text-xs md:text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              {userData ? userData.email : 'Loading...'}
            </p>
            <button
              type="button" 
              onClick={handleProfile} 
              className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm transition ${
                isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <span className="text-xs">✏️</span> {isExpanded && <span>Edit profile</span>}
            </button>
          </>
        )}
      </div>

      <nav className="flex-1 px-1 md:px-2 py-2 md:py-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id.toLowerCase() === activeItem.toLowerCase();

            return (
              <li key={item.id}>
                <a
                  href={item.path}
                  className={`flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 md:py-3 rounded-lg text-xs md:text-sm transition-colors focus:outline-none focus:ring-0 text-left ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <Icon size={16} className="md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  {isExpanded && <span className="truncate text-xs md:text-sm">{item.name}</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {isExpanded && (
        <div className={`p-2 md:p-4 border-t ${
          isDarkMode ? 'border-slate-700' : 'border-gray-300'
        } text-center`}>
          <span className={`text-xs px-2 py-1 rounded-full ${
            userRole === 'teacher' 
              ? 'bg-green-100 text-green-700' 
              : userRole === 'student'
              ? 'bg-orange-100 text-orange-700'
              : userRole === 'parent'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {userRole === 'teacher' ? 'Teacher' : userRole === 'student' ? 'Student' : userRole === 'parent' ? 'Parent' : 'Owner'} 
          </span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;