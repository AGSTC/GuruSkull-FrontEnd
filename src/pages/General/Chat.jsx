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
  Eye,
  Check,
  CheckCheck,
  ChevronRight,
  ArrowUp,
  ArrowDown
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

  const [availableUsers] = useState([
    { id: 101, name: 'Dr. Rajesh Kumar', role: 'Teacher, Biology', avatar: 'RK', type: 'teacher' },
    { id: 102, name: 'Priyanka Singh', role: 'Student, Class 9', avatar: 'PS', type: 'student' },
    { id: 103, name: 'Mr. Sharma', role: 'Parent', avatar: 'MS', type: 'parent' },
    { id: 104, name: 'Ms. Nisha Patel', role: 'Teacher, English', avatar: 'NP', type: 'teacher' },
    { id: 105, name: 'Rohit Verma', role: 'Student, Class 8', avatar: 'RV', type: 'student' },
  ]);

  const emojis = ['😀', '😃', '😄', '😁', '😊', '😍', '🥰', '😘', '😗', '😙', '😚', '🤗', '🤔', '😐', '😑', '😶', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩'];

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedConversation]);

  useEffect(() => {
    if (location.state && location.state.selectedUser) {
      const incomingUser = location.state.selectedUser;
      
      const existingConversation = conversations.find(conv => 
        conv.id === incomingUser.id || 
        (conv.name.toLowerCase() === incomingUser.name.toLowerCase() && conv.type === incomingUser.type)
      );
      if (existingConversation) {
        setSelectedConversation(existingConversation);
      } else {
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
        
        setMessages(prev => ({
          ...prev,
          [newConversation.id]: [
            { 
              id: 1, 
              type: 'received', 
              content: `Hello! I'm ${incomingUser.name}. How can I help you?`, 
              time: getCurrentTime(),
              status: 'read'
            }
          ]
        }));

        setAttachedFiles(prev => ({
          ...prev,
          [newConversation.id]: []
        }));
      }
      
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, conversations, navigate, location.pathname]);

  const initializeMessages = () => {
    const defaultMessages = {
      1: [
        { id: 1, type: 'received', content: 'Hello! How are you doing today?', time: '02:30 PM', status: 'read' },
        { id: 2, type: 'sent', content: 'Hi there! I\'m doing great, thanks for asking. How about you?', time: '02:30 PM', status: 'read' },
        { id: 3, type: 'received', content: 'I\'m good too! I wanted to discuss about the upcoming exam schedule.', time: '02:30 PM', status: 'read' },
        { id: 4, type: 'sent', content: 'Sure, I\'d be happy to discuss that. What would you like to know?', time: '02:30 PM', status: 'read' },
        { id: 5, type: 'file', fileName: 'exam-checklist.pdf', fileSize: '2.46 MB', fileType: 'pdf', time: '02:30 PM', status: 'read' },
        { id: 6, type: 'received', content: 'Thanks for sharing the checklist. This will be very helpful for the students.', time: '02:30 PM', status: 'read' }
      ],
      2: [
        { id: 1, type: 'received', content: 'Sir, I have a doubt in the physics assignment. Can you help me?', time: '01:45 PM', status: 'read' },
        { id: 2, type: 'sent', content: 'Of course! What specific topic are you having trouble with?', time: '01:46 PM', status: 'read' },
        { id: 3, type: 'image', fileName: 'diagram.png', fileSize: '1.2 MB', fileType: 'image', time: '01:47 PM', status: 'read' }
      ],
      3: [
        { id: 1, type: 'received', content: 'Thank you for the progress report. My daughter is doing well.', time: '11:30 AM', status: 'read' },
        { id: 2, type: 'sent', content: 'You\'re welcome! She\'s been very dedicated to her studies.', time: '11:32 AM', status: 'read' },
        { id: 3, type: 'image', fileName: 'progress-chart.jpg', fileSize: '890 KB', fileType: 'image', time: '11:33 AM', status: 'read' }
      ],
      4: [
        { id: 1, type: 'received', content: 'The laboratory equipment has arrived. We can schedule the practical sessions now.', time: '10:15 AM', status: 'read' },
        { id: 2, type: 'sent', content: 'Excellent! Let\'s discuss the timetable for the practical sessions.', time: '10:20 AM', status: 'read' }
      ],
      5: [
        { id: 1, type: 'received', content: 'Ma\'am, when will the exam schedule be released?', time: '09:30 AM', status: 'read' },
        { id: 2, type: 'sent', content: 'The schedule will be released next week. Stay tuned!', time: '09:35 AM', status: 'read' }
      ],
      6: [
        { id: 1, type: 'received', content: 'The fee collection report for this month is ready for your review.', time: '08:15 AM', status: 'read' },
        { id: 2, type: 'sent', content: 'Thanks! I\'ll review it today.', time: '08:20 AM', status: 'read' },
        { id: 3, type: 'file', fileName: 'fee-report.xlsx', fileSize: '3.15 MB', fileType: 'document', time: '08:21 AM', status: 'read' }
      ],
      7: [
        { id: 1, type: 'received', content: 'I\'ve uploaded the new study materials in the portal.', time: 'Yesterday', status: 'read' },
        { id: 2, type: 'sent', content: 'Great! I\'ll check them out.', time: 'Yesterday', status: 'read' }
      ],
      8: [
        { id: 1, type: 'received', content: 'Can we reschedule tomorrow\'s extra class?', time: 'Yesterday', status: 'read' },
        { id: 2, type: 'sent', content: 'Sure, what time works for you?', time: 'Yesterday', status: 'read' }
      ]
    };
    setMessages(defaultMessages);
  };

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

  const updateMessageStatus = (conversationId, messageId, newStatus) => {
    setMessages(prev => ({
      ...prev,
      [conversationId]: prev[conversationId].map(msg =>
        msg.id === messageId ? { ...msg, status: newStatus } : msg
      )
    }));
  };

  const simulateMessageStatusUpdate = (conversationId, messageId) => {
    const conversation = conversations.find(conv => conv.id === conversationId);
    if (conversation && conversation.online) {
      setTimeout(() => {
        updateMessageStatus(conversationId, messageId, 'delivered');
      }, 1000);

      setTimeout(() => {
        updateMessageStatus(conversationId, messageId, 'read');
      }, 3000);
    } else {
      setTimeout(() => {
        updateMessageStatus(conversationId, messageId, 'delivered');
      }, 2000);
    }
  };

  const handleSendMessage = () => {
    if ((messageInput.trim() || attachedFiles[selectedConversation.id]) && selectedConversation) {
      const newMessages = [];
      const conversationId = selectedConversation.id;

      if (messageInput.trim()) {
        const textMessage = {
          id: Date.now(),
          type: 'sent',
          content: messageInput.trim(),
          time: getCurrentTime(),
          status: 'sent'
        };
        newMessages.push(textMessage);

        simulateMessageStatusUpdate(conversationId, textMessage.id);
      }

      if (attachedFiles[selectedConversation.id]) {
        attachedFiles[selectedConversation.id].forEach(file => {
          const fileMessage = {
            id: Date.now() + Math.random(),
            type: file.fileType === 'image' ? 'image' : 'file',
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            fileUrl: file.fileUrl,
            time: getCurrentTime(),
            status: 'sent'
          };
          newMessages.push(fileMessage);

          simulateMessageStatusUpdate(conversationId, fileMessage.id);
        });
      }

      setMessages(prev => ({
        ...prev,
        [conversationId]: [
          ...(prev[conversationId] || []),
          ...newMessages
        ]
      }));

      const lastMessageContent = messageInput.trim() || `Sent ${attachedFiles[selectedConversation.id]?.length || 0} file(s)`;
      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id 
            ? { ...conv, lastMessage: lastMessageContent, time: 'Just now', unread: false }
            : conv
        )
      );

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

  const getFilteredConversations = () => {
    let filtered = conversations;

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
        break;
    }

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
      
      setMessages(prev => ({
        ...prev,
        [newConversation.id]: []
      }));

      setAttachedFiles(prev => ({
        ...prev,
        [newConversation.id]: []
      }));
    } else {
      setSelectedConversation(existingConv);
    }
    
    setShowNewChatModal(false);
  };

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

      event.target.value = '';
    }
  };

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

  const handleEmojiSelect = (emoji) => {
    setMessageInput(prev => prev + emoji);
  };

  const handlePhoneCall = () => {
    if (selectedConversation?.phone) {
      window.open(`tel:${selectedConversation.phone}`, '_self');
    }
  };

  const handleVideoCall = () => {
    alert(`Starting video call with ${selectedConversation?.name}...`);
  };

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
    
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

  const handleFileAction = (message, action) => {
    if (action === 'view') {
      if (message.fileType === 'image') {
        window.open(message.fileUrl, '_blank');
      } else {
        alert(`Viewing file: ${message.fileName}`);
      }
    } else if (action === 'download') {
      const link = document.createElement('a');
      link.href = message.fileUrl;
      link.download = message.fileName;
      link.click();
    }
  };

  const renderMessageStatus = (message) => {
    if (message.type !== 'sent' && message.type !== 'file' && message.type !== 'image') {
      return null;
    }

    switch (message.status) {
      case 'sent':
        return <Check size={12} className="text-gray-400" />;
      case 'delivered':
        return <CheckCheck size={12} className="text-gray-400" />;
      case 'read':
        return <CheckCheck size={12} className="text-white" />;
      default:
        return <Check size={12} className="text-gray-400" />;
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
    <>
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Header 
          isSidebarExpanded={isSidebarExpanded} 
          toggleSidebar={toggleSidebar}
        />

        <Sidebar isExpanded={isSidebarExpanded} activeItem="messages" />

        <main className={`transition-all duration-300 ${
          isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
          <div className="w-full h-full flex flex-col lg:flex-row">
            
            {/* Conversations List - Hidden on mobile when chat is open */}
            <div className={`w-full lg:w-80 h-[calc(100vh-128px)] border-r flex flex-col ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
            } ${selectedConversation ? 'hidden lg:flex' : 'flex'}`}>
              
              <div className="p-3 md:p-4 border-b border-inherit">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <h1 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Messages
                    </h1>
                    {filterCounts.unread > 0 && (
                      <span className="bg-red-500 text-white text-xs px-1 md:px-2 py-0.5 md:py-1 rounded-full">
                        {filterCounts.unread} unread
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => setShowNewChatModal(true)}
                    className="p-1 md:p-1.5 rounded-md text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Plus size={16} className="md:w-5 md:h-5" />
                  </button>
                </div>

                <div className="relative mb-3 md:mb-4">
                  <Search className={`absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-7 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 rounded-lg border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>

                <div className="flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm">
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className={`px-2 py-1 md:px-3 md:py-1 rounded-full transition-colors ${
                      activeFilter === 'all' 
                        ? 'bg-blue-500 text-white' 
                        : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    All ({filterCounts.all})
                  </button>
                  <button 
                    onClick={() => setActiveFilter('unread')}
                    className={`px-2 py-1 md:px-3 md:py-1 rounded-full transition-colors ${
                      activeFilter === 'unread' 
                        ? 'bg-blue-500 text-white' 
                        : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Unread ({filterCounts.unread})
                  </button>
                  <button 
                    onClick={() => setActiveFilter('teachers')}
                    className={`px-2 py-1 md:px-3 md:py-1 rounded-full transition-colors ${
                      activeFilter === 'teachers' 
                        ? 'bg-blue-500 text-white' 
                        : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Teachers ({filterCounts.teachers})
                  </button>
                  <button 
                    onClick={() => setActiveFilter('students')}
                    className={`px-2 py-1 md:px-3 md:py-1 rounded-full transition-colors ${
                      activeFilter === 'students' 
                        ? 'bg-blue-500 text-white' 
                        : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Students ({filterCounts.students})
                  </button>
                  <button 
                    onClick={() => setActiveFilter('parents')}
                    className={`px-2 py-1 md:px-3 md:py-1 rounded-full transition-colors ${
                      activeFilter === 'parents' 
                        ? 'bg-blue-500 text-white' 
                        : isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Parents ({filterCounts.parents})
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((conversation) => (
                    <div 
                      key={conversation.id}
                      onClick={() => handleConversationSelect(conversation)}
                      className={`p-3 md:p-4 border-b border-inherit cursor-pointer transition-colors ${
                        selectedConversation?.id === conversation.id
                          ? isDarkMode ? 'bg-slate-700' : 'bg-blue-50'
                          : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="relative">
                          <div className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-medium text-xs md:text-sm ${getAvatarColor(conversation.name)}`}>
                            {conversation.avatar}
                          </div>
                          {conversation.online && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full border border-white" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-medium text-xs md:text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {conversation.name}
                            </h3>
                            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {conversation.time}
                            </span>
                          </div>
                          
                          <p className={`text-xs mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {conversation.role}
                          </p>
                          
                          <p className={`text-xs truncate ${
                            conversation.unread 
                              ? isDarkMode ? 'text-white font-medium' : 'text-gray-900 font-medium'
                              : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {conversation.lastMessage}
                          </p>
                          
                          {conversation.badge && (
                            <span className="inline-block mt-1 px-1.5 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full">
                              {conversation.badge}
                            </span>
                          )}
                        </div>
                        
                        {conversation.unread && (
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full ml-1 md:ml-2 mt-1 md:mt-2" />
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={`p-4 md:p-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p className="text-sm">No conversations found.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 flex flex-col h-[calc(100vh-128px)] ${!selectedConversation ? 'hidden lg:flex' : 'flex'}`}>
              {selectedConversation ? (
                <>
                  <div className={`flex-shrink-0 p-3 md:p-4 border-b flex items-center justify-between ${
                    isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                  }`}>
                    <div className="flex items-center gap-2 md:gap-3">
                      <button 
                        onClick={() => setSelectedConversation(null)}
                        className="lg:hidden p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <div 
                        className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-opacity-80 rounded-lg p-1 md:p-2 -m-1 md:-m-2 transition-colors"
                        onClick={() => setShowUserDetails(true)}
                      >
                        <div className="relative">
                          <div className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-medium text-xs md:text-sm ${getAvatarColor(selectedConversation.name)}`}>
                            {selectedConversation.avatar}
                          </div>
                          {selectedConversation.online && (
                            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full border border-white" />
                          )}
                        </div>
                        <div>
                          <h3 className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {selectedConversation.name}
                          </h3>
                          <div className="flex items-center gap-1 md:gap-2 text-xs">
                            {selectedConversation.online && <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full" />}
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                              {selectedConversation.online ? 'Online' : `Last seen ${selectedConversation.lastSeen}`}
                            </span>
                            {selectedConversation.badge && (
                              <span className="px-1.5 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full">
                                {selectedConversation.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 md:gap-2">
                      <button 
                        onClick={handlePhoneCall}
                        className={`p-1.5 md:p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                        title="Call"
                      >
                        <Phone size={16} className="md:w-5 md:h-5" />
                      </button>
                      <button 
                        onClick={handleVideoCall}
                        className={`p-1.5 md:p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                        title="Video Call"
                      >
                        <Video size={16} className="md:w-5 md:h-5" />
                      </button>
                      <button 
                        onClick={() => setShowUserDetails(true)}
                        className={`p-1.5 md:p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                        title="User Info"
                      >
                        <Info size={16} className="md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>

                  <div className={`flex-1 p-3 md:p-4 overflow-y-auto ${
                    isDarkMode ? 'bg-slate-900' : 'bg-gray-50'
                  }`}>
                    <div className="space-y-3 md:space-y-4">
                      {currentMessages.map((message) => (
                        <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                          {message.type === 'file' ? (
                            <div className={`max-w-xs p-2 md:p-3 rounded-lg ${
                              isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-300'
                            }`}>
                              <div className="flex items-center gap-2 md:gap-3">
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                                  isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                                }`}>
                                  <FileText size={16} className="md:w-5 md:h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className={`font-medium text-xs md:text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {message.fileName}
                                  </p>
                                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {message.fileSize}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-1 md:gap-2 mt-1 md:mt-2">
                                <button 
                                  onClick={() => handleFileAction(message, 'view')}
                                  className={`flex items-center gap-1 text-xs px-1.5 py-1 md:px-2 md:py-1 rounded ${
                                    isDarkMode ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                  }`}
                                >
                                  <Eye size={10} className="md:w-3 md:h-3" />
                                  View
                                </button>
                                <button 
                                  onClick={() => handleFileAction(message, 'download')}
                                  className={`flex items-center gap-1 text-xs px-1.5 py-1 md:px-2 md:py-1 rounded ${
                                    isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
                                  }`}
                                >
                                  <Download size={10} className="md:w-3 md:h-3" />
                                  Download
                                </button>
                              </div>
                              <div className={`flex items-center justify-between mt-1 md:mt-2`}>
                                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {message.time}
                                </span>
                                {message.type === 'sent' && (
                                  <div className="flex items-center ml-1 md:ml-2">
                                    {renderMessageStatus(message)}
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : message.type === 'image' ? (
                            <div className={`max-w-xs p-2 md:p-3 rounded-lg ${
                              isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-300'
                            }`}>
                              <img 
                                src={message.fileUrl} 
                                alt={message.fileName}
                                className="w-full h-24 md:h-32 object-cover rounded-lg mb-1 md:mb-2 cursor-pointer"
                                onClick={() => handleFileAction(message, 'view')}
                              />
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                                  <Download size={12} className="md:w-3 md:h-3" />
                                </button>
                              </div>
                              <div className={`flex items-center justify-between mt-1`}>
                                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {message.time}
                                </span>
                                {message.type === 'sent' && (
                                  <div className="flex items-center ml-1 md:ml-2">
                                    {renderMessageStatus(message)}
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className={`max-w-xs px-3 py-2 rounded-lg ${
                              message.type === 'sent' 
                                ? 'bg-blue-500 text-white' 
                                : isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
                            }`}>
                              <p className="text-xs md:text-sm">{message.content}</p>
                              <div className={`flex items-center justify-end gap-1 mt-1 ${
                                message.type === 'sent' ? 'justify-end' : 'justify-start'
                              }`}>
                                <span className={`text-xs ${
                                  message.type === 'sent' 
                                    ? 'text-blue-100' 
                                    : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  {message.time}
                                </span>
                                {message.type === 'sent' && (
                                  <div className="flex items-center ml-1">
                                    {renderMessageStatus(message)}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {currentMessages.length === 0 && (
                        <div className={`text-center py-4 md:py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <p className="text-sm">Start a conversation with {selectedConversation.name}</p>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {currentAttachedFiles.length > 0 && (
                    <div className={`border-t p-2 md:p-3 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'}`}>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {currentAttachedFiles.map((file, index) => (
                          <div key={index} className={`flex items-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-lg ${
                            isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                          }`}>
                            {file.fileType === 'image' ? (
                              <img 
                                src={file.fileUrl} 
                                alt={file.fileName}
                                className="w-6 h-6 md:w-8 md:h-8 object-cover rounded"
                              />
                            ) : (
                              <FileText size={14} className="md:w-4 md:h-4" />
                            )}
                            <span className={`text-xs max-w-24 md:max-w-32 truncate ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {file.fileName}
                            </span>
                            <button 
                              onClick={() => removeAttachedFile(index)}
                              className="p-0.5 md:p-1 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                              title="Remove file"
                            >
                              <X size={12} className="md:w-3 md:h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={`flex-shrink-0 p-3 md:p-4 border-t relative ${
                    isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                  }`}>
                    {showEmojiPicker && (
                      <div 
                        ref={emojiPickerRef}
                        className={`absolute bottom-12 md:bottom-16 left-2 md:left-4 w-64 md:w-80 h-32 md:h-48 rounded-lg border shadow-lg p-2 md:p-4 overflow-y-auto z-10 ${
                          isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                        }`}
                      >
                        <div className="grid grid-cols-8 gap-1 md:gap-2">
                          {emojis.map((emoji, index) => (
                            <button
                              key={index}
                              onClick={() => handleEmojiSelect(emoji)}
                              className="text-lg md:text-xl hover:bg-gray-100 dark:hover:bg-slate-700 p-1 md:p-2 rounded transition-colors"
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {showAttachmentMenu && (
                      <div 
                        ref={attachmentMenuRef}
                        className={`absolute bottom-12 md:bottom-16 left-2 md:left-4 w-40 md:w-48 rounded-lg border shadow-lg p-1 md:p-2 z-10 ${
                          isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300'
                        }`}
                      >
                        <button
                          onClick={() => handleFileAttachment('file')}
                          className={`w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg text-left transition-colors ${
                            isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <FileText size={16} className="md:w-5 md:h-5" />
                          <span className="text-xs md:text-sm">Document</span>
                        </button>
                        <button
                          onClick={() => handleFileAttachment('image')}
                          className={`w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg text-left transition-colors ${
                            isDarkMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <Image size={16} className="md:w-5 md:h-5" />
                          <span className="text-xs md:text-sm">Photo</span>
                        </button>
                      </div>
                    )}

                    <div className="flex items-center gap-2 md:gap-3">
                      <button 
                        onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                        className={`flex-shrink-0 p-1.5 md:p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <Paperclip size={16} className="md:w-5 md:h-5" />
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
                          style={{ minHeight: '40px', maxHeight: '120px' }}
                          className={`w-full p-2 md:p-3 rounded-lg resize-none focus:outline-none overflow-y-auto text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 text-white placeholder-gray-400' 
                              : 'bg-white text-gray-900 placeholder-gray-500'
                          }`}
                        />
                      </div>
                      
                      <button 
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className={`flex-shrink-0 p-1.5 md:p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'text-gray-400 hover:text-white hover:bg-slate-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <Smile size={16} className="md:w-5 md:h-5" />
                      </button>
                      
                      <button 
                        onClick={handleSendMessage}
                        className="flex-shrink-0 p-2 md:p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                        disabled={!messageInput.trim() && currentAttachedFiles.length === 0}
                      >
                        <Send size={16} className="md:w-5 md:h-5" />
                      </button>
                    </div>

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
                <div className={`flex-1 flex flex-col items-center justify-center ${
                  isDarkMode ? 'bg-slate-900' : 'bg-gray-50'
                }`}>
                  <div className={`w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                    isDarkMode ? 'bg-slate-800' : 'bg-gray-200'
                  }`}>
                    <div className={`w-10 h-10 md:w-16 md:h-16 rounded-lg flex items-center justify-center ${
                      isDarkMode ? 'bg-slate-700' : 'bg-white'
                    }`}>
                      <Send className={`md:w-8 md:h-8${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    </div>
                  </div>
                  
                  <h2 className={`text-lg md:text-2xl font-semibold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Welcome to Messages
                  </h2>
                  <p className={`text-center max-w-xs md:max-w-md text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Select a conversation from the sidebar to start chatting with teachers, students, parents, and staff members.
                  </p>
                </div>
              )}
            </div>
          </div>

          {showUserDetails && selectedConversation && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
              <div className={`w-full max-w-md rounded-xl md:rounded-2xl ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              } shadow-2xl overflow-hidden`}>
                
                <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
                  isDarkMode ? 'border-slate-700' : 'border-gray-300'
                }`}>
                  <div>
                    <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      User Details
                    </h2>
                    <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Complete information about the user
                    </p>
                  </div>
                  <button
                    onClick={() => setShowUserDetails(false)}
                    className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
                      isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
                    }`}
                  >
                    <X size={20} className="md:w-6 md:h-6" />
                  </button>
                </div>

                <div className="p-4 md:p-6">
                  <div className="text-center mb-4 md:mb-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white font-medium text-sm md:text-base mx-auto mb-3 md:mb-4 ${getAvatarColor(selectedConversation.name)}`}>
                      {selectedConversation.avatar}
                    </div>
                    <h3 className={`text-base md:text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedConversation.name}
                    </h3>
                    <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {selectedConversation.role}
                    </p>
                    <div className="flex items-center justify-center gap-1 md:gap-2 mt-1 md:mt-2">
                      {selectedConversation.online && <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full" />}
                      <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {selectedConversation.online ? 'Online' : `Last seen ${selectedConversation.lastSeen}`}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Mail className={`md:w-5 md:h-5${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} size={16}/>
                      <div>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                        <p className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {selectedConversation.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <Phone className={`md:w-5 md:h-5${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} size={16}/>
                      <div>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                        <p className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {selectedConversation.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <MapPin className={`md:w-5 md:h-5${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} size={16}/>
                      <div>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Address</p>
                        <p className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {selectedConversation.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                      <Calendar className={`md:w-5 md:h-5${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} size={16}/>
                      <div>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Joined</p>
                        <p className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {new Date(selectedConversation.joinDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
                    <button
                      onClick={handlePhoneCall}
                      className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 bg-green-500 text-white rounded-lg text-xs md:text-sm hover:bg-green-600 transition-colors"
                    >
                      <Phone size={14} className="md:w-4 md:h-4" />
                      Call
                    </button>
                    <button
                      onClick={handleVideoCall}
                      className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 bg-blue-500 text-white rounded-lg text-xs md:text-sm hover:bg-blue-600 transition-colors"
                    >
                      <Video size={14} className="md:w-4 md:h-4" />
                      Video
                    </button>
                    <button
                      onClick={() => window.open(`https://wa.me/${selectedConversation.phone.replace(/[^\d]/g, '')}`, '_blank')}
                      className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 bg-green-600 text-white rounded-lg text-xs md:text-sm hover:bg-green-700 transition-colors"
                    >
                      <MessageSquare size={14} className="md:w-4 md:h-4" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showNewChatModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
              <div className={`w-full max-w-md rounded-xl md:rounded-2xl ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              } shadow-2xl overflow-hidden`}>
                
                <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
                  isDarkMode ? 'border-slate-700' : 'border-gray-300'
                }`}>
                  <div>
                    <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Start New Chat
                    </h2>
                    <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Select a user to start a conversation
                    </p>
                  </div>
                  <button
                    onClick={() => setShowNewChatModal(false)}
                    className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
                      isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
                    }`}
                  >
                    <X size={20} className="md:w-6 md:h-6" />
                  </button>
                </div>

                <div className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4">
                    <input
                      type="text"
                      placeholder="Search users..."
                      className={`w-full px-3 py-2 rounded-lg border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>

                  <div className="max-h-48 md:max-h-64 overflow-y-auto">
                    {availableUsers.map((user) => {
                      const RoleIcon = getRoleIcon(user.type);
                      return (
                        <div
                          key={user.id}
                          onClick={() => handleNewChat(user)}
                          className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg cursor-pointer transition-colors ${
                            isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                          }`}
                        >
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-medium text-xs md:text-sm ${getAvatarColor(user.name)}`}>
                            {user.avatar}
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {user.name}
                            </h3>
                            <div className="flex items-center gap-1 md:gap-2">
                              <RoleIcon size={10} className="md:w-3 md:h-3" />
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
            </div>
          )}
        </main>

        <Footer isSidebarExpanded={isSidebarExpanded} />
      </div>
    </>
  );
};

export default Messages;