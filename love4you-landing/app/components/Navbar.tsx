import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#07031a]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
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
        <div className="hidden md:flex gap-8 font-medium text-gray-600 dark:text-gray-300">
          <Link href="/#features" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Jeux</Link>
          <Link href="/#screenshots" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Aperçu</Link>
          <Link href="/#privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Confidentialité</Link>
          <Link href="/contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/#download" className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition shadow-md">
            Télécharger
          </Link>
        </div>
      </div>
    </nav>
  );
}