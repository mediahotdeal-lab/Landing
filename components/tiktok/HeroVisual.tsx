'use client';

import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { TikTokTile } from './shared';

const scriptFont = Dancing_Script({ subsets: ['latin', 'vietnamese'], weight: ['700'], display: 'swap' });

const HEART_COLORS = ['#fe2c55', '#ffffff', '#ff8fab', '#25f4ee', '#fe2c55', '#ffd1dc'];

function BagIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 7.5h13l1 13.5h-15l1-13.5z" />
      <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
      <path d="M9 12.5c.6 1.6 1.7 2.5 3 2.5s2.4-.9 3-2.5" />
    </svg>
  );
}

// Right side of the hero: a TikTok-live style video card on red satin with floating brand elements.
// Everything inside the stage is sized in container units so it scales with the hero height.
export default function HeroVisual() {
  const t = useTranslations('tiktokPage.hero');
  const comments = t.raw('liveComments') as string[];

  return (
    <div className="relative aspect-[4/3] sm:aspect-[16/10] [container-type:size] lg:absolute lg:aspect-auto lg:inset-y-0 lg:top-16 lg:right-0 lg:w-[52%]">
      {/* Backdrop */}
      <div className="absolute inset-0 overflow-hidden lg:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]">
        <Image
          src="/images/tiktok/hero-silk.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover tt-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-red-700/10 to-red-950/50" />
        {/* Oversized phone outlines echoing the design */}
        <div className="absolute left-[18%] top-[-12%] h-[130%] w-[34%] rotate-[8deg] rounded-[3rem] border-[6px] border-white/15" />
        <div className="absolute right-[-6%] top-[-18%] h-[140%] w-[30%] rotate-[8deg] rounded-[3rem] border-[6px] border-white/10" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center lg:pl-[6%]">
        {/* Height follows whichever side of the panel is tighter so the side elements never get cut */}
        <div className="relative aspect-[4/5] [container-type:size]" style={{ height: 'min(84cqh, 52cqw)' }}>
          {/* Video card */}
          <div className="tt-float-card absolute inset-0 overflow-hidden rounded-[1.6rem] border-[5px] border-white bg-gray-900 shadow-[0_24px_60px_rgba(80,0,0,0.45)]">
            <Image
              src="/images/tiktok/hero-creator.jpg"
              alt={t('imageAlt')}
              fill
              priority
              sizes="(min-width: 1024px) 26vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />

            <span className="absolute left-[6%] top-[5%] rounded-md bg-[#fe2c55] px-2 py-0.5 font-bold text-white" style={{ fontSize: '4.2cqh' }}>
              LIVE
            </span>

            {/* Side actions */}
            <div className="absolute right-[5%] bottom-[30%] flex flex-col items-center gap-[3cqh] text-white drop-shadow" aria-hidden="true">
              <svg style={{ width: '9cqh', height: '9cqh' }} viewBox="0 0 24 24" fill="#fe2c55">
                <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 4.5 6.6 4.5c2.1 0 3.6 1.2 5.4 3.2 1.8-2 3.3-3.2 5.4-3.2 3.7 0 5.7 3.9 4.2 7.3C19.5 16.4 12 21 12 21z" />
              </svg>
              <svg style={{ width: '8cqh', height: '8cqh' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.4 1.2 4.6 3.1 6.1L4.5 21l4-2.1c1.1.3 2.3.5 3.5.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3z" />
              </svg>
              <svg style={{ width: '8cqh', height: '8cqh' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 4v4.1C7.6 8.9 4 13.1 3 19c2.4-3.3 5.8-4.9 11-4.9V18l7-7-7-7z" />
              </svg>
            </div>

            {/* Rolling live comments */}
            <div className="absolute bottom-[19%] left-[5%] right-[22%] h-[14cqh]" aria-hidden="true">
              {comments.map((comment, i) => (
                <span
                  key={comment}
                  className="tt-comment absolute bottom-0 left-0 max-w-full truncate rounded-full bg-black/45 px-2.5 py-1 text-white backdrop-blur-sm"
                  style={{ fontSize: '3.6cqh', animationDelay: `${i * 2.5}s`, animationDuration: `${comments.length * 2.5}s` }}
                >
                  {comment}
                </span>
              ))}
            </div>

            {/* Product chip */}
            <div className="absolute bottom-[5%] left-[5%] right-[5%] flex items-center gap-[2cqh] rounded-xl bg-white/95 p-[1.6cqh] shadow-lg">
              <span className="flex shrink-0 items-center justify-center rounded-lg bg-red-600 text-white" style={{ width: '8cqh', height: '8cqh' }}>
                <BagIcon className="w-[60%] h-[60%]" />
              </span>
              <span className="min-w-0 flex-1 truncate font-bold text-gray-900" style={{ fontSize: '3.8cqh' }}>
                TikTok Shop
              </span>
              <span className="tt-shine shrink-0 rounded-full bg-red-600 px-[2.4cqh] py-[0.8cqh] font-bold text-white" style={{ fontSize: '3.4cqh' }}>
                {t('buyNow')}
              </span>
            </div>
          </div>

          {/* TikTok live hearts */}
          <div className="pointer-events-none absolute -right-[4%] bottom-[22%] h-[70%] w-[18%]" aria-hidden="true">
            {HEART_COLORS.map((color, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className="tt-heart absolute bottom-0 drop-shadow"
                style={{ left: `${(i * 37) % 100}%`, animationDelay: `${i * 0.75}s`, color, width: '7cqh', height: '7cqh' }}
                fill="currentColor"
              >
                <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.9 4.5 6.6 4.5c2.1 0 3.6 1.2 5.4 3.2 1.8-2 3.3-3.2 5.4-3.2 3.7 0 5.7 3.9 4.2 7.3C19.5 16.4 12 21 12 21z" />
              </svg>
            ))}
          </div>

          {/* "TikTok Shop" badge */}
          <div className="tt-float-soft-slow absolute -left-[42%] top-[22%] flex items-center gap-[1.6cqh] rounded-2xl bg-gradient-to-b from-white to-gray-100 px-[2.6cqh] py-[1.8cqh] shadow-[0_14px_30px_rgba(80,0,0,0.35)] ring-1 ring-white">
            <span className="flex items-center justify-center rounded-lg bg-red-600 text-white" style={{ width: '7.5cqh', height: '7.5cqh' }}>
              <BagIcon className="w-[62%] h-[62%]" />
            </span>
            <span className="whitespace-nowrap font-extrabold italic text-red-600" style={{ fontSize: '5cqh' }}>
              TikTok Shop
            </span>
          </div>

          {/* Round shop button */}
          <div className="absolute -left-[30%] bottom-[16%]" style={{ width: '17cqh', height: '17cqh' }} aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-white/40 animate-pulse-soft" />
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white shadow-[0_10px_24px_rgba(80,0,0,0.4)] ring-4 ring-white/80">
              <BagIcon className="w-[48%] h-[48%]" />
            </span>
          </div>

          {/* 3D TikTok tile */}
          <div className="absolute -right-[46%] top-[2%]" style={{ width: '26cqh', height: '26cqh' }} aria-hidden="true">
            <TikTokTile className="tt-float-3d h-full w-full" />
          </div>

          {/* Handwritten tagline */}
          <p
            className={`${scriptFont.className} pointer-events-none absolute -right-[64%] bottom-[8%] w-[62%] -rotate-[10deg] text-center leading-[1.05] text-white drop-shadow-[0_3px_6px_rgba(80,0,0,0.5)]`}
            style={{ fontSize: '8.4cqh' }}
          >
            {t('tagline')}
          </p>
        </div>
      </div>
    </div>
  );
}
