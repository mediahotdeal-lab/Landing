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

  // Use fully translated client wrapper - ALL content is now i18n enabled
  return <ServiceDetailClientWrapper service={service} />;
}
