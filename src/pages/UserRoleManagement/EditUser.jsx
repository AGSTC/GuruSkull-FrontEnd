import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';

import { 
  Save,
  X,
  ChevronRight,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const EditUser = () => {
  const { isDarkMode } = useTheme();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: 'Aarav Sharma',
    emailAddress: 'aarav.sharma@email.com',
    phoneNumber: '+91 98765 43210',
    dateOfBirth: '15-05-2008',
    address: '123 MG Road, Bangalore, Karnataka 560001',
    emergencyContact: '+91 98765 43211',
    
    class: 'Class 10',
    subjects: {
      mathematics: true,
      physics: true,
      chemistry: true,
      biology: false,
      english: false,
      history: false,
      geography: false,
      economics: false,
      hindi: false,
      computerScience: false
    },
    
    parentName: 'Rajesh Sharma',
    parentEmail: 'rajesh.sharma@email.com',
    parentPhone: '+91 98765 43211'
  });

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: {
        ...prev.subjects,
        [subject]: !prev.subjects[subject]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  const subjectsList = [
    { key: 'mathematics', label: 'Mathematics' },
    { key: 'physics', label: 'Physics' },
    { key: 'chemistry', label: 'Chemistry' },
    { key: 'biology', label: 'Biology' },
    { key: 'english', label: 'English' },
    { key: 'hindi', label: 'Hindi' },
    { key: 'history', label: 'History' },
    { key: 'geography', label: 'Geography' },
    { key: 'computerScience', label: 'Computer Science' },
    { key: 'economics', label: 'Economics' }
  ];

  return (
    <>
      <div className={`min-h-screen w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Header 
          isSidebarExpanded={isSidebarExpanded} 
          toggleSidebar={toggleSidebar}
        />

        <Sidebar isExpanded={isSidebarExpanded} activeItem="user-roles" />

        <main className={`transition-all duration-300 ${
          isSidebarExpanded ? 'ml-0 md:ml-48 lg:ml-64' : 'ml-0 md:ml-16'
        } pt-16 md:pt-20 pb-12 md:pb-16 min-h-screen overflow-x-hidden`}>
          <div className="w-full h-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
            
            <div className="text-left mb-4 md:mb-6 lg:mb-8 max-w-6xl mx-auto">
              <h1 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Edit User
              </h1>
              <p className={`text-sm md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Update user information and details
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className={`rounded-xl md:rounded-2xl border ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-300 shadow-sm'
              }`}>
                <div className="p-4 md:p-6 lg:p-8">
                  
                  <div className="mb-6 md:mb-8">
                    <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Basic Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value="2008-05-15"
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    </div>

                    <div className="mt-4 md:mt-6">
                      <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm resize-none ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>

                    <div className="mt-4 md:mt-6">
                      <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Emergency Contact
                      </label>
                      <input
                        type="tel"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Academic Information
                    </h2>
                    
                    <div className="mb-4 md:mb-6">
                      <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Class *
                      </label>
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                          isDarkMode 
                            ? 'bg-slate-700 border-slate-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option value="">Select Class</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs md:text-sm font-medium mb-3 md:mb-4 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Subjects
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {subjectsList.map((subject) => (
                          <label key={subject.key} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.subjects[subject.key]}
                              onChange={() => handleSubjectChange(subject.key)}
                              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {subject.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <h2 className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Parent Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      <div>
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Parent Name
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Parent Email
                        </label>
                        <input
                          type="email"
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs md:text-sm font-medium mb-1 md:mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Parent Phone
                        </label>
                        <input
                          type="tel"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border text-xs md:text-sm ${
                            isDarkMode 
                              ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className={`px-4 py-2 md:px-6 md:py-3 rounded-lg border text-xs md:text-sm font-medium transition-colors ${
                        isDarkMode 
                          ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-1 md:gap-2"
                    >
                      <Save size={16} className="md:w-4 md:h-4" />
                      Update User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer isSidebarExpanded={isSidebarExpanded} />
      </div>
    </>
  );
};

export default EditUser;