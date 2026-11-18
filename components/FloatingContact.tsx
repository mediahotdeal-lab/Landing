'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import RegisterFormModal, { openRegisterForm } from './RegisterFormModal';

export default function FloatingContact() {
  const t = useTranslations('registerModal');

  return (
    <>
      <div className="fixed right-4 bottom-8 z-50 flex flex-col items-center gap-3">
        {/* Hotline Button */}
        <a
          href="tel:0336033039"
          className="relative flex items-center justify-center w-[50px] h-[50px] bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 animate-float-soft"
          aria-label="Gọi hotline"
        >
          <svg
            className="relative z-10 w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {/* Soft pulse ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-pulse-soft"></span>
        </a>

        {/* Messenger Button */}
        <a
          href="https://m.me/691094474086899"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-[50px] h-[50px] bg-[#0084ff] rounded-full shadow-lg hover:bg-[#0074e0] hover:scale-105 transition-all duration-300 animate-float-soft"
          aria-label="Chat Messenger"
        >
          <svg
            className="relative z-10 w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.14 2 11.24c0 2.9 1.45 5.48 3.72 7.17V22l3.4-1.86c.91.25 1.88.38 2.88.38 5.52 0 10-4.14 10-9.24S17.52 2 12 2Zm1 12.44-2.55-2.72-4.98 2.72 5.47-5.8 2.61 2.72 4.92-2.72L13 14.44Z" />
          </svg>
          {/* Soft pulse ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40 animate-pulse-soft"></span>
        </a>

        {/* Zalo Button - Bottom Right */}
        <a
          href="http://zalo.me/0336033039"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-[50px] h-[50px] bg-transparent hover:scale-105 transition-all duration-300 animate-float-soft"
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

        {/* Register Form Button - opens the registration popup */}
        <button
          type="button"
          onClick={() => openRegisterForm()}
          className="group relative flex items-center justify-center w-[50px] h-[50px] bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 animate-float-soft"
          aria-label={t('registerForm')}
        >
          <svg
            className="relative z-10 w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          {/* Soft pulse ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 animate-pulse-soft"></span>
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            {t('registerForm')}
          </span>
        </button>
      </div>

      {/* Rendered outside the fixed stack so it is not trapped in its stacking context */}
      <RegisterFormModal />
    </>
  );
}
