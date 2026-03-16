import { 
  Heart, 
  Zap, 
  Dice5, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  QrCode, 
  Trophy 
} from 'lucide-react';

const features = [
  {
    title: "Fantasmes Couple",
    desc: "Explorez vos envies mutuelles via QR Code. Seuls les matchs s'affichent pour briser la glace sans pression et sans tabou.",
    icon: <Heart className="text-pink-500" />,
    color: "bg-pink-50"
  },
  {
    title: "Actions Quotidiennes",
    desc: "Un nouveau défi chaque jour parmi 9 catégories (Romantique, Sensoriel, Intense...). Maintenez la flamme au quotidien.",
    icon: <Zap className="text-purple-500" />,
    color: "bg-purple-50"
  },
  {
    title: "Sexy Dice",
    desc: "Laissez le hasard décider avec des dés combinables : une action, une partie du corps et une position pour des moments imprévus.",
    icon: <Dice5 className="text-orange-500" />,
    color: "bg-orange-50"
  },
  {
    title: "Jeu de Rôle",
    desc: "Incarnez des personnages (Inconnu au bar, Professeur...) à travers des scénarios immersifs guidés étape par étape.",
    icon: <Sparkles className="text-indigo-500" />,
    color: "bg-indigo-50"
  },
  {
    title: "Quiz d'Amour",
    desc: "Testez votre connaissance mutuelle sur des thèmes variés : souvenirs, préférences, sexualité et vie quotidienne.",
    icon: <HelpCircle className="text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    title: "Cartes à Gratter",
    desc: "Découvrez des surprises cachées derrière des grilles thématiques (Global, Anal, 69, Cunnilingus...) pour pimenter vos soirées.",
    icon: <Layers className="text-amber-500" />,
    color: "bg-amber-50"
  },
  {
    title: "Synchronisation QR",
    desc: "Pas de compte, pas de serveur. Échangez vos données de manière ultra-sécurisée et privée via un simple scan de QR Code.",
    icon: <QrCode className="text-emerald-500" />,
    color: "bg-emerald-50"
  },
  {
    title: "Stats & Succès",
    desc: "Gamifiez votre relation ! Suivez vos séries (streaks), débloquez des trophées et visualisez votre progression commune.",
    icon: <Trophy className="text-rose-500" />,
    color: "bg-rose-50"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-4">L'expérience ultime</h2>
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase text-gray-900">
            Brisez la routine,<br className="hidden md:block" /> explorez de nouveaux horizons
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Une suite complète d'outils et de jeux conçus pour favoriser la communication, 
            la complicité et la découverte mutuelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`group p-8 rounded-[2.5rem] ${f.color} border border-transparent hover:border-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium opacity-80">
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