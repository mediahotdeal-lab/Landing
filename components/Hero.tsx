'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  return (
    <section className="relative bg-white pt-20 pb-16 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-[1400px]">
        <div className="mx-auto">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            {/* Small badge */}
            <div className="inline-block mb-6">
              <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                {t('badge')}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t('heading1')}
              <br />
              <span className="text-red-600">{t('heading2')}</span>
              <br />
              {t('heading3')}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>{t('primaryCta')}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-gray-900 transition-all hover:scale-105"
              >
                <span className="group-hover:translate-x-[-4px] transition-transform">{t('secondaryCta')}</span>
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-600 transition-all hover:shadow-lg hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{t('stats.projectsCompleted')}</div>
            </div>
            <div className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-600 transition-all hover:shadow-lg hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">300+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{t('stats.trustedClients')}</div>
            </div>
            <div className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-600 transition-all hover:shadow-lg hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{t('stats.satisfaction')}</div>
            </div>
            <div className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-600 transition-all hover:shadow-lg hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">150%</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{t('stats.avgROI')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
