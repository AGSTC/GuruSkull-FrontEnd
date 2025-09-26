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

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Create a PDF content (in a real app, this would be fetched from the server)
    const pdfContent = `
      GURUSHIKSHA PRIVACY POLICY
      
      Last Updated: January 15, 2024
      
      1. INFORMATION WE COLLECT
      - Personal Information: Full name, contact details, date of birth
      - Academic Information: Records, performance data, attendance
      - Technical Information: Device info, IP address, usage patterns
      
      2. HOW WE USE YOUR INFORMATION
      - Educational Services: Personalized learning, progress tracking
      - Communication: Updates, notifications, support
      - Administration: Enrollment management, billing
      - Service Improvement: Analytics, feature development
      
      3. DATA SECURITY MEASURES
      - Encryption: End-to-end encryption for sensitive data
      - Access Control: Role-based permissions
      - Regular Audits: Continuous security assessments
      
      4. YOUR PRIVACY RIGHTS
      - Access, update, or delete your personal information
      - Data portability and communication preferences
      - Lodge complaints with supervisory authorities
      
      5. DATA RETENTION
      - Student Records: 7 years for academic records
      - Financial Records: 7 years for payment records
      
      Contact: privacy@gurushikri.com | www.gurushikri.com/privacy
    `;

    // Create a blob and download link
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

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header */}
          <div className="text-left mb-8 max-w-6xl mx-auto">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Privacy Policy
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Last updated: January 15, 2024
            </p>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              This Privacy Policy explains how we collect, use, and protect your information.
            </p>
            <button 
              onClick={handleDownloadPDF}
              className="mt-4 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className={`rounded-2xl border p-8 mb-8 ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              
              {/* Our Privacy Commitment */}
              <div className="text-center mb-8">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Privacy Commitment
                </h2>
                <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  We are committed to protecting your privacy and ensuring your personal information is handled with the highest level of care and security.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {privacyCommitments.map((commitment, index) => {
                    const Icon = commitment.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {commitment.title}
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          {commitment.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 1. Information We Collect */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Information We Collect
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Personal Information
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Full name and contact details</li>
                      <li>• Date of birth and age information</li>
                      <li>• Academic records and performance data</li>
                      <li>• Parent/guardian contact information</li>
                      <li>• Emergency contact details</li>
                      <li>• Payment and billing information</li>
                    </ul>
                    
                    <h3 className={`font-medium mb-3 mt-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Technical Information
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Device information and IP address</li>
                      <li>• Browser type and version</li>
                      <li>• Usage patterns and preferences</li>
                      <li>• Login timestamps and session data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Academic Information
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Attendance records and patterns</li>
                      <li>• Assignment submissions and grades</li>
                      <li>• Progress reports and assessments</li>
                      <li>• Subject preferences and learning goals</li>
                      <li>• Special educational needs information</li>
                      <li>• Participation in extracurricular activities</li>
                    </ul>
                    
                    <h3 className={`font-medium mb-3 mt-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Communication Data
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Messages between students, parents, and teachers</li>
                      <li>• Notification preferences and settings</li>
                      <li>• Feedback and survey responses</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. How We Use Your Information */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Settings className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. How We Use Your Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <h3 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                      <FileText className="w-4 h-4" />
                      Educational Services
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                      <li>• Providing personalized learning experiences</li>
                      <li>• Tracking academic progress and performance</li>
                      <li>• Generating reports and assessments</li>
                      <li>• Scheduling classes and managing attendance</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <h3 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>
                      <Bell className="w-4 h-4" />
                      Communication
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                      <li>• Sending important updates and notifications</li>
                      <li>• Facilitating parent-teacher communication</li>
                      <li>• Providing customer support and assistance</li>
                      <li>• Sharing academic progress with parents</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <h3 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>
                      <Users className="w-4 h-4" />
                      Administration
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-green-200' : 'text-green-700'}`}>
                      <li>• Managing enrollments and registrations</li>
                      <li>• Processing fee payments and billing</li>
                      <li>• Maintaining accurate student records</li>
                      <li>• Ensuring compliance with regulations</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                    <h3 className={`font-medium mb-3 flex items-center gap-2 ${isDarkMode ? 'text-orange-300' : 'text-orange-800'}`}>
                      <Globe className="w-4 h-4" />
                      Service Improvement
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-orange-200' : 'text-orange-700'}`}>
                      <li>• Analyzing usage patterns to improve services</li>
                      <li>• Developing new features and functionalities</li>
                      <li>• Conducting research for educational enhancement</li>
                      <li>• Ensuring system security and performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Information Sharing and Disclosure */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Share2 className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Information Sharing and Disclosure
                  </h2>
                </div>
                
                <div className={`p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-l-4 border-yellow-500 mb-6 ${isDarkMode ? 'text-yellow-200' : 'text-yellow-800'}`}>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Important Notice</h4>
                      <p className="text-sm">
                        We do not sell, rent, or lease your personal information to third parties. We only share data when necessary for our services and with your consent.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Parental Sharing
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      Academic progress, attendance records, and other educational information may be shared with parents or legal guardians as part of our educational services.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Legal Requirements
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      We may disclose information when required by law, court order, or to protect the safety and security of students, staff, or the public.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Data Security Measures */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    4. Data Security Measures
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {dataSecurityMeasures.map((measure, index) => {
                    const Icon = measure.icon;
                    return (
                      <div key={index} className={`${measure.color} text-white p-6 rounded-xl text-center`}>
                        <Icon className="w-8 h-8 mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">{measure.title}</h4>
                        <p className="text-sm opacity-90">{measure.description}</p>
                      </div>
                    );
                  })}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Technical Safeguards
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Advanced firewall and intrusion detection</li>
                      <li>• Regular security updates and patches</li>
                      <li>• Secure cloud storage with backup systems</li>
                      <li>• Multi-factor authentication requirements</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Administrative Safeguards
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
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
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Eye className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    5. Your Privacy Rights
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Access Your Data
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Request a copy of all personal information we hold about you and understand how it's being used.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Settings className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Update Information
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Correct any inaccurate or incomplete personal information in our records.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Delete Your Data
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Request deletion of your personal data when it's no longer needed for educational purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Download className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Data Portability
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Receive a copy of your data in a structured, machine-readable format for transfer to another service.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Bell className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Manage Communications
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Control what communications you receive and how you prefer to be contacted.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-cyan-100 p-2 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Lodge Complaints
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          File a complaint with supervisory authorities if you believe your privacy rights have been violated.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Data Retention */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    6. Data Retention
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Student Records
                    </h3>
                    <div className="space-y-2">
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Academic records</span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>7 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Attendance records</span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Personal information</span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2 years after graduation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Financial Records
                    </h3>
                    <div className="space-y-2">
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Payment records</span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>7 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Billing information</span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>5 years</span>
                      </div>
                      <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Refund requests</span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3 years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Questions or Concerns */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">Privacy Questions or Concerns?</h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  If you have any questions about this privacy policy or how we handle your personal information, please don't hesitate to contact our privacy team.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">www.gurushikri.com/privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">privacy@gurushikri.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Data Protection Officer</span>
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