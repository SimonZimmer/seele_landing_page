'use client'
import { useState, useEffect } from 'react';

export function Consent() {
  const [consentState, setConsentState] = useState<boolean | null>(null);
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);
  
  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem('cookieConsent');
      
      if (storedConsent === null) {
        console.log('No previous consent found, showing banner');
        setConsentState(null);
        setShouldShow(true);
      } else {
        console.log('Previous consent found:', storedConsent);
        setConsentState(storedConsent === 'true');
        setShouldShow(false);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      setShouldShow(true);
    }
  }, []);
  
  const handleConsent = () => {
    try {
      localStorage.setItem('cookieConsent', 'true');
      setConsentState(true);
      setShouldShow(false);
    } catch (error) {
    }
  };
  
  const handleDecline = () => {
    try {
      localStorage.setItem('cookieConsent', 'false');
      setConsentState(false);
      setShouldShow(false);
    } catch (error) {
    }
  };
  
  if (!shouldShow) {
    return null;
  }
  
  console.log('Rendering banner');
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-90 border-t border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <p className="text-gray-400 text-sm px-0">
          I use cookies for very basic analytics which you can decline if you want to. By continuing to use this site, you agree to my use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-300 bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={handleConsent}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-400 rounded-md shadow-md transition-colors duration-200 cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
