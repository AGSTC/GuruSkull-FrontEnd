import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { Filter, Plus, Calendar, Users, Clock, MoreHorizontal, Eye, Heart, MessageCircle, Share2, X } from 'lucide-react';

const TeacherAnnouncements = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [filterType, setFilterType] = useState('All Types');
  const [displayCount, setDisplayCount] = useState(6); // Initially show 6 announcements
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dropdownRefs = useRef({});

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && dropdownRefs.current[openDropdown] && 
          !dropdownRefs.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  // Toggle dropdown menu
  const toggleDropdown = (announcementId) => {
    setOpenDropdown(openDropdown === announcementId ? null : announcementId);
  };

  // View announcement in modal
  const viewAnnouncement = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowModal(true);
    setOpenDropdown(null);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedAnnouncement(null);
  };

  // Extended announcements array with more diverse content
  const allAnnouncements = [
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
      title: 'Chemistry Lab Equipment Update',
      author: 'Chemistry',
      date: '2 days ago · 9:15 AM',
      content: 'New equipment has been installed in the chemistry lab. Students will have access to advanced spectroscopy tools for upcoming experiments.',
      views: 32,
      likes: 8,
      comments: 2,
      priority: 'Medium',
      type: 'Class Update',
      status: 'High'
    },
    {
      id: 5,
      title: 'Mid-Term Exam Schedule Released',
      author: 'Admin',
      date: '2 days ago · 8:30 AM',
      content: 'The mid-term examination schedule has been released. Please check the student portal for detailed timing and room assignments.',
      views: 89,
      likes: 15,
      comments: 12,
      priority: 'High',
      type: 'Exam',
      status: 'Important'
    },
    {
      id: 6,
      title: 'Digital Library Access Expanded',
      author: 'Library',
      date: '3 days ago · 4:20 PM',
      content: 'We have expanded our digital library collection with over 500 new e-books and research papers. Access is now available 24/7 through the student portal.',
      views: 41,
      likes: 9,
      comments: 5,
      priority: 'Medium',
      type: 'Resource',
      status: 'New'
    },
    {
      id: 7,
      title: 'Biology Field Trip Announcement',
      author: 'Biology',
      date: '3 days ago · 1:15 PM',
      content: 'Field trip to the botanical garden is scheduled for next Friday. Students should wear comfortable shoes and bring notebooks for observations.',
      views: 33,
      likes: 7,
      comments: 2,
      priority: 'Medium',
      type: 'Class Update',
      status: 'New'
    },
    {
      id: 8,
      title: 'Final Exam Registration Open',
      author: 'Admin',
      date: '4 days ago · 11:30 AM',
      content: 'Registration for final examinations is now open. Students must complete registration by the end of this week to secure their exam slots.',
      views: 76,
      likes: 22,
      comments: 18,
      priority: 'High',
      type: 'Exam',
      status: 'Important'
    },
    {
      id: 9,
      title: 'Programming Workshop Resources',
      author: 'Computer Science',
      date: '4 days ago · 3:45 PM',
      content: 'Resources from last week\'s programming workshop are now available. Download the code examples and practice exercises from the resource center.',
      views: 37,
      likes: 11,
      comments: 6,
      priority: 'Low',
      type: 'Resource',
      status: 'High'
    },
    {
      id: 10,
      title: 'English Literature Essay Contest',
      author: 'English',
      date: '5 days ago · 10:00 AM',
      content: 'Annual essay contest on contemporary literature is now open for submissions. Prize money up to $500 for winners. Deadline is next month.',
      views: 28,
      likes: 6,
      comments: 3,
      priority: 'Medium',
      type: 'Class Update',
      status: 'New'
    },
    {
      id: 11,
      title: 'Online Database Training Session',
      author: 'Library',
      date: '5 days ago · 2:15 PM',
      content: 'Learn how to effectively use academic databases for research. Training session covers advanced search techniques and citation management.',
      views: 44,
      likes: 13,
      comments: 7,
      priority: 'Low',
      type: 'Resource',
      status: 'New'
    },
    {
      id: 12,
      title: 'Mathematics Olympiad Preparation',
      author: 'Mathematics',
      date: '6 days ago · 9:30 AM',
      content: 'Special preparation classes for Mathematics Olympiad participants. Sessions will be held every weekend until the competition date.',
      views: 35,
      likes: 9,
      comments: 4,
      priority: 'Medium',
      type: 'Class Update',
      status: 'High'
    },
    {
      id: 13,
      title: 'Quarterly Assessment Results',
      author: 'Admin',
      date: '6 days ago · 4:45 PM',
      content: 'Quarterly assessment results are now available in the student portal. Individual consultations can be scheduled with respective subject teachers.',
      views: 92,
      likes: 25,
      comments: 15,
      priority: 'High',
      type: 'Exam',
      status: 'Important'
    },
    {
      id: 14,
      title: 'Science Fair Project Guidelines',
      author: 'Science',
      date: '1 week ago · 11:00 AM',
      content: 'Guidelines for the upcoming science fair have been published. Projects should demonstrate innovation and practical application of scientific principles.',
      views: 58,
      likes: 16,
      comments: 9,
      priority: 'Medium',
      type: 'Resource',
      status: 'New'
    },
    {
      id: 15,
      title: 'History Museum Visit',
      author: 'History',
      date: '1 week ago · 3:20 PM',
      content: 'Educational visit to the national history museum planned for next month. This will complement our current curriculum on ancient civilizations.',
      views: 41,
      likes: 12,
      comments: 5,
      priority: 'Low',
      type: 'Class Update',
      status: 'New'
    }
  ];

  // Filter announcements based on selected type
  const filteredAnnouncements = useMemo(() => {
    if (filterType === 'All Types') {
      return allAnnouncements;
    }
    return allAnnouncements.filter(announcement => announcement.type === filterType);
  }, [filterType]);

  // Get announcements to display based on displayCount
  const announcementsToShow = filteredAnnouncements.slice(0, displayCount);

  // Check if there are more announcements to load
  const hasMoreAnnouncements = displayCount < filteredAnnouncements.length;

  // Load more announcements
  const loadMoreAnnouncements = () => {
    setDisplayCount(prev => Math.min(prev + 6, filteredAnnouncements.length));
  };

  // Reset display count when filter changes
  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setDisplayCount(6); // Reset to show initial 6 announcements
  };

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
                  {filteredAnnouncements.length} {filterType === 'All Types' ? 'Total' : filterType}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <select
                  value={filterType}
                  onChange={handleFilterChange}
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
              </div>
            </div>

            {/* Announcements List */}
            <div className="space-y-4">
              {announcementsToShow.length === 0 ? (
                <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  No announcements found for the selected type.
                </div>
              ) : (
                announcementsToShow.map((announcement) => (
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
                          
                          {/* Priority Badge and Dropdown */}
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                              {announcement.priority}
                            </span>
                            <div className="relative" ref={el => dropdownRefs.current[announcement.id] = el}>
                              <button 
                                onClick={() => toggleDropdown(announcement.id)}
                                className={`p-1 rounded-md ${
                                  isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                <MoreHorizontal size={16} />
                              </button>
                              
                              {/* Dropdown Menu */}
                              {openDropdown === announcement.id && (
                                <div className={`absolute right-0 top-8 w-32 rounded-md shadow-lg z-10 ${
                                  isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-200'
                                } border`}>
                                  <div className="py-1">
                                    <button
                                      onClick={() => viewAnnouncement(announcement)}
                                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
                                        isDarkMode 
                                          ? 'text-gray-300 hover:bg-slate-600 hover:text-white' 
                                          : 'text-gray-700 hover:bg-gray-100'
                                      }`}
                                    >
                                      <Eye size={14} />
                                      View
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
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
                ))
              )}
            </div>

            {/* Load More Button */}
            {hasMoreAnnouncements && (
              <div className="mt-8 text-center">
                <button 
                  onClick={loadMoreAnnouncements}
                  className={`px-6 py-3 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Load More Announcements ({filteredAnnouncements.length - displayCount} remaining)
                </button>
              </div>
            )}

            {/* Show "All loaded" message when no more announcements */}
            {!hasMoreAnnouncements && announcementsToShow.length > 6 && (
              <div className={`mt-8 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                All announcements loaded ({filteredAnnouncements.length} total)
              </div>
            )}
          </div>
        </div>

        {/* Modal for viewing announcement */}
        {showModal && selectedAnnouncement && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
            } shadow-2xl`}>
              
              {/* Modal Header */}
              <div className={`p-6 border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {selectedAnnouncement.author.charAt(0)}
                    </div>
                    
                    {/* Author info */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedAnnouncement.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm mb-2">
                        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {selectedAnnouncement.author}
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {selectedAnnouncement.date}
                        </span>
                      </div>
                      
                      {/* Priority and Type badges */}
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(selectedAnnouncement.priority)}`}>
                          {selectedAnnouncement.priority} Priority
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isDarkMode ? 'bg-blue-900 text-blue-300 border-blue-700' : 'bg-blue-100 text-blue-700 border-blue-200'
                        } border`}>
                          {selectedAnnouncement.type}
                        </span>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(selectedAnnouncement.status)}
                          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {selectedAnnouncement.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className={`p-2 rounded-lg ${
                      isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className={`text-base leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedAnnouncement.content}
                </div>
                
                {/* Engagement Stats */}
                <div className={`flex items-center gap-8 p-4 rounded-lg ${
                  isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center gap-2 text-sm">
                    <Eye size={16} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedAnnouncement.views} Views
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Heart size={16} className={isDarkMode ? 'text-red-400' : 'text-red-600'} />
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedAnnouncement.likes} Likes
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageCircle size={16} className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedAnnouncement.comments} Comments
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className={`p-6 border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}>
                      <Heart size={14} className="inline mr-2" />
                      Like
                    </button>
                    <button className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}>
                      <MessageCircle size={14} className="inline mr-2" />
                      Comment
                    </button>
                    <button className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}>
                      <Share2 size={14} className="inline mr-2" />
                      Share
                    </button>
                  </div>
                  
                  <button
                    onClick={closeModal}
                    className={`px-6 py-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherAnnouncements;