import React, { useState } from 'react';
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
  FileText
} from 'lucide-react';

const UserRoleManagement = () => {
  const navigate = useNavigate(); // Add this hook
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Students');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('');
  const [users, setUsers] = useState([]);
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

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
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
    const newUser = {
      id: Date.now(), // Use timestamp for unique ID
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      role: formData.role,
      roleColor: getRoleColor(formData.role),
      classInfo: formData.role === 'Student' ? 'Class 10A' : formData.role === 'Teacher' ? 'Mathematics' : '',
      contact: formData.phone,
      altContact: formData.email,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: 'Just now',
      avatar: `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`,
      isNew: true
    };

    setUsers(prev => [newUser, ...prev]);
    setShowAddUserModal(false);
    resetForm();
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
  };

  const handleModalClose = () => {
    setShowUserTypeModal(false);
    setShowAddUserModal(false);
    resetForm();
  };

  const getRoleColor = (role) => {
    const roleColors = {
      'Student': 'bg-blue-100 text-blue-800 border-blue-200',
      'Teacher': 'bg-green-100 text-green-800 border-green-200',
      'Parent': 'bg-orange-100 text-orange-800 border-orange-200',
      'Accountant': 'bg-purple-100 text-purple-800 border-purple-200'
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

  const roleStats = [
    {
      title: 'Total Students',
      value: '248',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Teachers',
      value: '18',
      icon: GraduationCap,
      color: 'green'
    },
    {
      title: 'Parent',
      value: '198',
      icon: UserCheck,
      color: 'purple'
    },
    {
      title: 'Staff',
      value: '6',
      icon: Shield,
      color: 'pink'
    }
  ];

  const filterTabs = [
    'All Students',
    'Students (2)',
    'Teachers (18)',
    'Parent (198)',
    'Accountant (2)',
    'Other Staff (3)'
  ];

  const userData = [
    {
      id: 1,
      name: 'Arjun Patel',
      email: 'arjun.patel@email.com',
      role: 'Student',
      roleColor: 'bg-blue-100 text-blue-800 border-blue-200',
      classInfo: 'Class 10A',
      contact: '+91 9876543210',
      altContact: 'arjun.patel@email.com',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: '2 hours ago',
      avatar: 'AP'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      role: 'Student',
      roleColor: 'bg-blue-100 text-blue-800 border-blue-200',
      classInfo: 'Class 10A',
      contact: '+91 9876543211',
      altContact: 'priya.sharma@email.com',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: '3 hours ago',
      avatar: 'PS'
    },
    {
      id: 3,
      name: 'Ravi Patel',
      email: 'ravi.patel@email.com',
      role: 'Accountant',
      roleColor: 'bg-purple-100 text-purple-800 border-purple-200',
      classInfo: 'Finance',
      contact: '+91 9876543212',
      altContact: 'ravi.patel@email.com',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: '2 hours ago',
      avatar: 'RP'
    },
    {
      id: 4,
      name: 'Sneha Desai',
      email: 'sneha.desai@email.com',
      role: 'Student',
      roleColor: 'bg-blue-100 text-blue-800 border-blue-200',
      classInfo: 'Class 10A',
      contact: '+91 9876543213',
      altContact: 'sneha.desai@email.com',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: '2 hours ago',
      avatar: 'SD'
    },
    {
      id: 5,
      name: 'Mohammed Khan',
      email: 'mohammed.khan@email.com',
      role: 'Student',
      roleColor: 'bg-blue-100 text-blue-800 border-blue-200',
      classInfo: 'Class 10A',
      contact: '+91 9876543214',
      altContact: 'mohammed.khan@email.com',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: '2 hours ago',
      avatar: 'MK'
    },
    {
      id: 6,
      name: 'Kiran Patel',
      email: 'kiran.patel@email.com',
      role: 'Student',
      roleColor: 'bg-blue-100 text-blue-800 border-blue-200',
      classInfo: 'Class 10A',
      contact: '+91 9876543215',
      altContact: 'kiran.patel@email.com',
      status: 'Inactive',
      statusColor: 'bg-red-100 text-red-800',
      lastActive: '1 hours ago',
      avatar: 'KP'
    },
    {
      id: 7,
      name: 'Anjali Singh',
      email: 'anjali.singh@email.com',
      role: 'Teacher',
      roleColor: 'bg-green-100 text-green-800 border-green-200',
      classInfo: 'Mathematics',
      contact: '+91 9876543216',
      altContact: 'anjali.singh@email.com',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: '2 hours ago',
      avatar: 'AS'
    },
    {
      id: 8,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      role: 'Parent',
      roleColor: 'bg-orange-100 text-orange-800 border-orange-200',
      classInfo: '',
      contact: '+91 9876543217',
      altContact: 'rajesh.kumar@email.com',
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800',
      lastActive: '2 hours ago',
      avatar: 'RK'
    }
  ];

  const allUsers = [...users, ...userData];
  const handleViewUser = () => {
    navigate('/ViewUser');
  };


  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="user-roles" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${isSidebarExpanded ? 'ml-64' : 'ml-16'
        }`}>
        <div className="w-full h-full px-6 py-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                User Role Management
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage all users and their roles in your tuition center
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium transition-colors hover:bg-black ${isDarkMode ? 'text-white' : 'text-black'
                }`}>
                <Download size={16} />
                Export Data
              </button>

              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                onClick={handleAddUserClick}
              >
                <Plus size={16} />
                Add User
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {roleStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = getColorClasses(stat.color);
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border ${isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-white border-gray-300 shadow-sm'
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="text-left">
                      <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.title}
                      </h3>
                      <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl ${colorClasses.iconBg}`}>
                      <Icon className={`w-6 h-6 ${colorClasses.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Card */}
          <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>

            {/* Filter Tabs */}
            <div className="mb-6">
              <div className="text-sm font-medium mb-3 text-gray-600">Filter by Role:</div>
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeFilter === tab
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

            {/* Search and Status Filter */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search users..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm ${isDarkMode
                      ? 'bg-slate-700 border-slate-600 text-gray-300 placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-700 placeholder-gray-500'
                    }`}
                />
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className={`px-3 py-2 rounded-lg text-sm border ${isDarkMode
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

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                    <th className="text-left py-3 px-4">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      USER DETAILS
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      ROLE & CLASS
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      CONTACT INFO
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      STATUS
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      LAST ACTIVE
                    </th>
                    <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user, index) => (
                    <tr key={user.id} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                      <td className="py-4 px-4">
                        <input type="checkbox" className="rounded" />
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-medium">{user.avatar}</span>
                          </div>
                          <div>
                            <div className={`font-medium text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                              {user.name}
                            </div>
                            <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${user.roleColor}`}>
                            {user.role}
                          </span>
                          <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {user.classInfo}
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <div>
                          <div className={`text-sm flex items-center gap-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <Phone size={12} />
                            {user.contact}
                          </div>
                          <div className={`text-xs flex items-center gap-1 mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <Mail size={12} />
                            {user.altContact}
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.statusColor}`}>
                          {user.status}
                        </span>
                      </td>

                      <td className={`py-4 px-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {user.lastActive}
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button type="button" onClick={handleViewUser} className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                            <Eye size={14} />
                          </button>
                          <button className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
                            <Edit size={14} />
                          </button>
                          <button className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                            <MessageSquare size={14} />
                          </button>
                          <button className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* User Type Selection Modal */}
          {showUserTypeModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className={`rounded-2xl p-6 w-full max-w-2xl mx-4 shadow-2xl ${isDarkMode
                  ? 'bg-slate-800 border border-slate-700'
                  : 'bg-white border border-gray-200'
                }`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      Select User Type
                    </h2>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      Choose the type of user you want to add
                    </p>
                  </div>
                  <button
                    onClick={handleModalClose}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-slate-700'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Student Option */}
                  <button
                    onClick={() => handleUserTypeSelect('Student')}
                    className={`p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                        ? 'bg-slate-700 border-slate-600 hover:border-green-500 hover:bg-slate-600'
                        : 'bg-gray-50 border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                          ? 'bg-green-500/20 group-hover:bg-green-500/30'
                          : 'bg-green-100 group-hover:bg-green-200'
                        }`}>
                        <Users className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'
                          }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                          Student
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                          Add new students to your tuition classes
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Teacher Option */}
                  <button
                    onClick={() => handleUserTypeSelect('Teacher')}
                    className={`p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                        ? 'bg-slate-700 border-slate-600 hover:border-purple-500 hover:bg-slate-600'
                        : 'bg-gray-50 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                          ? 'bg-purple-500/20 group-hover:bg-purple-500/30'
                          : 'bg-purple-100 group-hover:bg-purple-200'
                        }`}>
                        <GraduationCap className={`w-5 h-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'
                          }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                          Teacher
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                          Add qualified teachers to your staff
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Parent Option */}
                  <button
                    onClick={() => handleUserTypeSelect('Parent')}
                    className={`p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                        ? 'bg-slate-700 border-slate-600 hover:border-orange-500 hover:bg-slate-600'
                        : 'bg-gray-50 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                          ? 'bg-orange-500/20 group-hover:bg-orange-500/30'
                          : 'bg-orange-100 group-hover:bg-orange-200'
                        }`}>
                        <UserCheck className={`w-5 h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'
                          }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                          Parent
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                          Add parents/guardians of students
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Accountant Option */}
                  <button
                    onClick={() => handleUserTypeSelect('Accountant')}
                    className={`p-4 rounded-xl border-2 transition-all text-left group ${isDarkMode
                        ? 'bg-slate-700 border-slate-600 hover:border-blue-500 hover:bg-slate-600'
                        : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isDarkMode
                          ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                          : 'bg-blue-100 group-hover:bg-blue-200'
                        }`}>
                        <FileText className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                          }`} />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                          Accountant
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add New User Form Modal */}
          {showAddUserModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className={`rounded-2xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto shadow-2xl ${isDarkMode
                  ? 'bg-slate-800 border border-slate-700'
                  : 'bg-white border border-gray-200'
                }`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                      Add New {selectedUserType}
                    </h2>
                    <div className="flex gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${isDarkMode
                          ? 'bg-blue-500 text-white'
                          : 'bg-blue-600 text-white'
                        }`}>
                        1
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${isDarkMode
                          ? 'bg-slate-600 text-gray-300 border border-slate-500'
                          : 'bg-blue-100 text-blue-600'
                        }`}>
                        2
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleModalClose}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-slate-700'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    Basic Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleFormChange('firstName', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleFormChange('lastName', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      Role *
                    </label>
                    <div className="relative">
                      <div className={`w-full px-3 py-2 rounded-lg border text-sm ${isDarkMode
                          ? 'bg-blue-500/20 border-blue-500/50'
                          : 'bg-blue-50 border-blue-200'
                        }`}>
                        <div className="flex items-center gap-2">
                          <Users className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                          <span className={`font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-600'
                            }`}>
                            {selectedUserType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleFormChange('dateOfBirth', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 text-white focus:bg-slate-600'
                            : 'bg-white border-gray-300 text-gray-900'
                          }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        Emergency Contact
                      </label>
                      <input
                        type="tel"
                        value={formData.emergencyContact}
                        onChange={(e) => handleFormChange('emergencyContact', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${isDarkMode
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                        placeholder="Emergency contact number"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      Address
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleFormChange('address', e.target.value)}
                      rows="3"
                      className={`w-full px-3 py-2 rounded-lg border text-sm transition-colors focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none ${isDarkMode
                          ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:bg-slate-600'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      placeholder="Enter complete address"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleModalClose}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFormSubmit}
                    className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${isDarkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default UserRoleManagement;