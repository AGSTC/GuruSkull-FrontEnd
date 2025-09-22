import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Users, 
  UserCheck, 
  UserX,
  BarChart3,
  Calendar,
  Search,
  Filter,
  Download,
  RefreshCw,
  Plus,
  Phone,
  MessageSquare,
  Trash2,
  Edit,
  Eye
} from 'lucide-react';

const AttendanceManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeView, setActiveView] = useState('students'); // 'students' or 'teachers'

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Student stats
  const studentStats = [
    {
      title: 'Total Students',
      value: '248',
      subtitle: '11 new today',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Present Today',
      value: '186',
      subtitle: '75% attendance',
      icon: UserCheck,
      color: 'green'
    },
    {
      title: 'Absent Today',
      value: '62',
      subtitle: '25% absence',
      icon: UserX,
      color: 'red'
    },
    {
      title: 'Attendance Rate',
      value: '75%',
      subtitle: '+5% vs yesterday',
      icon: BarChart3,
      color: 'orange'
    }
  ];

  // Teacher stats
  const teacherStats = [
    {
      title: 'Total Teachers',
      value: '24',
      subtitle: '2 new this month',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Present Today',
      value: '22',
      subtitle: '92% attendance',
      icon: UserCheck,
      color: 'green'
    },
    {
      title: 'Absent Today',
      value: '2',
      subtitle: '8% absence',
      icon: UserX,
      color: 'red'
    },
    {
      title: 'Attendance Rate',
      value: '92%',
      subtitle: '+2% vs yesterday',
      icon: BarChart3,
      color: 'orange'
    }
  ];

  const studentData = [
    {
      id: 1,
      name: 'Aarav Sharma',
      rollNo: 'S001',
      class: 'Class 10A',
      status: 'Present',
      checkInTime: '09:15 AM',
      parentName: 'Rajesh Sharma',
      parentContact: '+91 9876543210'
    },
    {
      id: 2,
      name: 'Aarav Sharma',
      rollNo: 'S001',
      class: 'Class 10A',
      status: 'Absent',
      checkInTime: '-',
      parentName: 'Rajesh Sharma',
      parentContact: '+91 9876543210'
    },
    {
      id: 3,
      name: 'Aarav Sharma',
      rollNo: 'S001',
      class: 'Class 10A',
      status: 'Late',
      checkInTime: '09:35 AM',
      parentName: 'Rajesh Sharma',
      parentContact: '+91 9876543210'
    },
    {
      id: 4,
      name: 'Aarav Sharma',
      rollNo: 'S001',
      class: 'Class 10A',
      status: 'Present',
      checkInTime: '09:12 AM',
      parentName: 'Rajesh Sharma',
      parentContact: '+91 9876543210'
    },
    {
      id: 5,
      name: 'Aarav Sharma',
      rollNo: 'S001',
      class: 'Class 10A',
      status: 'Present',
      checkInTime: '09:10 AM',
      parentName: 'Rajesh Sharma',
      parentContact: '+91 9876543210'
    },
    {
      id: 6,
      name: 'Aarav Sharma',
      rollNo: 'S001',
      class: 'Class 10A',
      status: 'Present',
      checkInTime: '09:15 AM',
      parentName: 'Rajesh Sharma',
      parentContact: '+91 9876543210'
    }
  ];

  const teacherData = [
    {
      id: 1,
      name: 'Aarav Sharma',
      contact: '+91 9876543210',
      subject: 'Mathematics',
      classes: ['Class 9A', 'Class 10A'],
      status: 'Present',
      checkInTime: '08:45 AM',
      checkOutTime: '03:30 PM',
      totalHours: '6.5 Hours'
    },
    {
      id: 2,
      name: 'Aarav Sharma',
      contact: '+91 9876543210',
      subject: 'Mathematics',
      classes: ['Class 9A', 'Class 10A'],
      status: 'Absent',
      checkInTime: '-',
      checkOutTime: '-',
      totalHours: '0 Hours'
    },
    {
      id: 3,
      name: 'Aarav Sharma',
      contact: '+91 9876543210',
      subject: 'Mathematics',
      classes: ['Class 9A', 'Class 10A'],
      status: 'Present',
      checkInTime: '08:45 AM',
      checkOutTime: '03:30 PM',
      totalHours: '6.5 Hours'
    },
    {
      id: 4,
      name: 'Aarav Sharma',
      contact: '+91 9876543210',
      subject: 'Mathematics',
      classes: ['Class 9A', 'Class 10A'],
      status: 'Present',
      checkInTime: '08:45 AM',
      checkOutTime: '03:30 PM',
      totalHours: '6.5 Hours'
    },
    {
      id: 5,
      name: 'Aarav Sharma',
      contact: '+91 9876543210',
      subject: 'Mathematics',
      classes: ['Class 9A', 'Class 10A'],
      status: 'Present',
      checkInTime: '08:45 AM',
      checkOutTime: '03:30 PM',
      totalHours: '6.5 Hours'
    },
    {
      id: 6,
      name: 'Aarav Sharma',
      contact: '+91 9876543210',
      subject: 'Mathematics',
      classes: ['Class 9A', 'Class 10A'],
      status: 'Present',
      checkInTime: '08:45 AM',
      checkOutTime: '03:30 PM',
      totalHours: '6.5 Hours'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', textColor: 'text-blue-600' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600', textColor: 'text-green-600' },
      red: { iconBg: 'bg-red-100', iconColor: 'text-red-600', textColor: 'text-red-600' },
      orange: { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', textColor: 'text-orange-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      'Present': 'bg-green-100 text-green-800 border-green-200',
      'Absent': 'bg-red-100 text-red-800 border-red-200',
      'Late': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return statusMap[status] || statusMap.Present;
  };

  const currentStats = activeView === 'students' ? studentStats : teacherStats;
  const currentData = activeView === 'students' ? studentData : teacherData;

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="attendance" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
            
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Attendance Management
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Comprehensive insights Attendance management for your tuition center
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = getColorClasses(stat.color);
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    isDarkMode 
                      ? 'bg-slate-800 border-slate-700' 
                      : 'bg-white border-gray-300 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-left">
                      <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                  
                  <p className={`text-sm ${colorClasses.textColor}`}>
                    {stat.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Controls Section */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            
            {/* Toggle Buttons and Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveView('students')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeView === 'students'
                      ? 'bg-blue-600 text-white'
                      : isDarkMode 
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Users size={16} />
                  Students
                </button>
                
                <button
                  onClick={() => setActiveView('teachers')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeView === 'teachers'
                      ? 'bg-blue-600 text-white'
                      : isDarkMode 
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <UserCheck size={16} />
                  Teachers
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white">
                  Daily View
                </button>

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-600 text-white">
                  Monthly View
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>26-09-2025</span>
                </div>

                <select className={`px-3 py-2 rounded-lg text-sm border ${
                  isDarkMode 
                    ? 'bg-slate-700 border-slate-600 text-gray-300'
                    : 'bg-white border-gray-300 text-gray-700'
                }`}>
                  <option>All Classes</option>
                  <option>Class 9A</option>
                  <option>Class 10A</option>
                </select>

                {activeView === 'students' && (
                  <select className={`px-3 py-2 rounded-lg text-sm border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-gray-300'
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}>
                    <option>All Subjects</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                  </select>
                )}

                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>

            {/* Table Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {activeView === 'students' ? 'Student Attendance' : 'Teacher Attendance'}
              </h2>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  <Plus size={16} />
                  {activeView === 'students' ? 'Add Students' : 'Add Students'}
                </button>
                
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-colors hover:bg-gray-50">
                  <RefreshCw size={16} />
                  Refresh
                </button>
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
                    {activeView === 'students' ? (
                      <>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Student
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Roll No
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Class
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Status
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Check-in Time
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Parent Contact
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Actions
                        </th>
                      </>
                    ) : (
                      <>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Teacher
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Subject
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Classes
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Status
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Check-in Time
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Check-out Time
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Total Hours
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Actions
                        </th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr key={item.id} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                      <td className="py-4 px-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      {activeView === 'students' ? (
                        <>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm font-medium">AS</span>
                              </div>
                              <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                {item.name}
                              </span>
                            </div>
                          </td>
                          <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.rollNo}
                          </td>
                          <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.class}
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                              {item.status}
                            </span>
                          </td>
                          <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.checkInTime}
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <div className={`font-medium text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                {item.parentName}
                              </div>
                              <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {item.parentContact}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                                <Eye size={14} />
                              </button>
                              <button className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                                <Phone size={14} />
                              </button>
                              <button className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm font-medium">AS</span>
                              </div>
                              <div>
                                <div className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                  {item.name}
                                </div>
                                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {item.contact}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.subject}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex flex-wrap gap-1">
                              {item.classes.map((cls, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-lg"
                                >
                                  {cls}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                              {item.status}
                            </span>
                          </td>
                          <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.checkInTime}
                          </td>
                          <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.checkOutTime}
                          </td>
                          <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.totalHours}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                                <Eye size={14} />
                              </button>
                              <button className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                                <Phone size={14} />
                              </button>
                              <button className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
                                <MessageSquare size={14} />
                              </button>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default AttendanceManagement;