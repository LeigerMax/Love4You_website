import LegalLayout from '../components/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout title="Conditions d'Utilisation">
      <p className="text-sm italic">En utilisant Love4You et son site web, vous acceptez les présentes conditions.</p>

      <section>
        <h2 className="text-xl font-bold text-gray-800">1. Âge Légal et Avertissement</h2>
        <p>
          L'utilisation de Love4You est strictement réservée aux personnes majeures (18 ans et plus).
          L'application propose des contenus destinés aux adultes, liés à la sexualité et à l'exploration intime en couple.
          En téléchargeant ou en utilisant l'application, vous attestez avoir l'âge légal requis.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">2. Prestation de Service & Consentement</h2>
        <p>
          Love4You est un outil de divertissement et d'aide à la communication interpersonnelle.
          L'utilisateur est personnellement responsable des actions induites par le jeu. <b>Le consentement libre et mutuel entre adultes
          reste l'exigence absolue lors de toutes les interactions avec votre partenaire.</b>
          Love4You décline toute responsabilité quant aux conséquences directes ou indirectes des défis et scénarios proposés.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">3. Hébergement et Services Tiers</h2>
        <p>
          Love4You s'appuie sur des infrastructures externes pour être accessible :
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Notre site web est hébergé par <b>Vercel</b>. Des maintenances peuvent occasionner des suspensions temporaires d'accès et l'adresse IP est temporairement traitée pour l'établissement de la connexion.</li>
          <li>La distribution de l'application mobile en phase de test (Alpha) repose sur <b>Firebase App Distribution</b>. Les inscriptions et processus de mise à jour utilisent cette technologie.</li>
          <li>Le téléchargement libre (Open Source) s'effectue via les serveurs de <b>GitHub</b>.</li>
        </ul>
        <p className="mt-4">
          L'utilisation de ces plateformes les soumet également à leurs propres Conditions Générales. Love4You ne saurait être tenu pour responsable
          des dysfonctionnements, des failles de sécurité, ou des indisponibilités de ces services tiers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">4. Perte de Données et Garanties</h2>
        <p>
          L'application est fournie "en l'état" et sans garantie. Love4You fonctionnant 100% hors-ligne (sans serveur cloud pour vos données privées),
          nous ne pouvons pas restaurer vos parties ou scénarios en cas de suppression de l'application, casse de matériel, ou changement d'appareil.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">5. Propriété Intellectuelle (Design & Contenu)</h2>
        <p>
          Hormis le code source placé sous licence Open Source, le concept ludique spécifique, l'interface graphique (branding Love4You),
          la rédaction experte des scénarios narratifs, des défis quotidiens et des quiz restent la propriété intellectuelle exclusive des créateurs.
          Leur monétisation ou réutilisation commerciale par un tiers sans accord préalable écrit est strictement interdite.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">6. Modifications des Conditions</h2>
        <p>
          Nous nous réservons le droit de modifier les CGU, ainsi que de faire évoluer nos fonctionnalités et notre modèle économique vers une version payante (Premium) dans le futur.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">7. Contact (Support Légal)</h2>
        <p>
          Pour toute réclamation, difficulté technique, ou demande légale au sujet de vos données, merci de nous adresser un courriel à : <b>love4you.app@gmail.com</b>.
        </p>
      </section>
    </LegalLayout>
  );
}