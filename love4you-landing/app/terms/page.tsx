import LegalLayout from '../components/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout title="Conditions d'Utilisation">
      <p className="text-sm italic">En utilisant Love4You, vous acceptez les présentes conditions.</p>

      <section>
        <h2 className="text-xl font-bold text-gray-800">1. Conditions d'Âge</h2>
        <p>
          L'utilisation de Love4You est strictement réservée aux personnes majeures (18 ans et plus). 
          L'application propose des contenus destinés aux adultes et à l'exploration de l'intimité de couple.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">2. Responsabilité de l'Utilisateur</h2>
        <p>
          Love4You est un outil de divertissement et de communication pour les couples. 
          Vous êtes seul responsable de l'utilisation de l'application et des interactions avec votre partenaire. 
          L'application ne doit en aucun cas être utilisée pour contraindre ou harceler une personne. Le consentement mutuel est la base de tous les jeux proposés.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">3. Absence de Garantie</h2>
        <p>
          L'application est fournie "en l'état". Bien que nous fassions de notre mieux pour garantir une expérience sans bug, 
          nous ne pouvons être tenus responsables en cas de perte de données (par exemple lors d'un changement de téléphone sans export manuel).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">4. Propriété Intellectuelle</h2>
        <p>
          L'interface, le design, les textes des scénarios et les algorithmes de jeu sont la propriété exclusive de Love4You. 
          Toute reproduction ou redistribution sans autorisation est interdite.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">5. Modification de l'Application</h2>
        <p>
          Nous nous réservons le droit de modifier, d'ajouter ou de supprimer des fonctionnalités (modules de jeux, quiz) 
          afin d'améliorer l'expérience utilisateur ou de passer à un modèle économique Premium.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">6. Contact</h2>
        <p>
          Pour toute question concernant ces conditions, vous pouvez nous contacter à l'adresse support@love4you.app.
        </p>
      </section>
    </LegalLayout>
  );
}