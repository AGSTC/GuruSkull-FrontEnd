import React, { useState, useEffect } from 'react';
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
  CheckCircle,
  X,
  Archive,
  Send,
  ChevronRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const categories = [
  'All Categories',
  'Academic',
  'Events',
  'Fees',
  'Holidays',
  'Schedule'
];

const CreateAnnouncementModal = ({ 
  isOpen, 
  onClose, 
  isDarkMode, 
  newAnnouncement, 
  onNewAnnouncementChange, 
  onCreate 
}) => {
  const [localAnnouncement, setLocalAnnouncement] = useState(newAnnouncement);

  useEffect(() => {
    setLocalAnnouncement(newAnnouncement);
  }, [newAnnouncement]);

  const handleChange = (field, value) => {
    setLocalAnnouncement(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreate = () => {
    onNewAnnouncementChange(localAnnouncement);
    onCreate();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className={`w-full max-w-md rounded-xl md:rounded-2xl ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      } shadow-2xl overflow-hidden`}>
        
        <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
          isDarkMode ? 'border-slate-700' : 'border-gray-300'
        }`}>
          <div>
            <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Create New Announcement
            </h2>
            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Fill in the details for your new announcement
            </p>
          </div>
          <button onClick={onClose} className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
            isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
          }`}>
            <X size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="space-y-3 md:space-y-4">
            <div>
              <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Title *
              </label>
              <input
                type="text"
                value={localAnnouncement.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter announcement title"
              />
            </div>
            
            <div>
              <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Description *
              </label>
              <textarea
                value={localAnnouncement.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={3}
                className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter announcement description"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Category
                </label>
                <select
                  value={localAnnouncement.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  {categories.filter(cat => cat !== 'All Categories').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Priority
                </label>
                <select
                  value={localAnnouncement.priority}
                  onChange={(e) => handleChange('priority', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Status
              </label>
              <select
                value={localAnnouncement.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="Draft">Draft</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Active">Active</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
            <button
              onClick={onClose}
              className={`flex-1 px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium ${
                isDarkMode 
                  ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              className="flex-1 px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewAnnouncementModal = ({ 
  isOpen, 
  onClose, 
  isDarkMode, 
  selectedAnnouncement,
  getCategoryColor,
  getPriorityColor,
  getStatusColor 
}) => {
  if (!isOpen || !selectedAnnouncement) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className={`w-full max-w-md rounded-xl md:rounded-2xl ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      } shadow-2xl overflow-hidden`}>
        
        <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
          isDarkMode ? 'border-slate-700' : 'border-gray-300'
        }`}>
          <div>
            <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Announcement Details
            </h2>
            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Complete information about the announcement
            </p>
          </div>
          <button onClick={onClose} className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
            isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
          }`}>
            <X size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-wrap gap-1 md:gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedAnnouncement.category)}`}>
                {selectedAnnouncement.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedAnnouncement.priority)}`}>
                {selectedAnnouncement.priority}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedAnnouncement.status)}`}>
                {selectedAnnouncement.status}
              </span>
            </div>
            
            <h4 className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {selectedAnnouncement.title}
            </h4>
            
            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {selectedAnnouncement.description}
            </p>
            
            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <p>Author: {selectedAnnouncement.author}</p>
              <p>Date: {selectedAnnouncement.date}</p>
              <p>Views: {selectedAnnouncement.views}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-full mt-4 md:mt-6 px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EditAnnouncementModal = ({ 
  isOpen, 
  onClose, 
  isDarkMode, 
  selectedAnnouncement, 
  onAnnouncementChange, 
  onSave 
}) => {
  const [localAnnouncement, setLocalAnnouncement] = useState(selectedAnnouncement);

  useEffect(() => {
    setLocalAnnouncement(selectedAnnouncement);
  }, [selectedAnnouncement]);

  const handleChange = (field, value) => {
    setLocalAnnouncement(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onAnnouncementChange(localAnnouncement);
    onSave();
  };

  if (!isOpen || !localAnnouncement) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className={`w-full max-w-md rounded-xl md:rounded-2xl ${
        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      } shadow-2xl overflow-hidden`}>
        
        <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
          isDarkMode ? 'border-slate-700' : 'border-gray-300'
        }`}>
          <div>
            <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Edit Announcement
            </h2>
            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Update the announcement details
            </p>
          </div>
          <button onClick={onClose} className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
            isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
          }`}>
            <X size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="space-y-3 md:space-y-4">
            <div>
              <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Title *
              </label>
              <input
                type="text"
                value={localAnnouncement.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            
            <div>
              <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Description *
              </label>
              <textarea
                value={localAnnouncement.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={3}
                className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Category
                </label>
                <select
                  value={localAnnouncement.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  {categories.filter(cat => cat !== 'All Categories').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Priority
                </label>
                <select
                  value={localAnnouncement.priority}
                  onChange={(e) => handleChange('priority', e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Status
              </label>
              <select
                value={localAnnouncement.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="Draft">Draft</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Active">Active</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
            <button
              onClick={onClose}
              className={`flex-1 px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium ${
                isDarkMode 
                  ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnnouncementManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPriority, setSelectedPriority] = useState('All Priorities');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnnouncements, setSelectedAnnouncements] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    description: '',
    category: 'Academic',
    priority: 'Medium',
    status: 'Draft'
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    const initialAnnouncements = [
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
    setAnnouncements(initialAnnouncements);
  }, []);

  const stats = [
    {
      title: 'Total Announcements',
      value: announcements.length.toString(),
      icon: '📢',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Active Announcements',
      value: announcements.filter(a => a.status === 'Active').length.toString(),
      icon: '🟢',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      title: 'Scheduled',
      value: announcements.filter(a => a.status === 'Scheduled').length.toString(),
      icon: '📅',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
    {
      title: 'Total Views',
      value: announcements.reduce((sum, a) => sum + a.views, 0).toLocaleString(),
      icon: '👁️',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesCategory = selectedCategory === 'All Categories' || announcement.category === selectedCategory;
    const matchesPriority = selectedPriority === 'All Priorities' || announcement.priority === selectedPriority;
    const matchesStatus = selectedStatus === 'All Status' || announcement.status === selectedStatus;
    const matchesSearch = searchQuery === '' || 
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPriority && matchesStatus && matchesSearch;
  });

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
    if (selectedAnnouncements.length === filteredAnnouncements.length) {
      setSelectedAnnouncements([]);
    } else {
      setSelectedAnnouncements(filteredAnnouncements.map(announcement => announcement.id));
    }
  };

  const handleBulkAction = (action) => {
    const updatedAnnouncements = announcements.map(announcement => {
      if (selectedAnnouncements.includes(announcement.id)) {
        return {
          ...announcement,
          status: action === 'publish' ? 'Active' : 
                  action === 'archive' ? 'Archived' : announcement.status
        };
      }
      return announcement;
    });

    if (action === 'delete') {
      setAnnouncements(announcements.filter(a => !selectedAnnouncements.includes(a.id)));
    } else {
      setAnnouncements(updatedAnnouncements);
    }
    setSelectedAnnouncements([]);
  };

  const handleCreateAnnouncement = () => {
    if (!newAnnouncement.title.trim() || !newAnnouncement.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const newAnnouncementObj = {
      id: announcements.length + 1,
      ...newAnnouncement,
      author: 'Mrs. Priya Sharma',
      date: new Date().toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      views: 0,
      categoryIcon: getCategoryIcon(newAnnouncement.category),
      categoryColor: getCategoryColor(newAnnouncement.category)
    };
    
    setAnnouncements([newAnnouncementObj, ...announcements]);
    setIsCreateModalOpen(false);
    setNewAnnouncement({
      title: '',
      description: '',
      category: 'Academic',
      priority: 'Medium',
      status: 'Draft'
    });
  };

  const handleEditAnnouncement = () => {
    if (!selectedAnnouncement.title.trim() || !selectedAnnouncement.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const updatedAnnouncements = announcements.map(announcement => 
      announcement.id === selectedAnnouncement.id 
        ? { 
            ...selectedAnnouncement,
            categoryIcon: getCategoryIcon(selectedAnnouncement.category),
            categoryColor: getCategoryColor(selectedAnnouncement.category)
          }
        : announcement
    );
    setAnnouncements(updatedAnnouncements);
    setIsEditModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
    setSelectedAnnouncements(selectedAnnouncements.filter(annId => annId !== id));
  };

  const handleCreateModalClose = () => {
    setIsCreateModalOpen(false);
    setNewAnnouncement({
      title: '',
      description: '',
      category: 'Academic',
      priority: 'Medium',
      status: 'Draft'
    });
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const handleViewModalClose = () => {
    setIsViewModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Academic': return BookOpen;
      case 'Events': return PartyPopper;
      case 'Fees': return DollarSign;
      case 'Holidays': return Calendar;
      case 'Schedule': return Clock;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic': return 'bg-blue-100 text-blue-800';
      case 'Events': return 'bg-green-100 text-green-800';
      case 'Fees': return 'bg-purple-100 text-purple-800';
      case 'Holidays': return 'bg-red-100 text-red-800';
      case 'Schedule': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
      case 'Archived': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleNewAnnouncementChange = (updatedAnnouncement) => {
    setNewAnnouncement(updatedAnnouncement);
  };

  const handleSelectedAnnouncementChange = (updatedAnnouncement) => {
    setSelectedAnnouncement(updatedAnnouncement);
  };

  return (
    <>
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
        
            <div className="text-left mb-4 md:mb-6 lg:mb-8">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Announcement Management
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage all announcements in your tuition center
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700' 
                      : 'bg-white border-gray-300 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.title}
                      </h3>
                      <p className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className={`text-lg md:text-xl p-2 md:p-3 rounded-lg md:rounded-xl ${stat.iconBg}`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border mb-6 ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              
              <div className="mb-4 md:mb-6">
                <div className={`text-xs md:text-sm font-medium mb-2 md:mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Category:
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
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

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Priority:
                    </span>
                    <select
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                      className={`px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
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

                  <div className="flex items-center gap-1 md:gap-2">
                    <span className={`text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Status:
                    </span>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className={`px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <option value="All Status">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>

                  <div className="relative">
                    <Search className={`absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="text"
                      placeholder="Search announcements..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`pl-7 md:pl-10 pr-3 md:pr-4 py-1 md:py-2 rounded-lg border text-xs md:text-sm ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                </div>

                <button 
                  onClick={() => setIsCreateModalOpen(true)}
                  className="px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-1 md:gap-2"
                >
                  <Plus size={14} className="md:w-4 md:h-4" />
                  Create Announcement
                </button>
              </div>

              {selectedAnnouncements.length > 0 && (
                <div className={`mt-3 md:mt-4 pt-3 md:pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-4">
                    <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedAnnouncements.length} announcement{selectedAnnouncements.length !== 1 ? 's' : ''} selected
                    </span>
                    <div className="flex gap-1 md:gap-2">
                      <button
                        onClick={() => handleBulkAction('publish')}
                        className="px-2 py-1 md:px-3 md:py-1 bg-blue-500 text-white rounded text-xs md:text-sm hover:bg-blue-600 transition-colors flex items-center gap-1"
                      >
                        <Send size={12} className="md:w-3 md:h-3" />
                        Publish
                      </button>
                      <button
                        onClick={() => handleBulkAction('archive')}
                        className="px-2 py-1 md:px-3 md:py-1 bg-orange-500 text-white rounded text-xs md:text-sm hover:bg-orange-600 transition-colors flex items-center gap-1"
                      >
                        <Archive size={12} className="md:w-3 md:h-3" />
                        Archive
                      </button>
                      <button
                        onClick={() => handleBulkAction('delete')}
                        className="px-2 py-1 md:px-3 md:py-1 bg-red-500 text-white rounded text-xs md:text-sm hover:bg-red-600 transition-colors flex items-center gap-1"
                      >
                        <Trash2 size={12} className="md:w-3 md:h-3" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredAnnouncements.map((announcement) => {
                const CategoryIcon = announcement.categoryIcon;
                return (
                  <div
                    key={announcement.id}
                    className={`p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all hover:shadow-lg ${
                      isDarkMode 
                        ? 'bg-slate-800 border-slate-700 hover:border-slate-600' 
                        : 'bg-white border-gray-300 shadow-sm hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <input
                        type="checkbox"
                        checked={selectedAnnouncements.includes(announcement.id)}
                        onChange={() => handleAnnouncementSelect(announcement.id)}
                        className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 mt-1"
                      />
                      <div className="flex gap-1 md:gap-2">
                        <span className={`px-1 py-0.5 md:px-2 md:py-1 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                          {announcement.priority}
                        </span>
                        <span className={`px-1 py-0.5 md:px-2 md:py-1 rounded-full text-xs font-medium ${getStatusColor(announcement.status)}`}>
                          {announcement.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                      <CategoryIcon className="w-3 h-3 md:w-4 md:h-4" />
                      <span className={`px-1 py-0.5 md:px-2 md:py-1 rounded-full text-xs font-medium ${announcement.categoryColor}`}>
                        {announcement.category}
                      </span>
                    </div>

                    <h3 className={`font-semibold text-sm md:text-base mb-1 md:mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {announcement.title}
                    </h3>
                    <p className={`text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {announcement.description}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {announcement.author}
                        </p>
                        <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          {announcement.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Eye className="w-3 h-3" />
                          <span>{announcement.views}</span>
                        </div>
                        <div className="flex gap-1">
                          <button 
                            onClick={() => {
                              setSelectedAnnouncement(announcement);
                              setIsViewModalOpen(true);
                            }}
                            className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                          >
                            <Eye className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              setSelectedAnnouncement({...announcement});
                              setIsEditModalOpen(true);
                            }}
                            className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                          >
                            <Edit className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                          <button 
                            onClick={() => handleDeleteAnnouncement(announcement.id)}
                            className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                          >
                            <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
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

        <CreateAnnouncementModal 
          isOpen={isCreateModalOpen}
          onClose={handleCreateModalClose}
          isDarkMode={isDarkMode}
          newAnnouncement={newAnnouncement}
          onNewAnnouncementChange={handleNewAnnouncementChange}
          onCreate={handleCreateAnnouncement}
        />
        
        <ViewAnnouncementModal 
          isOpen={isViewModalOpen}
          onClose={handleViewModalClose}
          isDarkMode={isDarkMode}
          selectedAnnouncement={selectedAnnouncement}
          getCategoryColor={getCategoryColor}
          getPriorityColor={getPriorityColor}
          getStatusColor={getStatusColor}
        />
        
        <EditAnnouncementModal 
          isOpen={isEditModalOpen}
          onClose={handleEditModalClose}
          isDarkMode={isDarkMode}
          selectedAnnouncement={selectedAnnouncement}
          onAnnouncementChange={handleSelectedAnnouncementChange}
          onSave={handleEditAnnouncement}
        />
      </div>
    </>
  );
};

export default AnnouncementManagement;