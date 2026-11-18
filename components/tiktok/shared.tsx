'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'zoom';

const variantClass: Record<RevealVariant, string> = {
  up: '',
  left: 'tt-reveal-left',
  right: 'tt-reveal-right',
  zoom: 'tt-reveal-zoom',
};

// Fades children in the first time they scroll into view
export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`tt-reveal ${variantClass[variant]} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-[3px] w-8 rounded-full bg-red-600" />
      <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wide text-red-600">
        {children}
      </span>
    </div>
  );
}

export function ArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export const primaryButtonClass =
  'tt-shine group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-7 py-3.5 font-bold text-white shadow-[0_10px_24px_rgba(220,38,38,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(220,38,38,0.45)]';

const TIKTOK_PATH =
  'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z';

// Glossy 3D app tile with the TikTok note
export function TikTokTile({ size, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`} style={size ? { width: size, height: size } : undefined} aria-hidden="true">
      <div
        className="absolute inset-0 rounded-[24%] bg-gradient-to-br from-[#3a3a3a] via-[#0b0b0b] to-black"
        style={{
          boxShadow:
            '5px 7px 0 #1a1a1a, 9px 12px 0 #0d0d0d, 18px 26px 36px rgba(0,0,0,0.45), inset 0 2px 0 rgba(255,255,255,0.25)',
        }}
      />
      <div className="absolute inset-[3%] rounded-[22%] bg-gradient-to-br from-white/15 via-transparent to-transparent" />
      <svg viewBox="0 0 24 24" className="absolute inset-[22%]">
        <path d={TIKTOK_PATH} fill="#25F4EE" transform="translate(-0.8 -0.6)" />
        <path d={TIKTOK_PATH} fill="#FE2C55" transform="translate(0.8 0.6)" />
        <path d={TIKTOK_PATH} fill="#fff" />
      </svg>
    </div>
  );
}
