import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClipGym | 動画トレーニングも記録もこれ1つ',
  description: 'YouTubeなどのフィットネス動画を見ながら、ワンタップで即トレーニング記録。あなたの宅トレを劇的にスマートにする筋トレログアプリ。',
  alternates: {
    canonical: '/clipgym',
  },
  openGraph: {
    title: 'ClipGym | 動画トレーニングも記録もこれ1つ',
    description: 'YouTubeなどのフィットネス動画を見ながら、ワンタップで即トレーニング記録。あなたの宅トレを劇的にスマートにする筋トレログアプリ。',
    url: 'https://k-takahashi.vercel.app/clipgym',
    images: [
      {
        // public/images/ogp.png を指すので、ドメイン直下の /images/ から始めます
        url: 'https://k-takahashi.vercel.app/images/clipgym-ogp.png',
        width: 1200,
        height: 630,
        alt: 'ClipGym App Preview',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClipGym | お気に入りの動画で、迷わず、続くワークアウト',
    description: 'YouTubeなどのフィットネス動画を見ながら、ワンタップで即トレーニング記録。あなたの宅トレを劇的にスマートにする筋トレログアプリ。',
    images: ['https://k-takahashi.vercel.app/images/clipgym-ogp.png'],
  },
};

export default function ClipGymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
