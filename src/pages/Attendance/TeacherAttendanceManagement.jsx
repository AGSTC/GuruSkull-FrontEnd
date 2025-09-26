import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { Search, Calendar, Users, Clock, AlertCircle, CheckCircle, XCircle, Send } from 'lucide-react';

const TeacherAttendanceManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [selectedDate, setSelectedDate] = useState('2025-09-26');
  const [attendanceSent, setAttendanceSent] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Complete student database with class information
  const allStudentsData = {
    'Class 10-A': {
      'Mathematics': [
        { id: 1, name: 'Rahul Sharma', rollNo: '10A-001', class: 'Class 10-A', attendance: 95, status: 'Present', lastAttended: '25/09/2025', avatar: 'RS' },
        { id: 2, name: 'Priya Patel', rollNo: '10A-002', class: 'Class 10-A', attendance: 92, status: 'Present', lastAttended: '25/09/2025', avatar: 'PP' },
        { id: 3, name: 'Amit Kumar', rollNo: '10A-003', class: 'Class 10-A', attendance: 88, status: 'Absent', lastAttended: '24/09/2025', avatar: 'AK' },
        { id: 4, name: 'Sneha Gupta', rollNo: '10A-004', class: 'Class 10-A', attendance: 97, status: 'Present', lastAttended: '25/09/2025', avatar: 'SG' },
        { id: 5, name: 'Vikram Singh', rollNo: '10A-005', class: 'Class 10-A', attendance: 90, status: 'Absent', lastAttended: '23/09/2025', avatar: 'VS' },
        { id: 6, name: 'Anjali Verma', rollNo: '10A-006', class: 'Class 10-A', attendance: 94, status: 'Present', lastAttended: '25/09/2025', avatar: 'AV' },
      ],
      'Physics': [
        { id: 7, name: 'Rahul Sharma', rollNo: '10A-001', class: 'Class 10-A', attendance: 90, status: 'Present', lastAttended: '25/09/2025', avatar: 'RS' },
        { id: 8, name: 'Priya Patel', rollNo: '10A-002', class: 'Class 10-A', attendance: 88, status: 'Absent', lastAttended: '23/09/2025', avatar: 'PP' },
        { id: 9, name: 'Amit Kumar', rollNo: '10A-003', class: 'Class 10-A', attendance: 85, status: 'Late', lastAttended: '25/09/2025', avatar: 'AK' },
        { id: 10, name: 'Sneha Gupta', rollNo: '10A-004', class: 'Class 10-A', attendance: 93, status: 'Present', lastAttended: '25/09/2025', avatar: 'SG' },
        { id: 11, name: 'Vikram Singh', rollNo: '10A-005', class: 'Class 10-A', attendance: 87, status: 'Present', lastAttended: '25/09/2025', avatar: 'VS' },
        { id: 12, name: 'Anjali Verma', rollNo: '10A-006', class: 'Class 10-A', attendance: 91, status: 'Late', lastAttended: '25/09/2025', avatar: 'AV' },
      ],
      'Chemistry': [
        { id: 13, name: 'Rahul Sharma', rollNo: '10A-001', class: 'Class 10-A', attendance: 92, status: 'Present', lastAttended: '25/09/2025', avatar: 'RS' },
        { id: 14, name: 'Priya Patel', rollNo: '10A-002', class: 'Class 10-A', attendance: 89, status: 'Present', lastAttended: '25/09/2025', avatar: 'PP' },
        { id: 15, name: 'Amit Kumar', rollNo: '10A-003', class: 'Class 10-A', attendance: 86, status: 'Absent', lastAttended: '24/09/2025', avatar: 'AK' },
        { id: 16, name: 'Sneha Gupta', rollNo: '10A-004', class: 'Class 10-A', attendance: 95, status: 'Present', lastAttended: '25/09/2025', avatar: 'SG' },
        { id: 17, name: 'Vikram Singh', rollNo: '10A-005', class: 'Class 10-A', attendance: 88, status: 'Present', lastAttended: '25/09/2025', avatar: 'VS' },
        { id: 18, name: 'Anjali Verma', rollNo: '10A-006', class: 'Class 10-A', attendance: 93, status: 'Late', lastAttended: '25/09/2025', avatar: 'AV' },
      ]
    },
    'Class 10-B': {
      'Mathematics': [
        { id: 19, name: 'Rohit Jain', rollNo: '10B-001', class: 'Class 10-B', attendance: 91, status: 'Present', lastAttended: '25/09/2025', avatar: 'RJ' },
        { id: 20, name: 'Kavya Reddy', rollNo: '10B-002', class: 'Class 10-B', attendance: 96, status: 'Present', lastAttended: '25/09/2025', avatar: 'KR' },
        { id: 21, name: 'Arjun Mehta', rollNo: '10B-003', class: 'Class 10-B', attendance: 89, status: 'Absent', lastAttended: '24/09/2025', avatar: 'AM' },
        { id: 22, name: 'Ritu Agarwal', rollNo: '10B-004', class: 'Class 10-B', attendance: 95, status: 'Present', lastAttended: '25/09/2025', avatar: 'RA' },
        { id: 23, name: 'Karan Thakur', rollNo: '10B-005', class: 'Class 10-B', attendance: 92, status: 'Late', lastAttended: '25/09/2025', avatar: 'KT' },
        { id: 24, name: 'Neha Kapoor', rollNo: '10B-006', class: 'Class 10-B', attendance: 88, status: 'Present', lastAttended: '25/09/2025', avatar: 'NK' },
      ],
      'Physics': [
        { id: 25, name: 'Rohit Jain', rollNo: '10B-001', class: 'Class 10-B', attendance: 88, status: 'Present', lastAttended: '25/09/2025', avatar: 'RJ' },
        { id: 26, name: 'Kavya Reddy', rollNo: '10B-002', class: 'Class 10-B', attendance: 93, status: 'Absent', lastAttended: '23/09/2025', avatar: 'KR' },
        { id: 27, name: 'Arjun Mehta', rollNo: '10B-003', class: 'Class 10-B', attendance: 86, status: 'Present', lastAttended: '25/09/2025', avatar: 'AM' },
        { id: 28, name: 'Ritu Agarwal', rollNo: '10B-004', class: 'Class 10-B', attendance: 92, status: 'Late', lastAttended: '25/09/2025', avatar: 'RA' },
        { id: 29, name: 'Karan Thakur', rollNo: '10B-005', class: 'Class 10-B', attendance: 90, status: 'Present', lastAttended: '25/09/2025', avatar: 'KT' },
        { id: 30, name: 'Neha Kapoor', rollNo: '10B-006', class: 'Class 10-B', attendance: 85, status: 'Present', lastAttended: '25/09/2025', avatar: 'NK' },
      ],
      'Chemistry': [
        { id: 31, name: 'Rohit Jain', rollNo: '10B-001', class: 'Class 10-B', attendance: 90, status: 'Present', lastAttended: '25/09/2025', avatar: 'RJ' },
        { id: 32, name: 'Kavya Reddy', rollNo: '10B-002', class: 'Class 10-B', attendance: 94, status: 'Present', lastAttended: '25/09/2025', avatar: 'KR' },
        { id: 33, name: 'Arjun Mehta', rollNo: '10B-003', class: 'Class 10-B', attendance: 87, status: 'Absent', lastAttended: '24/09/2025', avatar: 'AM' },
        { id: 34, name: 'Ritu Agarwal', rollNo: '10B-004', class: 'Class 10-B', attendance: 93, status: 'Present', lastAttended: '25/09/2025', avatar: 'RA' },
        { id: 35, name: 'Karan Thakur', rollNo: '10B-005', class: 'Class 10-B', attendance: 91, status: 'Late', lastAttended: '25/09/2025', avatar: 'KT' },
        { id: 36, name: 'Neha Kapoor', rollNo: '10B-006', class: 'Class 10-B', attendance: 86, status: 'Present', lastAttended: '25/09/2025', avatar: 'NK' },
      ]
    },
    'Class 11-A': {
      'Mathematics': [
        { id: 37, name: 'Siddharth Rao', rollNo: '11A-001', class: 'Class 11-A', attendance: 94, status: 'Present', lastAttended: '25/09/2025', avatar: 'SR' },
        { id: 38, name: 'Pooja Sharma', rollNo: '11A-002', class: 'Class 11-A', attendance: 91, status: 'Present', lastAttended: '25/09/2025', avatar: 'PS' },
        { id: 39, name: 'Deepak Kumar', rollNo: '11A-003', class: 'Class 11-A', attendance: 89, status: 'Absent', lastAttended: '24/09/2025', avatar: 'DK' },
        { id: 40, name: 'Isha Patel', rollNo: '11A-004', class: 'Class 11-A', attendance: 96, status: 'Present', lastAttended: '25/09/2025', avatar: 'IP' },
        { id: 41, name: 'Manish Gupta', rollNo: '11A-005', class: 'Class 11-A', attendance: 88, status: 'Late', lastAttended: '25/09/2025', avatar: 'MG' },
        { id: 42, name: 'Swati Singh', rollNo: '11A-006', class: 'Class 11-A', attendance: 93, status: 'Present', lastAttended: '25/09/2025', avatar: 'SS' },
      ],
      'Physics': [
        { id: 43, name: 'Siddharth Rao', rollNo: '11A-001', class: 'Class 11-A', attendance: 91, status: 'Present', lastAttended: '25/09/2025', avatar: 'SR' },
        { id: 44, name: 'Pooja Sharma', rollNo: '11A-002', class: 'Class 11-A', attendance: 88, status: 'Absent', lastAttended: '23/09/2025', avatar: 'PS' },
        { id: 45, name: 'Deepak Kumar', rollNo: '11A-003', class: 'Class 11-A', attendance: 86, status: 'Present', lastAttended: '25/09/2025', avatar: 'DK' },
        { id: 46, name: 'Isha Patel', rollNo: '11A-004', class: 'Class 11-A', attendance: 93, status: 'Late', lastAttended: '25/09/2025', avatar: 'IP' },
        { id: 47, name: 'Manish Gupta', rollNo: '11A-005', class: 'Class 11-A', attendance: 85, status: 'Present', lastAttended: '25/09/2025', avatar: 'MG' },
        { id: 48, name: 'Swati Singh', rollNo: '11A-006', class: 'Class 11-A', attendance: 90, status: 'Present', lastAttended: '25/09/2025', avatar: 'SS' },
      ],
      'Biology': [
        { id: 49, name: 'Siddharth Rao', rollNo: '11A-001', class: 'Class 11-A', attendance: 89, status: 'Present', lastAttended: '25/09/2025', avatar: 'SR' },
        { id: 50, name: 'Pooja Sharma', rollNo: '11A-002', class: 'Class 11-A', attendance: 95, status: 'Present', lastAttended: '25/09/2025', avatar: 'PS' },
        { id: 51, name: 'Deepak Kumar', rollNo: '11A-003', class: 'Class 11-A', attendance: 92, status: 'Late', lastAttended: '25/09/2025', avatar: 'DK' },
        { id: 52, name: 'Isha Patel', rollNo: '11A-004', class: 'Class 11-A', attendance: 88, status: 'Present', lastAttended: '25/09/2025', avatar: 'IP' },
        { id: 53, name: 'Manish Gupta', rollNo: '11A-005', class: 'Class 11-A', attendance: 86, status: 'Absent', lastAttended: '24/09/2025', avatar: 'MG' },
        { id: 54, name: 'Swati Singh', rollNo: '11A-006', class: 'Class 11-A', attendance: 94, status: 'Present', lastAttended: '25/09/2025', avatar: 'SS' },
      ]
    },
    'Class 12-A': {
      'Mathematics': [
        { id: 55, name: 'Aditya Joshi', rollNo: '12A-001', class: 'Class 12-A', attendance: 97, status: 'Present', lastAttended: '25/09/2025', avatar: 'AJ' },
        { id: 56, name: 'Nisha Verma', rollNo: '12A-002', class: 'Class 12-A', attendance: 94, status: 'Present', lastAttended: '25/09/2025', avatar: 'NV' },
        { id: 57, name: 'Rajesh Singh', rollNo: '12A-003', class: 'Class 12-A', attendance: 91, status: 'Absent', lastAttended: '24/09/2025', avatar: 'RS' },
        { id: 58, name: 'Megha Pandey', rollNo: '12A-004', class: 'Class 12-A', attendance: 98, status: 'Present', lastAttended: '25/09/2025', avatar: 'MP' },
        { id: 59, name: 'Vishal Kumar', rollNo: '12A-005', class: 'Class 12-A', attendance: 90, status: 'Late', lastAttended: '25/09/2025', avatar: 'VK' },
        { id: 60, name: 'Priyanka Yadav', rollNo: '12A-006', class: 'Class 12-A', attendance: 95, status: 'Present', lastAttended: '25/09/2025', avatar: 'PY' },
      ],
      'Physics': [
        { id: 61, name: 'Aditya Joshi', rollNo: '12A-001', class: 'Class 12-A', attendance: 94, status: 'Present', lastAttended: '25/09/2025', avatar: 'AJ' },
        { id: 62, name: 'Nisha Verma', rollNo: '12A-002', class: 'Class 12-A', attendance: 91, status: 'Absent', lastAttended: '23/09/2025', avatar: 'NV' },
        { id: 63, name: 'Rajesh Singh', rollNo: '12A-003', class: 'Class 12-A', attendance: 88, status: 'Present', lastAttended: '25/09/2025', avatar: 'RS' },
        { id: 64, name: 'Megha Pandey', rollNo: '12A-004', class: 'Class 12-A', attendance: 95, status: 'Late', lastAttended: '25/09/2025', avatar: 'MP' },
        { id: 65, name: 'Vishal Kumar', rollNo: '12A-005', class: 'Class 12-A', attendance: 87, status: 'Present', lastAttended: '25/09/2025', avatar: 'VK' },
        { id: 66, name: 'Priyanka Yadav', rollNo: '12A-006', class: 'Class 12-A', attendance: 92, status: 'Present', lastAttended: '25/09/2025', avatar: 'PY' },
      ],
      'Chemistry': [
        { id: 67, name: 'Aditya Joshi', rollNo: '12A-001', class: 'Class 12-A', attendance: 92, status: 'Present', lastAttended: '25/09/2025', avatar: 'AJ' },
        { id: 68, name: 'Nisha Verma', rollNo: '12A-002', class: 'Class 12-A', attendance: 89, status: 'Present', lastAttended: '25/09/2025', avatar: 'NV' },
        { id: 69, name: 'Rajesh Singh', rollNo: '12A-003', class: 'Class 12-A', attendance: 86, status: 'Absent', lastAttended: '24/09/2025', avatar: 'RS' },
        { id: 70, name: 'Megha Pandey', rollNo: '12A-004', class: 'Class 12-A', attendance: 96, status: 'Present', lastAttended: '25/09/2025', avatar: 'MP' },
        { id: 71, name: 'Vishal Kumar', rollNo: '12A-005', class: 'Class 12-A', attendance: 88, status: 'Late', lastAttended: '25/09/2025', avatar: 'VK' },
        { id: 72, name: 'Priyanka Yadav', rollNo: '12A-006', class: 'Class 12-A', attendance: 93, status: 'Present', lastAttended: '25/09/2025', avatar: 'PY' },
      ]
    }
  };

  const [students, setStudents] = useState(allStudentsData[selectedClass]?.[selectedSubject] || []);

  // Load attendance based on filters
  const loadAttendance = () => {
    const newStudents = allStudentsData[selectedClass]?.[selectedSubject] || [];
    setStudents(newStudents);
    setAttendanceSent(false);
    
    // Show loading message
    const loadingMessage = `Loading attendance for ${selectedClass} - ${selectedSubject} on ${selectedDate}`;
    console.log(loadingMessage);
    
    // You can add a toast notification here
    alert(`Attendance loaded successfully!\nClass: ${selectedClass}\nSubject: ${selectedSubject}\nDate: ${selectedDate}`);
  };

  // Handle class change
  const handleClassChange = (newClass) => {
    setSelectedClass(newClass);
    // Get the first available subject for this class
    const availableSubjects = Object.keys(allStudentsData[newClass] || {});
    if (availableSubjects.length > 0) {
      setSelectedSubject(availableSubjects[0]);
      setStudents(allStudentsData[newClass]?.[availableSubjects[0]] || []);
    } else {
      setStudents([]);
    }
    setAttendanceSent(false);
  };

  // Handle subject change
  const handleSubjectChange = (newSubject) => {
    setSelectedSubject(newSubject);
    setStudents(allStudentsData[selectedClass]?.[newSubject] || []);
    setAttendanceSent(false);
  };

  // Handle date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    // Reload attendance for new date
    loadAttendance();
  };

  const totalStudents = students.length;
  const presentStudents = students.filter(s => s.status === 'Present').length;
  const absentStudents = students.filter(s => s.status === 'Absent').length;
  const lateStudents = students.filter(s => s.status === 'Late').length;

  const presentToday = totalStudents > 0 ? Math.round((presentStudents / totalStudents) * 100) : 0;
  const weeklyAverage = 92;
  const monthlyAverage = 89;

  const updateStudentStatus = (studentId, newStatus) => {
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, status: newStatus, lastAttended: selectedDate }
          : student
      )
    );
    setAttendanceSent(false);
  };

  const markAllPresent = () => {
    setStudents(prevStudents => 
      prevStudents.map(student => ({ 
        ...student, 
        status: 'Present',
        lastAttended: selectedDate
      }))
    );
    setAttendanceSent(false);
    alert('All students marked as present!');
  };

  const sendAttendance = () => {
    if (students.length === 0) {
      alert('No students to send attendance for!');
      return;
    }

    const attendanceData = {
      class: selectedClass,
      subject: selectedSubject,
      date: selectedDate,
      totalStudents: totalStudents,
      presentStudents: presentStudents,
      absentStudents: absentStudents,
      lateStudents: lateStudents,
      students: students.map(student => ({
        id: student.id,
        name: student.name,
        rollNo: student.rollNo,
        status: student.status
      }))
    };

    // Simulate sending attendance
    console.log('Sending attendance:', attendanceData);
    
    // In a real app, you would make an API call here
    setTimeout(() => {
      setAttendanceSent(true);
      alert(`Attendance sent successfully!\n\nClass: ${selectedClass}\nSubject: ${selectedSubject}\nDate: ${selectedDate}\nPresent: ${presentStudents}/${totalStudents}`);
    }, 1000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Absent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Late':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getAttendanceColor = (percentage) => {
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get available subjects for selected class
  const availableSubjects = Object.keys(allStudentsData[selectedClass] || {});

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
              Student Attendance
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Mark and track student attendance for your classes
            </p>
          </div>

          {/* Main Container */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          } mb-8`}>
            
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Class Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Class
                </label>
                <select 
                  value={selectedClass}
                  onChange={(e) => handleClassChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Class 10-A">Class 10-A</option>
                  <option value="Class 10-B">Class 10-B</option>
                  <option value="Class 11-A">Class 11-A</option>
                  <option value="Class 12-A">Class 12-A</option>
                </select>
              </div>

              {/* Subject Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <select 
                  value={selectedSubject}
                  onChange={(e) => handleSubjectChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  {availableSubjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              {/* Date Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Date
                </label>
                <input 
                  type="date"
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              {/* Load Attendance Button */}
              <div className="flex items-end">
                <button 
                  onClick={loadAttendance}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none"
                >
                  <Search size={16} />
                  Load Attendance
                </button>
              </div>
            </div>

            {/* Current Selection Info */}
            <div className={`mb-6 p-4 rounded-lg border ${
              isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-blue-50 border-blue-200'
            }`}>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                <strong>Current Selection:</strong> {selectedClass} - {selectedSubject} | Date: {selectedDate}
                {attendanceSent && <span className="ml-4 text-green-600 font-semibold">✓ Attendance Sent</span>}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* Total Students */}
              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-blue-50 border-blue-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                      Total Students
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
                      {totalStudents}
                    </p>
                  </div>
                  <Users className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                </div>
              </div>

              {/* Present */}
              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-green-600'}`}>
                      Present
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-green-900'}`}>
                      {presentStudents}
                    </p>
                  </div>
                  <CheckCircle className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                </div>
              </div>

              {/* Absent */}
              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-red-600'}`}>
                      Absent
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-red-900'}`}>
                      {absentStudents}
                    </p>
                  </div>
                  <XCircle className={`w-8 h-8 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                </div>
              </div>

              {/* Late */}
              <div className={`p-4 rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-yellow-600'}`}>
                      Late
                    </p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-yellow-900'}`}>
                      {lateStudents}
                    </p>
                  </div>
                  <Clock className={`w-8 h-8 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                </div>
              </div>
            </div>

            {/* Mark Attendance Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Mark Attendance
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={markAllPresent}
                  disabled={students.length === 0}
                  className={`px-4 py-2 rounded-lg transition-colors text-sm focus:outline-none ${
                    students.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  Mark All Present
                </button>
                <button 
                  onClick={sendAttendance}
                  disabled={students.length === 0 || attendanceSent}
                  className={`px-4 py-2 rounded-lg transition-colors text-sm focus:outline-none flex items-center gap-2 ${
                    students.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : attendanceSent
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <Send size={16} />
                  {attendanceSent ? 'Sent ✓' : 'Send Attendance'}
                </button>
              </div>
            </div>

            {/* Student List */}
            {students.length === 0 ? (
              <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No Students Found</h3>
                <p>Please select a class and subject, then click "Load Attendance" to view students.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {students.map((student) => (
                  <div key={student.id} className={`p-4 rounded-lg border flex items-center justify-between ${
                    isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {student.avatar}
                      </div>
                      
                      {/* Student Info */}
                      <div className="text-left">
                        <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {student.name}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Roll No: {student.rollNo} | Class: {student.class}
                        </p>
                      </div>
                    </div>

                    {/* Attendance Info and Status */}
                    <div className="flex items-center gap-4">
                      {/* Attendance Percentage */}
                      <div className="text-right">
                        <p className={`text-lg font-semibold ${getAttendanceColor(student.attendance)}`}>
                          {student.attendance}% Attendance
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          Last Attended: {student.lastAttended}
                        </p>
                      </div>

                      {/* Status Badge */}
                      <div className="flex flex-col gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border text-center ${getStatusColor(student.status)}`}>
                          {student.status}
                        </span>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-1">
                          <button 
                            onClick={() => updateStudentStatus(student.id, 'Present')}
                            className={`px-2 py-1 text-xs rounded transition-colors focus:outline-none ${
                              student.status === 'Present' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                          >
                            Present
                          </button>
                          <button 
                            onClick={() => updateStudentStatus(student.id, 'Late')}
                            className={`px-2 py-1 text-xs rounded transition-colors focus:outline-none ${
                              student.status === 'Late' 
                                ? 'bg-yellow-500 text-white' 
                                : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                            }`}
                          >
                            Late
                          </button>
                          <button 
                            onClick={() => updateStudentStatus(student.id, 'Absent')}
                            className={`px-2 py-1 text-xs rounded transition-colors focus:outline-none ${
                              student.status === 'Absent' 
                                ? 'bg-red-500 text-white' 
                                : 'bg-red-100 text-red-800 hover:bg-red-200'
                            }`}
                          >
                            Absent
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Attendance Summary */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Attendance Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Present Today */}
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {presentToday}%
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Present Today
                </p>
              </div>

              {/* Weekly Average */}
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {weeklyAverage}%
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Weekly Average
                </p>
              </div>

              {/* Monthly Average */}
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {monthlyAverage}%
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Monthly Average
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherAttendanceManagement;