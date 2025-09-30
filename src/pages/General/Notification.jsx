import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { 
  Search, 
  Bell, 
  User, 
  DollarSign, 
  Calendar, 
  AlertTriangle, 
  CheckCheck,
  Archive,
  Filter,
  ChevronDown,
  X
} from 'lucide-react';

const Notifications = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All Notifications');
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [hasMoreNotifications, setHasMoreNotifications] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Initialize notifications with sample data
  useEffect(() => {
    const initialNotifications = [
      {
        id: 1,
        type: 'New Student Registration',
        title: 'New Student Registration',
        description: 'Raj Sharma has registered for Mathematics Grade 10 batch',
        time: '5 min ago',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        icon: '🎓',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        isUnread: true,
        isArchived: false
      },
      {
        id: 2,
        type: 'Payment Received',
        title: 'Payment Received',
        description: 'Monthly fee payment of ₹5,500 received from Rahul Kumar for Physics batch',
        time: '10 min ago',
        timestamp: new Date(Date.now() - 10 * 60 * 1000),
        icon: '💰',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        isUnread: true,
        isArchived: false
      },
      {
        id: 3,
        type: 'Class Rescheduled',
        title: 'Class Rescheduled',
        description: 'Chemistry batch class moved from 3pm Sat to 5pm Sat today due to teacher availability',
        time: '1 hour ago',
        timestamp: new Date(Date.now() - 60 * 60 * 1000),
        icon: '📅',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 4,
        type: 'Assignment Alert',
        title: 'Assignment Alert',
        description: 'New assignment has been created for a mathematics batch',
        time: '2 hours ago',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        icon: '📝',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 5,
        type: 'System Maintenance',
        title: 'System Maintenance',
        description: 'Scheduled maintenance will occur tonight from 11:00 PM to 2:00 AM',
        time: '3 hours ago',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        icon: '⚙️',
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 6,
        type: 'Payment Reminder',
        title: 'Payment Reminder',
        description: 'Fee payment pending for Sneha Verma - Biology batch (Due Tomorrow)',
        time: '4 hours ago',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
        icon: '💳',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 7,
        type: 'Test Results Available',
        title: 'Test Results Available',
        description: 'Monthly test results published for Mathematics Grade 12 batch',
        time: '5 hours ago',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        icon: '📊',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 8,
        type: 'System Maintenance',
        title: 'System Maintenance',
        description: 'Scheduled maintenance will occur tonight from 11:00 PM to 2:00 AM',
        time: '6 hours ago',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
        icon: '⚙️',
        iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 9,
        type: 'Payment Reminder',
        title: 'Payment Reminder',
        description: 'Fee payment pending for Sneha Verma - Biology batch (Due Tomorrow)',
        time: '8 hours ago',
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
        icon: '💳',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 10,
        type: 'Test Results Available',
        title: 'Test Results Available',
        description: 'Monthly test results published for Mathematics Grade 12 batch',
        time: '8 hours ago',
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
        icon: '📊',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 11,
        type: 'New Student Created',
        title: 'New Student Created',
        description: 'Biology batch is creating batch has been created with 15 students enrolled',
        time: '1 day ago',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        icon: '👥',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 12,
        type: 'Performance Alert',
        title: 'Performance Alert',
        description: 'New Singh showing significant improvement in Chemistry - scored 95% in recent test',
        time: '1 day ago',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        icon: '📈',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        isUnread: false,
        isArchived: false
      },
      {
        id: 13,
        type: 'Monthly Revenue Report',
        title: 'Monthly Revenue Report',
        description: 'October Revenue summary Rs.45,000 collected from 78 students across all batches',
        time: '2 days ago',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        icon: '💰',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        isUnread: false,
        isArchived: false
      }
    ];
    setNotifications(initialNotifications);
  }, []);

  // Filter notifications based on search term and selected filter
  useEffect(() => {
    const filtered = notifications.filter(notification => {
      if (notification.isArchived) return false;
      
      const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notification.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (selectedFilter === 'All Notifications') return matchesSearch;
      if (selectedFilter === 'Unread') return matchesSearch && notification.isUnread;
      if (selectedFilter === 'Student Updates') return matchesSearch && (notification.type.includes('Student') || notification.type.includes('Performance'));
      if (selectedFilter === 'Payments') return matchesSearch && notification.type.includes('Payment');
      if (selectedFilter === 'Class Schedule') return matchesSearch && (notification.type.includes('Class') || notification.type.includes('Assignment'));
      if (selectedFilter === 'System Alerts') return matchesSearch && notification.type.includes('System');
      
      return matchesSearch;
    });
    
    setFilteredNotifications(filtered);
    setDisplayCount(5);
    setHasMoreNotifications(filtered.length > 5);
  }, [notifications, searchTerm, selectedFilter]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isUnread: false } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, isUnread: false }))
    );
  };

  const archiveOldNotifications = () => {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.timestamp < oneDayAgo ? { ...notification, isArchived: true } : notification
      )
    );
    
    alert('Old notifications have been archived successfully!');
  };

  const loadMoreNotifications = () => {
    const newDisplayCount = displayCount + 5;
    setDisplayCount(newDisplayCount);
    
    if (newDisplayCount >= filteredNotifications.length) {
      setHasMoreNotifications(false);
    }
  };

  const getFilterCounts = () => {
    const activeNotifications = notifications.filter(n => !n.isArchived);
    
    return {
      'All Notifications': activeNotifications.length,
      'Unread': activeNotifications.filter(n => n.isUnread).length,
      'Student Updates': activeNotifications.filter(n => n.type.includes('Student') || n.type.includes('Performance')).length,
      'Payments': activeNotifications.filter(n => n.type.includes('Payment')).length,
      'Class Schedule': activeNotifications.filter(n => n.type.includes('Class') || n.type.includes('Assignment')).length,
      'System Alerts': activeNotifications.filter(n => n.type.includes('System')).length
    };
  };

  const filterCounts = getFilterCounts();

  const filterCategories = [
    { name: 'All Notifications', count: filterCounts['All Notifications'], icon: Bell },
    { name: 'Unread', count: filterCounts['Unread'], icon: Bell },
    { name: 'Student Updates', count: filterCounts['Student Updates'], icon: User },
    { name: 'Payments', count: filterCounts['Payments'], icon: DollarSign },
    { name: 'Class Schedule', count: filterCounts['Class Schedule'], icon: Calendar },
    { name: 'System Alerts', count: filterCounts['System Alerts'], icon: AlertTriangle }
  ];

  const formatTime = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hour${Math.floor(diffInSeconds / 3600) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffInSeconds / 86400)} day${Math.floor(diffInSeconds / 86400) > 1 ? 's' : ''} ago`;
  };

  const notificationsToDisplay = filteredNotifications.slice(0, displayCount);

  const FilterSidebar = () => (
    <div className={`w-full lg:w-80 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl md:rounded-2xl border ${
      isDarkMode ? 'border-slate-700' : 'border-gray-300'
    } p-4 md:p-6 h-fit`}>
      
      {/* Search */}
      <div className="mb-4 md:mb-6">
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="text"
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 md:py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
              isDarkMode 
                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
      </div>

      {/* Filter by Type */}
      <div className="mb-4 md:mb-6">
        <h3 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Filter by Type
        </h3>
        <div className="space-y-1">
          {filterCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedFilter(category.name)}
                className={`w-full flex items-center justify-between p-2 md:p-3 rounded-lg text-left transition-colors text-sm ${
                  selectedFilter === category.name
                    ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-900')
                    : (isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700')
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <Icon size={16} />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedFilter === category.name
                    ? (isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-800')
                    : (isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-gray-200 text-gray-600')
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Quick Actions
        </h3>
        <div className="space-y-2">
          <button 
            onClick={markAllAsRead}
            className={`w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg text-left transition-colors text-sm ${
              isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <CheckCheck size={16} />
            <span>Mark all as read</span>
          </button>
          <button 
            onClick={archiveOldNotifications}
            className={`w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg text-left transition-colors text-sm ${
              isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <Archive size={16} />
            <span>Archive old notifications</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="notifications" />

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
          
          {/* Header Section */}
          <div className="text-left mb-4 md:mb-6">
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Notifications
            </h1>
            <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Stay updated with your tuition classes activities
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className={`w-full flex items-center justify-between p-3 rounded-lg border ${
                isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter size={18} />
                <span>Filters</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  isDarkMode ? 'bg-slate-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  {filterCounts[selectedFilter]}
                </span>
              </div>
              <ChevronDown size={18} className={`transform ${showMobileFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            
            {/* Left Sidebar - Filters */}
            <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
              <FilterSidebar />
            </div>

            {/* Right Content - Notifications List */}
            <div className="flex-1">
              
              {/* Header with View All */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedFilter}
                  </h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {notificationsToDisplay.length} of {filteredNotifications.length} {filteredNotifications.length === 1 ? 'notification' : 'notifications'}
                  </span>
                </div>
                <button 
                  onClick={markAllAsRead}
                  className="px-3 py-2 md:px-4 md:py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto"
                >
                  Mark All Read
                </button>
              </div>

              {/* Notifications List */}
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-xl md:rounded-2xl border ${
                isDarkMode ? 'border-slate-700' : 'border-gray-300'
              } overflow-hidden`}>
                {notificationsToDisplay.length === 0 ? (
                  <div className="p-8 md:p-12 text-center">
                    <Bell className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <h3 className={`text-base md:text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      No notifications found
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      {searchTerm ? 'Try adjusting your search terms' : 'All caught up! New notifications will appear here.'}
                    </p>
                  </div>
                ) : (
                  <>
                    {notificationsToDisplay.map((notification, index) => (
                      <div 
                        key={notification.id} 
                        onClick={() => markAsRead(notification.id)}
                        className={`p-4 md:p-6 border-b ${
                          isDarkMode ? 'border-slate-700' : 'border-gray-200'
                        } ${index === notificationsToDisplay.length - 1 ? 'border-b-0' : ''} ${
                          notification.isUnread 
                            ? (isDarkMode ? 'bg-slate-750' : 'bg-blue-50') 
                            : ''
                        } hover:${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} transition-colors cursor-pointer`}
                      >
                        <div className="flex items-start gap-3 md:gap-4">
                          
                          {/* Icon */}
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-base md:text-lg flex-shrink-0 ${
                            notification.isUnread 
                              ? (isDarkMode ? 'bg-blue-600' : 'bg-blue-100') 
                              : (isDarkMode ? 'bg-slate-600' : 'bg-gray-100')
                          }`}>
                            {notification.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className={`font-semibold text-sm md:text-base truncate ${
                                    isDarkMode ? 'text-white' : 'text-gray-900'
                                  }`}>
                                    {notification.title}
                                  </h3>
                                  {notification.isUnread && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                  )}
                                </div>
                                <p className={`text-sm mb-2 line-clamp-2 ${
                                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                  {notification.description}
                                </p>
                              </div>
                              
                              {/* Time */}
                              <span className={`text-xs whitespace-nowrap flex-shrink-0 ${
                                isDarkMode ? 'text-gray-500' : 'text-gray-600'
                              }`}>
                                {formatTime(notification.timestamp)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Load More Button */}
                    {hasMoreNotifications && filteredNotifications.length > 5 && (
                      <div className="p-4 md:p-6 text-center border-t">
                        <button 
                          onClick={loadMoreNotifications}
                          className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                            isDarkMode 
                              ? 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                          }`}
                        >
                          Load more notifications ({filteredNotifications.length - displayCount} remaining)
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className={`fixed bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          } rounded-t-2xl p-4`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Filters
              </h3>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className={`p-2 rounded-lg ${
                  isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                }`}
              >
                <X size={20} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;