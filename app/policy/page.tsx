'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PolicyPage() {
  const t = useTranslations('policyPage');

  return (
    <main className="min-h-screen bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto max-w-[1400px] text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              {t('hero.badge')}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">
            {t('hero.heading1')} <span className="text-red-600">{t('hero.heading2')}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.description')}
          </p>
          <p className="text-sm text-gray-500 mt-4">
            {t('hero.lastUpdated')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[900px]">
          <div className="space-y-8">
            {/* Section 1: Introduction */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.intro.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.intro.content')}
              </p>
            </div>

            {/* Section 2: Google API Services - IMPORTANT */}
            <div className="bg-white border-2 border-red-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {t('sections.googleApi.title')}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {t('sections.googleApi.intro')}
              </p>

              {/* Scopes */}
              <div className="space-y-4 mb-6">
                {/* Google Sheets */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-mono">
                      {t('sections.googleApi.scopes.sheets.scope')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('sections.googleApi.scopes.sheets.name')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('sections.googleApi.scopes.sheets.description')}
                  </p>
                </div>

                {/* Google Drive */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-mono">
                      {t('sections.googleApi.scopes.drive.scope')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('sections.googleApi.scopes.drive.name')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('sections.googleApi.scopes.drive.description')}
                  </p>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-mono">
                      {t('sections.googleApi.scopes.email.scope')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('sections.googleApi.scopes.email.name')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('sections.googleApi.scopes.email.description')}
                  </p>
                </div>
              </div>

              {/* Commitments */}
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {t('sections.googleApi.commitments.title')}
                </h3>
                <ul className="space-y-2">
                  {(t.raw('sections.googleApi.commitments.items') as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-500 text-sm mt-4 italic">
                {t('sections.googleApi.disclosure')}
              </p>
            </div>

            {/* Section 3: Data Collection */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.dataCollection.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.dataCollection.intro')}
              </p>
              <ul className="space-y-2">
                {(t.raw('sections.dataCollection.items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Data Usage */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.dataUsage.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.dataUsage.intro')}
              </p>
              <ul className="space-y-2">
                {(t.raw('sections.dataUsage.items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5: Data Security */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.dataSecurity.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.dataSecurity.content')}
              </p>
            </div>

            {/* Section 6: User Rights */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.userRights.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.userRights.intro')}
              </p>
              <ul className="space-y-2">
                {(t.raw('sections.userRights.items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7: Cookies */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.cookies.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.cookies.content')}
              </p>
            </div>

            {/* Section 8: Changes */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.changes.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.changes.content')}
              </p>
            </div>

            {/* Section 9: Contact */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.contact.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.contact.content')}
              </p>
              <div className="space-y-2 text-gray-600">
                <p>{t('sections.contact.email')}</p>
                <p>{t('sections.contact.address')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-[900px] text-center">
          <p className="text-gray-600 mb-6">
            {t('sections.contact.content')}
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all hover:shadow-lg hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>contact@hotdealmedia.vn</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
