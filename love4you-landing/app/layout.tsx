// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import MotionProvider from "./components/MotionProvider";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import ThemeProvider from "./components/ThemeProvider";
import StarsBackground from "./components/StarsBackground";

export const metadata: Metadata = {
  metadataBase: new URL('https://love4you.app'),
  title: "Love4You – Jeux pour couples",
  description:
    "Love4You transforme votre relation en terrain de jeu interactif : fantasmes partagés, défis quotidiens, jeux sexy et QR codes pour se connecter en toute confidentialité.",
  keywords: ["jeux pour couples", "fantasmes", "défis couples", "jeux coquins", "relation de couple", "action vérité couple", "app couple"],
  openGraph: {
    title: "Love4You – Jeux pour couples",
    description: "Love4You transforme votre relation en terrain de jeu interactif pour explorer vos fantasmes et relever des défis.",
    url: "https://love4you.app",
    siteName: "Love4You",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "Love4You App Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Love4You – Jeux pour couples",
    description: "La meilleure application de jeux sexy, défis et fantasmes pour pimenter votre couple.",
    images: ["/icon.png"],
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'VtyFOfhjcYWaSCapbOBEUZpcniy1CTeJ8ENXAgqtEzE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth font-[Poppins] bg-gray-50 dark:bg-[#05010a] text-gray-900 dark:text-gray-100">
      <head>
      </head>
      <body className="min-h-screen antialiased bg-gray-50 dark:bg-[#05010a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <StarsBackground />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-purple-600 focus:font-bold focus:shadow-xl focus:rounded-br-xl">
          Passer au contenu principal
        </a>
          <MotionProvider>
            {children}
          </MotionProvider>
          <CookieBanner />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}