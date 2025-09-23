import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Sun, Moon, ArrowLeft, Lock, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import logoDark from '../../assets/images/LogoforDark.png';
import logoLight from '../../assets/images/LogoforLight.png';

const CreateNewPasswordPage = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Password form, 2: Success

  // Refs for input fields
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear password match error when either password changes
    if (errors.passwordMatch && (name === 'newPassword' || name === 'confirmPassword')) {
      setErrors(prev => ({
        ...prev,
        passwordMatch: ''
      }));
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, fieldType) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (fieldType === 'newPassword') {
        // Move focus to confirm password field
        confirmPasswordRef.current?.focus();
      } else if (fieldType === 'confirmPassword') {
        // Submit the form
        handleSubmit(e);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if new password is provided
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters long';
    }

    // Check if confirm password is provided
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    }

    // Check if passwords match
    if (formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword) {
      newErrors.passwordMatch = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Password reset data:', {
      newPassword: formData.newPassword,
      rememberMe: rememberMe
    });
    
    setStep(2);
    setIsLoading(false);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const resetToStep1 = () => {
    setStep(1);
    setFormData({ newPassword: '', confirmPassword: '' });
    setErrors({});
    setRememberMe(false);
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
          <div className="flex items-center justify-center mb-0 gap-3 w-100">
            <img src={isDarkMode ? logoDark : logoLight} alt="GuruSkull Logo" className='w-80'></img>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Create a New Password
            </h1>
            {step === 1 && (
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Enter your new password below
              </p>
            )}
            {step === 2 && (
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                Password successfully updated!
              </p>
            )}
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            
            {step === 1 && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* New Password Input */}
                <div className="relative">
                  <input
                    ref={newPasswordRef}
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, 'newPassword')}
                    className={`w-full pl-12 pr-12 py-4 rounded-xl text-base transition-all duration-300 outline-none backdrop-blur-md ${
                      errors.newPassword || errors.passwordMatch
                        ? 'border border-red-400 bg-red-50/10'
                        : isDarkMode
                          ? 'border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30'
                          : 'border border-black/20 bg-white/80 text-black placeholder:text-black/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30'
                    }`}
                    placeholder="New Password"
                    autoComplete="new-password"
                  />
                  <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-white/50' : 'text-black/50'
                  }`} size={20} />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-1 transition-colors duration-300 ${
                      isDarkMode ? 'text-white/60 hover:text-white/80' : 'text-black/60 hover:text-black/80'
                    }`}
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.newPassword && (
                  <p className="text-red-400 text-sm -mt-3">
                    {errors.newPassword}
                  </p>
                )}

                {/* Confirm Password Input */}
                <div className="relative">
                  <input
                    ref={confirmPasswordRef}
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, 'confirmPassword')}
                    className={`w-full pl-12 pr-12 py-4 rounded-xl text-base transition-all duration-300 outline-none backdrop-blur-md ${
                      errors.confirmPassword || errors.passwordMatch
                        ? 'border border-red-400 bg-red-50/10'
                        : isDarkMode
                          ? 'border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30'
                          : 'border border-black/20 bg-white/80 text-black placeholder:text-black/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30'
                    }`}
                    placeholder="Confirm New Password"
                    autoComplete="new-password"
                  />
                  <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-white/50' : 'text-black/50'
                  }`} size={20} />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-1 transition-colors duration-300 ${
                      isDarkMode ? 'text-white/60 hover:text-white/80' : 'text-black/60 hover:text-black/80'
                    }`}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm -mt-3">
                    {errors.confirmPassword}
                  </p>
                )}
                {errors.passwordMatch && (
                  <p className="text-red-400 text-sm -mt-3">
                    {errors.passwordMatch}
                  </p>
                )}

                {/* Remember Me Checkbox */}
                <div className="flex items-center gap-3 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div 
                        className={`w-4 h-4 border rounded transition-all duration-200 flex items-center justify-center ${
                          rememberMe 
                            ? 'bg-cyan-500 border-cyan-500' 
                            : isDarkMode 
                              ? 'border-white/40 bg-transparent hover:border-white/60' 
                              : 'border-gray-400 bg-transparent hover:border-gray-600'
                        }`}
                      >
                        {rememberMe && (
                          <svg 
                            className="w-3 h-3 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20,6 9,17 4,12" strokeWidth="2"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                      Remember Me
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 mt-2 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Next'
                  )}
                </button>
              </form>
            )}

            {/* Success State */}
            {step === 2 && (
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDarkMode ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className={`text-base mb-6 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                  Your password has been successfully updated. You can now login with your new password.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleBackToLogin}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    Go to Login
                  </button>
                  <button
                    onClick={resetToStep1}
                    className={`text-cyan-500 hover:text-cyan-600 font-medium text-sm transition-colors duration-300`}
                  >
                    Create another password
                  </button>
                </div>
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

export default CreateNewPasswordPage;