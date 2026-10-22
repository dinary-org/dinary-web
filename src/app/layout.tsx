import type { Metadata, Viewport } from "next";
import { Gowun_Dodum, Instrument_Serif, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/lib/site";
import "./globals.css";

const gowun = Gowun_Dodum({ weight: "400", subsets: ["latin"], variable: "--font-gowun", display: "swap" });
const noto = Noto_Sans_KR({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-noto", display: "swap" });
const jetbrains = JetBrains_Mono({ weight: "400", subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const instrument = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  keywords: ["DINARY", "다이너리", "식사 일기", "맛집 기록", "음식 사진", "맛집 지도", "연인 기록", "위시리스트", "푸드 다이어리"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: site.name, url: site.url, logo: `${site.url}/brand/icon.png`, email: site.contactEmail },
    { "@type": "WebSite", name: site.name, url: site.url, inLanguage: "ko-KR", description: site.description },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${gowun.variable} ${noto.variable} ${jetbrains.variable} ${instrument.variable}`}>
      <body className="min-h-svh">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        {children}
        <div aria-hidden className="grain" />
      </body>
    </html>
  );
}
