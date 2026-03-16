"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, Info } from 'lucide-react';
import { downloadLinks } from '../config/download-links';


export default function DownloadPage() {
  // On ne garde que les stores actifs
  const activeStores = downloadLinks.filter(store => store.isActive);

  return (
    <section id="download" className=" bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden relative">

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 italic uppercase font-light">
              Prêts pour l'aventure ?
            </h1>
            <p className="text-xl font-light max-w-2xl mx-auto font-light">
              Téléchargez Love4You sur la plateforme de votre choix et commencez à jouer avec votre partenaire dès maintenant.
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-8">
            {activeStores.map((store, index) => (
                <motion.a
                key={store.id}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${store.color} text-white p-5 rounded-3xl flex items-center gap-5 hover:scale-[1.02] transition-transform shadow-xl group w-full max-w-md`}
                >
                <div className="bg-white/20 p-3 rounded-2xl group-hover:rotate-6 transition-transform">
                    <store.icon size={32} />
                </div>
                <div className="text-left">
                    <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Disponible sur</p>
                    <p className="text-2xl font-bold leading-tight ">{store.name}</p>
                    <p className="text-[10px] opacity-60 mt-1 uppercase tracking-widest">{store.description}</p>
                </div>
                </motion.a>
            ))}
            </div>


          {/* Section "Coming Soon" - Optionnelle */}
          {downloadLinks.some(s => !s.isActive) && (
            <div className="mt-20">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Bientôt disponibles</p>
              <div className="flex flex-wrap justify-center gap-4 opacity-40 grayscale ">
                {downloadLinks.filter(s => !s.isActive).map(store => (
                  <div key={store.id} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <store.icon size={16} />
                    <span className="text-sm font-bold ">{store.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}