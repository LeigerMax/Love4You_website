// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Love4You – Jeux pour couples",
  description:
    "Love4You transforme votre relation en terrain de jeu interactif : fantasmes partagés, défis quotidiens, jeux sexy et QR codes pour se connecter en toute confidentialité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth font-[Poppins] bg-gray-50 text-gray-900">
      <body className="min-h-screen antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}