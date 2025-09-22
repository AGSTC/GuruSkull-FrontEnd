import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Users,
  BookOpen,
  PartyPopper,
  DollarSign,
  GraduationCap,
  Clock,
  CheckCircle
} from 'lucide-react';

const AnnouncementManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPriority, setSelectedPriority] = useState('All Priorities');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnnouncements, setSelectedAnnouncements] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Stats data
  const stats = [
    {
      title: 'Total Announcements',
      value: '48',
      icon: '📢',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Active Announcements',
      value: '32',
      icon: '🟢',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      title: 'Scheduled',
      value: '6',
      icon: '📅',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
    {
      title: 'Total Views',
      value: '1,247',
      icon: '👁️',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  // Categories
  const categories = [
    'All Categories',
    'Academic',
    'Events',
    'Fees',
    'Holidays',
    'Schedule',
    'Faculty'
  ];

  // Sample announcements data
  const announcements = [
    {
      id: 1,
      category: 'Academic',
      title: 'Mid-Term Examination Schedule Released',
      description: 'The mid-term examination schedule for all classes has been released. Please check the notice board for detailed timings and subject-wise schedules.',
      priority: 'High',
      status: 'Active',
      author: 'Mrs. Priya Sharma',
      date: '15 Jan 2024, 04:30 pm',
      views: 245,
      categoryIcon: BookOpen,
      categoryColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 2,
      category: 'Events',
      title: 'Annual Sports Day Celebration',
      description: 'Join us for the annual sports day celebration. Various competitions and activities planned for all students.',
      priority: 'Medium',
      status: 'Active',
      author: 'Mr. Rajesh Kumar',
      date: '14 Jan 2024, 02:15 pm',
      views: 189,
      categoryIcon: PartyPopper,
      categoryColor: 'bg-green-100 text-green-800'
    },
    {
      id: 3,
      category: 'Fees',
      title: 'Fee Structure Update for Next Session',
      description: 'Updated fee structure for the upcoming academic session. Please review the changes and contact office for queries.',
      priority: 'High',
      status: 'Active',
      author: 'Mrs. Priya Sharma',
      date: '13 Jan 2024, 11:45 am',
      views: 324,
      categoryIcon: DollarSign,
      categoryColor: 'bg-purple-100 text-purple-800'
    },
    {
      id: 4,
      category: 'Holidays',
      title: 'Winter Break Holiday Notice',
      description: 'Winter break holidays announced. Classes will resume after the holiday period with regular schedule.',
      priority: 'Low',
      status: 'Active',
      author: 'Mrs. Priya Sharma',
      date: '12 Jan 2024, 09:30 am',
      views: 156,
      categoryIcon: Calendar,
      categoryColor: 'bg-red-100 text-red-800'
    },
    {
      id: 5,
      category: 'Schedule',
      title: 'Class Schedule Changes This Week',
      description: 'Important changes in class schedules for this week due to teacher training program.',
      priority: 'Medium',
      status: 'Draft',
      author: 'Mrs. Priya Sharma',
      date: '11 Jan 2024, 03:20 pm',
      views: 98,
      categoryIcon: Clock,
      categoryColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 6,
      category: 'Academic',
      title: 'Science Fair Project Submissions',
      description: 'Last date for science fair project submissions. Students are requested to submit their projects by the deadline.',
      priority: 'High',
      status: 'Active',
      author: 'Dr. Sarah Johnson',
      date: '10 Jan 2024, 01:45 pm',
      views: 267,
      categoryIcon: BookOpen,
      categoryColor: 'bg-blue-100 text-blue-800'
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAnnouncementSelect = (id) => {
    setSelectedAnnouncements(prev => 
      prev.includes(id) 
        ? prev.filter(announcementId => announcementId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedAnnouncements.length === announcements.length) {
      setSelectedAnnouncements([]);
    } else {
      setSelectedAnnouncements(announcements.map(announcement => announcement.id));
    }
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for announcements:`, selectedAnnouncements);
    // Add your bulk action logic here
    setSelectedAnnouncements([]);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
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
          <div className="flex justify-between items-start mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Announcement Management
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage all announcements in your tuition center
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-gray-300 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.title}
                    </h3>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {stat.value}
                    </p>
                  </div>
                  <div className={`text-2xl ${stat.iconBg} p-3 rounded-xl`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters and Actions */}
          <div className={`p-6 rounded-2xl border mb-6 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            
            {/* Category Filters */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Category:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : isDarkMode
                          ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                {/* Priority Filter */}
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Priority:
                  </span>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className={`px-3 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="All Priorities">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Status:
                  </span>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className={`px-3 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="All Status">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                    <option value="Scheduled">Scheduled</option>
                  </select>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    placeholder="Search announcements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`pl-10 pr-4 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </div>

              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
                <Plus size={16} />
                Create Announcement
              </button>
            </div>

            {/* Selection Actions */}
            {selectedAnnouncements.length > 0 && (
              <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedAnnouncements.length} announcement{selectedAnnouncements.length !== 1 ? 's' : ''} selected
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBulkAction('publish')}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
                    >
                      Publish
                    </button>
                    <button
                      onClick={() => handleBulkAction('archive')}
                      className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
                    >
                      Archive
                    </button>
                    <button
                      onClick={() => handleBulkAction('delete')}
                      className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Announcements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((announcement) => {
              const CategoryIcon = announcement.categoryIcon;
              return (
                <div
                  key={announcement.id}
                  className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700 hover:border-slate-600' 
                      : 'bg-white border-gray-300 shadow-sm hover:border-gray-400'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <input
                      type="checkbox"
                      checked={selectedAnnouncements.includes(announcement.id)}
                      onChange={() => handleAnnouncementSelect(announcement.id)}
                      className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 mt-1"
                    />
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                        {announcement.priority}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(announcement.status)}`}>
                        {announcement.status}
                      </span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <CategoryIcon className="w-4 h-4" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${announcement.categoryColor}`}>
                      {announcement.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className={`font-semibold mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {announcement.title}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {announcement.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {announcement.author}
                      </p>
                      <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {announcement.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Eye className="w-3 h-3" />
                        <span>{announcement.views}</span>
                      </div>
                      <div className="flex gap-1">
                        <button className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default AnnouncementManagement;