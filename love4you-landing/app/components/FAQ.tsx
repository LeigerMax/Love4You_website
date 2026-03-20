"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "L'application est-elle vraiment gratuite ?",
    a: "Oui, la phase Alpha est actuellement 100% gratuite. Nous souhaitons récolter un maximum de retours de nos premiers testeurs avant de lancer la version finale qui inclura des options Premium."
  },
  {
    q: "Faut-il créer un compte pour jouer ?",
    a: "Absolument pas. Love4You fonctionne sans compte, sans e-mail requis et sans connexion internet nécessaire au cœur du jeu. Vos données restent sur votre téléphone."
  },
  {
    q: "Comment fonctionne la synchronisation par QR Code ?",
    a: "Pour échanger vos envies ou vos réponses, un joueur génère un QR Code que l'autre scanne directement avec l'application. Ce transfert s'effectue hors-ligne d'appareil à appareil via une communication sécurisée, garantissant une protection totale de votre intimité."
  },
  {
    q: "Une version iPhone (iOS) est-elle prévue ?",
    a: "Actuellement, notre application de test (Alpha) n'est disponible que sur Android. Cependant, la version iOS est en cours de développement et arrivera très prochainement !"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-4">Questions Fréquentes</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 italic uppercase text-gray-900 dark:text-white transition-colors duration-300">
            Une question ?<br className="hidden md:block" /> On y répond
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light transition-colors duration-300">
            Tout ce que vous devez savoir avant de pimenter votre relation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-gray-100 pr-8 transition-colors duration-300">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-purple-100 dark:bg-purple-900/40 p-2 rounded-full shrink-0 text-purple-600 dark:text-purple-400 transition-colors duration-300"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 dark:text-gray-300 leading-relaxed font-medium transition-colors duration-300">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
