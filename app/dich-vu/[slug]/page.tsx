import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '../services-data';
import ProcessAccordion from '@/components/ProcessAccordion';

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

        <div className="container mx-auto px-4 max-w-[1400px] relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{service.icon}</div>
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {service.shortName}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
              {service.heroTitle}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              {service.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
            {service.features.title}
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Chúng tôi cung cấp đa dạng các loại chiến dịch quảng cáo phù hợp với mục tiêu kinh doanh của bạn
          </p>
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
                  className="group bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-red-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 sm:mb-6 text-gray-700 group-hover:text-red-600 transition-colors">
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Using Client Component */}
      <ProcessAccordion title={service.process.title} steps={service.process.steps} />

      {/* Packages Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            {service.packages.title}
          </h2>
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
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{plan.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 sm:mb-6">
                  {plan.price}
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Lợi Ích Khi Sử Dụng Dịch Vụ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 sm:p-6 rounded-xl text-center hover:bg-gray-700 transition-all hover:scale-105"
              >
                <div className="text-red-500 text-2xl sm:text-3xl mb-2 sm:mb-3">✓</div>
                <p className="font-medium text-sm sm:text-base leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="bg-white border-2 border-red-600 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
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
