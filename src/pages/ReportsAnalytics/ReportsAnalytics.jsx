import React, { useState, useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import {
  Users,
  TrendingUp,
  DollarSign,
  Star,
  ChevronDown,
  Filter,
  Download,
  MoreHorizontal,
  X,
  Calendar,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const ReportsAnalytics = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [filters, setFilters] = useState({
    dateRange: 'thisMonth',
    subject: 'all',
    performance: 'all',
    attendance: 'all'
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const applyFilters = () => {
    // Filter logic is now handled by useMemo hooks below
    console.log('Applying filters:', filters);
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      dateRange: 'thisMonth',
      subject: 'all',
      performance: 'all',
      attendance: 'all'
    });
  };

  // Base data - this would typically come from your API
  const baseClassPerformance = [
    {
      class: 'Mathematics Grade 10',
      teacher: 'Ms. Sarah Lee',
      students: 32,
      attendance: 94,
      performance: 4.8,
      fees: '₹8,500',
      status: 'Excellent',
      subject: 'mathematics',
      dateRange: 'thisMonth'
    },
    {
      class: 'Physics Grade 11',
      teacher: 'Dr. John Smith',
      students: 28,
      attendance: 91,
      performance: 4.6,
      fees: '₹7,200',
      status: 'Good',
      subject: 'physics',
      dateRange: 'thisMonth'
    },
    {
      class: 'Chemistry Grade 10',
      teacher: 'Ms. Emily Brown',
      students: 35,
      attendance: 89,
      performance: 4.4,
      fees: '₹9,100',
      status: 'Good',
      subject: 'chemistry',
      dateRange: 'thisMonth'
    },
    {
      class: 'Biology Grade 9',
      teacher: 'Mrs. Lisa Chen',
      students: 30,
      attendance: 87,
      performance: 4.2,
      fees: '₹6,800',
      status: 'Fair',
      subject: 'biology',
      dateRange: 'thisMonth'
    },
    {
      class: 'English Writing 1',
      teacher: 'Mr. Robert Johnson',
      students: 25,
      attendance: 85,
      performance: 4.0,
      fees: '₹5,500',
      status: 'Fair',
      subject: 'english',
      dateRange: 'thisMonth'
    },
    {
      class: 'Advanced Mathematics',
      teacher: 'Dr. Michael Wilson',
      students: 20,
      attendance: 78,
      performance: 3.8,
      fees: '₹12,000',
      status: 'Fair',
      subject: 'mathematics',
      dateRange: 'lastMonth'
    },
    {
      class: 'Organic Chemistry',
      teacher: 'Prof. Amanda Davis',
      students: 18,
      attendance: 96,
      performance: 4.9,
      fees: '₹15,000',
      status: 'Excellent',
      subject: 'chemistry',
      dateRange: 'lastMonth'
    }
  ];

  const baseSubjectData = [
    { subject: 'Mathematics', students: 85, color: 'bg-blue-500', category: 'mathematics' },
    { subject: 'Physics', students: 76, color: 'bg-green-500', category: 'physics' },
    { subject: 'Chemistry', students: 68, color: 'bg-orange-500', category: 'chemistry' },
    { subject: 'Biology', students: 45, color: 'bg-purple-500', category: 'biology' },
    { subject: 'English', students: 25, color: 'bg-red-500', category: 'english' }
  ];

  // Filter class performance data based on applied filters
  const filteredClassData = useMemo(() => {
    return baseClassPerformance.filter(classData => {
      // Date Range Filter
      if (filters.dateRange !== 'all' && classData.dateRange !== filters.dateRange) {
        return false;
      }

      // Subject Filter
      if (filters.subject !== 'all' && classData.subject !== filters.subject) {
        return false;
      }

      // Performance Filter
      if (filters.performance !== 'all') {
        const performance = classData.performance;
        switch (filters.performance) {
          case 'excellent':
            if (performance < 4.5) return false;
            break;
          case 'good':
            if (performance < 4.0 || performance >= 4.5) return false;
            break;
          case 'fair':
            if (performance < 3.5 || performance >= 4.0) return false;
            break;
          case 'poor':
            if (performance >= 3.5) return false;
            break;
          default:
            break;
        }
      }

      // Attendance Filter
      if (filters.attendance !== 'all') {
        const attendance = classData.attendance;
        switch (filters.attendance) {
          case 'high':
            if (attendance < 90) return false;
            break;
          case 'medium':
            if (attendance < 80 || attendance >= 90) return false;
            break;
          case 'low':
            if (attendance >= 80) return false;
            break;
          default:
            break;
        }
      }

      return true;
    });
  }, [filters]);

  // Filter subject analysis data based on applied filters
  const filteredSubjectData = useMemo(() => {
    if (filters.subject === 'all') {
      return baseSubjectData;
    }
    return baseSubjectData.filter(subject => subject.category === filters.subject);
  }, [filters.subject]);

  // Calculate filtered statistics
  const filteredStats = useMemo(() => {
    const totalStudents = filteredClassData.reduce((sum, classData) => sum + classData.students, 0);
    const totalClasses = filteredClassData.length;
    const avgAttendance = totalClasses > 0
      ? (filteredClassData.reduce((sum, classData) => sum + classData.attendance, 0) / totalClasses).toFixed(1)
      : 0;
    const avgRating = totalClasses > 0
      ? (filteredClassData.reduce((sum, classData) => sum + classData.performance, 0) / totalClasses).toFixed(1)
      : 0;

    return [
      {
        title: 'Total Students',
        value: totalStudents.toLocaleString(),
        icon: Users,
        color: 'blue'
      },
      {
        title: 'Active Classes',
        value: totalClasses.toString(),
        icon: BookOpen,
        color: 'green'
      },
      {
        title: 'Avg Attendance',
        value: `${avgAttendance}%`,
        icon: TrendingUp,
        color: 'orange'
      },
      {
        title: 'Avg Rating',
        value: avgRating,
        icon: Star,
        color: 'purple'
      }
    ];
  }, [filteredClassData]);

  // Calculate filtered financial data
  const filteredFinancialData = useMemo(() => {
    const totalRevenue = filteredClassData.reduce((sum, classData) => {
      const fees = parseFloat(classData.fees.replace(/[₹,]/g, ''));
      return sum + (fees * classData.students);
    }, 0);

    const estimatedExpenses = totalRevenue * 0.7; // Assuming 70% expense ratio
    const netProfit = totalRevenue - estimatedExpenses;

    return [
      { label: 'Gross Revenue', amount: `₹${totalRevenue.toLocaleString()}`, period: 'Current Month' },
      { label: 'Total Expenses', amount: `₹${estimatedExpenses.toLocaleString()}`, period: 'Current Month' },
      { label: 'Net Profit', amount: `₹${netProfit.toLocaleString()}`, period: 'Current Month' }
    ];
  }, [filteredClassData]);

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600' },
      orange: { iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
      purple: { iconBg: 'bg-purple-100', iconColor: 'text-purple-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  // Revenue data for different periods (unchanged as it's not directly filtered)
  const revenueData = {
    monthly: [
      { period: 'Jan', value: 30 },
      { period: 'Feb', value: 25 },
      { period: 'Mar', value: 35 },
      { period: 'Apr', value: 20 },
      { period: 'May', value: 30 },
      { period: 'Jun', value: 45 },
      { period: 'Jul', value: 55 }
    ],
    quarterly: [
      { period: 'Q1', value: 90 },
      { period: 'Q2', value: 95 },
      { period: 'Q3', value: 110 },
      { period: 'Q4', value: 125 }
    ]
  };

  const currentRevenueData = revenueData[selectedPeriod];
  const maxValue = Math.max(...currentRevenueData.map(d => d.value));

  const attendanceAnalysis = [
    { day: 'Monday', percentage: 92, color: 'bg-green-400' },
    { day: 'Tuesday', percentage: 88, color: 'bg-blue-400' },
    { day: 'Wednesday', percentage: 85, color: 'bg-yellow-400' },
    { day: 'Thursday', percentage: 90, color: 'bg-purple-400' },
    { day: 'Friday', percentage: 78, color: 'bg-red-400' }
  ];

  const growthAnalysis = [
    { category: 'Student Enrollment', value: '₹48,500', period: 'Current Month' },
    { category: 'Course Sales', value: '₹32,400', period: 'Current Month' },
    { category: 'Other Income', value: '₹18,500', period: 'Current Month' }
  ];

  const expenseBreakdown = [
    { category: 'Teacher Salaries', amount: '₹35,500' },
    { category: 'Facility Rent', amount: '₹22,500' },
    { category: 'Utilities', amount: '₹8,500' },
    { category: 'Materials', amount: '₹12,500' },
    { category: 'Marketing', amount: '₹6,500' },
    { category: 'Other', amount: '₹4,500' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': return 'text-green-600 bg-green-100';
      case 'Good': return 'text-blue-600 bg-blue-100';
      case 'Fair': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const FilterPanel = () => (
    <div className={`absolute top-full right-0 mt-2 w-80 rounded-lg border shadow-lg z-50 ${isDarkMode
        ? 'bg-slate-800 border-slate-700'
        : 'bg-white border-gray-300'
      }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Filter Reports
          </h3>
          <button
            onClick={toggleFilter}
            className={`p-1 rounded-lg ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
          >
            <X size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
          </button>
        </div>

        <div className="space-y-4">
          {/* Date Range Filter */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Date Range
            </label>
            <select
              value={filters.dateRange}
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              className={`w-full p-2 rounded-lg border ${isDarkMode
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
                }`}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="thisWeek">This Week</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="thisYear">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Subject
            </label>
            <select
              value={filters.subject}
              onChange={(e) => handleFilterChange('subject', e.target.value)}
              className={`w-full p-2 rounded-lg border ${isDarkMode
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
                }`}
            >
              <option value="all">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="english">English</option>
            </select>
          </div>

          {/* Performance Filter */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Performance Level
            </label>
            <select
              value={filters.performance}
              onChange={(e) => handleFilterChange('performance', e.target.value)}
              className={`w-full p-2 rounded-lg border ${isDarkMode
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
                }`}
            >
              <option value="all">All Performance Levels</option>
              <option value="excellent">Excellent (4.5+)</option>
              <option value="good">Good (4.0-4.4)</option>
              <option value="fair">Fair (3.5-3.9)</option>
              <option value="poor">Poor (Below 3.5)</option>
            </select>
          </div>

          {/* Attendance Filter */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Attendance Rate
            </label>
            <select
              value={filters.attendance}
              onChange={(e) => handleFilterChange('attendance', e.target.value)}
              className={`w-full p-2 rounded-lg border ${isDarkMode
                  ? 'bg-slate-700 border-slate-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
                }`}
            >
              <option value="all">All Attendance Rates</option>
              <option value="high">High (90%+)</option>
              <option value="medium">Medium (80-89%)</option>
              <option value="low">Low (Below 80%)</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-slate-600">
          <button
            onClick={resetFilters}
            className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${isDarkMode
                ? 'border-slate-600 text-gray-300 hover:bg-slate-700'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );

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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 md:mb-8">
            <div className="text-left">
              <h1 className={`text-2xl sm:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Reports & Analytics
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Comprehensive insights on your institute's performance
              </p>
              {/* Filter Status Indicator */}
              {(filters.dateRange !== 'thisMonth' || filters.subject !== 'all' || filters.performance !== 'all' || filters.attendance !== 'all') && (
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`text-xs md:text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Filters applied:
                  </span>
                  {filters.subject !== 'all' && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {filters.subject}
                    </span>
                  )}
                  {filters.performance !== 'all' && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {filters.performance}
                    </span>
                  )}
                  {filters.attendance !== 'all' && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                      {filters.attendance} attendance
                    </span>
                  )}
                  {filters.dateRange !== 'thisMonth' && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      {filters.dateRange}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 md:gap-3 relative">
              <div className="relative flex-1 sm:flex-none">
                <button
                  onClick={toggleFilter}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg border transition-colors text-sm md:text-base ${isDarkMode
                      ? 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    } ${isFilterOpen ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <Filter size={16} />
                  Filter
                  <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                {isFilterOpen && <FilterPanel />}
              </div>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base">
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>

          {/* Stats Grid - Now uses filtered data */}
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {filteredStats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = getColorClasses(stat.color);
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border ${isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-white border-gray-300 shadow-sm'
                    }`}
                >
                  <div className="flex justify-between items-start mb-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* Revenue Trends Chart */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Revenue Trends
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPeriod('monthly')}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${selectedPeriod === 'monthly'
                        ? isDarkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-100 text-blue-700'
                        : isDarkMode
                          ? 'text-gray-400 hover:bg-slate-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setSelectedPeriod('quarterly')}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${selectedPeriod === 'quarterly'
                        ? isDarkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-100 text-blue-700'
                        : isDarkMode
                          ? 'text-gray-400 hover:bg-slate-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    Quarterly
                  </button>
                </div>
              </div>

              <div className="h-64 flex items-end justify-between gap-2 mb-4">
                {currentRevenueData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-blue-500 rounded-t-lg mb-2 transition-all hover:bg-blue-600 cursor-pointer"
                      style={{ height: `${(data.value / maxValue) * 200}px` }}
                      title={`${data.period}: ${data.value}k`}
                    />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {data.period}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedPeriod === 'monthly' ? 'Monthly Revenue (in thousands)' : 'Quarterly Revenue (in thousands)'}
                </p>
              </div>
            </div>

            {/* Subject Analysis - Now uses filtered data */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject Analysis
              </h2>

              <div className="space-y-4">
                {filteredSubjectData.length > 0 ? filteredSubjectData.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {subject.subject}
                      </span>
                      <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.students}
                      </span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-full rounded-full ${subject.color}`}
                        style={{ width: `${(subject.students / 100) * 100}%` }}
                      />
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-8">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      No subjects match the current filters
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* Daily Attendance Analysis */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Daily Attendance Analysis
              </h2>

              <div className="space-y-4">
                {attendanceAnalysis.map((day, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${day.color}`} />
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {day.day}
                      </span>
                    </div>
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {day.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Growth Analysis */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Monthly Growth Analysis
              </h2>

              <div className="space-y-4">
                {growthAnalysis.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.category}
                      </span>
                      <span className={`text-lg font-bold text-green-500`}>
                        {item.value}
                      </span>
                    </div>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

            {/* Financial Summary - Now uses filtered data */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Financial Summary
              </h2>

              <div className="space-y-4">
                {filteredFinancialData.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-bold ${item.label === 'Net Profit' ? 'text-green-500' : isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        {item.amount}
                      </span>
                    </div>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Expense Breakdown
              </h2>

              <div className="space-y-4">
                {expenseBreakdown.map((expense, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {expense.category}
                    </span>
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {expense.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Retention */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Student Retention
              </h2>

              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={isDarkMode ? "#374151" : "#e5e7eb"}
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeDasharray="80, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-2xl font-bold text-green-500`}>80%</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Students are staying
                  </p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    compared to last year
                  </p>
                </div>
                <div className="mt-4 space-y-2 w-full">
                  <div className="flex items-center justify-between text-sm">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Average Retention
                    </span>
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      4.7 Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Satisfaction Rate
                    </span>
                    <span className="font-semibold text-green-500">
                      91%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Class Performance - Now uses filtered data */}
          <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Detailed Class Performance
                {filteredClassData.length !== baseClassPerformance.length && (
                  <span className={`ml-2 text-sm font-normal ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    ({filteredClassData.length} of {baseClassPerformance.length} classes)
                  </span>
                )}
              </h2>
              <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                <MoreHorizontal size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
              </button>
            </div>

            {filteredClassData.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                      <th className={`text-left py-3 px-4 font-semibold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Class Name
                      </th>
                      <th className={`text-left py-3 px-4 font-semibold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Teacher
                      </th>
                      <th className={`text-left py-3 px-4 font-semibold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Students
                      </th>
                      <th className={`text-left py-3 px-4 font-semibold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Attendance
                      </th>
                      <th className={`text-left py-3 px-4 font-semibold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Performance
                      </th>
                      <th className={`text-left py-3 px-4 font-semibold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Monthly Fees
                      </th>
                      <th className={`text-left py-3 px-4 font-semibold text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClassData.map((classData, index) => (
                      <tr key={index} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                        <td className={`py-4 px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          <div className="font-semibold">{classData.class}</div>
                        </td>
                        <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-xs font-semibold text-blue-600">
                                {classData.teacher.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span className="text-sm">{classData.teacher}</span>
                          </div>
                        </td>
                        <td className={`py-4 px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {classData.students}
                        </td>
                        <td className={`py-4 px-4`}>
                          <div className="flex items-center gap-2">
                            <div className={`w-16 h-2 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                              <div
                                className="h-full rounded-full bg-green-500"
                                style={{ width: `${classData.attendance}%` }}
                              />
                            </div>
                            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {classData.attendance}%
                            </span>
                          </div>
                        </td>
                        <td className={`py-4 px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {classData.performance}
                        </td>
                        <td className={`py-4 px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {classData.fees}
                        </td>
                        <td className={`py-4 px-4`}>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(classData.status)}`}>
                            {classData.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                  }`}>
                  <BookOpen size={32} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  No classes found
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  No classes match the current filter criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default ReportsAnalytics;