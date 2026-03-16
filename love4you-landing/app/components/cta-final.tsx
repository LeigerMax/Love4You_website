// app/components/cta-final.tsx
"use client";

export default function CTAFinal() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 rounded-[3rem] hero-gradient p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Prêts à jouer ensemble ?</h2>
        <p className="text-xl mb-10 opacity-90">Rejoignez des milliers de couples qui font grandir leur relation chaque jour.</p>
        <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
          Commencer l'aventure gratuitement
        </button>
      </div>
    </section>
  );
}
