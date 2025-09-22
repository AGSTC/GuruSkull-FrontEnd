import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import boyChild from '../../assets/images/student-profile.png'
import girlChild from '../../assets/images/girl.png'

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
  Award,
  Activity,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ParentDashboard = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedChild, setSelectedChild] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Children data
  const children = [
    {
      id: 1,
      name: 'Aarav Sharma',
      class: 'Class 10-A',
      avatar: 'A',
      image: boyChild,
      color: 'bg-blue-500',
      stats: {
        overallPerformance: { value: '92%', color: 'blue', icon: TrendingUp },
        pendingAssignments: { value: '8', color: 'green', icon: BookOpen },
        currentGrade: { value: 'A-', color: 'purple', icon: Award },
        testsDue: { value: '3', color: 'orange', icon: Clock }
      },
      attendanceOverview: {
        overall: '92%',
        thisWeek: '4/5 Present',
        subjects: [
          { name: 'Mathematics', percentage: 95 },
          { name: 'Physics', percentage: 90 },
          { name: 'Chemistry', percentage: 88 },
          { name: 'English', percentage: 96 }
        ]
      },
      upcomingEvents: [
        {
          id: 1,
          title: 'Mathematics Test',
          subject: 'Mathematics',
          date: '25 Dec 24 • 10:00 AM',
          type: 'test',
          status: 'Due',
          icon: 'M',
          color: 'bg-red-100 text-red-600'
        },
        {
          id: 2,
          title: 'Physics Assignment Due',
          subject: 'Physics',
          date: '27 Dec 24 • 11:59 PM',
          type: 'assignment',
          status: 'Assignment',
          icon: 'P',
          color: 'bg-blue-100 text-blue-600'
        },
        {
          id: 3,
          title: 'Parent-Teacher Meeting',
          subject: 'General',
          date: '30 Dec 24 • 2:00 PM',
          type: 'meeting',
          status: 'Meeting',
          icon: 'A',
          color: 'bg-purple-100 text-purple-600'
        },
        {
          id: 4,
          title: 'Chemistry Lab Session',
          subject: 'Chemistry',
          date: '02 Jan 25 • 10:00 AM',
          type: 'class',
          status: 'Class',
          icon: 'C',
          color: 'bg-green-100 text-green-600'
        }
      ],
      recentActivities: [
        {
          id: 1,
          title: 'Math Assignment Submitted',
          subject: 'Mathematics',
          time: '2 hours ago',
          status: 'Completed',
          icon: 'S',
          color: 'bg-green-100 text-green-600'
        },
        {
          id: 2,
          title: 'Physics Test Completed',
          subject: 'Physics',
          time: '1 day ago',
          status: 'Completed',
          icon: 'P',
          color: 'bg-green-100 text-green-600'
        },
        {
          id: 3,
          title: 'Chemistry Lab Report Due',
          subject: 'Chemistry',
          time: '3 days ago',
          status: 'Pending',
          icon: 'C',
          color: 'bg-orange-100 text-orange-600'
        },
        {
          id: 4,
          title: 'Parent-Teacher Meeting Scheduled',
          subject: 'General',
          time: '1 week ago',
          status: 'Info',
          icon: 'A',
          color: 'bg-blue-100 text-blue-600'
        }
      ]
    },
    {
      id: 2,
      name: 'Priya Sharma',
      class: 'Class 8-B',
      avatar: 'P',
      image: girlChild,
      color: 'bg-green-500',
      stats: {
        overallPerformance: { value: '88%', color: 'blue', icon: TrendingUp },
        pendingAssignments: { value: '5', color: 'green', icon: BookOpen },
        currentGrade: { value: 'B+', color: 'purple', icon: Award },
        testsDue: { value: '2', color: 'orange', icon: Clock }
      },
      attendanceOverview: {
        overall: '94%',
        thisWeek: '5/5 Present',
        subjects: [
          { name: 'Mathematics', percentage: 92 },
          { name: 'Science', percentage: 96 },
          { name: 'English', percentage: 90 },
          { name: 'Social Studies', percentage: 88 }
        ]
      },
      upcomingEvents: [
        {
          id: 1,
          title: 'Science Test',
          subject: 'Science',
          date: '26 Dec 24 • 9:00 AM',
          type: 'test',
          status: 'Due',
          icon: 'S',
          color: 'bg-red-100 text-red-600'
        },
        {
          id: 2,
          title: 'Math Assignment Due',
          subject: 'Mathematics',
          date: '28 Dec 24 • 11:59 PM',
          type: 'assignment',
          status: 'Assignment',
          icon: 'M',
          color: 'bg-blue-100 text-blue-600'
        },
        {
          id: 3,
          title: 'Art Competition',
          subject: 'Art',
          date: '05 Jan 25 • 10:00 AM',
          type: 'event',
          status: 'Event',
          icon: 'A',
          color: 'bg-purple-100 text-purple-600'
        }
      ],
      recentActivities: [
        {
          id: 1,
          title: 'English Essay Submitted',
          subject: 'English',
          time: '1 hour ago',
          status: 'Completed',
          icon: 'E',
          color: 'bg-green-100 text-green-600'
        },
        {
          id: 2,
          title: 'Science Project Completed',
          subject: 'Science',
          time: '2 days ago',
          status: 'Completed',
          icon: 'S',
          color: 'bg-green-100 text-green-600'
        },
        {
          id: 3,
          title: 'Math Quiz - Scored 95%',
          subject: 'Mathematics',
          time: '4 days ago',
          status: 'Completed',
          icon: 'M',
          color: 'bg-green-100 text-green-600'
        }
      ]
    }
  ];

  const currentChild = children[selectedChild];

  const getStatColor = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-500' },
      green: { bg: 'bg-green-500', text: 'text-green-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-500' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-500' }
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
            
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Dashboard
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Welcome Back, Wolverine. Monitor your child's academic progress and activities
            </p>
          </div>

          {/* Select Child */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Select Child
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {children.map((child, index) => (
                <div
                  key={child.id}
                  onClick={() => setSelectedChild(index)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedChild === index
                      ? 'border-blue-500 bg-blue-50'
                      : isDarkMode 
                        ? 'border-slate-600 hover:border-slate-500 bg-slate-700' 
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        onError={(e) => {
                          // Fallback to avatar circle if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className={`w-12 h-12 rounded-full hidden items-center justify-center text-white text-lg font-bold ${child.color}`}
                      >
                        {child.avatar}
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        selectedChild === index ? 'text-blue-700' : isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {child.name}
                      </h3>
                      <p className={`text-sm ${
                        selectedChild === index ? 'text-blue-600' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {child.class}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(currentChild.stats).map(([key, stat], index) => {
              const Icon = stat.icon;
              const colors = getStatColor(stat.color);
              const titles = {
                overallPerformance: 'Overall Performance',
                pendingAssignments: 'Pending Assignments',
                currentGrade: 'Current Grade', 
                testsDue: 'Tests Due'
              };

              return (
                <div key={key} className={`p-6 rounded-2xl ${colors.bg} text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-medium mb-1">
                        {titles[key]}
                      </p>
                      <p className="text-3xl font-bold">
                        {stat.value}
                      </p>
                      <p className="text-white/80 text-xs mt-1">
                        {key === 'pendingAssignments' ? 'to complete' : 
                         key === 'testsDue' ? 'this week' : 
                         key === 'overallPerformance' ? 'this semester' : 'current'}
                      </p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            
            {/* Attendance Overview */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Attendance Overview
                </h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-500">
                    {currentChild.attendanceOverview.overall}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Overall
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  This Week
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-full bg-green-100 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {currentChild.attendanceOverview.thisWeek}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Subject-wise Attendance
                </div>
                {currentChild.attendanceOverview.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {subject.name}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${subject.percentage}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium w-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {subject.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Upcoming Events
                </h2>
                <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                  View Calendar
                </button>
              </div>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {currentChild.upcomingEvents.map((event) => (
                  <div key={event.id} className={`flex items-start gap-4 p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${event.color}`}>
                      {event.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {event.title}
                      </h4>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {event.date}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'Due' ? 'bg-red-100 text-red-700' :
                      event.status === 'Assignment' ? 'bg-blue-100 text-blue-700' :
                      event.status === 'Meeting' ? 'bg-purple-100 text-purple-700' :
                      event.status === 'Class' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Upcoming Events
              </h2>
              <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentChild.recentActivities.map((activity) => (
                <div key={activity.id} className={`p-4 rounded-lg border ${
                  isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${activity.color}`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.title}
                      </h4>
                      <p className={`text-xs mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {activity.subject}
                      </p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      activity.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {activity.status}
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

export default ParentDashboard;