// app/components/footer.tsx
"use client";

import { Shield, HeartHandshake, Twitter, Instagram } from "lucide-react";

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
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex gap-8">
            <a href="/terms" className="hover:text-white transition">CGU</a>
            <a href="/privacy" className="hover:text-white transition">Confidentialité</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm mt-2">
            <a href="https://x.com/Love4You_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-2">
              <Twitter size={18} /> @Love4You_app
            </a>
            <a href="https://instagram.com/love4you.app" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition flex items-center gap-2">
              <Instagram size={18} /> love4you.app
            </a>
            <a href="https://tiktok.com/@love4you.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              love4you.app
            </a>
          </div>
        </div>
        <p className="text-sm">© 2026 Love4You. Fait avec ❤️ pour les couples.</p>
      </div>
    </footer>
  );
}