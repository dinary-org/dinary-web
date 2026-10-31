import type { Metadata, Viewport } from "next";
import { Gowun_Batang, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// 앱 src/theme 의 F 와 같은 글꼴: 제목 고운바탕 Bold · 본문 Noto Sans KR · 라벨 JetBrains Mono
const gowunBatang = Gowun_Batang({ weight: "700", subsets: ["latin"], variable: "--font-gowun-batang", display: "swap" });
const noto = Noto_Sans_KR({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-noto", display: "swap" });
const jetbrains = JetBrains_Mono({ weight: "400", subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  keywords: ["DINARY", "다이너리", "식사 일기", "맛집 기록", "음식 사진", "맛집 지도", "연인 기록", "위시리스트", "푸드 다이어리", "맛집 추천", "도장", "라벨"],
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
    <html lang="ko" className={`${gowunBatang.variable} ${noto.variable} ${jetbrains.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
