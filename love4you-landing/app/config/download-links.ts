import { Apple, Play, Download, LayoutGrid, Smartphone } from 'lucide-react';

export interface StoreLink {
  id: string;
  name: string;
  url: string;
  icon: any;
  isActive: boolean;
  color: string;
  description: string;
}

export const downloadLinks: StoreLink[] = [
  {
    id: 'apple',
    name: 'App Store',
    url: '',
    icon: Apple,
    isActive: false,
    color: 'bg-black',
    description: 'Pour iPhone et iPad (iOS 14+)'
  },
  {
    id: 'google',
    name: 'Google Play',
    url: '',
    icon: Play,
    isActive: false,
    color: 'bg-zinc-900',
    description: 'Pour smartphones et tablettes Android'
  },
  {
    id: 'aptoide',
    name: 'Aptoide',
    url: '',
    icon: LayoutGrid, 
    isActive: false,
    color: 'bg-[#ff7b29]',
    description: 'Store alternatif Android'
  },
  {
    id: 'apk',
    name: 'Direct APK',
    url: '/downloads/love4you-latest.apk',
    icon: Download,
    isActive: true,
    color: 'bg-purple-900',
    description: 'Installation directe (Android uniquement)'
  }
];