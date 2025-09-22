import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { 
  Search, 
  Plus, 
  Phone, 
  Video, 
  Info, 
  Paperclip, 
  Smile, 
  Send,
  Filter
} from 'lucide-react';

const Messages = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const messagesEndRef = useRef(null);
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Teacher, Mathematics',
      lastMessage: 'The test papers are ready for review and other. Please check and let me know if any kind of...',
      time: '2 min',
      unread: true,
      avatar: 'PS',
      online: true,
      badge: 'Parent',
      type: 'teacher'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      role: 'Student, Class 10',
      lastMessage: 'Sir, I have a doubt in the physics assignment. Can you help me?',
      time: '5 min',
      unread: true,
      avatar: 'RP',
      online: true,
      type: 'student'
    },
    {
      id: 3,
      name: 'Mrs. Anjali Gupta',
      role: 'Parent',
      lastMessage: 'Thank you for the progress report. My daughter is doing well.',
      time: '10 min',
      unread: false,
      avatar: 'AG',
      online: false,
      badge: 'Parent',
      type: 'parent'
    },
    {
      id: 4,
      name: 'Prof. Vikram Singh',
      role: 'Teacher, Physics',
      lastMessage: 'The laboratory equipment has arrived. We can schedule the practical sessions now.',
      time: '15 min',
      unread: true,
      avatar: 'VS',
      online: true,
      type: 'teacher'
    },
    {
      id: 5,
      name: 'Sneha Desai',
      role: 'Student, Class 12',
      lastMessage: 'Ma\'am, when will the exam schedule be released?',
      time: '20 min',
      unread: false,
      avatar: 'SD',
      online: false,
      type: 'student'
    },
    {
      id: 6,
      name: 'Mr. Kumar',
      role: 'Administrative Staff',
      lastMessage: 'The fee collection report for this month is ready for your review.',
      time: '1 hour',
      unread: true,
      avatar: 'MK',
      online: false,
      type: 'staff'
    },
    {
      id: 7,
      name: 'Dr. Meera Shah',
      role: 'Teacher, Chemistry',
      lastMessage: 'I\'ve uploaded the new study materials in the portal.',
      time: '2 hours',
      unread: false,
      avatar: 'MS',
      online: true,
      type: 'teacher'
    },
    {
      id: 8,
      name: 'Arjun Mehta',
      role: 'Student, Class 11',
      lastMessage: 'Can we reschedule tomorrow\'s extra class?',
      time: '3 hours',
      unread: false,
      avatar: 'AM',
      online: false,
      type: 'student'
    }
  ]);
  const [messages, setMessages] = useState({});

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedConversation]);

  // Initialize default messages for conversations
  const initializeMessages = () => {
    const defaultMessages = {
      1: [
        { id: 1, type: 'received', content: 'Hello! How are you doing today?', time: '02:30 PM' },
        { id: 2, type: 'sent', content: 'Hi there! I\'m doing great, thanks for asking. How about you?', time: '02:30 PM' },
        { id: 3, type: 'received', content: 'I\'m good too! I wanted to discuss about the upcoming exam schedule.', time: '02:30 PM' },
        { id: 4, type: 'sent', content: 'Sure, I\'d be happy to discuss that. What would you like to know?', time: '02:30 PM' },
        { id: 5, type: 'file', fileName: 'exam-checklist.pdf', fileSize: '2.46 MB', time: '02:30 PM' },
        { id: 6, type: 'received', content: 'Thanks for sharing the checklist. This will be very helpful for the students.', time: '02:30 PM' }
      ],
      2: [
        { id: 1, type: 'received', content: 'Sir, I have a doubt in the physics assignment. Can you help me?', time: '01:45 PM' },
        { id: 2, type: 'sent', content: 'Of course! What specific topic are you having trouble with?', time: '01:46 PM' }
      ],
      3: [
        { id: 1, type: 'received', content: 'Thank you for the progress report. My daughter is doing well.', time: '11:30 AM' },
        { id: 2, type: 'sent', content: 'You\'re welcome! She\'s been very dedicated to her studies.', time: '11:32 AM' }
      ],
      4: [
        { id: 1, type: 'received', content: 'The laboratory equipment has arrived. We can schedule the practical sessions now.', time: '10:15 AM' },
        { id: 2, type: 'sent', content: 'Excellent! Let\'s discuss the timetable for the practical sessions.', time: '10:20 AM' }
      ]
    };
    setMessages(defaultMessages);
  };

  // Initialize messages on component mount
  React.useEffect(() => {
    if (Object.keys(messages).length === 0) {
      initializeMessages();
    }
  }, []);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedConversation) {
      const newMessage = {
        id: Date.now(),
        type: 'sent',
        content: messageInput.trim(),
        time: getCurrentTime()
      };

      // Add message to the conversation
      setMessages(prev => ({
        ...prev,
        [selectedConversation.id]: [
          ...(prev[selectedConversation.id] || []),
          newMessage
        ]
      }));

      // Update the conversation's last message and time
      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id 
            ? { ...conv, lastMessage: messageInput.trim(), time: 'Just now' }
            : conv
        )
      );

      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getFilteredConversations = () => {
    switch (activeFilter) {
      case 'unread':
        return conversations.filter(conv => conv.unread);
      case 'teachers':
        return conversations.filter(conv => conv.type === 'teacher');
      default:
        return conversations;
    }
  };

  const getFilterCounts = () => {
    const unreadCount = conversations.filter(conv => conv.unread).length;
    const teacherCount = conversations.filter(conv => conv.type === 'teacher').length;
    
    return {
      all: conversations.length,
      unread: unreadCount,
      teachers: teacherCount
    };
  };

  const filteredConversations = getFilteredConversations();
  const filterCounts = getFilterCounts();
  const currentMessages = selectedConversation ? (messages[selectedConversation.id] || []) : [];

  const getAvatarColor = (name) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-yellow-500', 'bg-indigo-500', 'bg-red-500', 'bg-teal-500'
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="messages" />

      <main className={`transition-all duration-300 pt-20 pb-12 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full flex">
          
          {/* Left Sidebar - Conversations List */}
          <div className={`w-80 h-[calc(100vh-128px)] border-r flex flex-col ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
          }`}>
            
            {/* Messages Header */}
            <div className="p-4 border-b border-inherit">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Messages
                  </h1>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    7 unread
                  </span>
                </div>
                <button className="p-1 rounded-md text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700">
                  <Plus size={20} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative mb-4">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 text-sm">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeFilter === 'all' 
                      ? 'bg-blue-500 text-white' 
                      : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  All Messages ({filterCounts.all})
                </button>
                <button 
                  onClick={() => setActiveFilter('unread')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeFilter === 'unread' 
                      ? 'bg-blue-500 text-white' 
                      : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Unread ({filterCounts.unread})
                </button>
                <button 
                  onClick={() => setActiveFilter('teachers')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeFilter === 'teachers' 
                      ? 'bg-blue-500 text-white' 
                      : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Teachers ({filterCounts.teachers})
                </button>
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-4 border-b border-inherit cursor-pointer transition-colors ${
                      selectedConversation?.id === conversation.id
                        ? isDarkMode ? 'bg-slate-700' : 'bg-blue-50'
                        : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${getAvatarColor(conversation.name)}`}>
                          {conversation.avatar}
                        </div>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {conversation.name}
                          </h3>
                          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {conversation.time}
                          </span>
                        </div>
                        
                        <p className={`text-xs mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {conversation.role}
                        </p>
                        
                        <p className={`text-sm truncate ${
                          conversation.unread 
                            ? isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'
                            : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {conversation.lastMessage}
                        </p>
                        
                        {conversation.badge && (
                          <span className="inline-block mt-2 px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                            {conversation.badge}
                          </span>
                        )}
                      </div>
                      
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-2" />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className={`p-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>No conversations found for the selected filter.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Chat Area */}
          <div className="flex-1 flex flex-col h-[calc(100vh-128px)]">
            {selectedConversation ? (
              <>
                {/* Chat Header - Fixed */}
                <div className={`flex-shrink-0 p-4 border-b flex items-center justify-between ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${getAvatarColor(selectedConversation.name)}`}>
                        {selectedConversation.avatar}
                      </div>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedConversation.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        {selectedConversation.online && <div className="w-2 h-2 bg-green-400 rounded-full" />}
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {selectedConversation.online ? 'Online • Last seen 2h ago' : 'Offline • Last seen 5h ago'}
                        </span>
                        {selectedConversation.badge && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                            {selectedConversation.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className={`p-2 rounded-lg ${
                      isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}>
                      <Phone size={20} />
                    </button>
                    <button className={`p-2 rounded-lg ${
                      isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}>
                      <Video size={20} />
                    </button>
                    <button className={`p-2 rounded-lg ${
                      isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}>
                      <Info size={20} />
                    </button>
                  </div>
                </div>

                {/* Chat Messages - Scrollable */}
                <div className={`flex-1 p-4 overflow-y-auto ${
                  isDarkMode ? 'bg-slate-900' : 'bg-gray-50'
                }`}>
                  <div className="space-y-4">
                    {currentMessages.map((message) => (
                      <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                        {message.type === 'file' ? (
                          <div className={`max-w-xs p-3 rounded-lg ${
                            isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-300'
                          }`}>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-red-600 font-bold text-sm">D</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`font-medium text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                  {message.fileName}
                                </p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {message.fileSize}
                                </p>
                              </div>
                            </div>
                            <div className={`text-xs mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {message.time}
                            </div>
                          </div>
                        ) : (
                          <div className={`max-w-xs px-4 py-2 rounded-lg ${
                            message.type === 'sent' 
                              ? 'bg-blue-500 text-white' 
                              : isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
                          }`}>
                            <p className="text-sm">{message.content}</p>
                            <div className={`text-xs mt-1 ${
                              message.type === 'sent' 
                                ? 'text-blue-100' 
                                : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    {currentMessages.length === 0 && (
                      <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <p>Start a conversation with {selectedConversation.name}</p>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Message Input - Fixed at Bottom */}
                <div className={`flex-shrink-0 p-4 border-t ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <button className={`flex-shrink-0 p-2 rounded-lg ${
                      isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}>
                      <Paperclip size={20} />
                    </button>
                    
                    <div className={`flex-1 border rounded-lg ${
                      isDarkMode ? 'border-slate-600' : 'border-gray-300'
                    }`}>
                      <textarea
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        rows="1"
                        style={{ minHeight: '44px', maxHeight: '120px' }}
                        className={`w-full p-3 rounded-lg resize-none focus:outline-none overflow-y-auto ${
                          isDarkMode 
                            ? 'bg-slate-700 text-white placeholder-gray-400' 
                            : 'bg-white text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>
                    
                    <button className={`flex-shrink-0 p-2 rounded-lg ${
                      isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}>
                      <Smile size={20} />
                    </button>
                    
                    <button 
                      onClick={handleSendMessage}
                      className="flex-shrink-0 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Welcome Screen
              <div className={`flex-1 flex flex-col items-center justify-center ${
                isDarkMode ? 'bg-slate-900' : 'bg-gray-50'
              }`}>
                <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 ${
                  isDarkMode ? 'bg-slate-800' : 'bg-gray-200'
                }`}>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                    isDarkMode ? 'bg-slate-700' : 'bg-white'
                  }`}>
                    <Send className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} size={32} />
                  </div>
                </div>
                
                <h2 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Welcome to Messages
                </h2>
                <p className={`text-center max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Select a conversation from the sidebar to start chatting with teachers, students, parents, and staff members.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default Messages;