import { 
  Heart, 
  Zap, 
  Dice5, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  QrCode, 
  Gift 
} from 'lucide-react';

const features = [
  {
    title: "Fantasmes Couple",
    desc: "Explorez vos envies mutuelles via QR Code. Seuls les matchs s'affichent pour briser la glace sans pression et sans tabou.",
    icon: <Heart className="text-pink-500" aria-hidden="true" />,
    color: "bg-pink-50 dark:bg-pink-900/20"
  },
  {
    title: "Actions Quotidiennes",
    desc: "Un nouveau défi chaque jour parmi 9 catégories (Romantique, Sensoriel, Intense...). Maintenez la flamme au quotidien.",
    icon: <Zap className="text-purple-500" aria-hidden="true" />,
    color: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    title: "Sexy Dice",
    desc: "Laissez le hasard décider avec des dés combinables : une action, une partie du corps et une position pour des moments imprévus.",
    icon: <Dice5 className="text-orange-500" aria-hidden="true" />,
    color: "bg-orange-50 dark:bg-orange-900/20"
  },
  {
    title: "Jeu de Rôle",
    desc: "Incarnez des personnages (Inconnu au bar, Professeur...) à travers des scénarios immersifs guidés étape par étape.",
    icon: <Sparkles className="text-indigo-500" aria-hidden="true" />,
    color: "bg-indigo-50 dark:bg-indigo-900/20"
  },
  {
    title: "Quiz d'Amour",
    desc: "Testez votre connaissance mutuelle sur des thèmes variés : souvenirs, préférences, sexualité et vie quotidienne.",
    icon: <HelpCircle className="text-blue-500" aria-hidden="true" />,
    color: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    title: "Cartes à Gratter",
    desc: "Découvrez des surprises cachées derrière des grilles thématiques (Global, Anal, 69, Cunnilingus...) pour pimenter vos soirées.",
    icon: <Layers className="text-amber-500" aria-hidden="true" />,
    color: "bg-amber-50 dark:bg-amber-900/20"
  },
  {
    title: "Synchronisation QR",
    desc: "Pas de compte, pas de serveur. Échangez vos données de manière ultra-sécurisée et privée via un simple scan de QR Code.",
    icon: <QrCode className="text-emerald-500" aria-hidden="true" />,
    color: "bg-emerald-50 dark:bg-emerald-900/20"
  },
  {
    title: "Niveaux & Bons d'Amour",
    desc: "Gagnez des niveaux ensemble et débloquez d'incroyables récompenses à utiliser avec votre partenaire (ex: massages gratuits, surprises...).",
    icon: <Gift className="text-rose-500" aria-hidden="true" />,
    color: "bg-rose-50 dark:bg-rose-900/20"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-sm font-bold tracking-widest text-purple-600 uppercase mb-4">L'expérience ultime</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase text-gray-900 dark:text-white transition-colors duration-300">
            Brisez la routine,<br className="hidden md:block" /> explorez de nouveaux horizons
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light transition-colors duration-300">
            Une suite complète d'outils et de jeux conçus pour favoriser la communication, 
            la complicité et la découverte mutuelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`group p-8 rounded-[2.5rem] ${f.color} border border-transparent dark:border-white/5 hover:border-white dark:hover:border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium opacity-80 transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gray-900 rounded-[3rem] text-center flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
                <h4 className="text-2xl font-bold text-white mb-2 italic uppercase">Et ce n'est que le début...</h4>
                <p className="text-gray-400">De nouveaux jeux et défis sont ajoutés régulierement.</p>
            </div>
        </div>
      </div>
    </section>
  );
}