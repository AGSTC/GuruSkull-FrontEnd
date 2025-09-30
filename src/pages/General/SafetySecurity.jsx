import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Shield, 
  Lock, 
  Eye,
  Camera,
  AlertTriangle,
  CheckCircle,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  Download
} from 'lucide-react';

const SafetySecurity = () => {
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
    link.download = 'GuruShiksha_Safety_Security_Policy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const safetyCommitments = [
    { title: 'Secure Environment', icon: Shield, description: 'Safe and monitored premises for all students' },
    { title: 'Background Checks', icon: FileText, description: 'Thorough verification of all staff members' },
    { title: 'Emergency Protocols', icon: AlertTriangle, description: 'Comprehensive emergency response procedures' }
  ];

  const securityMeasures = [
    { title: 'CCTV Monitoring', icon: Camera, description: 'Round-the-clock surveillance system' },
    { title: 'Access Control', icon: Lock, description: 'Restricted entry with ID verification' },
    { title: 'Security Personnel', icon: Users, description: 'Trained security staff on premises' }
  ];

  const emergencyContacts = [
    { title: 'Emergency Response', number: '(040) 123-4567', available: '24/7' },
    { title: 'Security Office', number: '(040) 890-1234', available: 'Office Hours' },
    { title: 'Medical Emergency', number: '(040) 567-8901', available: '24/7' }
  ];

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Header 
        isSidebarExpanded={isSidebarExpanded} 
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isExpanded={isSidebarExpanded} activeItem="SafetySecurity" />

      <main className={`transition-all duration-300 ${
        isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
      } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
        <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
          
          {/* Header */}
          <div className="text-left mb-6 md:mb-8 max-w-6xl mx-auto">
            <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Safety & Security
            </h1>
            <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Comprehensive safety protocols and security measures ensuring a secure learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 mt-3 md:mt-4">
              <button className="px-3 py-2 md:px-4 md:py-2 bg-red-500 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto">
                Emergency
              </button>
              <button 
                onClick={handleDownloadPDF}
                className="px-3 py-2 md:px-4 md:py-2 bg-green-500 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download size={14} className="md:w-4 md:h-4" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            <div className={`rounded-xl md:rounded-2xl border p-4 md:p-6 lg:p-8 mb-6 md:mb-8 ${
              isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
            }`}>
              
              {/* Our Safety Commitment */}
              <div className="text-center mb-6 md:mb-8">
                <div className="bg-green-100 p-2 md:p-3 rounded-full w-fit mx-auto mb-3 md:mb-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <h2 className={`text-xl md:text-2xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Safety Commitment
                </h2>
                <p className={`text-sm md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  We prioritize the safety and security of all students, staff, and visitors through comprehensive protocols and continuous monitoring of our environment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
                  {safetyCommitments.map((commitment, index) => {
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

              {/* 1. Physical Safety Measures */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-red-100 p-1 md:p-2 rounded-lg">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    1. Physical Safety Measures
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Access Control
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Controlled entry and exit points
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        ID verification for all visitors
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Authorized personnel only areas
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Emergency exits clearly marked
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Surveillance System
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        24/7 CCTV monitoring
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Strategic camera placement
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Real-time monitoring capabilities
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Secure data storage and privacy
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Security Response */}
                <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 bg-red-500 text-white rounded-xl">
                    <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2" />
                    <h4 className="font-semibold text-xs md:text-sm mb-1">Immediate Response</h4>
                    <p className="text-xs opacity-90">Security alerted within minutes of any incident</p>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-blue-500 text-white rounded-xl">
                    <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2" />
                    <h4 className="font-semibold text-xs md:text-sm mb-1">Trained Personnel</h4>
                    <p className="text-xs opacity-90">Professional security staff on-site during hours</p>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-green-500 text-white rounded-xl">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2" />
                    <h4 className="font-semibold text-xs md:text-sm mb-1">Emergency Protocol</h4>
                    <p className="text-xs opacity-90">Direct line to emergency services when needed</p>
                  </div>
                </div>
              </div>

              {/* 2. Child Protection Policies */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-blue-100 p-1 md:p-2 rounded-lg">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    2. Child Protection Policies
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Background Verification
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Full criminal background checks</li>
                      <li>• Educational qualifications verification</li>
                      <li>• Previous employment history</li>
                      <li>• Character references from reliable sources</li>
                    </ul>
                    
                    <h3 className={`font-medium mb-2 md:mb-3 mt-4 md:mt-6 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Supervision Standards
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Appropriate student-teacher ratios</li>
                      <li>• No one-on-one unsupervised interactions</li>
                      <li>• Open door policy during all sessions</li>
                      <li>• Regular safety audits and assessments</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Visiting Permissions
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Visitor log maintained at entry</li>
                      <li>• Prior appointment required for meetings</li>
                      <li>• Escort required for all non-staff visitors</li>
                      <li>• Restricted areas clearly marked</li>
                    </ul>
                    
                    <h3 className={`font-medium mb-2 md:mb-3 mt-4 md:mt-6 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Reporting Procedures
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Anonymous incident reporting system</li>
                      <li>• Clear procedures for safety concerns</li>
                      <li>• Direct communication with parents</li>
                      <li>• Regular safety training for all staff</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Digital Security & Online Safety */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-blue-100 p-1 md:p-2 rounded-lg">
                    <Lock className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    3. Digital Security & Online Safety
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-blue-500 text-white rounded-xl">
                    <Lock className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Data Encryption</h4>
                    <p className="text-xs md:text-sm opacity-90">All personal data encrypted using industry-standard protocols</p>
                  </div>
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-green-500 text-white rounded-xl">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Secure Storage</h4>
                    <p className="text-xs md:text-sm opacity-90">Protected databases with regular security audits and monitoring</p>
                  </div>
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-purple-500 text-white rounded-xl">
                    <Eye className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Access Control</h4>
                    <p className="text-xs md:text-sm opacity-90">Multi-factor authentication and role-based permissions</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Online Learning Safety Guidelines
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Supervised online sessions with parental oversight</li>
                      <li>• Secure video conferencing platforms only</li>
                      <li>• No recording without explicit consent</li>
                      <li>• Clear digital communication boundaries</li>
                      <li>• Regular monitoring of online interactions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Cyberbullying Prevention
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Zero tolerance policy for online harassment</li>
                      <li>• Anonymous reporting mechanisms</li>
                      <li>• Digital citizenship education programs</li>
                      <li>• Swift response to reported incidents</li>
                      <li>• Counseling support for affected students</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Health & Wellness Protocols */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-green-100 p-1 md:p-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    4. Health & Wellness Protocols
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Medical Support
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Trained first aid personnel on staff</li>
                      <li>• Well-equipped medical room available</li>
                      <li>• Emergency medical contacts maintained</li>
                      <li>• Allergy and medical condition awareness</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className={`font-medium mb-2 md:mb-3 text-sm md:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Wellness Support
                    </h3>
                    <ul className={`space-y-1 md:space-y-2 text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                      <li>• Mental health support available</li>
                      <li>• Counseling services for students</li>
                      <li>• Stress management resources</li>
                      <li>• Regular wellness check-ins</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Incident Response Procedures */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="bg-red-100 p-1 md:p-2 rounded-lg">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                  </div>
                  <h2 className={`text-lg md:text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    5. Incident Response Procedures
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-red-500 text-white rounded-xl">
                    <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Immediate Response</h4>
                    <p className="text-xs md:text-sm opacity-90">Swift action within minutes of any security breach or safety concern</p>
                  </div>
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-orange-500 text-white rounded-xl">
                    <FileText className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Documentation</h4>
                    <p className="text-xs md:text-sm opacity-90">Comprehensive incident reporting and follow-up procedures</p>
                  </div>
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-green-500 text-white rounded-xl">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">Follow-up</h4>
                    <p className="text-xs md:text-sm opacity-90">Continuous monitoring and improvement of safety measures</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact & Reporting */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 md:p-6 text-white">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <h3 className="text-lg md:text-xl font-semibold">Emergency Contact & Reporting</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="text-center">
                      <h4 className="font-semibold text-sm md:text-base mb-1 md:mb-2">{contact.title}</h4>
                      <p className="text-base md:text-lg font-bold mb-1">{contact.number}</p>
                      <p className="text-xs md:text-sm opacity-90">{contact.available}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left text-xs md:text-sm">
                    <div className="flex items-center gap-1 md:gap-2">
                      <Mail className="w-3 h-3 md:w-4 md:h-4" />
                      <span>security@gurushikri.com</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                      <span>123 Education Street, Learning District, City 500001</span>
                    </div>
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

export default SafetySecurity;