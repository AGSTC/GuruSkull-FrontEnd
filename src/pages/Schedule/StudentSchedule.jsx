// StudentSchedule.jsx
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  ChevronLeft, 
  ChevronRight,
  Calendar
} from 'lucide-react';

const StudentSchedule = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Weekly schedule data
  const weeklySchedule = [
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
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentWeek = 'Week of 08/09/2025 - 13/09/2025';

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
            
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Class Schedule
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage your teaching schedule and plan lessons
            </p>
          </div>

          {/* Week Navigation */}
          <div className={`mb-8 p-4 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex items-center justify-between">
              <button className={`p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
              }`}>
                <ChevronLeft size={20} className={isDarkMode ? 'text-white' : 'text-gray-600'} />
              </button>
              
              <div className="flex items-center gap-3">
                <Calendar size={20} className={isDarkMode ? 'text-white' : 'text-gray-600'} />
                <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentWeek}
                </h2>
              </div>
              
              <button className={`p-2 rounded-lg ${
                isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
              }`}>
                <ChevronRight size={20} className={isDarkMode ? 'text-white' : 'text-gray-600'} />
              </button>
            </div>
          </div>

          {/* Schedule Grid */}
          <div className={`rounded-2xl border overflow-hidden ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            
            {/* Header Row */}
            <div className={`grid grid-cols-7 border-b ${
              isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-300 bg-gray-50'
            }`}>
              <div className={`p-4 font-semibold text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Time
              </div>
              {days.map((day) => (
                <div key={day} className={`p-4 font-semibold text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {day}
                </div>
              ))}
            </div>

            {/* Schedule Rows */}
            {weeklySchedule.map((timeSlot, index) => (
              <div key={index} className={`grid grid-cols-7 border-b ${
                isDarkMode ? 'border-slate-600' : 'border-gray-200'
              }`}>
                {/* Time Column */}
                <div className={`p-4 font-medium text-center ${
                  isDarkMode ? 'text-white bg-slate-700' : 'text-gray-900 bg-gray-50'
                }`}>
                  {timeSlot.time}
                </div>
                
                {/* Day Columns */}
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => (
                  <div key={day} className="p-2 min-h-[100px] relative">
                    {timeSlot[day] ? (
                      <div className={`${timeSlot[day].color} text-white p-3 rounded-lg h-full text-left shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
                        <div className="font-semibold text-sm mb-1">
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
                      } p-3 rounded-lg h-full flex items-center justify-center text-sm font-medium`}>
                        Break
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className={`mt-8 p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Subject Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { subject: 'Mathematics', color: 'bg-blue-500' },
                { subject: 'Physics', color: 'bg-green-500' },
                { subject: 'Chemistry', color: 'bg-orange-500' },
                { subject: 'Biology', color: 'bg-pink-500' },
                { subject: 'English', color: 'bg-purple-500' },
                { subject: 'Computer Science', color: 'bg-cyan-500' }
              ].map((item) => (
                <div key={item.subject} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded ${item.color}`}></div>
                  <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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