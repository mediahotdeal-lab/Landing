import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { services } from '../services-data';
import ServiceDetailClientWrapper from '@/components/ServiceDetailClientWrapper';

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

  // Define Open Graph images based on service
  const ogImages: { url: string; width: number; height: number; alt: string }[] = [];

  if (service.slug === 'thue-tai-khoan-google-ads-vnd') {
    ogImages.push({
      url: '/images/banner/banner-cho-thue-tai-khoan-quang-cao-google.jpg',
      width: 1200,
      height: 630,
      alt: service.heroTitle,
    });
  } else if (service.slug === 'quang-cao-google-ads') {
    ogImages.push({
      url: '/images/banner/banner-quang-cao-google-ads.jpg',
      width: 1200,
      height: 630,
      alt: service.heroTitle,
    });
  } else if (service.slug === 'thiet-ke-landing-page') {
    ogImages.push({
      url: '/images/banner/banner-xay-dung-landing-page.jpg',
      width: 1200,
      height: 630,
      alt: service.heroTitle,
    });
  } else if (service.slug === 'thiet-ke-website') {
    ogImages.push({
      url: '/images/banner/banner-xay-dung-website.jpg',
      width: 1200,
      height: 630,
      alt: service.heroTitle,
    });
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
      ...(ogImages.length > 0 && { images: ogImages }),
    },
    twitter: {
      card: 'summary_large_image',
      title: service.heroTitle,
      description: service.description,
      ...(ogImages.length > 0 && { images: ogImages.map(img => img.url) }),
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

  // Use fully translated client wrapper - ALL content is now i18n enabled
  return <ServiceDetailClientWrapper service={service} />;
}
