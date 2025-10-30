import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocaleProvider from "@/components/LocaleProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hotdealmedia.com'),
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <LocaleProvider initialLocale="vi">
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
