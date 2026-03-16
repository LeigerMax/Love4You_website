"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { appScreenshots } from '../config/screenshots';
import { downloadLinks, StoreLink } from '../config/download-links';


export default function ScreenshotsPage() {
  return (
    <section id="screenshots">
      <div className="min-h-screen bg-gray-50">

        <main className="pt-16 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-20"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-6 italic uppercase text-gray-900 leading-tight">
                L'interface de <br/><span className="text-purple-600">votre complicité</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                Une application pensée pour être intuitive, élégante et totalement privée. 
                Découvrez l'univers de Love4You.
              </p>
            </motion.div>

            {/* Screenshot Grid */}
            <div className="space-y-32">
              {appScreenshots.map((screen, index) => (
                <motion.div 
                  key={screen.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
                >
                  {/* Mockup de Téléphone */}
                  <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-tr ${screen.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity rounded-[3rem]`}></div>
                    
                    {/* Phone Frame */}
                    <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-800">
                      {/* Speaker hole */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                      
                      {/* Screen Content */}
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        <img 
                          src={screen.image} 
                          alt={screen.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Placeholder si l'image n'existe pas encore
                            e.currentTarget.src = "https://via.placeholder.com/300x600?text=" + screen.title;
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-left">
                    <div className={`w-12 h-1 bg-gradient-to-r ${screen.color} mb-6 rounded-full`}></div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 uppercase italic">
                      {screen.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
                      {screen.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Final */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-40 bg-gray-900 p-12 rounded-[3rem] text-white overflow-hidden relative"
            >
              <div className="relative z-10">
                  <Smartphone className="mx-auto mb-6 opacity-50" size={48} />
                  <h3 className="text-3xl font-bold mb-4 uppercase italic">Vivez l'expérience complète</h3>
                  <p className="mb-8 opacity-70">Téléchargez l'application gratuitement et commencez à jouer.</p>
                  <div className="flex flex-col items-center justify-center gap-4">
                  {downloadLinks
                    .filter((store: StoreLink) => store.isActive)
                    .map((store: StoreLink, index: number) => (
                      <a
                        key={store.id}
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${store.color} text-white p-5 rounded-3xl flex items-center gap-5 hover:scale-[1.02] transition-transform shadow-xl group w-full max-w-md`}
                      >
                        <div className="bg-white/20 p-3 rounded-2xl group-hover:rotate-6 transition-transform">
                          {React.createElement(store.icon, { size: 32 })}
                        </div>
                        <div className="text-left">
                          <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Disponible sur</p>
                          <p className="text-2xl font-bold leading-tight">{store.name}</p>
                          <p className="text-[10px] opacity-60 mt-1 uppercase">{store.description}</p>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
              {/* Décoration de fond */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            </motion.div>

          </div>
        </main>
      </div>
    </section>
  );
}