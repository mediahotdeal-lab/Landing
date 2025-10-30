import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Liên hệ HotDeal Media để được tư vấn miễn phí về dịch vụ Digital Marketing. Hotline: 028 7300 5757. Địa chỉ: 332 Lũy Bán Bích, Phường Hòa Thạnh, Quận Tân Phú, TP.HCM. Chúng tôi sẵn sàng hỗ trợ bạn 24/7.",
  keywords: [
    "liên hệ hotdeal media",
    "tư vấn marketing",
    "hotline marketing",
    "địa chỉ hotdeal media",
    "liên hệ google ads",
    "tư vấn quảng cáo",
    "contact hotdeal media"
  ],
  openGraph: {
    title: "Liên Hệ - HotDeal Media",
    description: "Liên hệ ngay để được tư vấn miễn phí về giải pháp Digital Marketing. Hotline: 028 7300 5757",
    url: "/lien-he",
  },
  alternates: {
    canonical: "/lien-he",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hotdealmedia.com'}/lien-he`,
    name: 'HotDeal Media',
    description: 'Digital Marketing Agency chuyên nghiệp tại TP.HCM',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hotdealmedia.com',
    telephone: '+84-28-7300-5757',
    email: 'contact@hotdealmedia.vn',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '332 Lũy Bán Bích, Phường Hòa Thạnh',
      addressLocality: 'Quận Tân Phú',
      addressRegion: 'TP.HCM',
      postalCode: '700000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.7769', // Update with actual coordinates
      longitude: '106.6256',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '12:00',
      },
    ],
    priceRange: '$$',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hotdealmedia.com'}/images/logo_2.png`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
