import React from "react";
import Link from "next/link";

export const metadata = {
  title: "利用規約 | K.Takahashi Portfolio",
  description: "提供するiOSアプリの利用規約です。",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased p-6 sm:p-12 md:p-24 selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto border-4 border-black bg-white p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        <h1 className="text-2xl sm:text-4xl font-black font-mono tracking-wider border-b-4 border-black pb-4 mb-8">
          TERMS OF SERVICE
          <span className="block text-xs font-bold text-slate-400 mt-2">利用規約</span>
        </h1>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed font-medium">
          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 1. 同意</h2>
            <p className="text-slate-600 pl-4">本規約は、開発者（以下「当方」）が提供するiOSアプリケーション（以下「本アプリ」）の利用条件を定めるものです。ユーザーは本アプリをダウンロード・利用することで、本規約に同意したものとみなされます。</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 2. 禁止事項</h2>
            <p className="text-slate-600 pl-4">ユーザーは、本アプリの利用にあたり、以下の行為を行ってはなりません。</p>
            <ul className="list-disc pl-8 mt-2 text-slate-600 space-y-1">
              <li>本アプリの不具合を意図的に利用する行為</li>
              <li>本アプリの逆コンパイル、逆アセンブル、リバースエンジニアリング行為</li>
              <li>その他、当方が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 3. 免責事項</h2>
            <p className="text-slate-600 pl-4">本アプリの利用によりユーザーまたは第三者に生じた一切の損害について、当方は何ら責任を負わないものとします。本アプリは現状有姿で提供され、その完全性や正確性を保証するものではありません。</p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 4. 規約の変更</h2>
            <p className="text-slate-600 pl-4">当方は、ユーザーの事前の承諾を得ることなく、いつでも本規約の内容を変更できるものとします。変更後の規約は、本ページに掲載された時点から効力を生じるものとします。</p>
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