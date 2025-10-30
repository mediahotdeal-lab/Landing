'use client';

import { Service } from '@/app/dich-vu/services-data';
import { useServiceTranslations } from '@/hooks/useServiceTranslations';
import ServiceDetailHero from './ServiceDetailHero';
import ProcessAccordion from './ProcessAccordion';
import PricingTable from './PricingTable';
import {
  AboutServiceBadge,
  WhyChooseUsBadge,
  AccountTypesBadge,
  AccountTypesNote,
  RentalModelSection,
  BenefitsSectionHeader,
  PackageIntroSection,
  ServiceCTA,
  PopularBadge,
  ContactNowButton
} from './ServiceDetailContent';
import { Platform } from '@/app/dich-vu/services-data';

interface ServiceDetailClientWrapperProps {
  service: Service;
}

export default function ServiceDetailClientWrapper({ service: originalService }: ServiceDetailClientWrapperProps) {
  // Get translated data
  const translatedData = useServiceTranslations(originalService.slug);

  // Merge original service with translated data (translated data takes priority)
  const service: Service = {
    ...originalService,
    ...translatedData,
    // These fields don't need translation as they're static
    slug: originalService.slug,
    icon: originalService.icon,
  } as Service;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with i18n */}
      <ServiceDetailHero service={service} />

      {/* About Service Section */}
      {service.aboutService && (
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl"></div>
          </div>

          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <AboutServiceBadge />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                  {service.aboutService.title}
                </h2>

                {/* Description Card */}
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
                          {service.aboutService.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platforms Grid */}
                {service.aboutService.platforms && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    {service.aboutService.platforms.map((platform: Platform, index: number) => (
                      <div key={index} className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                        <div className="relative flex items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 group-hover:border-red-300 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                              {platform.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 group-hover:text-red-600 text-sm sm:text-base mb-1 transition-colors">
                              {platform.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                              {platform.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Benefits List */}
              {service.aboutService.benefits && service.aboutService.benefits.length > 0 && (
                <div className="mt-8">
                  <ul className="space-y-3 max-w-4xl mx-auto">
                    {service.aboutService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Text */}
              {service.aboutService.additionalText && (
                <div className="mt-10 max-w-4xl mx-auto">
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium text-center">
                    {service.aboutService.additionalText}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {service.whyChooseUs && (
        <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <WhyChooseUsBadge />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                  {service.whyChooseUs.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  {service.whyChooseUs.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whyChooseUs.points.map((point, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                    <div className="relative bg-white p-6 rounded-2xl border-2 border-gray-200 group-hover:border-red-300 shadow-sm group-hover:shadow-xl transition-all duration-300 h-full">
                      <h3 className="font-bold text-lg text-gray-900 mb-3">{point.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
              {service.features.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.items.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <div className="relative bg-white p-6 rounded-2xl border border-gray-200 group-hover:border-red-300 shadow-sm group-hover:shadow-lg transition-all duration-300 h-full">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessAccordion title={service.process.title} steps={service.process.steps} />
      {service.process.note && (
        <section className="py-8 bg-gradient-to-br from-red-600 to-red-700">
          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
            <p className="text-center text-white/90 italic max-w-4xl mx-auto">{service.process.note}</p>
          </div>
        </section>
      )}

      {/* Packages Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
              {service.packages.title}
            </h2>
            <PackageIntroSection serviceSlug={service.slug} />
            <PricingTable plans={service.packages.plans} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="relative py-12 sm:py-16 md:py-20 bg-[#1a202c] overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl"></div>
          </div>
          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <BenefitsSectionHeader />
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                    <span className="text-white text-base sm:text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section - For specific services like Landing Page */}
      {service.finalCTA && (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-600 to-pink-600 text-white">
          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-relaxed">
                {service.finalCTA.title}
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-red-50">
                {service.finalCTA.description}
              </p>

              {service.finalCTA.bullets && service.finalCTA.bullets.length > 0 && (
                <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
                  <ul className="space-y-4 text-left">
                    {service.finalCTA.bullets.map((bullet, index) => (
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

              <ContactNowButton />
              <p className="mt-8 text-lg sm:text-xl font-semibold text-white/95 italic">
                {service.finalCTA.footer}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <ServiceCTA serviceName={service.shortName} />
    </div>
  );
}
