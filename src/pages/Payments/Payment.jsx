import React, { useState, useEffect } from 'react';
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
  Calendar,
  Mail,
  RefreshCw,
  FileText,
  X
} from 'lucide-react';

// Models
class Payments {
  constructor(id, studentName, amount, status, date, type = 'student') {
    this.id = id;
    this.studentName = studentName;
    this.amount = amount;
    this.status = status;
    this.date = date;
    this.type = type;
  }
}

class TeacherPayment {
  constructor(id, name, position, subjects, salary, bonus, date, status = 'Pending') {
    this.id = id;
    this.name = name;
    this.position = position;
    this.subjects = subjects;
    this.salary = salary;
    this.bonus = bonus;
    this.date = date;
    this.status = status;
  }
}

class Refund {
  constructor(id, name, reason, amount, date, status = 'Pending') {
    this.id = id;
    this.name = name;
    this.reason = reason;
    this.amount = amount;
    this.date = date;
    this.status = status;
  }
}

class Scholarship {
  constructor(id, name, percentage, program, amount, status = 'Active') {
    this.id = id;
    this.name = name;
    this.percentage = percentage;
    this.program = program;
    this.amount = amount;
    this.status = status;
  }
}

const Payment = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [studentPayments, setStudentPayments] = useState([]);
  const [teacherPayments, setTeacherPayments] = useState([]);
  const [refunds, setRefunds] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [newPayment, setNewPayment] = useState({
    studentName: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    status: 'Pending'
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Initialize data
  useEffect(() => {
    // Initialize student payments
    const initialStudentPayments = [
      new Payments(1, 'Sarah Johnson', '₹5,500', 'Paid', '2024-12-15'),
      new Payments(2, 'Michael Chen', '₹4,200', 'Pending', '2024-12-10'),
      new Payments(3, 'Emily Davis', '₹6,800', 'Overdue', '2024-12-05'),
      new Payments(4, 'David Wilson', '₹3,500', 'Paid', '2024-12-01'),
      new Payments(5, 'Lisa Brown', '₹7,200', 'Pending', '2024-11-28')
    ];

    // Initialize teacher payments
    const initialTeacherPayments = [
      new TeacherPayment(1, 'Dr. Sarah Johnson', 'Senior Math Teacher', 'Mathematics', '₹8,500', '₹1,000', '2024-12-15', 'Paid'),
      new TeacherPayment(2, 'Prof. Robert Smith', 'Physics Professor', 'Physics', '₹9,200', '₹1,500', '2024-12-15', 'Paid'),
      new TeacherPayment(3, 'Ms. Maria Garcia', 'Chemistry Teacher', 'Chemistry', '₹7,800', '₹800', '2024-12-15', 'Pending'),
      new TeacherPayment(4, 'Dr. James Wilson', 'Biology Professor', 'Biology', '₹8,900', '₹1,200', '2024-12-15', 'Paid'),
      new TeacherPayment(5, 'Mrs. Patricia Lee', 'English Teacher', 'English', '₹7,500', '₹600', '2024-12-15', 'Pending')
    ];

    // Initialize refunds
    const initialRefunds = [
      new Refund(1, 'Saket Shah', 'Course Cancellation', '₹8,500', '2024-12-10', 'Pending'),
      new Refund(2, 'Priya Patel', 'Duplicate Payment', '₹5,500', '2024-12-08', 'Processing'),
      new Refund(3, 'Rahul Kumar', 'Course Transfer', '₹3,200', '2024-12-05', 'Completed'),
      new Refund(4, 'Anita Desai', 'Service Issue', '₹4,800', '2024-12-03', 'Pending')
    ];

    // Initialize scholarships
    const initialScholarships = [
      new Scholarship(1, 'Manu Patel', '50%', 'Merit Scholarship', '₹12,000'),
      new Scholarship(2, 'Rahul Sharma', '25%', 'Need Scholarship', '₹6,000'),
      new Scholarship(3, 'Sneha Verma', '75%', 'Merit Scholarship', '₹18,000'),
      new Scholarship(4, 'Aarav Gupta', '100%', 'Full Scholarship', '₹25,000')
    ];

    setStudentPayments(initialStudentPayments);
    setTeacherPayments(initialTeacherPayments);
    setRefunds(initialRefunds);
    setScholarships(initialScholarships);
  }, []);

  // Filter payments based on active filter
  const filteredPayments = studentPayments.filter(payment => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'due') return payment.status === 'Pending' || payment.status === 'Overdue';
    return payment.status.toLowerCase() === activeFilter.toLowerCase();
  });

  // Stats data with dynamic calculations
  const calculateStats = () => {
    const paidAmount = studentPayments
      .filter(p => p.status === 'Paid')
      .reduce((sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0);

    const pendingAmount = studentPayments
      .filter(p => p.status === 'Pending')
      .reduce((sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0);

    const overdueAmount = studentPayments
      .filter(p => p.status === 'Overdue')
      .reduce((sum, p) => sum + parseInt(p.amount.replace(/[^0-9]/g, '')), 0);

    return [
      {
        title: 'Total Revenue',
        value: `₹${paidAmount.toLocaleString('en-IN')}`,
        change: '+12.5%',
        trend: 'up',
        bgColor: 'bg-green-50',
        textColor: 'text-green-600'
      },
      {
        title: 'Pending Payments',
        value: `₹${pendingAmount.toLocaleString('en-IN')}`,
        change: '+5.2%',
        trend: 'up',
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-600'
      },
      {
        title: 'Overdue',
        value: `₹${overdueAmount.toLocaleString('en-IN')}`,
        change: '-2.1%',
        trend: 'down',
        bgColor: 'bg-red-50',
        textColor: 'text-red-600'
      },
      {
        title: 'Completed',
        value: `₹${paidAmount.toLocaleString('en-IN')}`,
        change: '+8.9%',
        trend: 'up',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600'
      }
    ];
  };

  const stats = calculateStats();

  // Chart data
  const chartData = [
    { month: 'Jan', income: 65, pending: 28, overdue: 15 },
    { month: 'Feb', income: 45, pending: 25, overdue: 12 },
    { month: 'Mar', income: 75, pending: 30, overdue: 18 },
    { month: 'Apr', income: 55, pending: 22, overdue: 10 },
    { month: 'May', income: 85, pending: 35, overdue: 20 },
    { month: 'Jun', income: 70, pending: 28, overdue: 15 },
    { month: 'Jul', income: 90, pending: 40, overdue: 22 },
    { month: 'Aug', income: 60, pending: 25, overdue: 12 },
    { month: 'Sep', income: 80, pending: 32, overdue: 18 },
    { month: 'Oct', income: 75, pending: 30, overdue: 16 },
    { month: 'Nov', income: 95, pending: 42, overdue: 25 },
    { month: 'Dec', income: 85, pending: 38, overdue: 20 }
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
      name: 'Rohan Mehra',
      amount: '₹4,780',
      daysOverdue: 8,
      bgColor: 'bg-red-50'
    },
    {
      name: 'Priya Singh',
      amount: '₹6,200',
      daysOverdue: 22,
      bgColor: 'bg-red-50'
    },
    {
      name: 'Amit Kumar',
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
      name: 'Sneha Reddy',
      amount: '₹15,000',
      installment: '1 of 3',
      nextDue: '2024-12-25'
    },
    {
      name: 'Rajesh Nair',
      amount: '₹8,500',
      installment: '3 of 4',
      nextDue: '2024-12-30'
    },
    {
      name: 'Anjali Iyer',
      amount: '₹10,000',
      installment: '1 of 2',
      nextDue: '2024-12-18'
    }
  ];

  // Banking overview data
  const bankingData = [
    {
      bank: 'State Bank of India',
      account: 'Savings Account',
      balance: '₹1,25,000',
      bgColor: 'bg-teal-50'
    },
    {
      bank: 'HDFC Bank',
      account: 'Current Account',
      balance: '₹85,000',
      bgColor: 'bg-teal-50'
    },
    {
      bank: 'ICICI Bank',
      account: 'Fixed Deposit',
      balance: '₹2,50,000',
      bgColor: 'bg-teal-50'
    },
    {
      bank: 'Axis Bank',
      account: 'Business Account',
      balance: '₹95,000',
      bgColor: 'bg-teal-50'
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

  // Function handlers
  const handleExport = () => {
    const data = JSON.stringify(studentPayments, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'payments-export.json';
    a.click();
    URL.revokeObjectURL(url);
    alert('Payment data exported successfully!');
  };

  const handleAddPayment = () => {
    if (!newPayment.studentName || !newPayment.amount) {
      alert('Please fill in all required fields');
      return;
    }

    const newId = studentPayments.length > 0
      ? Math.max(...studentPayments.map(p => p.id)) + 1
      : 1;

    const newPaymentObj = new Payments(
      newId,
      newPayment.studentName,
      `₹${parseInt(newPayment.amount).toLocaleString('en-IN')}`,
      newPayment.status,
      newPayment.date
    );

    // Add new payment to the beginning of the array
    setStudentPayments(prevPayments => [newPaymentObj, ...prevPayments]);
    setShowAddPaymentModal(false);
    setNewPayment({
      studentName: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    });

    // Reset filter to show all payments including the new one
    setActiveFilter('all');

    alert('Payment added successfully!');
  };

  const handleSendReminder = () => {
    const overduePayments = studentPayments.filter(p => p.status === 'Overdue');
    if (overduePayments.length === 0) {
      alert('No overdue payments to send reminders for.');
      return;
    }
    alert(`Reminders sent to ${overduePayments.length} students with overdue payments.`);
  };

  const handleProcessRefund = () => {
    const pendingRefunds = refunds.filter(r => r.status === 'Pending');
    if (pendingRefunds.length === 0) {
      alert('No pending refunds to process.');
      return;
    }

    const updatedRefunds = refunds.map(refund =>
      refund.status === 'Pending' ? { ...refund, status: 'Processing' } : refund
    );
    setRefunds(updatedRefunds);
    alert('Refund processing initiated for all pending refunds.');
  };

  const handleReconcileAccounts = () => {
    alert('Account reconciliation process started. This may take a few minutes.');
    // Simulate reconciliation process
    setTimeout(() => {
      alert('Account reconciliation completed successfully!');
    }, 2000);
  };

  const handlePayAllTeachers = () => {
    const updatedTeachers = teacherPayments.map(teacher => ({
      ...teacher,
      status: 'Paid',
      date: new Date().toISOString().split('T')[0]
    }));
    setTeacherPayments(updatedTeachers);
    alert('All teacher payments processed successfully!');
  };

  const handleGeneratePayroll = () => {
    const payrollData = teacherPayments.map(teacher => ({
      name: teacher.name,
      salary: teacher.salary,
      bonus: teacher.bonus,
      status: teacher.status,
      date: teacher.date
    }));

    const payrollBlob = new Blob([JSON.stringify(payrollData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(payrollBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `payroll-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    alert('Payroll generated and downloaded successfully!');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleModalClose = () => {
    setShowAddPaymentModal(false);
    setNewPayment({
      studentName: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    });
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header
        isSidebarExpanded={isSidebarExpanded}
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="payments" />

      <main className={`transition-all duration-300 ${isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 md:mb-8">
            <div className="text-left">
              <h1 className={`text-2xl sm:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Payment Management
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Comprehensive financial management for your education institute
              </p>
            </div>
            <div className="flex gap-2 md:gap-3">
              <button
                onClick={handleExport}
                className={`flex-1 sm:flex-none px-3 md:px-4 py-2 border rounded-lg flex items-center justify-center gap-2 text-sm md:text-base ${isDarkMode ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button
                onClick={() => setShowAddPaymentModal(true)}
                className="flex-1 sm:flex-none px-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 text-sm md:text-base"
              >
                <Plus size={16} />
                <span className="hidden sm:inline">Add Payment</span>
                <span className="sm:hidden">Add</span>
              </button>
            </div>
          </div>


          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border ${isDarkMode
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
                <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Management Chart */}
          <div className={`p-6 rounded-2xl border mb-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Student Payment
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-3 py-1 text-xs rounded-lg ${activeFilter === 'all'
                      ? 'bg-blue-500 text-white'
                      : isDarkMode
                        ? 'bg-slate-700 text-white'
                        : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    All Payment
                  </button>
                  <button
                    onClick={() => setActiveFilter('due')}
                    className={`px-3 py-1 text-xs rounded-lg ${activeFilter === 'due'
                      ? 'bg-blue-500 text-white'
                      : isDarkMode
                        ? 'bg-slate-700 text-white'
                        : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    Due Payment
                  </button>
                </div>
              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto">
                {filteredPayments.length === 0 ? (
                  <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    No payments found
                  </div>
                ) : (
                  filteredPayments.map((payment, index) => (
                    <div key={payment.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {payment.studentName}
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {payment.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {payment.amount}
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(payment.status)}`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Payment Methods */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Payment Reminders
                </h2>
                <button
                  onClick={handleSendReminder}
                  className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg flex items-center gap-1 hover:bg-red-600"
                >
                  <Mail size={14} />
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
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Installment Plans
              </h2>

              <div className="space-y-4">
                {installmentPlans.map((plan, index) => (
                  <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-blue-50'
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
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Scholarships
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarships.map((scholarship, index) => (
                  <div key={index} className={`p-4 rounded-lg bg-purple-100`}>
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
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Refunds & Adjustments
                </h2>
                <button
                  onClick={handleProcessRefund}
                  className="px-3 py-1 bg-orange-500 text-white text-xs rounded-lg flex items-center gap-1 hover:bg-orange-600"
                >
                  <RefreshCw size={14} />
                  Process Refund
                </button>
              </div>

              <div className="space-y-3">
                {refunds.map((refund, index) => (
                  <div key={index} className={`p-4 rounded-lg bg-orange-50`}>
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-medium text-gray-900">{refund.name}</p>
                      <p className="font-medium text-gray-900">{refund.amount}</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{refund.reason}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-gray-500">{refund.date}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(refund.status)}`}>
                        {refund.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">

            {/* Banking Overview */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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

                <button
                  onClick={handleReconcileAccounts}
                  className="w-full py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw size={16} />
                  Reconcile Accounts
                </button>
              </div>
            </div>
          </div>

          {/* Teacher Payment */}
          <div className={`p-6 rounded-2xl border mb-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Teacher Payment
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePayAllTeachers}
                  className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg flex items-center gap-1 hover:bg-green-600"
                >
                  <DollarSign size={14} />
                  Pay All
                </button>
                <button
                  onClick={handleGeneratePayroll}
                  className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg flex items-center gap-1 hover:bg-blue-600"
                >
                  <FileText size={14} />
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
                      Status
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
                      <td className={`py-4 px-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {teacher.bonus}
                      </td>
                      <td className={`py-4 px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {teacher.date}
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(teacher.status)}`}>
                          {teacher.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            {/* Expense Breakdown */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
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
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
              <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Profit Analysis
              </h2>

              <div className="space-y-4">
                {profitData.map((profit, index) => (
                  <div key={index} className={`p-4 rounded-lg ${profit.category === 'Total Revenue' ? 'bg-green-50' :
                    profit.category === 'Total Expenses' ? 'bg-red-50' :
                      'bg-blue-50'
                    }`}>
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${profit.category === 'Total Revenue' ? 'text-green-800' :
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

      {/* Add Payment Modal */}
      {showAddPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`p-6 rounded-2xl w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'
            }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Add New Payment
              </h3>
              <button
                onClick={handleModalClose}
                className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
              >
                <X size={20} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Student Name *
                </label>
                <input
                  type="text"
                  value={newPayment.studentName}
                  onChange={(e) => setNewPayment({ ...newPayment, studentName: e.target.value })}
                  className={`w-full p-2 border rounded-lg ${isDarkMode
                    ? 'bg-slate-700 border-slate-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  placeholder="Enter student name"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Amount *
                </label>
                <input
                  type="number"
                  value={newPayment.amount}
                  onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                  className={`w-full p-2 border rounded-lg ${isDarkMode
                    ? 'bg-slate-700 border-slate-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Date
                </label>
                <input
                  type="date"
                  value={newPayment.date}
                  onChange={(e) => setNewPayment({ ...newPayment, date: e.target.value })}
                  className={`w-full p-2 border rounded-lg ${isDarkMode
                    ? 'bg-slate-700 border-slate-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                    }`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Status
                </label>
                <select
                  value={newPayment.status}
                  onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}
                  className={`w-full p-2 border rounded-lg ${isDarkMode
                    ? 'bg-slate-700 border-slate-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                    }`}
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleModalClose}
                  className={`flex-1 py-2 border rounded-lg ${isDarkMode
                    ? 'border-slate-600 text-white hover:bg-slate-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddPayment}
                  className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Add Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default Payment;