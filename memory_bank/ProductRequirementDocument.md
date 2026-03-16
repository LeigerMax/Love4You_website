# Product Requirement Document (PRD)

## 1. Vision et Objectifs
### Concept principal
Application mobile proposant une multitude de jeux interactifs pour les couples, favorisant la complicité, la communication et la découverte à deux.
L’application combine gamification, exploration des envies et défis quotidiens afin d’aider les couples à renforcer leur relation tout en s’amusant.

### Proposition de valeur (Le "Pourquoi")
De nombreux couples rencontrent plusieurs difficultés au fil du temps :
- la routine dans la relation
- la difficulté à communiquer sur ses envies ou fantasmes
- le manque d’idées d’activités à faire ensemble
- la distance dans les relations longue distance
- la baisse de spontanéité et de jeu dans la relation

Love4You répond à ces problèmes en proposant :
- des jeux interactifs pour couples
- des mécaniques de découverte mutuelle
- des défis et expériences guidées
- une communication facilitée sur les envies et fantasmes
- une gamification de la relation

L’objectif est de transformer la relation en terrain de jeu interactif.

### Cible (Personas)

**Cible globale**
Couples adultes (18+) souhaitant :
- Améliorer leur communication
- Explorer de nouvelles expériences
- Briser la routine
- S’amuser ensemble
*(Public international, tous genres).*

#### Persona 1 — Le jeune couple explorateur
- **Profil :** 20-30 ans, relation récente (moins de 2 ans), curieux et ouverts à découvrir de nouvelles choses.
- **Objectifs :** Apprendre à mieux se connaître, explorer leurs envies, découvrir des jeux pour couples.
- **Motivation :** *"On veut découvrir de nouvelles choses ensemble."*

#### Persona 2 — Le couple installé
- **Profil :** 25-40 ans, relation stable (3-10 ans), avec une routine qui s’installe.
- **Objectifs :** Raviver la flamme, casser la routine, introduire de nouvelles idées dans la relation.
- **Motivation :** *"On s’aime mais on veut remettre du fun dans notre relation."*

#### Persona 3 — Couple longue distance
- **Profil :** Partenaires vivant dans des villes ou des pays différents.
- **Objectifs :** Garder de la complicité malgré la distance, partager des expériences interactives.
- **Motivation :** *"On veut rester connectés malgré la distance."*

#### Persona 4 — Partenaires occasionnels (Friends with Benefits / Casual)
- **Profil :** Personnes en mode "sexfriends", rencontres d'un soir ou relations non-exclusives.
- **Objectifs :** Briser la glace rapidement, communiquer ses limites et envies sans tabou, s'assurer d'une expérience fun et consensuelle sans la pression de l'engagement.
- **Motivation :** *"On veut s'amuser sans prise de tête et savoir tout de suite ce qui nous plaît à tous les deux."*

### Critères de succès (KPIs)

Pour mesurer la réussite de l'application à ses différentes étapes, nous suivrons les indicateurs suivants :

