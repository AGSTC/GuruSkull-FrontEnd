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
  MessageSquare,
  Clock,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  GraduationCap,
  FileText,
  Bell,
  Award,
  Activity,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  Eye,
  Download,
  X,
  Filter,
  SortAsc,
  FileText as FileTextIcon,
  Brain,
  Lightbulb,
  Target
} from 'lucide-react';

const TeacherReportsAnalytics = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [studentPerformanceFilter, setStudentPerformanceFilter] = useState('All Students');
  const [studentSortBy, setStudentSortBy] = useState('Performance Score');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedInsight, setSelectedInsight] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Filter options
  const classOptions = ['All Classes', 'Class 10-A', 'Class 10-B', 'Class 10-C', 'Class 11-A', 'Class 11-B'];
  const periodOptions = ['This Month', 'Last Month', 'This Quarter', 'Last Quarter', 'This Year'];
  const performanceOptions = ['All Students', 'Excellent (90%+)', 'Good (75-89%)', 'Average (60-74%)', 'Needs Focus (<60%)'];
  const sortOptions = ['Performance Score', 'Name', 'Attendance', 'Recent Activity'];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'assignments', label: 'Assignments', icon: ClipboardList },
    { id: 'attendance', label: 'Attendance', icon: UserCheck },
    { id: 'trends', label: 'Trends', icon: TrendingUp }
  ];

  // Export to PDF function
  const exportToPDF = () => {
    const reportData = {
      title: `Analytics Report - ${selectedClass} - ${selectedPeriod}`,
      timestamp: new Date().toLocaleString(),
      tab: activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
    };
    
    console.log('Exporting PDF:', reportData);
    alert(`PDF report for ${selectedClass} (${selectedPeriod}) is being generated...`);
    
    setTimeout(() => {
      alert('PDF report downloaded successfully!');
    }, 2000);
  };

  // Filter data based on selections
  const filterData = (data, period) => {
    const periodMultipliers = {
      'This Month': 1,
      'Last Month': 0.95,
      'This Quarter': 1.02,
      'Last Quarter': 0.98,
      'This Year': 1.05
    };
    
    const multiplier = periodMultipliers[period] || 1;
    return data.map(item => ({
      ...item,
      value: typeof item.value === 'string' && item.value.includes('%') 
        ? `${(parseFloat(item.value) * multiplier).toFixed(1)}%`
        : item.value,
      change: typeof item.change === 'string' && item.change.includes('%')
        ? `${(parseFloat(item.change) * multiplier).toFixed(1)}%`
        : item.change
    }));
  };

  // Overview Tab Data - Different data for each period
  const overviewData = {
    'This Month': [
      { title: 'Overall Performance', value: '85.4%', change: '+3.4%', period: 'vs last week', trend: 'up', color: 'blue' },
      { title: 'Average Attendance', value: '92.8%', change: '-1.4%', period: 'vs last week', trend: 'down', color: 'green' },
      { title: 'Assignment Completion', value: '91.2%', change: '+2.1%', period: 'vs last week', trend: 'up', color: 'orange' },
      { title: 'Active Students', value: '28', change: '+1', period: 'vs yesterday', trend: 'up', color: 'purple' }
    ],
    'Last Month': [
      { title: 'Overall Performance', value: '82.1%', change: '+2.8%', period: 'vs previous month', trend: 'up', color: 'blue' },
      { title: 'Average Attendance', value: '94.2%', change: '+0.8%', period: 'vs previous month', trend: 'up', color: 'green' },
      { title: 'Assignment Completion', value: '88.7%', change: '+1.5%', period: 'vs previous month', trend: 'up', color: 'orange' },
      { title: 'Active Students', value: '27', change: '+2', period: 'vs previous month', trend: 'up', color: 'purple' }
    ],
    'This Quarter': [
      { title: 'Overall Performance', value: '87.2%', change: '+5.2%', period: 'vs last quarter', trend: 'up', color: 'blue' },
      { title: 'Average Attendance', value: '93.5%', change: '+2.1%', period: 'vs last quarter', trend: 'up', color: 'green' },
      { title: 'Assignment Completion', value: '92.8%', change: '+4.3%', period: 'vs last quarter', trend: 'up', color: 'orange' },
      { title: 'Active Students', value: '30', change: '+3', period: 'vs last quarter', trend: 'up', color: 'purple' }
    ]
  };

  const overviewStats = filterData(overviewData[selectedPeriod] || overviewData['This Month'], selectedPeriod);

  // Original data kept intact
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
      id: 1,
      name: 'Arjan Sharma',
      class: 'G - A, Roll No: 001',
      overall: '96.5%',
      attendance: '98.5%',
      assignments: '94.0%',
      lastExam: '97%',
      performance: 'excellent',
      details: {
        strengths: ['Mathematics', 'Physics', 'Analytical Skills'],
        weaknesses: ['Time Management in Exams'],
        recommendations: ['Participate in advanced math competitions', 'Mentor other students']
      }
    },
    {
      id: 2,
      name: 'Priya Patel', 
      class: 'G - A, Roll No: 002',
      overall: '94.8%',
      attendance: '96.5%',
      assignments: '93.0%',
      lastExam: '94%',
      performance: 'excellent',
      details: {
        strengths: ['Chemistry', 'Biology', 'Research Skills'],
        weaknesses: ['Advanced Physics Concepts'],
        recommendations: ['Focus on practical applications', 'Join science club']
      }
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      class: 'G - B, Roll No: 015',
      overall: '92.5%',
      attendance: '94.0%',
      assignments: '90.0%',
      lastExam: '92%',
      performance: 'good',
      details: {
        strengths: ['Mathematics', 'Logical Reasoning'],
        weaknesses: ['English Comprehension', 'Writing Skills'],
        recommendations: ['Practice essay writing', 'Read more literature']
      }
    },
    {
      id: 4,
      name: 'Sneha Singh',
      class: 'G - B, Roll No: 024',
      overall: '45.2%',
      attendance: '67.5%',
      assignments: '45.0%',
      lastExam: '34%',
      performance: 'needs-improvement',
      details: {
        strengths: ['Art', 'Creative Thinking'],
        weaknesses: ['Mathematics', 'Science', 'Regular Attendance'],
        recommendations: ['Extra tutoring sessions', 'Parent-teacher meeting', 'Study group']
      }
    }
  ];

  // Filter and sort students
  const filteredStudents = studentsData
    .filter(student => {
      if (studentPerformanceFilter === 'All Students') return true;
      if (studentPerformanceFilter === 'Excellent (90%+)') return parseFloat(student.overall) >= 90;
      if (studentPerformanceFilter === 'Good (75-89%)') return parseFloat(student.overall) >= 75 && parseFloat(student.overall) < 90;
      if (studentPerformanceFilter === 'Average (60-74%)') return parseFloat(student.overall) >= 60 && parseFloat(student.overall) < 75;
      if (studentPerformanceFilter === 'Needs Focus (<60%)') return parseFloat(student.overall) < 60;
      return true;
    })
    .sort((a, b) => {
      if (studentSortBy === 'Performance Score') return parseFloat(b.overall) - parseFloat(a.overall);
      if (studentSortBy === 'Name') return a.name.localeCompare(b.name);
      if (studentSortBy === 'Attendance') return parseFloat(b.attendance) - parseFloat(a.attendance);
      return 0;
    });

  // Subjects Tab Data
  const subjectsData = [
    {
      id: 1,
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
      ],
      details: {
        description: 'Advanced Mathematics covering algebra, geometry, and calculus',
        teacher: 'Mr. Sharma',
        schedule: 'Mon, Wed, Fri - 9:00 AM',
        resources: ['Textbook Chapter 5-8', 'Practice Worksheets', 'Online Quizzes']
      }
    },
    {
      id: 2,
      name: 'Chemistry', 
      performance: '81.4%',
      trend: 'up',
      students: 32,
      avgScore: 81.4,
      topics: [
        { name: 'Organic Chemistry', score: 85.2, status: 'excellent' },
        { name: 'Inorganic Chemistry', score: 79.8, status: 'good' },
        { name: 'Physical Chemistry', score: 77.3, status: 'average' }
      ],
      details: {
        description: 'Comprehensive chemistry course with lab sessions',
        teacher: 'Ms. Patel',
        schedule: 'Tue, Thu - 10:30 AM',
        resources: ['Lab Manual', 'Chemical Safety Guide', 'Periodic Table']
      }
    },
    {
      id: 3,
      name: 'Physics',
      performance: '78.6%', 
      trend: 'down',
      students: 30,
      avgScore: 78.6,
      topics: [
        { name: 'Mechanics', score: 82.1, status: 'good' },
        { name: 'Electricity', score: 76.8, status: 'average' },
        { name: 'Optics', score: 74.2, status: 'average' }
      ],
      details: {
        description: 'Physics principles and practical applications',
        teacher: 'Dr. Kumar',
        schedule: 'Mon, Wed, Fri - 2:00 PM',
        resources: ['Physics Lab Kit', 'Simulation Software', 'Reference Books']
      }
    }
  ];

  // Assignments Tab Data
  const assignmentStats = [
    { title: 'Total Assignments', value: '48', change: '+5', period: 'vs last month' },
    { title: 'Completion Rate', value: '87.5%', change: '+4.2%', period: 'vs last month' },
    { title: 'Average Score', value: '79.3%', change: '+1.8%', period: 'vs last month' },
    { title: 'Late Submissions', value: '12.4%', change: '-2.3%', period: 'vs last month' }
  ];

  const assignmentDetails = [
    {
      id: 1,
      name: 'Quadratic Equations Practice',
      subject: 'Mathematics',
      dueDate: '19/11/2024',
      completion: '83.0%',
      avgScore: '84.2%',
      submissionStatus: 'On-time: 24, Late: 5, Pending: 6',
      details: {
        description: 'Practice problems on quadratic equations and applications',
        totalMarks: 100,
        difficulty: 'Medium',
        topics: ['Quadratic Formulas', 'Factoring', 'Graphing'],
        resources: ['Worksheet PDF', 'Solution Guide', 'Video Tutorials']
      }
    },
    {
      id: 2,
      name: "Newton's Laws Lab Report", 
      subject: 'Physics',
      dueDate: '18/11/2024',
      completion: '75.0%',
      avgScore: '78.5%',
      submissionStatus: 'On-time: 22, Late: 3, Pending: 10',
      details: {
        description: 'Laboratory report on Newton laws of motion experiments',
        totalMarks: 50,
        difficulty: 'High',
        topics: ['Motion', 'Forces', 'Acceleration'],
        resources: ['Lab Template', 'Safety Guidelines', 'Reference Materials']
      }
    }
  ];

  // Attendance Tab Data
  const attendanceStats = [
    { title: 'Overall Attendance', value: '91.2%', change: '+2.8%', period: 'vs last month' },
    { title: 'Weekly Attendance', value: '23.5', change: '+1.4', period: 'vs last week' },
    { title: 'Classes Conducted', value: '8', change: '-1', period: 'vs last week' },
    { title: 'Student Present', value: '142', change: '-1', period: 'vs yesterday' }
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
    { title: 'Performance Forecast', value: '88.2%', change: '+2.1%', period: 'vs last month' },
    { title: 'Attendance Prediction', value: '93.1%', change: '+1.2%', period: 'vs last month' },
    { title: 'Risk Students', value: '5', change: '-2', period: 'vs last month' },
    { title: 'Completion Rate', value: '94.5%', change: '+3.2%', period: 'vs last month' }
  ];

  const aiInsights = [
    {
      id: 1,
      title: 'Mathematics scores trending upward',
      description: 'Average scores improved by 7.2% over the last 3 months. Current trajectory suggests continued improvement.',
      confidence: '84% Confidence',
      type: 'positive',
      icon: TrendingUp,
      details: {
        analysis: 'Strong performance in algebra and calculus sections',
        factors: ['Improved teaching methods', 'Student engagement', 'Practice materials'],
        recommendations: ['Continue current strategy', 'Introduce advanced topics', 'Group learning sessions']
      }
    },
    {
      id: 2,
      title: 'Late submission pattern identified',
      description: 'Students in G-B show 28% late submission rate compared to other classes.',
      confidence: '92% Confidence',
      type: 'warning',
      icon: AlertCircle,
      details: {
        analysis: 'Pattern observed in physics and chemistry assignments',
        factors: ['Complex topics', 'Time management issues', 'Resource accessibility'],
        recommendations: ['Simplify instructions', 'Extended deadlines', 'Additional support']
      }
    },
    {
      id: 3,
      title: 'Friday attendance needs attention',
      description: 'Consistent 6% drop in attendance on Fridays compared to other weekdays.',
      confidence: '88% Confidence',
      type: 'attention',
      icon: Calendar,
      details: {
        analysis: 'Lower engagement observed in afternoon sessions',
        factors: ['Weekend anticipation', 'Schedule conflicts', 'Course difficulty'],
        recommendations: ['Interactive Friday activities', 'Parent communication', 'Flexible scheduling']
      }
    },
    {
      id: 4,
      title: 'Early intervention needed',
      description: '5 students showing declining performance across multiple subjects.',
      confidence: '96% Confidence',
      type: 'critical',
      icon: Users,
      details: {
        analysis: 'Performance drop in mathematics and science subjects',
        factors: ['Learning gaps', 'Personal issues', 'Motivation challenges'],
        recommendations: ['One-on-one counseling', 'Personalized learning plans', 'Parent meetings']
      }
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
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'average': return 'text-orange-600';
      case 'needs-improvement': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const downloadSubjectReport = (subject) => {
    const report = {
      title: `${subject.name} Analysis Report`,
      performance: subject.performance,
      avgScore: subject.avgScore,
      students: subject.students,
      topics: subject.topics,
      timestamp: new Date().toLocaleString()
    };
    console.log('Downloading subject report:', report);
    alert(`Downloading ${subject.name} report as PDF...`);
  };

  const downloadAssignmentReport = (assignment) => {
    const report = {
      title: `${assignment.name} Assignment Report`,
      subject: assignment.subject,
      completion: assignment.completion,
      avgScore: assignment.avgScore,
      timestamp: new Date().toLocaleString()
    };
    console.log('Downloading assignment report:', report);
    alert(`Downloading ${assignment.name} report as PDF...`);
  };

  // Modal Components
  const StudentReportModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-slate-800' : 'bg-white'
      }`}>
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-slate-700' : 'border-gray-200'
        }`}>
          <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Student Performance Report - {selectedStudent?.name}
          </h3>
          <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
              <div className="text-sm text-gray-500">Overall Performance</div>
              <div className="text-2xl font-bold text-green-600">{selectedStudent?.overall}</div>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
              <div className="text-sm text-gray-500">Attendance</div>
              <div className="text-2xl font-bold text-blue-600">{selectedStudent?.attendance}</div>
            </div>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {selectedStudent?.details.strengths.map((strength, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {strength}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recommendations</h4>
            <ul className="space-y-2">
              {selectedStudent?.details.recommendations.map((rec, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const SubjectDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-slate-800' : 'bg-white'
      }`}>
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-slate-700' : 'border-gray-200'
        }`}>
          <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {selectedSubject?.name} - Detailed Analysis
          </h3>
          <button onClick={() => setSelectedSubject(null)} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-slate-700' : 'bg-blue-50'}`}>
              <div className="text-2xl font-bold text-blue-600">{selectedSubject?.performance}</div>
              <div className="text-sm text-gray-500">Performance</div>
            </div>
            <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-slate-700' : 'bg-green-50'}`}>
              <div className="text-2xl font-bold text-green-600">{selectedSubject?.students}</div>
              <div className="text-sm text-gray-500">Students</div>
            </div>
            <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-slate-700' : 'bg-purple-50'}`}>
              <div className="text-2xl font-bold text-purple-600">{selectedSubject?.avgScore}%</div>
              <div className="text-sm text-gray-500">Avg Score</div>
            </div>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Topic Performance</h4>
            <div className="space-y-3">
              {selectedSubject?.topics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{topic.name}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${topic.score}%` }}
                      ></div>
                    </div>
                    <span className="font-medium">{topic.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const InsightDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-slate-800' : 'bg-white'
      }`}>
        <div className={`flex items-center justify-between p-6 border-b ${
          isDarkMode ? 'border-slate-700' : 'border-gray-200'
        }`}>
          <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            AI Insight Details
          </h3>
          <button onClick={() => setSelectedInsight(null)} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className={`p-4 rounded-lg ${
            selectedInsight?.type === 'positive' ? 'bg-green-50 border-l-4 border-green-500' :
            selectedInsight?.type === 'warning' ? 'bg-orange-50 border-l-4 border-orange-500' :
            selectedInsight?.type === 'attention' ? 'bg-yellow-50 border-l-4 border-yellow-500' :
            'bg-red-50 border-l-4 border-red-500'
          }`}>
            <h4 className={`text-lg font-semibold mb-2 ${
              selectedInsight?.type === 'positive' ? 'text-green-700' :
              selectedInsight?.type === 'warning' ? 'text-orange-700' :
              selectedInsight?.type === 'attention' ? 'text-yellow-700' :
              'text-red-700'
            }`}>
              {selectedInsight?.title}
            </h4>
            <p className="text-gray-700">{selectedInsight?.description}</p>
            <div className="mt-2 text-sm text-gray-500">{selectedInsight?.confidence}</div>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Detailed Analysis</h4>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
              {selectedInsight?.details.analysis}
            </p>
          </div>
          
          <div>
            <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recommendations</h4>
            <ul className="space-y-2">
              {selectedInsight?.details.recommendations.map((rec, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Lightbulb size={16} className="text-yellow-500" />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

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
          <select 
            value={studentPerformanceFilter}
            onChange={(e) => setStudentPerformanceFilter(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            {performanceOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Sort By
          </label>
          <select 
            value={studentSortBy}
            onChange={(e) => setStudentSortBy(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            {sortOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
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
            {filteredStudents.map((student, index) => (
              <div key={student.id} className={`p-4 rounded-lg border ${
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
                    <button 
                      onClick={() => setSelectedStudent(student)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
                    >
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
          <div key={subject.id} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
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
                  <tr key={subject.id} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
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
                        <button 
                          onClick={() => setSelectedSubject(subject)}
                          className="p-1 text-blue-500 hover:bg-blue-50 rounded"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={() => downloadSubjectReport(subject)}
                          className="p-1 text-green-500 hover:bg-green-50 rounded"
                        >
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
                <tr key={assignment.id} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
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
                      <button 
                        onClick={() => setSelectedAssignment(assignment)}
                        className="p-1 text-blue-500 hover:bg-blue-50 rounded"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => downloadAssignmentReport(assignment)}
                        className="p-1 text-green-500 hover:bg-green-50 rounded"
                      >
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
            const values = [94.2, 92.1, 95.8];
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
                    <button 
                      onClick={() => setSelectedInsight(aiInsights[0])}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
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
                    <button 
                      onClick={() => setSelectedInsight(aiInsights[1])}
                      className="text-orange-600 font-medium hover:text-orange-700"
                    >
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
                    <button 
                      onClick={() => setSelectedInsight(aiInsights[2])}
                      className="text-green-600 font-medium hover:text-green-700"
                    >
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
                    <button 
                      onClick={() => setSelectedInsight(aiInsights[3])}
                      className="text-red-600 font-medium hover:text-red-700"
                    >
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
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                  isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {classOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${
                  isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {periodOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <button onClick={exportToPDF} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
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

      {/* Modals */}
      {selectedStudent && <StudentReportModal />}
      {selectedSubject && <SubjectDetailModal />}
      {selectedInsight && <InsightDetailModal />}
    </div>
  );
};

export default TeacherReportsAnalytics;