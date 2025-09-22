import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Edit, 
  Trash2,
  Download,
  Plus
} from 'lucide-react';

const ScheduleManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('weekly');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Weekly Schedule Data
  const weeklySchedule = {
    week: "Week of July 11-17, 2025",
    timeSlots: [
      "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
    ],
    days: [
      { name: "Monday", date: "July 11" },
      { name: "Tuesday", date: "July 12" },
      { name: "Wednesday", date: "July 13" },
      { name: "Thursday", date: "July 14" },
      { name: "Friday", date: "July 15" },
      { name: "Saturday", date: "July 16" }
    ],
    classes: [
      { day: "Monday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
      { day: "Tuesday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
      { day: "Wednesday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
      { day: "Thursday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
      { day: "Friday", time: "8:00 AM", subject: "Test - Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
      { day: "Saturday", time: "9:00 AM", subject: "Extra Classes", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-blue-200 text-blue-800" },
      
      { day: "Monday", time: "9:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Room 101", color: "bg-blue-200 text-blue-800" },
      { day: "Tuesday", time: "9:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Room 101", color: "bg-blue-200 text-blue-800" },
      { day: "Wednesday", time: "9:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Room 101", color: "bg-blue-200 text-blue-800" },
      { day: "Thursday", time: "9:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Room 101", color: "bg-blue-200 text-blue-800" },
      { day: "Friday", time: "9:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Room 101", color: "bg-blue-200 text-blue-800" },
      
      { day: "Monday", time: "10:00 AM", subject: "Mathematics", class: "Class 11", teacher: "Room 102", color: "bg-blue-200 text-blue-800" },
      { day: "Tuesday", time: "10:00 AM", subject: "Mathematics", class: "Class 11", teacher: "Room 102", color: "bg-blue-200 text-blue-800" },
      { day: "Wednesday", time: "10:00 AM", subject: "Mathematics", class: "Class 11", teacher: "Room 102", color: "bg-blue-200 text-blue-800" },
      { day: "Thursday", time: "10:00 AM", subject: "Mathematics", class: "Class 11", teacher: "Room 102", color: "bg-blue-200 text-blue-800" },
      
      { day: "Monday", time: "11:00 AM", subject: "Physics", class: "Class 10-B", teacher: "Dr. Johnson", color: "bg-green-200 text-green-800" },
      { day: "Tuesday", time: "11:00 AM", subject: "Physics", class: "Class 10-B", teacher: "Dr. Johnson", color: "bg-green-200 text-green-800" },
      { day: "Wednesday", time: "11:00 AM", subject: "Physics", class: "Class 10-B", teacher: "Dr. Johnson", color: "bg-green-200 text-green-800" },
      { day: "Thursday", time: "11:00 AM", subject: "Physics", class: "Class 10-B", teacher: "Dr. Johnson", color: "bg-green-200 text-green-800" },
      { day: "Friday", time: "11:00 AM", subject: "Test - Physics", class: "Class 10-B", teacher: "Dr. Johnson", color: "bg-green-200 text-green-800" },
      
      { day: "Tuesday", time: "1:00 PM", subject: "Social Studies", class: "Class 9", teacher: "Ms. Wilson", color: "bg-purple-200 text-purple-800" },
      
      { day: "Monday", time: "2:00 PM", subject: "Mathematics", class: "Class 8", teacher: "Room 103", color: "bg-blue-200 text-blue-800" },
      { day: "Wednesday", time: "2:00 PM", subject: "Physics", class: "Class 9", teacher: "Lab", color: "bg-green-200 text-green-800" },
      { day: "Thursday", time: "2:00 PM", subject: "Parent Meeting", class: "Staff Room", teacher: "", color: "bg-orange-200 text-orange-800" },
      
      { day: "Wednesday", time: "3:00 PM", subject: "Test - Mathematics", class: "Class 10-A", teacher: "Room 101", color: "bg-blue-200 text-blue-800" }
    ]
  };

  // Events & Activities Data
  const eventsActivities = [
    { 
      id: 1,
      title: "Math Competition", 
      date: "2025-05-31", 
      time: "10:00 AM", 
      venue: "Main Hall", 
      participants: "24 Participants",
      status: "Competition",
      color: "border-blue-200"
    },
    { 
      id: 2,
      title: "Math Competition", 
      date: "2025-05-31", 
      time: "10:00 AM", 
      venue: "Main Hall", 
      participants: "24 Participants",
      status: "Competition",
      color: "border-green-200"
    },
    { 
      id: 3,
      title: "Math Competition", 
      date: "2025-05-31", 
      time: "10:00 AM", 
      venue: "Main Hall", 
      participants: "24 Participants",
      status: "Competition",
      color: "border-yellow-200"
    },
    { 
      id: 4,
      title: "Math Competition", 
      date: "2025-05-31", 
      time: "10:00 AM", 
      venue: "Main Hall", 
      participants: "24 Participants",
      status: "Competition",
      color: "border-red-200"
    }
  ];

  // Class Schedule Data (Room Utilization)
  const roomUtilization = [
    {
      room: "Room 101",
      schedule: [
        { time: "9:00 AM", subject: "Mathematics", color: "text-blue-500" },
        { time: "11:00 AM", subject: "Physics", color: "text-green-500" },
        { time: "2:00 PM", subject: "Chemistry", color: "text-orange-500" }
      ],
      utilization: 75
    },
    {
      room: "Room 101",
      schedule: [
        { time: "9:00 AM", subject: "Mathematics", color: "text-blue-500" },
        { time: "11:00 AM", subject: "Physics", color: "text-green-500" },
        { time: "2:00 PM", subject: "Chemistry", color: "text-orange-500" }
      ],
      utilization: 75
    },
    {
      room: "Room 101",
      schedule: [
        { time: "9:00 AM", subject: "Mathematics", color: "text-blue-500" },
        { time: "11:00 AM", subject: "Physics", color: "text-green-500" },
        { time: "2:00 PM", subject: "Chemistry", color: "text-orange-500" }
      ],
      utilization: 75
    },
    {
      room: "Room 101",
      schedule: [
        { time: "9:00 AM", subject: "Mathematics", color: "text-blue-500" },
        { time: "11:00 AM", subject: "Physics", color: "text-green-500" },
        { time: "2:00 PM", subject: "Chemistry", color: "text-orange-500" }
      ],
      utilization: 75
    },
    {
      room: "Room 101",
      schedule: [
        { time: "9:00 AM", subject: "Mathematics", color: "text-blue-500" },
        { time: "11:00 AM", subject: "Physics", color: "text-green-500" },
        { time: "2:00 PM", subject: "Chemistry", color: "text-orange-500" }
      ],
      utilization: 75
    },
    {
      room: "Room 101",
      schedule: [
        { time: "9:00 AM", subject: "Mathematics", color: "text-blue-500" },
        { time: "11:00 AM", subject: "Physics", color: "text-green-500" },
        { time: "2:00 PM", subject: "Chemistry", color: "text-orange-500" }
      ],
      utilization: 75
    }
  ];

  // Teacher Schedule Data
  const teacherSchedule = [
    {
      id: 1,
      name: "Dr. Lisa Wang",
      subject: "Physics Teacher",
      avatar: "/api/placeholder/40/40",
      classesWeek: 12,
      hoursWeek: 36,
      nextClass: "Grade 11 Physics - 11:00 AM"
    },
    {
      id: 2,
      name: "Dr. Lisa Wang",
      subject: "Physics Teacher",
      avatar: "/api/placeholder/40/40",
      classesWeek: 12,
      hoursWeek: 36,
      nextClass: "Grade 11 Physics - 11:00 AM"
    },
    {
      id: 3,
      name: "Dr. Lisa Wang",
      subject: "Physics Teacher",
      avatar: "/api/placeholder/40/40",
      classesWeek: 12,
      hoursWeek: 36,
      nextClass: "Grade 11 Physics - 11:00 AM"
    },
    {
      id: 4,
      name: "Dr. Lisa Wang",
      subject: "Physics Teacher",
      avatar: "/api/placeholder/40/40",
      classesWeek: 12,
      hoursWeek: 36,
      nextClass: "Grade 11 Physics - 11:00 AM"
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      subject: "Physics Teacher",
      avatar: "/api/placeholder/40/40",
      classesWeek: 12,
      hoursWeek: 36,
      nextClass: "Grade 11 Physics - 11:00 AM"
    }
  ];

  const getClassForTimeSlot = (day, time) => {
    return weeklySchedule.classes.find(c => c.day === day && c.time === time);
  };

  const renderWeeklyView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {weeklySchedule.week}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="grid grid-cols-7 gap-px bg-gray-300">
            {/* Header */}
            <div className={`p-4 text-center font-medium ${isDarkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
              Time
            </div>
            {weeklySchedule.days.map((day) => (
              <div key={day.name} className={`p-4 text-center ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
                <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {day.name}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {day.date}
                </div>
              </div>
            ))}

            {/* Time slots */}
            {weeklySchedule.timeSlots.map((time) => (
              <React.Fragment key={time}>
                <div className={`p-4 text-center font-medium ${isDarkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                  {time}
                </div>
                {weeklySchedule.days.map((day) => {
                  const classItem = getClassForTimeSlot(day.name, time);
                  return (
                    <div key={`${day.name}-${time}`} className={`p-2 min-h-[80px] ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
                      {classItem && (
                        <div className={`p-2 rounded-lg text-xs ${classItem.color} h-full`}>
                          <div className="font-semibold">{classItem.subject}</div>
                          <div className="mt-1">{classItem.class}</div>
                          <div className="mt-1">{classItem.teacher}</div>
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

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-white border'}`}>
          <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>This Week</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Classes:</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>48</span>
            </div>
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Teaching Hours:</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>27 Hours</span>
            </div>
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tests Scheduled:</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2</span>
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-white border'}`}>
          <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Subject Distribution</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-blue-500">Mathematics</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>10 Classes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-500">Physics</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>8 Classes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-orange-500">Extra Sessions</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3 Classes</span>
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-white border'}`}>
          <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h4>
          <div className="space-y-2">
            <button className="w-full text-left text-blue-500 hover:text-blue-600 text-sm">→ Mark Today's Attendance</button>
            <button className="w-full text-left text-blue-500 hover:text-blue-600 text-sm">→ Create Assignment</button>
            <button className="w-full text-left text-blue-500 hover:text-blue-600 text-sm">→ Add Class Updates</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEventsActivities = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Upcoming Events & Activities
        </h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
          <Calendar size={16} />
          Add Event
        </button>
      </div>

      <div className="space-y-4">
        {eventsActivities.map((event) => (
          <div key={event.id} className={`p-6 rounded-2xl border-l-4 ${event.color} ${
            isDarkMode ? 'bg-slate-800 border-r border-t border-b border-slate-700' : 'bg-white border-r border-t border-b border-gray-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h4 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'Competition' 
                        ? event.id === 1 ? 'bg-blue-100 text-blue-700' :
                          event.id === 2 ? 'bg-green-100 text-green-700' :
                          event.id === 3 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {event.status}
                    </span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Trash2 size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {event.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {event.participants}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderClassSchedule = () => (
    <div className="space-y-6">
      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Room Utilization
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomUtilization.map((room, index) => (
          <div key={index} className={`p-6 rounded-2xl ${
            isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <h4 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {room.room}
            </h4>
            
            <div className="space-y-3 mb-4">
              {room.schedule.map((session, sessionIndex) => (
                <div key={sessionIndex} className="flex justify-between items-center">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {session.time}
                  </span>
                  <span className={`text-sm font-medium ${session.color}`}>
                    {session.subject}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-300">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Utilization: {room.utilization}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${room.utilization}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeacherSchedule = () => (
    <div className="space-y-6">
      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Teacher Schedule
      </h3>

      <div className="space-y-4">
        {teacherSchedule.map((teacher) => (
          <div key={teacher.id} className={`p-6 rounded-2xl ${
            isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-gray-600" />
                </div>
                <div>
                  <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {teacher.name}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {teacher.subject}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {teacher.classesWeek}
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Classes/Week
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {teacher.hoursWeek}
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Hours/Week
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-blue-500 text-sm font-medium mb-1">Next Class:</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {teacher.nextClass}
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Calendar size={20} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Schedule Management
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage Classes, Events and Activities
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                <Plus size={16} />
                Add Schedule
              </button>
              <button className={`px-4 py-2 rounded-lg border flex items-center gap-2 transition-colors ${
                isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Download size={16} />
                Export
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className={`rounded-2xl ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200 shadow-sm'}`}>
            
            {/* Tabs */}
            <div className="px-6 pt-6">
              <div className="flex gap-8 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('weekly')}
                  className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'weekly'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                  }`}
                >
                  Weekly View
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'events'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                  }`}
                >
                  Event & Activities
                </button>
                <button
                  onClick={() => setActiveTab('class')}
                  className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'class'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                  }`}
                >
                  Class Schedule
                </button>
                <button
                  onClick={() => setActiveTab('teacher')}
                  className={`pb-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'teacher'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                  }`}
                >
                  Teacher Schedule
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'weekly' && renderWeeklyView()}
              {activeTab === 'events' && renderEventsActivities()}
              {activeTab === 'class' && renderClassSchedule()}
              {activeTab === 'teacher' && renderTeacherSchedule()}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default ScheduleManagement;