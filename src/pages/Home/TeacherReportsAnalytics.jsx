import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Users, 
  UserCheck, 
  BookOpen,
  ClipboardList,
  Calendar,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle,
  AlertCircle,
  Clock,
  Award,
  Target,
  Eye,
  Download
} from 'lucide-react';

const TeacherReportsAnalytics = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'assignments', label: 'Assignments', icon: ClipboardList },
    { id: 'attendance', label: 'Attendance', icon: UserCheck },
    { id: 'trends', label: 'Trends', icon: TrendingUp }
  ];

  // Overview Tab Data
  const overviewStats = [
    {
      title: 'Overall Performance',
      value: '85.4%',
      change: '+3.4%',
      period: 'vs last week',
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Average Attendance',
      value: '92.8%',
      change: '-1.4%', 
      period: 'vs last week',
      trend: 'down',
      color: 'green'
    },
    {
      title: 'Assignment Completion',
      value: '91.2%',
      change: '+2.1%',
      period: 'vs last week', 
      trend: 'up',
      color: 'orange'
    },
    {
      title: 'Active Students',
      value: '3',
      change: '+1',
      period: 'vs yesterday',
      trend: 'up',
      color: 'purple'
    }
  ];

  const topPerformers = [
    { name: 'Arjan Sharma', class: 'G - A, Math/Physics', score: '96.5%', rank: 1 },
    { name: 'Arjan Sharma', class: 'G - A, Math/Physics', score: '96.5%', rank: 2 },
    { name: 'Arjan Sharma', class: 'G - A, Math/Physics', score: '96.5%', rank: 3 },
    { name: 'Arjan Sharma', class: 'G - A, Math/Physics', score: '96.5%', rank: 4 },
    { name: 'Arjan Sharma', class: 'G - A, Math/Physics', score: '96.5%', rank: 5 }
  ];

  const needsAttention = [
    { name: 'Amit Verma', class: 'G - B', score: '45.5%', status: 'critical' },
    { name: 'Amit Verma', class: 'G - B', score: '66.5%', status: 'warning' },
    { name: 'Amit Verma', class: 'G - B', score: '66.5%', status: 'warning' }
  ];

  // Students Tab Data
  const studentsData = [
    {
      name: 'Arjan Sharma',
      class: 'G - A, Roll No: 001',
      overall: '96.5%',
      attendance: '98.5%',
      assignments: '94.0%',
      lastExam: '97%',
      performance: 'excellent'
    },
    {
      name: 'Priya Patel', 
      class: 'G - A, Roll No: 002',
      overall: '94.8%',
      attendance: '96.5%',
      assignments: '93.0%',
      lastExam: '94%',
      performance: 'excellent'
    },
    {
      name: 'Rahul Kumar',
      class: 'G - B, Roll No: 015',
      overall: '92.5%',
      attendance: '94.0%',
      assignments: '90.0%',
      lastExam: '92%',
      performance: 'good'
    },
    {
      name: 'Sneha Singh',
      class: 'G - B, Roll No: 024',
      overall: '45.2%',
      attendance: '67.5%',
      assignments: '45.0%',
      lastExam: '34%',
      performance: 'needs-improvement'
    }
  ];

  // Subjects Tab Data
  const subjectsData = [
    {
      name: 'Mathematics',
      performance: '84.2%',
      trend: 'up',
      students: 35,
      avgScore: 84.2,
      topics: [
        { name: 'Algebra', score: 89.5, status: 'excellent' },
        { name: 'Geometry', score: 82.3, status: 'good' },
        { name: 'Trigonometry', score: 78.9, status: 'average' },
        { name: 'Calculus', score: 86.1, status: 'good' }
      ]
    },
    {
      name: 'Chemistry', 
      performance: '81.4%',
      trend: 'up',
      students: 32,
      avgScore: 81.4,
      topics: [
        { name: 'Organic Chemistry', score: 85.2, status: 'excellent' },
        { name: 'Inorganic Chemistry', score: 79.8, status: 'good' },
        { name: 'Physical Chemistry', score: 77.3, status: 'average' }
      ]
    },
    {
      name: 'Physics',
      performance: '78.6%', 
      trend: 'down',
      students: 30,
      avgScore: 78.6,
      topics: [
        { name: 'Mechanics', score: 82.1, status: 'good' },
        { name: 'Electricity', score: 76.8, status: 'average' },
        { name: 'Optics', score: 74.2, status: 'average' }
      ]
    }
  ];

  // Assignments Tab Data
  const assignmentStats = [
    {
      title: 'Total Assignments',
      value: '48',
      change: '+5',
      period: 'vs last month'
    },
    {
      title: 'Completion Rate',
      value: '87.5%',
      change: '+4.2%',
      period: 'vs last month'
    },
    {
      title: 'Average Score',
      value: '79.3%',
      change: '+1.8%',
      period: 'vs last month'
    },
    {
      title: 'Late Submissions',
      value: '12.4%',
      change: '-2.3%',
      period: 'vs last month'
    }
  ];

  const assignmentDetails = [
    {
      name: 'Quadratic Equations Practice',
      subject: 'Mathematics',
      dueDate: '19/11/2024',
      completion: '83.0%',
      avgScore: '84.2%',
      submissionStatus: 'On-time: 24, Late: 5, Pending: 6'
    },
    {
      name: "Newton's Laws Lab Report", 
      subject: 'Physics',
      dueDate: '18/11/2024',
      completion: '75.0%',
      avgScore: '78.5%',
      submissionStatus: 'On-time: 22, Late: 3, Pending: 10'
    }
  ];

  // Attendance Tab Data
  const attendanceStats = [
    {
      title: 'Overall Attendance',
      value: '91.2%',
      change: '+2.8%',
      period: 'vs last month'
    },
    {
      title: 'Weekly Attendance',
      value: '23.5',
      change: '+1.4',
      period: 'vs last week'
    },
    {
      title: 'Classes Conducted',
      value: '8',
      change: '-1',
      period: 'vs last week'
    },
    {
      title: 'Student Present',
      value: '142',
      change: '-1',
      period: 'vs yesterday'
    }
  ];

  const weeklyAttendance = [
    { day: 'Monday', percentage: 94.2 },
    { day: 'Tuesday', percentage: 92.5 },
    { day: 'Wednesday', percentage: 94.7 },
    { day: 'Thursday', percentage: 93.8 },
    { day: 'Friday', percentage: 89.3 }
  ];

  // Trends Tab Data  
  const trendsStats = [
    {
      title: 'Performance Forecast',
      value: '88.2%',
      change: '+2.1%',
      period: 'vs last month'
    },
    {
      title: 'Attendance Prediction',
      value: '93.1%',
      change: '+1.2%',
      period: 'vs last month'
    },
    {
      title: 'Risk Students',
      value: '5',
      change: '-2',
      period: 'vs last month'
    },
    {
      title: 'Completion Rate',
      value: '94.5%',
      change: '+3.2%',
      period: 'vs last month'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', bg: 'bg-blue-50' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600', bg: 'bg-green-50' },
      purple: { iconBg: 'bg-purple-100', iconColor: 'text-purple-600', bg: 'bg-purple-50' },
      orange: { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', bg: 'bg-orange-50' },
      cyan: { iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', bg: 'bg-cyan-50' },
      indigo: { iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', bg: 'bg-indigo-50' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'excellent':
        return 'text-green-600';
      case 'good':
        return 'text-blue-600';
      case 'average':
        return 'text-orange-600';
      case 'needs-improvement':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => {
          const colorClasses = getColorClasses(stat.color);
          return (
            <div key={index} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="text-left">
                  <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.title}
                  </h3>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                </div>
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                <span className="font-medium">{stat.change}</span>
                <span className={`ml-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  {stat.period}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Top Performers
          </h2>
          <div className="space-y-4">
            {topPerformers.map((student, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">
                  {student.rank}
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    {student.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 text-left">
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {student.name}
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {student.class}
                  </p>
                </div>
                <span className="text-green-600 font-semibold">
                  {student.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Needs Attention */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Needs Attention
          </h2>
          <div className="space-y-4">
            {needsAttention.map((student, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 font-semibold text-sm">
                    {student.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 text-left">
                  <h4 className={`font-medium text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {student.name}
                  </h4>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {student.class}
                  </p>
                </div>
                <span className={`font-semibold ${student.status === 'critical' ? 'text-red-600' : 'text-orange-600'}`}>
                  {student.score}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  student.status === 'critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Class Performance Trend Chart */}
      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Class Performance Trend
        </h2>
        <div className="h-64 flex items-end justify-center gap-8">
          {/* Placeholder for chart */}
          <div className="text-center">
            <div className="w-16 h-32 bg-blue-500 rounded-t mb-2"></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Week 1</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-40 bg-blue-500 rounded-t mb-2"></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Week 2</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-44 bg-blue-500 rounded-t mb-2"></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Week 3</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-48 bg-blue-500 rounded-t mb-2"></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Week 4</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Filter By Performance
          </label>
          <select className={`w-full px-4 py-2 rounded-lg border ${
            isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'
          }`}>
            <option>All Students</option>
            <option>Excellent (90%+)</option>
            <option>Good (75-89%)</option>
            <option>Average (60-74%)</option>
            <option>Needs Focus (&lt;60%)</option>
          </select>
        </div>
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Sort By
          </label>
          <select className={`w-full px-4 py-2 rounded-lg border ${
            isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'
          }`}>
            <option>All Students</option>
            <option>Performance Score</option>
            <option>Name</option>
            <option>Attendance</option>
            <option>Recent Activity</option>
          </select>
        </div>
      </div>

      {/* Students List */}
      <div className={`rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className="p-6">
          <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Student Performance Details
          </h2>
          <div className="space-y-4">
            {studentsData.map((student, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {student.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {student.name}
                      </h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {student.class}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-bold ${getPerformanceColor(student.performance)}`}>
                      {student.overall}
                    </span>
                    <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">
                      View Report
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>
                      Attendance
                    </div>
                    <div className="text-blue-600 font-semibold">
                      {student.attendance}
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>
                      Assignments
                    </div>
                    <div className="text-green-600 font-semibold">
                      {student.assignments}
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>
                      Last Exam
                    </div>
                    <div className="text-purple-600 font-semibold">
                      {student.lastExam}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubjects = () => (
    <div className="space-y-6">
      {/* Subjects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {subjectsData.map((subject, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {subject.name}
              </h3>
              <div className={`flex items-center gap-1 text-sm ${subject.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {subject.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                <span className="font-semibold">{subject.performance}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div>
                <div className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Total
                </div>
                <div className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {subject.students}
                </div>
              </div>
              <div>
                <div className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pass
                </div>
                <div className="text-sm font-semibold text-green-600">
                  {Math.floor(subject.students * 0.85)}
                </div>
              </div>
              <div>
                <div className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Fail
                </div>
                <div className="text-sm font-semibold text-red-600">
                  {subject.students - Math.floor(subject.students * 0.85)}
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-3 rounded-lg mb-4">
              <div className="text-xs font-medium text-green-700 mb-1">Avg. Performance</div>
              <div className="text-lg font-semibold text-green-700">{subject.avgScore}%</div>
            </div>

            <div className="space-y-2">
              <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Topic Performance
              </div>
              {subject.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className="flex items-center justify-between">
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {topic.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium ${getPerformanceColor(topic.status)}`}>
                      {topic.score}%
                    </span>
                    <div className={`w-12 h-2 rounded-full ${
                      topic.status === 'excellent' ? 'bg-green-200' :
                      topic.status === 'good' ? 'bg-blue-200' : 'bg-orange-200'
                    }`}>
                      <div 
                        className={`h-2 rounded-full ${
                          topic.status === 'excellent' ? 'bg-green-500' :
                          topic.status === 'good' ? 'bg-blue-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${topic.score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subject Comparison Chart */}
      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Subject Performance Comparison
        </h2>
        <div className="h-64 flex items-end justify-center gap-12">
          {subjectsData.map((subject, index) => (
            <div key={index} className="text-center">
              <div className="flex gap-2 mb-4">
                <div 
                  className="w-12 bg-blue-500 rounded-t"
                  style={{ height: `${subject.avgScore * 1.5}px` }}
                ></div>
                <div 
                  className="w-12 bg-green-500 rounded-t"
                  style={{ height: `${(subject.students / 35 * 100) * 1.5}px` }}
                ></div>
                <div 
                  className="w-12 bg-purple-500 rounded-t" 
                  style={{ height: `${85 * 1.5}px` }}
                ></div>
              </div>
              <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {subject.name}
              </span>
              <div className={`text-xs font-semibold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {subject.performance}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Average Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Completion Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pass Rate</span>
          </div>
        </div>

        {/* Detailed Subject Analysis */}
        <div className="mt-8">
          <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Detailed Subject Analysis
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`text-left border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                  <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    SUBJECT
                  </th>
                  <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    STUDENTS
                  </th>
                  <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    COMPLETION
                  </th>
                  <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    AVG SCORE
                  </th>
                  <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    TREND
                  </th>
                  <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjectsData.map((subject, index) => (
                  <tr key={index} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                    <td className={`py-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {subject.name}
                    </td>
                    <td className={`py-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {subject.students}
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-2 bg-blue-500 rounded-full"
                            style={{ width: `${subject.avgScore}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {subject.avgScore}%
                        </span>
                      </div>
                    </td>
                    <td className={`py-4 font-semibold ${
                      subject.avgScore >= 85 ? 'text-green-600' :
                      subject.avgScore >= 75 ? 'text-blue-600' : 'text-orange-600'
                    }`}>
                      {subject.performance}
                    </td>
                    <td className="py-4">
                      <div className={`flex items-center gap-1 ${
                        subject.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {subject.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        <span className="text-sm font-medium">
                          {subject.trend === 'up' ? '+2.1%' : '-1.5%'}
                        </span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:bg-gray-50 rounded">
                          <Download size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      {/* Assignment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assignmentStats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <div className="text-left">
              <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.title}
              </h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
            </div>
            <div className={`flex items-center gap-1 text-sm mt-2 ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change.startsWith('+') ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="font-medium">{stat.change}</span>
              <span className={`ml-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {stat.period}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Assignment Performance Chart */}
      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Assignment Performance Trends
        </h2>
        <div className="h-64 flex items-end justify-center gap-8">
          {[82.3, 87.5, 87.5, 48].map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex gap-2 mb-4">
                <div 
                  className="w-8 bg-blue-500 rounded-t"
                  style={{ height: `${value * 2}px` }}
                ></div>
                <div 
                  className="w-8 bg-green-500 rounded-t"
                  style={{ height: `${(value + 5) * 2}px` }}
                ></div>
                <div 
                  className="w-8 bg-orange-500 rounded-t"
                  style={{ height: `${(value - 3) * 2}px` }}
                ></div>
              </div>
              <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Week {index + 1}
              </span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">82.3%</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>Avg Score</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">87.5%</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>Completion Rate</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-600">67.5%</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>On-time Rate</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">48</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>Total Assigned</div>
          </div>
        </div>
      </div>

      {/* Assignment Details Table */}
      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Assignment Details
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`text-left border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  ASSIGNMENTS
                </th>
                <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  SUBJECT
                </th>
                <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  DUE DATE
                </th>
                <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  COMPLETION
                </th>
                <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  AVG SCORE
                </th>
                <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  SUBMISSION STATUS
                </th>
                <th className={`pb-3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {assignmentDetails.map((assignment, index) => (
                <tr key={index} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                  <td className={`py-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {assignment.name}
                    <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Medium - Important
                    </div>
                  </td>
                  <td className={`py-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {assignment.subject}
                  </td>
                  <td className={`py-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {assignment.dueDate}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: assignment.completion }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {assignment.completion}
                      </span>
                    </div>
                  </td>
                  <td className={`py-4 font-semibold text-green-600`}>
                    {assignment.avgScore}
                  </td>
                  <td className={`py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {assignment.submissionStatus}
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-green-500 hover:bg-green-50 rounded">
                        <Download size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-6">
      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {attendanceStats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <div className="text-left">
              <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.title}
              </h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
            </div>
            <div className={`flex items-center gap-1 text-sm mt-2 ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change.startsWith('+') ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="font-medium">{stat.change}</span>
              <span className={`ml-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {stat.period}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Class-wise Attendance */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Class-wise Attendance
          </h2>
          <div className="space-y-4">
            {['Class 10-A', 'Class 10-B', 'Class 10-C'].map((className, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                isDarkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {className}
                  </h4>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                    94.5%
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                  <div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Students</div>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>30</div>
                  </div>
                  <div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Present Today</div>
                    <div className="font-semibold text-green-600">28</div>
                  </div>
                  <div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Chronic Absent</div>
                    <div className="font-semibold text-red-600">2</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Recent Trend:</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded">High Perf.</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded">Needs Focus</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.5%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Attendance Pattern */}
        <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Weekly Attendance Pattern
          </h2>
          <div className="space-y-4">
            {weeklyAttendance.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    day.percentage >= 93 ? 'bg-green-500' : 
                    day.percentage >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {day.day}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        day.percentage >= 93 ? 'bg-green-500' : 
                        day.percentage >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${day.percentage}%` }}
                    ></div>
                  </div>
                  <span className={`font-semibold text-sm ${
                    day.percentage >= 93 ? 'text-green-600' : 
                    day.percentage >= 90 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {day.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Performance Comparison Chart */}
      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Subject Performance Comparison
        </h2>
        <div className="h-64 flex items-end justify-center gap-12">
          {['Mathematics', 'Physics', 'Chemistry'].map((subject, index) => {
            const values = [94.2, 92.1, 95.8]; // Daily vs Weekly Average
            return (
              <div key={index} className="text-center">
                <div className="flex gap-3 mb-4">
                  <div 
                    className="w-12 bg-green-500 rounded-t"
                    style={{ height: `${values[index] * 2}px` }}
                  ></div>
                  <div 
                    className="w-12 bg-blue-400 rounded-t"
                    style={{ height: `${(values[index] - 2) * 2}px` }}
                  ></div>
                </div>
                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {subject}
                </span>
                <div className={`text-xs font-semibold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {values[index]}%
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-lg font-bold text-green-600">Best Day</div>
            <div className="text-2xl font-bold text-green-600">Monday</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>94.2% attendance</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg text-center">
            <div className="text-lg font-bold text-red-600">Needs Focus</div>
            <div className="text-2xl font-bold text-red-600">Friday</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>89.3% attendance</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTrends = () => (
    <div className="space-y-6">
      {/* Trends Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendsStats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <div className="text-left">
              <h3 className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.title}
              </h3>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
            </div>
            <div className={`flex items-center gap-1 text-sm mt-2 ${
              stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change.startsWith('+') ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="font-medium">{stat.change}</span>
              <span className={`ml-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {stat.period}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Subject Performance Trends Chart */}
      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Subject Performance Comparison
        </h2>
        <div className="h-64 flex items-center justify-center">
          {/* Line Chart Simulation */}
          <div className="relative w-full h-full">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 20" fill="none" stroke={isDarkMode ? '#374151' : '#e5e7eb'} strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Performance Line */}
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                points="40,160 120,140 200,120 280,100 360,80"
              />
              
              {/* Attendance Line */}
              <polyline
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                points="40,150 120,130 200,110 280,90 360,70"
              />
              
              {/* Assignment Line */}
              <polyline
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
                points="40,140 120,120 200,100 280,85 360,75"
              />
              
              {/* Predicted Line */}
              <polyline
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeDasharray="5,5"
                points="280,85 360,65"
              />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-lg font-bold text-blue-600">Performance Trend</div>
            <div className="text-2xl font-bold text-blue-600">+8.9%</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>Growth since August</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-lg font-bold text-green-600">Attendance Trend</div>
            <div className="text-2xl font-bold text-green-600">+9.8%</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>Growth since August</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-lg font-bold text-purple-600">Assignment Rate</div>
            <div className="text-2xl font-bold text-purple-600">+8.9%</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-600' : 'text-gray-700'}`}>Projected 94% in February</div>
          </div>
        </div>
      </div>

      {/* AI-Powered Insights */}
      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          AI-Powered Insights & Recommendations
        </h2>
        <div className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Advanced insights based on data analysis
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mathematics Insights */}
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border-l-4 border-blue-500 ${isDarkMode ? 'bg-slate-700' : 'bg-blue-50'}`}>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Mathematics scores trending upward
                  </h4>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Average scores improved by 7.2% over the last 3 months. Current trajectory suggests continued improvement.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>📈 84% Confidence</span>
                    <button className="text-blue-600 font-medium hover:text-blue-700">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 border-orange-500 ${isDarkMode ? 'bg-slate-700' : 'bg-orange-50'}`}>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Late submission pattern identified
                  </h4>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Students in G-B show 28% late submission rate compared to other classes.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>⚠️ 92% Confidence</span>
                    <button className="text-orange-600 font-medium hover:text-orange-700">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Friday Attendance & Early Intervention */}
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border-l-4 border-green-500 ${isDarkMode ? 'bg-slate-700' : 'bg-green-50'}`}>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Friday attendance needs attention
                  </h4>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Consistent 6% drop in attendance on Fridays compared to other weekdays.
                  </p>
                  <div className="text-xs mb-3">
                    <div className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Recommended Actions:
                    </div>
                    <ul className={`space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>• Schedule engaging activities on Fridays</li>
                      <li>• Send parent reminders on Thursday evening</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>📊 88% Confidence</span>
                    <button className="text-green-600 font-medium hover:text-green-700">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg border-l-4 border-red-500 ${isDarkMode ? 'bg-slate-700' : 'bg-red-50'}`}>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Users className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Early intervention needed
                  </h4>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    5 students showing declining performance across multiple subjects.
                  </p>
                  <div className="text-xs mb-3">
                    <div className={`font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Recommended Actions:
                    </div>
                    <ul className={`space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>• Schedule one-on-one counseling sessions</li>
                      <li>• Increase parental engagement through personalized plans</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>🚨 96% Confidence</span>
                    <button className="text-red-600 font-medium hover:text-red-700">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'students':
        return renderStudents();
      case 'subjects':
        return renderSubjects();
      case 'assignments':
        return renderAssignments();
      case 'attendance':
        return renderAttendance();
      case 'trends':
        return renderTrends();
      default:
        return renderOverview();
    }
  };

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
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Analytics Dashboard
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Analyze students performance and track progress
              </p>
            </div>
            <div className="flex gap-3">
              <button className={`px-4 py-2 rounded-lg border ${
                isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                All Classes
              </button>
              <button className={`px-4 py-2 rounded-lg border ${
                isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                This Month
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Export Report
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className={`flex gap-2 mb-8 p-2 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
          }`}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-sm'
                      : isDarkMode 
                        ? 'text-gray-400 hover:text-white hover:bg-slate-700' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default TeacherReportsAnalytics;