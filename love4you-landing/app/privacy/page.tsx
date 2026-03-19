import LegalLayout from '../components/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout title="Politique de Confidentialité">
      <p className="text-sm italic">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2 className="text-xl font-bold text-gray-800">1. Philosophie "Privacy by Design" & Conformité RGPD</h2>
        <p>
          Love4You est conçue avec une approche de confidentialité totale. Dans le cadre du règlement général sur la protection des données (RGPD), nous veillons à minimiser la collecte de données. Nos jeux fonctionnent 100% hors-ligne. 
          <b> Nous ne collectons, ne stockons et ne traitons aucune de vos données personnelles sensibles (fantasmes, réponses) sur nos serveurs.</b>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">2. Données de l'Application et Hébergement</h2>
        <p>
          Toutes les données que vous saisissez dans l'application (fantasmes, réponses aux quiz, notes, préférences) sont stockées 
          <b> uniquement et exclusivement en local sur votre appareil</b>. Vous n'avez pas besoin de créer un compte utilisateur.
        </p>
        <p className="mt-4">
          Cependant, certaines données techniques minimales sont collectées par nos prestataires tiers pour assurer le fonctionnement et la distribution de Love4You :
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><b>Hébergement Web (Vercel) :</b> Notre site internet est hébergé par Vercel Inc. Lors de votre connexion au site, votre adresse IP est traitée temporairement pour des raisons de sécurité et d'acheminement réseau, sans être utilisée à des fins de profilage.</li>
          <li><b>Distribution Alpha (Firebase) :</b> Pour les "Testeurs Officiels", la version Alpha est distribuée via Firebase App Distribution (Google). Si vous rejoignez ce programme, votre adresse email est collectée uniquement pour vous donner accès aux mises à jour et recueillir les rapports de crashs techniques.</li>
          <li><b>Téléchargement Libre (GitHub) :</b> Les fichiers d'installation publics (APK) sont hébergés sur GitHub. L'utilisation de leurs serveurs de téléchargement est soumise à leur propre politique de confidentialité.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">3. Cookies et Mesure d'Audience (Google Analytics)</h2>
        <p>
          Afin de comprendre comment notre site web est utilisé et d'améliorer notre communication, nous utilisons Google Analytics (G-J6DT49C14N). 
          Ce service dépose des cookies et collecte des données anonymisées sur votre navigation (pages visitées, durée de session). 
          Vous pouvez vous opposer à ce suivi en configurant les paramètres de votre navigateur ou en utilisant des extensions de blocage de scripts. 
          Aucune donnée de Google Analytics n'est partagée avec des tiers à des fins publicitaires.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">4. Partage entre Partenaires (QR Code)</h2>
        <p>
          L'échange de données entre les appareils des partenaires s'effectue via des codes QR. Cet échange est direct (pair-à-pair) 
          et nécessite une proximité physique. Aucun serveur intermédiaire ne fait transiter ces données.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">5. Vos Droits (RGPD)</h2>
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, 
          de limitation et d'opposition au traitement de vos données.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
          <li><b>Données de jeu :</b> Comme vos données sont stockées localement, vous en avez le contrôle absolu. Vous pouvez les effacer instantanément depuis les paramètres de votre téléphone.</li>
          <li><b>Testeurs Alpha (Firebase) :</b> Si vous souhaitez vous retirer du programme de test et demander la suppression de votre adresse email de notre base Firebase, contactez-nous directement.</li>
        </ul>
        <p>
          Pour exercer ces droits ou pour toute question sur la protection de vos données, veuillez nous contacter à l'adresse suivante : <b>love4you.app@gmail.com</b>.
        </p>
      </section>
    </LegalLayout>
  );
}