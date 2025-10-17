export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: 'Facebook Ads',
      description: 'Quảng cáo Facebook hiệu quả, tiếp cận đúng đối tượng khách hàng mục tiêu với chi phí tối ưu.',
      features: ['Targeting chính xác', 'Tối ưu ngân sách', 'Báo cáo chi tiết']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Google Ads',
      description: 'Chiến dịch Google Ads chuyên nghiệp, đưa doanh nghiệp lên TOP kết quả tìm kiếm.',
      features: ['Search Ads', 'Display Ads', 'Shopping Ads']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'SEO Marketing',
      description: 'Tối ưu hóa website lên TOP Google tự nhiên, tăng traffic chất lượng bền vững.',
      features: ['On-page SEO', 'Off-page SEO', 'Technical SEO']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Content Marketing',
      description: 'Sáng tạo nội dung chất lượng, thu hút và giữ chân khách hàng hiệu quả.',
      features: ['Copywriting', 'Content Strategy', 'Storytelling']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Marketing',
      description: 'Chiến dịch email marketing chuyên nghiệp, chăm sóc và nuôi dưỡng khách hàng.',
      features: ['Automation', 'Personalization', 'Analytics']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Social Media',
      description: 'Quản trị mạng xã hội toàn diện, xây dựng cộng đồng và thương hiệu mạnh mẽ.',
      features: ['Community Management', 'Engagement', 'Brand Building']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            Dịch vụ của chúng tôi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
            Giải Pháp Marketing Toàn Diện
          </h2>
          <p className="text-lg text-gray-600">
            Chúng tôi cung cấp đầy đủ các dịch vụ Marketing Online giúp doanh nghiệp tăng trưởng vượt bậc
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl p-8 hover:border-red-600 hover:shadow-xl transition-all group hover:-translate-y-2 overflow-hidden"
            >
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>

              {/* Decorative shapes */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-red-500/5 rounded-[20px] rotate-12 group-hover:bg-red-500/10 group-hover:rotate-[20deg] transition-all"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-500/5 rounded-tl-[30px] rounded-br-[30px] -rotate-12 group-hover:bg-red-500/10 group-hover:-rotate-[20deg] transition-all"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>

              <p className="relative text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:translate-x-1 transition-transform">
                    <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 hover:shadow-xl transition-all hover:scale-105"
          >
            <span>Nhận tư vấn miễn phí</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
