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
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
  Save,
  UserPlus,
  BookOpen,
  ClipboardCheck
} from 'lucide-react';

const ScheduleManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('weekly');
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showClassUpdateModal, setShowClassUpdateModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingRoom, setEditingRoom] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const [weeklySchedules, setWeeklySchedules] = useState([
    {
      week: "Week of July 4-10, 2025",
      timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
      days: [
        { name: "Monday", date: "July 4" },
        { name: "Tuesday", date: "July 5" },
        { name: "Wednesday", date: "July 6" },
        { name: "Thursday", date: "July 7" },
        { name: "Friday", date: "July 8" },
        { name: "Saturday", date: "July 9" }
      ],
      classes: [
        { id: 1, day: "Monday", time: "8:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Mr. Kumar", color: "bg-blue-200 text-blue-800" },
        { id: 2, day: "Tuesday", time: "9:00 AM", subject: "Physics", class: "Class 11", teacher: "Dr. Singh", color: "bg-green-200 text-green-800" },
        { id: 3, day: "Wednesday", time: "10:00 AM", subject: "Chemistry", class: "Class 10", teacher: "Ms. Patel", color: "bg-purple-200 text-purple-800" },
      ]
    },
    {
      week: "Week of July 11-17, 2025",
      timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
      days: [
        { name: "Monday", date: "July 11" },
        { name: "Tuesday", date: "July 12" },
        { name: "Wednesday", date: "July 13" },
        { name: "Thursday", date: "July 14" },
        { name: "Friday", date: "July 15" },
        { name: "Saturday", date: "July 16" }
      ],
      classes: [
        { id: 4, day: "Monday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
        { id: 5, day: "Tuesday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
        { id: 6, day: "Wednesday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
        { id: 7, day: "Thursday", time: "8:00 AM", subject: "Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-green-200 text-green-800" },
        { id: 8, day: "Friday", time: "8:00 AM", subject: "Test - Physics", class: "Class 10-A", teacher: "Dr. Smith", color: "bg-red-200 text-red-800" },
        { id: 9, day: "Monday", time: "9:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Mr. Kumar", color: "bg-blue-200 text-blue-800" },
        { id: 10, day: "Tuesday", time: "9:00 AM", subject: "Mathematics", class: "Class 12", teacher: "Mr. Kumar", color: "bg-blue-200 text-blue-800" },
        { id: 11, day: "Wednesday", time: "10:00 AM", subject: "Chemistry", class: "Class 11", teacher: "Ms. Patel", color: "bg-purple-200 text-purple-800" },
      ]
    },
    {
      week: "Week of July 18-24, 2025",
      timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
      days: [
        { name: "Monday", date: "July 18" },
        { name: "Tuesday", date: "July 19" },
        { name: "Wednesday", date: "July 20" },
        { name: "Thursday", date: "July 21" },
        { name: "Friday", date: "July 22" },
        { name: "Saturday", date: "July 23" }
      ],
      classes: [
        { id: 12, day: "Monday", time: "9:00 AM", subject: "Biology", class: "Class 12", teacher: "Dr. Sharma", color: "bg-orange-200 text-orange-800" },
        { id: 13, day: "Tuesday", time: "10:00 AM", subject: "English", class: "Class 11", teacher: "Ms. Gupta", color: "bg-pink-200 text-pink-800" },
        { id: 14, day: "Friday", time: "2:00 PM", subject: "Group Discussion", class: "All Classes", teacher: "All Teachers", color: "bg-yellow-200 text-yellow-800" },
      ]
    }
  ]);

  const [eventsActivities, setEventsActivities] = useState([
    {
      id: 1,
      title: "Mathematics Olympiad",
      date: "2025-07-25",
      time: "10:00 AM",
      venue: "Main Hall",
      participants: "32 Students",
      status: "Competition",
      description: "Inter-school mathematics competition",
      color: "border-blue-200"
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2025-07-28",
      time: "9:00 AM",
      venue: "Science Lab",
      participants: "45 Students",
      status: "Exhibition",
      description: "Annual science project exhibition",
      color: "border-green-200"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "2025-07-30",
      time: "2:00 PM",
      venue: "Conference Room",
      participants: "All Parents",
      status: "Meeting",
      description: "Monthly progress discussion",
      color: "border-yellow-200"
    },
    {
      id: 4,
      title: "Annual Cultural Program",
      date: "2025-08-05",
      time: "6:00 PM",
      venue: "Auditorium",
      participants: "200+ Attendees",
      status: "Cultural",
      description: "Students cultural performance event",
      color: "border-purple-200"
    }
  ]);

  const [roomUtilization, setRoomUtilization] = useState([
    {
      id: 1,
      room: "Room 101 - Physics Lab",
      schedule: [
        { time: "9:00 AM", subject: "Physics Practical", color: "text-green-500" },
        { time: "11:00 AM", subject: "Physics Theory", color: "text-green-600" },
        { time: "2:00 PM", subject: "Extra Classes", color: "text-green-400" }
      ],
      utilization: 75,
      capacity: 30
    },
    {
      id: 2,
      room: "Room 102 - Mathematics",
      schedule: [
        { time: "8:00 AM", subject: "Algebra", color: "text-blue-500" },
        { time: "10:00 AM", subject: "Calculus", color: "text-blue-600" },
        { time: "1:00 PM", subject: "Geometry", color: "text-blue-400" }
      ],
      utilization: 90,
      capacity: 35
    },
    {
      id: 3,
      room: "Room 103 - Chemistry Lab",
      schedule: [
        { time: "9:30 AM", subject: "Organic Chemistry", color: "text-purple-500" },
        { time: "11:30 AM", subject: "Inorganic Chemistry", color: "text-purple-600" }
      ],
      utilization: 60,
      capacity: 25
    },
    {
      id: 4,
      room: "Room 104 - Biology Lab",
      schedule: [
        { time: "8:30 AM", subject: "Botany", color: "text-orange-500" },
        { time: "10:30 AM", subject: "Zoology", color: "text-orange-600" },
        { time: "3:00 PM", subject: "Microbiology", color: "text-orange-400" }
      ],
      utilization: 80,
      capacity: 28
    },
    {
      id: 5,
      room: "Room 105 - Computer Lab",
      schedule: [
        { time: "9:00 AM", subject: "Programming", color: "text-indigo-500" },
        { time: "2:00 PM", subject: "Web Development", color: "text-indigo-600" }
      ],
      utilization: 50,
      capacity: 40
    },
    {
      id: 6,
      room: "Room 106 - English",
      schedule: [
        { time: "8:00 AM", subject: "Literature", color: "text-pink-500" },
        { time: "11:00 AM", subject: "Grammar", color: "text-pink-600" },
        { time: "1:30 PM", subject: "Creative Writing", color: "text-pink-400" }
      ],
      utilization: 70,
      capacity: 30
    }
  ]);

  const teacherSchedule = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      subject: "Mathematics Teacher",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      classesWeek: 15,
      hoursWeek: 45,
      nextClass: "Grade 12 Calculus - 9:00 AM",
      experience: "12 years",
      qualification: "Ph.D Mathematics"
    },
    {
      id: 2,
      name: "Dr. Priya Singh",
      subject: "Physics Teacher",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      classesWeek: 12,
      hoursWeek: 36,
      nextClass: "Grade 11 Physics - 11:00 AM",
      experience: "8 years",
      qualification: "M.Sc Physics"
    },
    {
      id: 3,
      name: "Ms. Anita Patel",
      subject: "Chemistry Teacher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      classesWeek: 10,
      hoursWeek: 30,
      nextClass: "Grade 10 Chemistry - 2:00 PM",
      experience: "6 years",
      qualification: "M.Sc Chemistry"
    },
    {
      id: 4,
      name: "Dr. Amit Sharma",
      subject: "Biology Teacher",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      classesWeek: 8,
      hoursWeek: 24,
      nextClass: "Grade 12 Biology - 10:30 AM",
      experience: "10 years",
      qualification: "Ph.D Biology"
    },
    {
      id: 5,
      name: "Ms. Sneha Gupta",
      subject: "English Teacher",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      classesWeek: 14,
      hoursWeek: 42,
      nextClass: "Grade 11 Literature - 8:00 AM",
      experience: "5 years",
      qualification: "M.A English"
    }
  ];

  const currentSchedule = weeklySchedules[currentWeekIndex];

  const getClassForTimeSlot = (day, time) => {
    return currentSchedule.classes.find(c => c.day === day && c.time === time);
  };

  const navigateWeek = (direction) => {
    if (direction === 'prev' && currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
    } else if (direction === 'next' && currentWeekIndex < weeklySchedules.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEventsActivities(eventsActivities.filter(event => event.id !== eventId));
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowEventModal(true);
  };

  const handleSaveEvent = (eventData) => {
    if (editingEvent) {
      setEventsActivities(eventsActivities.map(event =>
        event.id === editingEvent.id ? { ...event, ...eventData } : event
      ));
    } else {
      const newEvent = {
        ...eventData,
        id: Math.max(...eventsActivities.map(e => e.id)) + 1,
        color: `border-${['blue', 'green', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 5)]}-200`
      };
      setEventsActivities([...eventsActivities, newEvent]);
    }
    setShowEventModal(false);
    setEditingEvent(null);
  };

  const handleDeleteRoom = (roomId) => {
    setRoomUtilization(roomUtilization.filter(room => room.id !== roomId));
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setShowRoomModal(true);
  };

  const handleSaveRoom = (roomData) => {
    if (editingRoom) {
      setRoomUtilization(roomUtilization.map(room =>
        room.id === editingRoom.id ? { ...room, ...roomData } : room
      ));
    } else {
      const newRoom = {
        ...roomData,
        id: Math.max(...roomUtilization.map(r => r.id)) + 1,
      };
      setRoomUtilization([...roomUtilization, newRoom]);
    }
    setShowRoomModal(false);
    setEditingRoom(null);
  };

  const handleSaveSchedule = (scheduleData) => {
    if (editingSchedule) {
      const updatedWeeklySchedules = weeklySchedules.map((week, index) =>
        index === currentWeekIndex
          ? {
            ...week,
            classes: week.classes.map(cls =>
              cls.id === editingSchedule.id ? { ...cls, ...scheduleData } : cls
            )
          }
          : week
      );
      setWeeklySchedules(updatedWeeklySchedules);
    } else {
      const newSchedule = {
        ...scheduleData,
        id: Math.max(...currentSchedule.classes.map(c => c.id || 0)) + 1,
        color: `bg-${['blue', 'green', 'purple', 'orange', 'pink', 'yellow'][Math.floor(Math.random() * 6)]}-200 text-${['blue', 'green', 'purple', 'orange', 'pink', 'yellow'][Math.floor(Math.random() * 6)]}-800`
      };

      const updatedWeeklySchedules = weeklySchedules.map((week, index) =>
        index === currentWeekIndex
          ? { ...week, classes: [...week.classes, newSchedule] }
          : week
      );
      setWeeklySchedules(updatedWeeklySchedules);
    }
    setShowScheduleModal(false);
    setEditingSchedule(null);
  };

  const exportSchedule = () => {
    const data = {
      currentWeek: currentSchedule,
      events: eventsActivities,
      rooms: roomUtilization,
      teachers: teacherSchedule
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `schedule_${currentSchedule.week.replace(/\s+/g, '_')}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const EventModal = () => {
    const [formData, setFormData] = useState(editingEvent || {
      title: '',
      date: '',
      time: '',
      venue: '',
      participants: '',
      status: 'Event',
      description: ''
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`rounded-lg p-6 w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </h3>
            <button
              onClick={() => {
                setShowEventModal(false);
                setEditingEvent(null);
              }}
              className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />

            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
                }`}
            />

            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
                }`}
            />

            <input
              type="text"
              placeholder="Venue"
              value={formData.venue}
              onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />

            <input
              type="text"
              placeholder="Participants"
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />

            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
                }`}
            >
              <option value="Event">Event</option>
              <option value="Competition">Competition</option>
              <option value="Meeting">Meeting</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Cultural">Cultural</option>
            </select>

            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => handleSaveEvent(formData)}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={16} />
              Save Event
            </button>
            <button
              onClick={() => {
                setShowEventModal(false);
                setEditingEvent(null);
              }}
              className={`px-4 py-2 border rounded-lg transition-colors ${isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ScheduleModal = () => {
    const [formData, setFormData] = useState(editingSchedule || {
      day: 'Monday',
      time: '8:00 AM',
      subject: '',
      class: '',
      teacher: '',
      color: 'bg-blue-200 text-blue-800'
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`rounded-lg p-6 w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {editingSchedule ? 'Edit Schedule' : 'Add New Schedule'}
            </h3>
            <button
              onClick={() => {
                setShowScheduleModal(false);
                setEditingSchedule(null);
              }}
              className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <select
              value={formData.day}
              onChange={(e) => setFormData({ ...formData, day: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
                }`}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>

            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
                }`}
            >
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />

            <input
              type="text"
              placeholder="Class"
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />

            <input
              type="text"
              placeholder="Teacher"
              value={formData.teacher}
              onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => handleSaveSchedule(formData)}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={16} />
              {editingSchedule ? 'Update Schedule' : 'Add Schedule'}
            </button>
            <button
              onClick={() => {
                setShowScheduleModal(false);
                setEditingSchedule(null);
              }}
              className={`px-4 py-2 border rounded-lg transition-colors ${isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const RoomModal = () => {
    const [formData, setFormData] = useState(editingRoom || {
      room: '',
      capacity: 30,
      utilization: 50,
      schedule: [{ time: '', subject: '', color: 'text-blue-500' }]
    });

    const addScheduleSlot = () => {
      setFormData({
        ...formData,
        schedule: [...formData.schedule, { time: '', subject: '', color: 'text-blue-500' }]
      });
    };

    const updateScheduleSlot = (index, field, value) => {
      const updatedSchedule = formData.schedule.map((slot, i) =>
        i === index ? { ...slot, [field]: value } : slot
      );
      setFormData({ ...formData, schedule: updatedSchedule });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`rounded-lg p-6 w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {editingRoom ? 'Edit Room' : 'Add New Room'}
            </h3>
            <button
              onClick={() => {
                setShowRoomModal(false);
                setEditingRoom(null);
              }}
              className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Room Name"
              value={formData.room}
              onChange={(e) => setFormData({ ...formData, room: e.target.value })}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                }`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Capacity
                </label>
                <input
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
                    }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Utilization (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.utilization}
                  onChange={(e) => setFormData({ ...formData, utilization: parseInt(e.target.value) })}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
                    }`}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Schedule
                </label>
                <button
                  type="button"
                  onClick={addScheduleSlot}
                  className="text-blue-500 text-sm flex items-center gap-1"
                >
                  <Plus size={14} />
                  Add Slot
                </button>
              </div>

              {formData.schedule.map((slot, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Time"
                    value={slot.time}
                    onChange={(e) => updateScheduleSlot(index, 'time', e.target.value)}
                    className={`p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                      }`}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={slot.subject}
                    onChange={(e) => updateScheduleSlot(index, 'subject', e.target.value)}
                    className={`p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => handleSaveRoom(formData)}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={16} />
              {editingRoom ? 'Update Room' : 'Add Room'}
            </button>
            <button
              onClick={() => {
                setShowRoomModal(false);
                setEditingRoom(null);
              }}
              className={`px-4 py-2 border rounded-lg transition-colors ${isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AttendanceModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-lg p-6 w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Mark Today's Attendance</h3>
          <button
            onClick={() => setShowAttendanceModal(false)}
            className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <select className={`w-full p-3 border rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
            }`}>
            <option>Select Class</option>
            <option>Class 10-A</option>
            <option>Class 10-B</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>

          <select className={`w-full p-3 border rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
            }`}>
            <option>Select Subject</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
          </select>

          <div className="text-center py-4">
            <ClipboardCheck size={48} className="mx-auto text-green-500 mb-2" />
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Ready to mark attendance for today's class</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={() => {
              alert('Attendance marked successfully!');
              setShowAttendanceModal(false);
            }}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Mark Attendance
          </button>
          <button
            onClick={() => setShowAttendanceModal(false)}
            className={`px-4 py-2 border rounded-lg transition-colors ${isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const AssignmentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-lg p-6 w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Create Assignment</h3>
          <button
            onClick={() => setShowAssignmentModal(false)}
            className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Assignment Title"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
              }`}
          />

          <select className={`w-full p-3 border rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
            }`}>
            <option>Select Class</option>
            <option>Class 10-A</option>
            <option>Class 10-B</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>

          <select className={`w-full p-3 border rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
            }`}>
            <option>Select Subject</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
          </select>

          <input
            type="date"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
              }`}
          />

          <textarea
            placeholder="Assignment Description"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-20 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
              }`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={() => {
              alert('Assignment created successfully!');
              setShowAssignmentModal(false);
            }}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen size={16} />
            Create Assignment
          </button>
          <button
            onClick={() => setShowAssignmentModal(false)}
            className={`px-4 py-2 border rounded-lg transition-colors ${isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const ClassUpdateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-lg p-6 w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Add Class Update</h3>
          <button
            onClick={() => setShowClassUpdateModal(false)}
            className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Update Title"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
              }`}
          />

          <select className={`w-full p-3 border rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
            }`}>
            <option>Select Class</option>
            <option>Class 10-A</option>
            <option>Class 10-B</option>
            <option>Class 11</option>
            <option>Class 12</option>
            <option>All Classes</option>
          </select>

          <select className={`w-full p-3 border rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'border-gray-300'
            }`}>
            <option>Update Type</option>
            <option>Homework</option>
            <option>Test Announcement</option>
            <option>Important Notice</option>
            <option>Class Cancellation</option>
            <option>Extra Class</option>
          </select>

          <textarea
            placeholder="Update Description"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-24 ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'border-gray-300'
              }`}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={() => {
              alert('Class update posted successfully!');
              setShowClassUpdateModal(false);
            }}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Post Update
          </button>
          <button
            onClick={() => setShowClassUpdateModal(false)}
            className={`px-4 py-2 border rounded-lg transition-colors ${isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const renderWeeklyView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigateWeek('prev')}
            disabled={currentWeekIndex === 0}
            className={`p-2 rounded-lg ${currentWeekIndex === 0
              ? `${isDarkMode ? 'text-gray-500' : 'text-gray-300'} cursor-not-allowed`
              : `${isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-600 hover:bg-gray-100'}`
              }`}
          >
            <ChevronLeft size={20} />
          </button>
          <h3 className={`text-lg font-semibold text-center sm:text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {currentSchedule.week}
          </h3>
          <button
            onClick={() => navigateWeek('next')}
            disabled={currentWeekIndex === weeklySchedules.length - 1}
            className={`p-2 rounded-lg ${currentWeekIndex === weeklySchedules.length - 1
              ? `${isDarkMode ? 'text-gray-500' : 'text-gray-300'} cursor-not-allowed`
              : `${isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-600 hover:bg-gray-100'}`
              }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-7 gap-px bg-gray-300">
            <div className={`p-3 text-center font-medium ${isDarkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
              Time
            </div>
            {currentSchedule.days.map((day) => (
              <div key={day.name} className={`p-3 text-center ${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
                <div className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {day.name}
                </div>
                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {day.date}
                </div>
              </div>
            ))}

            {currentSchedule.timeSlots.map((time) => (
              <React.Fragment key={time}>
                <div className={`p-3 text-center font-medium text-sm ${isDarkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                  {time}
                </div>
                {currentSchedule.days.map((day) => {
                  const classItem = getClassForTimeSlot(day.name, time);
                  return (
                    <div key={`${day.name}-${time}`} className={`p-1 min-h-[70px] ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
                      {classItem && (
                        <div className={`p-2 rounded-lg text-xs ${classItem.color} h-full relative group`}>
                          <div className="font-semibold truncate">{classItem.subject}</div>
                          <div className="mt-1 truncate">{classItem.class}</div>
                          <div className="mt-1 truncate">{classItem.teacher}</div>
                          <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingSchedule(classItem);
                                setShowScheduleModal(true);
                              }}
                              className="p-1 bg-white rounded shadow-sm"
                            >
                              <Edit size={12} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const updatedWeeklySchedules = weeklySchedules.map((week, index) =>
                                  index === currentWeekIndex
                                    ? { ...week, classes: week.classes.filter(c => c.id !== classItem.id) }
                                    : week
                                );
                                setWeeklySchedules(updatedWeeklySchedules);
                              }}
                              className="p-1 bg-white rounded shadow-sm"
                            >
                              <Trash2 size={12} />
                            </button>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-white border'}`}>
          <h4 className={`font-semibold mb-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>This Week</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Classes:</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentSchedule.classes.length}</span>
            </div>
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Teaching Hours:</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentSchedule.classes.length * 1} Hours</span>
            </div>
            <div className="flex justify-between">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tests Scheduled:</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentSchedule.classes.filter(c => c.subject.includes('Test')).length}</span>
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-white border'}`}>
          <h4 className={`font-semibold mb-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Subject Distribution</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-500">Mathematics</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentSchedule.classes.filter(c => c.subject.includes('Mathematics')).length} Classes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-500">Physics</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentSchedule.classes.filter(c => c.subject.includes('Physics')).length} Classes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-500">Chemistry</span>
              <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentSchedule.classes.filter(c => c.subject.includes('Chemistry')).length} Classes</span>
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-white border'}`}>
          <h4 className={`font-semibold mb-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h4>
          <div className="space-y-2 text-sm">
            <button
              onClick={() => setShowAttendanceModal(true)}
              className="w-full text-left text-blue-500 hover:text-blue-600"
            >
              → Mark Today's Attendance
            </button>
            <button
              onClick={() => setShowAssignmentModal(true)}
              className="w-full text-left text-blue-500 hover:text-blue-600"
            >
              → Create Assignment
            </button>
            <button
              onClick={() => setShowClassUpdateModal(true)}
              className="w-full text-left text-blue-500 hover:text-blue-600"
            >
              → Add Class Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEventsActivities = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Upcoming Events & Activities
        </h3>
        <button
          onClick={() => setShowEventModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <Calendar size={16} />
          Add Event
        </button>
      </div>

      <div className="space-y-4">
        {eventsActivities.map((event) => (
          <div key={event.id} className={`p-4 sm:p-6 rounded-2xl border-l-4 ${event.color} ${isDarkMode ? 'bg-slate-800 border-r border-t border-b border-slate-700' : 'bg-white border-r border-t border-b border-gray-200 shadow-sm'
            }`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
                  <h4 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.status === 'Competition' ? 'bg-blue-100 text-blue-700' :
                      event.status === 'Exhibition' ? 'bg-green-100 text-green-700' :
                        event.status === 'Meeting' ? 'bg-yellow-100 text-yellow-700' :
                          event.status === 'Cultural' ? 'bg-purple-100 text-purple-700' :
                            'bg-gray-100 text-gray-700'
                      }`}>
                      {event.status}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleEditEvent(event)}
                        className={`p-1 rounded ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
                      >
                        <Edit size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className={`p-1 rounded ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
                      >
                        <Trash2 size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{event.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {new Date(event.date).toLocaleDateString()}
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Room Utilization
        </h3>
        <button
          onClick={() => setShowRoomModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <Plus size={16} />
          Add Room
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roomUtilization.map((room) => (
          <div key={room.id} className={`p-4 rounded-2xl ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50 border border-gray-200'
            }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h4 className={`font-semibold text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {room.room}
              </h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleEditRoom(room)}
                  className={`p-1 rounded ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-200'}`}
                >
                  <Edit size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
                <button
                  onClick={() => handleDeleteRoom(room.id)}
                  className={`p-1 rounded ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-200'}`}
                >
                  <Trash2 size={16} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {room.schedule.map((session, sessionIndex) => (
                <div key={sessionIndex} className="flex justify-between items-center text-sm">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {session.time}
                  </span>
                  <span className={`font-medium ${session.color}`}>
                    {session.subject}
                  </span>
                </div>
              ))}
            </div>

            <div className={`pt-3 border-t ${isDarkMode ? 'border-slate-600' : 'border-gray-300'}`}>
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Utilization: {room.utilization}%
                </span>
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Capacity: {room.capacity}
                </span>
              </div>
              <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-slate-600' : 'bg-gray-200'}`}>
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${room.utilization >= 80 ? 'bg-red-500' :
                    room.utilization >= 60 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Teacher Schedule
        </h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
          <UserPlus size={16} />
          Add Teacher
        </button>
      </div>

      <div className="space-y-4">
        {teacherSchedule.map((teacher) => (
          <div key={teacher.id} className={`p-4 rounded-2xl ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200 shadow-sm'
            }`}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className={`font-semibold text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {teacher.name}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {teacher.subject}
                  </p>
                  <div className={`flex items-center gap-2 mt-1 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span>{teacher.experience} experience</span>
                    <span>•</span>
                    <span>{teacher.qualification}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-4 lg:gap-8 flex-1">
                <div className="text-center">
                  <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {teacher.classesWeek}
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Classes/Week
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {teacher.hoursWeek}
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Hours/Week
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-blue-500 text-sm font-medium mb-1">Next Class:</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {teacher.nextClass}
                  </div>
                </div>
                <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                  <Calendar size={20} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>
            <div className="sm:hidden mt-3 pt-3 border-t border-gray-200 dark:border-slate-600">
              <div className="text-blue-500 text-sm font-medium mb-1">Next Class:</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {teacher.nextClass}
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

      <main className={`transition-all duration-300 ${isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="text-left">
              <h1 className={`text-2xl sm:text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Schedule Management
              </h1>
              <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage Classes, Events and Activities
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowScheduleModal(true)}
                className="flex-1 sm:flex-none bg-blue-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Plus size={16} />
                <span className="hidden sm:inline">Add Schedule</span>
                <span className="sm:hidden">Add</span>
              </button>
              <button
                onClick={exportSchedule}
                className={`flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg border flex items-center justify-center gap-2 transition-colors text-sm ${isDarkMode ? 'border-slate-600 text-gray-300 hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>

          <div className={`rounded-2xl ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200 shadow-sm'}`}>

            <div className="px-4 pt-4 md:pt-6">
              <div className={`flex gap-4 md:gap-8 border-b overflow-x-auto ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                <button
                  onClick={() => setActiveTab('weekly')}
                  className={`pb-3 md:pb-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'weekly'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                    }`}
                >
                  Weekly View
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`pb-3 md:pb-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'events'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                    }`}
                >
                  Events & Activities
                </button>
                <button
                  onClick={() => setActiveTab('class')}
                  className={`pb-3 md:pb-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'class'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                    }`}
                >
                  Class Schedule
                </button>
                <button
                  onClick={() => setActiveTab('teacher')}
                  className={`pb-3 md:pb-4 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'teacher'
                      ? 'border-blue-500 text-blue-500'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
                    }`}
                >
                  Teachers
                </button>
              </div>
            </div>

            <div className="p-4 md:p-6">
              {activeTab === 'weekly' && renderWeeklyView()}
              {activeTab === 'events' && renderEventsActivities()}
              {activeTab === 'class' && renderClassSchedule()}
              {activeTab === 'teacher' && renderTeacherSchedule()}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />

      {showEventModal && <EventModal />}
      {showAttendanceModal && <AttendanceModal />}
      {showAssignmentModal && <AssignmentModal />}
      {showClassUpdateModal && <ClassUpdateModal />}
      {showRoomModal && <RoomModal />}
      {showScheduleModal && <ScheduleModal />}
    </div>
  );
};

export default ScheduleManagement;