"use client";
import { DownloadButton } from '@/src/components/ui/DownloadButton';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';


export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-screen overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 text-center md:text-left z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
            Plus qu'une app,<br/><span className="text-purple-600">une aventure</span> à deux.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Sortez de la routine, explorez vos fantasmes et renforcez votre complicité avec l'application de jeux la plus complète pour les couples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <DownloadButton size="large" className="w-full sm:w-auto ring-4 ring-pink-500 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold text-xl py-5 px-8 shadow-xl hover:scale-105 transition mb-2" />
              <span className="text-pink-600 font-semibold text-sm mt-2">L'app est en phase Alpha – testez gratuitement !</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center"
        >
          <div className="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
            {/* Design custom dans le mockup */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 to-pink-900" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              {/* Logo */}
              <motion.div
                className="mb-6 mt-12"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <img
                  src="/icon.png"
                  alt="Logo Love4You"
                  width={80}
                  height={80}
                  className="mx-auto drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute -z-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 animate-pulse"></div>
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
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down animate-bounce">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </motion.div>
    </section>
  );
}