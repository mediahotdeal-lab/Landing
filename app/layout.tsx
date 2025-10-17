import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HotDeal Media - Digital Marketing Agency | Dịch vụ Marketing Online",
  description: "Chuyên gia giải pháp Marketing Online, quảng cáo Facebook, Google Ads, SEO, Content Marketing. Tăng doanh số bán hàng hiệu quả cho doanh nghiệp.",
  keywords: ["digital marketing", "marketing online", "facebook ads", "google ads", "seo", "content marketing"],
  authors: [{ name: "HotDeal Media" }],
  openGraph: {
    title: "HotDeal Media - Digital Marketing Agency",
    description: "Chuyên gia giải pháp Marketing Online cho doanh nghiệp",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "HotDeal Media - Digital Marketing Agency",
    description: "Chuyên gia giải pháp Marketing Online cho doanh nghiệp",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
