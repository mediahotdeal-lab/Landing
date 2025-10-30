'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      key: 'strategy'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      key: 'roi'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      key: 'team'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      key: 'transparency'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      key: 'technology'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      key: 'support'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            {t('heading')} <span className="text-red-600">{t('headingHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t('description')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-xl transition-all group hover:-translate-y-1 overflow-hidden"
            >
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>

              {/* Decorative shapes */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-500/5 rounded-[20px] rotate-12 group-hover:bg-red-500/10 group-hover:rotate-[20deg] transition-all"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-500/5 rounded-tl-[30px] rounded-br-[30px] -rotate-12 group-hover:bg-red-500/10 group-hover:-rotate-[20deg] transition-all"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all group-hover:scale-110 shadow-sm group-hover:shadow-md">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {t(`reasons.${reason.key}.title`)}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                {t(`reasons.${reason.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 rounded-xl p-8 sm:p-12 lg:p-16 text-center text-white max-w-5xl mx-auto">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('cta.heading')}
          </h3>
          <p className="text-lg sm:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>{t('cta.button')}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
