"use client";
import { motion, AnimatePresence } from 'framer-motion';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onDecline: () => void;
}

export default function AgeVerificationModal({ isOpen, onConfirm, onDecline }: AgeVerificationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onDecline}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gray-900 border border-gray-800 rounded-[2.5rem] p-8 md:p-10 w-full max-w-lg shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-purple-600"></div>
            
            <div className="text-center">
              <span className="inline-block bg-pink-500/20 text-pink-400 font-black text-2xl px-5 py-2 rounded-2xl mb-6 border border-pink-500/30">18+</span>
              <h3 className="text-2xl font-bold text-white mb-4">Avertissement Légal</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Le contenu de Love4You s'adresse exclusivement à un public adulte et favorise l'exploration intime en couple. 
                En poursuivant, vous certifiez sur l'honneur avoir l'âge légal requis dans votre pays.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={onConfirm}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 rounded-2xl hover:scale-105 transition shadow-lg shadow-pink-500/25"
              >
                Oui, j'ai plus de 18 ans
              </button>
              <button
                onClick={onDecline}
                className="w-full bg-transparent border-2 border-gray-700 text-gray-400 font-bold py-4 rounded-2xl hover:bg-gray-800 hover:text-white transition"
              >
                Non, je quitte
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
