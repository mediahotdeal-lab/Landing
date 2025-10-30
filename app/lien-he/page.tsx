'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Contact Section */}
      <section className="relative py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-red-600 transition-all">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {t('form.heading')}
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl text-green-700 font-semibold flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('form.successMessage')}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('form.name')} <span className="text-red-600">{t('form.required')}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 transition-colors"
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        {t('form.email')} <span className="text-red-600">{t('form.required')}</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 transition-colors"
                        placeholder={t('form.emailPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        {t('form.phone')} <span className="text-red-600">{t('form.required')}</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 transition-colors"
                        placeholder={t('form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">{t('form.selectService')}</option>
                      <option value="quang-cao-google-ads">{t('form.services.googleAds')}</option>
                      <option value="thue-tai-khoan-google-ads-vnd">{t('form.services.googleAdsRental')}</option>
                      <option value="thiet-ke-website">{t('form.services.websiteDesign')}</option>
                      <option value="thiet-ke-landing-page">{t('form.services.landingPageDesign')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('form.message')} <span className="text-red-600">{t('form.required')}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-600 transition-colors resize-none"
                      placeholder={t('form.messagePlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{t('form.submitting')}</span>
                      </>
                    ) : (
                      <>
                        <span>{t('form.submit')}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Details */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-red-600 transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('info.heading')}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {t('info.address')}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {t('info.addressValue')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {t('info.hotline')}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {t('info.hotlineValue')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {t('info.email')}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {t('info.emailValue')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {t('info.messenger')}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {t('info.messengerValue')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-red-600 transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('hours.heading')}
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('hours.weekdays')}</span>
                    <span className="font-semibold text-gray-900">{t('hours.weekdaysHours')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('hours.saturday')}</span>
                    <span className="font-semibold text-gray-900">{t('hours.saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{t('hours.sunday')}</span>
                    <span className="font-semibold text-red-600">{t('hours.sundayHours')}</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-red-600 transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('social.heading')}
                </h3>

                <div className="flex gap-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-lg hover:bg-red-600 hover:text-white transition-all hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
            {/* Placeholder for Google Maps - Replace with actual embed */}
            <div className="relative h-[400px] bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500">{t('map.placeholder')}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {t('map.instruction')}
                </p>
              </div>

              {/* Uncomment and add your Google Maps embed URL */}
              {/* <iframe
                src="YOUR_GOOGLE_MAPS_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('faq.heading')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {['q1', 'q2', 'q3', 'q4', 'q5'].map((key) => (
              <details
                key={key}
                className="group bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 hover:border-red-600 transition-all"
              >
                <summary className="flex justify-between items-start sm:items-center gap-3 cursor-pointer list-none">
                  <span className="font-bold text-gray-900 group-hover:text-red-600 transition-colors text-sm sm:text-base">
                    {t(`faq.questions.${key}.question`)}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t(`faq.questions.${key}.answer`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Social Media Data
const socialMedia = [
  {
    name: "Facebook",
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];
