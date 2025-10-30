'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from '@/components/LocaleProvider';
import { services } from './services-data';

export default function ServicesPage() {
  const t = useTranslations('servicesPage');
  const { locale } = useLocale();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-relaxed">
              {t('hero.heading')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => {
              const serviceName = t(`serviceDetails.${service.slug}.name`) || service.name;
              const serviceDesc = t(`serviceDetails.${service.slug}.description`) || service.description;

              return (
                <Link
                  key={service.slug}
                  href={`/dich-vu/${service.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors leading-relaxed">
                      {serviceName}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {serviceDesc}
                    </p>
                    <div className="flex items-center text-red-600 font-semibold">
                      {t('viewDetails')}
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 leading-relaxed">
            {t('cta.heading')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
