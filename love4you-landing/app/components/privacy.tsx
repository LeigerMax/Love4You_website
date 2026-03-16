import { ShieldCheck, EyeOff, Smartphone } from 'lucide-react';

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 italic uppercase">Votre intimité est sacrée</h2>
            <p className="text-lg opacity-80 mb-8 font-light">
              Love4You a été construite sur un principe technique strict : <b>Zéro Serveur.</b> 
              Toutes vos préférences et photos restent localement sur votre téléphone.
            </p>
            <div className="space-y-6">
              {[
                { icon: <EyeOff />, title: "Pas de Cloud", text: "Rien n'est stocké en ligne, personne ne peut intercepter vos données." },
                { icon: <Smartphone />, title: "Échange par QR Code", text: "Synchronisez vos envies uniquement en face à face avec votre partenaire." },
                { icon: <ShieldCheck />, title: "Pas de compte requis", text: "Commencez à jouer instantanément, sans e-mail ni mot de passe." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-pink-400">{item.icon}</div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm opacity-70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border border-white/20 animate-pulse">
              <ShieldCheck size={100} className="text-pink-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}