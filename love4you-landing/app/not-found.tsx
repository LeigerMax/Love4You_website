"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/10 p-6 rounded-full inline-block backdrop-blur-xl border border-white/20 shadow-2xl">
            <Compass size={64} className="text-pink-400" />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 italic uppercase mb-4"
        >
          Erreur 404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6"
        >
          Vous vous êtes égarés...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mb-12 max-w-md mx-auto leading-relaxed"
        >
          L'aventure ne se trouve pas sur cette page. Mais ne vous inquiétez pas, le chemin du plaisir n'est jamais bien loin.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl py-4 px-10 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-pink-500/25"
          >
            Retourner à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
