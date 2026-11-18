import { Metadata } from 'next';
import TikTokServiceContent from '@/components/tiktok/TikTokServiceContent';
import viMessages from '@/messages/vi.json';

const title = 'Dịch vụ TikTok - Giải pháp TikTok Shop toàn diện cho doanh nghiệp';
const description =
  'Hotdeal Media kết nối thương hiệu với cộng đồng KOC, triển khai chiến dịch Freecast, booking CAST, xây dựng và vận hành gian hàng TikTok Shop, quảng cáo TikTok.';

export const metadata: Metadata = {
  title: `${title} | HotDeal Media`,
  description,
  keywords: [
    'Dịch vụ TikTok',
    'TikTok Shop',
    'Booking KOC',
    'KOC Freecast',
    'Booking CAST',
    'Xây dựng gian hàng TikTok Shop',
    'Vận hành TikTok Shop',
    'Quảng cáo TikTok',
    'HotDeal Media',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'vi_VN',
    url: '/dich-vu/dich-vu-tiktok',
    siteName: 'HotDeal Media',
    images: [{ url: '/images/tiktok/og-tiktok.jpg', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/tiktok/og-tiktok.jpg'],
  },
  alternates: {
    canonical: '/dich-vu/dich-vu-tiktok',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TikTokServicePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: viMessages.tiktokPage.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TikTokServiceContent />
    </>
  );
}
