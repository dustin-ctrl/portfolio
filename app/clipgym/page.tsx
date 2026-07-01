"use client";

import React from 'react';

// =========================================================
// 🌟 各機能が縦に並び、その中で複数スクショが横に並ぶセクションコンポーネント
// =========================================================
function AppScreensSection() {
  const features = [
    {
      id: 1,
      title: "トレーニング動画の管理",
      description: "YouTubeで共有を押すだけで、あなたのお気に入り動画が保存。動画にタグ付けしてトレーニング動画を管理しよう。",
      images: ["images/1.png", "images/clipgym-func1-3.png","images/clipgym-func1-1.png","images/clipgym-func1-2.png"],
    },
    {
      id: 2,
      title: "コースの作成",
      description: "登録した動画を自由に組み合わせて、あなただけのオリジナルコースを作成。毎日のルーティン化を強力にサポートします。",
      images: ["images/2.png", "images/clipgym-func2-1.png","images/clipgym-func2-2.png"],
    },
    {
      id: 3,
      title: "トレーニング記録",
      description: "コースを開始し、動画に合わせて運動。完了したらワンタップでカレンダーにサッと記録できます。",
      images: ["images/3.png", "images/clipgym-func3-1.png","images/clipgym-func3-2.png"],
    },
    {
      id: 4,
      title: "記録の振り返り",
      description: "カレンダー形式で、いつ・どのコースをやったかをパッと確認。継続の成果を視覚的に実感できます。",
      images: ["images/4.png", "images/clipgym-func4-1.png"],
    },
  ];

  return (
    <section id="screens" className="py-20 overflow-hidden scroll-mt-20 bg-slate-50 border-b-4 border-black">
      {/* セクションタイトル */}
      <div className="max-w-6xl mx-auto text-center select-none mb-12 px-6">
        <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase mb-2">Function</h3>
        <p className="text-xs md:text-sm font-bold text-[#0dd3c5] tracking-widest uppercase mb-6">アプリの機能</p>
        <div className="h-1.5 bg-black w-20 mx-auto mt-4 rounded-full" />
      </div>
      
      {/* 機能ごとに縦に並べるエリア */}
      <div className="w-full mx-auto space-y-24">
        {features.map((feature) => (
          <div key={feature.id} className="w-full flex flex-col space-y-4">
            
            {/* 📝 機能のタイトル・説明（中央寄せ） */}
            <div className="text-center max-w-2xl mx-auto space-y-3 px-6">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                {feature.id}. {feature.title}
              </h4>
              <p className="text-sm sm:text-base font-bold text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* 📱 複数のスクリーンショットを横並びにするエリア */}
            {/* 💡 コンテナ自体の左右パディングを大きくとり、スクロールの端に見切れクッションを実装 */}
            <div 
              className="flex flex-row items-center justify-start md:justify-center gap-6 sm:gap-10 overflow-x-auto py-8 px-6 sm:px-12 md:px-6 w-full snap-x snap-mandatory"
              style={{
                msOverflowStyle: 'none',  /* IE, Edge用 */
                scrollbarWidth: 'none',   /* Firefox用 */
              }}
            >
              {/* スクロール開始位置のスマホ用隠しクッション */}
              <div className="w-1 flex-shrink-0 md:hidden" />

              {feature.images.map((imgSrc, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className="w-[200px] sm:w-[240px] md:w-[260px] flex-shrink-0 snap-center"
                >
                  {/* ネオポップ調の太い黒枠＋強いシャドウのスマホモック */}
                  <div className="bg-white border-4 border-black rounded-[36px] sm:rounded-[44px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19] select-none transition-transform hover:scale-[1.02] duration-200">
                    <img 
                      src={imgSrc} 
                      alt={`${feature.title} Screen ${imgIndex + 1}`} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if(e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.classList.remove('hidden');
                      }}
                    />
                    {/* 画像エラー時のフォールバック表示 */}
                    <div className="hidden flex flex-col items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-100 p-6 text-center text-xs">
                      <span className="text-3xl mb-3">📱</span>
                      [{feature.title}]<br />画面 {imgIndex + 1}
                    </div>
                  </div>
                </div>
              ))}

              {/* 💡 スクロール最右端で画像がハミ出て潰れるのを防ぐためのエンドスペーサー */}
              <div className="w-6 sm:w-12 flex-shrink-0 md:hidden" />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

// =========================================================
// 🌟 ClipGym LP 全体のメインコンポーネント
// =========================================================
export default function ClipGymLP() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* 🌟 STICKY NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 w-full bg-[#f8fafc]/90 backdrop-blur-md border-b-4 border-black px-4 py-3 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-5 sm:gap-8 md:gap-12 font-black text-[11px] sm:text-sm tracking-wider">
            <a href="#home" className="hover:text-[#0dd3c5] transition-colors">HOME</a>
            <a href="#about" className="hover:text-[#0dd3c5] transition-colors whitespace-nowrap">ABOUT APP</a>
            <a href="#screens" className="hover:text-[#0dd3c5] transition-colors whitespace-nowrap">FUNCTION</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header 
        id="home"
        className="relative h-auto pt-10 pb-16 md:pt-28 md:pb-36 bg-[#0dd3c5]/10 border-b-4 border-black overflow-hidden flex items-center justify-center scroll-mt-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-amber-300/30 border-4 border-black -z-10" />
        <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-[#0dd3c5]/20 border-4 border-black -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between w-full gap-10 md:gap-8 relative z-10">
          
          {/* インフォメーションエリア */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 space-y-4 md:space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#0dd3c5] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] uppercase leading-none">
              ClipGym
            </h1>
            <p className="text-sm md:text-xl font-extrabold text-slate-800 tracking-wider">
              お家トレーニングをもっと手軽に、継続的に。
            </p>

            {/* モバイル・PC両対応コンテナ */}
            <div className="pt-2 flex flex-row items-center justify-center md:justify-start gap-4 w-full">
              <div className="flex items-center">
                <a 
                  href="https://apps.apple.com/jp/app/id6780714798"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <img 
                    src="/images/App_Store_Badge_JP_wht.svg" 
                    alt="Download on the App Store" 
                    className="h-[44px] sm:h-[52px] w-auto border-3 border-black rounded-[12px] md:rounded-[14px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] block bg-black select-none" 
                  />
                </a>
              </div>
            </div>
          </div>

          {/* メイン2連モックアップエリア */}
          <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2 relative select-none min-h-[300px] sm:min-h-[360px] md:min-h-[520px]">
            <div className="absolute left-[50%] md:left-auto md:right-[4%] top-6 md:top-8 w-[52%] max-w-[170px] md:w-full md:max-w-[250px] lg:max-w-[280px] bg-white border-3 md:border-4 border-black rounded-[24px] md:rounded-[40px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19] transform rotate-[10deg] md:rotate-[12deg] z-10 transition-transform duration-300 hover:rotate-[6deg]">
              <img src="images/clipgym-1-1.png" alt="ClipGym Course Screen" className="w-full h-full object-cover block" onError={(e) => { e.currentTarget.style.display = 'none'; if(e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.classList.remove('hidden'); }} />
              <div className="hidden flex items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-200 text-center p-4 text-[10px] md:text-xs">[ モック2 ]</div>
            </div>

            <div className="relative right-[20%] md:right-auto md:absolute md:left-[8%] md:top-0 w-[52%] max-w-[170px] md:w-full md:max-w-[250px] lg:max-w-[280px] bg-white border-3 md:border-4 border-black rounded-[24px] md:rounded-[40px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19] transform rotate-[-8deg] md:rotate-[-10deg] z-20 transition-transform duration-300 hover:rotate-[-4deg]">
              <img src="images/clipgym-1-2.png" alt="ClipGym Home Screen" className="w-full h-full object-cover block" onError={(e) => { e.currentTarget.style.display = 'none'; if(e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.classList.remove('hidden'); }} />
              <div className="hidden flex items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-200 text-center p-4 text-[10px] md:text-xs">[ モック1 ]</div>
            </div>
          </div>

        </div>
      </header>

      {/* =========================================================
          🌟 2. ABOUT APP SECTION（スタイリッシュ・ブラッシュアップ版）
         ========================================================= */}
      <section id="about" className="py-20 md:py-28 bg-white border-b-4 border-black scroll-mt-20 px-6 relative">
        <div className="max-w-3xl mx-auto">
          
          {/* 外枠コンテナ：少し傾きをつけたグラフィカルなベースボード */}
          <div className="bg-white border-4 border-black p-6 sm:p-10 md:p-14 rounded-[32px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-left space-y-8 max-w-2xl mx-auto relative mt-8">
            
            {/* 左上に浮かぶ立体的なセクションタグバッジ */}
            <div className="absolute -top-6 left-6 md:left-10 bg-[#0dd3c5] border-3 border-black text-slate-950 font-black text-sm md:text-base px-5 py-1.5 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] tracking-wider select-none">
              ABOUT APP
            </div>

            {/* リード文 */}
            <div className="space-y-2 pt-2">
              <p className="text-base sm:text-lg md:text-2xl font-black text-slate-900 leading-tight tracking-tight">
                せっかく始めたお家トレーニングが、<br className="hidden sm:block" />
                なかなか継続しないあなたに。
              </p>
            </div>

            {/* インタラクティブ・スタイリッシュチェックリスト */}
            <ul className="space-y-3.5 md:space-y-4">
              {[
                { title: "アプリ内で動画視聴", note: "他のアプリを開く必要はありません" },
                { title: "ワンタップでトレ記録", note: "カレンダーへスマートに即時反映" },
                { title: "あなただけのコースを作成", note: "お気に入りのルーティンを自由に編成" }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="group flex items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl border-2 border-slate-100 hover:border-black hover:bg-[#0dd3c5]/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* スタイリッシュチェックアイコン（ホバーで回転） */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-400 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] text-white font-black text-base select-none transform group-hover:rotate-12 transition-transform duration-300">
                      ✓
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg font-black text-slate-800 leading-none group-hover:text-black transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1.5 block">
                        {item.note}
                      </span>
                    </div>
                  </div>
                  
                  {/* 右側の矢印ディテール（PC時のみ、ホバーでスライド） */}
                  <span className="text-slate-400 font-mono font-bold text-sm hidden sm:inline-block transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">
                    →
                  </span>
                </li>
              ))}
            </ul>

            {/* フッター補足テキスト */}
            <div className="pt-4 border-t-2 border-dashed border-slate-200">
              <p className="text-xs sm:text-sm font-bold text-slate-500 leading-relaxed bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                動画の登録・整理から日々のカレンダーログまで、これひとつで「動画視聴」から「継続の振り返り」までをシームレスに完結させます。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 各機能が縦並び ＆ 複数スクショが横並びになったセクション */}
      <AppScreensSection />

      {/* 4. FOOTER */}
      <footer className="bg-black text-white py-12 text-center font-mono text-xs tracking-widest border-t-4 border-black px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-black text-sm text-[#0dd3c5] uppercase">ClipGym</p>
          <div className="flex items-center gap-6 sm:gap-8 font-bold text-slate-300">
            <a href="/clipgym/terms" className="hover:text-[#0dd3c5] hover:underline underline-offset-4 transition-colors duration-200 whitespace-nowrap">利用規約</a>
            <span className="text-slate-600 select-none">|</span>
            <a href="/clipgym/privacy" className="hover:text-[#0dd3c5] hover:underline underline-offset-4 transition-colors duration-200 whitespace-nowrap">プライバシーポリシー</a>
          </div>
          <p className="text-slate-400 text-[10px] md:text-xs">© 2026 Kotaro Takahashi</p>
        </div>
      </footer>
    </div>
  );
}