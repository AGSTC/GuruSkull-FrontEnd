import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  CheckCircle, 
  GraduationCap, 
  DollarSign, 
  Users, 
  Clock,
  AlertCircle,
  Shield,
  MessageCircle,
  Phone,
  Download
} from 'lucide-react';

const TermsConditions = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const pdfContent = `
      GURUSHIKSHA TERMS & CONDITIONS
      
      Last Updated: January 15, 2024
      
      1. ACCEPTANCE OF TERMS
      - By enrolling, you agree to be bound by these Terms and Conditions
      - Terms may be modified; continued use constitutes acceptance
      
      2. EDUCATIONAL SERVICES
      - Structured instruction in various academic subjects
      - Class schedules determined by tuition center
      - Study materials remain intellectual property of center
      
      3. FEES AND PAYMENT TERMS
      - Monthly fees payable in advance by 5th of each month
      - Late payment fees may apply
      - Refunds processed according to policy
      
      4. STUDENT CONDUCT
      - Punctual attendance and respectful behavior required
      - Academic integrity must be maintained
      - Disruptive behavior may result in termination
      
      5. ATTENDANCE POLICY
      - Minimum 80% attendance required
      - Medical certificates needed for extended absences
      - Prior notice required for planned absences
      
      Contact: support@gurushikri.com | +91 (910) 456-7890
    `;

    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GuruShiksha_Terms_Conditions.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="TermsConditions" />

      <main className={`transition-all duration-300 pt-20 pb-16 min-h-screen ${
        isSidebarExpanded ? 'ml-64' : 'ml-16'
      }`}>
        <div className="w-full h-full px-6 py-6">
          
          {/* Header */}
            <div className="text-left mb-8 max-w-6xl mx-auto">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Terms & Conditions
            </h1>
             <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Last updated: January 15, 2024
            </p>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Please read these terms carefully before using our tuition management services.
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
              
              {/* 1. Acceptance of Terms */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Acceptance of Terms
                  </h2>
                </div>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  By enrolling in our tuition classes or using our educational services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and GuruShikri Institute.
                </p>
                <p className={`text-sm leading-relaxed mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  If you do not agree with any part of these terms, you must not use our services. We reserve the right to modify these Terms at any time, and continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              {/* 2. Educational Services */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. Educational Services
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      2.1 Class Offerings
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      We offer structured instruction in various subjects including Mathematics, Science, English, and other academic disciplines as specified in our course catalog.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      2.2 Class Schedule
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      Class schedules are determined by the tuition center. Any changes to schedules will be communicated at least 24 hours in advance through official channels.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      2.3 Educational Materials
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      Study materials, worksheets, and resources provided are for educational use only and remain the intellectual property of the tuition center.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Fees and Payment Terms */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <DollarSign className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Fees and Payment Terms
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Payment Schedule
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Tuition fees are monthly in advance. Payment must be made by the 5th of each month.</li>
                      <li>• Late payment fees may apply after the due date.</li>
                      <li>• All fees must be paid through official channels.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Non-Payment
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Failure to pay fees may result in suspension of classes and examination access.</li>
                      <li>• Services may be terminated for continued non-payment.</li>
                    </ul>
                    
                    <h3 className={`font-medium mb-3 mt-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Refunds
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Refunds are processed according to our refund policy available upon request.</li>
                      <li>• Early termination of services may not guarantee full refunds.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Student Conduct and Responsibilities */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    4. Student Conduct and Responsibilities
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Expected Behavior
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Punctual attendance to all classes</li>
                      <li>• Respectful behavior towards teachers and fellow students</li>
                      <li>• Complete assigned homework and tasks</li>
                      <li>• Maintain academic integrity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Prohibited Actions
                    </h3>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Disruptive behavior in class</li>
                      <li>• Cheating or plagiarism</li>
                      <li>• Sharing study materials without permission</li>
                      <li>• Unauthorized recording of classes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Attendance and Leave Policy */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    5. Attendance and Leave Policy
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        Minimum Attendance
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        Students must maintain at least 80% attendance to continue in the program.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        Medical Leave
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        Medical certificates required for absences exceeding 3 consecutive days.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        Prior Notice
                      </h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        Planned absences should be communicated at least 24 hours in advance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Limitation of Liability */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    6. Limitation of Liability
                  </h2>
                </div>
                <p className={`text-sm leading-relaxed mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  Our tuition center provides educational services to the best of our ability. However, we cannot guarantee specific academic outcomes or examination results. Our liability is limited to the fees paid for the services provided.
                </p>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  We are not responsible for personal belongings, injuries occurring outside class hours, or consequences of student actions outside our premises.
                </p>
              </div>

              {/* Questions About These Terms */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">Questions About These Terms?</h3>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">support@gurushikri.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 (910) 456-7890</span>
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

export default TermsConditions;