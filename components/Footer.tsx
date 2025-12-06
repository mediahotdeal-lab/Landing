'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              HotDeal <span className="text-red-600">Media</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('description')}
            </p>
            <div className="flex items-center space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61574539719393"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-xl hover:bg-red-600 transition-colors"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Google Partner Badge */}
              <a
                href="https://partnersdirectory.withgoogle.com/partners/3924929653"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/google-partner.png"
                  alt="Google Partner"
                  width={52}
                  height={52}
                  className="w-[52px] h-[52px] object-contain"
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('servicesTitle')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('services.facebookAds')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('services.googleAds')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('services.seo')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('services.content')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('services.email')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('quickLinksTitle')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('quickLinks.services')}
                </Link>
              </li>
              <li>
                <Link href="#stats" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('quickLinks.achievements')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('quickLinks.contact')}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  {t('quickLinks.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('contactTitle')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="font-semibold text-white">{t('contact.companyName')}</li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{t('contact.taxCode')}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('contact.address')}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{t('contact.phone')}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>{t('contact.mobile')}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span>{t('contact.zalo')}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('contact.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} HotDeal Media. {tCommon('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
