'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AboutPage() {
  const t = useTranslations('aboutPage');

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
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                {t('story.heading1')} <span className="text-red-600">{t('story.heading2')}</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('story.paragraph1')}</p>
                <p>{t('story.paragraph2')}</p>
                <p>{t('story.paragraph3')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-600">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
                    <div className="text-gray-600 font-medium">{t('story.stats.experience')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">300+</div>
                    <div className="text-gray-600 font-medium">{t('story.stats.clients')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                    <div className="text-gray-600 font-medium">{t('story.stats.projects')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">150%</div>
                    <div className="text-gray-600 font-medium">{t('story.stats.roi')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('mission.heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 transition-all group">
              <div className="w-16 h-16 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('mission.missionTitle')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('mission.missionDesc')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 transition-all group">
              <div className="w-16 h-16 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('mission.visionTitle')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('mission.visionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('coreValues.heading')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('coreValues.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValuesData.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {t(`coreValues.values.${value.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`coreValues.values.${value.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseUs.heading1')} <span className="text-red-600">{t('whyChooseUs.heading2')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {t(`whyChooseUs.reasons.${item}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`whyChooseUs.reasons.${item}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('team.heading')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('team.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembersData.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-600 hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="w-24 h-24 bg-red-50 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-red-600 transition-all">
                  <svg className="w-12 h-12 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {t(`team.members.${member}.name`)}
                </h3>
                <div className="text-sm text-red-600 font-semibold mb-3">
                  {t(`team.members.${member}.position`)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`team.members.${member}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="bg-white border-2 border-red-600 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {t('cta.heading1')} <span className="text-red-600">{t('cta.heading2')}</span> {t('cta.heading3')}
              </h2>
              <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all hover:shadow-lg hover:scale-105"
                >
                  <span>{t('cta.primaryButton')}</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/dich-vu"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-gray-900 transition-all hover:scale-105"
                >
                  {t('cta.secondaryButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Core Values Data with keys
const coreValuesData = [
  {
    key: 'efficiency',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    key: 'credibility',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    key: 'creativity',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    key: 'dedication',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

// Why Choose Us keys
const whyChooseUsData = ['experience', 'methodology', 'technology', 'roi', 'support', 'cost'];

// Team Members keys
const teamMembersData = ['ceo', 'director', 'seoLead'];
