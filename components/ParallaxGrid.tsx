'use client';

import { useEffect, useState } from 'react';

export default function ParallaxGrid() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        transform: `translateY(${scrollY * 0.3}px)`,
        willChange: 'transform',
      }}
    >
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(239, 68, 68, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Diagonal lines for extra depth */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(239, 68, 68, 0.03) 49%, rgba(239, 68, 68, 0.03) 51%, transparent 52%)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
