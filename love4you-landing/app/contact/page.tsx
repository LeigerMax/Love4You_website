"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 rounded-3xl shadow-xl w-full border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -m-20 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -m-20 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
              <Mail className="w-10 h-10 text-purple-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Contactez-nous
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
              Une question, une suggestion ou besoin d'aide avec l'application ? 
              Notre équipe est là pour vous ! Cliquez sur le bouton ci-dessous pour nous envoyer un email directement.
            </p>

            <a 
              href="mailto:love4you.app@gmail.com?subject=Contact%20Love4You"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Ouvrir l'application d'email</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-8 text-sm text-gray-500">
              Ou copiez notre adresse : <br/>
              <span className="font-semibold text-gray-700 select-all block mt-2 px-4 py-2 bg-gray-100 rounded-lg inline-block text-base tracking-wide">love4you.app@gmail.com</span>
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
