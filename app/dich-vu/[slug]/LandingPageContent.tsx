'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ProcessAccordion from '@/components/ProcessAccordion';

export default function LandingPageContent() {
  const t = useTranslations('serviceDetailPage.landingPage');
  const tCommon = useTranslations('serviceDetailPage.common');
  const tSections = useTranslations('serviceDetailPage.sections');
  const tHeroSteps = useTranslations('serviceDetailPage.heroSteps');

  // Parse translations
  const hero = {
    heading: t('hero.heading'),
  };

  const heroDescription = {
    context: t('heroDescription.context'),
    challenge: t('heroDescription.challenge'),
    solution: t('heroDescription.solution'),
  };

  const aboutService = {
    title: t('aboutService.title'),
    description: t('aboutService.description'),
    benefits: t.raw('aboutService.benefits') as string[],
  };

  const whyChooseUs = {
    title: t('whyChooseUs.title'),
    description: t('whyChooseUs.description'),
    points: t.raw('whyChooseUs.points') as Array<{ title: string; description: string }>,
  };

  const features = {
    title: t('features.title'),
    intro: t('features.intro'),
    items: t.raw('features.items') as Array<{ name: string; description: string }>,
  };

  const process = {
    title: t('process.title'),
    steps: t.raw('process.steps') as Array<{ title: string; description: string }>,
  };

  const packages = {
    title: t('packages.title'),
    plans: t.raw('packages.plans') as Array<{
      name: string;
      price: string;
      features: string[];
    }>,
  };

  const benefits = t.raw('benefits') as string[];

  const finalCTA = {
    title: t('finalCTA.title'),
    description: t('finalCTA.description'),
    bullets: t.raw('finalCTA.bullets') as string[],
    footer: t('finalCTA.footer'),
  };

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
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">📄</div>
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {t('shortName')}
              </span>
            </div>
            <h1 className="mb-8 sm:mb-10">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-relaxed">
                {hero.heading}
              </div>
            </h1>

            {/* Hero Description with Visual Separation */}
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
                            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity"></div>

                            <div className="relative text-center space-y-4">
                              <div className="space-y-3">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                  </svg>
                                </div>
                                <div className="inline-block">
                                  <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1.5 rounded-full uppercase tracking-wide">
                                    {tHeroSteps('context.badge')}
                                  </span>
                                </div>
                              </div>
                              <h3 className="text-lg font-bold text-gray-900">
                                {tHeroSteps('context.title')}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {heroDescription.context}
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
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="relative bg-white border-3 border-pink-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-pink-400">
                            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity"></div>

                            <div className="relative text-center space-y-4">
                              <div className="space-y-3">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <div className="inline-block">
                                  <span className="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1.5 rounded-full uppercase tracking-wide">
                                    {tHeroSteps('challenge.badge')}
                                  </span>
                                </div>
                              </div>
                              <h3 className="text-lg font-bold text-gray-900">
                                {tHeroSteps('challenge.title')}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {heroDescription.challenge}
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
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="relative bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            <div className="relative text-center space-y-4">
                              <div className="space-y-3">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/40 group-hover:scale-110 transition-transform duration-300">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                  </svg>
                                </div>
                                <div className="inline-block">
                                  <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 uppercase tracking-wide">
                                    {tHeroSteps('solution.badge')}
                                  </span>
                                </div>
                              </div>
                              <h3 className="text-lg font-bold text-white">
                                {tHeroSteps('solution.title')}
                              </h3>
                              <p className="text-sm text-white/95 leading-relaxed font-medium">
                                {heroDescription.solution}
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
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>{tSections('aboutService.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                {aboutService.title}
              </h2>

              <div className="max-w-4xl mx-auto mb-8">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 group-hover:border-red-300 shadow-md group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-left flex-1">
                        {aboutService.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {aboutService.benefits.map((benefit, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-2 border-gray-200 rounded-2xl hover:border-red-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                      <div className="flex items-center gap-6 p-6 sm:p-8">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-base sm:text-lg leading-relaxed text-gray-900 group-hover:text-gray-700 transition-colors text-left">
                            {benefit}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>

        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>{tSections('whyChooseUs.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                {whyChooseUs.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {whyChooseUs.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {whyChooseUs.points.map((point, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative bg-white border-2 border-gray-200 group-hover:border-red-300 rounded-3xl p-6 sm:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="relative mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-white font-black text-xl">{index + 1}</span>
                      </div>
                      <div className="absolute inset-0 w-14 h-14 rounded-2xl border-2 border-red-600/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors leading-relaxed">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors">
                      {point.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900 leading-relaxed">
            {features.title}
          </h2>
          {features.intro && (
            <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg">
              {features.intro}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.items.map((item, index) => {
              const icons = [
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              ];

              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                  <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-red-400 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="mb-4 sm:mb-6 relative">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 group-hover:from-red-100 group-hover:to-pink-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <div className="text-red-600 group-hover:text-red-700 transition-colors">
                          {icons[index % icons.length]}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors">
                      {item.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessAccordion title={process.title} steps={process.steps} />

      {/* Packages Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 leading-relaxed">
            {packages.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {packages.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl sm:rounded-2xl border-2 p-6 sm:p-8 transition-all hover:shadow-2xl ${
                  index === 1
                    ? 'border-red-600 md:scale-105 shadow-xl relative'
                    : 'border-gray-200 hover:border-red-600'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      {tCommon('popularPackage')}
                    </div>
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">{plan.name}</h3>
                <div className="mb-6 sm:mb-8">
                  <p className="text-2xl sm:text-3xl font-bold text-red-600">{plan.price}</p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/lien-he"
                  className={`block w-full text-center py-3 sm:py-4 rounded-xl font-semibold transition-all text-sm sm:text-base hover:scale-105 ${
                    index === 1
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tCommon('contactNow')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>{tSections('benefits.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-relaxed">
              {tSections('benefits.heading')}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {tSections('benefits.description')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl hover:border-white/40 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-6 p-6 sm:p-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base sm:text-lg leading-relaxed text-white group-hover:text-gray-100 transition-colors">
                        {benefit}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-relaxed">
              {finalCTA.title}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-red-50">
              {finalCTA.description}
            </p>

            {finalCTA.bullets && finalCTA.bullets.length > 0 && (
              <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
                <ul className="space-y-4 text-left">
                  {finalCTA.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3 text-white">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-base sm:text-lg leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all hover:shadow-2xl hover:scale-105 text-lg"
            >
              <span>{tSections('cta.primaryButton')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-8 text-lg sm:text-xl font-semibold text-white/95 italic">
              {finalCTA.footer}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <div className="bg-white border-2 border-red-600 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-relaxed">
                {tSections('cta.heading').replace('{serviceName}', t('shortName'))}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {tSections('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105"
                >
                  <span>{tSections('cta.primaryButton')}</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/dich-vu"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-gray-900 text-gray-900 font-semibold rounded-xl transition-all hover:scale-105"
                >
                  {tSections('cta.secondaryButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
