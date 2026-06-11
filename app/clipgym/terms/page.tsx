import React from "react";
import Link from "next/link";

export const metadata = {
  title: "利用規約 | K.Takahashi Portfolio",
  description: "提供するiOSアプリ（ClipGym）の利用規約です。Apple App Storeのガイドラインに準拠しています。",
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
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 1. 総則および同意</h2>
            <p className="text-slate-600 pl-4">
              本規約は、開発者 K.Takahashi（以下「当方」）が提供するiOSアプリケーション「ClipGym」（以下「本アプリ」）の利用条件を定めるものです。ユーザーは本アプリをダウンロード、インストール、または利用することにより、本規約およびApple社の定める「標準エンドユーザーライセンス契約（Standard EULA）」に同意したものとみなされます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 2. 本アプリの提供と費用</h2>
            <p className="text-slate-600 pl-4">
              本アプリは、現状すべての機能を無料でご利用いただけます。アプリ内における追加の有料課金や、強制的な広告表示などは一切含まれておりません。ただし、アプリの利用に伴う通信料（動画の再生等にかかるパケット通信料）は、ユーザーご自身の負担となります。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 3. 外部コンテンツ（YouTube等）および著作権</h2>
            <p className="text-slate-600 pl-4">
              本アプリは、外部動画プラットフォーム（YouTube等）の提供するAPI等を利用して動画と連動する機能を有しています。アプリ内で表示・参照される動画の著作権その他の知的財産権は、各動画の投稿者およびプラットフォームの権利者に帰属します。外部プラットフォームの仕様変更、規約改定、または障害等により動画が閲覧不能となった場合、当方はそれにより生じた損害について責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 4. 禁止事項</h2>
            <p className="text-slate-600 pl-4">ユーザーは、本アプリの利用にあたり、以下の行為を行ってはなりません。</p>
            <ul className="list-disc pl-8 mt-2 text-slate-600 space-y-1 text-xs sm:text-sm">
              <li>本アプリの不具合を意図的に利用、または第三者へ拡散する行為</li>
              <li>本アプリの逆コンパイル、逆アセンブル、リバースエンジニアリング、その他ソースコードを解析する行為</li>
              <li>当方、Apple社、または第三者の著作権その他の知的財産権を侵害する行為</li>
              <li>その他、当方が公序良俗に反する等、不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 5. 免責事項（消費者契約法への準拠）</h2>
            <p className="text-slate-600 pl-4">
              本アプリは現状有姿で提供され、その完全性、確実性、正確性、または特定の目的に対する適合性を保証するものではありません。当方の故意または重大な過失による場合を除き、本アプリの利用によりユーザーまたは第三者に生じた一切の損害（データ消失、デバイスの故障、トレーニング中の怪我等）について、当方は何ら責任を負わないものとします。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 6. 規約の変更</h2>
            <p className="text-slate-600 pl-4">
              当方は、ユーザーの事前の承諾を得ることなく、いつでも本規約の内容を変更できるものとします。変更後の規約は、本ページに掲載された時点から効力を生じるものとし、変更後にユーザーが本アプリを利用した場合は、変更後の利用規約に同意したものとみなされます。
            </p>
          </section>
        </div>

        <div className="border-t-4 border-black mt-12 pt-6 flex justify-between items-center font-mono text-xs font-bold">
          <p className="text-slate-400">改訂日: 2026年6月11日</p>
          <Link href="/#work" className="px-4 py-2 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            BACK TO HOME ←
          </Link>
        </div>

      </div>
    </div>
  );
}