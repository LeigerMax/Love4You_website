"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Apple, Play, Download } from 'lucide-react';


export default function Hero() {
  const [clickCount, setClickCount] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    if (showHearts) {
      const newHearts = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 24 + 16, // 16px to 40px
        delay: Math.random() * 0.5, // 0 to 0.5s stagger
        duration: Math.random() * 2 + 2.5, // 2.5s to 4.5s fall
      }));
      setHearts(newHearts);
      
      const timer = setTimeout(() => {
        setShowHearts(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setHearts([]);
    }
  }, [showHearts]);

  const handlePhoneClick = () => {
    if (showHearts) return;
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setShowHearts(true);
      setClickCount(0);
    }
  };

  return (
    <section className="relative pt-32 pb-20 min-h-screen overflow-hidden bg-white dark:bg-transparent transition-colors duration-300">
      
      {/* Easter Egg Falling Hearts */}
      {showHearts && (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
          {hearts.map(heart => (
            <motion.div
              key={heart.id}
              initial={{ y: -100, x: `${heart.left}vw`, opacity: 0, rotate: 0 }}
              animate={{ y: '110vh', opacity: [0, 1, 1, 0], rotate: 360 }}
              transition={{ 
                duration: heart.duration, 
                delay: heart.delay, 
                ease: "easeIn"
              }}
              className="absolute top-0 text-pink-500 will-change-transform"
              style={{ fontSize: `${heart.size}px`, left: 0 }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 text-center md:text-left z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            Plus qu'une app,<br /><span className="text-purple-600">une aventure</span> à deux.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg transition-colors duration-300">
            Sortez de la routine, explorez vos fantasmes et renforcez votre complicité avec l'application de jeux la plus complète pour les couples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <span className="text-pink-600 dark:text-pink-400 font-semibold text-lg transition-colors duration-300">L'app est en phase Alpha – testez gratuitement sur android !</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center"
        >
          <div 
            className="relative w-64 h-[520px] bg-gray-900 dark:bg-black rounded-[3rem] border-[8px] border-gray-900 dark:border-gray-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center transition-colors duration-300 cursor-pointer select-none"
            onClick={handlePhoneClick}
            role="button"
            tabIndex={0}
            aria-label="Easter egg: Appuyez 5 fois pour une surprise"
          >
            {/* Design custom dans le mockup */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-900" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              {/* Logo */}
              <motion.div
                className="mb-6 mt-12"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <Image
                  src="/icon.png"
                  alt="Love4You - Jeux coquins et défis pour couple"
                  width={80}
                  height={80}
                  priority
                  className="mx-auto drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute -z-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 motion-safe:animate-pulse"></div>
        </motion.div>
      </div>
      {/* Animation flèche scroll */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-400 text-xs mb-2">Défilez vers le bas</span>
        <svg aria-hidden="true" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down motion-safe:animate-bounce">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </motion.div>
    </section>
  );
}