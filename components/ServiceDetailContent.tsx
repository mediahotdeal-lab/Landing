'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface HeroStepsLabelsProps {
  stepType: 'context' | 'challenge' | 'solution';
}

export function HeroStepLabel({ stepType }: HeroStepsLabelsProps) {
  const t = useTranslations('serviceDetailPage.heroSteps');

  if (stepType === 'context') {
    return (
      <>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">{t('context.icon')}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900">{t('context.title')}</h3>
      </>
    );
  }

  if (stepType === 'challenge') {
    return (
      <>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">{t('challenge.icon')}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900">{t('challenge.title')}</h3>
      </>
    );
  }

  if (stepType === 'solution') {
    return (
      <>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">{t('solution.icon')}</span>
        </div>
        <h3 className="font-bold text-lg text-white">{t('solution.title')}</h3>
      </>
    );
  }

  return null;
}

export function AboutServiceBadge() {
  const t = useTranslations('serviceDetailPage.sections');
  return (
    <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-flex items-center gap-2">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
      </svg>
      <span>{t('aboutService.badge')}</span>
    </div>
  );
}

export function WhyChooseUsBadge() {
  const t = useTranslations('serviceDetailPage.sections');
  return (
    <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-flex items-center gap-2">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
      <span>{t('whyChooseUs.badge')}</span>
    </div>
  );
}

export function AccountTypesBadge() {
  const t = useTranslations('serviceDetailPage.sections');
  return (
    <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-flex items-center gap-2">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
      </svg>
      <span>{t('accountTypes.badge')}</span>
    </div>
  );
}

export function AccountTypesNote() {
  const t = useTranslations('serviceDetailPage.sections');
  return (
    <div className="mt-8 text-center">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 rounded-2xl border border-gray-200">
        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <p className="text-sm text-gray-700 font-medium">
          {t('accountTypes.note')}
        </p>
      </div>
    </div>
  );
}

export function RentalModelSection() {
  const t = useTranslations('serviceDetailPage.sections.rentalModel');
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
        </svg>
        <span>{t('badge')}</span>
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          {t('heading')}
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600">
          {t('subheading')}
        </p>
      </div>
    </div>
  );
}

export function BenefitsSectionHeader() {
  const t = useTranslations('serviceDetailPage.sections.benefits');
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span>{t('badge')}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-relaxed text-white">
        {t('heading')}
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {t('description')}
      </p>
    </div>
  );
}

interface PackageIntroProps {
  serviceSlug: string;
}

export function PackageIntroSection({ serviceSlug }: PackageIntroProps) {
  const t = useTranslations('serviceDetailPage.sections.packages');

  if (serviceSlug !== 'thue-tai-khoan-google-ads-vnd') return null;

  return (
    <div className="max-w-5xl mx-auto mb-12">
      <div className="text-center mb-8">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {t('rentalIntro')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: '🎯', key: 'allIndustries' },
          { icon: '💎', key: 'transparent' },
          { icon: '🛡️', key: 'noIllegal' },
          { icon: '⚡', key: 'supportSuspension' },
          { icon: '📄', key: 'invoice' },
        ].map((item, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div className="relative flex items-center gap-3 bg-white p-4 rounded-xl border-2 border-gray-200 group-hover:border-red-300 shadow-sm group-hover:shadow-md transition-all duration-300 h-full">
              <div className="flex-shrink-0 text-2xl">
                {item.icon}
              </div>
              <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium transition-colors">
                {t(`features.${item.key}`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ServiceCTAProps {
  serviceName: string;
}

export function ServiceCTA({ serviceName }: ServiceCTAProps) {
  const t = useTranslations('serviceDetailPage');
  const tCommon = useTranslations('serviceDetailPage.common');

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
        <div className="bg-white border-2 border-red-600 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-relaxed">
              {t('cta.heading', { serviceName })}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105"
              >
                <span>{t('cta.primaryButton')}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/dich-vu"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-gray-900 text-gray-900 font-semibold rounded-xl transition-all hover:scale-105"
              >
                {t('cta.secondaryButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PopularBadge() {
  const t = useTranslations('serviceDetailPage.common');
  return (
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <div className="bg-red-600 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
        {t('popularPackage')}
      </div>
    </div>
  );
}

export function ContactNowButton() {
  const t = useTranslations('serviceDetailPage.common');
  return <span>{t('contactNow')}</span>;
}

export function RentalHeroCards() {
  const t = useTranslations('serviceDetailPage.rentalHeroCards');

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Card 1: Context */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-400 transition-all duration-300 h-full hover:shadow-xl">
            <div className="flex flex-col items-center text-center gap-4 h-full">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="inline-block">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full">{t('context.badge')}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {t('context.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Challenge */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-6 hover:border-orange-400 transition-all duration-300 h-full hover:shadow-xl">
            <div className="flex flex-col items-center text-center gap-4 h-full">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="inline-block">
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1.5 rounded-full">{t('challenge.badge')}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {t('challenge.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Solution */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 h-full">
            <div className="flex flex-col items-center text-center gap-4 h-full">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="inline-block">
                <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">{t('solution.badge')}</span>
              </div>
              <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                {t('solution.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
