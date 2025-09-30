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
      return <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500" />;
    } else if (type === 'info') {
      return <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />;
    }
    return <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />;
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

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
            
          {/* Header */}
          <div className="text-left mb-4 md:mb-6 lg:mb-8">
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Announcements
            </h1>
            <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Stay updated with important announcements
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border mb-6 md:mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 md:py-3 rounded-lg border text-sm md:text-base ${
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
                  className={`pl-3 pr-8 md:pl-4 md:pr-10 py-2 md:py-3 rounded-lg border text-sm md:text-base ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="all">All Types</option>
                  <option value="important">Important</option>
                  <option value="info">Information</option>
                </select>
                <Filter className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Recent Announcements */}
          <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Announcements
              </h2>
            </div>
            
            <div className="space-y-3 md:space-y-4 max-h-96 overflow-y-auto">
              {filteredAnnouncements.length === 0 ? (
                <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Bell className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 opacity-50" />
                  <p className="text-sm md:text-base">No announcements found</p>
                </div>
              ) : (
                filteredAnnouncements.map((announcement) => (
                  <div 
                    key={announcement.id} 
                    className={`border-l-4 ${getAnnouncementBorderColor(announcement.type, announcement.priority)} p-3 md:p-4 rounded-lg ${
                      isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                    } border border-l-4`}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getAnnouncementIcon(announcement.type, announcement.priority)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2 sm:gap-0">
                          <h4 className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {announcement.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs">
                            <span className={`px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                              announcement.priority === 'high' ? 'bg-red-100 text-red-700' :
                              announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {announcement.priority}
                            </span>
                          </div>
                        </div>
                        <p className={`text-xs md:text-sm mb-2 md:mb-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {announcement.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                          <div className="flex items-center gap-3 md:gap-4 text-xs">
                            <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <Calendar className="w-3 h-3" />
                              {announcement.date}
                            </span>
                            <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <Clock className="w-3 h-3" />
                              {announcement.time}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
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