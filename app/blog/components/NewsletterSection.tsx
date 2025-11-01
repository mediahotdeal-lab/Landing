'use client';

import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations('blogPage.newsletter');

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-[1400px]">
        <div className="max-w-4xl mx-auto bg-white border-2 border-red-600 rounded-xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              {t('heading1')} <span className="text-red-600">{t('heading2')}</span>
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('placeholder')}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-red-600 transition-colors text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                {t('button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
