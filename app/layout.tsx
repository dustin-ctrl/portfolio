import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// 🔒 このメタデータはここに置いておくだけで、Next.jsが自動的に読み込んでGoogleに届けてくれます！
export const metadata: Metadata = {
  title: "K.Takahashi Portfolio",
  description: "髙橋 孝太朗のポートフォリオサイトです。ハッカソンやServiceNowでの開発経験をまとめました。",
  // siteNameを追加することで、Googleに「サイト名」を強力にアピールできます
  openGraph: {
    siteName: "K.Takahashi Portfolio",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg", 
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
        {children} {/* 👈 page.tsxの中身は自動的にここに入ります */}
        <SpeedInsights />
      </body>
    </html>
  );
}