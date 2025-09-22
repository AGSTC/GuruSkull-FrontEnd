import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

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
    { title: 'Add New Student', description: 'Register a new student', icon: UserPlus, color: 'bg-blue-500' },
    { title: 'Schedule Class', description: 'Create new class schedule', icon: Calendar, color: 'bg-green-500' },
    { title: 'Send Notification', description: 'Notify students & parents', icon: Bell, color: 'bg-purple-500' },
    { title: 'Generate Report', description: 'Create attendance/fee reports', icon: FileText, color: 'bg-orange-500' },
    { title: 'Manage Fees', description: 'Update fee structure', icon: DollarSign, color: 'bg-teal-500' },
    { title: 'View Analytics', description: 'Performance insights', icon: BarChart3, color: 'bg-indigo-500' }
  ];

  const recentActivities = [
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

  return (
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
            
            {/* Quick Actions - Matches your first image exactly */}
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
                      className={`${action.color} text-white p-4 rounded-xl text-left transition-all hover:scale-105 hover:shadow-lg group relative`}
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
                <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                  View All Activity
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.iconBg}`}>
                        <div className={`w-5 h-5 rounded-full ${activity.iconColor.replace('text-', 'bg-')}`} />
                      </div>
                      {index !== recentActivities.length - 1 && (
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
                          <Users size={12} />
                          {activity.user}
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                          {activity.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`}>
                <button className={`w-full text-center py-2 text-sm font-medium ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } transition-colors`}>
                  Load More Activities
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default Dashboard;