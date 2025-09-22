import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon, ArrowLeft, Mail, Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext'; // Add this import
import logo from '../../assets/images/test.png';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const { isDarkMode, toggleTheme } = useTheme(); // Use theme context
  const [formData, setFormData] = useState({
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState(null); // 'otp' or 'link'
  const [step, setStep] = useState(1); // 1: Email input, 2: OTP sent, 3: Reset link sent

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setLoadingType('otp');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Send OTP to:', formData.email);
    setStep(2);
    setIsLoading(false);
    setLoadingType(null);
    navigate('/ResetPassword');
  };

  const handleSendResetLink = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setLoadingType('link');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Send Reset Link to:', formData.email);
    setStep(3);
    setIsLoading(false);
    setLoadingType(null);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };
  

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

  const resetToStep1 = () => {
    setStep(1);
    setFormData({ email: '' });
    setErrors({});
  };

  return (
    <div className={`fixed inset-0 w-screen h-screen overflow-hidden font-sans ${isDarkMode
        ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-black'
        : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
      }`}>

      {/* Animated Stars Background - Only in Dark Mode */}
      {isDarkMode && (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(2px 2px at 20px 30px, white, transparent),
              radial-gradient(2px 2px at 40px 70px, white, transparent),
              radial-gradient(1px 1px at 90px 40px, white, transparent),
              radial-gradient(1px 1px at 130px 80px, white, transparent),
              radial-gradient(2px 2px at 160px 30px, white, transparent),
              radial-gradient(1px 1px at 200px 90px, white, transparent),
              radial-gradient(2px 2px at 240px 50px, white, transparent),
              radial-gradient(1px 1px at 280px 20px, white, transparent),
              radial-gradient(1px 1px at 320px 80px, white, transparent),
              radial-gradient(2px 2px at 360px 40px, white, transparent),
              radial-gradient(1px 1px at 400px 70px, white, transparent),
              radial-gradient(2px 2px at 440px 20px, white, transparent),
              radial-gradient(1px 1px at 480px 60px, white, transparent),
              radial-gradient(1px 1px at 520px 30px, white, transparent),
              radial-gradient(2px 2px at 560px 80px, white, transparent)
            `,
            backgroundSize: '600px 400px',
            animation: 'twinkle 3s ease-in-out infinite alternate'
          }}
        ></div>
      )}

      {/* Back to Login Button */}
      <div className="absolute top-5 left-5 z-50">
        <button
          onClick={handleBackToLogin}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? 'text-white/80 hover:text-white hover:bg-white/10'
              : 'text-gray-700 hover:text-gray-900 hover:bg-black/10'
          }`}
          title="Back to Login"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to Login</span>
        </button>
      </div>

      {/* Theme Toggle Switch */}
      <div className="absolute top-5 right-5 z-50">
        <button
          onClick={toggleTheme}
          className={`relative w-20 h-10 rounded-full border-0 cursor-pointer transition-all duration-500 ease-in-out ${isDarkMode
              ? 'bg-white'
              : 'bg-black'
            }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <div className={`absolute left-2.5 top-1/2 transform -translate-y-1/2 transition-all duration-300`}>
            <Sun
              className={isDarkMode ? 'text-gray-400' : 'text-orange-500'}
              size={18}
            />
          </div>

          <div className={`absolute right-2.5 top-1/2 transform -translate-y-1/2 transition-all duration-300`}>
            <Moon
              className={isDarkMode ? 'text-blue-300' : 'text-white'}
              size={18}
            />
          </div>

          <div className={`absolute top-1 w-8 h-8 rounded-full transition-all duration-500 ease-in-out shadow-md ${isDarkMode
              ? 'transform translate-x-11 bg-black'
              : 'transform translate-x-1 bg-white'
            }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {isDarkMode ? (
                <Moon className="text-white" size={14.5} />
              ) : (
                <Sun className="text-orange-400" size={14.5} />
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex w-full h-full items-center justify-center relative z-10">
        <div className={`w-full max-w-md mx-4 rounded-3xl p-10 backdrop-blur-3xl shadow-2xl ${
          isDarkMode
            ? 'bg-black/40 border border-white/10'
            : 'bg-white/80 border border-black/10'
        }`}>
          
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <img src={logo} alt="GuruSkull Logo" className='w-64'></img>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Forgot Password
            </h1>
            {step === 1 && (
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Enter your email address to reset your password
              </p>
            )}
            {step === 2 && (
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                OTP sent successfully to {formData.email}
              </p>
            )}
            {step === 3 && (
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                Reset link sent successfully to {formData.email}
              </p>
            )}
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={step > 1}
                className={`w-full pl-12 pr-5 py-4 rounded-xl text-base transition-all duration-300 outline-none backdrop-blur-md ${
                  errors.email
                    ? 'border border-red-400 bg-red-50/10'
                    : isDarkMode
                      ? 'border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30'
                      : 'border border-black/20 bg-white/80 text-black placeholder:text-black/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30'
                } ${step > 1 ? 'opacity-60' : ''}`}
                placeholder="Email"
              />
              <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-white/50' : 'text-black/50'
              }`} size={20} />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm -mt-3">
                {errors.email}
              </p>
            )}

            {/* Action Buttons based on step */}
            {step === 1 && (
              <div className="flex flex-col gap-3">
                {/* Send OTP Button */}
                <button
                  onClick={handleSendOTP}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading && loadingType === 'otp' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send OTP to Email
                    </>
                  )}
                </button>

                {/* Send Reset Link Button */}
                <button
                  onClick={handleSendResetLink}
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 border ${
                    isDarkMode
                      ? 'border-white/20 text-white/80 hover:bg-white/10'
                      : 'border-black/20 text-gray-700 hover:bg-black/10'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {isLoading && loadingType === 'link' ? (
                    <>
                      <div className={`w-5 h-5 border-2 rounded-full animate-spin ${
                        isDarkMode ? 'border-white/30 border-t-white' : 'border-gray-400 border-t-gray-700'
                      }`}></div>
                      Sending Link...
                    </>
                  ) : (
                    <>
                      <Mail size={18} />
                      Send Reset Link to Email
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Success States */}
            {(step === 2 || step === 3) && (
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDarkMode ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className={`text-base mb-6 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                  {step === 2 
                    ? 'Please check your email for the OTP code.'
                    : 'Please check your email for the password reset link.'
                  }
                </p>
                <button
                  onClick={resetToStep1}
                  className={`text-cyan-500 hover:text-cyan-600 font-medium text-sm transition-colors duration-300`}
                >
                  Try with different email
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default ForgotPasswordPage;