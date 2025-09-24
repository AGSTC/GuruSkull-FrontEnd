// StudentDashboard.jsx
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
  Bell,
  Trophy,
  Target,
  CheckCircle
} from 'lucide-react';

const StudentDashboard = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Student specific stats
  const stats = [
    {
      title: 'Overall Attendance',
      value: '92%',
      change: '+2%',
      period: 'vs last month',
      icon: UserCheck,
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Pending Assignments',
      value: '3',
      change: '-2',
      period: 'vs last week',
      icon: ClipboardList,
      trend: 'down',
      color: 'orange'
    },
    {
      title: 'Completed Tasks',
      value: '8',
      change: '+3',
      period: 'this week',
      icon: CheckCircle,
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Average Score',
      value: '87%',
      change: '+5%',
      period: 'vs last test',
      icon: Trophy,
      trend: 'up',
      color: 'purple'
    }
  ];

  // Today's classes
  const todaysClasses = [
    {
      id: 1,
      subject: 'Mathematics',
      teacher: 'Mr. Sharma',
      time: '11:00 AM - 11:50 AM',
      room: 'Room 201',
      status: 'completed'
    },
    {
      id: 2,
      subject: 'Physics',
      teacher: 'Mrs. Gupta',
      time: '12:30 PM - 01:20 PM',
      room: 'Lab 1',
      status: 'ongoing'
    },
    {
      id: 3,
      subject: 'Chemistry',
      teacher: 'Dr. Patel',
      time: '02:00 PM - 02:50 PM',
      room: 'Room 303',
      status: 'upcoming'
    }
  ];

  // Recent announcements
  const recentAnnouncements = [
    {
      id: 1,
      title: 'Physics Lab Session - Tomorrow',
      subject: 'Physics',
      description: 'Physics lab session scheduled for tomorrow at 2:00 PM. Please bring your lab manual and safety goggles.',
      timeAgo: '09:30 AM',
      type: 'Medium',
      tag: 'Physics'
    },
    {
      id: 2,
      title: 'Physics Lab Session - Tomorrow',
      subject: 'Physics',
      description: 'Physics lab session scheduled for tomorrow at 2:00 PM. Please bring your lab manual and safety goggles.',
      timeAgo: '09:30 AM',
      type: 'Medium',
      tag: 'Physics'
    },
    {
      id: 3,
      title: 'Physics Lab Session - Tomorrow',
      subject: 'Physics',
      description: 'Physics lab session scheduled for tomorrow at 2:00 PM. Please bring your lab manual and safety goggles.',
      timeAgo: '09:30 AM',
      type: 'Medium',
      tag: 'Physics'
    },
    {
      id: 4,
      title: 'Physics Lab Session - Tomorrow',
      subject: 'Physics',
      description: 'Physics lab session scheduled for tomorrow at 2:00 PM. Please bring your lab manual and safety goggles.',
      timeAgo: '09:30 AM',
      type: 'Medium',
      tag: 'Physics'
    },
    {
      id: 5,
      title: 'Physics Lab Session - Tomorrow',
      subject: 'Physics',
      description: 'Physics lab session scheduled for tomorrow at 2:00 PM. Please bring your lab manual and safety goggles.',
      timeAgo: '09:30 AM',
      type: 'Medium',
      tag: 'Physics'
    }
  ];

  // Pending assignments
  const pendingAssignments = [
    {
      id: 1,
      title: 'Calculus Problem Set',
      subject: 'Mathematics',
      due: 'Due 2024-01-15',
      status: 'pending',
      color: 'red'
    },
    {
      id: 2,
      title: 'Organic Chemistry Lab Report',
      subject: 'Chemistry',
      due: 'Due 2024-01-20',
      status: 'pending',
      color: 'yellow'
    },
    {
      id: 3,
      title: 'Wave Motion Assignment',
      subject: 'Physics',
      due: 'Due 2024-01-22',
      status: 'pending',
      color: 'green'
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
      case 'ongoing':
        return 'bg-green-100 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getAssignmentStatusColor = (color) => {
    switch (color) {
      case 'red':
        return 'border-l-red-500';
      case 'yellow':
        return 'border-l-yellow-500';
      case 'green':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-500';
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
            
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Dashboard
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Welcome Back, Steve Rogers
              </p>
            </div>
            <div className="text-right">
              <div className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Class 12 - Science
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Student ID: ST2024001
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            
            {/* Recent Announcements */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Announcement
                </h2>
                <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                  View All
                </button>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {recentAnnouncements.map((announcement, index) => (
                  <div key={announcement.id} className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-left">
                        <h4 className={`font-semibold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {announcement.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700`}>
                          {announcement.tag}
                        </span>
                      </div>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {announcement.timeAgo}
                      </span>
                    </div>
                    
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {announcement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Classes */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Today's Classes
                </h2>
              </div>
              
              <div className="space-y-4">
                {todaysClasses.map((classItem, index) => (
                  <div key={classItem.id} className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-left">
                        <h4 className={`font-semibold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {classItem.subject}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {classItem.teacher}
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
                      <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {classItem.room}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className={`mt-8 p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Pending Assignments
              </h2>
              <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pendingAssignments.map((assignment, index) => (
                <div key={assignment.id} className={`p-4 rounded-lg border-l-4 ${getAssignmentStatusColor(assignment.color)} ${
                  isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      assignment.color === 'red' ? 'bg-red-500' : 
                      assignment.color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <h4 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {assignment.title}
                    </h4>
                  </div>
                  
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {assignment.subject}
                  </p>
                  
                  <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {assignment.due}
                  </p>
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

export default StudentDashboard;