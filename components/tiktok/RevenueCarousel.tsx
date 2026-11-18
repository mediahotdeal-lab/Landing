'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const REVENUE_IMAGES = [1, 2, 3, 4, 5, 6].map((n) => `/images/tiktok/revenue/doanh-so-${n}.jpg`);
const AUTOPLAY_MS = 3500;

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
      />
    </svg>
  );
}

export default function RevenueCarousel() {
  const t = useTranslations('tiktokPage.revenue');
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const total = REVENUE_IMAGES.length;

  const goTo = useCallback((next: number) => setIndex((next + total) % total), [total]);

  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, lightboxIndex, total]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? i : (i - 1 + total) % total));
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? i : (i + 1) % total));
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, total]);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) goTo(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div
        className="relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(220,38,38,0.12)] ring-1 ring-red-100"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {REVENUE_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative w-full shrink-0 aspect-[16/9.6] cursor-zoom-in"
              aria-label={`${t('zoom')} - ${t('imageAlt', { index: i + 1 })}`}
              tabIndex={i === index ? 0 : -1}
            >
              <Image
                src={src}
                alt={t('imageAlt', { index: i + 1 })}
                fill
                sizes="(min-width: 1280px) 460px, 100vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex w-9 h-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-md ring-1 ring-red-100 hover:bg-red-600 hover:text-white transition-colors"
          aria-label={t('prev')}
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex w-9 h-9 items-center justify-center rounded-full bg-white/90 text-red-600 shadow-md ring-1 ring-red-100 hover:bg-red-600 hover:text-white transition-colors"
          aria-label={t('next')}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {REVENUE_IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-7 bg-red-600' : 'w-2 bg-red-200 hover:bg-red-300'
            }`}
            aria-label={t('goTo', { index: i + 1 })}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 animate-modal-fade"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative w-full max-w-5xl animate-modal-pop" onClick={(e) => e.stopPropagation()}>
            <Image
              src={REVENUE_IMAGES[lightboxIndex]}
              alt={t('imageAlt', { index: lightboxIndex + 1 })}
              width={1200}
              height={700}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl bg-white"
            />
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 flex w-10 h-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors"
              aria-label={t('close')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex - 1 + total) % total)}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex w-11 h-11 items-center justify-center rounded-full bg-white text-red-600 shadow-lg hover:bg-red-600 hover:text-white transition-colors"
              aria-label={t('prev')}
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % total)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex w-11 h-11 items-center justify-center rounded-full bg-white text-red-600 shadow-lg hover:bg-red-600 hover:text-white transition-colors"
              aria-label={t('next')}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
