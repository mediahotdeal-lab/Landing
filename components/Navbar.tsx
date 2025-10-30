'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

const services = [
  { slug: 'quang-cao-google-ads', nameKey: 'googleAds' },
  { slug: 'thue-tai-khoan-google-ads-vnd', nameKey: 'googleAdsRental' },
  { slug: 'thiet-ke-website', nameKey: 'websiteDesign' },
  { slug: 'thiet-ke-landing-page', nameKey: 'landingPageDesign' },
];

export default function Navbar() {
  const t = useTranslations('navbar');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      {/* Red accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo_2.png"
              alt="HotDeal Media - Digital Marketing Agency Logo"
              width={150}
              height={40}
              className="h-7 sm:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
                {t('services')}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-96 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 py-3 overflow-hidden">
                    {/* Subtle gradient at top */}
                    <div className="h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500"></div>

                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/dich-vu/${service.slug}`}
                          className="group block px-6 py-3.5 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 font-medium text-base transition-all duration-200 relative"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-red-600 transition-colors"></div>
                            <span>{t('servicePrefix')} ({t(`servicesList.${service.nameKey}`)})</span>
                          </div>
                          {/* Hover indicator */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 mt-2 pt-2 bg-gradient-to-r from-gray-50 to-white">
                      <Link
                        href="/dich-vu"
                        className="group flex items-center justify-between px-6 py-3.5 text-red-600 hover:bg-red-50 font-bold text-base transition-all duration-200"
                      >
                        <span>{t('viewAllServices')}</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/ve-chung-toi" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              {t('about')}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              {t('blog')}
            </Link>
            <Link href="/lien-he" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              {t('contact')}
            </Link>

            <Link
              href="/lien-he"
              className="px-6 py-2.5 bg-red-600 text-white font-semibold hover:bg-red-700 transition-all rounded-xl text-sm hover:scale-105 hover:shadow-lg"
            >
              {t('freeConsultation')}
            </Link>

            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              {/* Services Dropdown Mobile */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-red-600 font-medium py-2 text-sm"
                >
                  {t('services')}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/dich-vu/${service.slug}`}
                        className="block text-gray-600 hover:text-red-600 py-2 text-sm"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {t('servicePrefix')} ({t(`servicesList.${service.nameKey}`)})
                      </Link>
                    ))}
                    <Link
                      href="/dich-vu"
                      className="block text-red-600 hover:text-red-700 py-2 text-sm font-semibold"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      {t('viewAllServices')} →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/ve-chung-toi"
                className="block text-gray-700 hover:text-red-600 font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-red-600 font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <Link
                href="/lien-he"
                className="block text-gray-700 hover:text-red-600 font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>

              <Link
                href="/lien-he"
                className="block bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-all text-center font-semibold rounded-xl text-sm mt-4 hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('freeConsultation')}
              </Link>

              <div className="mt-4">
                <LanguageSwitcher fullWidth />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
