'use client';

import { useState, useEffect } from 'react';

export function Consent() {
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem('analytics-consent');
      setShouldShow(storedConsent === null);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      setShouldShow(true);
    }
  }, []);

  const handleConsent = () => {
    try {
      localStorage.setItem('analytics-consent', 'true');
      setShouldShow(false);
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('analytics-consent', 'false');
      setShouldShow(false);
    } catch (error) {
      console.error('Error saving consent:', error);
    }
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-90 border-t border-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <p className="text-gray-400 text-sm px-0">
          This website uses cookies for essential functionality and optional analytics. Analytics cookies are only set with your consent. You can accept or decline analytics cookies now and change your preferences at any time in the cookie settings. For more details, see our Privacy Policy.
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
