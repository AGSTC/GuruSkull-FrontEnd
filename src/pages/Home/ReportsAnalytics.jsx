import React, { useState } from 'react';
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
  MoreHorizontal
} from 'lucide-react';

const ReportsAnalytics = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const stats = [
    {
      title: 'Total Students',
      value: '347,850',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Students',
      value: '248',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Attendance Rate',
      value: '89.2%',
      icon: TrendingUp,
      color: 'orange'
    },
    {
      title: 'Average Rating',
      value: '4.7',
      icon: Star,
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      green: { iconBg: 'bg-green-100', iconColor: 'text-green-600' },
      orange: { iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
      purple: { iconBg: 'bg-purple-100', iconColor: 'text-purple-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const revenueData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 25 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 20 },
    { month: 'May', value: 30 },
    { month: 'Jun', value: 45 },
    { month: 'Jul', value: 55 }
  ];

  const maxValue = Math.max(...revenueData.map(d => d.value));

  const subjectAnalysis = [
    { subject: 'Mathematics', students: 85, color: 'bg-blue-500' },
    { subject: 'Physics', students: 76, color: 'bg-green-500' },
    { subject: 'Chemistry', students: 68, color: 'bg-orange-500' },
    { subject: 'Biology', students: 45, color: 'bg-purple-500' }
  ];

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

  const financialData = [
    { label: 'Gross Revenue', amount: '₹99,400', period: 'Current Month' },
    { label: 'Total Expenses', amount: '₹89,500', period: 'Current Month' },
    { label: 'Net Profit', amount: '₹9,900', period: 'Current Month' }
  ];

  const classPerformance = [
    { 
      class: 'Mathematics Grade 10', 
      teacher: 'Ms. Sarah Lee', 
      students: 32, 
      attendance: 94, 
      performance: 4.8, 
      fees: '₹8,500',
      status: 'Excellent'
    },
    { 
      class: 'Physics Grade 11', 
      teacher: 'Dr. John Smith', 
      students: 28, 
      attendance: 91, 
      performance: 4.6, 
      fees: '₹7,200',
      status: 'Good'
    },
    { 
      class: 'Chemistry Grade 10', 
      teacher: 'Ms. Emily Brown', 
      students: 35, 
      attendance: 89, 
      performance: 4.4, 
      fees: '₹9,100',
      status: 'Good'
    },
    { 
      class: 'Maths Science Grade 8', 
      teacher: 'Mrs. Lisa Chen', 
      students: 30, 
      attendance: 87, 
      performance: 4.2, 
      fees: '₹6,800',
      status: 'Fair'
    },
    { 
      class: 'English Writing 1', 
      teacher: 'Mr. Robert Johnson', 
      students: 25, 
      attendance: 85, 
      performance: 4.0, 
      fees: '₹5,500',
      status: 'Fair'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Excellent': return 'text-green-600 bg-green-100';
      case 'Good': return 'text-blue-600 bg-blue-100';
      case 'Fair': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
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
                Reports & Analytics
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Comprehensive insights on your institute's performance
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Filter size={16} />
                Filter
                <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={16} />
                Export
              </button>
            </div>
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
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Revenue Trends
                </h2>
                <div className="flex items-center gap-2">
                  <button className={`px-3 py-1 rounded-lg text-sm ${
                    isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'
                  }`}>
                    Monthly
                  </button>
                  <button className={`px-3 py-1 rounded-lg text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Quarterly
                  </button>
                </div>
              </div>
              
              <div className="h-64 flex items-end justify-between gap-2 mb-4">
                {revenueData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-blue-500 rounded-t-lg mb-2 transition-all hover:bg-blue-600"
                      style={{ height: `${(data.value / maxValue) * 200}px` }}
                    />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Analysis */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subject Analysis
              </h2>
              
              <div className="space-y-4">
                {subjectAnalysis.map((subject, index) => (
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
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Daily Attendance Analysis */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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
            
            {/* Financial Summary */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Financial Summary
              </h2>
              
              <div className="space-y-4">
                {financialData.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-bold ${
                        item.label === 'Net Profit' ? 'text-green-500' : isDarkMode ? 'text-white' : 'text-gray-900'
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
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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

          {/* Detailed Class Performance */}
          <div className={`p-6 rounded-2xl border ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Detailed Class Performance
              </h2>
              <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}>
                <MoreHorizontal size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
              </button>
            </div>
            
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
                  {classPerformance.map((classData, index) => (
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
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default ReportsAnalytics;