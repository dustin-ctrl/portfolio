import React from "react";
import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | K.Takahashi Portfolio",
  description: "提供するiOSアプリのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased p-6 sm:p-12 md:p-24 selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto border-4 border-black bg-white p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        <h1 className="text-2xl sm:text-4xl font-black font-mono tracking-wider border-b-4 border-black pb-4 mb-8">
          PRIVACY POLICY
          <span className="block text-xs font-bold text-slate-400 mt-2">プライバシーポリシー</span>
        </h1>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed font-medium">
          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 1. 個人情報の収集について</h2>
            <p className="text-slate-600 pl-4">当方が開発・提供するiOSアプリケーション（以下「本アプリ」）は、ユーザーの氏名、メールアドレス、連絡先などの個人情報を一切収集、保持、または第三者へ送信することはありません。安心してご利用ください。</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 2. 広告・分析ツールの利用について</h2>
            <p className="text-slate-600 pl-4">
              {/* 💡 もしAdMobやFirebaseを使っていないなら、ここを「」に変更してください */}
              本アプリでは、第三者による広告配信やアクセス解析ツールを一切使用していません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 3. プライバシーポリシーの変更</h2>
            <p className="text-slate-600 pl-4">当方は、法令の変更や本アプリのアップデート等に伴い、本プライバシーポリシーを改定することがあります。改定されたポリシーは、本ページに掲載された時点から適用されます。</p>
          </section>
        </div>

        <div className="border-t-4 border-black mt-12 pt-6 flex justify-between items-center font-mono text-xs font-bold">
          <p className="text-slate-400">制定日: 2026年6月6日</p>
            {/* 💡 href を "/#work" に変更します！ */}
            <Link href="/#work" className="px-4 py-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              BACK TO HOME ←
            </Link>
        </div>

      </div>
    </div>
  );
}