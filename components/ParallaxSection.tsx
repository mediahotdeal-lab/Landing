'use client';

import { useEffect, useState, useRef } from 'react';

export default function ParallaxSection({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const offset = scrolled * speed;
        setOffsetY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${offsetY}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
