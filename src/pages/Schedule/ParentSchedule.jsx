import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import boyChild from '../../assets/images/student-profile.png';
import girlChild from '../../assets/images/girl.png';

const ParentSchedule = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedChild, setSelectedChild] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Children data with schedule
  const children = [
    {
      id: 1,
      name: 'Aarav Sharma',
      class: 'Class 10-A',
      image: boyChild,
      avatar: 'A',
      color: 'bg-blue-500',
      stats: {
        attendance: { value: '88%', color: 'green' },
        totalAttendance: { value: '91%', color: 'blue' },
        totalStudyTime: { value: '25h', color: 'purple' },
        nextClass: { value: '5', color: 'orange' }
      },
      schedule: {
        Monday: [
          { time: '09:00-10:00', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 201' },
          { time: '10:00-11:00', subject: 'Science', teacher: 'Ms. Davis', room: 'Lab 1' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'English', teacher: 'Mrs. Johnson', room: 'Room 105' },
          { time: '14:00-15:00', subject: 'History', teacher: 'Mr. Wilson', room: 'Room 301' },
          { time: '15:00-16:00', subject: 'Art', teacher: 'Ms. Brown', room: 'Art Studio' }
        ],
        Tuesday: [
          { time: '09:00-10:00', subject: 'Science', teacher: 'Ms. Davis', room: 'Lab 1' },
          { time: '10:00-11:00', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 201' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'Geography', teacher: 'Mrs. Clark', room: 'Room 205' },
          { time: '14:00-15:00', subject: 'English', teacher: 'Mrs. Johnson', room: 'Room 105' },
          { time: '15:00-16:00', subject: 'Music', teacher: 'Mr. Lee', room: 'Music Room' }
        ],
        Wednesday: [
          { time: '09:00-10:00', subject: 'English', teacher: 'Mrs. Johnson', room: 'Room 105' },
          { time: '10:00-11:00', subject: 'History', teacher: 'Mr. Wilson', room: 'Room 301' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 201' },
          { time: '14:00-15:00', subject: 'Science', teacher: 'Ms. Davis', room: 'Lab 1' },
          { time: '15:00-16:00', subject: 'Physical Education', teacher: 'Coach Taylor', room: 'Gym' }
        ],
        Thursday: [
          { time: '09:00-10:00', subject: 'History', teacher: 'Mr. Wilson', room: 'Room 301' },
          { time: '10:00-11:00', subject: 'English', teacher: 'Mrs. Johnson', room: 'Room 105' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'Science', teacher: 'Ms. Davis', room: 'Lab 1' },
          { time: '14:00-15:00', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 201' },
          { time: '15:00-16:00', subject: 'Computer Science', teacher: 'Dr. Martinez', room: 'Computer Lab' }
        ],
        Friday: [
          { time: '09:00-10:00', subject: 'Mathematics', teacher: 'Mr. Smith', room: 'Room 201' },
          { time: '10:00-11:00', subject: 'Science', teacher: 'Ms. Davis', room: 'Lab 1' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'English', teacher: 'Mrs. Johnson', room: 'Room 105' },
          { time: '14:00-15:00', subject: 'Geography', teacher: 'Mrs. Clark', room: 'Room 205' },
          { time: '15:00-16:00', subject: 'Library', teacher: '', room: 'Library' }
        ]
      }
    },
    {
      id: 2,
      name: 'Priya Sharma',
      class: 'Class 8-B',
      image: girlChild,
      avatar: 'P',
      color: 'bg-green-500',
      stats: {
        attendance: { value: '92%', color: 'green' },
        totalAttendance: { value: '89%', color: 'blue' },
        totalStudyTime: { value: '20h', color: 'purple' },
        nextClass: { value: '3', color: 'orange' }
      },
      schedule: {
        Monday: [
          { time: '09:00-10:00', subject: 'Mathematics', teacher: 'Mrs. Patel', room: 'Room 101' },
          { time: '10:00-11:00', subject: 'Science', teacher: 'Mr. Kumar', room: 'Lab 2' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'English', teacher: 'Ms. Singh', room: 'Room 102' },
          { time: '14:00-15:00', subject: 'History', teacher: 'Mr. Gupta', room: 'Room 201' },
          { time: '15:00-16:00', subject: 'Art', teacher: 'Ms. Sharma', room: 'Art Studio' }
        ],
        Tuesday: [
          { time: '09:00-10:00', subject: 'Science', teacher: 'Mr. Kumar', room: 'Lab 2' },
          { time: '10:00-11:00', subject: 'Mathematics', teacher: 'Mrs. Patel', room: 'Room 101' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'Geography', teacher: 'Ms. Reddy', room: 'Room 103' },
          { time: '14:00-15:00', subject: 'English', teacher: 'Ms. Singh', room: 'Room 102' },
          { time: '15:00-16:00', subject: 'Music', teacher: 'Mr. Joshi', room: 'Music Room' }
        ],
        Wednesday: [
          { time: '09:00-10:00', subject: 'English', teacher: 'Ms. Singh', room: 'Room 102' },
          { time: '10:00-11:00', subject: 'History', teacher: 'Mr. Gupta', room: 'Room 201' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'Mathematics', teacher: 'Mrs. Patel', room: 'Room 101' },
          { time: '14:00-15:00', subject: 'Science', teacher: 'Mr. Kumar', room: 'Lab 2' },
          { time: '15:00-16:00', subject: 'Physical Education', teacher: 'Coach Verma', room: 'Gym' }
        ],
        Thursday: [
          { time: '09:00-10:00', subject: 'History', teacher: 'Mr. Gupta', room: 'Room 201' },
          { time: '10:00-11:00', subject: 'English', teacher: 'Ms. Singh', room: 'Room 102' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'Science', teacher: 'Mr. Kumar', room: 'Lab 2' },
          { time: '14:00-15:00', subject: 'Mathematics', teacher: 'Mrs. Patel', room: 'Room 101' },
          { time: '15:00-16:00', subject: 'Computer Science', teacher: 'Ms. Agarwal', room: 'Computer Lab' }
        ],
        Friday: [
          { time: '09:00-10:00', subject: 'Mathematics', teacher: 'Mrs. Patel', room: 'Room 101' },
          { time: '10:00-11:00', subject: 'Science', teacher: 'Mr. Kumar', room: 'Lab 2' },
          { time: '11:30-12:30', subject: 'Break', teacher: '', room: '' },
          { time: '12:30-13:30', subject: 'English', teacher: 'Ms. Singh', room: 'Room 102' },
          { time: '14:00-15:00', subject: 'Geography', teacher: 'Ms. Reddy', room: 'Room 103' },
          { time: '15:00-16:00', subject: 'Library', teacher: '', room: 'Library' }
        ]
      }
    }
  ];

  const currentChild = children[selectedChild];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const getSubjectColor = (subject) => {
    const colorMap = {
      'Mathematics': 'bg-blue-100 text-blue-800 border-blue-200',
      'Science': 'bg-green-100 text-green-800 border-green-200',
      'English': 'bg-purple-100 text-purple-800 border-purple-200',
      'History': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Geography': 'bg-teal-100 text-teal-800 border-teal-200',
      'Physical Education': 'bg-red-100 text-red-800 border-red-200',
      'Computer Science': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Art': 'bg-pink-100 text-pink-800 border-pink-200',
      'Music': 'bg-orange-100 text-orange-800 border-orange-200',
      'Library': 'bg-gray-100 text-gray-800 border-gray-200',
      'Break': 'bg-gray-200 text-gray-600 border-gray-300'
    };
    return colorMap[subject] || 'bg-gray-100 text-gray-800 border-gray-200';
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
              Schedule
            </h1>
            <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              View your child's timetable
            </p>
          </div>

          {/* Select Child */}
          <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border mb-6 md:mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Select Child
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {children.map((child, index) => (
                <div
                  key={child.id}
                  onClick={() => setSelectedChild(index)}
                  className={`p-3 md:p-4 rounded-lg md:rounded-xl border-2 cursor-pointer transition-all ${
                    selectedChild === index
                      ? 'border-blue-500 bg-blue-50'
                      : isDarkMode 
                        ? 'border-slate-600 hover:border-slate-500 bg-slate-700' 
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative">
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full hidden items-center justify-center text-white text-base md:text-lg font-bold ${child.color}`}
                      >
                        {child.avatar}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm md:text-base truncate ${
                        selectedChild === index ? 'text-blue-700' : isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {child.name}
                      </h3>
                      <p className={`text-xs md:text-sm ${
                        selectedChild === index ? 'text-blue-600' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {child.class}
                      </p>
                    </div>
                    {selectedChild === index && (
                      <div className="ml-auto">
                        <span className="text-blue-500 text-xs md:text-sm">✓ Selected</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-green-500 p-4 md:p-6 rounded-xl md:rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs md:text-sm font-medium mb-1">
                    Present Days
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    {currentChild.stats.attendance.value}
                  </p>
                  <p className="text-white/80 text-xs">
                    22 Days classes attended
                  </p>
                </div>
                <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0 ml-3">
                  <span className="text-lg md:text-2xl">📅</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-500 p-4 md:p-6 rounded-xl md:rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs md:text-sm font-medium mb-1">
                    Total Days
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    {currentChild.stats.totalAttendance.value}
                  </p>
                  <p className="text-white/80 text-xs">
                    25 days class periods
                  </p>
                </div>
                <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0 ml-3">
                  <span className="text-lg md:text-2xl">📊</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-500 p-4 md:p-6 rounded-xl md:rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs md:text-sm font-medium mb-1">
                    Study Hours
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    {currentChild.stats.totalStudyTime.value}
                  </p>
                  <p className="text-white/80 text-xs">
                    5h total study time per week
                  </p>
                </div>
                <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0 ml-3">
                  <span className="text-lg md:text-2xl">⏰</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-500 p-4 md:p-6 rounded-xl md:rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-xs md:text-sm font-medium mb-1">
                    Next Class
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    {currentChild.stats.nextClass.value}
                  </p>
                  <p className="text-white/80 text-xs">
                    Next class at 9:00 AM
                  </p>
                </div>
                <div className="bg-white/20 p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0 ml-3">
                  <span className="text-lg md:text-2xl">🕘</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3 sm:gap-0">
              <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Weekly Schedule
              </h2>
              <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Class timetable for the current week
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-full" style={{ minWidth: '800px' }}>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className={`text-left p-2 md:p-3 font-medium text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Time
                      </th>
                      {days.map((day) => (
                        <th key={day} className={`text-center p-2 md:p-3 font-medium text-xs md:text-sm min-w-24 md:min-w-32 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(new Set(Object.values(currentChild.schedule).flat().map(item => item.time))).map((time) => (
                      <tr key={time}>
                        <td className={`p-2 md:p-3 font-medium text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {time}
                        </td>
                        {days.map((day) => {
                          const classItem = currentChild.schedule[day].find(item => item.time === time);
                          return (
                            <td key={day} className="p-1 md:p-2">
                              {classItem && (
                                <div className={`p-2 md:p-3 rounded border text-xs md:text-sm ${getSubjectColor(classItem.subject)}`}>
                                  <div className="font-medium truncate">{classItem.subject}</div>
                                  {classItem.teacher && (
                                    <div className="text-xs mt-1 truncate">{classItem.teacher}</div>
                                  )}
                                  {classItem.room && (
                                    <div className="text-xs truncate">{classItem.room}</div>
                                  )}
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 md:mt-6 text-center">
              <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                * Click on any class to view more details | Total Classes: 25 hours | School Hours: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default ParentSchedule;