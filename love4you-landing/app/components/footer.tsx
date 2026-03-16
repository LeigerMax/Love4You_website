// app/components/footer.tsx
"use client";

import { Shield, HeartHandshake } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
              <img
                  src="/icon.png"
                  alt="Logo Love4You"
                  width={80}
                  height={80}
                  className="mx-auto drop-shadow-xl"
                />
          <span className="text-xl font-bold text-white">Love4You</span>
        </div>
        <div className="flex gap-8">
          <a href="/terms" className="hover:text-white transition">CGU</a>
          <a href="/privacy" className="hover:text-white transition">Confidentialité</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
        <p className="text-sm">© 2026 Love4You. Fait avec ❤️ pour les couples.</p>
      </div>
    </footer>
  );
}