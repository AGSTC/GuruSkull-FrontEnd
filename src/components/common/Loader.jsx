import { useState, useEffect } from 'react';
import loaderVideo from '../../assets/loader.mp4';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let minTimeElapsed = false;
    let pageLoaded = false;

    // Minimum display time of 2 seconds
    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      if (pageLoaded) {
        startFadeOut();
      }
    });

    const startFadeOut = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    const handleLoad = () => {
      pageLoaded = true;
      if (minTimeElapsed) {
        startFadeOut();
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full max-w-md px-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        >
          <source src={loaderVideo} type="video/mp4" />
        </video>
        
        {/* Loading text as fallback
        <div className="absolute bottom-0 left-0 right-0 text-center mb-8">
          <p className="text-gray-600 font-medium">Loading...</p>
        </div> */}
      </div>
    </div>
  );
};

export default Loader;