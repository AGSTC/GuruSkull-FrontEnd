import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import logoDark from '../../assets/images/LogoforDark.png';
import logoLight from '../../assets/images/LogoforLight.png';
import { useTheme } from '../../context/ThemeContext';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let timer;
    if (countdown > 0 && !canResend) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, canResend]);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    
    if (e.key === 'Enter') {
      e.preventDefault();
      const otpString = otp.join('');
      if (otpString.length === 6) {
        handleVerifyOTP();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...otp];
    
    for (let i = 0; i < pasteData.length && i < 6; i++) {
      if (/\d/.test(pasteData[i])) {
        newOtp[i] = pasteData[i];
      }
    }
    setOtp(newOtp);
    
    const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex].focus();
    } else {
      inputRefs.current[5].focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    if (e) e.preventDefault();
    
    const otpString = otp.join('');
    if (otpString.length !== 6) return;

    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Verifying OTP:', otpString);
    setIsLoading(false);
    navigate('/NewPassword');
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    setCanResend(false);
    setCountdown(59);
    setOtp(['', '', '', '', '', '']);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Resending OTP...');
    alert('New OTP sent to your email!');
    setIsLoading(false);
    
    inputRefs.current[0].focus();
  };

  const handleBackToForgotPassword = () => {
    navigate('/ForgotPassword');
  };

  const isOtpComplete = otp.every(digit => digit !== '');

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

      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handleBackToForgotPassword}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 ${
            isDarkMode
              ? 'text-white/80 hover:text-white hover:bg-white/10'
              : 'text-gray-700 hover:text-gray-900 hover:bg-black/10'
          }`}
          title="Back to Forgot Password"
        >
          <ArrowLeft size={18} />
          <span className="text-xs sm:text-sm font-medium">Back</span>
        </button>
      </div>

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

      <div className="flex w-full min-h-screen items-center justify-center relative z-10 px-4 py-20">
        <div className={`w-full max-w-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-3xl shadow-2xl ${
          isDarkMode
            ? 'bg-black/40 border border-white/10'
            : 'bg-white/80 border border-black/10'
        }`}>
          
          <div className="flex items-center justify-center mb-4 sm:mb-6 gap-3 w-full">
            <img src={isDarkMode ? logoDark : logoLight} alt="GuruSkull Logo" className='w-48 sm:w-64 md:w-80'/>
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <h1 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Reset Password
            </h1>
            <p className={`text-xs sm:text-sm mt-2 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Enter OTP which we send to your email
            </p>
          </div>

          <form onSubmit={handleVerifyOTP}>
            <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl md:text-2xl font-bold text-center rounded-lg sm:rounded-xl border-2 transition-all duration-300 outline-none ${
                    digit
                      ? isDarkMode
                        ? 'border-cyan-400 bg-white/10 text-white'
                        : 'border-cyan-500 bg-white text-gray-900'
                      : isDarkMode
                        ? 'border-white/20 bg-white/5 text-white focus:border-cyan-400'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-cyan-500'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mb-4 sm:mb-6">
              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                {canResend ? (
                  'You can now resend the OTP'
                ) : (
                  `Resend OTP in : 00:${countdown.toString().padStart(2, '0')}`
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <button
                type="submit"
                disabled={!isOtpComplete || isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </>
                ) : (
                  'Next'
                )}
              </button>

              <button
                type="button"
                onClick={handleResendOTP}
                disabled={!canResend || isLoading}
                className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 border ${
                  isDarkMode
                    ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                    : 'border-cyan-500 text-cyan-500 hover:bg-cyan-50'
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                Resend
              </button>
            </div>
          </form>
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

export default ResetPasswordPage;