**1. Acquisition et Activation (Lancement & Découverte)**
- **Téléchargements mensuels :** Nombre de nouvelles installations.
- **Taux d'activation (Le "Aha! Moment") :** Pourcentage de nouveaux utilisateurs qui réalisent leur première action clé le jour du téléchargement (ex: gratter une case, lancer un dé, ou générer un QR code).
- **Volume de partage :** Nombre de QR codes générés et scannés (indicateur crucial prouvant que l'application est bien utilisée à deux).

**2. Engagement et Rétention (L'habitude)**
- **DAU / MAU (Daily/Monthly Active Users) :** Nombre d'utilisateurs actifs par jour et par mois.
- **Taux de rétention (J+1, J+7, J+30) :** Pourcentage d'utilisateurs qui reviennent sur l'application 1 jour, 7 jours et 30 jours après l'installation.
- **Maintien des Streaks :** Pourcentage d'utilisateurs ayant une série (streak) de plus de 3 jours actifs consécutifs.
- **Durée moyenne de session :** Temps passé sur l'application par ouverture.

**3. Satisfaction Technique et Utilisateur**
- **Note sur les stores :** Maintenir une note moyenne supérieure à 4.2 / 5.
- **Taux de sessions sans crash (Crash-free rate) :** Maintenir un taux technique supérieur à 99% pour garantir une bonne expérience (surtout lors de l'utilisation de la caméra pour les QR codes).

**4. Monétisation (Focus pour la V2)**
- **Taux de conversion :** Pourcentage d'utilisateurs gratuits passant à l'abonnement Premium.
- **MRR (Monthly Recurring Revenue) :** Revenu mensuel récurrent généré par les abonnements.
- **Taux d'attrition (Churn Rate) :** Pourcentage d'utilisateurs qui annulent leur abonnement Premium chaque mois.
---

## 2. Périmètre Actuel : Modules développés

### 2.1 Fantasies
- **Objectif :** Permettre aux utilisateurs d’explorer leurs fantasmes et de découvrir ceux qu’ils partagent avec leur partenaire. L’objectif est de faciliter la communication sur des sujets parfois difficiles à aborder directement.
- **Fonctionnalités :**
  - Catalogue de fantasmes
  - Notation de 0 à 5
  - Génération de QR code
  - Scan du QR code partenaire
  - Comparaison des résultats
- **Résultat affiché :**
  - Fantasmes communs (note compris entre 3 et 5 pour les deux personnes)
- **Valeur utilisateur :** Découverte mutuelle, discussion facilitée, exploration progressive.

### 2.2 QR Export
- **Objectif :** Permettre le partage de données entre partenaires sans créer de compte ni serveur central.
- **Fonctionnalités :**
  - Génération QR code
  - Scan QR code
  - Export des données :
    - Fantasmes
  - Gestion des erreurs
- **Valeur utilisateur :** Confidentialité, simplicité, partage rapide.

### 2.3 Daily Action
- **Objectif :** Proposer chaque jour une petite action simple pour encourager les couples à maintenir une attention quotidienne.
- **Fonctionnalités :**
  - Action quotidienne
  - Tirage aléatoire sous forme de carte visuelle
  - Catégories :
    - "Contrôle & Ordres",
    - "En ligne / À distance",
    - "Food / Sensoriel",
    - "Intense / Edge",
    - "Jeux & Défi mental",
    - "Public / Risque discret",
    - "Romantique / Love",
    - "Sensuel / Érotique lent",
    - "Soumission & Attaches légères"
- **Valeur utilisateur :** Créer une habitude quotidienne dans la relation.

### 2.4 Dashboard
- **Objectif :** Point central de navigation dans l'application.
- **Fonctionnalités :**
  - Accès rapide aux jeux
  - Raccourcis QR
  - Affichage :
    - Streak actuel
    - Statistiques
- **Valeur utilisateur :** Navigation rapide et engagement.

### 2.5 Roleplay
- **Objectif :** Permettre aux couples d’explorer des scénarios immersifs guidés.
- **Fonctionnalités :**
  - Bibliothèque de scénarios
  - Progression étape par étape
  - Écran de complétion
- **Exemples de scénarios :**
  - Inconnu dans un bar
  - Rendez-vous interdit
  - Professeur / Étudiant
  - Médecin / Patient
- **Valeur utilisateur :** Immersion, créativité, exploration ludique.

### 2.6 Love Quiz
- **Objectif :** Tester la connaissance des partenaires l’un sur l’autre.
- **Fonctionnalités :**
  - Réponses séparées
  - Comparaison des résultats
  - Thématiques :
    - Souvenirs
    - Préférences
    - Sexualité
    - Quotidien
- **Résultat :** Score de compatibilité et mise en évidence des réponses surprenantes.
- **Valeur utilisateur :** Créer des discussions et des moments fun.

### 2.7 Scratch Reveal
- **Objectif :** Créer un jeu de découverte aléatoire et visuel.
- **Fonctionnalités :**
  - Grilles thématiques
    - Global
    - Anal
    - 69
    - Cunnilingus
    - Fellation
  - Cases à gratter
  - Révélation d’éléments
  - Redirection vers site externe pour plus d'explication
- **Valeur utilisateur :** Effet surprise + gamification.

### 2.8 Sexy Dice
- **Objectif :** Créer des combinaisons aléatoires pour générer des actions amusantes.
- **Fonctionnalités :**
  - Dés combinables : Action, Partie du corps, Position.
- **Exemple de combinaison générée :** Embrasser + Cou.
- **Valeur utilisateur :** Spontanéité et fun.

### 2.9 Statistiques
- **Objectif :** Gamifier l’expérience pour encourager l’utilisation récurrente de l'application.
- **Fonctionnalités :**
  - Statistiques de jeu
  - Streaks (séries)
  - Achievements (succès)
  - Progression utilisateur
- **Exemples d’achievements :**
  - 7 jours consécutifs
  - 10 quiz joués
  - 50 cases grattées

---

## 3. Fonctionnalités Transverses (Expérience)
- Notifications push (pour les Daily Actions, rappels).
- Multilingue (pour toucher un public international).
- Synchronisation entre partenaires (via QR code).
- Personnalisation de l’interface (thèmes, couleurs).
- Support offline (utilisation sans connexion internet).
- Animations et gamification (effets visuels, récompenses, badges).

## 4. Parcours Utilisateurs Principaux (User Journeys)

Ces parcours décrivent l'expérience type que nous voulons offrir aux utilisateurs à différents stades de leur cycle de vie sur l'application.

### 4.1 Parcours 1 : Onboarding et Découverte (Premier lancement)
*Ce parcours vise à engager le premier utilisateur (le "prescripteur") et à le pousser à inviter son/sa partenaire.*

1. **Vérification de l'âge :** L'utilisateur ouvre l'app et valide un écran de consentement strict (+18 ans).
2. **Arrivée sur le Dashboard :** L'utilisateur découvre l'interface principale, ses statistiques à zéro, et les différents modules disponibles.
3. **Premier engagement (Fantasies) :** Intrigué, l'utilisateur ouvre le module "Fantasies" et commence à noter ses propres envies (de 0 à 5).
4. **Le "Aha! Moment" (Partage) :** L'utilisateur découvre qu'il peut générer un QR Code de ses réponses. Il comprend la mécanique de l'app et invite son/sa partenaire à la télécharger pour comparer.
5. **Test rapide :** En attendant son partenaire, l'utilisateur tire sa première "Daily Action" pour voir comment ça marche.
6. **Exploration libre :** Il navigue dans 3 ou 4 autres modules (Love Quiz, Sexy Dice) pour comprendre le potentiel de l'application.

### 4.2 Parcours 2 : La connexion (Utilisation en couple)
*Ce parcours est le cœur de l'expérience : le moment où l'application crée de l'interaction réelle entre les deux partenaires.*

1. **Préparation :** Le second partenaire a téléchargé l'app et rempli sa propre liste de fantasmes.
2. **Le Match (QR Scan) :** Les partenaires se retrouvent (physiquement ou en visio). L'un affiche son QR Code (via le module "QR Export" ou le Dashboard), l'autre le scanne avec son téléphone.
3. **La Révélation :** L'application affiche instantanément les "Matchs" (les fantasmes ayant reçu une note de 3 à 5 par les deux personnes).
4. **La Discussion :** Le couple discute de ses résultats et brise la glace sur des sujets intimes.
5. **L'Action :** Pour prolonger ce moment de complicité, ils lancent un jeu rapide ensemble, comme le "Sexy Dice" ou une grille "Scratch Reveal".

### 4.3 Parcours 3 : La Rétention (Utilisation quotidienne)
*Ce parcours illustre la mécanique de fidélisation (création d'habitude).*

1. **Le Trigger (Déclencheur) :** L'utilisateur reçoit une notification push personnalisée (ex: *"Une nouvelle Daily Action vous attend pour pimenter votre soirée..."*).
2. **L'Ouverture :** L'utilisateur clique sur la notification et arrive directement sur le Dashboard.
3. **L'Action :** Il ouvre le module "Daily Action", tire la carte du jour.
4. **La Récompense (Gamification) :** Une fois l'action réalisée, le compteur de "Streak" (série de jours consécutifs) augmente sur le Dashboard, et l'utilisateur débloque potentiellement un nouvel "Achievement" (ex: *7 jours consécutifs !*).

## 5. Roadmap & Modules à venir

### 5.1 Version Alpha (Phase de test fermée)

**Objectif principal :** Distribuer une première version fonctionnelle à un groupe restreint de testeurs pour identifier les bugs et valider l'ergonomie globale.

**Contenu embarqué :**
- Fantasies
- Daily Action
- Love Quiz
- Sexy Dice
- Dashboard
- QR Export
- Statistiques basiques

**Objectifs stratégiques :**
- Chasser les bugs techniques sur différents modèles de téléphones (QA testing).
- Valider la compréhension des jeux et la fluidité des parcours (UX).
- Tester la fiabilité de la génération et du scan de QR Code.

> **Modèle :** 100% gratuit et privé (Distribution via TestFlight pour iOS et Test Interne Google Play pour Android).

---

### 5.2 Version 1 (MVP) - Lancement Initial public

**Objectif principal :** Publier la première version officielle sur les stores (App Store & Google Play).

**Contenu embarqué :**
- *Identique à la version Alpha, après correction des bugs et optimisation.*

**Objectifs stratégiques :**
- Valider l’intérêt du produit sur le marché réel.
- Collecter les premiers retours utilisateurs (feedbacks et notes sur les stores).
- Commencer l'acquisition organique d'utilisateurs.

> **Modèle économique :** 100% gratuit (Aucun achat in-app ni abonnement pour cette première version afin de maximiser l'adoption).

### 5.3 Version 2 (V2) - Expansion, Rétention et Monétisation

**Objectif principal :** Enrichir massivement le contenu pour fidéliser les utilisateurs sur le long terme, créer des rendez-vous réguliers et introduire le modèle économique de l'application.

**1. Nouveaux Modules et Mécaniques d'Engagement :**
- **Module Défi "Hot/Cold" :** Système permettant aux partenaires de se lancer des défis mutuels.
  - *Valeur ajoutée :* Intégration de la création de défis personnalisés par l'utilisateur (pour une expérience sur mesure).
- **Système d'Événements (Time-limited Events) :** Apparition de modules éphémères liés au calendrier (Saint-Valentin, Halloween, Noël, Pâques, etc.).
  - *Valeur ajoutée :* Débloque du contenu exclusif et temporaire (scénarios, daily actions, grilles spécifiques) le temps de l'événement pour booster les ouvertures de l'app.
- **Le "Gros Daily" Mensuel :** Une fois par mois, la *Daily Action* classique est remplacée par un événement spécial, beaucoup plus long et immersif, composé d'une succession de tâches à accomplir à deux.

**2. Enrichissement Massif du Contenu (Scale) :**
- **Daily Action :** Élargissement de la base de données pour atteindre **600 actions quotidiennes** (garantissant une longévité d'utilisation sans répétition).
- **Roleplay :** Ajout de nouveaux scénarios inédits et plus complexes.
- **Scratch Reveal :** Nouvelles grilles thématiques prêtes à être grattées.
- **Love Quiz :** Intégration de nouvelles thématiques de quiz.

**3. Stratégie de Monétisation :**
- **Modèle économique visé :** Transition vers un modèle rentable.

### 6. Stratégie de Monétisation (Modèle Freemium) :
L'application adoptera un modèle Freemium avec un système d'abonnement récurrent (mensuel et annuel) pour pérenniser le projet.

**Gratuit :**
- Dashboard complet
- Statistiques complètes
- Daily Action : certains défis gratuits, d'autres payants
- Hot/Cold : module entièrement gratuit
- Scratch Reveal : grille "Global" gratuite, grilles spécifiques payantes
- Fantasies et partage QR code : entièrement gratuit
- Love Quiz : certains quiz gratuits, d'autres payants
- Roleplay : certains scénarios gratuits, d'autres payants
- Event : premier jour gratuit, les autres jours payants
- Big Daily : réservé au premium (payant)
- Sexy Dice : module entièrement gratuit
- Thèmes : deux couleurs de thèmes payantes à débloquer

**Premium (Abonnement) :**
- Accès illimité à tous les défis Daily Action
- Accès à toutes les grilles Scratch Reveal
- Accès à tous les quiz Love Quiz
- Accès à tous les scénarios Roleplay
- Accès à tous les événements (tous les jours)
- Accès au Big Daily mensuel
- Déblocage des couleurs de thèmes premium

Cette répartition garantit une version gratuite généreuse et fun, tout en offrant des contenus exclusifs et des fonctionnalités avancées pour les abonnés.