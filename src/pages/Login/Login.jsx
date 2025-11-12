import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import logoDark from '../../assets/images/LogoforDark.png';
import logoLight from '../../assets/images/LogoforLight.png';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const defaultUserCredentials = {
    'owner': {
      password: 'owner123',
      role: 'tuition_owner',
      name: 'Tony Stark',
      email: 'ironman.avenger.com',
      profileImage: 'profile.png'
    },
    'teacher': {
      password: 'teacher123',
      role: 'teacher',
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@guruskull.com',
      profileImage: 'teacher-profile.png'
    },
    'student': {
      password: 'student123',
      role: 'student',
      name: 'Steve Rogers',
      email: 'steve.rogers@student.com',
      profileImage: 'student-profile.png'
    },
    'parent': {
      password: 'parent123',
      role: 'parent',
      name: 'Tony Stark',
      email: 'tony.stark@gmail.com',
      profileImage: 'parent-profile.png'
    }
  };

  const getAllCredentials = () => {
    try {
      const dynamicCredentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');
      console.log('Dynamic credentials from localStorage:', dynamicCredentials);
      const combined = { ...defaultUserCredentials, ...dynamicCredentials };
      console.log('Combined credentials:', combined);
      return combined;
    } catch (error) {
      console.error('Error parsing userCredentials from localStorage:', error);
      return defaultUserCredentials;
    }
  };

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

  const handleKeyDown = (e, fieldType) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (fieldType === 'username') {
        passwordRef.current?.focus();
      } else if (fieldType === 'password') {
        handleSubmit(e);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const allCredentials = getAllCredentials();
    
    console.log('All available credentials:', allCredentials);
    console.log('Trying to login with:', formData.username.toLowerCase(), formData.password);

    const usernameKey = formData.username.toLowerCase();
    const user = allCredentials[usernameKey];

    console.log('Found user:', user);

    if (user && user.password === formData.password) {
      const userData = {
        username: usernameKey,
        role: user.role,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage
      };

      localStorage.setItem('authToken', 'authenticated');
      localStorage.setItem('user', JSON.stringify(userData));

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('savedUsername', formData.username);
      }

      window.dispatchEvent(new Event('userDataChanged'));

      console.log('Login successful, navigating to dashboard for role:', user.role);

      switch (user.role) {
        case 'tuition_owner':
          navigate('/Dashboard');
          break;
        case 'teacher':
          navigate('/TeacherDashboard');
          break;
        case 'student':
          navigate('/StudentDashboard');
          break;
        case 'parent':
          navigate('/ParentDashboard');
          break;
        default:
          navigate('/Dashboard');
          break;
      }
    } else {
      console.log('Login failed - Invalid credentials');
      setErrors({
        username: 'Invalid credentials',
        password: 'Invalid credentials'
      });
    }

    setIsLoading(false);
  };

  const handleForgotPassword = () => {
    navigate('/ForgotPassword');
  };

  const handleTermsClick = () => {
    navigate('/terms-conditions');
  };

  return (
    <div className={`min-h-screen w-full font-sans overflow-x-hidden ${isDarkMode
      ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-black'
      : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
      }`}>

      {isDarkMode && (
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
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

      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className={`relative w-16 h-8 rounded-full border-0 cursor-pointer transition-all duration-500 ease-in-out ${isDarkMode
            ? 'bg-white'
            : 'bg-black'
            }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-all duration-300`}>
            <Sun
              className={isDarkMode ? 'text-gray-400' : 'text-orange-500'}
              size={14}
            />
          </div>

          <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-all duration-300`}>
            <Moon
              className={isDarkMode ? 'text-blue-300' : 'text-white'}
              size={14}
            />
          </div>

          <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 ease-in-out shadow-md ${isDarkMode
            ? 'transform translate-x-8 bg-black'
            : 'transform translate-x-1 bg-white'
            }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {isDarkMode ? (
                <Moon className="text-white" size={12} />
              ) : (
                <Sun className="text-orange-400" size={12} />
              )}
            </div>
          </div>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-screen relative z-10">

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-12 lg:py-20">
          <div className="text-center max-w-lg w-full">

            <div className="flex items-center justify-center mb-4 lg:mb-6 gap-3 w-full">
              <img 
                src={isDarkMode ? logoDark : logoLight} 
                alt="GuruSkull Logo" 
                className='w-48 sm:w-56 md:w-64 lg:w-80'
              />
            </div>

            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Welcome to Your Learning Journey
            </h1>

            <p className={`text-sm sm:text-base md:text-lg mb-6 lg:mb-8 leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-gray-600'
              }`}>
              Unlock your potential with our comprehensive learning platform designed to help you master new skills and advance your career.
            </p>

            <div className="text-left flex flex-col gap-2 sm:gap-3 md:gap-4">
              {[
                'Interactive courses and hands-on projects',
                'Expert instructors and mentorship',
                'Certificates and career advancement',
                '24/7 support and community access'
              ].map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${isDarkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                      <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="2" fill="none"></polyline>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-20 backdrop-blur-3xl ${isDarkMode
          ? 'bg-black/30 lg:border-l border-white/10'
          : 'bg-white/30 lg:border-l border-black/10'
          }`}>
          <div className="w-full max-w-sm">

            <div className="text-center mb-6 lg:mb-8">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                Log in
              </h2>
            </div>

            <div className={`rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-3xl w-full shadow-2xl ${isDarkMode
              ? 'bg-black/40 border border-white/10'
              : 'bg-white/80 border border-black/10'
              }`}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">

                <div>
                  <input
                    ref={usernameRef}
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, 'username')}
                    className={`w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-sm sm:text-base transition-all duration-300 outline-none backdrop-blur-md ${errors.username
                      ? 'border border-red-400 bg-red-50/10'
                      : isDarkMode
                        ? 'border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
                        : 'border border-black/20 bg-white/80 text-black placeholder:text-black/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
                      }`}
                    placeholder="Username"
                    autoComplete="username"
                  />
                  {errors.username && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.username}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <input
                      ref={passwordRef}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onKeyDown={(e) => handleKeyDown(e, 'password')}
                      className={`w-full px-4 py-3 sm:px-5 sm:py-4 pr-12 rounded-xl text-sm sm:text-base transition-all duration-300 outline-none backdrop-blur-md ${errors.password
                        ? 'border border-red-400 bg-red-50/10'
                        : isDarkMode
                          ? 'border border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
                          : 'border border-black/20 bg-white/80 text-black placeholder:text-black/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
                        }`}
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 transition-colors duration-300 ${isDarkMode ? 'text-white/60 hover:text-white/80' : 'text-black/60 hover:text-black/80'
                        }`}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-2">
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
                            ? 'bg-blue-500 border-blue-500' 
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
                    <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'
                      }`}>
                      Remember Me
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className={`text-primary hover:text-primary-dark text-xs sm:text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white/80 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'}`}
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 mt-2 hover:from-primary-dark hover:to-primary hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>

                {/* <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg border border-yellow-400 bg-yellow-50">
                  <div className="text-xs sm:text-sm font-medium text-yellow-800 mb-2">Debug Info (Remove in Production):</div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const allCreds = getAllCredentials();
                        console.log('=== DEBUG INFO ===');
                        console.log('All available credentials:', allCreds);
                        console.log('Raw localStorage userCredentials:', localStorage.getItem('userCredentials'));
                        console.log('Usernames available:', Object.keys(allCreds));
                        
                        const usernames = Object.keys(allCreds);
                        const credentialsList = usernames.map(username => {
                          const user = allCreds[username];
                          return `${username} / ${user.password} (${user.role})`;
                        }).join('\n');
                        
                        alert(`Available Credentials:\n\n${credentialsList}\n\nCheck console for more details.`);
                      }}
                      className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded text-xs sm:text-sm"
                    >
                      Log All Credentials
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        localStorage.removeItem('userCredentials');
                        alert('Cleared all dynamic credentials. Only default credentials remain.');
                      }}
                      className="px-3 py-1 bg-red-200 text-red-800 rounded text-xs sm:text-sm"
                    >
                      Clear Dynamic Credentials
                    </button>
                  </div>
                </div> */}
                
                <div className="mt-4 sm:mt-6">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className={`w-full border-t ${isDarkMode ? 'border-white/20' : 'border-gray-300'}`}></div>
                    </div>
                    <div className="relative flex justify-center text-xs sm:text-sm">
                      <span className={`px-2 sm:px-4 text-xs ${isDarkMode ? 'bg-black/40 text-white/70' : 'bg-white/80 text-gray-500'}`}>
                        Or download our app
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-3">
                    <button type="button" className={`w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 px-3 sm:px-4 rounded-xl border transition-all duration-300 ${isDarkMode
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                        : 'bg-black text-white hover:bg-gray-800 border-black'
                      }`}>
                      <div className="w-6 h-6 sm:w-8 sm:h-8">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-80">Download on the</div>
                        <div className="text-xs sm:text-sm font-semibold">App Store</div>
                      </div>
                    </button>

                    <button type="button" className={`w-full flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3 px-3 sm:px-4 rounded-xl border transition-all duration-300 ${isDarkMode
                        ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                        : 'bg-black text-white hover:bg-gray-800 border-black'
                      }`}>
                      <div className="w-6 h-6 sm:w-8 sm:h-8">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-80">GET IT ON</div>
                        <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>

              </form>
            </div>
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

export default LoginPage;