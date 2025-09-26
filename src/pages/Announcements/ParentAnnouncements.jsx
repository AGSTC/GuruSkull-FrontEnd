import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import boyChild from '../../assets/images/student-profile.png';
import girlChild from '../../assets/images/girl.png';

import { 
  Bell,
  Calendar,
  Clock,
  AlertCircle,
  Info,
  CheckCircle,
  X,
  Filter,
  Search
} from 'lucide-react';

const ParentAnnouncements = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedChild, setSelectedChild] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Children data
  const children = [
    {
      id: 1,
      name: 'Aarav Sharma',
      class: 'Class 10-A',
      avatar: 'A',
      image: boyChild,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Priya Sharma', 
      class: 'Class 8-B',
      avatar: 'P',
      image: girlChild,
      color: 'bg-green-500'
    }
  ];

  // Announcements data for each child
  const announcementsData = {
    0: [ // Aarav Sharma
      {
        id: 1,
        title: 'Physics Lab Session - Special Class',
        description: 'Special physics lab session has been scheduled for this weekend to complete the practical examination. All students are required to attend with their lab manuals and safety equipment.',
        date: '22 Dec 2024',
        time: '2 hours ago',
        type: 'important',
        subject: 'Physics',
        icon: '🔬',
        priority: 'high'
      },
      {
        id: 2,
        title: 'Mathematics Extra Session - Special Class',
        description: 'Extra mathematics session will be conducted to cover advanced calculus topics. Students struggling with integration are especially encouraged to attend this session.',
        date: '20 Dec 2024', 
        time: '1 day ago',
        type: 'info',
        subject: 'Mathematics',
        icon: '📐',
        priority: 'medium'
      },
      {
        id: 3,
        title: 'New Study Materials Available',
        description: 'New study materials for upcoming board examinations have been uploaded to the student portal. Please download and review the materials before next class.',
        date: '18 Dec 2024',
        time: '3 days ago', 
        type: 'info',
        subject: 'General',
        icon: '📚',
        priority: 'low'
      },
      {
        id: 4,
        title: 'Physics Lab Session - Special Class',
        description: 'Make-up physics lab session for students who missed the previous practical. Bring all required equipment and safety gear.',
        date: '15 Dec 2024',
        time: '1 week ago',
        type: 'important',
        subject: 'Physics', 
        icon: '⚗️',
        priority: 'high'
      },
      {
        id: 5,
        title: 'Physics Lab Session - Special Class',
        description: 'Advanced physics experiment demonstration will be conducted. Optional attendance but highly recommended for board exam preparation.',
        date: '12 Dec 2024',
        time: '1 week ago',
        type: 'info',
        subject: 'Physics',
        icon: '🔬',
        priority: 'medium'
      },
      {
        id: 6,
        title: 'Physics Lab Session - Special Class', 
        description: 'Final physics lab session before winter break. Complete all pending experiments and submit lab reports.',
        date: '10 Dec 2024',
        time: '2 weeks ago',
        type: 'important',
        subject: 'Physics',
        icon: '📊',
        priority: 'high'
      },
      {
        id: 7,
        title: 'Physics Lab Session - Special Class',
        description: 'Safety briefing and equipment check for all physics lab students. Mandatory attendance required.',
        date: '8 Dec 2024', 
        time: '2 weeks ago',
        type: 'important',
        subject: 'Physics',
        icon: '🔬',
        priority: 'high'
      },
      {
        id: 8,
        title: 'Physics Lab Session - Special Class',
        description: 'Introduction to quantum physics concepts through practical demonstrations. Supplementary session for interested students.',
        date: '5 Dec 2024',
        time: '2 weeks ago', 
        type: 'info',
        subject: 'Physics',
        icon: '⚛️',
        priority: 'low'
      }
    ],
    1: [ // Priya Sharma
      {
        id: 1,
        title: 'Art Competition Registration Open',
        description: 'Annual inter-school art competition registration is now open. Students interested in participating should submit their entries by the deadline.',
        date: '21 Dec 2024',
        time: '1 day ago',
        type: 'info',
        subject: 'Art',
        icon: '🎨',
        priority: 'medium'
      },
      {
        id: 2,
        title: 'Science Project Deadline Extended',
        description: 'The deadline for science project submission has been extended by one week due to technical difficulties in the lab.',
        date: '19 Dec 2024',
        time: '3 days ago',
        type: 'important', 
        subject: 'Science',
        icon: '🔬',
        priority: 'high'
      },
      {
        id: 3,
        title: 'Math Olympiad Training Sessions',
        description: 'Special training sessions for Math Olympiad participants will begin next week. Selected students will receive detailed schedule.',
        date: '17 Dec 2024',
        time: '5 days ago',
        type: 'info',
        subject: 'Mathematics',
        icon: '🏆',
        priority: 'medium'
      },
      {
        id: 4,
        title: 'Library Hours Extended',
        description: 'Library will remain open until 6 PM during exam preparation period. Students can utilize this time for group studies.',
        date: '15 Dec 2024',
        time: '1 week ago',
        type: 'info',
        subject: 'General',
        icon: '📚',
        priority: 'low'
      }
    ]
  };

  const currentChild = children[selectedChild];
  const announcements = announcementsData[selectedChild] || [];

  // Filter announcements based on search term and filter type
  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || announcement.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  const getAnnouncementIcon = (type, priority) => {
    if (type === 'important' || priority === 'high') {
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    } else if (type === 'info') {
      return <Info className="w-5 h-5 text-blue-500" />;
    }
    return <Bell className="w-5 h-5 text-gray-500" />;
  };

  const getAnnouncementBorderColor = (type, priority) => {
    if (type === 'important' || priority === 'high') {
      return 'border-l-red-500';
    } else if (type === 'info') {
      return 'border-l-blue-500';
    }
    return 'border-l-gray-300';
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="announcements" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
            
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Attendance
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Track your child's attendance records
            </p>
          </div>

          {/* Select Child */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Select Child
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {children.map((child, index) => (
                <div
                  key={child.id}
                  onClick={() => setSelectedChild(index)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedChild === index
                      ? 'border-blue-500 bg-blue-50'
                      : isDarkMode 
                        ? 'border-slate-600 hover:border-slate-500 bg-slate-700' 
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className={`w-12 h-12 rounded-full hidden items-center justify-center text-white text-lg font-bold ${child.color}`}
                      >
                        {child.avatar}
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        selectedChild === index ? 'text-blue-700' : isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {child.name}
                      </h3>
                      <p className={`text-sm ${
                        selectedChild === index ? 'text-blue-600' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {child.class}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className={`pl-4 pr-10 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="all">All Types</option>
                  <option value="important">Important</option>
                  <option value="info">Information</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Recent Announcements */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Announcement
              </h2>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredAnnouncements.length === 0 ? (
                <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No announcements found</p>
                </div>
              ) : (
                filteredAnnouncements.map((announcement) => (
                  <div 
                    key={announcement.id} 
                    className={`border-l-4 ${getAnnouncementBorderColor(announcement.type, announcement.priority)} p-4 rounded-lg ${
                      isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                    } border border-l-4`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getAnnouncementIcon(announcement.type, announcement.priority)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className={`font-semibold text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {announcement.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs">
                            <span className={`px-2 py-1 rounded-full font-medium ${
                              announcement.priority === 'high' ? 'bg-red-100 text-red-700' :
                              announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {announcement.priority}
                            </span>
                          </div>
                        </div>
                        <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {announcement.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs">
                            <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <Calendar className="w-3 h-3" />
                              {announcement.date}
                            </span>
                            <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <Clock className="w-3 h-3" />
                              {announcement.time}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            announcement.subject === 'Physics' ? 'bg-blue-100 text-blue-700' :
                            announcement.subject === 'Mathematics' ? 'bg-green-100 text-green-700' :
                            announcement.subject === 'Science' ? 'bg-purple-100 text-purple-700' :
                            announcement.subject === 'Art' ? 'bg-pink-100 text-pink-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {announcement.subject}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default ParentAnnouncements;