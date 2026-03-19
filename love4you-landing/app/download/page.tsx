"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Crown, Info } from 'lucide-react';

export default function DownloadPage() {
  return (
    <section id="download" className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden relative">

      <main className="pt-32 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 italic uppercase font-light">
              Prêts pour l&apos;aventure ?
            </h1>
            <p className="text-xl font-light max-w-2xl mx-auto">
              Choisissez l&apos;expérience qui vous correspond le mieux pour installer Love4You sur votre appareil Android.
            </p>
          </motion.div>

          {/* Dual Deploy Options */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-4xl mx-auto">

            {/* Option 1 : VIP Tester */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 relative group"
            >
              {/* Premium Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-pink-500/30 rounded-[2.5rem] p-8 flex flex-col items-center">
                <div className="bg-pink-500/20 p-4 rounded-full mb-6 relative">
                  <div className="absolute inset-0 bg-pink-500 animate-ping opacity-20 rounded-full"></div>
                  <Crown className="w-10 h-10 text-pink-400 relative z-10" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Testeur VIP</h3>
                <p className="text-pink-300 text-sm font-semibold uppercase tracking-wider mb-6">Expérience Automatisée</p>

                <ul className="text-left text-gray-300 text-sm space-y-3 mb-8 flex-1 w-full">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    Mises à jour in-app (App Tester)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    Notifié par Email des nouveautés
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                    Installation sécurisée et suivie
                  </li>
                </ul>

                <a
                  href="https://appdistribution.firebase.dev/i/5b0688df7242f396"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-6 rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2"
                >
                  <Crown size={20} />
                  Rejoindre l&apos;Alpha Premium
                </a>
              </div>
            </motion.div>

            {/* Option 2 : Direct APK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-[2.5rem] p-8 flex flex-col items-center transition-colors">
                <div className="bg-white/10 p-4 rounded-full mb-6">
                  <Download className="w-10 h-10 text-gray-400" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-200">Téléchargement Direct</h3>
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-6">Open Source</p>

                <p className="text-gray-400 text-sm mb-8 flex-1 max-w-[250px] leading-relaxed">
                  Pour les curieux qui souhaitent installer l&apos;application manuellement sans inscription préalable.
                </p>

                <a
                  href="https://github.com/LeigerMax/Love4You-Flutter/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-white/20 text-gray-300 font-bold py-4 px-6 rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <Download size={20} />
                  Télécharger l&apos;APK
                </a>

                <div className="flex items-start gap-3 text-left bg-black/20 p-4 rounded-xl text-xs text-gray-400 w-full mt-auto">
                  <Info className="w-5 h-5 shrink-0 text-white/40 mt-0.5" />
                  <p>Mises à jour manuelles requises. <br className="hidden lg:block" />Il est possible que Play Protect affiche un faux-positif.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}