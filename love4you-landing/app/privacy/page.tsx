import LegalLayout from '../components/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout title="Politique de Confidentialité">
      <p className="text-sm italic">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2 className="text-xl font-bold text-gray-800">1. Philosophie "Privacy by Design"</h2>
        <p>
          Love4You est conçue avec une approche de confidentialité totale. Contrairement à la majorité des applications mobiles, 
          <b> nous ne collectons, ne stockons et ne traitons aucune de vos données personnelles sur des serveurs externes.</b>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">2. Collecte et Stockage des Données</h2>
        <p>
          Toutes les données que vous saisissez dans l'application (fantasmes, réponses aux quiz, notes, préférences) sont stockées 
          <b> uniquement et exclusivement en local sur votre appareil</b>. 
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><b>Aucun compte :</b> Vous n'avez pas besoin de créer un compte (e-mail ou numéro de téléphone) pour utiliser l'application.</li>
          <li><b>Zéro Serveur :</b> Nous n'utilisons aucun serveur de stockage. Vos données ne quittent jamais votre téléphone.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">3. Partage entre Partenaires (QR Code)</h2>
        <p>
          Le partage de données entre partenaires s'effectue via la génération et le scan de codes QR. Cet échange est direct (pair-à-pair) 
          et nécessite une proximité physique ou un envoi manuel de l'image du QR Code par vous-même. Aucun tiers ne peut intercepter cet échange.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">4. Services Tiers</h2>
        <p>
          L'application utilise les services de distribution (Google Play Store, Apple App Store) qui peuvent collecter des données anonymes 
          liées aux crashs techniques ou aux statistiques d'installation via leurs outils natifs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800">5. Vos Droits</h2>
        <p>
          Comme vos données sont stockées localement, vous en avez le contrôle total. Vous pouvez supprimer l'intégralité de vos données 
          à tout moment en désinstallant l'application ou en effaçant le cache de celle-ci dans les réglages de votre téléphone.
        </p>
      </section>
    </LegalLayout>
  );
}