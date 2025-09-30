import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import boyChild from '../../assets/images/student-profile.png';
import girlChild from '../../assets/images/girl.png';

import {
  Calendar,
  TrendingUp,
  TrendingDown,
  BookOpen,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  BarChart3,
  PieChart,
  Download,
  Filter
} from 'lucide-react';

const ParentReportsAnalytics = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedChild, setSelectedChild] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Children data
  const children = [
    {
      id: 1,
      name: 'Aarav Sharma',
      class: 'Class 10-A',
      avatar: 'A',
      image: boyChild,
      color: 'bg-blue-500',
      attendanceData: {
        overall: '94%',
        present: 156,
        absent: 10,
        late: 4,
        performanceTrends: [
          { month: 'Aug', percentage: 92 },
          { month: 'Sep', percentage: 94 },
          { month: 'Oct', percentage: 96 },
          { month: 'Nov', percentage: 91 },
          { month: 'Dec', percentage: 94 }
        ],
        subjectAnalysis: [
          { subject: 'Mathematics', present: 28, absent: 2, percentage: 93.3, color: 'bg-blue-500' },
          { subject: 'Physics', present: 26, absent: 4, percentage: 86.7, color: 'bg-green-500' },
          { subject: 'Chemistry', present: 24, absent: 1, percentage: 96.0, color: 'bg-yellow-500' },
          { subject: 'English', present: 29, absent: 1, percentage: 96.7, color: 'bg-purple-500' }
        ],
        gradeDistribution: [
          { grade: 'A+', percentage: 35, color: '#10b981' },
          { grade: 'A', percentage: 25, color: '#3b82f6' },
          { grade: 'B+', percentage: 20, color: '#f59e0b' },
          { grade: 'B', percentage: 15, color: '#ef4444' },
          { grade: 'C', percentage: 5, color: '#6b7280' }
        ],
        progressReports: [
          {
            id: 1,
            title: 'Mid Term Progress Report',
            subject: 'All Subjects',
            date: 'Nov 15, 2024',
            status: 'Generated',
            comments: 'Excellent performance in Mathematics and Physics. Needs improvement in Chemistry lab work.'
          },
          {
            id: 2,
            title: 'Monthly Assessment - January',
            subject: 'Mathematics',
            date: 'Jan 30, 2025',
            status: 'Pending',
            comments: 'Outstanding problem-solving skills demonstrated in algebra and geometry sections.'
          },
          {
            id: 3,
            title: 'Physics Lab Report',
            subject: 'Physics',
            date: 'Dec 20, 2024',
            status: 'Generated',
            comments: 'Good theoretical understanding but practical application needs more practice.'
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Priya Sharma',
      class: 'Class 8-B',
      avatar: 'P',
      image: girlChild,
      color: 'bg-green-500',
      attendanceData: {
        overall: '96%',
        present: 162,
        absent: 7,
        late: 2,
        performanceTrends: [
          { month: 'Aug', percentage: 95 },
          { month: 'Sep', percentage: 97 },
          { month: 'Oct', percentage: 98 },
          { month: 'Nov', percentage: 94 },
          { month: 'Dec', percentage: 96 }
        ],
        subjectAnalysis: [
          { subject: 'Mathematics', present: 29, absent: 1, percentage: 96.7, color: 'bg-blue-500' },
          { subject: 'Science', present: 28, absent: 2, percentage: 93.3, color: 'bg-green-500' },
          { subject: 'English', present: 30, absent: 0, percentage: 100, color: 'bg-yellow-500' },
          { subject: 'Social Studies', present: 27, absent: 3, percentage: 90.0, color: 'bg-purple-500' }
        ],
        gradeDistribution: [
          { grade: 'A+', percentage: 40, color: '#10b981' },
          { grade: 'A', percentage: 30, color: '#3b82f6' },
          { grade: 'B+', percentage: 20, color: '#f59e0b' },
          { grade: 'B', percentage: 8, color: '#ef4444' },
          { grade: 'C', percentage: 2, color: '#6b7280' }
        ],
        progressReports: [
          {
            id: 1,
            title: 'Quarterly Progress Report',
            subject: 'All Subjects',
            date: 'Dec 10, 2024',
            status: 'Generated',
            comments: 'Exceptional performance across all subjects. Shows great enthusiasm in learning.'
          },
          {
            id: 2,
            title: 'Science Fair Evaluation',
            subject: 'Science',
            date: 'Jan 25, 2025',
            status: 'Pending',
            comments: 'Creative project on renewable energy. Demonstrates strong research skills.'
          }
        ]
      }
    }
  ];

  const currentChild = children[selectedChild];
  const attendanceData = currentChild.attendanceData;

  // Function to calculate chart dimensions based on screen size
  const getChartDimensions = () => {
    if (typeof window === 'undefined') return { width: 300, height: 200 };

    const width = window.innerWidth;
    if (width < 640) { // mobile
      return { width: 280, height: 160 };
    } else if (width < 768) { // tablet
      return { width: 320, height: 180 };
    } else { // desktop
      return { width: 400, height: 200 };
    }
  };

  const chartDimensions = getChartDimensions();

  // Circular chart dimensions for grade distribution
  const size = 120;
  const strokeWidth = 20;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="analytics" />

      <main className={`transition-all duration-300 ${isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">

          {/* Header */}
          <div className="text-left mb-4 md:mb-6 lg:mb-8">
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Reports & Analytics
            </h1>
            <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              View your child's Reports and Analytics
            </p>
          </div>

          {/* Select Child */}
          <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border mb-6 md:mb-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
            <h2 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Select Child
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {children.map((child, index) => (
                <div
                  key={child.id}
                  onClick={() => setSelectedChild(index)}
                  className={`p-3 md:p-4 rounded-lg md:rounded-xl border-2 cursor-pointer transition-all ${selectedChild === index
                      ? 'border-blue-500 bg-blue-50'
                      : isDarkMode
                        ? 'border-slate-600 hover:border-slate-500 bg-slate-700'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative">
                      <img
                        src={child.image}
                        alt={child.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm md:text-base truncate ${selectedChild === index ? 'text-blue-700' : isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        {child.name}
                      </h3>
                      <p className={`text-xs md:text-sm ${selectedChild === index ? 'text-blue-600' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        {child.class}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Trends and Attendance Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
            {/* Performance Trends */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3 sm:gap-0">
                <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Performance Trends
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Overall Grade
                  </span>
                </div>
              </div>

              <div className="w-full overflow-x-auto">
                <div className="min-w-full" style={{ minWidth: `${chartDimensions.width}px` }}>
                  <div className="relative" style={{ height: `${chartDimensions.height}px` }}>
                    <svg
                      className="w-full h-full"
                      viewBox={`0 0 ${chartDimensions.width} ${chartDimensions.height}`}
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
                          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
                        </linearGradient>
                      </defs>

                      {/* Grid lines */}
                      {[0, 25, 50, 75, 100].map((y, i) => (
                        <line
                          key={i}
                          x1="40"
                          y1={chartDimensions.height - 40 - (y * (chartDimensions.height - 80) / 100)}
                          x2={chartDimensions.width}
                          y2={chartDimensions.height - 40 - (y * (chartDimensions.height - 80) / 100)}
                          stroke={isDarkMode ? '#374151' : '#e5e7eb'}
                          strokeWidth="1"
                        />
                      ))}

                      {/* Y-axis labels */}
                      {[0, 25, 50, 75, 100].map((y, i) => (
                        <text
                          key={i}
                          x="25"
                          y={chartDimensions.height - 35 - (y * (chartDimensions.height - 80) / 100)}
                          fill={isDarkMode ? '#9ca3af' : '#6b7280'}
                          fontSize="10"
                          textAnchor="middle"
                        >
                          {y}%
                        </text>
                      ))}

                      {/* Line chart */}
                      <polyline
                        fill="url(#gradient)"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        points={attendanceData.performanceTrends.map((point, index) =>
                          `${40 + index * ((chartDimensions.width - 80) / (attendanceData.performanceTrends.length - 1))},${chartDimensions.height - 40 - (point.percentage * (chartDimensions.height - 80) / 100)
                          }`
                        ).join(' ')}
                      />

                      {/* Data points */}
                      {attendanceData.performanceTrends.map((point, index) => (
                        <circle
                          key={index}
                          cx={40 + index * ((chartDimensions.width - 80) / (attendanceData.performanceTrends.length - 1))}
                          cy={chartDimensions.height - 40 - (point.percentage * (chartDimensions.height - 80) / 100)}
                          r="3"
                          fill="#3b82f6"
                          stroke="white"
                          strokeWidth="2"
                        />
                      ))}

                      {/* X-axis labels */}
                      {attendanceData.performanceTrends.map((point, index) => (
                        <text
                          key={index}
                          x={40 + index * ((chartDimensions.width - 80) / (attendanceData.performanceTrends.length - 1))}
                          y={chartDimensions.height - 20}
                          fill={isDarkMode ? '#9ca3af' : '#6b7280'}
                          fontSize="10"
                          textAnchor="middle"
                        >
                          {point.month}
                        </text>
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Trends */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3 sm:gap-0">
                <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Attendance Trends
                </h2>
                <div className="text-xl md:text-2xl font-bold text-green-500">
                  {attendanceData.overall}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between p-3 md:p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                    <span className="font-medium text-green-700 text-sm md:text-base">Present</span>
                  </div>
                  <span className="font-bold text-green-700 text-sm md:text-base">{attendanceData.present}</span>
                </div>

                <div className="flex items-center justify-between p-3 md:p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2 md:gap-3">
                    <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                    <span className="font-medium text-red-700 text-sm md:text-base">Absent</span>
                  </div>
                  <span className="font-bold text-red-700 text-sm md:text-base">{attendanceData.absent}</span>
                </div>

                <div className="flex items-center justify-between p-3 md:p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                    <span className="font-medium text-orange-700 text-sm md:text-base">Late</span>
                  </div>
                  <span className="font-bold text-orange-700 text-sm md:text-base">{attendanceData.late}</span>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                    }`}>
                    <div className="text-lg md:text-xl font-bold text-blue-500">92%</div>
                    <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Monthly Avg
                    </div>
                  </div>
                  <div className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                    }`}>
                    <div className="text-lg md:text-xl font-bold text-green-500">4</div>
                    <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Perfect Weeks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subject-wise Analysis and Grade Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Subject-wise Analysis */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
              <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject-wise Analysis
              </h2>

              <div className="space-y-3 md:space-y-4">
                {attendanceData.subjectAnalysis.map((subject, index) => (
                  <div key={index} className={`p-3 md:p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                    }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-medium text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.subject}
                      </h3>
                      <span className={`text-xs md:text-sm font-bold ${subject.percentage >= 95 ? 'text-green-600' :
                          subject.percentage >= 90 ? 'text-blue-600' :
                            subject.percentage >= 85 ? 'text-orange-600' : 'text-red-600'
                        }`}>
                        {subject.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className={`flex items-center justify-between text-xs md:text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <span>Present: {subject.present}</span>
                      <span>Absent: {subject.absent}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${subject.percentage >= 95 ? 'bg-green-500' :
                            subject.percentage >= 90 ? 'bg-blue-500' :
                              subject.percentage >= 85 ? 'bg-orange-500' : 'bg-red-500'
                          }`}
                        style={{ width: `${subject.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall Performance Summary */}
              <div className={`mt-4 md:mt-6 p-3 md:p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-blue-50'
                }`}>
                <div className="flex items-center justify-between">
                  <span className={`font-medium text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Overall Performance
                  </span>
                  <span className="text-lg md:text-xl font-bold text-blue-600">
                    {attendanceData.overall}
                  </span>
                </div>
                <div className={`text-xs md:text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based on all subjects attendance
                </div>
              </div>
            </div>

            {/* Grade Distribution */}
            <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}>
              <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Grade Distribution
              </h2>

              <div className="flex flex-col items-center mb-4 md:mb-6">
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox={`0 0 ${size} ${size}`}
                  >
                    {attendanceData.gradeDistribution.map((grade, index) => {
                      const totalPrevious = attendanceData.gradeDistribution
                        .slice(0, index)
                        .reduce((sum, g) => sum + g.percentage, 0);
                      const offset = -(totalPrevious / 100) * circumference;
                      const dashArray = (grade.percentage / 100) * circumference;

                      return (
                        <circle
                          key={index}
                          cx={center}
                          cy={center}
                          r={radius}
                          fill="none"
                          stroke={grade.color}
                          strokeWidth={strokeWidth}
                          strokeDasharray={`${dashArray} ${circumference}`}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        120
                      </div>
                      <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Total Assignments
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {attendanceData.gradeDistribution.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div
                          className="w-3 h-3 md:w-4 md:h-4 rounded-full flex-shrink-0"
                          style={{ backgroundColor: grade.color }}
                        ></div>
                        <span className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Grade {grade.grade}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-16 md:w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              backgroundColor: grade.color,
                              width: `${grade.percentage}%`
                            }}
                          ></div>
                        </div>
                        <span className={`text-sm md:text-base font-medium w-8 text-right ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {grade.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Grade Summary */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                  <div className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-green-50'
                    }`}>
                    <div className="text-lg md:text-xl font-bold text-green-600">
                      {attendanceData.gradeDistribution[0].percentage + attendanceData.gradeDistribution[1].percentage}%
                    </div>
                    <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      A Grades
                    </div>
                  </div>
                  <div className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-blue-50'
                    }`}>
                    <div className="text-lg md:text-xl font-bold text-blue-600">
                      {attendanceData.gradeDistribution.slice(2).reduce((sum, grade) => sum + grade.percentage, 0)}%
                    </div>
                    <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Other Grades
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Reports Section */}
          <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-xl md:rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
            <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Progress Reports
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {attendanceData.progressReports.map((report, index) => (
                <div key={report.id} className={`p-4 rounded-lg border ${isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-semibold text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {report.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${report.status === 'Generated' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {report.status}
                    </span>
                  </div>
                  <p className={`text-xs md:text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {report.subject}
                  </p>
                  <p className={`text-xs md:text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {report.comments}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {report.date}
                    </span>
                    <button className="text-xs text-blue-500 hover:text-blue-600 font-medium">
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
    </div>
  );
};

export default ParentReportsAnalytics;