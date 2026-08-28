import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://k-takahashi.vercel.app"),
  title: "髙橋孝太朗（Kotaro Takahashi）| ポートフォリオ",
  description: "広島で情報工学を専攻する髙橋孝太朗のポートフォリオ。Web・iOS・ServiceNowを用いた個人開発や、ハッカソン受賞作品を紹介しています。",
  authors: [{ name: "髙橋孝太朗", url: "https://k-takahashi.vercel.app" }],
  creator: "髙橋孝太朗",
  openGraph: {
    title: "髙橋孝太朗（Kotaro Takahashi）| ポートフォリオ",
    description: "広島で情報工学を専攻する髙橋孝太朗のポートフォリオ。Web・iOS・ServiceNowを用いた個人開発や、ハッカソン受賞作品を紹介しています。",
    url: "/",
    siteName: "髙橋孝太朗 Portfolio",
    locale: "ja_JP",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "髙橋孝太朗（Kotaro Takahashi）| Portfolio",
    description: "Web・iOS・ServiceNowを用いた個人開発や、ハッカソン受賞作品を紹介しています。",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "髙橋孝太朗（Kotaro Takahashi）のポートフォリオ",
  url: "https://k-takahashi.vercel.app",
  mainEntity: {
    "@type": "Person",
    name: "髙橋孝太朗",
    alternateName: ["Kotaro Takahashi", "高橋孝太朗"],
    url: "https://k-takahashi.vercel.app",
    image: "https://k-takahashi.vercel.app/images/me.png",
    jobTitle: "大学院生",
    homeLocation: {
      "@type": "Place",
      name: "広島県",
    },
    sameAs: ["https://github.com/dustin-ctrl"],
    knowsAbout: ["情報工学", "Web開発", "iOS開発", "ServiceNow", "UI・UX設計"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
