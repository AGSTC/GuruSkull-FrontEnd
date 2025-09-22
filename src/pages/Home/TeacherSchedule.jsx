import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { ChevronLeft, ChevronRight, Plus, Calendar, Clock, BookOpen } from 'lucide-react';

const TeacherSchedule = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [currentWeek, setCurrentWeek] = useState('Week of 08/09/2025 - 13/09/2025');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const days = [
    { name: 'Monday', date: '9/09' },
    { name: 'Tuesday', date: '9/10' },
    { name: 'Wednesday', date: '9/11' },
    { name: 'Thursday', date: '9/12' },
    { name: 'Friday', date: '9/13' },
    { name: 'Saturday', date: '9/14' }
  ];

  const classes = [
    // Monday
    { day: 0, time: 0, subject: 'Physics', class: 'Class 10-A', room: 'Room 101', duration: 1, color: 'bg-green-200 border-green-300' },
    { day: 0, time: 1, subject: 'Mathematics', class: 'Class 10-C', room: 'Room 205', duration: 1, color: 'bg-blue-200 border-blue-300' },
    { day: 0, time: 3, subject: 'Physics', class: 'Class 9-B', room: 'Room 103', duration: 1, color: 'bg-green-200 border-green-300' },
    { day: 0, time: 6, subject: 'Mathematics', class: 'Class 11-A', room: 'Room 201', duration: 1, color: 'bg-blue-200 border-blue-300' },

    // Tuesday
    { day: 1, time: 2, subject: 'Mathematics', class: 'Class 12-B', room: 'Room 301', duration: 1, color: 'bg-blue-200 border-blue-300' },

    // Wednesday
    { day: 2, time: 0, subject: 'Physics', class: 'Class 11-C', room: 'Room 105', duration: 1, color: 'bg-green-200 border-green-300' },
    { day: 2, time: 2, subject: 'Mathematics', class: 'Class 11-A', room: 'Room 203', duration: 1, color: 'bg-blue-200 border-blue-300' },
    { day: 2, time: 3, subject: 'Physics', class: 'Class 10-B', room: 'Room 102', duration: 1, color: 'bg-green-200 border-green-300' },

    // Thursday
    { day: 3, time: 2, subject: 'Mathematics', class: 'Class 11-A', room: 'Room 204', duration: 1, color: 'bg-blue-200 border-blue-300' },
    { day: 3, time: 4, subject: 'Doubt Session', class: 'All Classes', room: 'Hall A', duration: 1, color: 'bg-purple-200 border-purple-300' },

    // Friday
    { day: 4, time: 1, subject: 'Mathematics', class: 'Class 10-A', room: 'Room 202', duration: 1, color: 'bg-blue-200 border-blue-300' },
    { day: 4, time: 3, subject: 'Test - Physics', class: 'Class 12-A', room: 'Room 301', duration: 1, color: 'bg-yellow-200 border-yellow-300' },
    { day: 4, time: 6, subject: 'Physics', class: 'Class 9-C', room: 'Room 104', duration: 1, color: 'bg-green-200 border-green-300' },
    { day: 4, time: 7, subject: 'Parent Meeting', class: 'Various', room: 'Office', duration: 1, color: 'bg-orange-200 border-orange-300' },
    { day: 4, time: 8, subject: 'Test - Mathematics', class: 'Class 11-B', room: 'Room 205', duration: 1, color: 'bg-blue-200 border-blue-300' },

    // Saturday
    { day: 5, time: 1, subject: 'Extra Classes', class: 'Class 10-B', room: 'Room 106', duration: 1, color: 'bg-indigo-200 border-indigo-300' },
  ];

  const weekStats = {
    totalClasses: 18,
    teachingHours: 27,
    testSessions: 2
  };

  const subjectDistribution = {
    Mathematics: { classes: 8, color: 'bg-blue-500' },
    Physics: { classes: 6, color: 'bg-green-500' },
    'Extra Sessions': { classes: 3, color: 'bg-indigo-500' }
  };

  const quickActions = [
    { title: 'Mark Today\'s Attendance', icon: BookOpen, color: 'bg-blue-500' },
    { title: 'Create Assignment', icon: Plus, color: 'bg-green-500' },
    { title: 'Send Update', icon: Calendar, color: 'bg-purple-500' }
  ];

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="schedule" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header - Same spacing as TeacherDashboard */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Class Schedule
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage your teaching schedule and plan lessons
            </p>
          </div>

          {/* Schedule Container - Same spacing */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          } mb-8`}>
            
            {/* Week Navigation */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button className={`p-2 rounded-lg ${
                  isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}>
                  <ChevronLeft size={20} />
                </button>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentWeek}
                </h3>
                <button className={`p-2 rounded-lg ${
                  isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}>
                  <ChevronRight size={20} />
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors focus:outline-none">
                <Plus size={16} />
                Add Class
              </button>
            </div>

            {/* Schedule Grid */}
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Header Row */}
                <div className="grid grid-cols-7 gap-px bg-gray-300 rounded-t-lg overflow-hidden">
                  <div className={`p-3 text-center font-medium ${
                    isDarkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    Time
                  </div>
                  {days.map((day, index) => (
                    <div key={index} className={`p-3 text-center ${
                      isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                    }`}>
                      <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {day.name}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {day.date}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                <div className="bg-gray-300" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px' }}>
                  {timeSlots.map((time, timeIndex) => (
                    <React.Fragment key={timeIndex}>
                      {/* Time Column */}
                      <div className={`p-3 text-center font-medium border-r ${
                        isDarkMode ? 'bg-slate-800 text-gray-300 border-slate-600' : 'bg-white text-gray-700 border-gray-200'
                      }`}>
                        {time}
                      </div>
                      
                      {/* Day Columns */}
                      {days.map((_, dayIndex) => {
                        const classInSlot = classes.find(c => c.day === dayIndex && c.time === timeIndex);
                        return (
                          <div key={`${timeIndex}-${dayIndex}`} className={`p-2 min-h-16 ${
                            isDarkMode ? 'bg-slate-800' : 'bg-white'
                          }`}>
                            {classInSlot && (
                              <div className={`p-2 rounded-lg border ${classInSlot.color} h-full`}>
                                <div className="text-sm font-semibold text-gray-800 mb-1">
                                  {classInSlot.subject}
                                </div>
                                <div className="text-xs text-gray-600 mb-1">
                                  {classInSlot.class}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {classInSlot.room}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats and Actions - Same grid and spacing */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* This Week Stats */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                This Week
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Classes:</span>
                  <span className={`font-bold text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {weekStats.totalClasses}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Teaching Hours:</span>
                  <span className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {weekStats.teachingHours} hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Test Sessions:</span>
                  <span className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {weekStats.testSessions}
                  </span>
                </div>
              </div>
            </div>

            {/* Subject Distribution */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject Distribution
              </h3>
              <div className="space-y-4">
                {Object.entries(subjectDistribution).map(([subject, data]) => (
                  <div key={subject}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {subject}:
                      </span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {data.classes} classes
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${data.color} h-2 rounded-full`}
                        style={{ width: `${(data.classes / weekStats.totalClasses) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Actions
              </h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg ${action.color} text-white hover:opacity-90 transition-opacity text-left focus:outline-none`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{action.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherSchedule;