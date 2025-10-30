import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hotdealmedia.com'),
  title: {
    default: "HotDeal Media - Digital Marketing Agency | Online Marketing Services",
    template: "%s | HotDeal Media",
  },
  description: "Leading Digital Marketing agency in Vietnam. Professional Google Ads, Facebook Ads, SEO, website design services. Increase sales effectively, optimize costs. Trusted partner of 1000+ businesses.",
};

export default async function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = 'en';
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
