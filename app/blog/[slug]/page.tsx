'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Blog posts data - same as in blog page
const blogPosts = [
  {
    slug: "10-chien-luoc-facebook-ads-hieu-qua-2025",
    title: "10 Chiến lược Facebook Ads hiệu quả năm 2025",
    excerpt: "Khám phá những chiến lược quảng cáo Facebook mới nhất giúp tối ưu chi phí và tăng tỷ lệ chuyển đổi cho doanh nghiệp của bạn.",
    date: "15 Jan 2025",
    category: "Facebook Ads",
    content: `
      <h2>Giới thiệu</h2>
      <p>Facebook Ads là một trong những công cụ quảng cáo mạnh mẽ nhất hiện nay. Với hơn 2.9 tỷ người dùng hoạt động hàng tháng, Facebook mang đến cơ hội tiếp cận khách hàng tiềm năng khổng lồ cho doanh nghiệp.</p>

      <h2>1. Tối ưu hóa targeting audience</h2>
      <p>Việc targeting đúng đối tượng là yếu tố quan trọng nhất quyết định thành công của chiến dịch Facebook Ads. Hãy sử dụng các công cụ targeting của Facebook như Custom Audiences, Lookalike Audiences và Interest Targeting để tiếp cận đúng người dùng.</p>

      <h2>2. Sử dụng creative đa dạng</h2>
      <p>Thử nghiệm với nhiều dạng creative khác nhau như video, carousel ads, collection ads để xem dạng nào mang lại hiệu quả tốt nhất cho sản phẩm của bạn.</p>

      <h2>3. A/B Testing</h2>
      <p>Luôn chạy A/B test để tối ưu hóa chiến dịch. Test các yếu tố như: headline, image, call-to-action button, placement, và audience.</p>

      <h2>4. Tối ưu ngân sách</h2>
      <p>Sử dụng Campaign Budget Optimization (CBO) để Facebook tự động phân bổ ngân sách cho các ad sets có hiệu suất tốt nhất.</p>

      <h2>5. Retargeting</h2>
      <p>Đừng bỏ qua khách hàng đã từng tương tác với website hoặc fanpage của bạn. Retargeting có tỷ lệ chuyển đổi cao hơn nhiều so với targeting người dùng mới.</p>

      <h2>Kết luận</h2>
      <p>Facebook Ads là một kênh marketing hiệu quả nếu bạn biết cách tối ưu. Áp dụng những chiến lược trên và liên tục theo dõi, điều chỉnh để đạt được ROI tốt nhất.</p>
    `
  },
  {
    slug: "cach-toi-uu-google-ads-tang-roi",
    title: "Cách tối ưu Google Ads để tăng ROI",
    excerpt: "Hướng dẫn chi tiết các kỹ thuật tối ưu hóa Google Ads giúp bạn tiết kiệm ngân sách và đạt được kết quả kinh doanh tốt hơn.",
    date: "12 Jan 2025",
    category: "Google Ads",
    content: `
      <h2>Giới thiệu về Google Ads</h2>
      <p>Google Ads là nền tảng quảng cáo trả phí của Google, cho phép doanh nghiệp hiển thị quảng cáo trên kết quả tìm kiếm và mạng lưới đối tác của Google.</p>

      <h2>1. Nghiên cứu từ khóa kỹ lưỡng</h2>
      <p>Sử dụng Google Keyword Planner để tìm các từ khóa có search volume cao nhưng competition thấp. Tập trung vào long-tail keywords để có CPC thấp hơn và conversion rate cao hơn.</p>

      <h2>2. Cải thiện Quality Score</h2>
      <p>Quality Score cao giúp giảm CPC và cải thiện vị trí quảng cáo. Các yếu tố ảnh hưởng: CTR, landing page relevance, ad relevance.</p>

      <h2>3. Tối ưu Landing Page</h2>
      <p>Landing page phải relevant với ad copy và từ khóa. Tốc độ tải trang nhanh, mobile-friendly, và có CTA rõ ràng.</p>

      <h2>4. Sử dụng Ad Extensions</h2>
      <p>Ad Extensions giúp quảng cáo của bạn chiếm nhiều không gian hơn trên SERP và cung cấp thêm thông tin hữu ích cho người dùng.</p>

      <h2>5. Theo dõi và tối ưu liên tục</h2>
      <p>Theo dõi các metrics quan trọng như CTR, Conversion Rate, Cost per Conversion, ROAS. Loại bỏ các từ khóa không hiệu quả và scale up các từ khóa tốt.</p>

      <h2>Kết luận</h2>
      <p>Tối ưu Google Ads là một quá trình liên tục. Với những kỹ thuật trên, bạn có thể cải thiện đáng kể ROI của chiến dịch Google Ads.</p>
    `
  },
  {
    slug: "seo-2025-xu-huong-va-cach-trien-khai",
    title: "SEO 2025: Xu hướng và cách triển khai",
    excerpt: "Cập nhật những xu hướng SEO mới nhất và cách áp dụng để website của bạn đứng top Google một cách bền vững.",
    date: "08 Jan 2025",
    category: "SEO",
    content: `
      <h2>Giới thiệu về SEO năm 2025</h2>
      <p>SEO năm 2025 đòi hỏi cách tiếp cận toàn diện hơn với sự phát triển của AI và các thuật toán tìm kiếm ngày càng thông minh.</p>

      <h2>1. E-E-A-T quan trọng hơn bao giờ hết</h2>
      <p>Google ngày càng chú trọng đến Experience, Expertise, Authoritativeness, và Trustworthiness của nội dung. Đảm bảo nội dung của bạn được viết bởi chuyên gia và có trích dẫn từ nguồn đáng tin cậy.</p>

      <h2>2. Core Web Vitals</h2>
      <p>Tốc độ tải trang, tính tương tác và sự ổn định của layout là những yếu tố ranking quan trọng. Tối ưu Core Web Vitals để cải thiện trải nghiệm người dùng.</p>

      <h2>3. Nội dung chất lượng và toàn diện</h2>
      <p>Tạo nội dung dài, chất lượng cao và cover toàn diện các khía cạnh của topic. Sử dụng AI như ChatGPT một cách thông minh nhưng luôn review và thêm giá trị từ góc nhìn chuyên gia.</p>

      <h2>4. Voice Search Optimization</h2>
      <p>Với sự phát triển của voice assistant, tối ưu cho voice search là xu hướng không thể bỏ qua. Tập trung vào long-tail keywords và conversational queries.</p>

      <h2>5. Video SEO</h2>
      <p>Video content ngày càng quan trọng. Tối ưu video trên YouTube và embed video vào website để tăng engagement và thời gian ở lại trang.</p>

      <h2>Kết luận</h2>
      <p>SEO 2025 đòi hỏi sự kết hợp giữa kỹ thuật và nội dung chất lượng. Áp dụng các xu hướng trên để đảm bảo website của bạn luôn nằm trong top kết quả tìm kiếm.</p>
    `
  },
  {
    slug: "content-marketing-bi-quyet-thu-hut-khach-hang",
    title: "Content Marketing: Bí quyết thu hút khách hàng",
    excerpt: "Học cách tạo nội dung hấp dẫn, viral và chuyển đổi cao cho các nền tảng Social Media và Website.",
    date: "05 Jan 2025",
    category: "Content Marketing",
    content: `
      <h2>Tại sao Content Marketing quan trọng?</h2>
      <p>Content Marketing giúp xây dựng thương hiệu, tạo lòng tin với khách hàng và tăng conversion rate một cách tự nhiên mà không quá aggressive như quảng cáo truyền thống.</p>

      <h2>1. Hiểu rõ audience của bạn</h2>
      <p>Tạo buyer persona chi tiết để hiểu pain points, desires và behavior của target audience. Nội dung phải giải quyết được vấn đề của họ.</p>

      <h2>2. Storytelling hiệu quả</h2>
      <p>Con người kết nối với stories, không phải với facts. Kể câu chuyện của brand, của khách hàng, và làm thế nào sản phẩm của bạn thay đổi cuộc sống họ.</p>

      <h2>3. Đa dạng hóa content format</h2>
      <p>Không chỉ blog posts, hãy tạo video, infographics, podcasts, ebooks, case studies để reach audience ở nhiều touchpoints khác nhau.</p>

      <h2>4. SEO-friendly content</h2>
      <p>Kết hợp content marketing với SEO để nội dung của bạn được tìm thấy trên Google. Nghiên cứu từ khóa và optimize on-page SEO.</p>

      <h2>5. Promote content hiệu quả</h2>
      <p>Tạo content tốt chỉ là bước đầu. Promote content qua social media, email marketing, influencer collaboration để reach được nhiều người hơn.</p>

      <h2>Kết luận</h2>
      <p>Content Marketing là long-term strategy nhưng mang lại kết quả bền vững. Đầu tư vào content chất lượng là đầu tư vào tương lai của doanh nghiệp.</p>
    `
  },
  {
    slug: "tiktok-ads-co-hoi-vang-cho-doanh-nghiep",
    title: "TikTok Ads: Cơ hội vàng cho doanh nghiệp",
    excerpt: "Tại sao TikTok Ads đang trở thành kênh quảng cáo không thể bỏ qua và cách bắt đầu hiệu quả ngay hôm nay.",
    date: "02 Jan 2025",
    category: "TikTok Ads",
    content: `
      <h2>TikTok - Nền tảng marketing không thể bỏ qua</h2>
      <p>Với hơn 1 tỷ người dùng active hàng tháng và average time spent cực cao, TikTok đang trở thành mỏ vàng cho marketer.</p>

      <h2>1. Tại sao nên chạy TikTok Ads?</h2>
      <p>TikTok có engagement rate cao nhất trong các nền tảng social media. Thuật toán của TikTok giúp content có thể viral nhanh chóng ngay cả khi account mới.</p>

      <h2>2. Các loại TikTok Ads</h2>
      <p>In-Feed Ads, TopView Ads, Branded Hashtag Challenge, Branded Effects. Mỗi loại phù hợp với mục tiêu marketing khác nhau.</p>

      <h2>3. Tạo content native với platform</h2>
      <p>TikTok users không thích content quá "ads-y". Hãy tạo content authentic, entertaining và valuable. UGC-style content thường perform tốt hơn.</p>

      <h2>4. Leverage TikTok trends</h2>
      <p>Theo dõi trending sounds, hashtags và challenges. Tham gia trends giúp content của bạn được expose nhiều hơn.</p>

      <h2>5. Work với influencers</h2>
      <p>TikTok influencer marketing có ROI rất cao. Collaborate với micro-influencers để reach niche audience một cách authentic.</p>

      <h2>Kết luận</h2>
      <p>TikTok Ads là cơ hội vàng cho doanh nghiệp muốn reach Gen Z và Millennials. Bắt đầu ngay hôm nay để không bỏ lỡ platform đang hot nhất hiện nay.</p>
    `
  },
  {
    slug: "email-marketing-tang-ty-le-mo-va-click",
    title: "Email Marketing: Tăng tỷ lệ mở và click",
    excerpt: "Những tips thực chiến giúp email marketing của bạn đạt open rate cao và chuyển đổi khách hàng tốt hơn.",
    date: "28 Dec 2024",
    category: "Email Marketing",
    content: `
      <h2>Email Marketing vẫn còn hiệu quả?</h2>
      <p>Dù có nhiều kênh marketing mới, Email Marketing vẫn có ROI cao nhất: $42 cho mỗi $1 chi tiêu. Email cho phép bạn reach audience trực tiếp và cá nhân hóa message.</p>

      <h2>1. Build email list chất lượng</h2>
      <p>Không mua list email. Build organic list thông qua lead magnets như ebooks, webinars, exclusive content. Subscribers tự nguyện đăng ký sẽ engaged hơn.</p>

      <h2>2. Viết subject line hấp dẫn</h2>
      <p>Subject line quyết định 47% việc email có được mở hay không. Keep it short (dưới 50 ký tự), personalized, và tạo curiosity hoặc urgency.</p>

      <h2>3. Personalization và segmentation</h2>
      <p>Segment list dựa trên behavior, demographics, purchase history. Personalized emails có open rate cao hơn 26% so với generic emails.</p>

      <h2>4. Optimize cho mobile</h2>
      <p>Hơn 60% emails được mở trên mobile. Đảm bảo email của bạn responsive, font size đủ lớn, và CTA button dễ tap.</p>

      <h2>5. A/B Testing</h2>
      <p>Test mọi element: subject line, sender name, send time, email copy, CTA. Data từ A/B test giúp bạn hiểu audience hơn và tối ưu campaigns tiếp theo.</p>

      <h2>Kết luận</h2>
      <p>Email Marketing đòi hỏi strategy và optimization liên tục. Áp dụng những best practices trên để cải thiện open rate và conversion rate của email campaigns.</p>
    `
  },
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const t = useTranslations('blogPage');

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.slug === params.slug);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Article Header */}
      <article className="relative pt-24 sm:pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link href="/blog" className="text-red-600 hover:underline">
              Blog
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{post.title}</span>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>5 phút đọc</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Chia sẻ bài viết</h3>
            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </button>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Quay lại Blog</span>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="relative py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bài viết liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <Link
                  key={index}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-600 hover:shadow-xl transition-all hover:-translate-y-2">
                    <div className="relative h-40 bg-red-50">
                      <div className="absolute inset-0 bg-red-500/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-red-600/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-red-600 font-medium mb-2">{relatedPost.category}</div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
