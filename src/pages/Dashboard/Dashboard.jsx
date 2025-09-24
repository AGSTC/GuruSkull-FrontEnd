import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Users, 
  UserCheck, 
  DollarSign, 
  BookOpen,
  AlertTriangle,
  TrendingUp,
  Calendar,
  UserPlus,
  FileText,
  Bell,
  BarChart3,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  X,
  Clock,
  User,
  Search
} from 'lucide-react';

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [displayedActivities, setDisplayedActivities] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const stats = [
    {
      title: 'Total Students',
      value: '156',
      change: '+12',
      period: 'vs last month',
      icon: Users,
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Active Teachers',
      value: '18',
      change: '+2',
      period: 'vs last month',
      icon: UserCheck,
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Monthly Revenue',
      value: '₹2,45,000',
      change: '+8.5%',
      period: 'vs last month',
      icon: DollarSign,
      trend: 'up',
      color: 'purple'
    },
    {
      title: 'Pending Fees',
      value: '₹45,200',
      change: '-12%',
      period: 'vs last month',
      icon: AlertTriangle,
      trend: 'down',
      color: 'orange'
    },
    {
      title: 'Attendance Rate',
      value: '92.5%',
      change: '+2.1%',
      period: 'vs last month',
      icon: TrendingUp,
      trend: 'up',
      color: 'cyan'
    },
    {
      title: 'Active Classes',
      value: '24',
      change: '+3',
      period: 'vs last month',
      icon: BookOpen,
      trend: 'up',
      color: 'indigo'
    }
  ];

  const quickActions = [
    { 
      title: 'Add New User', 
      description: 'Register a new user', 
      icon: UserPlus, 
      color: 'bg-blue-500',
      route: '/UserRoleManagement'
    },
    { 
      title: 'Schedule Class', 
      description: 'View new class schedule', 
      icon: Calendar, 
      color: 'bg-green-500',
      route: '/schedule'
    },
    { 
      title: 'View Notification', 
      description: 'View all Notifications from the users', 
      icon: Bell, 
      color: 'bg-purple-500',
      route: '/notification'
    },
    { 
      title: 'Attendance Report', 
      description: 'Check attendance reports of the teachers and students', 
      icon: FileText, 
      color: 'bg-orange-500',
      route: '/AttendanceManagement'
    },
    { 
      title: 'Manage Fees', 
      description: 'Update fee structure', 
      icon: DollarSign, 
      color: 'bg-teal-500',
      route: '/Payment'
    },
    { 
      title: 'View Analytics', 
      description: 'Performance insights', 
      icon: BarChart3, 
      color: 'bg-indigo-500',
      route: '/ReportsAnalytics'
    }
  ];

  // Extended list of activities for demonstration
  const allActivities = [
    {
      id: 1,
      title: 'New student registered',
      description: 'Rahul Sharma joined Class 10 - Science',
      timeAgo: '2 minutes ago',
      user: 'Rahul Sharma',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 2,
      title: 'Fee payment received',
      description: 'Monthly fee payment of ₹5,500 from Priya Patel',
      timeAgo: '15 minutes ago',
      user: 'Priya Patel',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Attendance marked',
      description: 'Class 12 - Mathematics (35 students present)',
      timeAgo: '1 hour ago',
      user: 'Mr. Sharma',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 4,
      title: 'Notification sent',
      description: 'Test reminder sent to all Class 10 students',
      timeAgo: '2 hours ago',
      user: 'System',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 5,
      title: 'Assignment submitted',
      description: 'Physics assignment submitted by 28 students',
      timeAgo: '3 hours ago',
      user: 'Mrs. Gupta',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 6,
      title: 'Teacher profile updated',
      description: 'Contact information updated for Mr. Kumar',
      timeAgo: '4 hours ago',
      user: 'Mr. Kumar',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      id: 7,
      title: 'New class scheduled',
      description: 'Extra Chemistry class scheduled for tomorrow',
      timeAgo: '5 hours ago',
      user: 'Dr. Singh',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      id: 8,
      title: 'Parent meeting arranged',
      description: 'Meeting with Amit Kumar\'s parents scheduled',
      timeAgo: '6 hours ago',
      user: 'Admin',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      id: 9,
      title: 'Test results published',
      description: 'Monthly test results for Class 9 available',
      timeAgo: '1 day ago',
      user: 'Mrs. Sharma',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 10,
      title: 'Library book issued',
      description: '15 books issued to Class 11 students',
      timeAgo: '1 day ago',
      user: 'Librarian',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      id: 11,
      title: 'Exam schedule updated',
      description: 'Final exam dates modified for all classes',
      timeAgo: '2 days ago',
      user: 'Admin',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 12,
      title: 'Holiday announcement',
      description: 'Diwali holidays announced for next week',
      timeAgo: '2 days ago',
      user: 'Principal',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600' },
      purple: { iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
      orange: { iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
      cyan: { iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' },
      indigo: { iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const handleLoadMore = () => {
    setDisplayedActivities(prev => Math.min(prev + 6, allActivities.length));
  };

  const handleViewAllActivity = () => {
    setShowActivityModal(true);
  };

  const closeModal = () => {
    setShowActivityModal(false);
    setSearchQuery('');
  };

  const filteredActivities = allActivities.filter(activity =>
    activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Quick Action navigation
  const handleQuickAction = (route) => {
    navigate(route);
  };

  const ActivityItem = ({ activity, showConnector = false, isLast = false }) => (
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.iconBg}`}>
          <div className={`w-5 h-5 rounded-full ${activity.iconColor.replace('text-', 'bg-')}`} />
        </div>
        {showConnector && !isLast && (
          <div className={`absolute left-1/2 top-10 w-px h-6 -translate-x-1/2 ${
            isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
          }`} />
        )}
      </div>
      
      <div className="flex-1 min-w-0 text-left">
        <h4 className={`font-medium text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {activity.title}
        </h4>
        <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          {activity.description}
        </p>
        <div className="flex items-center gap-3 text-xs">
          <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            <User size={12} />
            {activity.user}
          </span>
          <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            <Clock size={12} />
            {activity.timeAgo}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Header 
          isSidebarExpanded={isSidebarExpanded} 
          toggleSidebar={toggleSidebar}
        />

        <Sidebar isExpanded={isSidebarExpanded} activeItem="dashboard" />

        <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
          isSidebarExpanded ? 'ml-64' : 'ml-16'
        }`}>
          <div className="w-full h-full px-6 py-6">
              
            {/* Header - Left aligned */}
            <div className="text-left mb-8">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Dashboard
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Welcome back, Tony! Here's what's happening with your institute today.
              </p>
            </div>

            {/* Stats Grid - Matches your third image exactly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colorClasses = getColorClasses(stat.color);
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border ${
                      isDarkMode 
                        ? 'bg-slate-800 border-slate-700' 
                        : 'bg-white border-gray-300 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-left">
                        <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stat.title}
                        </h3>
                        <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl ${colorClasses.iconBg}`}>
                        <Icon className={`w-6 h-6 ${colorClasses.iconColor}`} />
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trend === 'up' 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                      <span className="font-medium">{stat.change}</span>
                      <span className={`ml-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        {stat.period}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* Quick Actions - Now with navigation functionality */}
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
                <h2 className={`text-xl font-semibold mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Actions
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.route)}
                        className={`${action.color} text-white p-4 rounded-xl text-left transition-all hover:scale-105 hover:shadow-lg group relative cursor-pointer`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <Icon size={24} className="text-white" />
                          <ChevronRight size={20} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1 text-left">{action.title}</h3>
                        <p className="text-xs opacity-90 text-left">{action.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Recent Activity - Matches your second image exactly */}
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Recent Activity
                  </h2>
                  <button 
                    onClick={handleViewAllActivity}
                    className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    View All Activity
                  </button>
                </div>
                
                <div className="space-y-4">
                  {allActivities.slice(0, displayedActivities).map((activity, index) => (
                    <ActivityItem 
                      key={activity.id}
                      activity={activity}
                      showConnector={true}
                      isLast={index === Math.min(displayedActivities - 1, allActivities.length - 1)}
                    />
                  ))}
                </div>
                
                {displayedActivities < allActivities.length && (
                  <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`}>
                    <button 
                      onClick={handleLoadMore}
                      className={`w-full text-center py-2 text-sm font-medium ${
                        isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      } transition-colors`}
                    >
                      Load More Activities ({allActivities.length - displayedActivities} remaining)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer isSidebarExpanded={isSidebarExpanded} />
      </div>

      {/* Activity Modal */}
      {showActivityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`w-full max-w-4xl max-h-[95vh] rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          } shadow-2xl overflow-hidden`}>
            
            {/* Modal Header */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              isDarkMode ? 'border-slate-700' : 'border-gray-300'
            }`}>
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  All Activities
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Complete activity history for your institute
                </p>
              </div>
              <button
                onClick={closeModal}
                className={`p-2 rounded-lg hover:bg-gray-100 ${
                  isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Bar */}
            <div className={`px-6 py-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-300'}`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} size={20} />
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } outline-none transition-colors`}
                />
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
              <div className="p-6">
                {filteredActivities.length > 0 ? (
                  <div className="space-y-6">
                    {filteredActivities.map((activity, index) => (
                      <ActivityItem 
                        key={activity.id}
                        activity={activity}
                        showConnector={false}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      No activities found matching your search.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`px-6 py-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-300'}`}>
              <div className="flex justify-between items-center">
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Showing {filteredActivities.length} of {allActivities.length} activities
                </p>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;