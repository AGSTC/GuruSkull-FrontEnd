import React, { useState, useEffect } from 'react';
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
  const [viewType, setViewType] = useState('daily'); // 'daily' or 'monthly'
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [filteredData, setFilteredData] = useState([]);
  const [stats, setStats] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Mock data for different dates and view types
  const generateMockData = () => {
    const baseStudentData = [
      {
        id: 1,
        name: 'Aarav Sharma',
        rollNo: 'S001',
        class: 'Class 10A',
        subject: 'Mathematics',
        status: 'Present',
        checkInTime: '09:15 AM',
        parentName: 'Rajesh Sharma',
        parentContact: '+91 9876543210',
        date: selectedDate
      },
      {
        id: 2,
        name: 'Priya Patel',
        rollNo: 'S002',
        class: 'Class 9A',
        subject: 'Science',
        status: 'Absent',
        checkInTime: '-',
        parentName: 'Sanjay Patel',
        parentContact: '+91 9876543211',
        date: selectedDate
      },
      {
        id: 3,
        name: 'Rohan Kumar',
        rollNo: 'S003',
        class: 'Class 10A',
        subject: 'Mathematics',
        status: 'Late',
        checkInTime: '09:35 AM',
        parentName: 'Anita Kumar',
        parentContact: '+91 9876543212',
        date: selectedDate
      },
      {
        id: 4,
        name: 'Sneha Gupta',
        rollNo: 'S004',
        class: 'Class 9B',
        subject: 'Science',
        status: 'Present',
        checkInTime: '09:12 AM',
        parentName: 'Vikram Gupta',
        parentContact: '+91 9876543213',
        date: selectedDate
      },
      {
        id: 5,
        name: 'Karan Singh',
        rollNo: 'S005',
        class: 'Class 10A',
        subject: 'Mathematics',
        status: 'Present',
        checkInTime: '09:10 AM',
        parentName: 'Neha Singh',
        parentContact: '+91 9876543214',
        date: selectedDate
      }
    ];

    const baseTeacherData = [
      {
        id: 1,
        name: 'Dr. Sharma',
        contact: '+91 9876543210',
        subject: 'Mathematics',
        classes: ['Class 9A', 'Class 10A'],
        status: 'Present',
        checkInTime: '08:45 AM',
        checkOutTime: '03:30 PM',
        totalHours: '6.5 Hours',
        date: selectedDate
      },
      {
        id: 2,
        name: 'Prof. Patel',
        contact: '+91 9876543211',
        subject: 'Science',
        classes: ['Class 9B', 'Class 10B'],
        status: 'Absent',
        checkInTime: '-',
        checkOutTime: '-',
        totalHours: '0 Hours',
        date: selectedDate
      },
      {
        id: 3,
        name: 'Ms. Verma',
        contact: '+91 9876543212',
        subject: 'English',
        classes: ['Class 9A', 'Class 10A'],
        status: 'Present',
        checkInTime: '08:45 AM',
        checkOutTime: '03:30 PM',
        totalHours: '6.5 Hours',
        date: selectedDate
      },
      {
        id: 4,
        name: 'Mr. Joshi',
        contact: '+91 9876543213',
        subject: 'Mathematics',
        classes: ['Class 9B'],
        status: 'Present',
        checkInTime: '08:45 AM',
        checkOutTime: '03:30 PM',
        totalHours: '6.5 Hours',
        date: selectedDate
      }
    ];

    // For monthly view, generate data for multiple dates
    if (viewType === 'monthly') {
      const monthlyData = [];
      for (let i = 0; i < 20; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        // Generate student data for monthly view
        baseStudentData.forEach(student => {
          monthlyData.push({
            ...student,
            id: student.id + i * 10,
            date: dateStr,
            status: i % 5 === 0 ? 'Absent' : i % 7 === 0 ? 'Late' : 'Present',
            checkInTime: i % 5 === 0 ? '-' : i % 7 === 0 ? '09:35 AM' : '09:15 AM'
          });
        });

        // Generate teacher data for monthly view
        baseTeacherData.forEach(teacher => {
          monthlyData.push({
            ...teacher,
            id: teacher.id + i * 100, // Use different multiplier to avoid ID conflicts
            date: dateStr,
            status: i % 10 === 0 ? 'Absent' : 'Present',
            checkInTime: i % 10 === 0 ? '-' : '08:45 AM',
            checkOutTime: i % 10 === 0 ? '-' : '03:30 PM',
            totalHours: i % 10 === 0 ? '0 Hours' : '6.5 Hours'
          });
        });
      }
      
      // Return filtered data based on activeView
      return activeView === 'students' 
        ? monthlyData.filter(d => d.rollNo && typeof d.rollNo === 'string') 
        : monthlyData.filter(d => d.classes && Array.isArray(d.classes));
    }

    return activeView === 'students' ? baseStudentData : baseTeacherData;
  };

  // Calculate stats based on filtered data
  const calculateStats = () => {
    const data = generateMockData();
    
    if (activeView === 'students') {
      const studentData = data.filter(item => item.rollNo && typeof item.rollNo === 'string');
      const total = studentData.length;
      const present = studentData.filter(item => item.status === 'Present').length;
      const absent = studentData.filter(item => item.status === 'Absent').length;
      const late = studentData.filter(item => item.status === 'Late').length;
      const attendanceRate = total > 0 ? Math.round((present / total) * 100) : 0;

      return [
        {
          title: 'Total Students',
          value: total.toString(),
          subtitle: viewType === 'daily' ? 'All students' : 'Monthly overview',
          icon: Users,
          color: 'blue'
        },
        {
          title: 'Present Today',
          value: present.toString(),
          subtitle: `${attendanceRate}% attendance`,
          icon: UserCheck,
          color: 'green'
        },
        {
          title: 'Absent Today',
          value: absent.toString(),
          subtitle: `${Math.round((absent / total) * 100)}% absence`,
          icon: UserX,
          color: 'red'
        },
        {
          title: 'Attendance Rate',
          value: `${attendanceRate}%`,
          subtitle: viewType === 'daily' ? 'Daily rate' : 'Monthly average',
          icon: BarChart3,
          color: 'orange'
        }
      ];
    } else {
      const teacherData = data.filter(item => item.classes && Array.isArray(item.classes));
      const total = teacherData.length;
      const present = teacherData.filter(item => item.status === 'Present').length;
      const absent = teacherData.filter(item => item.status === 'Absent').length;
      const attendanceRate = total > 0 ? Math.round((present / total) * 100) : 0;

      return [
        {
          title: 'Total Teachers',
          value: total.toString(),
          subtitle: viewType === 'daily' ? 'All teachers' : 'Monthly overview',
          icon: Users,
          color: 'blue'
        },
        {
          title: 'Present Today',
          value: present.toString(),
          subtitle: `${attendanceRate}% attendance`,
          icon: UserCheck,
          color: 'green'
        },
        {
          title: 'Absent Today',
          value: absent.toString(),
          subtitle: `${Math.round((absent / total) * 100)}% absence`,
          icon: UserX,
          color: 'red'
        },
        {
          title: 'Attendance Rate',
          value: `${attendanceRate}%`,
          subtitle: viewType === 'daily' ? 'Daily rate' : 'Monthly average',
          icon: BarChart3,
          color: 'orange'
        }
      ];
    }
  };

  // Filter data based on selections
  const filterData = () => {
    let data = generateMockData();
    
    // Ensure data is valid
    if (!Array.isArray(data)) {
      setFilteredData([]);
      return;
    }
    
    // Filter by class
    if (selectedClass !== 'All Classes') {
      data = data.filter(item => {
        if (activeView === 'students') {
          return item.class === selectedClass;
        } else {
          return item.classes && Array.isArray(item.classes) && item.classes.includes(selectedClass);
        }
      });
    }
    
    // Filter by subject (for students)
    if (activeView === 'students' && selectedSubject !== 'All Subjects') {
      data = data.filter(item => item.subject === selectedSubject);
    }
    
    // Filter by subject (for teachers)
    if (activeView === 'teachers' && selectedSubject !== 'All Subjects') {
      data = data.filter(item => item.subject === selectedSubject);
    }
    
    // For daily view, show only selected date
    if (viewType === 'daily') {
      data = data.filter(item => item.date === selectedDate);
    }
    
    setFilteredData(data || []);
  };

  // Refresh data
  const handleRefresh = () => {
    setSelectedDate(new Date().toISOString().split('T')[0]);
    setSelectedClass('All Classes');
    setSelectedSubject('All Subjects');
    filterData();
  };

  // Export data
  const handleExport = () => {
    if (!Array.isArray(filteredData) || filteredData.length === 0) {
      alert('No data to export');
      return;
    }

    const dataToExport = filteredData.map(item => {
      if (activeView === 'students') {
        return {
          Name: item.name || '',
          'Roll No': item.rollNo || '',
          Class: item.class || '',
          Status: item.status || '',
          'Check-in Time': item.checkInTime || '',
          'Parent Name': item.parentName || '',
          'Parent Contact': item.parentContact || '',
          Date: item.date || ''
        };
      } else {
        return {
          Name: item.name || '',
          Subject: item.subject || '',
          Classes: (item.classes && Array.isArray(item.classes)) ? item.classes.join(', ') : '',
          Status: item.status || '',
          'Check-in Time': item.checkInTime || '',
          'Check-out Time': item.checkOutTime || '',
          'Total Hours': item.totalHours || '',
          Date: item.date || ''
        };
      }
    });

    if (dataToExport.length === 0) {
      alert('No data to export');
      return;
    }

    const csvContent = [
      Object.keys(dataToExport[0]).join(','),
      ...dataToExport.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeView}-attendance-${viewType}-${selectedDate}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Initialize and update data when dependencies change
  useEffect(() => {
    try {
      filterData();
      setStats(calculateStats());
    } catch (error) {
      console.error('Error updating data:', error);
      setFilteredData([]);
      setStats([]);
    }
  }, [activeView, viewType, selectedDate, selectedClass, selectedSubject]);

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

  const classOptions = ['All Classes', 'Class 9A', 'Class 9B', 'Class 10A', 'Class 10B'];
  const subjectOptions = ['All Subjects', 'Mathematics', 'Science', 'English', 'Social Studies'];

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
            {stats.map((stat, index) => {
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

                <button 
                  onClick={() => setViewType('daily')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewType === 'daily'
                      ? 'bg-blue-600 text-white'
                      : isDarkMode 
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Calendar size={16} />
                  Daily View
                </button>

                <button 
                  onClick={() => setViewType('monthly')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewType === 'monthly'
                      ? 'bg-blue-600 text-white'
                      : isDarkMode 
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <BarChart3 size={16} />
                  Monthly View
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className={`px-3 py-2 rounded-lg text-sm border ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-gray-300'
                        : 'bg-white border-gray-300 text-gray-700'
                    }`}
                  />
                </div>

                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className={`px-3 py-2 rounded-lg text-sm border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-gray-300'
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                >
                  {classOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                <select 
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className={`px-3 py-2 rounded-lg text-sm border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-gray-300'
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                >
                  {subjectOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                <button 
                  onClick={handleExport}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>

            {/* Table Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {activeView === 'students' ? 'Student Attendance' : 'Teacher Attendance'} 
                {viewType === 'monthly' && ' - Monthly View'}
              </h2>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleRefresh}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-600 text-white hover:bg-gray-700"
                >
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
                          Subject
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Status
                        </th>
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Check-in Time
                        </th>
                        {viewType === 'monthly' && (
                          <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Date
                          </th>
                        )}
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
                        {viewType === 'monthly' && (
                          <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Date
                          </th>
                        )}
                        <th className={`text-left py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Actions
                        </th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(filteredData) && filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <tr key={`${item.id}-${index}`} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                        <td className="py-4 px-4">
                          <input type="checkbox" className="rounded" />
                        </td>
                        {activeView === 'students' ? (
                          <>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 text-sm font-medium">
                                    {item.name ? item.name.split(' ').map(n => n[0]).join('') : 'N/A'}
                                  </span>
                                </div>
                                <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                  {item.name || 'N/A'}
                                </span>
                              </div>
                            </td>
                            <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.class || 'N/A'}
                            </td>
                            <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.subject || 'N/A'}
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                                {item.status || 'N/A'}
                              </span>
                            </td>
                            <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.checkInTime || '-'}
                            </td>
                            {viewType === 'monthly' && (
                              <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.date || 'N/A'}
                              </td>
                            )}
                            <td className="py-4 px-4">
                              <div>
                                <div className={`font-medium text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                  {item.parentName || 'N/A'}
                                </div>
                                <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {item.parentContact || 'N/A'}
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
                                  <span className="text-blue-600 text-sm font-medium">
                                    {item.name ? item.name.split(' ').map(n => n[0]).join('') : 'N/A'}
                                  </span>
                                </div>
                                <div>
                                  <div className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                    {item.name || 'N/A'}
                                  </div>
                                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {item.contact || 'N/A'}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.subject || 'N/A'}
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex flex-wrap gap-1">
                                {item.classes && Array.isArray(item.classes) && item.classes.length > 0 ? (
                                  item.classes.map((cls, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-lg"
                                    >
                                      {cls}
                                    </span>
                                  ))
                                ) : (
                                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    No classes
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                                {item.status || 'N/A'}
                              </span>
                            </td>
                            <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.checkInTime || '-'}
                            </td>
                            <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.checkOutTime || '-'}
                            </td>
                            <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.totalHours || 'N/A'}
                            </td>
                            {viewType === 'monthly' && (
                              <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.date || 'N/A'}
                              </td>
                            )}
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={activeView === 'students' ? (viewType === 'monthly' ? 10 : 9) : (viewType === 'monthly' ? 10 : 9)} className={`py-8 px-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredData.length > 0 && (
              <div className="flex items-center justify-between mt-6">
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Showing {filteredData.length} of {filteredData.length} results
                </div>
                <div className="flex items-center gap-2">
                  <button className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                    1
                  </button>
                  <button className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default AttendanceManagement;