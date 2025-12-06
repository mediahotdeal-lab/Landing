'use client';

import Image from 'next/image';

export default function FloatingContact() {
  return (
    <>
      {/* Hotline Button - Bottom Left */}
      <a
        href="tel:0375307068"
        className="fixed left-4 bottom-8 z-50 flex items-center justify-center w-[50px] h-[50px] bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 animate-float-soft"
        aria-label="Gọi hotline"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        {/* Soft pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-pulse-soft"></span>
      </a>

      {/* Zalo Button - Bottom Right */}
      <a
        href="http://zalo.me/0375307068"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-8 z-50 flex items-center justify-center w-[50px] h-[50px] bg-transparent hover:scale-105 transition-all duration-300 animate-float-soft"
        aria-label="Chat Zalo"
      >
        <Image
          src="/images/icon-zalo.png"
          alt="Zalo"
          width={50}
          height={50}
          className="object-contain"
        />
        {/* Soft pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40 animate-pulse-soft"></span>
      </a>
    </>
  );
}
