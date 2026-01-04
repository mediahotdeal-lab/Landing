'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function TermsServicePage() {
  const t = useTranslations('termsPage');

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

            {/* Section 2: Definitions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.definitions.title')}
              </h2>
              <ul className="space-y-2">
                {(t.raw('sections.definitions.items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Terms of Use */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.usage.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.usage.intro')}
              </p>
              <ul className="space-y-2">
                {(t.raw('sections.usage.items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Google Services - Important */}
            <div className="bg-white border-2 border-red-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {t('sections.googleServices.title')}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.googleServices.intro')}
              </p>
              <ul className="space-y-2">
                {(t.raw('sections.googleServices.items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <Link href="/policy" className="text-red-600 hover:text-red-700 underline font-medium">
                    {t('hero.badge') === 'Điều Khoản Dịch Vụ' ? 'Xem Chính sách bảo mật' : 'View Privacy Policy'}
                  </Link>
                  {t('hero.badge') === 'Điều Khoản Dịch Vụ'
                    ? ' để biết thêm chi tiết về cách chúng tôi sử dụng dữ liệu của bạn.'
                    : ' for more details on how we use your data.'}
                </p>
              </div>
            </div>

            {/* Section 5: Intellectual Property */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.intellectualProperty.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.intellectualProperty.content')}
              </p>
            </div>

            {/* Section 6: Limitation of Liability */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.liability.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('sections.liability.intro')}
              </p>
              <ul className="space-y-2">
                {(t.raw('sections.liability.items') as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7: Termination */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.termination.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.termination.content')}
              </p>
            </div>

            {/* Section 8: Changes to Terms */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.changes.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.changes.content')}
              </p>
            </div>

            {/* Section 9: Applicable Law */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('sections.law.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('sections.law.content')}
              </p>
            </div>

            {/* Section 10: Contact */}
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
