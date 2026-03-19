"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setConsentGiven(true);
    } else if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsentGiven(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <>
      {consentGiven && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-J6DT49C14N"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J6DT49C14N');
            `}
          </Script>
        </>
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 text-white rounded-[2rem] shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 pointer-events-none"></div>
              
              <div className="relative z-10 flex-1">
                <h3 className="text-xl font-bold mb-2">Respect de votre vie privée 🍪</h3>
                <p className="text-sm text-gray-400">
                  Nous utilisons des cookies strictement pour analyser l'audience de notre site de manière anonyme afin d'améliorer l'expérience. 
                  Aucune donnée n'est revendue.
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800 transition"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:scale-105 transition shadow-lg shadow-purple-500/25"
                >
                  Accepter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
