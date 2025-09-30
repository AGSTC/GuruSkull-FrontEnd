import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { ChevronLeft, ChevronRight, Plus, Calendar, Clock, BookOpen, X, AlertCircle } from 'lucide-react';

const TeacherSchedule = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date('2025-09-08'));
  const [weeksData, setWeeksData] = useState({
    '2025-09-08': [
      { id: 1, day: 0, time: 0, subject: 'Physics', class: 'Class 10-A', room: 'Room 101', duration: 1, color: 'bg-green-200 border-green-300' },
      { id: 2, day: 0, time: 1, subject: 'Mathematics', class: 'Class 10-C', room: 'Room 205', duration: 1, color: 'bg-blue-200 border-blue-300' },
      { id: 3, day: 0, time: 3, subject: 'Physics', class: 'Class 9-B', room: 'Room 103', duration: 1, color: 'bg-green-200 border-green-300' },
      { id: 4, day: 0, time: 6, subject: 'Mathematics', class: 'Class 11-A', room: 'Room 201', duration: 1, color: 'bg-blue-200 border-blue-300' },
      { id: 5, day: 1, time: 2, subject: 'Mathematics', class: 'Class 12-B', room: 'Room 301', duration: 1, color: 'bg-blue-200 border-blue-300' },
      { id: 6, day: 2, time: 0, subject: 'Physics', class: 'Class 11-C', room: 'Room 105', duration: 1, color: 'bg-green-200 border-green-300' },
      { id: 7, day: 2, time: 2, subject: 'Mathematics', class: 'Class 11-A', room: 'Room 203', duration: 1, color: 'bg-blue-200 border-blue-300' },
      { id: 8, day: 2, time: 3, subject: 'Physics', class: 'Class 10-B', room: 'Room 102', duration: 1, color: 'bg-green-200 border-green-300' },
      { id: 9, day: 3, time: 2, subject: 'Mathematics', class: 'Class 11-A', room: 'Room 204', duration: 1, color: 'bg-blue-200 border-blue-300' },
      { id: 10, day: 3, time: 4, subject: 'Doubt Session', class: 'All Classes', room: 'Hall A', duration: 1, color: 'bg-purple-200 border-purple-300' },
      { id: 11, day: 4, time: 1, subject: 'Mathematics', class: 'Class 10-A', room: 'Room 202', duration: 1, color: 'bg-blue-200 border-blue-300' },
      { id: 12, day: 4, time: 3, subject: 'Test - Physics', class: 'Class 12-A', room: 'Room 301', duration: 1, color: 'bg-yellow-200 border-yellow-300' },
      { id: 13, day: 4, time: 6, subject: 'Physics', class: 'Class 9-C', room: 'Room 104', duration: 1, color: 'bg-green-200 border-green-300' },
      { id: 14, day: 4, time: 7, subject: 'Parent Meeting', class: 'Various', room: 'Office', duration: 1, color: 'bg-orange-200 border-orange-300' },
      { id: 15, day: 4, time: 8, subject: 'Test - Mathematics', class: 'Class 11-B', room: 'Room 205', duration: 1, color: 'bg-blue-200 border-blue-300' },
      { id: 16, day: 5, time: 1, subject: 'Extra Classes', class: 'Class 10-B', room: 'Room 106', duration: 1, color: 'bg-indigo-200 border-indigo-300' },
    ],
    '2025-09-01': [
      { id: 17, day: 0, time: 1, subject: 'Chemistry', class: 'Class 11-A', room: 'Lab 1', duration: 1, color: 'bg-red-200 border-red-300' },
      { id: 18, day: 2, time: 3, subject: 'Biology', class: 'Class 10-B', room: 'Lab 3', duration: 1, color: 'bg-teal-200 border-teal-300' },
    ],
    '2025-09-15': [
      { id: 19, day: 1, time: 0, subject: 'Computer Science', class: 'Class 12-A', room: 'Lab 4', duration: 1, color: 'bg-indigo-200 border-indigo-300' },
      { id: 20, day: 3, time: 2, subject: 'Mathematics', class: 'Class 9-A', room: 'Room 105', duration: 1, color: 'bg-blue-200 border-blue-300' },
    ]
  });

  const [newClass, setNewClass] = useState({
    subject: '',
    class: '',
    room: '',
    day: 0,
    time: 0,
    duration: 1
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const getWeekKey = (date) => {
    return date.toISOString().split('T')[0];
  };

  const currentWeekKey = getWeekKey(currentWeekStart);
  const currentClasses = weeksData[currentWeekKey] || [];

  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeekStart(newDate);
    setErrorMessage('');
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeekStart(newDate);
    setErrorMessage('');
  };

  const getWeekDisplay = () => {
    const start = new Date(currentWeekStart);
    const end = new Date(currentWeekStart);
    end.setDate(end.getDate() + 5);
    
    const formattedStart = start.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedEnd = end.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    return `Week of ${formattedStart} - ${formattedEnd}`;
  };

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const days = [
    { name: 'Monday', date: getDayDate(0) },
    { name: 'Tuesday', date: getDayDate(1) },
    { name: 'Wednesday', date: getDayDate(2) },
    { name: 'Thursday', date: getDayDate(3) },
    { name: 'Friday', date: getDayDate(4) },
    { name: 'Saturday', date: getDayDate(5) }
  ];

  function getDayDate(dayIndex) {
    const date = new Date(currentWeekStart);
    date.setDate(date.getDate() + dayIndex);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  }

  const weekStats = {
    totalClasses: currentClasses.length,
    teachingHours: currentClasses.reduce((total, cls) => total + cls.duration, 0),
    testSessions: currentClasses.filter(cls => cls.subject.includes('Test')).length
  };

  const subjectDistribution = {
    Mathematics: { classes: currentClasses.filter(cls => cls.subject === 'Mathematics').length, color: 'bg-blue-500' },
    Physics: { classes: currentClasses.filter(cls => cls.subject === 'Physics').length, color: 'bg-green-500' },
    'Extra Sessions': { classes: currentClasses.filter(cls => cls.subject.includes('Session') || cls.subject.includes('Extra')).length, color: 'bg-indigo-500' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass(prev => ({
      ...prev,
      [name]: name === 'day' || name === 'time' || name === 'duration' ? parseInt(value) : value
    }));
    setErrorMessage('');
  };

  const isTimeSlotOccupied = (day, time, duration) => {
    for (let i = 0; i < duration; i++) {
      const occupied = currentClasses.some(cls => 
        cls.day === day && cls.time === time + i
      );
      if (occupied) return true;
    }
    return false;
  };

  const handleAddClass = (e) => {
    e.preventDefault();
    
    if (!newClass.subject || !newClass.class || !newClass.room) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    if (isTimeSlotOccupied(newClass.day, newClass.time, newClass.duration)) {
      setErrorMessage('This time slot is already occupied. Please choose a different time.');
      return;
    }

    const newClassObj = {
      id: Date.now(),
      ...newClass,
      color: getClassColor(newClass.subject)
    };

    setWeeksData(prev => ({
      ...prev,
      [currentWeekKey]: [...(prev[currentWeekKey] || []), newClassObj]
    }));

    setShowAddClassModal(false);
    setErrorMessage('');
    
    setNewClass({
      subject: '',
      class: '',
      room: '',
      day: 0,
      time: 0,
      duration: 1
    });
  };

  const getClassColor = (subject) => {
    const colorMap = {
      'Mathematics': 'bg-blue-200 border-blue-300',
      'Physics': 'bg-green-200 border-green-300',
      'Chemistry': 'bg-red-200 border-red-300',
      'Biology': 'bg-teal-200 border-teal-300',
      'Computer Science': 'bg-indigo-200 border-indigo-300',
      'Test': 'bg-yellow-200 border-yellow-300',
      'Doubt Session': 'bg-purple-200 border-purple-300',
      'Parent Meeting': 'bg-orange-200 border-orange-300',
      'Extra Classes': 'bg-indigo-200 border-indigo-300'
    };
    
    for (const [key, value] of Object.entries(colorMap)) {
      if (subject.includes(key)) return value;
    }
    return 'bg-gray-200 border-gray-300';
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="schedule" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'lg:ml-64' : 'lg:ml-16'
      }`}>
        <div className="w-full h-full px-4 sm:px-6 py-6">
          
          <div className="text-left mb-6 sm:mb-8">
            <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Class Schedule
            </h1>
            <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage your teaching schedule and plan lessons
            </p>
          </div>

          <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          } mb-6 sm:mb-8`}>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <button 
                  onClick={goToPreviousWeek}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                </button>
                <h3 className={`text-base sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {getWeekDisplay()}
                </h3>
                <button 
                  onClick={goToNextWeek}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
              <button 
                onClick={() => setShowAddClassModal(true)}
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors focus:outline-none text-sm sm:text-base"
              >
                <Plus size={16} className="sm:w-4 sm:h-4" />
                Add Class
              </button>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-7 gap-px bg-gray-300 rounded-t-lg overflow-hidden min-w-[800px]">
                  <div className={`p-2 sm:p-3 text-center font-medium ${
                    isDarkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    Time
                  </div>
                  {days.map((day, index) => (
                    <div key={index} className={`p-2 sm:p-3 text-center ${
                      isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                    }`}>
                      <div className={`font-medium text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {day.name}
                      </div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {day.date}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-300 min-w-[800px]" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px' }}>
                  {timeSlots.map((time, timeIndex) => (
                    <React.Fragment key={timeIndex}>
                      <div className={`p-2 sm:p-3 text-center font-medium border-r ${
                        isDarkMode ? 'bg-slate-800 text-gray-300 border-slate-600' : 'bg-white text-gray-700 border-gray-200'
                      }`}>
                        <span className="text-xs sm:text-sm">{time}</span>
                      </div>
                      
                      {days.map((_, dayIndex) => {
                        const classInSlot = currentClasses.find(c => c.day === dayIndex && c.time === timeIndex);
                        return (
                          <div key={`${timeIndex}-${dayIndex}`} className={`p-1 sm:p-2 min-h-12 sm:min-h-16 ${
                            isDarkMode ? 'bg-slate-800' : 'bg-white'
                          }`}>
                            {classInSlot && (
                              <div className={`p-1 sm:p-2 rounded border ${classInSlot.color} h-full`}>
                                <div className="text-xs font-semibold text-gray-800 mb-0.5 sm:mb-1">
                                  {classInSlot.subject}
                                </div>
                                <div className="text-xs text-gray-600 mb-0.5 sm:mb-1">
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

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
            
            <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                This Week
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Classes:</span>
                  <span className={`font-bold text-xl sm:text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {weekStats.totalClasses}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Teaching Hours:</span>
                  <span className={`font-semibold text-lg sm:text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {weekStats.teachingHours} hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Test Sessions:</span>
                  <span className={`font-semibold text-lg sm:text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {weekStats.testSessions}
                  </span>
                </div>
              </div>
            </div>

            <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject Distribution
              </h3>
              <div className="space-y-3 sm:space-y-4">
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
                        style={{ width: `${weekStats.totalClasses > 0 ? (data.classes / weekStats.totalClasses) * 100 : 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />

      {showAddClassModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <div className={`flex items-center justify-between p-4 sm:p-6 border-b ${
              isDarkMode ? 'border-slate-700' : 'border-gray-200'
            }`}>
              <h3 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Add New Class
              </h3>
              <button 
                onClick={() => {
                  setShowAddClassModal(false);
                  setErrorMessage('');
                }}
                className={`p-1 rounded-full ${
                  isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}
              >
                <X size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
              </button>
            </div>

            <form onSubmit={handleAddClass} className="p-4 sm:p-6 space-y-4">
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 bg-red-100 border border-red-300 rounded-lg">
                  <AlertCircle size={16} className="text-red-500" />
                  <span className="text-red-700 text-sm">{errorMessage}</span>
                </div>
              )}

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={newClass.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter subject name"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Class *
                </label>
                <input
                  type="text"
                  name="class"
                  value={newClass.class}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="e.g., Class 10-A"
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Room *
                </label>
                <input
                  type="text"
                  name="room"
                  value={newClass.room}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="e.g., Room 101"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Day
                  </label>
                  <select
                    name="day"
                    value={newClass.day}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {days.map((day, index) => (
                      <option key={index} value={index}>{day.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Time
                  </label>
                  <select
                    name="time"
                    value={newClass.time}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {timeSlots.map((time, index) => (
                      <option key={index} value={index}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Duration (hours)
                </label>
                <select
                  name="duration"
                  value={newClass.duration}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value={1}>1 hour</option>
                  <option value={2}>2 hours</option>
                  <option value={3}>3 hours</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddClassModal(false);
                    setErrorMessage('');
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  } transition-colors`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherSchedule;