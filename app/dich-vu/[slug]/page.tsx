import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { services, Platform } from '../services-data';
import ProcessAccordion from '@/components/ProcessAccordion';
import PricingTable from '@/components/PricingTable';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Dịch vụ không tồn tại | HotDeal Media',
      description: 'Trang dịch vụ bạn tìm kiếm không tồn tại.',
    };
  }

  // Generate keywords from service data
  const keywords = [
    service.name,
    service.shortName,
    'HotDeal Media',
    'Digital Marketing',
    'Marketing Online',
    'Việt Nam',
  ];

  // Add service-specific keywords
  if (service.slug === 'quang-cao-google-ads') {
    keywords.push('Google Ads', 'Quảng cáo Google', 'Google Advertising', 'PPC', 'SEM');
  } else if (service.slug === 'thue-tai-khoan-google-ads-vnd') {
    keywords.push('Thuê tài khoản Google Ads', 'Tài khoản VNĐ', 'Google Ads VNĐ');
  } else if (service.slug === 'thiet-ke-website') {
    keywords.push('Thiết kế website', 'Làm website', 'Website chuyên nghiệp', 'Web design');
  } else if (service.slug === 'thiet-ke-landing-page') {
    keywords.push('Thiết kế landing page', 'Landing page', 'Trang đích', 'Conversion optimization');
  }

  return {
    title: `${service.heroTitle} | HotDeal Media`,
    description: service.description,
    keywords: keywords,
    openGraph: {
      title: service.heroTitle,
      description: service.description,
      type: 'website',
      locale: 'vi_VN',
      url: `/dich-vu/${service.slug}`,
      siteName: 'HotDeal Media',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.heroTitle,
      description: service.description,
    },
    alternates: {
      canonical: `/dich-vu/${service.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="w-full mx-auto text-center">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{service.icon}</div>
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {service.shortName}
              </span>
            </div>
            <h1 className="mb-8 sm:mb-10">
              {/* Split title logic for "quang-cao-google-ads" */}
              {service.slug === 'quang-cao-google-ads' ? (
                <div className="space-y-3">
                  {/* Main title - Larger and bolder */}
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-relaxed">
                    Dịch Vụ Quảng Cáo Google Ads Chuyên Nghiệp
                  </div>
                  {/* Subtitle - Smaller with gradient */}
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-relaxed">
                    Giải Pháp Tăng Doanh Số Nhanh Cùng Hotdeal Media
                  </div>
                </div>
              ) : (
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-relaxed">
                  {service.heroTitle}
                </div>
              )}
            </h1>

            {/* Enhanced Hero Description with Visual Separation - Horizontal Layout */}
            <div className="w-full">
              {service.heroDescriptionParts ? (
                /* Stepped design for all services */
                <div className="max-w-5xl mx-auto">
                  <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-pink-300 to-red-200 -translate-y-1/2 z-0"></div>

                    <div className="relative z-10 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                      {/* Step 1 - Context */}
                      <div className="group relative lg:mt-0">
                        <div className="relative pt-8 lg:pt-16">
                          {/* Number circle */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-black text-xl">1</span>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="relative bg-white border-3 border-red-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-red-400">
                              {/* Top decoration */}
                              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity"></div>

                              <div className="relative text-center space-y-3">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                  </svg>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">Bối cảnh thị trường</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {service.heroDescriptionParts.context}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 - Challenge */}
                      <div className="group relative lg:mt-12">
                        <div className="relative pt-8 lg:pt-16">
                          {/* Number circle */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-black text-xl">2</span>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="relative bg-white border-3 border-pink-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group-hover:border-pink-400">
                              {/* Top decoration */}
                              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50 blur-xl group-hover:opacity-70 transition-opacity"></div>

                              <div className="relative text-center space-y-3">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">Chìa khóa thành công</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {service.heroDescriptionParts.challenge}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 - Solution (Prominent) */}
                      <div className="group relative lg:mt-0">
                        <div className="relative pt-8 lg:pt-16">
                          {/* Number circle */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-black text-xl">3</span>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="relative bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                              {/* Animated background */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                              <div className="relative text-center space-y-3">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/40 group-hover:scale-110 transition-transform duration-300">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                  </svg>
                                </div>
                                <h3 className="font-bold text-lg text-white">Giải pháp của Hotdeal</h3>
                                <p className="text-sm text-white/95 leading-relaxed font-medium">
                                  {service.heroDescriptionParts.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : service.slug === 'thue-tai-khoan-google-ads-vnd' ? (
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
                            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full">BỐI CẢNH</span>
                          </div>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Trong kỷ nguyên số, quảng cáo trực tuyến đã trở thành yếu tố then chốt giúp doanh nghiệp phát triển, mở rộng thị phần và tiếp cận khách hàng chính xác hơn bao giờ hết.
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
                            <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1.5 rounded-full">THÁCH THỨC</span>
                          </div>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Tuy nhiên, việc khởi chạy chiến dịch quảng cáo hiệu quả đòi hỏi tài khoản Google Ads ổn định, ngân sách linh hoạt và quản lý chuyên nghiệp.
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
                            <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">GIẢI PHÁP</span>
                          </div>
                          <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                            Hotdeal Media tự hào mang đến dịch vụ cho thuê tài khoản Google Ads uy tín, an toàn và tối ưu chi phí – giải pháp toàn diện giúp doanh nghiệp bắt đầu quảng cáo ngay mà không lo về vấn đề kỹ thuật hay hạn mức tài khoản.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {service.heroDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Service Section (Optional) */}
      {service.aboutService && (
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl"></div>
          </div>

          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                  <span>Giới thiệu dịch vụ</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                  {service.aboutService.title}
                </h2>

                {/* Description Card */}
                <div className="max-w-4xl mx-auto mb-8">
                  <div className="group relative">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                    <div className="relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 group-hover:border-red-300 shadow-md group-hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        {/* Text */}
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-left flex-1">
                          {service.aboutService.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platforms Grid - Only for services with platforms */}
                {'platforms' in service.aboutService && service.aboutService.platforms && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                    {service.aboutService.platforms.map((platform: Platform, index: number) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        {/* Glow effect on hover */}
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


              {/* Additional text after benefits */}
              {service.aboutService.additionalText && (
                <div className="mt-10 max-w-4xl mx-auto">
                  <div className="relative group">
                    {/* Decorative background */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>

                    <div className="relative bg-gradient-to-br from-red-50 via-pink-50 to-red-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
                      {/* Quote icon */}
                      <div className="absolute -top-4 left-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-xl">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium pt-4">
                        {service.aboutService.additionalText}
                      </p>

                      {/* Bottom decoration */}
                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                        <div className="flex items-center gap-2 text-red-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-sm font-semibold">Lưu ý quan trọng</span>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section (Optional) */}
      {service.whyChooseUs && (
        <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}></div>

          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Lý do chọn chúng tôi</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                  {service.whyChooseUs.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {service.whyChooseUs.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {service.whyChooseUs.points.map((point, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500"></div>

                    <div className="relative bg-white border-2 border-gray-200 group-hover:border-red-300 rounded-3xl p-6 sm:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full">
                      {/* Number badge with gradient */}
                      <div className="relative mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <span className="text-white font-black text-xl">{index + 1}</span>
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 w-14 h-14 rounded-2xl border-2 border-red-600/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors leading-relaxed">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors">
                        {point.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900 leading-relaxed">
            {service.features.title}
          </h2>
          {service.features.intro && (
            <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg">
              {service.features.intro}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {service.features.items.map((item, index) => {
              const icons = [
                // Icon 1: Search/Magnifying glass
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /><circle cx="11" cy="11" r="3" fill="currentColor" opacity="0.2"/></svg>,
                // Icon 2: Display/Monitor
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 17v4"/><rect x="5" y="7" width="6" height="4" rx="1" fill="currentColor" opacity="0.2"/></svg>,
                // Icon 3: Video/Play
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" strokeWidth={1.5}/><path d="M10 9l5 3-5 3V9z" fill="currentColor" opacity="0.8"/></svg>,
                // Icon 4: Shopping cart
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
                // Icon 5: Mobile/App
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" strokeWidth={1.5}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 18h2"/><rect x="9" y="6" width="6" height="8" rx="1" fill="currentColor" opacity="0.2"/></svg>,
                // Icon 6: Performance/Chart
                <svg key={index} className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/><circle cx="13" cy="15" r="2" fill="currentColor" opacity="0.3"/></svg>
              ];

              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>

                  <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-red-400 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Icon container with gradient background */}
                    <div className="mb-4 sm:mb-6 relative">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 group-hover:from-red-100 group-hover:to-pink-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <div className="text-red-600 group-hover:text-red-700 transition-colors">
                          {icons[index % icons.length]}
                        </div>
                      </div>
                      {/* Decorative circle */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors">
                      {item.description}
                    </p>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Account Types Section (Optional) */}
      {service.accountTypes && (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Loại tài khoản</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                  {service.accountTypes.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {service.accountTypes.description}
                </p>
              </div>

              <div className="space-y-6">
                {service.accountTypes.types.map((type, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Animated gradient border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>

                    <div className="relative bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 border-2 border-transparent rounded-3xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-transparent rounded-bl-[100px]"></div>

                      <div className="relative">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                              {type.name}
                            </h3>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 rounded-2xl border border-gray-200">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-sm text-gray-700 font-medium">
                    Mọi tài khoản của Hotdeal Media đều được cấp quyền sử dụng hợp lệ, có lịch sử hoạt động minh bạch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Rental Model Section (Optional) */}
      {service.rentalModel && (
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}></div>

          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span>Mô hình thuê</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                    Mô hình thuê tài khoản
                  </h2>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600">
                    Đơn giản, minh bạch và hiệu quả
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {service.rentalModel.points.map((point, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500"></div>

                    <div className="relative bg-white border-2 border-gray-200 group-hover:border-red-300 rounded-3xl p-6 sm:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full">
                      {/* Number badge with gradient */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <span className="text-white font-black text-2xl">{index + 1}</span>
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-red-600/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors">
                        {point.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section - Using Client Component */}
      <ProcessAccordion title={service.process.title} steps={service.process.steps} />

      {/* Process Note */}
      {service.process.note && (
        <div className="py-6 bg-gradient-to-br from-red-600 to-red-700">
          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
            <p className="text-center text-white text-lg sm:text-xl font-semibold italic">
              {service.process.note}
            </p>
          </div>
        </div>
      )}

      {/* Packages Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 leading-relaxed">
            {service.packages.title}
          </h2>

          {/* Intro text before pricing table for thue-tai-khoan-google-ads-vnd */}
          {service.slug === 'thue-tai-khoan-google-ads-vnd' && (
            <div className="max-w-5xl mx-auto mb-12">
              <div className="text-center mb-8">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Tài khoản quảng cáo Google VNĐ đối tác uy tín của Google có xác minh nhà quảng cáo đầy đủ.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '🎯', text: 'Phù hợp với mọi ngành hàng' },
                  { icon: '💎', text: 'Dịch vụ minh bạch, rõ ràng' },
                  { icon: '🛡️', text: 'Nói "Không" với sản phẩm/dịch vụ vi phạm pháp luật' },
                  { icon: '⚡', text: 'Hỗ trợ vấn đề tài khoản tạm ngưng' },
                  { icon: '📄', text: 'Xuất hóa đơn VAT đầy đủ' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                    <div className="relative flex items-center gap-3 bg-white p-4 rounded-xl border-2 border-gray-200 group-hover:border-red-300 shadow-sm group-hover:shadow-md transition-all duration-300 h-full">
                      <div className="flex-shrink-0 text-2xl">
                        {item.icon}
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium transition-colors">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Use PricingTable for 'thue-tai-khoan-google-ads-vnd' service with 4+ plans */}
          {service.slug === 'thue-tai-khoan-google-ads-vnd' && service.packages.plans.length >= 4 ? (
            <PricingTable
              tiers={service.packages.plans.map((plan) => ({
                fee: plan.price,
                budget: plan.features[0].replace('Ngân sách: ', ''),
              }))}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {service.packages.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl sm:rounded-2xl border-2 p-6 sm:p-8 transition-all hover:shadow-2xl ${
                  plan.highlight
                    ? 'border-red-600 md:scale-105 shadow-xl relative'
                    : 'border-gray-200 hover:border-red-600'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      Phổ biến nhất
                    </div>
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">{plan.name}</h3>
                <div className="mb-6 sm:mb-8">
                  <p className="text-2xl sm:text-3xl font-bold text-red-600">{plan.price}</p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/lien-he"
                  className={`block w-full text-center py-3 sm:py-4 rounded-xl font-semibold transition-all text-sm sm:text-base hover:scale-105 ${
                    plan.highlight
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Liên hệ ngay
                </Link>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>Lợi ích vượt trội</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-relaxed">
              Lợi Ích Khi Sử Dụng Dịch Vụ
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng
            </p>
          </div>

          {/* Stack layout - 5 rows */}
          <div className="max-w-5xl mx-auto space-y-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-60 transition duration-500"></div>

                <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl hover:border-white/40 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-6 p-6 sm:p-8">
                    {/* Icon with gradient */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <p className="font-semibold text-base sm:text-lg leading-relaxed text-white group-hover:text-gray-100 transition-colors">
                        {benefit}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guide Section (Optional) */}
      {service.quickGuide && (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 text-gray-900 leading-relaxed">
                {service.quickGuide.title}
              </h2>
              <p className="text-center text-lg text-gray-600 mb-8 sm:mb-10">
                {service.quickGuide.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.quickGuide.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section (Optional) */}
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

              {/* Bullets list (optional) */}
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

              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all hover:shadow-2xl hover:scale-105 text-lg"
              >
                <span>Liên hệ ngay</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="mt-8 text-lg sm:text-xl font-semibold text-white/95 italic">
                {service.finalCTA.footer}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-4">
          <div className="bg-white border-2 border-red-600 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-relaxed">
                Bắt đầu với <span className="text-red-600">{service.shortName}</span> ngay hôm nay
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105"
                >
                  <span>Tư vấn miễn phí</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/dich-vu"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-gray-900 text-gray-900 font-semibold rounded-xl transition-all hover:scale-105"
                >
                  Xem dịch vụ khác
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
