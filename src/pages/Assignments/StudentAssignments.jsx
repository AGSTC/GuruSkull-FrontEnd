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
  Search
} from 'lucide-react';

const StudentAssignments = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [assignmentResponse, setAssignmentResponse] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Sample assignments data
  const assignments = [
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
      type: 'Problem Set'
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
      type: 'Lab Report'
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
      type: 'Assignment'
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
      type: 'Assignment'
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
      type: 'Assignment'
    }
  ];

  const quickStats = [
    { label: 'Due This Week', value: '3', color: 'orange' },
    { label: 'Overdue', value: '2', color: 'red' },
    { label: 'Completed', value: '1', color: 'green' },
    { label: 'Average Score', value: '85%', color: 'blue' }
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

  const handleCloseModal = () => {
    setShowSubmitModal(false);
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
    if (canSubmit) {
      // Here you would normally send the data to your backend
      console.log('Submitting assignment:', {
        assignmentId: selectedAssignment.id,
        response: assignmentResponse,
        files: attachedFiles
      });
      
      // Close modal and reset state
      handleCloseModal();
      
      // You might want to update the assignment status in your state/backend
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
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Assignments
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                View and submit your assignments
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Due This Week: 
              </span>
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-sm font-medium">
                3
              </span>
              <span className={`text-sm ml-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Completed: 
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                2
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            
            {/* Sidebar Filter */}
            <div className="xl:col-span-1">
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Filter Assignments
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <select className={`w-full px-3 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}>
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Biology</option>
                      <option>English</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Status
                    </label>
                    <select className={`w-full px-3 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}>
                      <option>All Status</option>
                      <option>Pending</option>
                      <option>Overdue</option>
                      <option>Submitted</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Due Date
                    </label>
                    <select className={`w-full px-3 py-2 rounded-lg border text-sm ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}>
                      <option>All Dates</option>
                      <option>This Week</option>
                      <option>Next Week</option>
                      <option>Overdue</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className={`mt-6 p-6 rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </span>
                      <span className={`font-semibold ${
                        stat.color === 'red' ? 'text-red-600' :
                        stat.color === 'green' ? 'text-green-600' :
                        stat.color === 'orange' ? 'text-orange-600' :
                        'text-blue-600'
                      }`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assignments List */}
            <div className="xl:col-span-3">
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className={`p-6 rounded-2xl border ${
                    isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
                  }`}>
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {assignment.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                            {assignment.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm mb-3">
                          <div className="flex items-center gap-2">
                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {assignment.subject}
                            </span>
                            <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>•</span>
                            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {assignment.teacher}
                            </span>
                          </div>
                        </div>

                        <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {assignment.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Assigned: {assignment.assignedDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Due: {assignment.dueDate}
                          </span>
                        </div>
                        <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {assignment.type}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {assignment.status === 'submitted' ? (
                          <button
                            disabled
                            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium text-sm cursor-not-allowed"
                          >
                            ✓ Submitted
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSubmitClick(assignment)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
                          >
                            Submit Assignment
                          </button>
                        )}
                        
                        <button className={`p-2 rounded-lg border ${
                          isDarkMode 
                            ? 'border-slate-600 text-gray-400 hover:bg-slate-700' 
                            : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                        }`}>
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />

      {/* Submit Assignment Modal */}
      {showSubmitModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Submit Assignment
                </h2>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedAssignment.title}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className={`p-2 rounded-lg hover:bg-gray-100 ${isDarkMode ? 'text-gray-400 hover:bg-slate-700' : 'text-gray-600'}`}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              
              {/* Assignment Details */}
              <div className="mb-6">
                <div className="flex items-center gap-4 text-sm mb-3">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedAssignment.subject} • {selectedAssignment.teacher}
                  </span>
                  <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>•</span>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Due: {selectedAssignment.dueDate}
                  </span>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedAssignment.description}
                </p>
              </div>

              {/* Assignment Response */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Assignment Response
                </label>
                <textarea
                  value={assignmentResponse}
                  onChange={(e) => setAssignmentResponse(e.target.value)}
                  placeholder="Write your response here..."
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border resize-none ${
                    isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Attach Files
                </label>
                
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
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
                  
                  <Upload size={32} className={`mx-auto mb-3 ${
                    dragActive ? 'text-blue-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  
                  <p className={`text-sm font-medium mb-1 ${
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
                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Attached Files
                  </label>
                  <div className="space-y-2">
                    {attachedFiles.map((file) => (
                      <div key={file.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                        isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Paperclip size={16} className="text-blue-600" />
                          </div>
                          <div>
                            <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
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
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCloseModal}
                  className={`px-4 py-2 rounded-lg font-medium ${
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
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
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