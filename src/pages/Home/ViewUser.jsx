import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Mail,
  Phone,
  Calendar,
  MapPin,
  User,
  Edit,
  Trash2,
  FileText,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  BookOpen,
  Activity
} from 'lucide-react';

const ViewUser = () => {
  const navigate = useNavigate(); // Add this hook
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // User data
  const userData = {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@email.com',
    phone: '+91 98765 43210',
    joinDate: 'Joined 2024-01-15',
    address: '123 MG Road, Bangalore, Karnataka 560001',
    profileImage: '/api/placeholder/120/120',
    status: 'Student',
    isActive: true,
    subjects: ['Mathematics', 'Physics', 'Chemistry']
  };

  // Overview data
  const overviewData = {
    personal: {
      fullName: 'Aarav Sharma',
      dateOfBirth: '2008-05-15',
      class: 'Class 10'
    },
    contact: {
      email: 'aarav.sharma@email.com',
      phone: '+91 98765 43210',
      emergencyContact: '+91 98765 43211'
    },
    parent: {
      name: 'Rajesh Sharma',
      email: 'rajesh.sharma@email.com',
      phone: '+91 98765 43211'
    }
  };

  // Academic data
  const academicData = {
    attendance: {
      present: 85,
      absent: 5,
      totalDays: 90,
      percentage: '94.4%'
    },
    subjects: [
      { name: 'Mathematics', marks: '92/100', grade: 'A' },
      { name: 'Physics', marks: '88/100', grade: 'A-' },
      { name: 'Chemistry', marks: '85/100', grade: 'B+' }
    ]
  };

  // Fees data
  const feesData = {
    monthlyFee: '₹5,000',
    pendingAmount: '₹0',
    lastPayment: '2024-02-01',
    paymentHistory: [
      { date: '2024-02-01', amount: '₹5,000', method: 'UPI', status: 'PAID' },
      { date: '2024-01-01', amount: '₹5,000', method: 'Cash', status: 'PAID' },
      { date: '2023-12-01', amount: '₹5,000', method: 'Bank Transfer', status: 'PAID' }
    ]
  };

  // Activity data
  const activityData = [
    {
      title: 'Submitted Mathematics Assignment',
      date: '2024-02-15',
      icon: FileText,
      color: 'text-blue-500'
    },
    {
      title: 'Attended Physics Class',
      date: '2024-02-14',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      title: 'Monthly Fee Payment Received',
      date: '2024-02-13',
      icon: DollarSign,
      color: 'text-purple-500'
    },
    {
      title: 'Chemistry Test - 85 marks',
      date: '2024-02-12',
      icon: Award,
      color: 'text-orange-500'
    }
  ];

  const tabs = ['Overview', 'Academic', 'Fees', 'Activity'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Personal Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Full Name
                    </p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {overviewData.personal.fullName}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Date of Birth
                    </p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {overviewData.personal.dateOfBirth}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Class
                    </p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {overviewData.personal.class}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Email
                    </p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {overviewData.contact.email}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Phone
                    </p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {overviewData.contact.phone}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Emergency Contact
                    </p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {overviewData.contact.emergencyContact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Parent Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Parent Name
                  </p>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {overviewData.parent.name}
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Parent Email
                  </p>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {overviewData.parent.email}
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Parent Phone
                  </p>
                  <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {overviewData.parent.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Academic':
        return (
          <div className="space-y-6">
            {/* Attendance Overview */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Attendance Overview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-1">
                    {academicData.attendance.present}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Present
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 mb-1">
                    {academicData.attendance.absent}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Absent
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">
                    {academicData.attendance.totalDays}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Days
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">
                    {academicData.attendance.percentage}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Percentage
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Performance */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject Performance
              </h3>
              <div className="space-y-4">
                {academicData.subjects.map((subject, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.name}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Latest marks: {subject.marks}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      subject.grade === 'A' ? 'bg-green-100 text-green-800' :
                      subject.grade === 'A-' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {subject.grade}
                      <span className={`ml-1 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Grade
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Fees':
        return (
          <div className="space-y-6">
            {/* Fee Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-blue-500" />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Monthly Fee
                  </span>
                </div>
                <div className="text-xl font-bold text-blue-500">
                  {feesData.monthlyFee}
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pending Amount
                  </span>
                </div>
                <div className="text-xl font-bold text-green-500">
                  {feesData.pendingAmount}
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Last Payment
                  </span>
                </div>
                <div className="text-xl font-bold text-purple-500">
                  {feesData.lastPayment}
                </div>
              </div>
            </div>

            {/* Payment History */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Payment History
              </h3>
              <div className="space-y-3">
                {feesData.paymentHistory.map((payment, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {payment.amount}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {payment.date} • {payment.method}
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                      {payment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Activity':
        return (
          <div className="space-y-6">
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Recent Activity
            </h3>
            <div className="space-y-4">
              {activityData.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                      <Icon className={`w-5 h-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.title}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {activity.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  const handleEditUser = () => {
    navigate('/EditUser');
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="user-roles" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                User Details
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Complete Profile Information
              </p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={handleEditUser} className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${
                isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Edit size={16} />
                Edit User
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2 hover:bg-red-600">
                <Trash2 size={16} />
                Delete User
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className={`p-6 rounded-2xl border text-center ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    AS
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {userData.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      userData.status === 'Student' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {userData.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      userData.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {userData.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <Mail className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {userData.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {userData.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {userData.joinDate}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className={`w-4 h-4 mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {userData.address}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {userData.subjects.map((subject, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabbed Content */}
            <div className="lg:col-span-2">
              <div className={`rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
                
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-sm font-medium transition-colors ${
                        activeTab === tab
                          ? 'text-blue-500 border-b-2 border-blue-500'
                          : isDarkMode 
                            ? 'text-gray-400 hover:text-gray-300' 
                            : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {renderTabContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default ViewUser;