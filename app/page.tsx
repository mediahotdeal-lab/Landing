import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "HotDeal Media - Đối tác tin cậy giúp doanh nghiệp tăng trưởng vượt bậc. Chuyên gia Google Ads, Facebook Ads, SEO, thiết kế website. Tư vấn miễn phí, cam kết hiệu quả. Liên hệ ngay 028 7300 5757.",
  keywords: [
    "hotdeal media",
    "công ty marketing",
    "dịch vụ marketing online",
    "quảng cáo trực tuyến",
    "digital marketing agency",
    "agency việt nam",
    "tăng doanh số",
    "marketing hiệu quả"
  ],
  openGraph: {
    title: "HotDeal Media - Đối tác Digital Marketing tin cậy",
    description: "Giải pháp Marketing Online toàn diện: Google Ads, SEO, thiết kế website. Tăng doanh số nhanh chóng, chi phí tối ưu.",
    url: "/",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
