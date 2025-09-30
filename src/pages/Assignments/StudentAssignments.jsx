import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Calendar,
  Clock,
  FileText,
  Upload,
  X,
  Paperclip,
  CheckCircle,
  AlertCircle,
  Filter,
  Search,
  User,
  BookOpen,
  Award
} from 'lucide-react';

const StudentAssignments = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [assignmentResponse, setAssignmentResponse] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  
  // Filter states
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedDueDate, setSelectedDueDate] = useState('All Dates');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Sample assignments data
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: 'Calculus Problem Set - Chapter 3',
      subject: 'Mathematics',
      teacher: 'Mr Teaching',
      dueDate: 'Jul 15, 2024',
      assignedDate: 'Jun 30, 2024',
      status: 'overdue',
      description: 'Solve problems 1-15 from Chapter 3: Integration by Parts. Show all working steps and provide detailed explanations for each solution.',
      points: 100,
      type: 'Problem Set',
      instructions: 'Complete all 15 problems from Chapter 3. Show detailed working for each problem. You may use calculator for numerical computations but show the integration steps clearly.',
      submissionFormat: 'PDF document with handwritten solutions or typed LaTeX document',
      resources: ['Textbook Chapter 3', 'Online Integration Calculator', 'Class Notes from Week 5']
    },
    {
      id: 2,
      title: 'Organic Chemistry Lab Report',
      subject: 'Chemistry',
      teacher: 'Dr Science',
      dueDate: 'Jan 25, 2024',
      assignedDate: 'Jan 10, 2024',
      status: 'overdue',
      description: 'Complete lab report on the synthesis of aspirin experiment conducted on January 10th. Include hypothesis, methodology, results, and conclusion.',
      points: 75,
      type: 'Lab Report',
      instructions: 'Write a comprehensive lab report following the standard format. Include all observations, calculations, and analysis of results.',
      submissionFormat: 'Word document or PDF, minimum 1000 words',
      resources: ['Lab Manual Section 4', 'Aspirin Synthesis Reference Paper', 'Lab Safety Guidelines']
    },
    {
      id: 3,
      title: 'Wave Motion Assignment',
      subject: 'Physics',
      teacher: 'Mr Science',
      dueDate: 'Jan 27, 2024',
      assignedDate: 'Jan 8, 2024',
      status: 'pending',
      description: 'Theoretical problems and problems on Wave Mechanics, Electromagnetic waves and Wave Optics.',
      points: 50,
      type: 'Assignment',
      instructions: 'Solve all theoretical problems. For wave optics, include diagrams where necessary. Show all mathematical derivations.',
      submissionFormat: 'Handwritten or typed solutions',
      resources: ['Physics Textbook Chapter 15-17', 'Wave Simulation Software', 'Previous Year Solutions']
    },
    {
      id: 4,
      title: 'Cell Biology Essay',
      subject: 'Biology',
      teacher: 'Dr Science',
      dueDate: 'Jan 27, 2024',
      assignedDate: 'Jan 5, 2024',
      status: 'overdue',
      description: 'Write a 1500-word essay on the role of mitochondria in cellular respiration, referencing recent research and peer-reviewed sources.',
      points: 100,
      type: 'Assignment',
      instructions: 'Essay should be well-structured with introduction, body, and conclusion. Use APA citation format. Minimum 10 references required.',
      submissionFormat: 'Word document, double-spaced, 12pt Times New Roman',
      resources: ['Biology Textbook Chapter 9', 'PubMed Database', 'Sample Research Papers']
    },
    {
      id: 5,
      title: 'English Literature Analysis',
      subject: 'English',
      teacher: 'Ms English',
      dueDate: 'Jan 27, 2024',
      assignedDate: 'Jan 8, 2024',
      status: 'submitted',
      description: 'Critical analysis of themes in Shakespeare\'s Hamlet, focusing on revenge and mortality.',
      points: 85,
      type: 'Assignment',
      instructions: 'Analyze the themes using specific quotes from the text. Compare with other works if relevant. Follow MLA citation format.',
      submissionFormat: 'Essay format, 1200-1500 words',
      resources: ['Hamlet Text', 'Literary Criticism Database', 'MLA Style Guide']
    }
  ]);

  // Get unique subjects for filter dropdown
  const subjects = ['All Subjects', ...new Set(assignments.map(a => a.subject))];
  const statuses = ['All Status', 'pending', 'overdue', 'submitted'];
  const dueDateOptions = ['All Dates', 'This Week', 'Next Week', 'Overdue'];

  // Filter assignments based on selected filters
  const filteredAssignments = assignments.filter(assignment => {
    const subjectMatch = selectedSubject === 'All Subjects' || assignment.subject === selectedSubject;
    const statusMatch = selectedStatus === 'All Status' || assignment.status === selectedStatus;
    
    let dueDateMatch = true;
    if (selectedDueDate !== 'All Dates') {
      const today = new Date();
      const dueDate = new Date(assignment.dueDate);
      const daysDiff = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
      
      switch (selectedDueDate) {
        case 'This Week':
          dueDateMatch = daysDiff <= 7 && daysDiff >= 0;
          break;
        case 'Next Week':
          dueDateMatch = daysDiff > 7 && daysDiff <= 14;
          break;
        case 'Overdue':
          dueDateMatch = assignment.status === 'overdue';
          break;
        default:
          dueDateMatch = true;
      }
    }
    
    return subjectMatch && statusMatch && dueDateMatch;
  });

  // Calculate quick stats based on filtered assignments
  const quickStats = [
    { 
      label: 'Due This Week', 
      value: assignments.filter(a => {
        const today = new Date();
        const dueDate = new Date(a.dueDate);
        const daysDiff = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
        return daysDiff <= 7 && daysDiff >= 0;
      }).length.toString(), 
      color: 'orange' 
    },
    { 
      label: 'Overdue', 
      value: assignments.filter(a => a.status === 'overdue').length.toString(), 
      color: 'red' 
    },
    { 
      label: 'Completed', 
      value: assignments.filter(a => a.status === 'submitted').length.toString(), 
      color: 'green' 
    },
    { 
      label: 'Average Score', 
      value: '85%', 
      color: 'blue' 
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted':
        return 'bg-green-100 text-green-700';
      case 'overdue':
        return 'bg-red-100 text-red-700';
      case 'pending':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'submitted':
        return <CheckCircle size={16} className="text-green-600" />;
      case 'overdue':
        return <AlertCircle size={16} className="text-red-600" />;
      case 'pending':
        return <Clock size={16} className="text-orange-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  const handleSubmitClick = (assignment) => {
    if (assignment.status !== 'submitted') {
      setSelectedAssignment(assignment);
      setShowSubmitModal(true);
    }
  };

  const handleDetailsClick = (assignment) => {
    setSelectedAssignment(assignment);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowSubmitModal(false);
    setShowDetailsModal(false);
    setSelectedAssignment(null);
    setAssignmentResponse('');
    setAttachedFiles([]);
    setDragActive(false);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newFiles = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));
    setAttachedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setAttachedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const canSubmit = assignmentResponse.trim().length > 0 || attachedFiles.length > 0;

  const handleSubmitAssignment = () => {
    if (canSubmit && selectedAssignment) {
      // Update the assignment status to 'submitted'
      setAssignments(prevAssignments =>
        prevAssignments.map(assignment =>
          assignment.id === selectedAssignment.id
            ? { ...assignment, status: 'submitted' }
            : assignment
        )
      );
      
      // Close modal and reset state
      handleCloseModal();
      
      // Show success message
      alert('Assignment submitted successfully!');
    }
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="assignments" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'lg:ml-64' : 'lg:ml-16'
      }`}>
        <div className="w-full h-full px-4 sm:px-6 py-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="text-left">
              <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Assignments
              </h1>
              <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                View and submit your assignments
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Due This Week: 
                </span>
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                  {quickStats[0].value}
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Completed: 
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  {quickStats[2].value}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Sidebar Filter */}
            <div className="xl:col-span-1">
              <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-base sm:text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Filter Assignments
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <select 
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Status
                    </label>
                    <select 
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      {statuses.map(status => (
                        <option key={status} value={status}>
                          {status === 'All Status' ? status : status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs sm:text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Due Date
                    </label>
                    <select 
                      value={selectedDueDate}
                      onChange={(e) => setSelectedDueDate(e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                          ? 'bg-slate-700 border-slate-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      {dueDateOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className={`mt-4 sm:mt-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-base sm:text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {quickStats.map((stat, index) => (
                    <div key={index} className={`p-3 rounded-lg ${
                      isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                    }`}>
                      <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                      <div className={`text-lg sm:text-xl font-bold mt-1 ${
                        stat.color === 'red' ? 'text-red-600' :
                        stat.color === 'green' ? 'text-green-600' :
                        stat.color === 'orange' ? 'text-orange-600' :
                        'text-blue-600'
                      }`}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assignments List */}
            <div className="xl:col-span-3">
              <div className="space-y-4">
                {filteredAssignments.length > 0 ? (
                  filteredAssignments.map((assignment) => (
                    <div key={assignment.id} className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${
                      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                    }`}>
                      
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className={`text-base sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {assignment.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)} self-start sm:self-auto`}>
                              {assignment.status}
                            </span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm mb-3">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {assignment.subject}
                              </span>
                              <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>•</span>
                              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {assignment.teacher}
                              </span>
                            </div>
                          </div>

                          <p className={`text-xs sm:text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} line-clamp-2`}>
                            {assignment.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Assigned: {assignment.assignedDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Due: {assignment.dueDate}
                            </span>
                          </div>
                          <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {assignment.type}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 sm:gap-3">
                          {assignment.status === 'submitted' ? (
                            <button
                              disabled
                              className="px-3 sm:px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium text-xs sm:text-sm cursor-not-allowed"
                            >
                              ✓ Submitted
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmitClick(assignment)}
                              className="px-3 sm:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-xs sm:text-sm"
                            >
                              Submit
                            </button>
                          )}
                          
                          <button 
                            onClick={() => handleDetailsClick(assignment)}
                            className={`p-2 rounded-lg border text-xs sm:text-sm ${
                              isDarkMode 
                                ? 'border-slate-600 text-gray-400 hover:bg-slate-700' 
                                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={`text-center py-8 sm:py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <FileText size={32} className="sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm sm:text-base font-medium mb-2">No assignments found</p>
                    <p className="text-xs sm:text-sm">Try adjusting your filter criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />

      {/* Assignment Details Modal */}
      {showDetailsModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-4 sm:p-6 border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
              <div className="text-left">
                <h2 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Assignment Details
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedAssignment.status)}`}>
                    {selectedAssignment.status}
                  </span>
                  <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedAssignment.points} Points
                  </span>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className={`p-2 rounded-lg hover:bg-gray-100 ${isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'}`}
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              
              {/* Basic Information */}
              <div>
                <h3 className={`text-base sm:text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedAssignment.title}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <div>
                      <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Subject
                      </p>
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {selectedAssignment.subject}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <User size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <div>
                      <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Teacher
                      </p>
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {selectedAssignment.teacher}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <div>
                      <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Assigned Date
                      </p>
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {selectedAssignment.assignedDate}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <div>
                      <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Due Date
                      </p>
                      <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {selectedAssignment.dueDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className={`text-sm sm:text-md font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Description
                </h4>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedAssignment.description}
                </p>
              </div>

              {/* Instructions */}
              <div>
                <h4 className={`text-sm sm:text-md font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Instructions
                </h4>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedAssignment.instructions}
                </p>
              </div>

              {/* Submission Format */}
              <div>
                <h4 className={`text-sm sm:text-md font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Submission Format
                </h4>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedAssignment.submissionFormat}
                </p>
              </div>

              {/* Resources */}
              <div>
                <h4 className={`text-sm sm:text-md font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Resources
                </h4>
                <div className="space-y-2">
                  {selectedAssignment.resources?.map((resource, index) => (
                    <div key={index} className={`flex items-center gap-2 text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {resource}
                    </div>
                  ))}
                </div>
              </div>

              {/* Assignment Type and Points */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Type: {selectedAssignment.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Points: {selectedAssignment.points}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 p-4 sm:p-6 border-t border-gray-200">
              <button
                onClick={handleCloseModal}
                className={`px-4 py-2 rounded-lg font-medium text-sm w-full sm:w-auto ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-slate-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Close
              </button>
              {selectedAssignment.status !== 'submitted' && (
                <button
                  onClick={() => {
                    setShowDetailsModal(false);
                    handleSubmitClick(selectedAssignment);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm w-full sm:w-auto"
                >
                  Submit Assignment
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Submit Assignment Modal */}
      {showSubmitModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-4 sm:p-6 border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
              <div className="text-left">
                <h2 className={`text-lg sm:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Submit Assignment
                </h2>
                <p className={`text-xs sm:text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedAssignment.title}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className={`p-2 rounded-lg hover:bg-gray-100 ${isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'}`}
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              
              {/* Assignment Details */}
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm mb-3">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedAssignment.subject} • {selectedAssignment.teacher}
                  </span>
                  <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>•</span>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Due: {selectedAssignment.dueDate}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedAssignment.description}
                </p>
              </div>

              {/* Assignment Response */}
              <div className="mb-4 sm:mb-6">
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Assignment Response
                </label>
                <textarea
                  value={assignmentResponse}
                  onChange={(e) => setAssignmentResponse(e.target.value)}
                  placeholder="Write your response here..."
                  rows={6}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border resize-none text-sm ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* File Upload */}
              <div className="mb-4 sm:mb-6">
                <label className={`block text-xs sm:text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Attach Files
                </label>
                
                <div
                  className={`relative border-2 border-dashed rounded-lg p-4 sm:p-8 text-center transition-colors ${
                    dragActive
                      ? 'border-blue-500 bg-blue-50'
                      : isDarkMode
                        ? 'border-slate-600 hover:border-slate-500'
                        : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    multiple
                    onChange={handleFileInputChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  <Upload size={24} className={`sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${
                    dragActive ? 'text-blue-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  
                  <p className={`text-xs sm:text-sm font-medium mb-1 ${
                    dragActive ? 'text-blue-600' : isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Click to upload files
                  </p>
                  <p className={`text-xs ${
                    dragActive ? 'text-blue-500' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    PDF, DOC, JPG, Images, more other files
                  </p>
                </div>
              </div>

              {/* Attached Files */}
              {attachedFiles.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <label className={`block text-xs sm:text-sm font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Attached Files
                  </label>
                  <div className="space-y-2">
                    {attachedFiles.map((file) => (
                      <div key={file.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                        isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Paperclip size={14} className="text-blue-600" />
                          </div>
                          <div>
                            <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {file.name}
                            </p>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="p-1 text-red-500 hover:bg-red-50 rounded"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCloseModal}
                  className={`px-4 py-2 rounded-lg font-medium text-sm w-full sm:w-auto ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-slate-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitAssignment}
                  disabled={!canSubmit}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors w-full sm:w-auto ${
                    canSubmit
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAssignments;