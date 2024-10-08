"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-800 p-4 text-white">
      <p>
        We use cookies to improve your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <button
        onClick={handleAccept}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Accept
      </button>
    </div>
  );
}
