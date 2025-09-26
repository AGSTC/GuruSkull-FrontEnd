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
  Upload,
  Save,
  Star
} from 'lucide-react';

const TeacherAssignmentManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('Active Assignments');
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Form states
  const [createForm, setCreateForm] = useState({
    title: '',
    subject: '',
    class: '',
    dueDate: '',
    description: '',
    maxMarks: '',
    instructions: ''
  });

  const [editForm, setEditForm] = useState({
    id: null,
    title: '',
    subject: '',
    class: '',
    dueDate: '',
    description: '',
    maxMarks: '',
    instructions: ''
  });

  const [gradeForm, setGradeForm] = useState({
    marks: '',
    feedback: ''
  });

  // Assignment data state
  const [assignments, setAssignments] = useState({
    'Active Assignments': [
      {
        id: 1,
        title: 'Quadratic Equations Practice',
        subject: 'Mathematics',
        class: 'Grade 10A',
        dueDate: '2024-12-15T16:10',
        description: 'Complete exercises 1-10 from Chapter 4',
        progress: 45,
        totalStudents: 28,
        submitted: 12,
        status: 'active',
        maxMarks: 50,
        instructions: 'Show all working steps clearly'
      },
      {
        id: 2,
        title: "Newton's Laws Assignment",
        subject: 'Physics',
        class: 'Grade 11B',
        dueDate: '2024-12-18T16:10',
        description: 'Solve numerical problems on Newton\'s three laws of motion',
        progress: 30,
        totalStudents: 25,
        submitted: 8,
        status: 'active',
        maxMarks: 40,
        instructions: 'Use proper units and diagrams where necessary'
      }
    ],
    'Needs Grading': [
      {
        id: 3,
        title: 'Chemical Bonding Test',
        subject: 'Chemistry',
        class: 'Grade 11A',
        dueDate: '2024-12-12T16:10',
        description: 'Unit test on ionic and covalent bonding',
        progress: 100,
        totalStudents: 30,
        submitted: 30,
        status: 'grading',
        maxMarks: 60,
        instructions: 'Draw Lewis structures where applicable'
      }
    ],
    'Completed': [
      {
        id: 4,
        title: 'Trigonometry Quiz',
        subject: 'Mathematics',
        class: 'Grade 10A',
        dueDate: '2024-12-10T16:10',
        description: 'Quiz on basic trigonometric ratios',
        progress: 100,
        totalStudents: 28,
        submitted: 28,
        status: 'completed',
        maxMarks: 30,
        instructions: 'Use calculator for final answers'
      }
    ]
  });

  // Sample submission data for the modal
  const [submissionData, setSubmissionData] = useState({
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
        score: 45,
        maxScore: 50,
        graded: true,
        submissionContent: 'Student has completed all questions with proper working. Good understanding of concepts shown.',
        feedback: 'Excellent work! Keep it up.'
      },
      {
        id: 2,
        studentName: 'Rahul Kumar',
        rollNo: 'A002',
        submittedAt: '2024-12-13 02:15 PM',
        status: 'submitted',
        score: null,
        maxScore: 50,
        graded: false,
        submissionContent: 'Assignment submitted on time. All questions attempted.',
        feedback: ''
      },
      {
        id: 3,
        studentName: 'Sneha Verma',
        rollNo: 'A003',
        submittedAt: '2024-12-12 11:45 AM',
        status: 'submitted',
        score: 42,
        maxScore: 50,
        graded: true,
        submissionContent: 'Good attempt with minor calculation errors in question 3.',
        feedback: 'Good work, but check your calculations in problem 3.'
      },
      {
        id: 4,
        studentName: 'Arjun Patel',
        rollNo: 'A004',
        submittedAt: null,
        status: 'pending',
        score: null,
        maxScore: 50,
        graded: false,
        submissionContent: '',
        feedback: ''
      }
    ]
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Assignment statistics
  const stats = [
    {
      title: 'Total Assignments',
      value: Object.values(assignments).flat().length.toString(),
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Need Grading',
      value: assignments['Needs Grading'].length.toString(),
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const handleViewSubmissions = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmissionModal(true);
  };

  const handleCreateAssignment = () => {
    setShowCreateModal(true);
  };

  const handleEditAssignment = (assignment) => {
    setEditForm({
      id: assignment.id,
      title: assignment.title,
      subject: assignment.subject,
      class: assignment.class,
      dueDate: assignment.dueDate,
      description: assignment.description,
      maxMarks: assignment.maxMarks?.toString() || '',
      instructions: assignment.instructions || ''
    });
    setSelectedAssignment(assignment);
    setShowEditModal(true);
  };

  const handleGradeStudent = (student) => {
    setSelectedStudent(student);
    setGradeForm({
      marks: student.score?.toString() || '',
      feedback: student.feedback || ''
    });
    setShowGradeModal(true);
  };

  const handleViewSubmission = (student) => {
    setSelectedStudent(student);
    setShowViewModal(true);
  };

  const closeAllModals = () => {
    setShowSubmissionModal(false);
    setShowCreateModal(false);
    setShowEditModal(false);
    setShowGradeModal(false);
    setShowViewModal(false);
    setSelectedAssignment(null);
    setSelectedStudent(null);
    setCreateForm({
      title: '',
      subject: '',
      class: '',
      dueDate: '',
      description: '',
      maxMarks: '',
      instructions: ''
    });
    setEditForm({
      id: null,
      title: '',
      subject: '',
      class: '',
      dueDate: '',
      description: '',
      maxMarks: '',
      instructions: ''
    });
    setGradeForm({
      marks: '',
      feedback: ''
    });
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: Date.now(),
      title: createForm.title,
      subject: createForm.subject,
      class: createForm.class,
      dueDate: createForm.dueDate,
      description: createForm.description,
      progress: 0,
      totalStudents: 25,
      submitted: 0,
      status: 'active',
      maxMarks: parseInt(createForm.maxMarks),
      instructions: createForm.instructions
    };

    setAssignments(prev => ({
      ...prev,
      'Active Assignments': [...prev['Active Assignments'], newAssignment]
    }));

    closeAllModals();
    alert('Assignment created successfully!');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedAssignment = {
      ...selectedAssignment,
      title: editForm.title,
      subject: editForm.subject,
      class: editForm.class,
      dueDate: editForm.dueDate,
      description: editForm.description,
      maxMarks: parseInt(editForm.maxMarks),
      instructions: editForm.instructions
    };

    setAssignments(prev => {
      const newAssignments = { ...prev };
      // Find which category the assignment belongs to
      Object.keys(newAssignments).forEach(category => {
        const index = newAssignments[category].findIndex(a => a.id === editForm.id);
        if (index !== -1) {
          newAssignments[category][index] = updatedAssignment;
        }
      });
      return newAssignments;
    });

    closeAllModals();
    alert('Assignment updated successfully!');
  };

  const handleGradeSubmit = (e) => {
    e.preventDefault();
    // Update the submission data
    setSubmissionData(prev => ({
      ...prev,
      submissions: prev.submissions.map(sub => 
        sub.id === selectedStudent.id 
          ? { 
              ...sub, 
              score: parseInt(gradeForm.marks), 
              graded: true, 
              feedback: gradeForm.feedback 
            }
          : sub
      )
    }));

    closeAllModals();
    alert('Grade submitted successfully!');
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
            <button 
              onClick={handleCreateAssignment}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
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
            <div className={`flex border-b mb-6 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
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
              {assignments[activeTab]?.length > 0 ? (
                assignments[activeTab].map((assignment) => (
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
                            📅 Due {formatDate(assignment.dueDate)}
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
                        <button 
                          onClick={() => handleEditAssignment(assignment)}
                          className="text-gray-500 hover:text-gray-600 text-sm font-medium transition-colors flex items-center gap-1"
                        >
                          <Edit size={14} />
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={`text-center py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FileText size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No assignments in this category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Create Assignment Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="text-left">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Create New Assignment
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fill in the details to create a new assignment
                </p>
              </div>
              <button 
                onClick={closeAllModals}
                className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-gray-300' : ''}`}
              >
                <XCircle size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="max-h-[70vh] overflow-y-auto">
              <form onSubmit={handleCreateSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Assignment Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={createForm.title}
                      onChange={(e) => setCreateForm({...createForm, title: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder="Enter assignment title"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject *
                    </label>
                    <select
                      required
                      value={createForm.subject}
                      onChange={(e) => setCreateForm({...createForm, subject: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select Subject</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="English">English</option>
                      <option value="History">History</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Class *
                    </label>
                    <select
                      required
                      value={createForm.class}
                      onChange={(e) => setCreateForm({...createForm, class: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select Class</option>
                      <option value="Grade 9A">Grade 9A</option>
                      <option value="Grade 9B">Grade 9B</option>
                      <option value="Grade 10A">Grade 10A</option>
                      <option value="Grade 10B">Grade 10B</option>
                      <option value="Grade 11A">Grade 11A</option>
                      <option value="Grade 11B">Grade 11B</option>
                      <option value="Grade 12A">Grade 12A</option>
                      <option value="Grade 12B">Grade 12B</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Due Date *
                    </label>
                    <input
                      type="datetime-local"
                      required
                      value={createForm.dueDate}
                      onChange={(e) => setCreateForm({...createForm, dueDate: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Max Marks *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={createForm.maxMarks}
                    onChange={(e) => setCreateForm({...createForm, maxMarks: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter maximum marks"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={createForm.description}
                    onChange={(e) => setCreateForm({...createForm, description: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter assignment description"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={createForm.instructions}
                    onChange={(e) => setCreateForm({...createForm, instructions: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter additional instructions for students"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeAllModals}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isDarkMode 
                        ? 'bg-slate-600 text-gray-300 hover:bg-slate-500' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Save size={16} />
                    Create Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Assignment Modal */}
      {showEditModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="text-left">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Edit Assignment
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Update assignment details
                </p>
              </div>
              <button 
                onClick={closeAllModals}
                className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-gray-300' : ''} transition-colors`}
              >
                <XCircle size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="max-h-[70vh] overflow-y-auto">
              <form onSubmit={handleEditSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Assignment Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editForm.title}
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder="Enter assignment title"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject *
                    </label>
                    <select
                      required
                      value={editForm.subject}
                      onChange={(e) => setEditForm({...editForm, subject: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select Subject</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="English">English</option>
                      <option value="History">History</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Class *
                    </label>
                    <select
                      required
                      value={editForm.class}
                      onChange={(e) => setEditForm({...editForm, class: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select Class</option>
                      <option value="Grade 9A">Grade 9A</option>
                      <option value="Grade 9B">Grade 9B</option>
                      <option value="Grade 10A">Grade 10A</option>
                      <option value="Grade 10B">Grade 10B</option>
                      <option value="Grade 11A">Grade 11A</option>
                      <option value="Grade 11B">Grade 11B</option>
                      <option value="Grade 12A">Grade 12A</option>
                      <option value="Grade 12B">Grade 12B</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Due Date *
                    </label>
                    <input
                      type="datetime-local"
                      required
                      value={editForm.dueDate}
                      onChange={(e) => setEditForm({...editForm, dueDate: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Max Marks *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={editForm.maxMarks}
                    onChange={(e) => setEditForm({...editForm, maxMarks: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter maximum marks"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={editForm.description}
                    onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter assignment description"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Instructions
                  </label>
                  <textarea
                    rows={3}
                    value={editForm.instructions}
                    onChange={(e) => setEditForm({...editForm, instructions: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Enter additional instructions for students"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeAllModals}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isDarkMode 
                        ? 'bg-slate-600 text-gray-300 hover:bg-slate-500' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Save size={16} />
                    Update Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Submission Modal */}
      {showSubmissionModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-4xl w-full max-h-[80vh] overflow-hidden rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="text-left">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedAssignment.title}
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedAssignment.subject} • {selectedAssignment.class}
                </p>
              </div>
              <button 
                onClick={closeAllModals}
                className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-gray-300' : ''} transition-colors`}
              >
                <XCircle size={24} />
              </button>
            </div>

            {/* Modal Stats */}
            <div className={`p-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold text-blue-600`}>
                    {submissionData.totalSubmissions}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Submissions
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
                    Completion Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Student Submission Header */}
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Student Submissions
              </h3>
            </div>

            {/* Submissions List */}
            <div className="max-h-96 overflow-y-auto">
              {submissionData.submissions.map((submission) => (
                <div 
                  key={submission.id} 
                  className={`flex items-center justify-between p-4 border-b transition-colors ${
                    isDarkMode 
                      ? 'border-slate-600 hover:bg-slate-700' 
                      : 'border-gray-100 hover:bg-gray-50'
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
                        {submission.rollNo} • {submission.submittedAt || 'Not submitted'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {submission.graded && submission.score !== null && (
                      <div className="text-right">
                        <div className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {submission.score}/{submission.maxScore}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-400 fill-yellow-400" />
                          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Graded
                          </span>
                        </div>
                      </div>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      submission.status === 'submitted' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {submission.status === 'submitted' ? 'Submitted' : 'Pending'}
                    </span>
                    {submission.status === 'submitted' && (
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleViewSubmission(submission)}
                          className="text-blue-500 hover:text-blue-600 text-xs font-medium px-2 py-1 border border-blue-300 rounded transition-colors"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => handleGradeStudent(submission)}
                          className="text-green-500 hover:text-green-600 text-xs font-medium px-2 py-1 border border-green-300 rounded transition-colors"
                        >
                          {submission.graded ? 'Edit Grade' : 'Grade'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* View Submission Modal */}
      {showViewModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-3xl w-full max-h-[80vh] overflow-hidden rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="text-left">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  View Submission
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedStudent.studentName} ({selectedStudent.rollNo})
                </p>
              </div>
              <button 
                onClick={closeAllModals}
                className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-gray-300' : ''} transition-colors`}
              >
                <XCircle size={24} />
              </button>
            </div>

            {/* Submission Details */}
            <div className="max-h-[60vh] overflow-y-auto p-6">
              <div className="space-y-4">
                <div>
                  <h3 className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Submission Status
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedStudent.status === 'submitted' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {selectedStudent.status === 'submitted' ? 'Submitted' : 'Pending'}
                  </span>
                </div>

                {selectedStudent.submittedAt && (
                  <div>
                    <h3 className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Submitted At
                    </h3>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedStudent.submittedAt}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Submission Content
                  </h3>
                  <div className={`p-4 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedStudent.submissionContent || 'No content available'}
                    </p>
                  </div>
                </div>

                {selectedStudent.graded && (
                  <div>
                    <h3 className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Grade & Feedback
                    </h3>
                    <div className={`p-4 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Score: {selectedStudent.score}/{selectedStudent.maxScore}
                        </span>
                      </div>
                      {selectedStudent.feedback && (
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Feedback: {selectedStudent.feedback}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`p-6 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeAllModals}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-600 text-gray-300 hover:bg-slate-500' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Close
                </button>
                {selectedStudent.status === 'submitted' && (
                  <button
                    onClick={() => {
                      setShowViewModal(false);
                      handleGradeStudent(selectedStudent);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Star size={16} />
                    {selectedStudent.graded ? 'Edit Grade' : 'Grade'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grade Modal */}
      {showGradeModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
              <div className="text-left">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Grade Student
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedStudent.studentName} ({selectedStudent.rollNo})
                </p>
              </div>
              <button 
                onClick={closeAllModals}
                className={`text-gray-500 hover:text-gray-700 ${isDarkMode ? 'hover:text-gray-300' : ''} transition-colors`}
              >
                <XCircle size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleGradeSubmit} className="p-6 space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Marks (out of {selectedStudent.maxScore}) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  max={selectedStudent.maxScore}
                  value={gradeForm.marks}
                  onChange={(e) => setGradeForm({...gradeForm, marks: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder={`Enter marks (0-${selectedStudent.maxScore})`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Feedback (Optional)
                </label>
                <textarea
                  rows={4}
                  value={gradeForm.feedback}
                  onChange={(e) => setGradeForm({...gradeForm, feedback: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter feedback for the student (optional)"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeAllModals}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-600 text-gray-300 hover:bg-slate-500' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                >
                  <Star size={16} />
                  {selectedStudent.graded ? 'Update Grade' : 'Submit Grade'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherAssignmentManagement;