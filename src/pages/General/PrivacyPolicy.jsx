import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Shield, 
  Database, 
  Share2, 
  Lock,
  Eye,
  FileText,
  Users,
  Globe,
  Bell,
  Settings,
  Trash2,
  Download,
  Clock,
  AlertTriangle
} from 'lucide-react';

const PrivacyPolicy = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleDownloadPDF = () => {
    // PDF download logic remains the same
    const pdfContent = `...`;
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GuruShiksha_Privacy_Policy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const privacyCommitments = [
    { title: 'Data Protection', icon: Shield, description: 'Your personal information is encrypted and secure' },
    { title: 'Transparency', icon: Eye, description: 'Clear information about data collection and usage' },
    { title: 'Control', icon: Settings, description: 'You control your privacy settings and preferences' }
  ];

  const dataSecurityMeasures = [
    { title: 'Encryption', icon: Lock, description: 'End-to-end encryption for all sensitive data', color: 'bg-blue-500' },
    { title: 'Access Control', icon: Users, description: 'Strict role-based access to personal information', color: 'bg-green-500' },
    { title: 'Regular Audits', icon: FileText, description: 'Continuous monitoring and security assessments', color: 'bg-purple-500' }
  ];

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="PrivacyPolicy" />

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
          
          {/* Header */}
          <div className="text-left mb-6 md:mb-8 max-w-6xl mx-auto">
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Privacy Policy
            </h1>
            <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Last updated: January 15, 2024
            </p>
            <p className={`text-xs md:text-sm mt-1 md:mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              This Privacy Policy explains how we collect, use, and protect your information.
            </p>
            <button 
              onClick={handleDownloadPDF}
              className="mt-3 md:mt-4 px-3 py-2 md:px-4 md:py-2 bg-green-500 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 w-full sm:w-auto"
            >
              <Download size={14} className="md:w-4 md:h-4" />
              Download PDF
            </button>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className={`rounded-xl md:rounded-2xl border p-4 md:p-6 lg:p-8 mb-6 md:mb-8 ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              
              {/* Our Privacy Commitment */}
              <div className="text-center mb-6 md:mb-8">
                <div className="bg-green-100 p-2 md:p-3 rounded-full w-fit mx-auto mb-3 md:mb-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <h2 className={`text-xl md:text-2xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Privacy Commitment
                </h2>
                <p className={`text-sm md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  We are committed to protecting your privacy and ensuring your personal information is handled with the highest level of care and security.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                  {privacyCommitments.map((commitment, index) => {
                    const Icon = commitment.icon;
                    return (
                      <div key={index} className="text-center p-3 md:p-4">
                        <div className="bg-green-100 p-2 md:p-3 rounded-full w-fit mx-auto mb-2 md:mb-3">
                          <Icon className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                        </div>
                        <h3 className={`font-semibold text-sm md:text-base mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {commitment.title}
                        </h3>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          {commitment.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 1. Information We Collect */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-blue-100 p-1 md:p-2 rounded-lg">
                    <Database className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Information We Collect
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Personal Information
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Full name and contact details</li>
                      <li>• Date of birth and age information</li>
                      <li>• Academic records and performance data</li>
                      <li>• Parent/guardian contact information</li>
                      <li>• Emergency contact details</li>
                      <li>• Payment and billing information</li>
                    </ul>
                    
                    <h3 className={`font-medium mb-2 md:mb-3 mt-4 md:mt-6 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Technical Information
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Device information and IP address</li>
                      <li>• Browser type and version</li>
                      <li>• Usage patterns and preferences</li>
                      <li>• Login timestamps and session data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Academic Information
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Attendance records and patterns</li>
                      <li>• Assignment submissions and grades</li>
                      <li>• Progress reports and assessments</li>
                      <li>• Subject preferences and learning goals</li>
                      <li>• Special educational needs information</li>
                      <li>• Participation in extracurricular activities</li>
                    </ul>
                    
                    <h3 className={`font-medium mb-2 md:mb-3 mt-4 md:mt-6 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Communication Data
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Messages between students, parents, and teachers</li>
                      <li>• Notification preferences and settings</li>
                      <li>• Feedback and survey responses</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. How We Use Your Information */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-green-100 p-1 md:p-2 rounded-lg">
                    <Settings className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. How We Use Your Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div className="p-3 md:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <h3 className={`font-medium mb-2 md:mb-3 flex items-center gap-1 md:gap-2 text-sm md:text-base ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                      <FileText className="w-3 h-3 md:w-4 md:h-4" />
                      Educational Services
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                      <li>• Providing personalized learning experiences</li>
                      <li>• Tracking academic progress and performance</li>
                      <li>• Generating reports and assessments</li>
                      <li>• Scheduling classes and managing attendance</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 md:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <h3 className={`font-medium mb-2 md:mb-3 flex items-center gap-1 md:gap-2 text-sm md:text-base ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                      <Bell className="w-3 h-3 md:w-4 md:h-4" />
                      Communication
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                      <li>• Sending important updates and notifications</li>
                      <li>• Facilitating parent-teacher communication</li>
                      <li>• Providing customer support and assistance</li>
                      <li>• Sharing academic progress with parents</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 md:p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <h3 className={`font-medium mb-2 md:mb-3 flex items-center gap-1 md:gap-2 text-sm md:text-base ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>
                      <Users className="w-3 h-3 md:w-4 md:h-4" />
                      Administration
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-green-200' : 'text-green-700'}`}>
                      <li>• Managing enrollments and registrations</li>
                      <li>• Processing fee payments and billing</li>
                      <li>• Maintaining accurate student records</li>
                      <li>• Ensuring compliance with regulations</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 md:p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                    <h3 className={`font-medium mb-2 md:mb-3 flex items-center gap-1 md:gap-2 text-sm md:text-base ${isDarkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                      <Globe className="w-3 h-3 md:w-4 md:h-4" />
                      Service Improvement
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                      <li>• Analyzing usage patterns to improve services</li>
                      <li>• Developing new features and functionalities</li>
                      <li>• Conducting research for educational enhancement</li>
                      <li>• Ensuring system security and performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Information Sharing and Disclosure */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-yellow-100 p-1 md:p-2 rounded-lg">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Information Sharing and Disclosure
                  </h2>
                </div>
                
                <div className={`p-3 md:p-4 lg:p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500 mb-4 md:mb-6 ${isDarkMode ? 'text-yellow-200' : 'text-yellow-800'}`}>
                  <div className="flex items-start gap-2 md:gap-3">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1 text-sm md:text-base">Important Notice</h4>
                      <p className="text-xs md:text-sm">
                        We do not sell, rent, or lease your personal information to third parties. We only share data when necessary for our services and with your consent.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h3 className={`font-medium mb-1 md:mb-2 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Parental Sharing
                    </h3>
                    <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      Academic progress, attendance records, and other educational information may be shared with parents or legal guardians as part of our educational services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-1 md:mb-2 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Legal Requirements
                    </h3>
                    <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      We may disclose information when required by law, court order, or to protect the safety and security of students, staff, or the public.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Data Security Measures */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-blue-100 p-1 md:p-2 rounded-lg">
                    <Lock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    4. Data Security Measures
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                  {dataSecurityMeasures.map((measure, index) => {
                    const Icon = measure.icon;
                    return (
                      <div key={index} className={`${measure.color} text-white p-3 md:p-4 lg:p-6 rounded-xl text-center`}>
                        <Icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3" />
                        <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">{measure.title}</h4>
                        <p className="text-xs md:text-sm opacity-90">{measure.description}</p>
                      </div>
                    );
                  })}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Technical Safeguards
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Advanced firewall and intrusion detection</li>
                      <li>• Regular security updates and patches</li>
                      <li>• Secure cloud storage with backup systems</li>
                      <li>• Multi-factor authentication requirements</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Administrative Safeguards
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Role-based access controls and permissions</li>
                      <li>• Regular staff training on data protection</li>
                      <li>• Incident response and breach notification procedures</li>
                      <li>• Annual security audits and assessments</li>
                      <li>• Data handling policies and procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Your Privacy Rights */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-purple-100 p-1 md:p-2 rounded-lg">
                    <Eye className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    5. Your Privacy Rights
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="bg-blue-100 p-1 md:p-2 rounded-lg">
                        <Eye className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Access Your Data
                        </h3>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Request a copy of all personal information we hold about you and understand how it's being used.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="bg-green-100 p-1 md:p-2 rounded-lg">
                        <Settings className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Update Information
                        </h3>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Correct any inaccurate or incomplete personal information in our records.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="bg-red-100 p-1 md:p-2 rounded-lg">
                        <Trash2 className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Delete Your Data
                        </h3>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Request deletion of your personal data when it's no longer needed for educational purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="bg-orange-100 p-1 md:p-2 rounded-lg">
                        <Download className="w-3 h-3 md:w-4 md:h-4 text-orange-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Data Portability
                        </h3>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Receive a copy of your data in a structured, machine-readable format for transfer to another service.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="bg-purple-100 p-1 md:p-2 rounded-lg">
                        <Bell className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Manage Communications
                        </h3>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Control what communications you receive and how you prefer to be contacted.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="bg-cyan-100 p-1 md:p-2 rounded-lg">
                        <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Lodge Complaints
                        </h3>
                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          File a complaint with supervisory authorities if you believe your privacy rights have been violated.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Data Retention */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-orange-100 p-1 md:p-2 rounded-lg">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    6. Data Retention
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Student Records
                    </h3>
                    <div className="space-y-1 md:space-y-2">
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg text-xs md:text-sm ${
                        isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                      }`}>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Academic records</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>7 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg text-xs md:text-sm ${
                        isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                      }`}>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Attendance records</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg text-xs md:text-sm ${
                        isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                      }`}>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Personal information</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2 years after graduation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Financial Records
                    </h3>
                    <div className="space-y-1 md:space-y-2">
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg text-xs md:text-sm ${
                        isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                      }`}>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Payment records</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>7 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg text-xs md:text-sm ${
                        isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                      }`}>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Billing information</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>5 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg text-xs md:text-sm ${
                        isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                      }`}>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Refund requests</span>
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Questions or Concerns */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 md:p-6 text-white">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6" />
                  <h3 className="text-base md:text-lg font-semibold">Privacy Questions or Concerns?</h3>
                </div>
                <p className="text-xs md:text-sm opacity-90 mb-3 md:mb-4">
                  If you have any questions about this privacy policy or how we handle your personal information, please don't hesitate to contact our privacy team.
                </p>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-xs md:text-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Globe className="w-3 h-3 md:w-4 md:h-4" />
                    <span>www.gurushikri.com/privacy</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <FileText className="w-3 h-3 md:w-4 md:h-4" />
                    <span>privacy@gurushikri.com</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <Users className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Data Protection Officer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer isSidebarExpanded={isSidebarExpanded} />
    </div>
  );
};

export default PrivacyPolicy;