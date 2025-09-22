// Fixed Sidebar.jsx with proper role handling
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import profile from '../../assets/images/profile.png';
import teacherProfile from '../../assets/images/teacher-profile.png';
import studentProfile from '../../assets/images/student-profile.png';
import parentProfile from '../../assets/images/parent-profile.png'
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
  ChevronDown,
  ChevronRight,
  BookOpen,
  ClipboardList,
  GraduationCap,
  FileText
} from 'lucide-react';

const Sidebar = ({ isExpanded, activeItem = 'dashboard' }) => {
  const { isDarkMode } = useTheme();
  const [openItems, setOpenItems] = useState({});
  const [userRole, setUserRole] = useState('tuition_owner');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Function to get current user data
  const getCurrentUserData = () => {
    try {
      const storedUser = localStorage.getItem('user');
      console.log('Sidebar - Raw stored user:', storedUser); // Debug log
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log('Sidebar - Parsed user data:', user); // Debug log
        setUserData(user);
        setUserRole(user.role || 'tuition_owner');
      } else {
        console.log('Sidebar - No user data found'); // Debug log
        setUserData(null);
        setUserRole('tuition_owner');
      }
    } catch (error) {
      console.error('Sidebar - Error parsing user data:', error);
      setUserData(null);
      setUserRole('tuition_owner');
    }
  };

  useEffect(() => {
    // Initial load
    getCurrentUserData();
    
    // Listen for storage changes and custom events
    const handleDataChange = () => {
      console.log('Sidebar - Data change detected'); // Debug log
      getCurrentUserData();
    };
    
    window.addEventListener('storage', handleDataChange);
    window.addEventListener('userDataChanged', handleDataChange);
    
    return () => {
      window.removeEventListener('storage', handleDataChange);
      window.removeEventListener('userDataChanged', handleDataChange);
    };
  }, []);

  // Also update when isExpanded changes (this helps with the expansion issue)
  useEffect(() => {
    console.log('Sidebar - isExpanded changed, refreshing user data'); // Debug log
    getCurrentUserData();
  }, [isExpanded]);

  // Tuition Owner menu items (original full menu)
  const ownerMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/Dashboard' },
    { id: 'schedule', name: 'Schedule', icon: Calendar, path: '/Schedule' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, path: '/ReportsAnalytics' },
    { id: 'payments', name: 'Payments', icon: CreditCard, path: '/Payment' },
    { id: 'attendance', name: 'Attendance', icon: UserCheck, path: '/AttendanceManagement' },
    { id: 'user-roles', name: 'User Roles', icon: Users, path: '/UserRoleManagement' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/AnnouncementManagement' },
    { id: 'messages', name: 'Messages', icon: MessageSquare, path: '/Chat' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/SettingsManagement' }
  ];

  // Student menu items (most limited menu)
  const studentMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/StudentDashboard' },
    { id: 'schedule', name: 'Class Schedule', icon: Calendar, path: '/StudentSchedule' },
    { id: 'attendance', name: 'My Attendance', icon: UserCheck, path: '/StudentAttendance' },
    { id: 'assignments', name: 'Assignments', icon: ClipboardList, path: '/StudentAssignments' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/TeacherAnnouncements' },
    { id: 'messages', name: 'Chat', icon: MessageSquare, path: '/Chat' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/StudentSettings' }
  ];
  // Teacher menu items (limited menu)
  const teacherMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/TeacherDashboard' },
    { id: 'schedule', name: 'Schedule', icon: Calendar, path: '/TeacherSchedule' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, path: '/TeacherReportsAnalytics' },
    { id: 'attendance', name: 'Attendance', icon: UserCheck, path: '/TeacherAttendanceManagement' },
    { id: 'assignments', name: 'Assignments', icon: ClipboardList, path: '/TeacherAssignmentsManagement' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/TeacherAnnouncements' },
    { id: 'messages', name: 'Messages', icon: MessageSquare, path: '/Chat' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/TeacherSettings' }
    
  ];

  const parentMenuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, path: '/ParentDashboard' },
    { id: 'schedule', name: 'Schedule', icon: Calendar, path: '/ParentSchedule' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, path: '/ParentReportsAnalytics' },
    { id: 'attendance', name: 'Attendance', icon: UserCheck, path: '/ParentAttendanceManagement' },
    { id: 'announcements', name: 'Announcements', icon: Megaphone, path: '/ParentAnnouncements' },
    { id: 'messages', name: 'Messages', icon: MessageSquare, path: '/Chat' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/ParentSettings'}
    
  ];

  // Get menu items based on user role
  const getMenuItems = () => {
    console.log('Sidebar - Getting menu items for role:', userRole); // Debug log
    if (userRole === 'teacher') return teacherMenuItems;
    if (userRole === 'student') return studentMenuItems;
    if (userRole === 'parent') return parentMenuItems;
    return ownerMenuItems;
  };

  // Get profile image based on user role
  const getProfileImage = () => {
    if (userData && userData.profileImage === 'teacher-profile.png') {
      console.log('Sidebar - Using teacher profile image'); // Debug log
      return teacherProfile;
    } else if (userData && userData.profileImage === 'student-profile.png') {
      console.log('Sidebar - Using student profile image'); // Debug log
      return studentProfile;
    }else if (userData && userData.profileImage === 'parent-profile.png') {
      console.log('Sidebar - Using parent profile image'); // Debug log
      return parentProfile;
    }
    console.log('Sidebar - Using default profile image'); // Debug log
    return profile;
  };

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleProfile = () => {
    // Navigate to role-specific profile pages
    if (userRole === 'teacher') {
      navigate('/TeacherProfile');
    } else if (userRole === 'student') {
      navigate('/StudentProfile');
    }else if (userRole === 'parent') {
      navigate('/ParentSettings');
    } 
    else {
      navigate('/Profile'); // Owner profile
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className={`fixed left-0 top-0 h-screen z-30 transition-all duration-300 flex flex-col ${isExpanded ? 'w-64' : 'w-16'
      } ${isDarkMode ? 'bg-slate-800 border-r border-slate-700' : 'bg-white border-r border-gray-300'} pt-20`}>

      {/* Profile Section at the top */}
      <div className={`p-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-300'} flex flex-col items-center text-center`}>
        <img
          src={getProfileImage()}
          alt="Profile"
          className={`rounded-full flex-shrink-0 transition-all duration-300 ${isExpanded ? 'w-20 h-20' : 'w-8 h-8'
            }`}
        />
        {isExpanded && (
          <>
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {userData ? userData.name : 'Loading...'}
            </h3>
            <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              {userData ? userData.email : 'Loading...'}
            </p>
            <button
              type="button" 
              onClick={handleProfile} 
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
            >
              <span>✏️</span> Edit your profile
            </button>
          </>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id.toLowerCase() === activeItem.toLowerCase();

            return (
              <li key={item.id}>
                <a
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors focus:outline-none focus:ring-0 text-left ${isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  {isExpanded && <span className="truncate">{item.name}</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Role indicator at bottom */}
      {isExpanded && (
        <div className={`p-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-300'} text-center`}>
          <span className={`text-xs px-2 py-1 rounded-full ${
            userRole === 'teacher' 
              ? 'bg-green-100 text-green-700' 
              : userRole === 'student'
              ? 'bg-orange-100 text-orange-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {userRole === 'teacher' ? 'Teacher' : userRole === 'student' ? 'Student' : 'Owner'} 
            {/* Debug info - remove in production */}
            <span className="ml-2 opacity-50">({userRole})</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;