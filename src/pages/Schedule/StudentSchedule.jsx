// StudentSchedule.jsx
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  ChevronDown
} from 'lucide-react';

const StudentSchedule = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [showWeekDropdown, setShowWeekDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Multiple weeks schedule data (keeping your exact same data)
  const weeklySchedules = [
    {
      week: 'Week of 08/09/2025 - 13/09/2025',
      schedule: [
        {
          time: '08:00 AM',
          monday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          tuesday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          wednesday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          thursday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          friday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          saturday: { subject: 'Test Series', teacher: 'Multiple Teachers', room: 'Exam Hall', color: 'bg-red-500' }
        },
        {
          time: '09:30 AM',
          monday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          tuesday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          wednesday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          thursday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          friday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          saturday: { subject: 'Test Series', teacher: 'Multiple Teachers', room: 'Exam Hall', color: 'bg-red-500' }
        },
        {
          time: '11:00 AM',
          monday: null,
          tuesday: null,
          wednesday: null,
          thursday: null,
          friday: null,
          saturday: null
        },
        {
          time: '12:30 PM',
          monday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          tuesday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          wednesday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          thursday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          friday: { subject: 'Computer Science', teacher: 'Mr. Jain', room: 'Lab 3', color: 'bg-cyan-500' },
          saturday: { subject: 'Doubt Clearing', teacher: 'All Teachers', room: 'Various', color: 'bg-yellow-500' }
        },
        {
          time: '02:00 PM',
          monday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          tuesday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          wednesday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          thursday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          friday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          saturday: { subject: 'Extra Classes', teacher: 'As Required', room: 'Various', color: 'bg-teal-500' }
        },
        {
          time: '03:30 PM',
          monday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          tuesday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          wednesday: { subject: 'Computer Science', teacher: 'Mr. Jain', room: 'Lab 3', color: 'bg-cyan-500' },
          thursday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          friday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          saturday: null
        },
        {
          time: '05:00 PM',
          monday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          tuesday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          wednesday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          thursday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          friday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          saturday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' }
        }
      ]
    },
    {
      week: 'Week of 15/09/2025 - 20/09/2025',
      schedule: [
        {
          time: '08:00 AM',
          monday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          tuesday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          wednesday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          thursday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          friday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          saturday: { subject: 'Revision', teacher: 'Multiple Teachers', room: 'Exam Hall', color: 'bg-indigo-500' }
        },
        {
          time: '09:30 AM',
          monday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          tuesday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          wednesday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          thursday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          friday: { subject: 'Computer Science', teacher: 'Mr. Jain', room: 'Lab 3', color: 'bg-cyan-500' },
          saturday: { subject: 'Revision', teacher: 'Multiple Teachers', room: 'Exam Hall', color: 'bg-indigo-500' }
        },
        {
          time: '11:00 AM',
          monday: null,
          tuesday: null,
          wednesday: null,
          thursday: null,
          friday: null,
          saturday: null
        },
        {
          time: '12:30 PM',
          monday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          tuesday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          wednesday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          thursday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          friday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          saturday: { subject: 'Q&A Session', teacher: 'All Teachers', room: 'Auditorium', color: 'bg-yellow-500' }
        },
        {
          time: '02:00 PM',
          monday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          tuesday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          wednesday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          thursday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          friday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          saturday: { subject: 'Special Workshop', teacher: 'Guest Speaker', room: 'Auditorium', color: 'bg-teal-500' }
        },
        {
          time: '03:30 PM',
          monday: { subject: 'Computer Science', teacher: 'Mr. Jain', room: 'Lab 3', color: 'bg-cyan-500' },
          tuesday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          wednesday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          thursday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          friday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          saturday: null
        },
        {
          time: '05:00 PM',
          monday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          tuesday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          wednesday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          thursday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          friday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          saturday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' }
        }
      ]
    },
    {
      week: 'Week of 22/09/2025 - 27/09/2025',
      schedule: [
        {
          time: '08:00 AM',
          monday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          tuesday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          wednesday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          thursday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          friday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          saturday: { subject: 'Mock Test', teacher: 'Multiple Teachers', room: 'Exam Hall', color: 'bg-red-500' }
        },
        {
          time: '09:30 AM',
          monday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          tuesday: { subject: 'Computer Science', teacher: 'Mr. Jain', room: 'Lab 3', color: 'bg-cyan-500' },
          wednesday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          thursday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          friday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          saturday: { subject: 'Mock Test', teacher: 'Multiple Teachers', room: 'Exam Hall', color: 'bg-red-500' }
        },
        {
          time: '11:00 AM',
          monday: null,
          tuesday: null,
          wednesday: null,
          thursday: null,
          friday: null,
          saturday: null
        },
        {
          time: '12:30 PM',
          monday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          tuesday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          wednesday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          thursday: { subject: 'Computer Science', teacher: 'Mr. Jain', room: 'Lab 3', color: 'bg-cyan-500' },
          friday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          saturday: { subject: 'Test Review', teacher: 'All Teachers', room: 'Various', color: 'bg-yellow-500' }
        },
        {
          time: '02:00 PM',
          monday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          tuesday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          wednesday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          thursday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          friday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          saturday: { subject: 'Project Work', teacher: 'As Required', room: 'Various', color: 'bg-teal-500' }
        },
        {
          time: '03:30 PM',
          monday: { subject: 'Chemistry', teacher: 'Dr. Patel', room: 'Room 304', color: 'bg-orange-500' },
          tuesday: { subject: 'English', teacher: 'Ms. Singh', room: 'Room 305', color: 'bg-purple-500' },
          wednesday: { subject: 'Physics', teacher: 'Mrs. Gupta', room: 'Lab 1', color: 'bg-green-500' },
          thursday: { subject: 'Mathematics', teacher: 'Mr. Sharma', room: 'Room 201', color: 'bg-blue-500' },
          friday: { subject: 'Biology', teacher: 'Dr. Kumar', room: 'Lab 2', color: 'bg-pink-500' },
          saturday: null
        },
        {
          time: '05:00 PM',
          monday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          tuesday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          wednesday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          thursday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          friday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' },
          saturday: { subject: 'Study Hall', teacher: 'Library', room: '', color: 'bg-gray-500' }
        }
      ]
    }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentWeek = weeklySchedules[currentWeekIndex];

  const goToPreviousWeek = () => {
    setCurrentWeekIndex(prev => Math.max(prev - 1, 0));
  };

  const goToNextWeek = () => {
    setCurrentWeekIndex(prev => Math.min(prev + 1, weeklySchedules.length - 1));
  };

  const selectWeek = (index) => {
    setCurrentWeekIndex(index);
    setShowWeekDropdown(false);
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="schedule" />

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
            
          {/* Header */}
          <div className="text-left mb-4 md:mb-6 lg:mb-8">
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Class Schedule
            </h1>
            <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage your teaching schedule and plan lessons
            </p>
          </div>

          {/* Week Navigation */}
          <div className={`mb-6 md:mb-8 p-3 md:p-4 rounded-xl md:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex items-center justify-between">
              <button 
                onClick={goToPreviousWeek}
                disabled={currentWeekIndex === 0}
                className={`p-2 rounded-lg transition-all ${
                  currentWeekIndex === 0 
                    ? 'opacity-50 cursor-not-allowed' 
                    : isDarkMode 
                      ? 'hover:bg-slate-700' 
                      : 'hover:bg-gray-100'
                }`}
              >
                <ChevronLeft size={16} className="md:w-5 md:h-5" />
              </button>
              
              <div className="flex items-center gap-2 md:gap-3 relative">
                <Calendar size={16} className={`md:w-5 md:h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
                <div className="relative">
                  <button
                    onClick={() => setShowWeekDropdown(!showWeekDropdown)}
                    className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-lg font-semibold transition-all text-sm md:text-base ${
                      isDarkMode 
                        ? 'text-white hover:bg-slate-700' 
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xs md:text-sm">{currentWeek.week}</span>
                    <ChevronDown size={14} className={`md:w-4 md:h-4 transition-transform ${showWeekDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Week Dropdown */}
                  {showWeekDropdown && (
                    <div className={`absolute top-full left-0 mt-1 w-48 md:w-64 rounded-lg border shadow-lg z-10 ${
                      isDarkMode 
                        ? 'bg-slate-800 border-slate-700' 
                        : 'bg-white border-gray-300'
                    }`}>
                      {weeklySchedules.map((week, index) => (
                        <button
                          key={index}
                          onClick={() => selectWeek(index)}
                          className={`w-full text-left px-3 py-2 md:px-4 md:py-3 transition-all text-xs md:text-sm ${
                            index === currentWeekIndex
                              ? isDarkMode
                                ? 'bg-blue-600 text-white'
                                : 'bg-blue-500 text-white'
                              : isDarkMode
                                ? 'hover:bg-slate-700 text-white'
                                : 'hover:bg-gray-100 text-gray-900'
                          } ${index === 0 ? 'rounded-t-lg' : ''} ${
                            index === weeklySchedules.length - 1 ? 'rounded-b-lg' : ''
                          }`}
                        >
                          {week.week}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <button 
                onClick={goToNextWeek}
                disabled={currentWeekIndex === weeklySchedules.length - 1}
                className={`p-2 rounded-lg transition-all ${
                  currentWeekIndex === weeklySchedules.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : isDarkMode
                      ? 'hover:bg-slate-700'
                      : 'hover:bg-gray-100'
                }`}
              >
                <ChevronRight size={16} className="md:w-5 md:h-5" />
              </button>
            </div>

            {/* Week Progress Indicator */}
            <div className="flex justify-center mt-3 md:mt-4">
              <div className="flex gap-1 md:gap-2">
                {weeklySchedules.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectWeek(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                      index === currentWeekIndex
                        ? isDarkMode
                          ? 'bg-blue-400'
                          : 'bg-blue-500'
                        : isDarkMode
                          ? 'bg-slate-600 hover:bg-slate-500'
                          : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Schedule Grid - Horizontal scroll on mobile */}
          <div className="overflow-x-auto">
            <div className={`min-w-[800px] rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              
              {/* Header Row */}
              <div className={`grid grid-cols-7 border-b ${
                isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-300 bg-gray-50'
              }`}>
                <div className={`p-3 md:p-4 font-semibold text-center text-sm md:text-base ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Time
                </div>
                {days.map((day) => (
                  <div key={day} className={`p-3 md:p-4 font-semibold text-center text-sm md:text-base ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {day}
                  </div>
                ))}
              </div>

              {/* Schedule Rows */}
              {currentWeek.schedule.map((timeSlot, index) => (
                <div key={index} className={`grid grid-cols-7 border-b ${
                  isDarkMode ? 'border-slate-600' : 'border-gray-200'
                }`}>
                  {/* Time Column */}
                  <div className={`p-3 md:p-4 font-medium text-center text-sm md:text-base ${
                    isDarkMode ? 'text-white bg-slate-700' : 'text-gray-900 bg-gray-50'
                  }`}>
                    {timeSlot.time}
                  </div>
                  
                  {/* Day Columns */}
                  {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => (
                    <div key={day} className="p-2 md:p-3 min-h-[80px] md:min-h-[100px] relative">
                      {timeSlot[day] ? (
                        <div className={`${timeSlot[day].color} text-white p-2 md:p-3 rounded-lg h-full text-left shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
                          <div className="font-semibold text-xs md:text-sm mb-1">
                            {timeSlot[day].subject}
                          </div>
                          <div className="text-xs opacity-90 mb-1">
                            {timeSlot[day].teacher}
                          </div>
                          {timeSlot[day].room && (
                            <div className="text-xs opacity-80">
                              {timeSlot[day].room}
                            </div>
                          )}
                        </div>
                      ) : timeSlot.time === '11:00 AM' ? (
                        <div className={`${
                          isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                        } p-2 md:p-3 rounded-lg h-full flex items-center justify-center text-xs md:text-sm font-medium`}>
                          Break
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Subject Legend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {[
                { subject: 'Mathematics', color: 'bg-blue-500' },
                { subject: 'Physics', color: 'bg-green-500' },
                { subject: 'Chemistry', color: 'bg-orange-500' },
                { subject: 'Biology', color: 'bg-pink-500' },
                { subject: 'English', color: 'bg-purple-500' },
                { subject: 'Computer Science', color: 'bg-cyan-500' },
                { subject: 'Test Series', color: 'bg-red-500' },
                { subject: 'Revision', color: 'bg-indigo-500' }
              ].map((item) => (
                <div key={item.subject} className="flex items-center gap-2 md:gap-3">
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded ${item.color}`}></div>
                  <span className={`text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.subject}
                  </span>
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

export default StudentSchedule;