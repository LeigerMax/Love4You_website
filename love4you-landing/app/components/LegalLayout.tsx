import React from 'react';
import Navbar from './Navbar';

export default function LegalLayout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-10 text-gray-900 italic uppercase">{title}</h1>
          <div className="prose prose-purple max-w-none text-gray-600 leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}