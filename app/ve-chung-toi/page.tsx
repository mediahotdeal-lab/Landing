import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Về Chúng Tôi - HotDeal Media | Digital Marketing Agency",
  description: "HotDeal Media - Đối tác tin cậy của 300+ doanh nghiệp. Chuyên gia giải pháp Marketing Online với 5+ năm kinh nghiệm, ROI trung bình 150%+.",
  keywords: ["về chúng tôi", "hotdeal media", "digital marketing agency", "marketing agency vietnam"],
  openGraph: {
    title: "Về Chúng Tôi - HotDeal Media",
    description: "Đối tác tin cậy của 300+ doanh nghiệp",
    type: "website",
    locale: "vi_VN",
  },
};

export default function AboutPage() {
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
              Về Chúng Tôi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">
            Chúng Tôi Là <span className="text-red-600">HotDeal Media</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Đối tác tin cậy của hơn 300 doanh nghiệp, giúp họ tăng trưởng doanh thu vượt bậc thông qua các giải pháp Digital Marketing hiệu quả và bền vững.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Câu Chuyện Của <span className="text-red-600">Chúng Tôi</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Được thành lập vào năm 2019, HotDeal Media bắt đầu từ một đội ngũ nhỏ với niềm đam mê và khát vọng mang đến những giải pháp Marketing Online hiệu quả cho doanh nghiệp Việt.
                </p>
                <p>
                  Sau 5 năm phát triển, chúng tôi tự hào đã đồng hành cùng hơn 300 doanh nghiệp từ startup đến các tập đoàn lớn, giúp họ đạt được mục tiêu kinh doanh và tăng trưởng bền vững.
                </p>
                <p>
                  Với đội ngũ chuyên gia giàu kinh nghiệm, công nghệ hiện đại và phương pháp làm việc chuyên nghiệp, HotDeal Media cam kết mang đến ROI vượt trội cho mọi chiến dịch Marketing.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-600">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
                    <div className="text-gray-600 font-medium">Năm kinh nghiệm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">300+</div>
                    <div className="text-gray-600 font-medium">Khách hàng</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                    <div className="text-gray-600 font-medium">Dự án</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">150%</div>
                    <div className="text-gray-600 font-medium">ROI trung bình</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sứ Mệnh & Tầm Nhìn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 transition-all group">
              <div className="w-16 h-16 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ Mệnh</h3>
              <p className="text-gray-600 leading-relaxed">
                Giúp doanh nghiệp Việt Nam tiếp cận và áp dụng thành công các giải pháp Digital Marketing hiện đại, tăng trưởng doanh thu bền vững và xây dựng thương hiệu mạnh mẽ trong thời đại số.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 transition-all group">
              <div className="w-16 h-16 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm Nhìn</h3>
              <p className="text-gray-600 leading-relaxed">
                Trở thành agency Digital Marketing hàng đầu Việt Nam, được công nhận bởi chất lượng dịch vụ vượt trội, đội ngũ chuyên gia giàu kinh nghiệm và cam kết mang lại giá trị thực sự cho khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hành động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-xl mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn <span className="text-red-600">HotDeal Media?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-600 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Đội Ngũ Chuyên Gia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những con người tài năng và nhiệt huyết đứng sau mỗi chiến dịch thành công
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-600 hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="w-24 h-24 bg-red-50 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-red-600 transition-all">
                  <svg className="w-12 h-12 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-sm text-red-600 font-semibold mb-3">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="bg-white border-2 border-red-600 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Sẵn Sàng Bắt Đầu <span className="text-red-600">Hành Trình</span> Cùng Chúng Tôi?
              </h2>
              <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
                Hãy để HotDeal Media đồng hành cùng bạn tạo nên những thành công vượt bậc trong kinh doanh
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all hover:shadow-lg hover:scale-105"
                >
                  <span>Nhận tư vấn miễn phí</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/dich-vu"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-gray-900 transition-all hover:scale-105"
                >
                  Xem dịch vụ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Core Values Data
const coreValues = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Hiệu Quả",
    description: "Cam kết mang lại kết quả đo lường được và ROI vượt trội cho mọi chiến dịch."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Uy Tín",
    description: "Xây dựng lòng tin qua từng dự án với sự minh bạch và trách nhiệm cao."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Sáng Tạo",
    description: "Không ngừng đổi mới và sáng tạo để mang đến giải pháp tối ưu nhất."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Tận Tâm",
    description: "Đặt lợi ích khách hàng lên hàng đầu, đồng hành từ A đến Z."
  }
];

// Why Choose Us Data
const whyChooseUs = [
  {
    title: "Đội ngũ chuyên gia giàu kinh nghiệm",
    description: "Hơn 5 năm kinh nghiệm với 500+ dự án thành công trong đa dạng lĩnh vực."
  },
  {
    title: "Phương pháp làm việc chuyên nghiệp",
    description: "Quy trình chuẩn hóa, báo cáo minh bạch và tối ưu liên tục."
  },
  {
    title: "Công nghệ & công cụ hiện đại",
    description: "Sử dụng các công nghệ và tools Marketing tiên tiến nhất."
  },
  {
    title: "ROI cam kết",
    description: "Cam kết mang lại ROI trung bình 150%+ cho mọi chiến dịch."
  },
  {
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ hỗ trợ sẵn sàng giải đáp mọi thắc mắc bất cứ lúc nào."
  },
  {
    title: "Chi phí tối ưu",
    description: "Giải pháp phù hợp với mọi quy mô từ startup đến doanh nghiệp lớn."
  }
];

// Team Members Data
const teamMembers = [
  {
    name: "Nguyễn Văn A",
    position: "CEO & Founder",
    description: "10+ năm kinh nghiệm Digital Marketing, từng làm việc tại các agency hàng đầu."
  },
  {
    name: "Trần Thị B",
    position: "Marketing Director",
    description: "Chuyên gia Facebook & Google Ads với 200+ chiến dịch thành công."
  },
  {
    name: "Lê Văn C",
    position: "SEO Lead",
    description: "Expert SEO với hơn 100 keywords top 3 Google cho các ngành hàng khác nhau."
  }
];
