import React from "react";
import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | K.Takahashi Portfolio",
  description: "提供するiOSアプリ（ClipGym）のプライバシーポリシーです。Apple App Storeのガイドラインに準拠しています。",
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
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 1. 個人情報の収集と不送信について</h2>
            <p className="text-slate-600 pl-4">
              開発者 K.Takahashi（以下「当方」）が開発・提供するiOSアプリケーション「ClipGym」（以下「本アプリ」）は、ユーザーの氏名、メールアドレス、連絡先、位置情報などの個人情報を一切収集、保持、または外部のサーバーへ送信することはありません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 2. アプリ内データの保存について（ローカル完結）</h2>
            <p className="text-slate-600 pl-4">
              本アプリ内でユーザーが作成したカスタムトレーニングコース、お気に入り動画のURL、カレンダーの運動記録などのデータは、すべてユーザーご自身のデバイス内（iOSローカルストレージ）にのみ安全に保存されます。当方がこれらのデータにアクセスしたり、収集したりすることは技術的に不可能です。アプリを削除すると、これらのローカルデータも同時に消去されます。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 3. 広告・アクセス解析ツールの利用について</h2>
            <p className="text-slate-600 pl-4">
              本アプリでは、第三者による広告配信（Google AdMob等）や、ユーザーの行動を追跡するアクセス解析ツール（Firebase Analytics等）を一切使用していません。そのため、広告識別子（IDFA）の取得やクロスサイトトラッキング等によるプライバシーへの影響はありません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 4. お問い合わせ時の情報提供について</h2>
            <p className="text-slate-600 pl-4">
              ユーザーが当方へバグ報告や機能要望等のお問い合わせを行う際、メールアドレスやお名前（ニックネーム）をご提供いただく場合があります。これらの情報は、お問い合わせに対する回答やサポート対応にのみ限定して使用し、第三者への開示や他の目的への転用は一切行いません。
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 font-mono flex items-center">▶ 5. プライバシーポリシーの変更</h2>
            <p className="text-slate-600 pl-4">
              当方は、法令の変更、Apple社のガイドライン改定、または本アプリのアップデート等に伴い、本プライバシーポリシーをいつでも改定することがあります。改定されたポリシーは、本ページに掲載された時点から適用されます。
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