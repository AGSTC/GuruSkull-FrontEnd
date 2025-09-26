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
  Filter
} from 'lucide-react';

const Notifications = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All Notifications');
  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [displayCount, setDisplayCount] = useState(5); // Number of notifications to display
  const [hasMoreNotifications, setHasMoreNotifications] = useState(true);

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
    
    // Reset display count when filters change
    setDisplayCount(5);
    
    // Check if there are more notifications to load
    setHasMoreNotifications(filtered.length > 5);
  }, [notifications, searchTerm, selectedFilter]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Mark a single notification as read
  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isUnread: false } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, isUnread: false }))
    );
  };

  // Archive old notifications (older than 1 day)
  const archiveOldNotifications = () => {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.timestamp < oneDayAgo ? { ...notification, isArchived: true } : notification
      )
    );
    
    // Show confirmation message (you can replace this with a toast notification)
    alert('Old notifications have been archived successfully!');
  };

  // Load more notifications
  const loadMoreNotifications = () => {
    const newDisplayCount = displayCount + 5;
    setDisplayCount(newDisplayCount);
    
    // Check if we've reached the end of the notifications list
    if (newDisplayCount >= filteredNotifications.length) {
      setHasMoreNotifications(false);
    }
  };

  // Calculate counts for filter categories
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

  // Format time display
  const formatTime = (timestamp) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hour${Math.floor(diffInSeconds / 3600) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffInSeconds / 86400)} day${Math.floor(diffInSeconds / 86400) > 1 ? 's' : ''} ago`;
  };

  // Get notifications to display (limited by displayCount)
  const notificationsToDisplay = filteredNotifications.slice(0, displayCount);

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="notifications" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full p-6">
          
          {/* Header Section */}
          <div className="text-left mb-6">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Notifications
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Stay updated with your tuition classes activities
            </p>
          </div>

          <div className="flex gap-6">
            
            {/* Left Sidebar - Filters */}
            <div className={`w-80 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl border ${
              isDarkMode ? 'border-slate-700' : 'border-gray-300'
            } p-6 h-fit`}>
              
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    placeholder="Search notifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>

              {/* Filter by Type */}
              <div className="mb-6">
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
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                          selectedFilter === category.name
                            ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-900')
                            : (isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700')
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} />
                          <span className="text-sm font-medium">{category.name}</span>
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
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <CheckCheck size={16} />
                    <span className="text-sm">Mark all as read</span>
                  </button>
                  <button 
                    onClick={archiveOldNotifications}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Archive size={16} />
                    <span className="text-sm">Archive old notifications</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - Notifications List */}
            <div className="flex-1">
              
              {/* Header with View All */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedFilter}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {notificationsToDisplay.length} of {filteredNotifications.length} {filteredNotifications.length === 1 ? 'notification' : 'notifications'}
                  </span>
                </div>
                <button 
                  onClick={markAllAsRead}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Mark All Read
                </button>
              </div>

              {/* Notifications List */}
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl border ${
                isDarkMode ? 'border-slate-700' : 'border-gray-300'
              } overflow-hidden`}>
                {notificationsToDisplay.length === 0 ? (
                  <div className="p-12 text-center">
                    <Bell className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
                        className={`p-6 border-b ${
                          isDarkMode ? 'border-slate-700' : 'border-gray-200'
                        } ${index === notificationsToDisplay.length - 1 ? 'border-b-0' : ''} ${
                          notification.isUnread 
                            ? (isDarkMode ? 'bg-slate-750' : 'bg-blue-50') 
                            : ''
                        } hover:${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} transition-colors cursor-pointer`}
                      >
                        <div className="flex items-start gap-4">
                          
                          {/* Icon */}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                            notification.isUnread 
                              ? (isDarkMode ? 'bg-blue-600' : 'bg-blue-100') 
                              : (isDarkMode ? 'bg-slate-600' : 'bg-gray-100')
                          }`}>
                            {notification.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className={`font-semibold text-sm ${
                                    isDarkMode ? 'text-white' : 'text-gray-900'
                                  }`}>
                                    {notification.title}
                                  </h3>
                                  {notification.isUnread && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  )}
                                </div>
                                <p className={`text-sm mb-2 ${
                                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                  {notification.description}
                                </p>
                              </div>
                              
                              {/* Time */}
                              <span className={`text-xs whitespace-nowrap ${
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
                      <div className="p-6 text-center border-t">
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
    </div>
  );
};

export default Notifications;