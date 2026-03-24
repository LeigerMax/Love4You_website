import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Télécharger Love4You - Application de jeux pour couple',
  description: 'Installez Love4You sur Android et iOS pour découvrir nos jeux de couple, défis coquins et renforcer votre relation.',
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
