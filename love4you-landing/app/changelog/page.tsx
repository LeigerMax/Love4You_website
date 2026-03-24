import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import * as motion from "framer-motion/client";
import { Rocket, Bug, Star, Globe, Palette, Wrench, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Changelog & Roadmap | Love4You',
  description: "Découvrez l'historique des versions, les nouveautés, corrections de bugs et la roadmap des futures mises à jour de l'application Love4You.",
  alternates: {
    canonical: 'https://love4you.vercel.app/changelog',
  },
  openGraph: {
    title: 'Changelog & Roadmap | Love4You',
    description: "Suivez l'évolution de Love4You : mises à jour, correctifs et fonctionnalités à venir.",
    url: 'https://love4you.vercel.app/changelog',
  }
};

type TagType = 'feature' | 'fix' | 'ui' | 'i18n' | 'config';

interface Change {
  type: TagType;
  text: string;
}

interface VersionData {
  version: string;
  date?: string;
  isRoadmap?: boolean;
  changes: {
    category: string;
    icon: React.ElementType;
    items: string[];
  }[];
}

const changelogData: VersionData[] = [
  {
    version: 'À venir (Roadmap)',
    isRoadmap: true,
    changes: [
      {
        category: 'Prochainement sur Love4You',
        icon: MapPin,
        items: [
          "Ajout d'events spéciaux",
          'Nouveau scénario, défis, position de kamasutra, etc.',
          "Ajout d'un jeu de plateau",
          "Calendrier de l'avent",
        ],
      },
    ],
  },
  {
    version: 'v0.4.0 (24-03-2026)',
    changes: [
      {
        category: 'Nouveautés majeures',
        icon: Rocket,
        items: [
          "Le Grand Retour du Roleplay : Le module fait son grand retour avec un catalogue de scénarios enrichi et une interface totalement repensée pour plus d'immersion.",
          "Optimisation iOS Web : Amélioration significative de l'expérience sur navigateur iOS. Le module Big Daily est désormais pleinement compatible et fluide pour les utilisateurs sur iPhone et iPad.",
          "Nouveau Design System \"Intimate\" : L'interface est plus douce, sans lignes de séparation, pour une navigation apaisante.",
          "Aide intégrée (Bouton Info) : Un nouveau bouton d'information est disponible dans chaque module pour vous expliquer les règles du jeu en un clin d'œil.",
          "Multi-Profils & Couples : Vos résultats sont désormais sauvegardés par couple. Jouer avec un nouveau partenaire ne risque plus d'écraser vos précédents scores !"
        ],
      },
      {
        category: 'Évolution du Roleplay',
        icon: Palette,
        items: [
          "Configuration simplifiée : Sélection des rôles réinventée avec de grands avatars interactifs.",
          "Interface épurée : Suppression des éléments visuels superflus sur les fiches scénarios pour se concentrer sur l'essentiel."
        ],
      },
      {
        category: 'Profil & Succès',
        icon: Star,
        items: [
          "Nouveaux Trophées : Le succès \"Profil complété\" évolue en deux badges distincts : \"Profil créé\" et \"En couple\".",
          "Progression : Correction du système de déblocage pour garantir que vos trophées s'affichent instantanément."
        ],
      },
      {
        category: 'Love Quiz & Expérience',
        icon: Wrench,
        items: [
          "Love Quiz : Interface modernisée avec des icônes natives et des dégradés dynamiques lors de vos réponses.",
          "Enchaînement fluide : L'application propose désormais automatiquement au deuxième partenaire de prendre la main à la fin d'un quiz.",
          "Correctifs : Suppression des bugs d'affichage (textes coupés ou boutons inaccessibles) sur les petits écrans."
        ],
      },
    ],
  },
  {
    version: 'v0.3.2',
    changes: [
      {
        category: 'Nouveautés & Contenu',
        icon: Star,
        items: ['Ajout du pokédex Kamasutra.'],
      },
      {
        category: 'Configuration',
        icon: Wrench,
        items: ['Désactivation temporaire du module roleplay pour rework.'],
      },
    ],
  },
  {
    version: 'v0.3.1',
    changes: [
      {
        category: 'Nouveautés & Contenu',
        icon: Star,
        items: [
          "Écran de Consentement : Ajout d'une étape de validation au lancement de l'application pour garantir une expérience sécurisée et respectueuse de vos choix.",
        ],
      },
    ],
  },
  {
    version: 'v0.2.7x (Alpha)',
    changes: [
      {
        category: 'Nouveautés & Contenu',
        icon: Star,
        items: [
          "Module Big Daily : Intégration officielle de l'ensemble du contenu issu de la phase Alpha. Préparez-vous à relever vos premiers défis d'envergure !",
          "Sexy Dice (Mise à jour) : Enrichissement de l'expérience avec l'arrivée de nouvelles catégories dédiées : Préliminaires (pour faire monter la température en douceur) et Kamasutra (pour explorer de nouveaux horizons et varier les plaisirs).",
        ],
      },
    ],
  },
  {
    version: 'v0.2.6',
    changes: [
      {
        category: 'Corrections (Bug Fixes)',
        icon: Bug,
        items: [
          "Système d'Achievements : Correction des succès qui ne se débloquaient pas correctement. Vos trophées sont désormais comptabilisés sans accroc.",
          "Mise à jour de l'App : Résolution d'un bug critique qui forçait la réinstallation complète de l'application lors d'une mise à jour.",
          "Scan des Bons : Suppression de l'ouverture multiple de pages lors du scan.",
          "Correction du bug de 'l'objet invisible' : le contenu du bon s'affiche désormais instantanément après le scan.",
          "Correction d'affichage mineur sur le numéro de version.",
        ],
      },
    ],
  },
  {
    version: 'v0.2.5',
    changes: [
      {
        category: 'Nouveautés',
        icon: Star,
        items: [
          "Module \"Les bons d'amour\" : Découvrez notre tout nouveau module pour échanger des attentions particulières. ❤️",
          "Module Big Daily : Lancement officiel du nouveau module pour vos défis quotidiens d'envergure.",
          "Notifications Firebase : Intégration du système de notifications via Firebase pour une réception instantanée et fiable.",
          "Partage Daily : Ajout d'un bouton Share pour partager vos activités quotidiennes.",
          "Navigation Dashboard : Accès direct aux modules Event et Big Daily depuis le tableau de bord.",
          "Easter Egg : Un petit secret a été caché dans l'application... saurez-vous le trouver ? 🔍",
        ],
      },
      {
        category: 'Corrections (Bug Fixes)',
        icon: Bug,
        items: [
          "Navigation : Après l'évaluation d'une 'fantasy', vous êtes désormais correctement redirigé vers le module Fantasies (au lieu du Dashboard).",
          "Sécurité : Correction de la boucle infinie de l'authentification par empreinte digitale au démarrage.",
          "Export : Message d'erreur clarifié lorsqu'aucune 'fantasy' n'est disponible pour l'exportation.",
          "Daily : Correction du bug d'affichage des catégories qui restaient en français sur la version anglaise.",
        ],
      },
      {
        category: 'Localisation & Traduction',
        icon: Globe,
        items: [
          "Contenus : Ajout des traductions manquantes pour les statistiques, les roleplays (contenus et filtres).",
        ],
      },
      {
        category: 'Interface & UX',
        icon: Palette,
        items: [
          "Mode Sombre : Activation automatique du Dark Mode dès le premier lancement.",
          "Refontes Graphiques : Nouvelle interface moderne pour le Dashboard et le module Sexy Dice.",
          "Roleplay : Ajustements ergonomiques pour une immersion renforcée.",
        ],
      },
    ],
  },
  {
    version: 'v0.2.4-alpha',
    changes: [
      {
        category: 'Nouveautés & Corrections',
        icon: Bug,
        items: [
          "Nouvelle version Alpha de Love4You.",
          "Fix bug au lancement d'écran noir.",
          "Changement langue par défaut en français.",
        ],
      },
    ],
  },
  {
    version: 'v0.2.3-alpha',
    changes: [
      {
        category: 'Nouveautés',
        icon: Star,
        items: [
          "Mise en place du programme de test.",
        ],
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-[#05010a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 mb-4"
          >
            Changelog & Roadmap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Suivez l&apos;évolution de Love4You. Découvrez nos prochaines grandes nouveautés et l&apos;historique de nos mises à jour.
          </motion.p>
        </div>

        <div className="relative border-l-2 border-indigo-100 dark:border-indigo-900/40 ml-4 md:ml-8">
          {changelogData.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16 relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-[#05010a] shadow-sm ${release.isRoadmap ? 'bg-pink-500' : 'bg-indigo-500'}`} />

              <div className="flex flex-col mb-6">
                <h2 className={`text-2xl md:text-3xl font-bold ${release.isRoadmap ? 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500' : 'text-gray-900 dark:text-white'}`}>
                  {release.version}
                </h2>
              </div>

              <div className="bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 shadow-xl shadow-indigo-900/5">
                <div className="space-y-8">
                  {release.changes.map((category, catIndex) => {
                    const IconInfo = category.icon;
                    return (
                      <div key={catIndex}>
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                          <span className={`p-2 rounded-lg bg-gray-100 dark:bg-white/5 ${release.isRoadmap ? 'text-pink-500' : 'text-indigo-500'}`}>
                            <IconInfo className="w-5 h-5" />
                          </span>
                          {category.category}
                        </h3>
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                              <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-green-500/70" />
                              <span className="leading-relaxed leading-6">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
