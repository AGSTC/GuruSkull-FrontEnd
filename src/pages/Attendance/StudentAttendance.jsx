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
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1)); // September 2025

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Function to get month name
  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Function to navigate months
  const navigateMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
  };

  // Function to get calendar data for current month
  const getCalendarData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday
    
    // Create calendar grid
    const calendar = [];
    let week = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      week.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= numDays; day++) {
      week.push(day);
      
      // If week is complete (7 days) or it's the last day, push week and start new one
      if (week.length === 7 || day === numDays) {
        // Fill remaining cells with null if needed
        while (week.length < 7) {
          week.push(null);
        }
        calendar.push([...week]);
        week = [];
      }
    }
    
    return calendar;
  };

  // Function to get attendance data for current month
  const getMonthAttendanceData = (date) => {
    const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
    
    // Sample attendance data for different months
    const attendanceData = {
      '2025-8': { // September 2025
        1: 'present', 2: 'present', 3: 'present', 4: 'present', 5: 'present', 
        7: 'present', 8: 'present', 9: 'present', 10: 'present', 11: 'present', 12: 'present',
        14: 'present', 15: 'absent', 16: 'present', 17: 'present', 18: 'present', 19: 'present', 20: 'present',
        21: 'present', 22: 'present', 23: 'present', 24: 'late', 25: 'present', 26: 'present', 27: 'present',
        28: 'present', 29: 'present', 30: 'present'
      },
      '2025-7': { // August 2025
        1: 'present', 2: 'present', 3: 'holiday', 4: 'holiday', 5: 'present',
        6: 'present', 7: 'present', 8: 'present', 9: 'present', 10: 'holiday',
        12: 'present', 13: 'present', 14: 'present', 15: 'holiday', 16: 'present',
        17: 'holiday', 18: 'holiday', 19: 'present', 20: 'present', 21: 'present',
        22: 'present', 23: 'present', 24: 'holiday', 25: 'holiday', 26: 'absent',
        27: 'present', 28: 'present', 29: 'present', 30: 'present', 31: 'holiday'
      },
      '2025-9': { // October 2025
        1: 'present', 2: 'holiday', 3: 'present', 4: 'holiday', 5: 'holiday',
        6: 'present', 7: 'present', 8: 'present', 9: 'present', 10: 'present',
        11: 'holiday', 12: 'holiday', 13: 'present', 14: 'present', 15: 'present',
        16: 'present', 17: 'present', 18: 'holiday', 19: 'holiday', 20: 'present',
        21: 'present', 22: 'present', 23: 'present', 24: 'present', 25: 'holiday',
        26: 'holiday', 27: 'present', 28: 'present', 29: 'present', 30: 'present', 31: 'present'
      }
    };

    return attendanceData[monthKey] || {};
  };

  // Function to get monthly stats based on current month
  const getMonthlyStats = (date) => {
    const attendanceData = getMonthAttendanceData(date);
    const totalDays = Object.keys(attendanceData).length;
    const presentDays = Object.values(attendanceData).filter(status => status === 'present').length;
    const lateDays = Object.values(attendanceData).filter(status => status === 'late').length;
    const absentDays = Object.values(attendanceData).filter(status => status === 'absent').length;
    
    const attendanceRate = totalDays > 0 ? Math.round(((presentDays + lateDays) / totalDays) * 100) : 0;
    const classesAttended = presentDays + lateDays;
    
    return {
      attendanceRate,
      classesAttended,
      presentDays,
      absentDays,
      totalDays
    };
  };

  // Get current month data
  const calendarData = getCalendarData(currentDate);
  const attendanceStatus = getMonthAttendanceData(currentDate);
  const monthlyStats = getMonthlyStats(currentDate);

  // Update attendance stats with current month data
  const attendanceStats = [
    {
      title: 'Monthly Attendance',
      value: `${monthlyStats.attendanceRate}%`,
      icon: UserCheck,
      color: 'blue'
    },
    {
      title: 'Classes Attended',
      value: monthlyStats.classesAttended.toString(),
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Days Present',
      value: monthlyStats.presentDays.toString(),
      icon: Calendar,
      color: 'purple'
    },
    {
      title: 'Days Absent',
      value: monthlyStats.absentDays.toString(),
      icon: XCircle,
      color: 'red'
    }
  ];

  // Subject-wise attendance (can be updated per month if needed)
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
      cyan: { iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600' },
      red: { iconBg: 'bg-red-100', iconColor: 'text-red-600' }
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

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
            
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 lg:mb-8 gap-3 sm:gap-0">
            <div className="text-left">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                My Attendance
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Track your class attendance record
              </p>
            </div>
            <div className="text-left sm:text-right">
              <div className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Overall Attendance
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500">
                92%
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
            {attendanceStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = getStatColorClasses(stat.color);
              return (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700' 
                      : 'bg-white border-gray-300 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="text-left">
                      <h3 className={`text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.title}
                      </h3>
                      <p className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${colorClasses.iconBg}`}>
                      <Icon className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${colorClasses.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            
            {/* Attendance Trend Chart Placeholder */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Attendance Trend
              </h2>
              
              {/* Chart placeholder */}
              <div className={`h-48 md:h-64 rounded-lg flex items-center justify-center ${
                isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
              }`}>
                <div className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <TrendingUp size={32} className="md:w-12 md:h-12 mx-auto mb-2" />
                  <p className="text-xs md:text-sm">Attendance trend chart would go here</p>
                  <p className="text-xs mt-1">Showing {monthlyStats.attendanceRate}% attendance for {getMonthName(currentDate)}</p>
                </div>
              </div>
            </div>

            {/* Subject-wise Attendance */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject-wise Attendance
              </h2>
              
              <div className="space-y-3 md:space-y-4 max-h-64 md:max-h-80 overflow-y-auto">
                {subjectAttendance.map((subject) => {
                  const colorClasses = getSubjectColorClasses(subject.color);
                  return (
                    <div key={subject.id} className={`p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${colorClasses.bg}`}></div>
                          <div className="text-left">
                            <h4 className={`font-semibold text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {subject.subject}
                            </h4>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {subject.teacher}
                            </p>
                          </div>
                        </div>
                        <div className={`text-right`}>
                          <div className={`font-bold text-base md:text-lg ${colorClasses.text}`}>
                            {subject.attendance}
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className={`w-full bg-gray-200 rounded-full h-1 md:h-2 mb-2`}>
                        <div 
                          className={`${colorClasses.bg} h-1 md:h-2 rounded-full`}
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
          <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className={`text-lg md:text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Attendance Calendar
              </h2>
              <div className="flex items-center gap-2 md:gap-4">
                <button 
                  onClick={() => navigateMonth(-1)}
                  className={`p-1 md:p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-slate-700 text-white' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <ChevronLeft size={16} className="md:w-5 md:h-5" />
                </button>
                <span className={`text-base md:text-lg font-semibold min-w-[140px] md:min-w-[180px] text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {getMonthName(currentDate)}
                </span>
                <button 
                  onClick={() => navigateMonth(1)}
                  className={`p-1 md:p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-slate-700 text-white' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <ChevronRight size={16} className="md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-1 mb-3 md:mb-4">
              {/* Day headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className={`p-2 md:p-3 text-center font-semibold text-xs md:text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {calendarData.flat().map((date, index) => (
                <div key={index} className={`relative p-1 md:p-2 text-center min-h-[40px] md:min-h-[60px] ${
                  date ? 'cursor-pointer hover:bg-gray-100 rounded-lg' : ''
                } ${isDarkMode && date ? 'hover:bg-slate-700' : ''}`}>
                  {date && (
                    <>
                      <div className={`text-xs md:text-sm font-medium mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {date}
                      </div>
                      {attendanceStatus[date] && (
                        <div className={`w-2 h-2 md:w-4 md:h-4 rounded-full mx-auto ${
                          getStatusColor(attendanceStatus[date])
                        }`}></div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-3 md:pt-4 border-t border-gray-300">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
                <span className={`text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Present
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-4 md:h-4 bg-red-500 rounded-full"></div>
                <span className={`text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Absent
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-4 md:h-4 bg-yellow-500 rounded-full"></div>
                <span className={`text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Late
                </span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-4 md:h-4 bg-gray-400 rounded-full"></div>
                <span className={`text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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