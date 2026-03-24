import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aperçu de Love4You - Captures d\'écran de l\'application',
  description: 'Découvrez l\'interface de Love4You. Une application de jeux pour couple pensée pour être intuitive, élégante et totalement privée.',
};

export default function ScreenshotsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
