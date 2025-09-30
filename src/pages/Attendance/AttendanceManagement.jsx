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
  Eye,
  ChevronRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const AttendanceManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeView, setActiveView] = useState('students');
  const [viewType, setViewType] = useState('daily');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [filteredData, setFilteredData] = useState([]);
  const [stats, setStats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const generateMockData = () => {
    const studentNames = [
      'Aarav Sharma', 'Priya Patel', 'Rohan Kumar', 'Sneha Gupta', 'Karan Singh',
      'Ananya Joshi', 'Vikram Reddy', 'Pooja Agarwal', 'Arjun Mehta', 'Riya Shah',
      'Siddharth Jain', 'Kavya Nair', 'Aditya Rao', 'Ishita Kapoor', 'Harsh Gupta',
      'Meera Singh', 'Nikhil Sharma', 'Tanya Malhotra', 'Rahul Verma', 'Sakshi Pandey',
      'Varun Kumar', 'Deepika Jha', 'Rohit Agrawal', 'Simran Kaur', 'Abhinav Mishra',
      'Nisha Thakur', 'Kartik Saxena', 'Priyanka Das', 'Akash Bhatt', 'Swati Yadav'
    ];

    const teacherNames = [
      'Dr. Rajesh Sharma', 'Prof. Meera Patel', 'Ms. Kavita Verma', 'Mr. Suresh Joshi',
      'Dr. Priya Gupta', 'Prof. Anil Kumar', 'Ms. Sunita Singh', 'Mr. Vinod Agrawal',
      'Dr. Ravi Mehta', 'Prof. Neha Kapoor', 'Ms. Sushma Rao', 'Mr. Manoj Tiwari',
      'Dr. Pooja Sharma', 'Prof. Amit Jain', 'Ms. Rekha Pandey'
    ];

    const classes = ['Class 8A', 'Class 8B', 'Class 9A', 'Class 9B', 'Class 10A', 'Class 10B', 'Class 11A', 'Class 11B', 'Class 12A', 'Class 12B'];
    const subjects = ['Mathematics', 'Science', 'English', 'Social Studies', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];
    const statuses = ['Present', 'Absent', 'Late'];
    const parentNames = [
      'Rajesh Sharma', 'Sanjay Patel', 'Anita Kumar', 'Vikram Gupta', 'Neha Singh',
      'Deepak Joshi', 'Sunita Reddy', 'Manoj Agarwal', 'Priya Mehta', 'Suresh Shah',
      'Kavita Jain', 'Ravi Nair', 'Pooja Rao', 'Vinod Kapoor', 'Meera Gupta'
    ];

    const baseStudentData = studentNames.map((name, index) => ({
      id: index + 1,
      name: name,
      rollNo: `S${(index + 1).toString().padStart(3, '0')}`,
      class: classes[index % classes.length],
      subject: subjects[index % subjects.length],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      checkInTime: statuses[index % 3] === 'Absent' ? '-' : statuses[index % 3] === 'Late' ? '09:35 AM' : '09:15 AM',
      parentName: parentNames[index % parentNames.length],
      parentContact: `+91 98765432${(10 + index).toString().slice(-2)}`,
      date: selectedDate
    }));

    const baseTeacherData = teacherNames.map((name, index) => ({
      id: index + 1,
      name: name,
      contact: `+91 98765432${(10 + index).toString().slice(-2)}`,
      subject: subjects[index % subjects.length],
      classes: [classes[index % classes.length], classes[(index + 1) % classes.length]].slice(0, Math.ceil(Math.random() * 2)),
      status: index % 7 === 0 ? 'Absent' : 'Present',
      checkInTime: index % 7 === 0 ? '-' : '08:45 AM',
      checkOutTime: index % 7 === 0 ? '-' : '03:30 PM',
      totalHours: index % 7 === 0 ? '0 Hours' : '6.5 Hours',
      date: selectedDate
    }));

    if (viewType === 'monthly') {
      const monthlyData = [];
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        baseStudentData.forEach(student => {
          monthlyData.push({
            ...student,
            id: student.id + i * 100,
            date: dateStr,
            status: Math.random() > 0.15 ? (Math.random() > 0.9 ? 'Late' : 'Present') : 'Absent',
            checkInTime: Math.random() > 0.15 ? (Math.random() > 0.9 ? '09:35 AM' : '09:15 AM') : '-'
          });
        });

        baseTeacherData.forEach(teacher => {
          monthlyData.push({
            ...teacher,
            id: teacher.id + i * 1000,
            date: dateStr,
            status: Math.random() > 0.05 ? 'Present' : 'Absent',
            checkInTime: Math.random() > 0.05 ? '08:45 AM' : '-',
            checkOutTime: Math.random() > 0.05 ? '03:30 PM' : '-',
            totalHours: Math.random() > 0.05 ? '6.5 Hours' : '0 Hours'
          });
        });
      }
      
      return activeView === 'students' 
        ? monthlyData.filter(d => d.rollNo && typeof d.rollNo === 'string') 
        : monthlyData.filter(d => d.classes && Array.isArray(d.classes));
    }

    return activeView === 'students' ? baseStudentData : baseTeacherData;
  };

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

  const filterData = () => {
    let data = generateMockData();
    
    if (!Array.isArray(data)) {
      setFilteredData([]);
      return;
    }
    
    if (selectedClass !== 'All Classes') {
      data = data.filter(item => {
        if (activeView === 'students') {
          return item.class === selectedClass;
        } else {
          return item.classes && Array.isArray(item.classes) && item.classes.includes(selectedClass);
        }
      });
    }
    
    if (activeView === 'students' && selectedSubject !== 'All Subjects') {
      data = data.filter(item => item.subject === selectedSubject);
    }
    
    if (activeView === 'teachers' && selectedSubject !== 'All Subjects') {
      data = data.filter(item => item.subject === selectedSubject);
    }
    
    if (viewType === 'daily') {
      data = data.filter(item => item.date === selectedDate);
    }
    
    setFilteredData(data || []);
  };

  const handleRefresh = () => {
    setSelectedDate(new Date().toISOString().split('T')[0]);
    setSelectedClass('All Classes');
    setSelectedSubject('All Subjects');
    setCurrentPage(1);
    filterData();
  };

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
          Subject: item.subject || '',
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

  useEffect(() => {
    try {
      filterData();
      setStats(calculateStats());
      setCurrentPage(1);
    } catch (error) {
      console.error('Error updating data:', error);
      setFilteredData([]);
      setStats([]);
    }
  }, [activeView, viewType, selectedDate, selectedClass, selectedSubject]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  const classOptions = ['All Classes', 'Class 8A', 'Class 8B', 'Class 9A', 'Class 9B', 'Class 10A', 'Class 10B', 'Class 11A', 'Class 11B', 'Class 12A', 'Class 12B'];
  const subjectOptions = ['All Subjects', 'Mathematics', 'Science', 'English', 'Social Studies', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];

  return (
    <>
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Header 
          isSidebarExpanded={isSidebarExpanded} 
          toggleSidebar={toggleSidebar}
        />

        <Sidebar isExpanded={isSidebarExpanded} activeItem="attendance" />

        <main className={`transition-all duration-300 ${
          isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
          <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
              
            <div className="text-left mb-4 md:mb-6 lg:mb-8">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Attendance Management
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Comprehensive insights Attendance management for your tuition center
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
              {stats.map((stat, index) => {
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
                    
                    <p className={`text-xs md:text-sm ${colorClasses.textColor}`}>
                      {stat.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border mb-6 md:mb-8 ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setActiveView('students')}
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                      activeView === 'students'
                        ? 'bg-blue-600 text-white'
                        : isDarkMode 
                          ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Users size={14} className="md:w-4 md:h-4" />
                    Students
                  </button>
                  
                  <button
                    onClick={() => setActiveView('teachers')}
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                      activeView === 'teachers'
                        ? 'bg-blue-600 text-white'
                        : isDarkMode 
                          ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <UserCheck size={14} className="md:w-4 md:h-4" />
                    Teachers
                  </button>

                  <button 
                    onClick={() => setViewType('daily')}
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                      viewType === 'daily'
                        ? 'bg-blue-600 text-white'
                        : isDarkMode 
                          ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Calendar size={14} className="md:w-4 md:h-4" />
                    Daily View
                  </button>

                  <button 
                    onClick={() => setViewType('monthly')}
                    className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                      viewType === 'monthly'
                        ? 'bg-blue-600 text-white'
                        : isDarkMode 
                          ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <BarChart3 size={14} className="md:w-4 md:h-4" />
                    Monthly View
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className={`px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm border ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-gray-300'
                          : 'bg-white border-gray-300 text-gray-700'
                      }`}
                    />
                  </div>

                  <select 
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className={`px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm border ${
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
                    className={`px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm border ${
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
                    className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    <Download size={14} className="md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-4">
                <h2 className={`text-lg md:text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activeView === 'students' ? 'Student Attendance' : 'Teacher Attendance'} 
                  {viewType === 'monthly' && ' - Monthly View'}
                </h2>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleRefresh}
                    className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors bg-gray-600 text-white hover:bg-gray-700"
                  >
                    <RefreshCw size={14} className="md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                      {activeView === 'students' ? (
                        <>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Student
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Roll No
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Class
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Subject
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Status
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Check-in Time
                          </th>
                          {viewType === 'monthly' && (
                            <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Date
                            </th>
                          )}
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Parent Contact
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Actions
                          </th>
                        </>
                      ) : (
                        <>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Teacher
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Subject
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Classes
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Status
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Check-in Time
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Check-out Time
                          </th>
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Total Hours
                          </th>
                          {viewType === 'monthly' && (
                            <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Date
                            </th>
                          )}
                          <th className={`text-left py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Actions
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(currentData) && currentData.length > 0 ? (
                      currentData.map((item, index) => (
                        <tr key={`${item.id}-${index}`} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                          {activeView === 'students' ? (
                            <>
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <div className="flex items-center gap-2 md:gap-3">
                                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 text-xs md:text-sm font-medium">
                                      {item.name ? item.name.split(' ').map(n => n[0]).join('') : 'N/A'}
                                    </span>
                                  </div>
                                  <span className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                    {item.name || 'N/A'}
                                  </span>
                                </div>
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.rollNo || 'N/A'}
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.class || 'N/A'}
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.subject || 'N/A'}
                              </td>
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                                  {item.status || 'N/A'}
                                </span>
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.checkInTime || '-'}
                              </td>
                              {viewType === 'monthly' && (
                                <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {item.date || 'N/A'}
                                </td>
                              )}
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <div>
                                  <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                    {item.parentName || 'N/A'}
                                  </div>
                                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {item.parentContact || 'N/A'}
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <div className="flex items-center gap-1 md:gap-2">
                                  <button className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                                    <Eye size={12} className="md:w-3 md:h-3" />
                                  </button>
                                  <button className="w-6 h-6 md:w-8 md:h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                                    <Phone size={12} className="md:w-3 md:h-3" />
                                  </button>
                                  <button className="w-6 h-6 md:w-8 md:h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-200 transition-colors">
                                    <Trash2 size={12} className="md:w-3 md:h-3" />
                                  </button>
                                </div>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <div className="flex items-center gap-2 md:gap-3">
                                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 text-xs md:text-sm font-medium">
                                      {item.name ? item.name.split(' ').map(n => n[0]).join('') : 'N/A'}
                                    </span>
                                  </div>
                                  <div>
                                    <div className={`font-medium text-xs md:text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                      {item.name || 'N/A'}
                                    </div>
                                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      {item.contact || 'N/A'}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.subject || 'N/A'}
                              </td>
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <div className="flex flex-wrap gap-1">
                                  {item.classes && Array.isArray(item.classes) && item.classes.length > 0 ? (
                                    item.classes.map((cls, idx) => (
                                      <span
                                        key={idx}
                                        className="px-1 py-0.5 md:px-2 md:py-1 bg-blue-100 text-blue-800 text-xs rounded-lg"
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
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                                  {item.status || 'N/A'}
                                </span>
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.checkInTime || '-'}
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.checkOutTime || '-'}
                              </td>
                              <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {item.totalHours || 'N/A'}
                              </td>
                              {viewType === 'monthly' && (
                                <td className={`py-3 md:py-4 px-2 md:px-4 text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {item.date || 'N/A'}
                                </td>
                              )}
                              <td className="py-3 md:py-4 px-2 md:px-4">
                                <div className="flex items-center gap-1 md:gap-2">
                                  <button className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                                    <Eye size={12} className="md:w-3 md:h-3" />
                                  </button>
                                  <button className="w-6 h-6 md:w-8 md:h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                                    <Phone size={12} className="md:w-3 md:h-3" />
                                  </button>
                                  <button className="w-6 h-6 md:w-8 md:h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
                                    <MessageSquare size={12} className="md:w-3 md:h-3" />
                                  </button>
                                </div>
                              </td>
                            </>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={activeView === 'students' ? (viewType === 'monthly' ? 9 : 8) : (viewType === 'monthly' ? 9 : 8)} className={`py-6 md:py-8 px-2 md:px-4 text-center text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {filteredData.length > 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 mt-4 md:mt-6">
                  <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} results
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
          </div>
        </main>

        <Footer isSidebarExpanded={isSidebarExpanded} />
      </div>
    </>
  );
};

export default AttendanceManagement;