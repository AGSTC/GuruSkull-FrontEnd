import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import { Search, Calendar, Users, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const TeacherAttendanceManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedClass, setSelectedClass] = useState('All Students');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [selectedDate, setSelectedDate] = useState('2025-09-12');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const [students, setStudents] = useState([
    { 
      id: 1, 
      name: 'Rahul Sharma', 
      rollNo: '001', 
      attendance: 95, 
      status: 'Present', 
      lastAttended: '12/09/2025',
      avatar: 'RS'
    },
    { 
      id: 2, 
      name: 'Priya Patel', 
      rollNo: '002', 
      attendance: 92, 
      status: 'Present', 
      lastAttended: '12/09/2025',
      avatar: 'PP'
    },
    { 
      id: 3, 
      name: 'Amit Kumar', 
      rollNo: '003', 
      attendance: 88, 
      status: 'Absent', 
      lastAttended: '11/09/2025',
      avatar: 'AK'
    },
    { 
      id: 4, 
      name: 'Sneha Gupta', 
      rollNo: '004', 
      attendance: 97, 
      status: 'Present', 
      lastAttended: '12/09/2025',
      avatar: 'SG'
    },
    { 
      id: 5, 
      name: 'Vikram Singh', 
      rollNo: '005', 
      attendance: 90, 
      status: 'Absent', 
      lastAttended: '10/09/2025',
      avatar: 'VS'
    },
    { 
      id: 6, 
      name: 'Anjali Verma', 
      rollNo: '006', 
      attendance: 94, 
      status: 'Present', 
      lastAttended: '12/09/2025',
      avatar: 'AV'
    },
    { 
      id: 7, 
      name: 'Rohit Jain', 
      rollNo: '007', 
      attendance: 91, 
      status: 'Present', 
      lastAttended: '12/09/2025',
      avatar: 'RJ'
    },
    { 
      id: 8, 
      name: 'Kavya Reddy', 
      rollNo: '008', 
      attendance: 96, 
      status: 'Present', 
      lastAttended: '12/09/2025',
      avatar: 'KR'
    }
  ]);

  const totalStudents = students.length;
  const presentStudents = students.filter(s => s.status === 'Present').length;
  const absentStudents = students.filter(s => s.status === 'Absent').length;
  const lateStudents = students.filter(s => s.status === 'Late').length;

  const presentToday = Math.round((presentStudents / totalStudents) * 100);
  const weeklyAverage = 92;
  const monthlyAverage = 89;

  const updateStudentStatus = (studentId, newStatus) => {
    setStudents(prevStudents => 
      prevStudents.map(student => 
        student.id === studentId 
          ? { ...student, status: newStatus }
          : student
      )
    );
  };

  const markAllPresent = () => {
    setStudents(prevStudents => 
      prevStudents.map(student => ({ ...student, status: 'Present' }))
    );
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
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="All Students">All Students</option>
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
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
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
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              {/* Load Attendance Button */}
              <div className="flex items-end">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none">
                  <Search size={16} />
                  Load Attendance
                </button>
              </div>
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
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm focus:outline-none"
                >
                  Mark All Present
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm focus:outline-none">
                  Send Attendance
                </button>
              </div>
            </div>

            {/* Student List */}
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
                        Roll No: {student.rollNo}
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