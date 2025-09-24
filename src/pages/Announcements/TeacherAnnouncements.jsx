import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { Filter, Plus, Calendar, Users, Clock, MoreHorizontal, Eye, Heart, MessageCircle, Share2 } from 'lucide-react';

const TeacherAnnouncements = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [filterType, setFilterType] = useState('All Types');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const announcements = [
    {
      id: 1,
      title: 'Physics Lab Session - Special Class',
      author: 'Physics',
      date: 'Today · 10:00 AM',
      content: 'Extra physics lab session is scheduled for this Saturday at 10:00 AM. Students should bring their lab manuals and calculators. We will be covering electromagnetic induction experiments.',
      views: 24,
      likes: 5,
      comments: 3,
      priority: 'High',
      type: 'Class Update',
      status: 'New'
    },
    {
      id: 2,
      title: 'Mathematics Exam Postponed',
      author: 'Mathematics',
      date: 'Yesterday · 2:30 PM',
      content: 'Due to technical issues, the mathematics exam scheduled for tomorrow has been postponed to next Monday. Please prepare accordingly and bring all necessary materials.',
      views: 45,
      likes: 12,
      comments: 8,
      priority: 'High',
      type: 'Exam',
      status: 'Important'
    },
    {
      id: 3,
      title: 'New Study Materials Available',
      author: 'Admin',
      date: 'Yesterday · 11:45 AM',
      content: 'New study materials for Physics and Chemistry are now available in the resource section. Students can download them from the student portal.',
      views: 67,
      likes: 18,
      comments: 4,
      priority: 'Medium',
      type: 'Resource',
      status: 'New'
    },
    {
      id: 4,
      title: 'Physics Lab Session - Special Class',
      author: 'Physics',
      date: '2 days ago · 9:15 AM',
      content: 'Extra physics lab session is scheduled for this Saturday at 10:00 AM. Students should bring their lab manuals and calculators.',
      views: 32,
      likes: 8,
      comments: 2,
      priority: 'High',
      type: 'Class Update',
      status: 'High'
    },
    {
      id: 5,
      title: 'Physics Lab Session - Special Class',
      author: 'Physics',
      date: '2 days ago · 8:30 AM',
      content: 'Extra physics lab session is scheduled for this Saturday at 10:00 AM. Students should bring their lab manuals and calculators.',
      views: 28,
      likes: 6,
      comments: 1,
      priority: 'High',
      type: 'Class Update',
      status: 'High'
    },
    {
      id: 6,
      title: 'Physics Lab Session - Special Class',
      author: 'Physics',
      date: '3 days ago · 4:20 PM',
      content: 'Extra physics lab session is scheduled for this Saturday at 10:00 AM. Students should bring their lab manuals and calculators.',
      views: 41,
      likes: 9,
      comments: 5,
      priority: 'High',
      type: 'Class Update',
      status: 'High'
    },
    {
      id: 7,
      title: 'Physics Lab Session - Special Class',
      author: 'Physics',
      date: '3 days ago · 1:15 PM',
      content: 'Extra physics lab session is scheduled for this Saturday at 10:00 AM. Students should bring their lab manuals and calculators.',
      views: 33,
      likes: 7,
      comments: 2,
      priority: 'High',
      type: 'Class Update',
      status: 'High'
    },
    {
      id: 8,
      title: 'Physics Lab Session - Special Class',
      author: 'Physics',
      date: '4 days ago · 11:30 AM',
      content: 'Extra physics lab session is scheduled for this Saturday at 10:00 AM. Students should bring their lab manuals and calculators.',
      views: 29,
      likes: 4,
      comments: 1,
      priority: 'High',
      type: 'Class Update',
      status: 'High'
    },
    {
      id: 9,
      title: 'Physics Lab Session - Special Class',
      author: 'Physics',
      date: '4 days ago · 3:45 PM',
      content: 'Extra physics lab session is scheduled for this Saturday at 10:00 AM. Students should bring their lab manuals and calculators.',
      views: 37,
      likes: 11,
      comments: 6,
      priority: 'High',
      type: 'Class Update',
      status: 'High'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    const baseClasses = "w-2 h-2 rounded-full";
    switch (status) {
      case 'New':
        return <div className={`${baseClasses} bg-green-500`}></div>;
      case 'Important':
        return <div className={`${baseClasses} bg-blue-500`}></div>;
      case 'High':
        return <div className={`${baseClasses} bg-red-500`}></div>;
      default:
        return <div className={`${baseClasses} bg-gray-400`}></div>;
    }
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
              Announcements
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Manage and share important updates with students and parents
            </p>
          </div>

          {/* Main Container */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          } mb-8`}>
            
            {/* Header with Filter */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Announcements
                </h2>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                }`}>
                  Announcements
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className={`px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="All Types">All Types</option>
                  <option value="Class Update">Class Update</option>
                  <option value="Exam">Exam</option>
                  <option value="Resource">Resource</option>
                </select>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none">
                  <Plus size={16} />
                  New Announcement
                </button>
              </div>
            </div>

            {/* Announcements List */}
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className={`p-4 rounded-lg border transition-colors ${
                  isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}>
                  <div className="flex items-start gap-4">
                    
                    {/* Status Indicator */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-2">
                      {getStatusIcon(announcement.status)}
                    </div>

                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {announcement.author.charAt(0)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className={`font-semibold text-base mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {announcement.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm mb-2">
                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {announcement.author}
                            </span>
                            <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                              {announcement.date}
                            </span>
                          </div>
                        </div>
                        
                        {/* Priority Badge */}
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                            {announcement.priority}
                          </span>
                          <button className={`p-1 rounded-md ${
                            isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                          }`}>
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {announcement.content}
                      </p>
                      
                      {/* Engagement Stats */}
                      <div className="flex items-center gap-6 text-sm">
                        <button className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                          <Eye size={14} />
                          <span>{announcement.views}</span>
                        </button>
                        <button className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-600'}`}>
                          <Heart size={14} />
                          <span>{announcement.likes}</span>
                        </button>
                        <button className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'}`}>
                          <MessageCircle size={14} />
                          <span>{announcement.comments}</span>
                        </button>
                        <button className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                          <Share2 size={14} />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className={`px-6 py-3 rounded-lg border transition-colors ${
                isDarkMode 
                  ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                Load More Announcements
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherAnnouncements;