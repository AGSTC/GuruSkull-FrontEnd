import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
import boyChild from '../../assets/images/student-profile.png'
import girlChild from '../../assets/images/girl.png'

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

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="analytics" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
            
          {/* Header */}
          <div className="text-left mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Reports & Analytics
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              View your child's Reports and Analytics
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
                      />
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

          {/* Performance Trends and Attendance Trends */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            {/* Performance Trends */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Performance Trends
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Overall Grade
                  </span>
                </div>
              </div>
              
              <div className="relative h-64">
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.1}} />
                      <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((y, i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={220 - (y * 1.8)}
                      x2="100%"
                      y2={220 - (y * 1.8)}
                      stroke={isDarkMode ? '#374151' : '#e5e7eb'}
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Y-axis labels */}
                  {[0, 25, 50, 75, 100].map((y, i) => (
                    <text
                      key={i}
                      x="25"
                      y={225 - (y * 1.8)}
                      fill={isDarkMode ? '#9ca3af' : '#6b7280'}
                      fontSize="12"
                      textAnchor="middle"
                    >
                      {y}%
                    </text>
                  ))}
                  
                  {/* Line chart */}
                  <polyline
                    fill="url(#gradient)"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    points={attendanceData.performanceTrends.map((point, index) => 
                      `${60 + index * 60},${220 - (point.percentage * 1.8)}`
                    ).join(' ')}
                  />
                  
                  {/* Data points */}
                  {attendanceData.performanceTrends.map((point, index) => (
                    <circle
                      key={index}
                      cx={60 + index * 60}
                      cy={220 - (point.percentage * 1.8)}
                      r="4"
                      fill="#3b82f6"
                      stroke="white"
                      strokeWidth="2"
                    />
                  ))}
                  
                  {/* X-axis labels */}
                  {attendanceData.performanceTrends.map((point, index) => (
                    <text
                      key={index}
                      x={60 + index * 60}
                      y="245"
                      fill={isDarkMode ? '#9ca3af' : '#6b7280'}
                      fontSize="12"
                      textAnchor="middle"
                    >
                      {point.month}
                    </text>
                  ))}
                </svg>
              </div>
            </div>

            {/* Attendance Trends */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Attendance Trends
                </h2>
                <div className="text-2xl font-bold text-green-500">
                  {attendanceData.overall}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-700">Present</span>
                  </div>
                  <span className="font-bold text-green-700">{attendanceData.present}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-red-700">Absent</span>
                  </div>
                  <span className="font-bold text-red-700">{attendanceData.absent}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-orange-700">Late</span>
                  </div>
                  <span className="font-bold text-orange-700">{attendanceData.late}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subject-wise Analysis and Grade Distribution */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            {/* Subject-wise Analysis */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject-wise Analysis
              </h2>
              
              <div className="space-y-4">
                {attendanceData.subjectAnalysis.map((subject, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.subject}
                      </h3>
                      <span className={`text-sm font-bold ${
                        subject.percentage >= 95 ? 'text-green-600' :
                        subject.percentage >= 90 ? 'text-blue-600' :
                        subject.percentage >= 85 ? 'text-orange-600' : 'text-red-600'
                      }`}>
                        {subject.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className={`flex items-center justify-between text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <span>Present: {subject.present}</span>
                      <span>Absent: {subject.absent}</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          subject.percentage >= 95 ? 'bg-green-500' :
                          subject.percentage >= 90 ? 'bg-blue-500' :
                          subject.percentage >= 85 ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${subject.percentage}%` }}
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
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    {attendanceData.gradeDistribution.map((grade, index) => {
                      const radius = 70;
                      const circumference = 2 * Math.PI * radius;
                      const offset = circumference - (grade.percentage / 100) * circumference;
                      const totalPrevious = attendanceData.gradeDistribution
                        .slice(0, index)
                        .reduce((sum, g) => sum + g.percentage, 0);
                      const rotation = (totalPrevious / 100) * 360;
                      
                      return (
                        <circle
                          key={index}
                          cx="96"
                          cy="96"
                          r={radius}
                          fill="none"
                          stroke={grade.color}
                          strokeWidth="12"
                          strokeDasharray={`${(grade.percentage / 100) * circumference} ${circumference}`}
                          strokeDashoffset={0}
                          transform={`rotate(${rotation} 96 96)`}
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">120</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Total Assignments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {attendanceData.gradeDistribution.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: grade.color }}
                      ></div>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Grade {grade.grade}
                      </span>
                    </div>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {grade.percentage}%
                    </span>
                  </div>
                ))}
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
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors">
                Generate
              </button>
            </div>
            
            <div className="space-y-4">
              {attendanceData.progressReports.map((report) => (
                <div key={report.id} className={`p-4 rounded-lg border ${
                  isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {report.title}
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {report.subject} • {report.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === 'Generated' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {report.status}
                      </span>
                      <button className="text-blue-500 hover:text-blue-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-medium">Teacher's Comment:</span> {report.comments}
                  </p>
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