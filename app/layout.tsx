import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocaleProvider from "@/components/LocaleProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleAdsTracking } from "@/components/GoogleAdsTracking";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hotdealmedia.com'),
  title: {
    default: "HotDeal Media - Digital Marketing Agency | Dịch vụ Marketing Online",
    template: "%s | HotDeal Media",
  },
  description: "Chuyên gia giải pháp Marketing Online hàng đầu Việt Nam. Dịch vụ Google Ads, Facebook Ads, SEO, thiết kế website chuyên nghiệp. Tăng doanh số bán hàng hiệu quả, chi phí tối ưu. Đối tác tin cậy của hơn 1000+ doanh nghiệp.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'HotDeal Media',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HotDeal Media - Digital Marketing Agency',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '';

  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Primary tracking method */}
        <GoogleTagManager gtmId={gtmId} />
        {/* Google Analytics 4 - Direct integration */}
        <GoogleAnalytics gaId={gaId} />
        {/* Google Ads - Direct integration */}
        <GoogleAdsTracking adsId={adsId} />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <GoogleTagManagerNoscript gtmId={gtmId} />
        <LocaleProvider initialLocale="vi">
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
