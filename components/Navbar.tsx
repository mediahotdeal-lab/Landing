'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { slug: 'quang-cao-google-ads', name: 'Quảng Cáo Google Ads' },
  { slug: 'thue-tai-khoan-google-ads-vnd', name: 'Thuê tài khoản Google Ads VNĐ' },
  { slug: 'thue-tai-khoan-invoice-usd', name: 'Thuê tài khoản Invoice USD' },
  { slug: 'design-website', name: 'Design Website' },
  { slug: 'thiet-ke-landing-page', name: 'Thiết kế landing page' },
];

export default function Navbar() {
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
              alt="Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
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
                DỊCH VỤ
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
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/dich-vu/${service.slug}`}
                        className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium text-sm transition-colors"
                      >
                        Dịch vụ ({service.name})
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        href="/dich-vu"
                        className="block px-6 py-3 text-red-600 hover:bg-red-50 font-semibold text-sm transition-colors"
                      >
                        Xem tất cả dịch vụ →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/ve-chung-toi" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              VỀ CHÚNG TÔI
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              BLOG
            </Link>
            <Link href="/lien-he" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">
              LIÊN HỆ
            </Link>

            <Link
              href="/lien-he"
              className="px-6 py-2.5 bg-red-600 text-white font-semibold hover:bg-red-700 transition-all rounded-xl text-sm hover:scale-105 hover:shadow-lg"
            >
              Tư vấn miễn phí
            </Link>
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
                  DỊCH VỤ
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
                        Dịch vụ ({service.name})
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
                      Xem tất cả →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/ve-chung-toi"
                className="block text-gray-700 hover:text-red-600 font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                VỀ CHÚNG TÔI
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-red-600 font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/lien-he"
                className="block text-gray-700 hover:text-red-600 font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LIÊN HỆ
              </Link>

              <Link
                href="/lien-he"
                className="block bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-all text-center font-semibold rounded-xl text-sm mt-4 hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tư vấn miễn phí
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
