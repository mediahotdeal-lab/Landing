'use client';

import { useTranslations } from 'next-intl';
import { Service } from '@/app/dich-vu/services-data';
import { HeroStepLabel } from './ServiceDetailContent';

interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  // Get translation key based on service slug
  const getServiceKey = (slug: string): string => {
    const keyMap: Record<string, string> = {
      'quang-cao-google-ads': 'googleAds',
      'thue-tai-khoan-google-ads-vnd': 'rental',
      'thiet-ke-website': 'websiteDesign',
      'thiet-ke-landing-page': 'landingPage',
    };
    return keyMap[slug] || 'googleAds';
  };

  const serviceKey = getServiceKey(service.slug);
  const t = useTranslations(`serviceDetailPage.${serviceKey}`);
  const tSteps = useTranslations('serviceDetailPage.heroSteps');

  return (
    <section className="relative bg-white pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
        <div className="w-full mx-auto text-center">
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{service.icon}</div>
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              {t('shortName')}
            </span>
          </div>
          <h1 className="mb-8 sm:mb-10">
            {/* For Google Ads service - split title */}
            {service.slug === 'quang-cao-google-ads' ? (
              <div className="space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-relaxed">
                  {t('hero.heading1')}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-relaxed">
                  {t('hero.heading2')}
                </div>
              </div>
            ) : (
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-relaxed">
                {t('hero.heading')}
              </div>
            )}
          </h1>

          {/* Hero Description with 3 Steps */}
          {service.heroDescriptionParts && (
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
                              <HeroStepLabel stepType="context" />
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
                              <HeroStepLabel stepType="challenge" />
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
                              <HeroStepLabel stepType="solution" />
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
          )}
        </div>
      </div>
    </section>
  );
}
