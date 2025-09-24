// StudentAttendance.jsx
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  UserCheck, 
  Users,
  Calendar,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Coffee
} from 'lucide-react';

const StudentAttendance = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('September 2025');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Attendance stats
  const attendanceStats = [
    {
      title: 'Overall Attendance',
      value: '92%',
      icon: UserCheck,
      color: 'blue'
    },
    {
      title: 'Classes Attended',
      value: '144',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Days Present',
      value: '12',
      icon: Calendar,
      color: 'purple'
    },
    {
      title: 'Attendance Rate',
      value: '92%',
      icon: TrendingUp,
      color: 'cyan'
    }
  ];

  // Subject-wise attendance
  const subjectAttendance = [
    {
      id: 1,
      subject: 'Mathematics',
      teacher: 'Mr. Sharma',
      attendance: '94%',
      present: 25,
      absent: 2,
      color: 'blue',
      lastAttendance: 'Sep 20, 2025',
      status: 'Missed 1'
    },
    {
      id: 2,
      subject: 'Physics', 
      teacher: 'Mrs. Gupta',
      attendance: '92%',
      present: 23,
      absent: 2,
      color: 'green',
      lastAttendance: 'Sep 19, 2025',
      status: 'Missed 1'
    },
    {
      id: 3,
      subject: 'Chemistry',
      teacher: 'Dr. Patel',
      attendance: '90%',
      present: 22,
      absent: 3,
      color: 'orange',
      lastAttendance: 'Sep 18, 2025',
      status: 'Missed 1'
    },
    {
      id: 4,
      subject: 'Biology',
      teacher: 'Dr. Kumar',
      attendance: '92%',
      present: 24,
      absent: 2,
      color: 'pink',
      lastAttendance: 'Sep 17, 2025',
      status: 'Missed 1'
    },
    {
      id: 5,
      subject: 'English',
      teacher: 'Ms. Singh',
      attendance: '92%',
      present: 23,
      absent: 2,
      color: 'purple',
      lastAttendance: 'Sep 20, 2025',
      status: 'Missed 1'
    },
    {
      id: 6,
      subject: 'Computer Science',
      teacher: 'Mr. Jain',
      attendance: '94%',
      present: 16,
      absent: 1,
      color: 'cyan',
      lastAttendance: 'Sep 16, 2025',
      status: 'Missed 1'
    }
  ];

  // Calendar data for September 2025
  const calendarData = [
    // Week 1
    [null, 1, 2, 3, 4, 5, 6],
    // Week 2  
    [7, 8, 9, 10, 11, 12, 13],
    // Week 3
    [14, 15, 16, 17, 18, 19, 20],
    // Week 4
    [21, 22, 23, 24, 25, 26, 27],
    // Week 5
    [28, 29, 30, null, null, null, null]
  ];

  // Attendance status for each day
  const attendanceStatus = {
    1: 'present', 2: 'present', 3: 'present', 4: 'present', 5: 'present', 
    7: 'present', 8: 'present', 9: 'present', 10: 'present', 11: 'present', 12: 'present',
    14: 'present', 15: 'absent', 16: 'present', 17: 'present', 18: 'present', 19: 'present', 20: 'present',
    21: 'present', 22: 'present', 23: 'present', 24: 'late', 25: 'present', 26: 'present', 27: 'present',
    28: 'present', 29: 'present', 30: 'present'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-500';
      case 'absent':
        return 'bg-red-500';
      case 'late':
        return 'bg-yellow-500';
      case 'holiday':
        return 'bg-gray-400';
      default:
        return 'bg-gray-200';
    }
  };

  const getSubjectColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', bgLight: 'bg-blue-100' },
      green: { bg: 'bg-green-500', text: 'text-green-600', bgLight: 'bg-green-100' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', bgLight: 'bg-orange-100' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-600', bgLight: 'bg-pink-100' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', bgLight: 'bg-purple-100' },
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', bgLight: 'bg-cyan-100' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getStatColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600' },
      purple: { iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
      cyan: { iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="attendance" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
            
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                My Attendance
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Track your class attendance record
              </p>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Overall Attendance
              </div>
              <div className="text-4xl font-bold text-green-500">
                92%
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {attendanceStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = getStatColorClasses(stat.color);
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
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Attendance Trend Chart Placeholder */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Attendance Trend
              </h2>
              
              {/* Chart placeholder */}
              <div className={`h-64 rounded-lg flex items-center justify-center ${
                isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
              }`}>
                <div className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <TrendingUp size={48} className="mx-auto mb-2" />
                  <p>Attendance trend chart would go here</p>
                  <p className="text-sm mt-1">Showing consistent 90%+ attendance</p>
                </div>
              </div>
            </div>

            {/* Subject-wise Attendance */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject-wise Attendance
              </h2>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {subjectAttendance.map((subject) => {
                  const colorClasses = getSubjectColorClasses(subject.color);
                  return (
                    <div key={subject.id} className={`p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${colorClasses.bg}`}></div>
                          <div className="text-left">
                            <h4 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {subject.subject}
                            </h4>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {subject.teacher}
                            </p>
                          </div>
                        </div>
                        <div className={`text-right`}>
                          <div className={`font-bold text-lg ${colorClasses.text}`}>
                            {subject.attendance}
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className={`w-full bg-gray-200 rounded-full h-2 mb-2`}>
                        <div 
                          className={`${colorClasses.bg} h-2 rounded-full`}
                          style={{ width: subject.attendance }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Attendance {subject.lastAttendance}
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {subject.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Attendance Calendar */}
          <div className={`mt-8 p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Attendance Calendar
              </h2>
              <div className="flex items-center gap-4">
                <button className={`p-2 rounded-lg ${
                  isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}>
                  <ChevronLeft size={20} className={isDarkMode ? 'text-white' : 'text-gray-600'} />
                </button>
                <span className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentMonth}
                </span>
                <button className={`p-2 rounded-lg ${
                  isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}>
                  <ChevronRight size={20} className={isDarkMode ? 'text-white' : 'text-gray-600'} />
                </button>
              </div>
            </div>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {/* Day headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className={`p-3 text-center font-semibold ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {calendarData.flat().map((date, index) => (
                <div key={index} className={`relative p-3 text-center min-h-[60px] ${
                  date ? 'cursor-pointer hover:bg-gray-100 rounded-lg' : ''
                } ${isDarkMode && date ? 'hover:bg-slate-700' : ''}`}>
                  {date && (
                    <>
                      <div className={`text-sm font-medium mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {date}
                      </div>
                      {attendanceStatus[date] && (
                        <div className={`w-4 h-4 rounded-full mx-auto ${
                          getStatusColor(attendanceStatus[date])
                        }`}></div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Present
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Absent
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Late
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Holiday
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default StudentAttendance;