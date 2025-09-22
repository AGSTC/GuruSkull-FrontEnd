// TeacherDashboard.jsx
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Users, 
  UserCheck, 
  BookOpen,
  ClipboardList,
  Calendar,
  MessageSquare,
  Clock,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  GraduationCap,
  FileText,
  Bell
} from 'lucide-react';

const TeacherDashboard = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Teacher specific stats
  const stats = [
    {
      title: 'My Students',
      value: '58',
      change: '+5',
      period: 'vs last week',
      icon: Users,
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Classes Today',
      value: '6',
      change: '+1',
      period: 'vs yesterday',
      icon: BookOpen,
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Pending Assignments',
      value: '12',
      change: '-3',
      period: 'vs last week',
      icon: ClipboardList,
      trend: 'down',
      color: 'orange'
    },
    {
      title: 'Average Attendance',
      value: '91.2%',
      change: '+2.8%',
      period: 'vs last week',
      icon: UserCheck,
      trend: 'up',
      color: 'cyan'
    },
    {
      title: 'Messages',
      value: '23',
      change: '+8',
      period: 'vs yesterday',
      icon: MessageSquare,
      trend: 'up',
      color: 'purple'
    },
    {
      title: 'This Week Tests',
      value: '4',
      change: '+1',
      period: 'vs last week',
      icon: FileText,
      trend: 'up',
      color: 'indigo'
    }
  ];

  // Teacher quick actions
  const quickActions = [
    { title: 'Mark Attendance', description: 'Record student attendance', icon: UserCheck, color: 'bg-blue-500' },
    { title: 'Create Assignment', description: 'Assign homework/work', icon: ClipboardList, color: 'bg-orange-500' },
    { title: 'Send Message', description: 'Contact students or parents', icon: MessageSquare, color: 'bg-purple-500' },
    { title: 'Schedule Class', description: 'Plan upcoming lessons', icon: Calendar, color: 'bg-green-500' },
    { title: 'Student Progress', description: 'View performance reports', icon: TrendingUp, color: 'bg-indigo-500' },
    { title: 'Generate Report', description: 'Create progress reports', icon: FileText, color: 'bg-teal-500' }
  ];

  // Today's schedule
  const todaysSchedule = [
    {
      id: 1,
      subject: 'Mathematics',
      class: 'Class 10-A',
      time: '9:00 AM',
      duration: '1 hour',
      students: 28,
      room: 'Room 101',
      status: 'upcoming'
    },
    {
      id: 2,
      subject: 'Physics',
      class: 'Class 12-B',
      time: '10:30 AM',
      duration: '1.5 hours',
      students: 25,
      room: 'Lab 2',
      status: 'active'
    },
    {
      id: 3,
      subject: 'Mathematics',
      class: 'Class 11-A',
      time: '12:30 PM',
      duration: '1 hour',
      students: 30,
      room: 'Room 103',
      status: 'upcoming'
    },
    {
      id: 4,
      subject: 'Doubt Session',
      class: 'Mixed Batch',
      time: '3:30 PM',
      duration: '1 hour',
      students: 15,
      room: 'Room 105',
      status: 'upcoming'
    },
    {
      id: 5,
      subject: 'Physics',
      class: 'Class 12-A',
      time: '5:00 PM',
      duration: '1.5 hours',
      students: 22,
      room: 'Lab 1',
      status: 'upcoming'
    }
  ];

  // Recent messages
  const recentMessages = [
    {
      id: 1,
      from: 'Mrs. Priya Sharma',
      type: 'Parent',
      subject: 'Rahuls Math Progress',
      preview: 'Hello maam, I wanted to discuss Rahuls...',
      timeAgo: '2 mins ago',
      unread: true
    },
    {
      id: 2,
      from: 'Amit Kumar',
      type: 'Student',
      subject: 'Physics Doubt',
      preview: 'Maam, I have some doubts regarding the last chapter...',
      timeAgo: '15 mins ago',
      unread: true
    },
    {
      id: 3,
      from: 'Mr. Vikram Singh',
      type: 'Parent',
      subject: 'Thank You',
      preview: 'Thank you for the extra attention given to...',
      timeAgo: '1 hour ago',
      unread: false
    },
    {
      id: 4,
      from: 'Priya Patel',
      type: 'Student',
      subject: 'Assignment Submission',
      preview: 'Maam, I have submitted my assignment through...',
      timeAgo: '2 hours ago',
      unread: false
    },
    {
      id: 5,
      from: 'Mrs. Gupta',
      type: 'Parent',
      subject: 'Parent-Teacher Meeting',
      preview: 'When is the next parent-teacher meeting...',
      timeAgo: '3 hours ago',
      unread: false
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
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
              Welcome Back, Mr. Sharma! Ready to inspire minds today?
            </p>
          </div>

          {/* Stats Grid - Same as owner but with teacher-specific data */}
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
            
            {/* Quick Actions */}
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

            {/* Today's Schedule */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Today's Schedule
                </h2>
                <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                  View Full Schedule
                </button>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {todaysSchedule.map((classItem, index) => (
                  <div key={classItem.id} className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-left">
                        <h4 className={`font-semibold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {classItem.subject}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {classItem.class}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                        {classItem.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Clock size={12} />
                        {classItem.time}
                      </span>
                      <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Users size={12} />
                        {classItem.students} students
                      </span>
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {classItem.room}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Messages Section */}
          <div className={`mt-8 p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Messages
              </h2>
              <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                Compose New Message
              </button>
            </div>
            
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div key={message.id} className={`flex items-start gap-4 p-4 rounded-lg transition-colors cursor-pointer ${
                  isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                }`}>
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      message.type === 'Parent' ? 'bg-purple-100' : 'bg-green-100'
                    }`}>
                      <div className={`text-sm font-semibold ${
                        message.type === 'Parent' ? 'text-purple-600' : 'text-green-600'
                      }`}>
                        {message.from.charAt(0)}
                      </div>
                    </div>
                    {message.unread && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {message.from}
                      </h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        message.type === 'Parent' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {message.type}
                      </span>
                    </div>
                    <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {message.subject}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {message.preview}
                    </p>
                    <span className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {message.timeAgo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherDashboard;