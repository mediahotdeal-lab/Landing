'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function BlogPage() {
  const t = useTranslations('blogPage');

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
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Blog Post Cards */}
            {samplePosts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-600 hover:shadow-xl transition-all hover:-translate-y-2">
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-red-50 overflow-hidden">
                    <div className="absolute inset-0 bg-red-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-red-600/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="text-red-600 font-medium">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-red-600 font-semibold group-hover:gap-2 transition-all">
                      <span>{t('post.readMore')}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-[1400px]">
          <div className="max-w-4xl mx-auto bg-white border-2 border-red-600 rounded-xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
                {t('newsletter.heading1')} <span className="text-red-600">{t('newsletter.heading2')}</span>
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600">
                {t('newsletter.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-red-600 transition-colors text-sm sm:text-base"
                />
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                  {t('newsletter.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Sample blog posts data with slugs
const samplePosts = [
  {
    slug: "10-chien-luoc-facebook-ads-hieu-qua-2025",
    title: "10 Chiến lược Facebook Ads hiệu quả năm 2025",
    excerpt: "Khám phá những chiến lược quảng cáo Facebook mới nhất giúp tối ưu chi phí và tăng tỷ lệ chuyển đổi cho doanh nghiệp của bạn.",
    date: "15 Jan 2025",
    category: "Facebook Ads",
  },
  {
    slug: "cach-toi-uu-google-ads-tang-roi",
    title: "Cách tối ưu Google Ads để tăng ROI",
    excerpt: "Hướng dẫn chi tiết các kỹ thuật tối ưu hóa Google Ads giúp bạn tiết kiệm ngân sách và đạt được kết quả kinh doanh tốt hơn.",
    date: "12 Jan 2025",
    category: "Google Ads",
  },
  {
    slug: "seo-2025-xu-huong-va-cach-trien-khai",
    title: "SEO 2025: Xu hướng và cách triển khai",
    excerpt: "Cập nhật những xu hướng SEO mới nhất và cách áp dụng để website của bạn đứng top Google một cách bền vững.",
    date: "08 Jan 2025",
    category: "SEO",
  },
  {
    slug: "content-marketing-bi-quyet-thu-hut-khach-hang",
    title: "Content Marketing: Bí quyết thu hút khách hàng",
    excerpt: "Học cách tạo nội dung hấp dẫn, viral và chuyển đổi cao cho các nền tảng Social Media và Website.",
    date: "05 Jan 2025",
    category: "Content Marketing",
  },
  {
    slug: "tiktok-ads-co-hoi-vang-cho-doanh-nghiep",
    title: "TikTok Ads: Cơ hội vàng cho doanh nghiệp",
    excerpt: "Tại sao TikTok Ads đang trở thành kênh quảng cáo không thể bỏ qua và cách bắt đầu hiệu quả ngay hôm nay.",
    date: "02 Jan 2025",
    category: "TikTok Ads",
  },
  {
    slug: "email-marketing-tang-ty-le-mo-va-click",
    title: "Email Marketing: Tăng tỷ lệ mở và click",
    excerpt: "Những tips thực chiến giúp email marketing của bạn đạt open rate cao và chuyển đổi khách hàng tốt hơn.",
    date: "28 Dec 2024",
    category: "Email Marketing",
  },
];
