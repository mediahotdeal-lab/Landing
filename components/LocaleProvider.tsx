'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

type Locale = 'vi' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}

interface LocaleProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export default function LocaleProvider({ children, initialLocale = 'vi' }: LocaleProviderProps) {
  // Initialize locale from localStorage first, then fallback to initialLocale
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale;
      if (savedLocale && (savedLocale === 'vi' || savedLocale === 'en')) {
        return savedLocale;
      }
    }
    return initialLocale;
  });

  const [messages, setMessages] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load messages when locale changes
  useEffect(() => {
    async function loadMessages() {
      setIsLoading(true);
      try {
        const msgs = await import(`@/messages/${locale}.json`);
        setMessages(msgs.default);
      } catch (error) {
        console.error('Failed to load messages:', error);
      } finally {
        setIsLoading(false);
      }

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', locale);
      }
    }
    loadMessages();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  if (isLoading || !messages) {
    // Show a minimal loading state to prevent flash
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
