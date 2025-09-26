import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import boyChild from '../../assets/images/student-profile.png';
import girlChild from '../../assets/images/girl.png';
import { ChevronLeft, ChevronRight, Calendar, X, Star, FileText, User, Calendar as CalendarIcon } from 'lucide-react';

const ParentAttendanceManagement = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedChild, setSelectedChild] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(8); // September = 8
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const openReportDetails = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const closeReportDetails = () => {
    setSelectedReport(null);
    setIsModalOpen(false);
  };

  // Children data with attendance
  const children = [
    {
      id: 1,
      name: 'Aarav Sharma',
      class: 'Class 10-A',
      image: boyChild,
      avatar: 'A',
      color: 'bg-blue-500',
      stats: {
        attendance: { value: '88%', color: 'green' },
        totalAttendance: { value: '91%', color: 'blue' },
        totalStudyTime: { value: '25h', color: 'purple' },
        nextClass: { value: '5', color: 'orange' }
      },
      attendanceCalendar: {
        September2025: {
          1: 'present',
          2: 'present',
          3: 'present',
          4: 'present',
          5: 'present',
          8: 'present',
          9: 'absent',
          10: 'present',
          11: 'present',
          12: 'present',
          15: 'present',
          16: 'present',
          17: 'late',
          18: 'present',
          19: 'present',
          22: 'present',
          23: 'present',
          24: 'present',
          25: 'present',
          26: 'present',
          29: 'present',
          30: 'present'
        }
      },
      subjects: [
        { name: 'Mathematics', attendance: 85, icon: 'M', color: 'bg-blue-100 text-blue-600' },
        { name: 'Physics', attendance: 90, icon: 'P', color: 'bg-green-100 text-green-600' },
        { name: 'Chemistry', attendance: 76, icon: 'C', color: 'bg-yellow-100 text-yellow-600' },
        { name: 'English', attendance: 91, icon: 'E', color: 'bg-purple-100 text-purple-600' }
      ],
      gradeDistribution: [
        { grade: 'A', count: 20, color: '#22c55e' },
        { grade: 'B', count: 15, color: '#3b82f6' },
        { grade: 'C', count: 8, color: '#f59e0b' },
        { grade: 'D', count: 3, color: '#ef4444' },
        { grade: 'F', count: 1, color: '#6b7280' }
      ],
      progressReports: [
        {
          id: 1,
          title: 'Mid Term Progress Report',
          teacher: 'Mrs. Smith',
          date: '20th Sep, 24',
          status: 'Good',
          statusColor: 'bg-blue-100 text-blue-700',
          comments: 'Aarav has shown excellent improvement in Mathematics and Science. Keep up the good work and focus more on English writing skills.',
          detailedComments: [
            {
              subject: 'Mathematics',
              grade: 'A',
              comment: 'Excellent problem-solving skills and consistent performance in algebra and geometry.',
              improvement: 'Work on time management during exams'
            },
            {
              subject: 'Science',
              grade: 'B+',
              comment: 'Good understanding of scientific concepts and active participation in lab sessions.',
              improvement: 'Improve report writing skills'
            },
            {
              subject: 'English',
              grade: 'B',
              comment: 'Good reading comprehension but needs improvement in creative writing.',
              improvement: 'Practice essay writing regularly'
            }
          ],
          overallPerformance: 'Shows consistent improvement across all subjects',
          recommendations: 'Encourage participation in science club and reading groups',
          nextReviewDate: '15th Oct, 2024'
        },
        {
          id: 2,
          title: 'Monthly Assignment - January',
          teacher: 'Ms. Johnson',
          date: '15th Jan, 24',
          status: 'Excellent',
          statusColor: 'bg-green-100 text-green-700',
          comments: 'Outstanding performance in all subjects. Aarav demonstrates strong analytical skills and consistent effort.',
          detailedComments: [
            {
              subject: 'Mathematics',
              grade: 'A+',
              comment: 'Perfect score in advanced calculus and exceptional logical reasoning.',
              improvement: 'Maintain current performance level'
            },
            {
              subject: 'Physics',
              grade: 'A',
              comment: 'Excellent practical skills and theoretical understanding.',
              improvement: 'Continue exploring advanced topics'
            }
          ],
          overallPerformance: 'Exceptional performance with perfect attendance',
          recommendations: 'Consider advanced placement courses for next semester',
          nextReviewDate: '15th Feb, 2024'
        },
        {
          id: 3,
          title: 'Physics Lab Report',
          teacher: 'Dr. Wilson',
          date: '8th Dec, 23',
          status: 'Good',
          statusColor: 'bg-blue-100 text-blue-700',
          comments: 'Good understanding of lab procedures. Needs to improve documentation and report writing skills.',
          detailedComments: [
            {
              subject: 'Physics Lab',
              grade: 'B+',
              comment: 'Accurate experimental setup and data collection.',
              improvement: 'Improve lab report documentation'
            }
          ],
          overallPerformance: 'Good practical skills but needs better documentation',
          recommendations: 'Practice writing detailed lab reports',
          nextReviewDate: '15th Jan, 2024'
        },
        {
          id: 4,
          title: 'Mid Term Progress Report',
          teacher: 'Mrs. Davis',
          date: '22nd Nov, 23',
          status: 'Excellent',
          statusColor: 'bg-green-100 text-green-700',
          comments: 'Exceptional work in Chemistry practicals. Shows great curiosity and engagement in experiments.',
          detailedComments: [
            {
              subject: 'Chemistry',
              grade: 'A+',
              comment: 'Outstanding performance in practical exams and theoretical knowledge.',
              improvement: 'None - maintain excellent work'
            }
          ],
          overallPerformance: 'Excellent performance with perfect scores',
          recommendations: 'Encourage participation in science olympiad',
          nextReviewDate: '15th Dec, 2023'
        }
      ]
    },
    {
      id: 2,
      name: 'Priya Sharma',
      class: 'Class 8-B',
      image: girlChild,
      avatar: 'P',
      color: 'bg-green-500',
      stats: {
        attendance: { value: '92%', color: 'green' },
        totalAttendance: { value: '89%', color: 'blue' },
        totalStudyTime: { value: '20h', color: 'purple' },
        nextClass: { value: '3', color: 'orange' }
      },
      attendanceCalendar: {
        September2025: {
          1: 'present',
          2: 'present',
          3: 'present',
          4: 'present',
          5: 'present',
          8: 'present',
          9: 'present',
          10: 'present',
          11: 'present',
          12: 'present',
          15: 'present',
          16: 'present',
          17: 'present',
          18: 'present',
          19: 'present',
          22: 'present',
          23: 'absent',
          24: 'present',
          25: 'present',
          26: 'present',
          29: 'present',
          30: 'present'
        }
      },
      subjects: [
        { name: 'Mathematics', attendance: 92, icon: 'M', color: 'bg-blue-100 text-blue-600' },
        { name: 'Science', attendance: 96, icon: 'S', color: 'bg-green-100 text-green-600' },
        { name: 'English', attendance: 90, icon: 'E', color: 'bg-purple-100 text-purple-600' },
        { name: 'Social Studies', attendance: 88, icon: 'S', color: 'bg-orange-100 text-orange-600' }
      ],
      gradeDistribution: [
        { grade: 'A', count: 25, color: '#22c55e' },
        { grade: 'B', count: 18, color: '#3b82f6' },
        { grade: 'C', count: 5, color: '#f59e0b' },
        { grade: 'D', count: 2, color: '#ef4444' },
        { grade: 'F', count: 0, color: '#6b7280' }
      ],
      progressReports: [
        {
          id: 1,
          title: 'Mid Term Progress Report',
          teacher: 'Mr. Patel',
          date: '18th Sep, 24',
          status: 'Excellent',
          statusColor: 'bg-green-100 text-green-700',
          comments: 'Priya shows exceptional dedication and consistent performance across all subjects. Her participation in class discussions is commendable.',
          detailedComments: [
            {
              subject: 'Mathematics',
              grade: 'A',
              comment: 'Excellent problem-solving skills and quick grasp of new concepts.',
              improvement: 'Work on advanced problems'
            },
            {
              subject: 'Science',
              grade: 'A+',
              comment: 'Outstanding performance in both theory and practicals.',
              improvement: 'Participate in science fairs'
            }
          ],
          overallPerformance: 'Consistently excellent performance in all areas',
          recommendations: 'Encourage leadership roles in group activities',
          nextReviewDate: '18th Oct, 2024'
        },
        {
          id: 2,
          title: 'Science Project Evaluation',
          teacher: 'Ms. Kumar',
          date: '10th Aug, 24',
          status: 'Good',
          statusColor: 'bg-blue-100 text-blue-700',
          comments: 'Creative approach to the science project. Shows good understanding of scientific concepts and methodology.',
          detailedComments: [
            {
              subject: 'Science Project',
              grade: 'A-',
              comment: 'Innovative project idea with good research methodology.',
              improvement: 'Improve presentation skills'
            }
          ],
          overallPerformance: 'Good project execution with creative thinking',
          recommendations: 'Continue exploring scientific research methods',
          nextReviewDate: '10th Sep, 2024'
        }
      ]
    }
  ];

  const currentChild = children[selectedChild];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const getAttendanceStatus = (day) => {
    const monthKey = `${monthNames[currentMonth]}${currentYear}`;
    return currentChild.attendanceCalendar[monthKey]?.[day] || null;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-500';
      case 'absent':
        return 'bg-red-500';
      case 'late':
        return 'bg-yellow-500';
      case 'holiday':
        return 'bg-blue-500';
      default:
        return '';
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const status = getAttendanceStatus(day);
      const isWeekend = new Date(currentYear, currentMonth, day).getDay() % 6 === 0;
      
      days.push(
        <div key={day} className="p-2 text-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mx-auto relative ${
            status ? getStatusColor(status) + ' text-white' : 
            isWeekend ? 'bg-gray-200 text-gray-500' : 
            isDarkMode ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } cursor-pointer transition-colors`}>
            {day}
          </div>
        </div>
      );
    }

    return days;
  };

  // Report Detail Modal Component
  const ReportDetailModal = () => {
    if (!selectedReport) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto ${
          isDarkMode ? 'bg-slate-800' : 'bg-white'
        }`}>
          {/* Modal Header */}
          <div className={`p-6 border-b ${
            isDarkMode ? 'border-slate-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedReport.title}
              </h2>
              <button
                onClick={closeReportDetails}
                className={`p-2 rounded-lg hover:bg-opacity-20 ${
                  isDarkMode ? 'hover:bg-white text-white' : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Teacher: <strong>{selectedReport.teacher}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Date: <strong>{selectedReport.date}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className={isDarkMode ? 'text-yellow-400' : 'text-yellow-500'} />
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedReport.statusColor}`}>
                  {selectedReport.status}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {/* Overall Comments */}
            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Overall Comments
              </h3>
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-slate-700' : 'bg-blue-50'
              }`}>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {selectedReport.comments}
                </p>
              </div>
            </div>

            {/* Subject-wise Performance */}
            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject-wise Performance
              </h3>
              <div className="space-y-4">
                {selectedReport.detailedComments.map((subject, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.subject}
                      </h4>
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        subject.grade.includes('A') ? 'bg-green-100 text-green-700' :
                        subject.grade.includes('B') ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        Grade: {subject.grade}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Strengths: 
                        </span>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {subject.comment}
                        </p>
                      </div>
                      <div>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Areas for Improvement: 
                        </span>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {subject.improvement}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Performance & Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Overall Performance
                </h3>
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-slate-700' : 'bg-green-50'
                }`}>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {selectedReport.overallPerformance}
                  </p>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recommendations
                </h3>
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-slate-700' : 'bg-purple-50'
                }`}>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {selectedReport.recommendations}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Review Date */}
            <div className={`mt-6 p-4 rounded-lg ${
              isDarkMode ? 'bg-slate-700' : 'bg-orange-50'
            }`}>
              <div className="flex items-center gap-2">
                <CalendarIcon size={18} className={isDarkMode ? 'text-orange-400' : 'text-orange-500'} />
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Next Review Date: {selectedReport.nextReviewDate}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className={`p-6 border-t ${
            isDarkMode ? 'border-slate-700' : 'border-gray-200'
          }`}>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeReportDetails}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-slate-700 text-white hover:bg-slate-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Close
              </button>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
              Attendance
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              View your child's attendance records
            </p>
          </div>

          {/* Select Child */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Select Child
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {children.map((child, index) => (
                <div
                  key={child.id}
                  onClick={() => setSelectedChild(index)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedChild === index
                      ? 'border-blue-500 bg-blue-50'
                      : isDarkMode 
                        ? 'border-slate-600 hover:border-slate-500 bg-slate-700' 
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className={`w-12 h-12 rounded-full hidden items-center justify-center text-white text-lg font-bold ${child.color}`}
                      >
                        {child.avatar}
                      </div>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        selectedChild === index ? 'text-blue-700' : isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {child.name}
                      </h3>
                      <p className={`text-sm ${
                        selectedChild === index ? 'text-blue-600' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {child.class}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-green-500 p-6 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">
                    Present Days
                  </p>
                  <p className="text-3xl font-bold">
                    {currentChild.stats.attendance.value}
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    22 days classes attended
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <span className="text-2xl">📅</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-500 p-6 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">
                    Total Days
                  </p>
                  <p className="text-3xl font-bold">
                    {currentChild.stats.totalAttendance.value}
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    25 days class periods
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-500 p-6 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">
                    Study Hours
                  </p>
                  <p className="text-3xl font-bold">
                    {currentChild.stats.totalStudyTime.value}
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    5h total study time per week
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <span className="text-2xl">⏰</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-500 p-6 rounded-2xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">
                    Next Class
                  </p>
                  <p className="text-3xl font-bold">
                    {currentChild.stats.nextClass.value}
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    Next class at 9:00 AM
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <span className="text-2xl">🕘</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Calendar */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Attendance Calendar
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Track daily attendance records
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-500">
                  78%
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Average Rate
                </div>
              </div>
            </div>

            {/* Calendar Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateMonth('prev')}
                className={`p-2 rounded-lg hover:bg-gray-100 ${isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'text-gray-600'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {monthNames[currentMonth]} {currentYear}
              </h3>
              
              <button
                onClick={() => navigateMonth('next')}
                className={`p-2 rounded-lg hover:bg-gray-100 ${isDarkMode ? 'hover:bg-slate-700 text-gray-300' : 'text-gray-600'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className={`p-3 text-center font-medium text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-6">
              {renderCalendar()}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Present (14)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Absent (2)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Late (2)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Holiday</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
            {/* Performance Trends */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Performance Trends
              </h2>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Overall Trend
                    </span>
                    <span className="text-green-500 text-sm font-medium">↗ Improving</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Attendance Trends
                    </span>
                    <span className="text-blue-500 text-sm font-medium">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject-wise Analysis */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject-wise Analysis
              </h2>
              
              <div className="space-y-4">
                {currentChild.subjects.map((subject, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${subject.color}`}>
                        {subject.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {subject.name}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {subject.attendance}% Attendance
                        </p>
                      </div>
                      <span className="text-sm font-medium text-blue-500">
                        A+
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${subject.attendance}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade Distribution */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Grade Distribution
              </h2>
              
              <div className="space-y-4">
                {currentChild.gradeDistribution.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: grade.color }}
                      ></div>
                      <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Grade {grade.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            backgroundColor: grade.color,
                            width: `${(grade.count / 47) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {grade.count}
                      </span>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-blue-500">105</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Grades
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Reports & Feedback */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Progress Reports & Feedback
              </h2>
            </div>
            
            <div className="space-y-4">
              {currentChild.progressReports.map((report) => (
                <div key={report.id} className={`p-4 rounded-lg border ${
                  isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {report.title}
                      </h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Teacher's Comment
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-500">{report.date}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${report.statusColor}`}>
                        {report.status}
                      </span>
                    </div>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {report.comments}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      By: {report.teacher}
                    </span>
                    <button 
                      onClick={() => openReportDetails(report)}
                      className="text-xs text-blue-500 hover:text-blue-600 font-medium transition-colors"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />

      {/* Report Detail Modal */}
      {isModalOpen && <ReportDetailModal />}
    </div>
  );
};

export default ParentAttendanceManagement;