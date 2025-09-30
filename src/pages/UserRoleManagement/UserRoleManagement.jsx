import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { useNavigate } from 'react-router-dom';

import {
  Users,
  UserCheck,
  GraduationCap,
  Shield,
  Download,
  Plus,
  Search,
  Eye,
  Edit,
  MessageSquare,
  Trash2,
  Phone,
  Mail,
  X,
  FileText,
  CheckCircle,
  Copy,
  ChevronRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const UserRoleManagement = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('');
  const [generatedCredentials, setGeneratedCredentials] = useState({});
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    dateOfBirth: '',
    emergencyContact: '',
    address: ''
  });

  const generateUserData = () => {
    const studentNames = [
      'Arjun Patel', 'Priya Sharma', 'Sneha Desai', 'Mohammed Khan', 'Kiran Patel',
      'Aarav Singh', 'Ananya Gupta', 'Rohan Kumar', 'Kavya Nair', 'Siddharth Jain',
      'Ishita Kapoor', 'Harsh Gupta', 'Meera Singh', 'Nikhil Sharma', 'Tanya Malhotra',
      'Rahul Verma', 'Sakshi Pandey', 'Varun Kumar', 'Deepika Jha', 'Rohit Agrawal',
      'Simran Kaur', 'Abhinav Mishra', 'Nisha Thakur', 'Kartik Saxena', 'Priyanka Das',
      'Akash Bhatt', 'Swati Yadav', 'Vikram Reddy', 'Pooja Agarwal', 'Aditya Rao'
    ];

    const teacherNames = [
      'Dr. Anjali Singh', 'Prof. Rajesh Kumar', 'Ms. Kavita Verma', 'Mr. Suresh Joshi',
      'Dr. Priya Gupta', 'Prof. Anil Kumar', 'Ms. Sunita Singh', 'Mr. Vinod Agrawal',
      'Dr. Ravi Mehta', 'Prof. Neha Kapoor', 'Ms. Sushma Rao', 'Mr. Manoj Tiwari',
      'Dr. Pooja Sharma', 'Prof. Amit Jain', 'Ms. Rekha Pandey', 'Mr. Deepak Mishra',
      'Dr. Seema Agarwal', 'Prof. Vikash Singh'
    ];

    const parentNames = [
      'Rajesh Kumar', 'Sunita Patel', 'Manoj Sharma', 'Priya Gupta', 'Suresh Singh',
      'Kavita Joshi', 'Anil Verma', 'Meera Agarwal', 'Vinod Kumar', 'Neha Mishra',
      'Deepak Shah', 'Pooja Rao', 'Ravi Kapoor', 'Sushma Jain', 'Amit Pandey',
      'Rekha Singh', 'Manoj Thakur', 'Seema Das', 'Vikash Bhatt', 'Sunita Yadav'
    ];

    const accountantNames = [
      'Ravi Patel', 'Seema Agarwal', 'Manoj Gupta', 'Priya Joshi', 'Suresh Verma'
    ];

    const classes = ['Class 8A', 'Class 8B', 'Class 9A', 'Class 9B', 'Class 10A', 'Class 10B', 'Class 11A', 'Class 11B', 'Class 12A', 'Class 12B'];
    const subjects = ['Mathematics', 'Science', 'English', 'Social Studies', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];
    const statuses = ['Active', 'Inactive'];

    const userData = [];
    let idCounter = 1;

    studentNames.forEach((name, index) => {
      userData.push({
        id: idCounter++,
        name: name,
        email: `${name.toLowerCase().replace(' ', '.')}@email.com`,
        role: 'Student',
        roleColor: 'bg-blue-100 text-blue-800 border-blue-200',
        classInfo: classes[index % classes.length],
        contact: `+91 98765432${(10 + index).toString().padStart(2, '0')}`,
        altContact: `${name.toLowerCase().replace(' ', '.')}@email.com`,
        status: index % 8 === 0 ? 'Inactive' : 'Active',
        statusColor: index % 8 === 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800',
        lastActive: `${Math.floor(Math.random() * 12) + 1} hours ago`,
        avatar: name.split(' ').map(n => n[0]).join('')
      });
    });

    teacherNames.forEach((name, index) => {
      userData.push({
        id: idCounter++,
        name: name,
        email: `${name.toLowerCase().replace(/[^a-z\s]/g, '').replace(' ', '.')}@email.com`,
        role: 'Teacher',
        roleColor: 'bg-green-100 text-green-800 border-green-200',
        classInfo: subjects[index % subjects.length],
        contact: `+91 98765433${(10 + index).toString().padStart(2, '0')}`,
        altContact: `${name.toLowerCase().replace(/[^a-z\s]/g, '').replace(' ', '.')}@email.com`,
        status: index % 10 === 0 ? 'Inactive' : 'Active',
        statusColor: index % 10 === 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800',
        lastActive: `${Math.floor(Math.random() * 8) + 1} hours ago`,
        avatar: name.split(' ').map(n => n[0]).join('').substring(0, 2)
      });
    });

    parentNames.forEach((name, index) => {
      userData.push({
        id: idCounter++,
        name: name,
        email: `${name.toLowerCase().replace(' ', '.')}@email.com`,
        role: 'Parent',
        roleColor: 'bg-orange-100 text-orange-800 border-orange-200',
        classInfo: `Parent of ${studentNames[index % studentNames.length].split(' ')[0]}`,
        contact: `+91 98765434${(10 + index).toString().padStart(2, '0')}`,
        altContact: `${name.toLowerCase().replace(' ', '.')}@email.com`,
        status: index % 12 === 0 ? 'Inactive' : 'Active',
        statusColor: index % 12 === 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800',
        lastActive: `${Math.floor(Math.random() * 24) + 1} hours ago`,
        avatar: name.split(' ').map(n => n[0]).join('')
      });
    });

    accountantNames.forEach((name, index) => {
      userData.push({
        id: idCounter++,
        name: name,
        email: `${name.toLowerCase().replace(' ', '.')}@email.com`,
        role: 'Accountant',
        roleColor: 'bg-purple-100 text-purple-800 border-purple-200',
        classInfo: 'Finance',
        contact: `+91 98765435${(10 + index).toString().padStart(2, '0')}`,
        altContact: `${name.toLowerCase().replace(' ', '.')}@email.com`,
        status: 'Active',
        statusColor: 'bg-green-100 text-green-800',
        lastActive: `${Math.floor(Math.random() * 6) + 1} hours ago`,
        avatar: name.split(' ').map(n => n[0]).join('')
      });
    });

    return userData;
  };

  useEffect(() => {
    setUsers(generateUserData());
  }, []);

  useEffect(() => {
    let filtered = [...users];

    if (activeFilter !== 'All') {
      const roleMap = {
        'All Students': 'Student',
        'Students': 'Student',
        'Teachers': 'Teacher',
        'Parents': 'Parent',
        'Accountants': 'Accountant',
        'Other Staff': 'Staff'
      };
      
      const targetRole = roleMap[activeFilter];
      if (targetRole) {
        filtered = filtered.filter(user => user.role === targetRole);
      }
    }

    if (statusFilter !== 'All Status') {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query) ||
        user.classInfo.toLowerCase().includes(query) ||
        user.contact.includes(query)
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, activeFilter, statusFilter, searchQuery]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generateCredentials = (firstName, lastName, role) => {
    const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}`;
    const password = `${role.toLowerCase()}${Math.floor(100000 + Math.random() * 900000)}`;
    return { username, password };
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard:', text);
    });
  };

  const handleAddUserClick = () => {
    setShowUserTypeModal(true);
  };

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
    setFormData(prev => ({ ...prev, role: userType }));
    setShowUserTypeModal(false);
    setShowAddUserModal(true);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    const credentials = generateCredentials(formData.firstName, formData.lastName, formData.role);
    setGeneratedCredentials(credentials);

    const newUser = {
      id: Date.now(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      role: formData.role,
      roleColor: getRoleColor(formData.role),
      classInfo: formData.role === 'Student' ? 'Class 10A' : formData.role === 'Teacher' ? 'Mathematics' : formData.role === 'Parent' ? `Parent of ${formData.firstName}` : 'Finance',
      contact: formData.phone,
      altContact: formData.email,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: 'Just now',
      avatar: `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`,
      isNew: true,
      username: credentials.username,
      password: credentials.password
    };

    setUsers(prev => [newUser, ...prev]);

    const existingCredentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');
    const usernameKey = credentials.username.toLowerCase();
    
    existingCredentials[usernameKey] = {
      password: credentials.password,
      role: getRoleForLogin(formData.role),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      profileImage: getProfileImageForRole(formData.role)
    };
    
    localStorage.setItem('userCredentials', JSON.stringify(existingCredentials));

    setShowAddUserModal(false);
    setShowSuccessModal(true);
  };

  const getRoleForLogin = (role) => {
    const roleMap = {
      'Student': 'student',
      'Teacher': 'teacher',
      'Parent': 'parent',
      'Accountant': 'tuition_owner'
    };
    return roleMap[role] || 'student';
  };

  const getProfileImageForRole = (role) => {
    const imageMap = {
      'Student': 'student-profile.png',
      'Teacher': 'teacher-profile.png',
      'Parent': 'parent-profile.png',
      'Accountant': 'profile.png'
    };
    return imageMap[role] || 'profile.png';
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: '',
      dateOfBirth: '',
      emergencyContact: '',
      address: ''
    });
    setSelectedUserType('');
    setGeneratedCredentials({});
  };

  const handleModalClose = () => {
    setShowUserTypeModal(false);
    setShowAddUserModal(false);
    setShowSuccessModal(false);
    resetForm();
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    resetForm();
  };

  const getRoleColor = (role) => {
    const roleColors = {
      'Student': 'bg-blue-100 text-blue-800 border-blue-200',
      'Teacher': 'bg-green-100 text-green-800 border-green-200',
      'Parent': 'bg-orange-100 text-orange-800 border-orange-200',
      'Accountant': 'bg-purple-100 text-purple-800 border-purple-200',
      'Staff': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return roleColors[role] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600' },
      purple: { iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
      pink: { iconBg: 'bg-pink-100', iconColor: 'text-pink-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const calculateStats = () => {
    const studentCount = users.filter(user => user.role === 'Student').length;
    const teacherCount = users.filter(user => user.role === 'Teacher').length;
    const parentCount = users.filter(user => user.role === 'Parent').length;
    const accountantCount = users.filter(user => user.role === 'Accountant').length;

    return [
      {
        title: 'Total Students',
        value: studentCount.toString(),
        icon: Users,
        color: 'blue'
      },
      {
        title: 'Teachers',
        value: teacherCount.toString(),
        icon: GraduationCap,
        color: 'green'
      },
      {
        title: 'Parents',
        value: parentCount.toString(),
        icon: UserCheck,
        color: 'purple'
      },
      {
        title: 'Staff',
        value: accountantCount.toString(),
        icon: Shield,
        color: 'pink'
      }
    ];
  };

  const roleStats = calculateStats();

  const generateFilterTabs = () => {
    const studentCount = users.filter(user => user.role === 'Student').length;
    const teacherCount = users.filter(user => user.role === 'Teacher').length;
    const parentCount = users.filter(user => user.role === 'Parent').length;
    const accountantCount = users.filter(user => user.role === 'Accountant').length;

    return [
      'All',
      `Students (${studentCount})`,
      `Teachers (${teacherCount})`,
      `Parents (${parentCount})`,
      `Accountants (${accountantCount})`
    ];
  };

  const filterTabs = generateFilterTabs();

  const handleViewUser = () => {
    navigate('/ViewUser');
  };

  const handleChatClick = (user) => {
    const conversation = {
      id: user.id + 1000,
      name: user.name,
      role: user.role,
      lastMessage: `Start a conversation with ${user.name}`,
      time: 'Just now',
      unread: false,
      avatar: user.avatar,
      online: user.status === 'Active',
      badge: user.role,
      type: user.role.toLowerCase()
    };

    navigate('/messages', { 
      state: { 
        selectedUser: conversation 
      } 
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Header
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />

        <Sidebar isExpanded={isSidebarExpanded} activeItem="user-roles" />

        <main className={`transition-all duration-300 ${
          isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
          <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">

            <div className="text-left mb-4 md:mb-6 lg:mb-8">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                User Role Management
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage all users and their roles in your tuition center
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6 lg:mb-8">
              <div className="flex items-center gap-2 md:gap-3">
                <button className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 border rounded-lg text-xs md:text-sm font-medium transition-colors hover:bg-black ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  <Download size={14} className="md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Export Data</span>
                </button>

                <button
                  className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-700 transition-colors"
                  onClick={handleAddUserClick}
                >
                  <Plus size={14} className="md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Add User</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
              {roleStats.map((stat, index) => {
                const Icon = stat.icon;
                const colorClasses = getColorClasses(stat.color);
                return (
                  <div
                    key={index}
                    className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
                      isDarkMode 
                        ? 'bg-slate-800 border-slate-700' 
                        : 'bg-white border-gray-300 shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <div className="text-left">
                        <h3 className={`text-xs md:text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stat.title}
                        </h3>
                        <p className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${colorClasses.iconBg}`}>
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${colorClasses.iconColor}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>

              <div className="mb-4 md:mb-6">
                <div className={`text-xs md:text-sm font-medium mb-2 md:mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Filter by Role:</div>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {filterTabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFilter(tab.split(' (')[0])}
                      className={`px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${activeFilter === tab.split(' (')[0]
                          ? 'bg-blue-600 text-white'
                          : isDarkMode
                            ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex-1 w-full relative">
                  <Search className=" md:w-5 md:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border text-xs md:text-sm ${
                      isDarkMode
                        ? 'bg-slate-700 border-slate-600 text-gray-300 placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-700 placeholder-gray-500'
                    }`}
                  />
                </div>

                <div className="flex items-center gap-1 md:gap-2 w-full sm:w-auto">
                  <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={`px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm border ${
                      isDarkMode
                        ? 'bg-slate-700 border-slate-600 text-gray-300'
                        : 'bg-white border-gray-300 text-gray-700'
                    }`}
                  >
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                      <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        USER DETAILS
                      </th>
                      <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        ROLE & CLASS
                      </th>
                      <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        CONTACT INFO
                      </th>
                      <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        STATUS
                      </th>
                      <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        LAST ACTIVE
                      </th>
                      <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.length > 0 ? (
                      currentData.map((user) => (
                        <tr key={user.id} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                          <td className="py-3 md:py-4 px-2 md:px-4">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-xs md:text-sm font-medium">{user.avatar}</span>
                              </div>
                              <div>
                                <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                  {user.name}
                                  {user.isNew && (
                                    <span className="ml-1 md:ml-2 px-1 md:px-2 py-0.5 md:py-1 bg-green-100 text-green-800 text-xs rounded-full">New</span>
                                  )}
                                </div>
                                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 md:py-4 px-2 md:px-4">
                            <div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${user.roleColor}`}>
                                {user.role}
                              </span>
                              <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {user.classInfo}
                              </div>
                            </div>
                          </td>

                          <td className="py-3 md:py-4 px-2 md:px-4">
                            <div>
                              <div className={`text-xs md:text-sm flex items-center gap-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <Phone size={10} className="md:w-3 md:h-3" />
                                {user.contact}
                              </div>
                              <div className={`text-xs flex items-center gap-1 mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <Mail size={10} className="md:w-3 md:h-3" />
                                {user.altContact}
                              </div>
                            </div>
                          </td>

                          <td className="py-3 md:py-4 px-2 md:px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.statusColor}`}>
                              {user.status}
                            </span>
                          </td>

                          <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {user.lastActive}
                          </td>

                          <td className="py-3 md:py-4 px-2 md:px-4">
                            <div className="flex items-center gap-1 md:gap-2">
                              <button type="button" onClick={handleViewUser} className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                                <Eye size={12} className="md:w-3 md:h-3" />
                              </button>
                              <button className="w-6 h-6 md:w-8 md:h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
                                <Edit size={12} className="md:w-3 md:h-3" />
                              </button>
                              <button 
                                onClick={() => handleChatClick(user)}
                                className="w-6 h-6 md:w-8 md:h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                              >
                                <MessageSquare size={12} className="md:w-3 md:h-3" />
                              </button>
                              <button className="w-6 h-6 md:w-8 md:h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors">
                                <Trash2 size={12} className="md:w-3 md:h-3" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-6 md:py-8 text-center">
                          <div className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            No users found matching your criteria
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {filteredUsers.length > 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 mt-4 md:mt-6">
                  <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Showing {startIndex + 1} to {Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length} results
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                        currentPage === 1
                          ? isDarkMode 
                            ? 'bg-slate-800 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : isDarkMode 
                            ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                            currentPage === pageNum
                              ? 'bg-blue-600 text-white'
                              : isDarkMode 
                                ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    
                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                        currentPage === totalPages
                          ? isDarkMode 
                            ? 'bg-slate-800 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : isDarkMode 
                            ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>

            {showUserTypeModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
                <div className={`w-full max-w-2xl rounded-xl md:rounded-2xl ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                } shadow-2xl overflow-hidden`}>
                  
                  <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
                    isDarkMode ? 'border-slate-700' : 'border-gray-300'
                  }`}>
                    <div>
                      <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Select User Type
                      </h2>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Choose the type of user you want to add
                      </p>
                    </div>
                    <button
                      onClick={handleModalClose}
                      className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
                        isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
                      }`}
                    >
                      <X size={20} className="md:w-6 md:h-6" />
                    </button>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <button
                        onClick={() => handleUserTypeSelect('Student')}
                        className={`p-3 md:p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 hover:border-green-500 hover:bg-slate-600'
                            : 'bg-gray-50 border-gray-200 hover:border-green-300 hover:bg-green-50'
                          }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                              ? 'bg-green-500/20 group-hover:bg-green-500/30'
                              : 'bg-green-100 group-hover:bg-green-200'
                            }`}>
                            <Users className={`w-4 h-4 md:w-5 md:h-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'
                              }`} />
                          </div>
                          <div>
                            <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                              Student
                            </h3>
                            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                              Add new students to your tuition classes
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleUserTypeSelect('Teacher')}
                        className={`p-3 md:p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 hover:border-purple-500 hover:bg-slate-600'
                            : 'bg-gray-50 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                          }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                              ? 'bg-purple-500/20 group-hover:bg-purple-500/30'
                              : 'bg-purple-100 group-hover:bg-purple-200'
                            }`}>
                            <GraduationCap className={`w-4 h-4 md:w-5 md:h-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'
                              }`} />
                          </div>
                          <div>
                            <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                              Teacher
                            </h3>
                            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                              Add qualified teachers to your staff
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleUserTypeSelect('Parent')}
                        className={`p-3 md:p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 hover:border-orange-500 hover:bg-slate-600'
                            : 'bg-gray-50 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                          }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                              ? 'bg-orange-500/20 group-hover:bg-orange-500/30'
                              : 'bg-orange-100 group-hover:bg-orange-200'
                            }`}>
                            <UserCheck className={`w-4 h-4 md:w-5 md:h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'
                              }`} />
                          </div>
                          <div>
                            <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                              Parent
                            </h3>
                            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                              Add parents/guardians of students
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleUserTypeSelect('Accountant')}
                        className={`p-3 md:p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 hover:border-blue-500 hover:bg-slate-600'
                            : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                              ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                              : 'bg-blue-100 group-hover:bg-blue-200'
                            }`}>
                            <FileText className={`w-4 h-4 md:w-5 md:h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                              }`} />
                          </div>
                          <div>
                            <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                              Accountant
                            </h3>
                            <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                              Add accounting staff members
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleModalClose}
                        className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-colors ${isDarkMode
                            ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showAddUserModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
                <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl md:rounded-2xl ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                } shadow-2xl`}>
                  
                  <div className={`px-4 py-3 md:px-6 md:py-4 border-b flex items-center justify-between ${
                    isDarkMode ? 'border-slate-700' : 'border-gray-300'
                  }`}>
                    <div className="flex items-center gap-2 md:gap-4">
                      <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Add New {selectedUserType}
                      </h2>
                      <div className="flex gap-1 md:gap-2">
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-medium ${isDarkMode
                            ? 'bg-blue-500 text-white'
                            : 'bg-blue-600 text-white'
                          }`}>
                          1
                        </div>
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-medium ${isDarkMode
                            ? 'bg-slate-600 text-gray-300 border border-slate-500'
                            : 'bg-blue-100 text-blue-600'
                          }`}>
                          2
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleModalClose}
                      className={`p-1 md:p-2 rounded-lg hover:bg-gray-100 ${
                        isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'
                      }`}
                    >
                      <X size={20} className="md:w-6 md:h-6" />
                    </button>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="mb-4 md:mb-6">
                      <h3 className={`text-base md:text-lg font-medium mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Basic Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                        <div>
                          <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleFormChange('firstName', e.target.value)}
                            className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                              }`}
                            placeholder="Enter first name"
                          />
                        </div>
                        <div>
                          <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleFormChange('lastName', e.target.value)}
                            className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                              }`}
                            placeholder="Enter last name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                        <div>
                          <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleFormChange('email', e.target.value)}
                            className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                              }`}
                            placeholder="Enter email address"
                          />
                        </div>
                        <div>
                          <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Phone *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleFormChange('phone', e.target.value)}
                            className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                              }`}
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      <div className="mb-3 md:mb-4">
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Role *
                        </label>
                        <div className="relative">
                          <div className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm ${isDarkMode
                              ? 'bg-blue-500/20 border-blue-500/50'
                              : 'bg-blue-50 border-blue-200'
                            }`}>
                            <div className="flex items-center gap-1 md:gap-2">
                              <Users className={`w-3 h-3 md:w-4 md:h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                                }`} />
                              <span className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-600'
                                }`}>
                                {selectedUserType}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                        <div>
                          <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleFormChange('dateOfBirth', e.target.value)}
                            className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                                ? 'bg-slate-700 border-slate-600 text-white focus:bg-slate-600'
                                : 'bg-white border-gray-300 text-gray-900'
                              }`}
                          />
                        </div>
                        <div>
                          <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Emergency Contact
                          </label>
                          <input
                            type="tel"
                            value={formData.emergencyContact}
                            onChange={(e) => handleFormChange('emergencyContact', e.target.value)}
                            className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                                ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                              }`}
                            placeholder="Emergency contact number"
                          />
                        </div>
                      </div>

                      <div className="mb-4 md:mb-6">
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Address
                        </label>
                        <textarea
                          value={formData.address}
                          onChange={(e) => handleFormChange('address', e.target.value)}
                          rows="3"
                          className={`w-full px-2 py-1 md:px-3 md:py-2 rounded-lg border text-xs md:text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none ${isDarkMode
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            }`}
                          placeholder="Enter complete address"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 md:gap-3">
                      <button
                        onClick={handleModalClose}
                        className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-colors ${isDarkMode
                            ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleFormSubmit}
                        className={`px-3 py-2 md:px-6 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-colors ${isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                      >
                        Create User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showSuccessModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
                <div className={`w-full max-w-md rounded-xl md:rounded-2xl ${
                  isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                } shadow-2xl overflow-hidden`}>
                  
                  <div className="p-4 md:p-6 text-center mb-4 md:mb-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 ${isDarkMode
                        ? 'bg-green-500/20'
                        : 'bg-green-100'
                      }`}>
                      <CheckCircle className={`w-6 h-6 md:w-8 md:h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'
                        }`} />
                    </div>
                    <h2 className={`text-lg md:text-xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      User Created Successfully!
                    </h2>
                    <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      New {selectedUserType.toLowerCase()} has been added to your system
                    </p>
                  </div>

                  <div className={`rounded-lg p-3 md:p-4 mb-4 md:mb-6 mx-3 md:mx-4 ${
                    isDarkMode
                      ? 'bg-slate-700 border border-slate-600'
                      : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <h3 className={`text-xs md:text-sm font-medium mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Login Credentials
                    </h3>
                    
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Username
                        </label>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className={`flex-1 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-mono ${isDarkMode
                              ? 'bg-slate-600 text-white'
                              : 'bg-white text-gray-900 border'
                            }`}>
                            {generatedCredentials.username}
                          </div>
                          <button
                            onClick={() => copyToClipboard(generatedCredentials.username)}
                            className={`p-1 md:p-2 rounded-lg transition-colors ${isDarkMode
                                ? 'bg-slate-600 text-gray-300 hover:bg-slate-500'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                              }`}
                            title="Copy username"
                          >
                            <Copy size={14} className="md:w-4 md:h-4" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className={`block text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Password
                        </label>
                        <div className="flex items-center gap-1 md:gap-2">
                          <div className={`flex-1 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-mono ${isDarkMode
                              ? 'bg-slate-600 text-white'
                              : 'bg-white text-gray-900 border'
                            }`}>
                            {generatedCredentials.password}
                          </div>
                          <button
                            onClick={() => copyToClipboard(generatedCredentials.password)}
                            className={`p-1 md:p-2 rounded-lg transition-colors ${isDarkMode
                                ? 'bg-slate-600 text-gray-300 hover:bg-slate-500'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                              }`}
                            title="Copy password"
                          >
                            <Copy size={14} className="md:w-4 md:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className={`mt-3 md:mt-4 p-2 md:p-3 rounded-lg ${isDarkMode
                        ? 'bg-blue-500/20 border border-blue-500/30'
                        : 'bg-blue-50 border border-blue-200'
                      }`}>
                      <p className={`text-xs ${isDarkMode ? 'text-blue-300' : 'text-blue-700'
                        }`}>
                        Please save these credentials securely. The user can now login using these details.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-3 p-3 md:p-4">
                    <button
                      onClick={handleSuccessClose}
                      className={`flex-1 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-colors ${isDarkMode
                          ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        copyToClipboard(`Username: ${generatedCredentials.username}\nPassword: ${generatedCredentials.password}`);
                      }}
                      className={`flex-1 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-colors ${isDarkMode
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                    >
                      Copy All
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer isSidebarExpanded={isSidebarExpanded} />
      </div>
    </>
  );
};

export default UserRoleManagement;