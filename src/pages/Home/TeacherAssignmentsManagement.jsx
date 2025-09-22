import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  FileText, 
  Clock, 
  Users, 
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Plus,
  Calendar,
  BookOpen,
  Download,
  Upload
} from 'lucide-react';

const TeacherAssignmentManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('Active Assignments');
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Assignment statistics
  const stats = [
    {
      title: 'Total Assignments',
      value: '8',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Need Grading',
      value: '3',
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'Avg Completion',
      value: '85%',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Avg Score',
      value: '87',
      icon: BookOpen,
      color: 'purple'
    }
  ];

  // Assignment data
  const assignments = {
    'Active Assignments': [
      {
        id: 1,
        title: 'Quadratic Equations Practice',
        subject: 'Mathematics',
        class: 'Grade 10A',
        dueDate: '15 Dec 2024 4:10',
        description: 'Complete exercises 1-10 from Chapter 4',
        progress: 45,
        totalStudents: 28,
        submitted: 12,
        status: 'active'
      },
      {
        id: 2,
        title: "Newton's Laws Assignment",
        subject: 'Physics',
        class: 'Grade 11B',
        dueDate: '18 Dec 2024 4:10',
        description: 'Solve numerical problems on Newton\'s three laws of motion',
        progress: 30,
        totalStudents: 25,
        submitted: 8,
        status: 'active'
      }
    ],
    'Needs Grading': [
      {
        id: 3,
        title: 'Chemical Bonding Test',
        subject: 'Chemistry',
        class: 'Grade 11A',
        dueDate: '12 Dec 2024 4:10',
        description: 'Unit test on ionic and covalent bonding',
        progress: 100,
        totalStudents: 30,
        submitted: 30,
        status: 'grading'
      }
    ],
    'Completed': [
      {
        id: 4,
        title: 'Trigonometry Quiz',
        subject: 'Mathematics',
        class: 'Grade 10A',
        dueDate: '10 Dec 2024 4:10',
        description: 'Quiz on basic trigonometric ratios',
        progress: 100,
        totalStudents: 28,
        submitted: 28,
        status: 'completed'
      }
    ]
  };

  // Sample submission data for the modal
  const submissionData = {
    totalSubmissions: 18,
    pendingSubmissions: 10,
    completionRate: 64,
    submissions: [
      {
        id: 1,
        studentName: 'Priya Sharma',
        rollNo: 'A001',
        submittedAt: '2024-12-13 10:30 AM',
        status: 'submitted',
        score: null
      },
      {
        id: 2,
        studentName: 'Rahul Kumar',
        rollNo: 'A002',
        submittedAt: '2024-12-13 02:15 PM',
        status: 'submitted',
        score: null
      },
      {
        id: 3,
        studentName: 'Sneha Verma',
        rollNo: 'A003',
        submittedAt: '2024-12-12 11:45 AM',
        status: 'submitted',
        score: null
      },
      {
        id: 4,
        studentName: 'Arjun Patel',
        rollNo: 'A004',
        submittedAt: '2024-12-13 04:20 PM',
        status: 'pending',
        score: null
      }
    ]
  };

  const tabs = ['Active Assignments', 'Needs Grading', 'Completed'];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600' },
      purple: { iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
      orange: { iconBg: 'bg-orange-100', iconColor: 'text-orange-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-700';
      case 'grading':
        return 'bg-orange-100 text-orange-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleViewSubmissions = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmissionModal(true);
  };

  const closeSubmissionModal = () => {
    setShowSubmissionModal(false);
    setSelectedAssignment(null);
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="assignments" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Assignment Management
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Manage and track student assignments
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <Plus size={20} />
              Create Assignment
            </button>
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
                  <div className="flex justify-between items-start">
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
                </div>
              );
            })}
          </div>

          {/* Assignment Tabs and Content */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : `border-transparent ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Assignment Cards */}
            <div className="space-y-4">
              {assignments[activeTab]?.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`p-6 rounded-xl border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {assignment.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                          {assignment.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm mb-2">
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          📚 {assignment.subject}
                        </span>
                        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          👥 {assignment.class}
                        </span>
                        <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Calendar size={12} />
                          📅 Due {assignment.dueDate}
                        </span>
                      </div>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {assignment.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Progress
                      </span>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {assignment.submitted}/{assignment.totalStudents} ({assignment.progress}%)
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${assignment.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Users size={12} />
                        {assignment.totalStudents} students
                      </span>
                      <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <CheckCircle size={12} />
                        {assignment.submitted} submitted
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleViewSubmissions(assignment)}
                        className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-1"
                      >
                        <Eye size={14} />
                        View Submissions
                      </button>
                      <button className="text-gray-500 hover:text-gray-600 text-sm font-medium transition-colors flex items-center gap-1">
                        <Edit size={14} />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Submission Modal */}
      {showSubmissionModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[80vh] overflow-hidden rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="text-left">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedAssignment.title}
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedAssignment.subject} • Grade 10A
                </p>
              </div>
              <button 
                onClick={closeSubmissionModal}
                className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-gray-300' : ''}`}
              >
                <XCircle size={24} />
              </button>
            </div>

            {/* Modal Stats */}
            <div className="p-6 border-b border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold text-blue-600`}>
                    {submissionData.totalSubmissions}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total
                  </div>
                </div>
                <div>
                  <div className={`text-2xl font-bold text-orange-600`}>
                    {submissionData.pendingSubmissions}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pending
                  </div>
                </div>
                <div>
                  <div className={`text-2xl font-bold text-green-600`}>
                    {submissionData.completionRate}%
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Avg Completion
                  </div>
                </div>
              </div>
            </div>

            {/* Student Submission Header */}
            <div className="p-4 border-b border-gray-200">
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Student Submission
              </h3>
            </div>

            {/* Submissions List */}
            <div className="max-h-96 overflow-y-auto">
              {submissionData.submissions.map((submission) => (
                <div 
                  key={submission.id} 
                  className={`flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 ${
                    isDarkMode ? 'hover:bg-slate-700 border-slate-600' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      submission.status === 'submitted' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {submission.studentName.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {submission.studentName}
                      </div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {submission.rollNo} • {submission.submittedAt}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      submission.status === 'submitted' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {submission.status === 'submitted' ? 'Submitted' : 'Pending'}
                    </span>
                    {submission.status === 'submitted' && (
                      <button className="text-blue-500 hover:text-blue-600 text-xs font-medium px-2 py-1 border border-blue-300 rounded">
                        View/Grade
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherAssignmentManagement;