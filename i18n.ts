import { getRequestConfig } from 'next-intl/server';

// Export locales constants
export const locales = ['vi', 'en'] as const;
export const defaultLocale = 'vi' as const;

export type Locale = (typeof locales)[number];

// Default export for next-intl plugin (server-side)
export default getRequestConfig(async () => {
  // Since this project uses LocaleProvider for client-side,
  // we default to 'vi' for server components
  const locale = defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
