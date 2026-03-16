import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
        <img
                  src="/icon.png"
                  alt="Logo Love4You"
                  width={80}
                  height={80}
                  className="mx-auto drop-shadow-xl"
                />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
            Love4You
          </span>
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <Link href="#features" className="hover:text-purple-600 transition">Jeux</Link>
          <Link href="#screenshots" className="hover:text-purple-600 transition">Aperçu</Link>
          <Link href="#privacy" className="hover:text-purple-600 transition">Confidentialité</Link>
        </div>
        <Link href="#download" className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition shadow-md">
          Télécharger
        </Link>
      </div>
    </nav>
  );
}