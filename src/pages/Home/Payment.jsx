import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  CreditCard,
  Calendar
} from 'lucide-react';

const Payment = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Stats data
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹94,500',
      change: '+12.5%',
      trend: 'up',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Pending Payments',
      value: '₹24,340',
      change: '+5.2%',
      trend: 'up',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Overdue',
      value: '₹8,200',
      change: '-2.1%',
      trend: 'down',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      title: 'Completed',
      value: '₹180,254',
      change: '+8.9%',
      trend: 'up',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    }
  ];

  // Chart data (mock data for visualization)
  const chartData = [
    { month: 'Jan', income: 65, pending: 28, overdue: 15 },
    { month: 'Feb', income: 45, pending: 25, overdue: 12 },
    { month: 'Mar', income: 75, pending: 30, overdue: 18 },
    { month: 'Apr', income: 55, pending: 22, overdue: 10 },
    { month: 'May', income: 85, pending: 35, overdue: 20 },
    { month: 'Jun', income: 70, pending: 28, overdue: 15 },
    { month: 'Jul', income: 90, pending: 40, overdue: 22 },
    { month: 'Aug', value: 60, pending: 25, overdue: 12 },
    { month: 'Sep', income: 80, pending: 32, overdue: 18 },
    { month: 'Oct', income: 75, pending: 30, overdue: 16 },
    { month: 'Nov', income: 95, pending: 42, overdue: 25 },
    { month: 'Dec', income: 85, pending: 38, overdue: 20 }
  ];

  // Student payments data
  const studentPayments = [
    {
      name: 'Sarah Johnson',
      amount: '₹5,500',
      status: 'Paid',
      date: '2024-12-15',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      name: 'Sarah Johnson',
      amount: '₹5,500',
      status: 'Pending',
      date: '2024-12-10',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      name: 'Sarah Johnson',
      amount: '₹5,500',
      status: 'Overdue',
      date: '2024-12-05',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      name: 'Sarah Johnson',
      amount: '₹5,500',
      status: 'Paid',
      date: '2024-12-01',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      name: 'Sarah Johnson',
      amount: '₹5,500',
      status: 'Pending',
      date: '2024-11-28',
      statusColor: 'bg-yellow-100 text-yellow-800'
    }
  ];

  // Payment methods data
  const paymentMethods = [
    { method: 'Online Payment', percentage: 45, color: 'bg-blue-500' },
    { method: 'Cash', percentage: 30, color: 'bg-green-500' },
    { method: 'Cheque', percentage: 25, color: 'bg-purple-500' }
  ];

  // Payment reminders data
  const paymentReminders = [
    {
      name: 'Alka Rajkagir',
      amount: '₹5,500',
      daysOverdue: 15,
      bgColor: 'bg-red-50'
    },
    {
      name: 'Alka Rajkagir',
      amount: '₹4,780',
      daysOverdue: 8,
      bgColor: 'bg-red-50'
    },
    {
      name: 'Alka Rajkagir',
      amount: '₹6,200',
      daysOverdue: 22,
      bgColor: 'bg-red-50'
    },
    {
      name: 'Alka Rajkagir',
      amount: '₹3,450',
      daysOverdue: 5,
      bgColor: 'bg-red-50'
    }
  ];

  // Installment plans data
  const installmentPlans = [
    {
      name: 'Manu Patel',
      amount: '₹12,000',
      installment: '2 of 4',
      nextDue: '2024-12-20'
    },
    {
      name: 'Manu Patel',
      amount: '₹15,000',
      installment: '1 of 3',
      nextDue: '2024-12-25'
    },
    {
      name: 'Manu Patel',
      amount: '₹8,500',
      installment: '3 of 4',
      nextDue: '2024-12-30'
    },
    {
      name: 'Manu Patel',
      amount: '₹10,000',
      installment: '1 of 2',
      nextDue: '2024-12-18'
    }
  ];

  // Scholarships data
  const scholarships = [
    {
      name: 'Manu Patel',
      percentage: '50%',
      program: 'Merit Scholarship',
      amount: '₹12,000',
      bgColor: 'bg-purple-100'
    },
    {
      name: 'Rahul Patel',
      percentage: '25%',
      program: 'Need Scholarship',
      amount: '₹6,000',
      bgColor: 'bg-purple-100'
    },
    {
      name: 'Rahul Patel',
      percentage: '75%',
      program: 'Merit Scholarship',
      amount: '₹18,000',
      bgColor: 'bg-purple-100'
    },
    {
      name: 'Rahul Patel',
      percentage: '100%',
      program: 'Full Scholarship',
      amount: '₹25,000',
      bgColor: 'bg-purple-100'
    }
  ];

  // Refunds data
  const refunds = [
    {
      name: 'Saket Shah',
      reason: 'Course Cancellation',
      amount: '₹8,500',
      date: '2024-12-10',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Saket Shah',
      reason: 'Duplicate Payment',
      amount: '₹5,500',
      date: '2024-12-08',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Saket Shah',
      reason: 'Course Transfer',
      amount: '₹3,200',
      date: '2024-12-05',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Saket Shah',
      reason: 'Service Issue',
      amount: '₹4,800',
      date: '2024-12-03',
      bgColor: 'bg-orange-50'
    }
  ];

  // Banking overview data
  const bankingData = [
    {
      bank: 'State Bank',
      account: 'Savings Account',
      balance: '₹1,25,000',
      bgColor: 'bg-teal-50'
    },
    {
      bank: 'State Bank',
      account: 'Current Account',
      balance: '₹85,000',
      bgColor: 'bg-teal-50'
    },
    {
      bank: 'State Bank',
      account: 'Fixed Deposit',
      balance: '₹2,50,000',
      bgColor: 'bg-teal-50'
    },
    {
      bank: 'State Bank',
      account: 'Business Account',
      balance: '₹95,000',
      bgColor: 'bg-teal-50'
    }
  ];

  // Teacher payments data
  const teacherPayments = [
    {
      name: 'Sarah Johnson',
      position: 'Senior Math Teacher',
      subjects: 'Mathematics',
      salary: '₹8,500',
      bonus: 'Paid',
      date: '2024-12-15'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Math Teacher',
      subjects: 'Mathematics',
      salary: '₹8,500',
      bonus: 'Paid',
      date: '2024-12-15'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Math Teacher',
      subjects: 'Mathematics',
      salary: '₹8,500',
      bonus: 'Pending',
      date: '2024-12-15'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Math Teacher',
      subjects: 'Mathematics',
      salary: '₹8,500',
      bonus: 'Paid',
      date: '2024-12-15'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Math Teacher',
      subjects: 'Mathematics',
      salary: '₹8,500',
      bonus: 'Paid',
      date: '2024-12-15'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Math Teacher',
      subjects: 'Mathematics',
      salary: '₹8,500',
      bonus: 'Paid',
      date: '2024-12-15'
    }
  ];

  // Expense breakdown data
  const expenses = [
    { category: 'Teacher Salaries', amount: '₹1,18,500', color: 'bg-red-500' },
    { category: 'Staff Salaries', amount: '₹45,200', color: 'bg-green-500' },
    { category: 'Utilities', amount: '₹12,800', color: 'bg-blue-500' },
    { category: 'Maintenance', amount: '₹8,500', color: 'bg-yellow-500' },
    { category: 'Facility Rent', amount: '₹25,000', color: 'bg-teal-500' }
  ];

  // Profit analysis data
  const profitData = [
    { category: 'Total Revenue', amount: '₹3,89,500', color: 'text-green-600' },
    { category: 'Total Expenses', amount: '₹2,10,000', color: 'text-red-600' },
    { category: 'Net Profit', amount: '₹1,79,500', color: 'text-blue-600' },
    { category: 'Profit Margin', amount: '46.1%', color: 'text-green-600' }
  ];

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="payments" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="text-left">
              <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Payment Management
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Comprehensive control financial management for your education institute
              </p>
            </div>
            <div className="flex gap-3">
              <button className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${
                isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Download size={16} />
                Bulk Export
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600">
                <Plus size={16} />
                Add Payment
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border ${
                  isDarkMode 
                    ? 'bg-slate-800 border-slate-700' 
                    : 'bg-white border-gray-300 shadow-sm'
                }`}
              >
                <h3 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.title}
                </h3>
                <p className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Management Chart */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Payment Management
              </h2>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Income</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Pending</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Overdue</span>
                </div>
              </div>
            </div>
            
            {/* Simple Bar Chart Representation */}
            <div className="flex items-end justify-between h-64 px-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="flex items-end gap-1">
                    <div 
                      className="w-4 bg-blue-500 rounded-t" 
                      style={{ height: `${data.income}px` }}
                    ></div>
                    <div 
                      className="w-4 bg-orange-500 rounded-t" 
                      style={{ height: `${data.pending}px` }}
                    ></div>
                    <div 
                      className="w-4 bg-red-500 rounded-t" 
                      style={{ height: `${data.overdue}px` }}
                    ></div>
                  </div>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            
            {/* Student Payment */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Student Payment
                </h2>
                <div className="flex gap-2">
                  <button className={`px-3 py-1 text-xs rounded-lg ${
                    isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    All Payment
                  </button>
                  <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-lg">
                    Due Payment
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                {studentPayments.map((payment, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {payment.name}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {payment.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {payment.amount}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${payment.statusColor}`}>
                        {payment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Payment Methods
              </h2>
              
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {method.method}
                      </span>
                      <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {method.percentage}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-2 rounded-full ${method.color}`}
                        style={{ width: `${method.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            
            {/* Payment Reminders */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Payment Reminders
                </h2>
                <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg">
                  Send Reminder
                </button>
              </div>
              
              <div className="space-y-3">
                {paymentReminders.map((reminder, index) => (
                  <div key={index} className={`p-4 rounded-lg ${reminder.bgColor}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{reminder.name}</p>
                        <p className="text-sm text-gray-600">{reminder.daysOverdue} days overdue</p>
                      </div>
                      <p className="font-medium text-gray-900">{reminder.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Installment Plans */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Installment Plans
              </h2>
              
              <div className="space-y-4">
                {installmentPlans.map((plan, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-slate-700' : 'bg-blue-50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {plan.name}
                      </p>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {plan.amount}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Installment {plan.installment}
                      </span>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Due: {plan.nextDue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            
            {/* Scholarships */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Scholarships
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarships.map((scholarship, index) => (
                  <div key={index} className={`p-4 rounded-lg ${scholarship.bgColor}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{scholarship.name}</p>
                        <p className="text-sm text-gray-600">{scholarship.program}</p>
                      </div>
                      <span className="text-lg font-bold text-purple-600">{scholarship.percentage}</span>
                    </div>
                    <p className="text-sm text-gray-700">Amount: {scholarship.amount}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Refunds & Adjustments */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Refunds & Adjustments
                </h2>
                <button className="px-3 py-1 bg-orange-500 text-white text-xs rounded-lg">
                  Process Refund
                </button>
              </div>
              
              <div className="space-y-3">
                {refunds.map((refund, index) => (
                  <div key={index} className={`p-4 rounded-lg ${refund.bgColor}`}>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-gray-900">{refund.name}</p>
                      <p className="font-medium text-gray-900">{refund.amount}</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{refund.reason}</p>
                    <p className="text-xs text-gray-500">{refund.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            
            {/* Banking Overview */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Banking Overview
              </h2>
              
              <div className="space-y-4">
                {bankingData.map((bank, index) => (
                  <div key={index} className={`p-4 rounded-lg ${bank.bgColor}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{bank.bank}</p>
                        <p className="text-sm text-gray-600">{bank.account}</p>
                      </div>
                      <p className="text-lg font-bold text-teal-600">{bank.balance}</p>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors">
                  Reconcile Accounts
                </button>
              </div>
            </div>
          </div>

          {/* Teacher Payment */}
          <div className={`p-6 rounded-2xl border mb-8 ${
            isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Teacher Payment
              </h2>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg">
                  Pay All
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg">
                  Generate Payroll
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b ${isDarkMode ? 'border-slate-600' : 'border-gray-200'}`}>
                    <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Teacher
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Position
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Subjects
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Salary
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Bonus
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Date
                    </th>
                    <th className={`text-left py-3 px-4 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teacherPayments.map((teacher, index) => (
                    <tr key={index} className={`border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
                      <td className={`py-4 px-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {teacher.name}
                      </td>
                      <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {teacher.position}
                      </td>
                      <td className={`py-4 px-4`}>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {teacher.subjects}
                        </span>
                      </td>
                      <td className={`py-4 px-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {teacher.salary}
                      </td>
                      <td className={`py-4 px-4`}>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          teacher.bonus === 'Paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {teacher.bonus}
                        </span>
                      </td>
                      <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {teacher.date}
                      </td>
                      <td className="py-4 px-4">
                        <button className={`p-2 rounded-lg ${
                          isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                        }`}>
                          <MoreHorizontal size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Expense Breakdown */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Expense Breakdown
              </h2>
              
              <div className="space-y-4">
                {expenses.map((expense, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${expense.color}`}></div>
                      <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {expense.category}
                      </span>
                    </div>
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {expense.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profit Analysis */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Profit Analysis
              </h2>
              
              <div className="space-y-4">
                {profitData.map((profit, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    profit.category === 'Total Revenue' ? 'bg-green-50' :
                    profit.category === 'Total Expenses' ? 'bg-red-50' :
                    'bg-blue-50'
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        profit.category === 'Total Revenue' ? 'text-green-800' :
                        profit.category === 'Total Expenses' ? 'text-red-800' :
                        'text-blue-800'
                      }`}>
                        {profit.category}
                      </span>
                      <span className={`text-lg font-bold ${profit.color}`}>
                        {profit.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default Payment;