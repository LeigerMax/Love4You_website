"use client";
import { useEffect, useState } from 'react';

// Nombre d'étoiles à générer
const STAR_COUNT = 60;

// Génère une position et une taille aléatoire pour chaque étoile
function randomStar() {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    delay: `${Math.random() * 2}s`,
  };
}

export default function StarBackground() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Array<{top: string; left: string; size: string; delay: string}>>([]);

  useEffect(() => {
    setMounted(true);
    setStars(Array.from({ length: STAR_COUNT }, randomStar));
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {stars.map((star, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-white opacity-80 animate-star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            boxShadow: '0 0 6px 2px #fff',
          }}
        />
      ))}
    </div>
  );
}