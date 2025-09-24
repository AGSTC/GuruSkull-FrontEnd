import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  Phone, 
  Video, 
  Info, 
  Paperclip, 
  Smile, 
  Send,
  X,
  MessageSquare,
  Users,
  GraduationCap,
  User,
  UserCheck,
  Shield,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Image,
  FileText,
  Music,
  PlayCircle,
  Filter,
  Download,
  Eye
} from 'lucide-react';

const Messages = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const attachmentMenuRef = useRef(null);
  
  // Initialize conversations state
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
      badge: 'Teacher',
      type: 'teacher',
      email: 'priya.sharma@school.com',
      phone: '+91 98765 43210',
      address: '123 School Street, Mumbai',
      joinDate: '2020-03-15',
      lastSeen: '2 hours ago'
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
      type: 'student',
      email: 'rahul.patel@student.com',
      phone: '+91 98765 43211',
      address: '456 Student Lane, Mumbai',
      joinDate: '2023-06-20',
      lastSeen: '1 hour ago'
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
      type: 'parent',
      email: 'anjali.gupta@parent.com',
      phone: '+91 98765 43212',
      address: '789 Parent Road, Mumbai',
      joinDate: '2022-01-10',
      lastSeen: '5 hours ago'
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
      type: 'teacher',
      email: 'vikram.singh@school.com',
      phone: '+91 98765 43213',
      address: '321 Physics Block, Mumbai',
      joinDate: '2019-08-25',
      lastSeen: '30 minutes ago'
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
      type: 'student',
      email: 'sneha.desai@student.com',
      phone: '+91 98765 43214',
      address: '654 Student Avenue, Mumbai',
      joinDate: '2021-04-12',
      lastSeen: '3 hours ago'
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
      type: 'staff',
      email: 'kumar@school.com',
      phone: '+91 98765 43215',
      address: '987 Admin Block, Mumbai',
      joinDate: '2018-11-30',
      lastSeen: '2 hours ago'
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
      type: 'teacher',
      email: 'meera.shah@school.com',
      phone: '+91 98765 43216',
      address: '147 Chemistry Lab, Mumbai',
      joinDate: '2020-07-18',
      lastSeen: '1 hour ago'
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
      type: 'student',
      email: 'arjun.mehta@student.com',
      phone: '+91 98765 43217',
      address: '258 Student Block, Mumbai',
      joinDate: '2022-09-05',
      lastSeen: '4 hours ago'
    }
  ]);
  
  const [messages, setMessages] = useState({});
  const [attachedFiles, setAttachedFiles] = useState({});

  // Available users for new chat
  const [availableUsers] = useState([
    { id: 101, name: 'Dr. Rajesh Kumar', role: 'Teacher, Biology', avatar: 'RK', type: 'teacher' },
    { id: 102, name: 'Priyanka Singh', role: 'Student, Class 9', avatar: 'PS', type: 'student' },
    { id: 103, name: 'Mr. Sharma', role: 'Parent', avatar: 'MS', type: 'parent' },
    { id: 104, name: 'Ms. Nisha Patel', role: 'Teacher, English', avatar: 'NP', type: 'teacher' },
    { id: 105, name: 'Rohit Verma', role: 'Student, Class 8', avatar: 'RV', type: 'student' },
  ]);

  // Emoji data
  const emojis = ['😀', '😃', '😄', '😁', '😊', '😍', '🥰', '😘', '😗', '😙', '😚', '🤗', '🤔', '😐', '😑', '😶', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩'];

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

  // Handle incoming user from UserRoleManagement - FIXED VERSION
  useEffect(() => {
    if (location.state && location.state.selectedUser) {
      const incomingUser = location.state.selectedUser;
      
      // Check if this user already exists in conversations (by name and id)
      const existingConversation = conversations.find(conv => 
        conv.id === incomingUser.id || 
        (conv.name.toLowerCase() === incomingUser.name.toLowerCase() && conv.type === incomingUser.type)
      );
      if (existingConversation) {
        // User already exists, just select them
        setSelectedConversation(existingConversation);
      } else {
        // User doesn't exist, add them
        const newConversation = {
          id: incomingUser.id || Date.now(),
          name: incomingUser.name,
          role: incomingUser.role || `${incomingUser.type.charAt(0).toUpperCase()}${incomingUser.type.slice(1)}`,
          lastMessage: `Start a conversation with ${incomingUser.name}`,
          time: 'Just now',
          unread: false,
          online: Math.random() > 0.5,
          badge: incomingUser.type === 'teacher' ? 'Teacher' : incomingUser.type === 'student' ? 'Student' : incomingUser.type === 'parent' ? 'Parent' : 'Staff',
          type: incomingUser.type || 'student',
          email: incomingUser.email || `${incomingUser.name.toLowerCase().replace(/\s+/g, '.')}@school.com`,
          phone: incomingUser.phone || '+91 98765 43200',
          address: incomingUser.address || 'School Address',
          joinDate: incomingUser.joinDate || new Date().toISOString().split('T')[0],
          lastSeen: 'Just now',
          avatar: incomingUser.avatar || incomingUser.name.split(' ').map(n => n[0]).join('').toUpperCase()
        };
        
        setConversations(prev => [newConversation, ...prev]);
        setSelectedConversation(newConversation);
        
        // Initialize messages for this user if they don't exist
        setMessages(prev => ({
          ...prev,
          [newConversation.id]: [
            { 
              id: 1, 
              type: 'received', 
              content: `Hello! I'm ${incomingUser.name}. How can I help you?`, 
              time: getCurrentTime() 
            }
          ]
        }));

        // Initialize attached files for new conversation
        setAttachedFiles(prev => ({
          ...prev,
          [newConversation.id]: []
        }));
      }
      
      // Clear the location state to prevent duplicate processing
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, conversations, navigate, location.pathname]);

  // Initialize default messages for conversations
  const initializeMessages = () => {
    const defaultMessages = {
      1: [
        { id: 1, type: 'received', content: 'Hello! How are you doing today?', time: '02:30 PM' },
        { id: 2, type: 'sent', content: 'Hi there! I\'m doing great, thanks for asking. How about you?', time: '02:30 PM' },
        { id: 3, type: 'received', content: 'I\'m good too! I wanted to discuss about the upcoming exam schedule.', time: '02:30 PM' },
        { id: 4, type: 'sent', content: 'Sure, I\'d be happy to discuss that. What would you like to know?', time: '02:30 PM' },
        { id: 5, type: 'file', fileName: 'exam-checklist.pdf', fileSize: '2.46 MB', fileType: 'pdf', time: '02:30 PM' },
        { id: 6, type: 'received', content: 'Thanks for sharing the checklist. This will be very helpful for the students.', time: '02:30 PM' }
      ],
      2: [
        { id: 1, type: 'received', content: 'Sir, I have a doubt in the physics assignment. Can you help me?', time: '01:45 PM' },
        { id: 2, type: 'sent', content: 'Of course! What specific topic are you having trouble with?', time: '01:46 PM' },
        { id: 3, type: 'image', fileName: 'diagram.png', fileSize: '1.2 MB', fileType: 'image', time: '01:47 PM' }
      ],
      3: [
        { id: 1, type: 'received', content: 'Thank you for the progress report. My daughter is doing well.', time: '11:30 AM' },
        { id: 2, type: 'sent', content: 'You\'re welcome! She\'s been very dedicated to her studies.', time: '11:32 AM' },
        { id: 3, type: 'image', fileName: 'progress-chart.jpg', fileSize: '890 KB', fileType: 'image', time: '11:33 AM' }
      ],
      4: [
        { id: 1, type: 'received', content: 'The laboratory equipment has arrived. We can schedule the practical sessions now.', time: '10:15 AM' },
        { id: 2, type: 'sent', content: 'Excellent! Let\'s discuss the timetable for the practical sessions.', time: '10:20 AM' }
      ],
      5: [
        { id: 1, type: 'received', content: 'Ma\'am, when will the exam schedule be released?', time: '09:30 AM' },
        { id: 2, type: 'sent', content: 'The schedule will be released next week. Stay tuned!', time: '09:35 AM' }
      ],
      6: [
        { id: 1, type: 'received', content: 'The fee collection report for this month is ready for your review.', time: '08:15 AM' },
        { id: 2, type: 'sent', content: 'Thanks! I\'ll review it today.', time: '08:20 AM' },
        { id: 3, type: 'file', fileName: 'fee-report.xlsx', fileSize: '3.15 MB', fileType: 'document', time: '08:21 AM' }
      ],
      7: [
        { id: 1, type: 'received', content: 'I\'ve uploaded the new study materials in the portal.', time: 'Yesterday' },
        { id: 2, type: 'sent', content: 'Great! I\'ll check them out.', time: 'Yesterday' }
      ],
      8: [
        { id: 1, type: 'received', content: 'Can we reschedule tomorrow\'s extra class?', time: 'Yesterday' },
        { id: 2, type: 'sent', content: 'Sure, what time works for you?', time: 'Yesterday' }
      ]
    };
    setMessages(defaultMessages);
  };

  // Initialize messages on component mount
  useEffect(() => {
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
    if ((messageInput.trim() || attachedFiles[selectedConversation.id]) && selectedConversation) {
      const newMessages = [];

      // Add text message if exists
      if (messageInput.trim()) {
        newMessages.push({
          id: Date.now(),
          type: 'sent',
          content: messageInput.trim(),
          time: getCurrentTime()
        });
      }

      // Add attached files if exist
      if (attachedFiles[selectedConversation.id]) {
        attachedFiles[selectedConversation.id].forEach(file => {
          newMessages.push({
            id: Date.now() + Math.random(),
            type: file.fileType === 'image' ? 'image' : 'file',
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            fileUrl: file.fileUrl,
            time: getCurrentTime()
          });
        });
      }

      // Add messages to the conversation
      setMessages(prev => ({
        ...prev,
        [selectedConversation.id]: [
          ...(prev[selectedConversation.id] || []),
          ...newMessages
        ]
      }));

      // Update the conversation's last message and time
      const lastMessageContent = messageInput.trim() || `Sent ${attachedFiles[selectedConversation.id]?.length || 0} file(s)`;
      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id 
            ? { ...conv, lastMessage: lastMessageContent, time: 'Just now', unread: false }
            : conv
        )
      );

      // Clear inputs
      setMessageInput('');
      setAttachedFiles(prev => ({
        ...prev,
        [selectedConversation.id]: []
      }));
      setShowEmojiPicker(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Filter conversations based on active filter and search
  const getFilteredConversations = () => {
    let filtered = conversations;

    // Apply type filter
    switch (activeFilter) {
      case 'unread':
        filtered = filtered.filter(conv => conv.unread);
        break;
      case 'teachers':
        filtered = filtered.filter(conv => conv.type === 'teacher');
        break;
      case 'students':
        filtered = filtered.filter(conv => conv.type === 'student');
        break;
      case 'parents':
        filtered = filtered.filter(conv => conv.type === 'parent');
        break;
      default:
        // 'all' - no filtering by type
        break;
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(conv =>
        conv.name.toLowerCase().includes(query) ||
        conv.role.toLowerCase().includes(query) ||
        conv.lastMessage.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const getFilterCounts = () => {
    const unreadCount = conversations.filter(conv => conv.unread).length;
    const teacherCount = conversations.filter(conv => conv.type === 'teacher').length;
    const studentCount = conversations.filter(conv => conv.type === 'student').length;
    const parentCount = conversations.filter(conv => conv.type === 'parent').length;
    
    return {
      all: conversations.length,
      unread: unreadCount,
      teachers: teacherCount,
      students: studentCount,
      parents: parentCount
    };
  };

  // Handle new chat creation
  const handleNewChat = (user) => {
    const existingConv = conversations.find(conv => 
      conv.id === user.id || (conv.name.toLowerCase() === user.name.toLowerCase() && conv.type === user.type)
    );
    
    if (!existingConv) {
      const newConversation = {
        ...user,
        id: user.id || Date.now(),
        lastMessage: 'Start a new conversation',
        time: 'Just now',
        unread: false,
        online: Math.random() > 0.5,
        badge: user.type === 'teacher' ? 'Teacher' : user.type === 'student' ? 'Student' : 'Parent',
        email: `${user.name.toLowerCase().replace(' ', '.')}@school.com`,
        phone: '+91 98765 43200',
        address: 'School Address',
        joinDate: new Date().toISOString().split('T')[0],
        lastSeen: 'Just now',
        avatar: user.avatar || user.name.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      
      setConversations(prev => [newConversation, ...prev]);
      setSelectedConversation(newConversation);
      
      // Initialize empty messages for new conversation
      setMessages(prev => ({
        ...prev,
        [newConversation.id]: []
      }));

      // Initialize attached files for new conversation
      setAttachedFiles(prev => ({
        ...prev,
        [newConversation.id]: []
      }));
    } else {
      setSelectedConversation(existingConv);
    }
    
    setShowNewChatModal(false);
  };

  // Handle file attachment
  const handleFileAttachment = (type) => {
    if (type === 'file') {
      fileInputRef.current?.click();
    } else if (type === 'image') {
      imageInputRef.current?.click();
    }
    setShowAttachmentMenu(false);
  };

  const handleFileUpload = (event, fileType) => {
    const files = Array.from(event.target.files);
    if (files.length > 0 && selectedConversation) {
      const newFiles = files.map(file => {
        const fileSize = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
        const fileUrl = URL.createObjectURL(file);
        return {
          fileName: file.name,
          fileSize,
          fileType: fileType || (file.type.startsWith('image/') ? 'image' : 'file'),
          fileUrl,
          originalFile: file
        };
      });

      setAttachedFiles(prev => ({
        ...prev,
        [selectedConversation.id]: [
          ...(prev[selectedConversation.id] || []),
          ...newFiles
        ]
      }));

      event.target.value = ''; // Reset file input
    }
  };

  // Remove attached file
  const removeAttachedFile = (fileIndex) => {
    if (selectedConversation) {
      setAttachedFiles(prev => {
        const updatedFiles = [...(prev[selectedConversation.id] || [])];
        updatedFiles.splice(fileIndex, 1);
        return {
          ...prev,
          [selectedConversation.id]: updatedFiles
        };
      });
    }
  };

  // Handle emoji selection
  const handleEmojiSelect = (emoji) => {
    setMessageInput(prev => prev + emoji);
  };

  // Handle phone call
  const handlePhoneCall = () => {
    if (selectedConversation?.phone) {
      window.open(`tel:${selectedConversation.phone}`, '_self');
    }
  };

  // Handle video call  
  const handleVideoCall = () => {
    alert(`Starting video call with ${selectedConversation?.name}...`);
    // In a real app, you would integrate with a video calling API here
  };

  // Mark conversation as read when selected
  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
    
    // Mark as read
    if (conversation.unread) {
      setConversations(prev =>
        prev.map(conv =>
          conv.id === conversation.id
            ? { ...conv, unread: false }
            : conv
        )
      );
    }
  };

  // Handle file download/view
  const handleFileAction = (message, action) => {
    if (action === 'view') {
      if (message.fileType === 'image') {
        // Open image in new tab
        window.open(message.fileUrl, '_blank');
      } else {
        // For other files, show a preview or download
        alert(`Viewing file: ${message.fileName}`);
      }
    } else if (action === 'download') {
      // Create a temporary link for download
      const link = document.createElement('a');
      link.href = message.fileUrl;
      link.download = message.fileName;
      link.click();
    }
  };

  const filteredConversations = getFilteredConversations();
  const filterCounts = getFilterCounts();
  const currentMessages = selectedConversation ? (messages[selectedConversation.id] || []) : [];
  const currentAttachedFiles = selectedConversation ? (attachedFiles[selectedConversation.id] || []) : [];

  const getAvatarColor = (name) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-yellow-500', 'bg-indigo-500', 'bg-red-500', 'bg-teal-500'
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const getRoleIcon = (type) => {
    switch (type) {
      case 'teacher': return GraduationCap;
      case 'student': return User;
      case 'parent': return UserCheck;
      case 'staff': return Shield;
      default: return User;
    }
  };

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showEmojiPicker && emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
      if (showAttachmentMenu && attachmentMenuRef.current && !attachmentMenuRef.current.contains(event.target)) {
        setShowAttachmentMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmojiPicker, showAttachmentMenu]);

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
                  {filterCounts.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {filterCounts.unread} unread
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => setShowNewChatModal(true)}
                  className="p-1 rounded-md text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                >
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 text-sm">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeFilter === 'all' 
                      ? 'bg-blue-500 text-white' 
                      : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  All ({filterCounts.all})
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
                <button 
                  onClick={() => setActiveFilter('students')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeFilter === 'students' 
                      ? 'bg-blue-500 text-white' 
                      : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Students ({filterCounts.students})
                </button>
                <button 
                  onClick={() => setActiveFilter('parents')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    activeFilter === 'parents' 
                      ? 'bg-blue-500 text-white' 
                      : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Parents ({filterCounts.parents})
                </button>
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    onClick={() => handleConversationSelect(conversation)}
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
                  <p>No conversations found.</p>
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
                  <div 
                    className="flex items-center gap-3 cursor-pointer hover:bg-opacity-80 rounded-lg p-2 -m-2 transition-colors"
                    onClick={() => setShowUserDetails(true)}
                  >
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
                          {selectedConversation.online ? 'Online' : `Last seen ${selectedConversation.lastSeen}`}
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
                    <button 
                      onClick={handlePhoneCall}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      title="Call"
                    >
                      <Phone size={20} />
                    </button>
                    <button 
                      onClick={handleVideoCall}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      title="Video Call"
                    >
                      <Video size={20} />
                    </button>
                    <button 
                      onClick={() => setShowUserDetails(true)}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      title="User Info"
                    >
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
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                              }`}>
                                <FileText size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
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
                            <div className="flex gap-2 mt-2">
                              <button 
                                onClick={() => handleFileAction(message, 'view')}
                                className={`flex items-center gap-1 text-xs px-2 py-1 rounded ${
                                  isDarkMode ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                <Eye size={12} />
                                View
                              </button>
                              <button 
                                onClick={() => handleFileAction(message, 'download')}
                                className={`flex items-center gap-1 text-xs px-2 py-1 rounded ${
                                  isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                              >
                                <Download size={12} />
                                Download
                              </button>
                            </div>
                            <div className={`text-xs mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {message.time}
                            </div>
                          </div>
                        ) : message.type === 'image' ? (
                          <div className={`max-w-xs p-3 rounded-lg ${
                            isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-300'
                          }`}>
                            <img 
                              src={message.fileUrl} 
                              alt={message.fileName}
                              className="w-full h-32 object-cover rounded-lg mb-2 cursor-pointer"
                              onClick={() => handleFileAction(message, 'view')}
                            />
                            <div className="flex items-center justify-between">
                              <div>
                                <p className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                  {message.fileName}
                                </p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {message.fileSize}
                                </p>
                              </div>
                              <button 
                                onClick={() => handleFileAction(message, 'download')}
                                className={`p-1 rounded ${
                                  isDarkMode ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                title="Download"
                              >
                                <Download size={14} />
                              </button>
                            </div>
                            <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
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

                {/* Attached Files Preview */}
                {currentAttachedFiles.length > 0 && (
                  <div className={`border-t p-3 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'}`}>
                    <div className="flex flex-wrap gap-2">
                      {currentAttachedFiles.map((file, index) => (
                        <div key={index} className={`flex items-center gap-2 p-2 rounded-lg ${
                          isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                        }`}>
                          {file.fileType === 'image' ? (
                            <img 
                              src={file.fileUrl} 
                              alt={file.fileName}
                              className="w-8 h-8 object-cover rounded"
                            />
                          ) : (
                            <FileText size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                          )}
                          <span className={`text-sm max-w-32 truncate ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {file.fileName}
                          </span>
                          <button 
                            onClick={() => removeAttachedFile(index)}
                            className="p-1 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                            title="Remove file"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message Input - Fixed at Bottom */}
                <div className={`flex-shrink-0 p-4 border-t relative ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                }`}>
                  {/* Emoji Picker */}
                  {showEmojiPicker && (
                    <div 
                      ref={emojiPickerRef}
                      className={`absolute bottom-16 left-16 w-80 h-48 rounded-lg border shadow-lg p-4 overflow-y-auto z-10 ${
                        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                      }`}
                    >
                      <div className="grid grid-cols-8 gap-2">
                        {emojis.map((emoji, index) => (
                          <button
                            key={index}
                            onClick={() => handleEmojiSelect(emoji)}
                            className="text-xl hover:bg-gray-100 dark:hover:bg-slate-700 p-2 rounded transition-colors"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Attachment Menu */}
                  {showAttachmentMenu && (
                    <div 
                      ref={attachmentMenuRef}
                      className={`absolute bottom-16 left-4 w-48 rounded-lg border shadow-lg p-2 z-10 ${
                        isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                      }`}
                    >
                      <button
                        onClick={() => handleFileAttachment('file')}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <FileText size={20} />
                        <span>Document</span>
                      </button>
                      <button
                        onClick={() => handleFileAttachment('image')}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        <Image size={20} />
                        <span>Photo</span>
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                      className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Paperclip size={20} />
                    </button>
                    
                    <div className={`flex-1 border rounded-lg relative ${
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
                    
                    <button 
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Smile size={20} />
                    </button>
                    
                    <button 
                      onClick={handleSendMessage}
                      className="flex-shrink-0 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                      disabled={!messageInput.trim() && currentAttachedFiles.length === 0}
                    >
                      <Send size={20} />
                    </button>
                  </div>

                  {/* Hidden file inputs */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, 'file')}
                    multiple
                  />
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, 'image')}
                    multiple
                  />
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

        {/* User Details Modal */}
        {showUserDetails && selectedConversation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl ${
              isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  User Details
                </h2>
                <button
                  onClick={() => setShowUserDetails(false)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-medium text-xl mx-auto mb-4 ${getAvatarColor(selectedConversation.name)}`}>
                  {selectedConversation.avatar}
                </div>
                <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedConversation.name}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedConversation.role}
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  {selectedConversation.online && <div className="w-2 h-2 bg-green-400 rounded-full" />}
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedConversation.online ? 'Online' : `Last seen ${selectedConversation.lastSeen}`}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} size={20} />
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedConversation.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} size={20} />
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedConversation.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} size={20} />
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Address</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedConversation.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} size={20} />
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Joined</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {new Date(selectedConversation.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handlePhoneCall}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Phone size={18} />
                  Call
                </button>
                <button
                  onClick={handleVideoCall}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Video size={18} />
                  Video
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/${selectedConversation.phone.replace(/[^\d]/g, '')}`, '_blank')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* New Chat Modal */}
        {showNewChatModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl ${
              isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Start New Chat
                </h2>
                <button
                  onClick={() => setShowNewChatModal(false)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search users..."
                  className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              <div className="max-h-64 overflow-y-auto">
                {availableUsers.map((user) => {
                  const RoleIcon = getRoleIcon(user.type);
                  return (
                    <div
                      key={user.id}
                      onClick={() => handleNewChat(user)}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${getAvatarColor(user.name)}`}>
                        {user.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {user.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <RoleIcon size={12} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {user.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default Messages;