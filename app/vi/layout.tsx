import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hotdealmedia.com'),
  title: {
    default: "HotDeal Media - Digital Marketing Agency | Dịch vụ Marketing Online",
    template: "%s | HotDeal Media",
  },
  description: "Chuyên gia giải pháp Marketing Online hàng đầu Việt Nam. Dịch vụ Google Ads, Facebook Ads, SEO, thiết kế website chuyên nghiệp. Tăng doanh số bán hàng hiệu quả, chi phí tối ưu. Đối tác tin cậy của hơn 1000+ doanh nghiệp.",
};

export default async function ViLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = 'vi';
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
