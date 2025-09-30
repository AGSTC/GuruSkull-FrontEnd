import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { Search, Calendar, Users, Clock, CheckCircle, XCircle, Send } from 'lucide-react';

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
      ]
    },
    'Class 10-B': {
      'Mathematics': [
        { id: 19, name: 'Rohit Jain', rollNo: '10B-001', class: 'Class 10-B', attendance: 91, status: 'Present', lastAttended: '25/09/2025', avatar: 'RJ' },
        { id: 20, name: 'Kavya Reddy', rollNo: '10B-002', class: 'Class 10-B', attendance: 96, status: 'Present', lastAttended: '25/09/2025', avatar: 'KR' },
        { id: 21, name: 'Arjun Mehta', rollNo: '10B-003', class: 'Class 10-B', attendance: 89, status: 'Absent', lastAttended: '24/09/2025', avatar: 'AM' },
      ]
    }
  };

  const [students, setStudents] = useState(allStudentsData[selectedClass]?.[selectedSubject] || []);

  // Load attendance based on filters
  const loadAttendance = () => {
    const newStudents = allStudentsData[selectedClass]?.[selectedSubject] || [];
    setStudents(newStudents);
    setAttendanceSent(false);
    alert(`Attendance loaded successfully!\nClass: ${selectedClass}\nSubject: ${selectedSubject}\nDate: ${selectedDate}`);
  };

  // Handle class change
  const handleClassChange = (newClass) => {
    setSelectedClass(newClass);
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

    console.log('Sending attendance:', attendanceData);
    
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
        isSidebarExpanded ? 'lg:ml-64' : 'lg:ml-16'
      }`}>
        <div className="w-full h-full px-4 sm:px-6 py-6">
          
          {/* Header */}
          <div className="text-left mb-6 sm:mb-8">
            <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Student Attendance
            </h1>
            <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Mark and track student attendance for your classes
            </p>
          </div>

          {/* Main Container */}
          <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          } mb-6 sm:mb-8`}>
            
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Class Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 text-left ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Class
                </label>
                <select 
                  value={selectedClass}
                  onChange={(e) => handleClassChange(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
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
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
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
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
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
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none text-sm sm:text-base"
                >
                  <Search size={16} />
                  <span className="hidden sm:inline">Load Attendance</span>
                  <span className="sm:hidden">Load</span>
                </button>
              </div>
            </div>

            {/* Current Selection Info */}
            <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg border text-sm ${
              isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-blue-50 border-blue-200'
            }`}>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                <strong>Current Selection:</strong> {selectedClass} - {selectedSubject} | Date: {selectedDate}
                {attendanceSent && <span className="ml-2 sm:ml-4 text-green-600 font-semibold">✓ Attendance Sent</span>}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Total Students */}
              <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-blue-50 border-blue-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                      Total Students
                    </p>
                    <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
                      {totalStudents}
                    </p>
                  </div>
                  <Users className={`w-6 h-6 sm:w-8 sm:h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                </div>
              </div>

              {/* Present */}
              <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-green-600'}`}>
                      Present
                    </p>
                    <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-green-900'}`}>
                      {presentStudents}
                    </p>
                  </div>
                  <CheckCircle className={`w-6 h-6 sm:w-8 sm:h-8 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                </div>
              </div>

              {/* Absent */}
              <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-red-600'}`}>
                      Absent
                    </p>
                    <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-red-900'}`}>
                      {absentStudents}
                    </p>
                  </div>
                  <XCircle className={`w-6 h-6 sm:w-8 sm:h-8 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                </div>
              </div>

              {/* Late */}
              <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border ${
                isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-yellow-600'}`}>
                      Late
                    </p>
                    <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-yellow-900'}`}>
                      {lateStudents}
                    </p>
                  </div>
                  <Clock className={`w-6 h-6 sm:w-8 sm:h-8 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                </div>
              </div>
            </div>

            {/* Mark Attendance Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
              <h2 className={`text-lg sm:text-xl font-semibold text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Mark Attendance
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={markAllPresent}
                  disabled={students.length === 0}
                  className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm focus:outline-none flex-1 ${
                    students.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  <span className="hidden sm:inline">Mark All Present</span>
                  <span className="sm:hidden">All Present</span>
                </button>
                <button 
                  onClick={sendAttendance}
                  disabled={students.length === 0 || attendanceSent}
                  className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm focus:outline-none flex items-center gap-1 sm:gap-2 ${
                    students.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : attendanceSent
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <Send size={14} />
                  {attendanceSent ? 'Sent ✓' : 'Send'}
                </button>
              </div>
            </div>

            {/* Student List */}
            {students.length === 0 ? (
              <div className={`text-center py-8 sm:py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">No Students Found</h3>
                <p className="text-sm sm:text-base">Please select a class and subject, then click "Load Attendance" to view students.</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {students.map((student) => (
                  <div key={student.id} className={`p-3 sm:p-4 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                    isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Avatar */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                        {student.avatar}
                      </div>
                      
                      {/* Student Info */}
                      <div className="text-left flex-1">
                        <h4 className={`font-medium text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {student.name}
                        </h4>
                        <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Roll No: {student.rollNo} | Class: {student.class}
                        </p>
                      </div>
                    </div>

                    {/* Attendance Info and Status */}
                    <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 w-full sm:w-auto">
                      {/* Attendance Percentage */}
                      <div className="text-right sm:text-left">
                        <p className={`text-sm sm:text-lg font-semibold ${getAttendanceColor(student.attendance)}`}>
                          {student.attendance}%
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          Last: {student.lastAttended}
                        </p>
                      </div>

                      {/* Status Badge and Actions */}
                      <div className="flex flex-col gap-2 items-end">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border text-center ${getStatusColor(student.status)}`}>
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
                            P
                          </button>
                          <button 
                            onClick={() => updateStudentStatus(student.id, 'Late')}
                            className={`px-2 py-1 text-xs rounded transition-colors focus:outline-none ${
                              student.status === 'Late' 
                                ? 'bg-yellow-500 text-white' 
                                : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                            }`}
                          >
                            L
                          </button>
                          <button 
                            onClick={() => updateStudentStatus(student.id, 'Absent')}
                            className={`px-2 py-1 text-xs rounded transition-colors focus:outline-none ${
                              student.status === 'Absent' 
                                ? 'bg-red-500 text-white' 
                                : 'bg-red-100 text-red-800 hover:bg-red-200'
                            }`}
                          >
                            A
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
          <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-left ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Attendance Summary
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {/* Present Today */}
              <div className="text-center">
                <div className={`text-2xl sm:text-4xl font-bold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {presentToday}%
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Present Today
                </p>
              </div>

              {/* Weekly Average */}
              <div className="text-center">
                <div className={`text-2xl sm:text-4xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {weeklyAverage}%
                </div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Weekly Average
                </p>
              </div>

              {/* Monthly Average */}
              <div className="text-center">
                <div className={`text-2xl sm:text-4xl font-bold mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
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