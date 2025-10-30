/**
 * Example: Service Detail Page with i18n
 *
 * This is a simplified example showing how to implement i18n for the service detail page.
 * Replace the content in page.tsx with similar approach.
 */

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ServiceDetailPageExample() {
  const t = useTranslations('serviceDetailPage.googleAds');
  const tCommon = useTranslations('serviceDetailPage.common');
  const tCta = useTranslations('serviceDetailPage.cta');
  const tHeroSteps = useTranslations('serviceDetailPage.heroSteps');
  const tSections = useTranslations('serviceDetailPage.sections');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="w-full mx-auto text-center">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🎯</div>
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {t('shortName')}
              </span>
            </div>
            <h1 className="mb-8 sm:mb-10">
              {/* Hero Title */}
              <div className="space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-relaxed">
                  {t('hero.heading1')}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-relaxed">
                  {t('hero.heading2')}
                </div>
              </div>
            </h1>

            {/* Hero Description with Steps */}
            <div className="w-full">
              <div className="max-w-5xl mx-auto">
                <div className="relative">
                  {/* Connecting line for desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-pink-300 to-red-200 -translate-y-1/2 z-0"></div>

                  <div className="relative z-10 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {/* Step 1 - Context */}
                    <div className="group relative lg:mt-0">
                      <div className="relative pt-8 lg:pt-16">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-black text-xl">1</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="relative bg-white border-3 border-red-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-red-400">
                            <div className="relative text-center space-y-3">
                              <h3 className="font-bold text-lg text-gray-900">{tHeroSteps('context.title')}</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {t('heroDescription.context')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 - Challenge */}
                    <div className="group relative lg:mt-12">
                      <div className="relative pt-8 lg:pt-16">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-black text-xl">2</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="relative bg-white border-3 border-pink-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-pink-400">
                            <div className="relative text-center space-y-3">
                              <h3 className="font-bold text-lg text-gray-900">{tHeroSteps('challenge.title')}</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {t('heroDescription.challenge')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 - Solution */}
                    <div className="group relative lg:mt-0">
                      <div className="relative pt-8 lg:pt-16">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-black text-xl">3</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="relative bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                            <div className="relative text-center space-y-3">
                              <h3 className="font-bold text-lg text-white">{tHeroSteps('solution.title')}</h3>
                              <p className="text-sm text-white/95 leading-relaxed font-medium">
                                {t('heroDescription.solution')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span>{tSections('aboutService.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                {t('aboutService.title')}
              </h2>

              {/* Description Card */}
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {t('aboutService.description')}
                </p>
              </div>

              {/* Platforms Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                {['searchAds', 'displayAds', 'videoAds', 'shoppingAds', 'appCampaigns', 'performanceMax'].map((platform) => (
                  <div key={platform} className="group relative">
                    <div className="relative flex items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 group-hover:border-red-300 shadow-sm group-hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-red-600 text-sm sm:text-base mb-1 transition-colors">
                          {t(`aboutService.platforms.${platform}.name`)}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {t(`aboutService.platforms.${platform}.desc`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-8">
              <ul className="space-y-3 max-w-4xl mx-auto">
                {t.raw('aboutService.benefits').map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Text */}
            <div className="mt-10 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium text-center">
                {t('aboutService.additionalText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <div className="bg-white border-2 border-red-600 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-relaxed">
                {tCta('heading', { serviceName: t('shortName') })}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {tCta('description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105"
                >
                  <span>{tCta('primaryButton')}</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/dich-vu"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-gray-900 text-gray-900 font-semibold rounded-xl transition-all hover:scale-105"
                >
                  {tCta('secondaryButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
