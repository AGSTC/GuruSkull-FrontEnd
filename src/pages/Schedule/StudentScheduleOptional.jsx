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
  Clock,
  MapPin,
  User,
  ChevronDown
} from 'lucide-react';

const StudentScheduleOptional = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('week'); // 'day', 'week', 'month'
  const [selectedDay, setSelectedDay] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Sample schedule data - similar to previous structure
  const weeklySchedule = [
    {
      day: 'Monday',
      date: 'Sep 8, 2025',
      classes: [
        {
          id: 1,
          subject: 'Mathematics',
          teacher: 'Mr. Sharma',
          time: '08:00 AM - 09:30 AM',
          room: 'Room 201',
          type: 'regular',
          color: 'blue'
        },
        {
          id: 2,
          subject: 'Physics',
          teacher: 'Mrs. Gupta',
          time: '10:00 AM - 11:30 AM',
          room: 'Lab 1',
          type: 'lab',
          color: 'green'
        },
        {
          id: 3,
          subject: 'Chemistry',
          teacher: 'Dr. Patel',
          time: '12:30 PM - 02:00 PM',
          room: 'Room 304',
          type: 'regular',
          color: 'orange'
        }
      ]
    },
    {
      day: 'Tuesday',
      date: 'Sep 9, 2025',
      classes: [
        {
          id: 4,
          subject: 'Biology',
          teacher: 'Dr. Kumar',
          time: '08:00 AM - 09:30 AM',
          room: 'Lab 2',
          type: 'lab',
          color: 'pink'
        },
        {
          id: 5,
          subject: 'English',
          teacher: 'Ms. Singh',
          time: '10:00 AM - 11:30 AM',
          room: 'Room 305',
          type: 'regular',
          color: 'purple'
        },
        {
          id: 6,
          subject: 'Mathematics',
          teacher: 'Mr. Sharma',
          time: '12:30 PM - 02:00 PM',
          room: 'Room 201',
          type: 'regular',
          color: 'blue'
        }
      ]
    },
    {
      day: 'Wednesday',
      date: 'Sep 10, 2025',
      classes: [
        {
          id: 7,
          subject: 'Physics',
          teacher: 'Mrs. Gupta',
          time: '08:00 AM - 09:30 AM',
          room: 'Lab 1',
          type: 'lab',
          color: 'green'
        },
        {
          id: 8,
          subject: 'Computer Science',
          teacher: 'Mr. Jain',
          time: '10:00 AM - 11:30 AM',
          room: 'Lab 3',
          type: 'lab',
          color: 'cyan'
        },
        {
          id: 9,
          subject: 'Chemistry',
          teacher: 'Dr. Patel',
          time: '12:30 PM - 02:00 PM',
          room: 'Room 304',
          type: 'regular',
          color: 'orange'
        }
      ]
    },
    {
      day: 'Thursday',
      date: 'Sep 11, 2025',
      classes: [
        {
          id: 10,
          subject: 'Mathematics',
          teacher: 'Mr. Sharma',
          time: '08:00 AM - 09:30 AM',
          room: 'Room 201',
          type: 'regular',
          color: 'blue'
        },
        {
          id: 11,
          subject: 'Biology',
          teacher: 'Dr. Kumar',
          time: '10:00 AM - 11:30 AM',
          room: 'Lab 2',
          type: 'lab',
          color: 'pink'
        },
        {
          id: 12,
          subject: 'English',
          teacher: 'Ms. Singh',
          time: '12:30 PM - 02:00 PM',
          room: 'Room 305',
          type: 'regular',
          color: 'purple'
        }
      ]
    },
    {
      day: 'Friday',
      date: 'Sep 12, 2025',
      classes: [
        {
          id: 13,
          subject: 'Physics',
          teacher: 'Mrs. Gupta',
          time: '08:00 AM - 09:30 AM',
          room: 'Lab 1',
          type: 'lab',
          color: 'green'
        },
        {
          id: 14,
          subject: 'Mathematics',
          teacher: 'Mr. Sharma',
          time: '10:00 AM - 11:30 AM',
          room: 'Room 201',
          type: 'regular',
          color: 'blue'
        },
        {
          id: 15,
          subject: 'Test Series',
          teacher: 'Multiple Teachers',
          time: '12:30 PM - 02:00 PM',
          room: 'Exam Hall',
          type: 'test',
          color: 'red'
        }
      ]
    },
    {
      day: 'Saturday',
      date: 'Sep 13, 2025',
      classes: [
        {
          id: 16,
          subject: 'Revision Class',
          teacher: 'All Teachers',
          time: '09:00 AM - 12:00 PM',
          room: 'Various',
          type: 'revision',
          color: 'yellow'
        },
        {
          id: 17,
          subject: 'Doubt Clearing',
          teacher: 'As Required',
          time: '02:00 PM - 04:00 PM',
          room: 'Library',
          type: 'doubt',
          color: 'indigo'
        }
      ]
    }
  ];

  // Today's classes for quick view
  const todaysClasses = [
    {
      id: 1,
      subject: 'Mathematics',
      teacher: 'Mr. Sharma',
      time: '08:00 AM - 09:30 AM',
      room: 'Room 201',
      status: 'upcoming',
      color: 'blue'
    },
    {
      id: 2,
      subject: 'Physics',
      teacher: 'Mrs. Gupta',
      time: '10:00 AM - 11:30 AM',
      room: 'Lab 1',
      status: 'upcoming',
      color: 'green'
    },
    {
      id: 3,
      subject: 'Chemistry',
      teacher: 'Dr. Patel',
      time: '12:30 PM - 02:00 PM',
      room: 'Room 304',
      status: 'upcoming',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', bgLight: 'bg-blue-100' },
      green: { bg: 'bg-green-500', text: 'text-green-600', bgLight: 'bg-green-100' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', bgLight: 'bg-orange-100' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-600', bgLight: 'bg-pink-100' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', bgLight: 'bg-purple-100' },
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600', bgLight: 'bg-cyan-100' },
      red: { bg: 'bg-red-500', text: 'text-red-600', bgLight: 'bg-red-100' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', bgLight: 'bg-yellow-100' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', bgLight: 'bg-indigo-100' }
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

  const getTypeBadge = (type) => {
    switch (type) {
      case 'lab':
        return { label: 'Lab', color: 'bg-purple-100 text-purple-700' };
      case 'test':
        return { label: 'Test', color: 'bg-red-100 text-red-700' };
      case 'revision':
        return { label: 'Revision', color: 'bg-yellow-100 text-yellow-700' };
      case 'doubt':
        return { label: 'Doubt', color: 'bg-indigo-100 text-indigo-700' };
      default:
        return { label: 'Regular', color: 'bg-blue-100 text-blue-700' };
    }
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
              View your weekly class timetable and upcoming sessions
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-blue-100 rounded-lg">
                  <Calendar className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Classes This Week
                  </h3>
                  <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    18
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-green-100 rounded-lg">
                  <Clock className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                </div>
                <div>
                  <h3 className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Hours
                  </h3>
                  <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    27h
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-purple-100 rounded-lg">
                  <User className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Different Subjects
                  </h3>
                  <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    6
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            
            {/* Today's Schedule */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Today's Classes
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                {todaysClasses.map((classItem, index) => {
                  const colorClasses = getColorClasses(classItem.color);
                  return (
                    <div key={classItem.id} className={`p-3 md:p-4 rounded-lg border ${
                      isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-left">
                          <h4 className={`font-semibold text-sm md:text-base mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {classItem.subject}
                          </h4>
                          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {classItem.teacher}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                          {classItem.status}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm">
                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Clock size={12} className="md:w-4 md:h-4" />
                          {classItem.time}
                        </span>
                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <MapPin size={12} className="md:w-4 md:h-4" />
                          {classItem.room}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className={`xl:col-span-2 p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6">
                <h2 className={`text-lg md:text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Weekly Schedule
                </h2>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Week of Sep 8 - 13, 2025
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {weeklySchedule.map((daySchedule, index) => (
                  <div key={daySchedule.day} className={`p-3 md:p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h3 className={`font-semibold text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {daySchedule.day}
                      </h3>
                      <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {daySchedule.date}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                      {daySchedule.classes.map((classItem, classIndex) => {
                        const colorClasses = getColorClasses(classItem.color);
                        const typeBadge = getTypeBadge(classItem.type);
                        return (
                          <div key={classItem.id} className={`p-3 rounded-lg border-l-4 ${colorClasses.bg} ${
                            isDarkMode ? 'bg-slate-600 border-slate-500' : 'bg-white border-gray-200'
                          }`}>
                            <div className="flex items-start justify-between mb-2">
                              <h4 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {classItem.subject}
                              </h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeBadge.color}`}>
                                {typeBadge.label}
                              </span>
                            </div>
                            
                            <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {classItem.teacher}
                            </p>
                            
                            <div className="flex flex-col gap-1 text-xs">
                              <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <Clock size={10} className="md:w-3 md:h-3" />
                                {classItem.time}
                              </span>
                              <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <MapPin size={10} className="md:w-3 md:h-3" />
                                {classItem.room}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Schedule Legend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {[
                { subject: 'Mathematics', color: 'blue' },
                { subject: 'Physics', color: 'green' },
                { subject: 'Chemistry', color: 'orange' },
                { subject: 'Biology', color: 'pink' },
                { subject: 'English', color: 'purple' },
                { subject: 'Computer Science', color: 'cyan' },
                { subject: 'Test Series', color: 'red' },
                { subject: 'Revision', color: 'yellow' },
                { subject: 'Doubt Session', color: 'indigo' }
              ].map((item) => {
                const colorClasses = getColorClasses(item.color);
                return (
                  <div key={item.subject} className="flex items-center gap-2 md:gap-3">
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded ${colorClasses.bg}`}></div>
                    <span className={`text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.subject}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Class Type Legend */}
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-300">
              <h4 className={`text-sm md:text-base font-medium mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Class Types
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  { type: 'Regular', color: 'bg-blue-100 text-blue-700' },
                  { type: 'Lab', color: 'bg-purple-100 text-purple-700' },
                  { type: 'Test', color: 'bg-red-100 text-red-700' },
                  { type: 'Revision', color: 'bg-yellow-100 text-yellow-700' },
                  { type: 'Doubt', color: 'bg-indigo-100 text-indigo-700' }
                ].map((item) => (
                  <span key={item.type} className={`px-2 py-1 rounded-full text-xs font-medium ${item.color}`}>
                    {item.type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default StudentScheduleOptional;