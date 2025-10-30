'use client';

import { useLocale } from './LocaleProvider';
import { useState } from 'react';

const languages = [
  {
    code: 'vi' as const,
    name: 'Tiếng Việt',
    flag: '🇻🇳',
  },
  {
    code: 'en' as const,
    name: 'English',
    flag: '🇬🇧',
  },
];

interface LanguageSwitcherProps {
  fullWidth?: boolean;
}

export default function LanguageSwitcher({ fullWidth = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLocale();

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const switchLanguage = (newLocale: 'vi' | 'en') => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center ${fullWidth ? 'justify-center w-full' : ''} gap-2 px-3 py-2.5 rounded-xl border border-gray-300 hover:border-red-600 transition-all hover:shadow-sm bg-white h-[42px]`}
        aria-label="Change language"
      >
        <span className="text-lg leading-none">{currentLanguage.flag}</span>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className={`absolute ${fullWidth ? 'left-0 right-0' : 'right-0'} top-full mt-2 ${fullWidth ? 'w-full' : 'w-48'} bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors ${
                  locale === lang.code ? 'bg-red-50' : ''
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span
                  className={`font-medium ${
                    locale === lang.code ? 'text-red-600' : 'text-gray-700'
                  }`}
                >
                  {lang.name}
                </span>
                {locale === lang.code && (
                  <svg
                    className="w-5 h-5 text-red-600 ml-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
