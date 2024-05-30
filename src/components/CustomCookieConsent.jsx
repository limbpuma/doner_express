// src/components/CustomCookieConsent.jsx

import React, { useState, useEffect } from 'react';

const CustomCookieConsent = ({ translations }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-8 flex flex-col sm:flex-row justify-between items-center shadow-lg rounded-md z-50">
      <div className="flex-1 mr-4">
        {translations.message}{" "}
        <span className="text-sm">{translations.moreInfo}</span>
      </div>
      <div className="flex-shrink-0">
        <button
          className="bg-orange text-white px-4 py-2 rounded-md mr-2 transition hover:bg-deep-orange btn btn-ghost"
          onClick={handleAccept}
        >
          {translations.accept}
        </button>
        <button
          className="bg-grey text-white px-4 py-2 rounded-md transition hover:bg-dark-grey btn btn-ghost"
          onClick={handleDecline}
        >
          {translations.decline}
        </button>
      </div>
    </div>
  );
};

export default CustomCookieConsent;
