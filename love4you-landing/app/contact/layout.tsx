import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez Love4You - Support & Suggestions',
  description: 'Besoin d\'aide avec l\'application Love4You ou envie de nous proposer un nouveau défi de couple ? Contactez-nous !',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
