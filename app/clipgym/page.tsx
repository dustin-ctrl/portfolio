"use client";

import React, { useState } from 'react';

export default function ClipGymLP() {
  // スマホ版の説明文を開閉するためのステート
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* =========================================================
          1. HERO SECTION (バッジはタイトルの横 / シンプルなボタンをモック上に配置)
         ========================================================= */}
      <header className="relative h-auto md:min-h-0 pt-8 pb-12 md:pt-28 md:pb-32 bg-[#0dd3c5]/10 border-b-4 border-black overflow-hidden flex items-center">
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-amber-300/30 border-4 border-black -z-10" />
        <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-[#0dd3c5]/20 border-4 border-black -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between w-full gap-6 md:gap-12">
          
          {/* ==========================================
              📱 順番1：タイトル ＆ サブタイトル ＆ 最重要DLバッジ
             ========================================== */}
          <div className="w-full md:w-1/2 flex flex-col text-left shrink-0 space-y-3">
            {/* タイトルとApp Storeバッジを横並びに配置 */}
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-[#0dd3c5] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase">
                ClipGym
              </h1>
              
              {/* 💡 ユーザーの目を引く特等席（ロゴのすぐ横）にDLバッジを設置 */}
              <div className="shrink-0 pt-1">
                <a 
                  href="https://apps.apple.com/jp/app/id6780714798"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/App_Store_Badge_JP_wht.svg" 
                    alt="Download on the App Store" 
                    className="h-[42px] sm:h-[46px] md:h-[50px] w-auto border-2 md:border-3 border-black rounded-[11px] md:rounded-[13px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] block bg-black" 
                  />
                </a>
              </div>
            </div>

            <h2 className="text-sm sm:text-base md:text-2xl font-black text-slate-800 leading-tight">
              お家トレーニングをもっと手軽に、継続的に。
            </h2>
            
            {/* 💻 【PC用】常時表示される説明文（PCではバッジは非表示：タイトル横にあるため） */}
            <div className="hidden md:block pt-3">
              <p className="text-sm md:text-base font-bold text-slate-500 leading-relaxed">
                せっかく始めたお家トレーニングが、なかなか継続しないあなたに。<br />
                お気に入りの動画を自分好みのコースにまとめて、アプリ内で視聴・ワンタップ記録。<br />
                これひとつで「動画視聴」から「継続の振り返り」までをシームレスに完結させます。
              </p>
            </div>
          </div>

          {/* ==========================================
              📱 順番2：モック1（★画像の上にシンプルボタンを重ねる）
             ========================================== */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2 relative select-none">
            
            {/* モック＆ボタンを包む相対位置コンテナ */}
            <div className="relative w-[85%] max-w-[280px] md:max-w-[400px] bg-white border-4 border-black rounded-[32px] md:rounded-[40px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19] group">
              {/* モック画像 */}
              <img 
                src="images/clipgym-1.png" 
                alt="ClipGym Home Screen" 
                className="w-full h-full object-cover block"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const p = document.createElement('p');
                  p.className = 'flex items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-200 text-center p-6 text-xs';
                  p.innerText = '[ モック1 ]';
                  e.currentTarget.parentElement?.appendChild(p);
                }}
              />

              {/* 💡 【スマホ用】モック画像の上に重なる、超シンプルな極薄丸文字ボタン */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 bg-black/70 backdrop-blur-md text-white font-bold text-xs tracking-widest rounded-full border border-white/20 active:scale-95 transition-all duration-150 shadow-lg"
              >
                {isOpen ? 'CLOSE ▲' : 'DETAILS ▼'}
              </button>
            </div>
            
          </div>

          {/* ==========================================
              📱 順番3：【スマホ用】アコーディオン展開エリア
             ========================================== */}
          <div className={`w-full block md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden mt-0'
          }`}>
            <div className="bg-white border-3 border-black p-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed">
                せっかく始めたお家トレーニングが、なかなか継続しないあなたに。<br />
                お気に入りの動画を自分好みのコースにまとめて、アプリ内で視聴・ワンタップ記録。動画視聴からログまでこれひとつで完結。
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* =========================================================
          2. SCREENSHOTS SECTION
         ========================================================= */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center select-none mb-12">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase">APP SCREENS</h3>
          <div className="h-1.5 bg-black w-20 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="max-w-4xl xl:max-w-7xl mx-auto md:px-6"> 
          <div className="
            flex flex-row overflow-x-auto gap-6 px-6 pb-8 pt-4
            snap-x snap-mandatory scrollbar-hide
            md:grid md:grid-cols-2 xl:grid-cols-4 md:overflow-x-visible md:px-0 md:pb-0 md:pt-0 md:snap-none
            gap-y-12 justify-items-center
          ">
            
            {/* モック1 */}
            <div className="flex flex-col items-center space-y-4 shrink-0 w-[260px] sm:w-[280px] snap-center md:w-full md:max-w-[280px]">
              <div className="w-full bg-white border-3 border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19]">
                <img src="images/1.png" alt="Training Courses Screen" className="w-full h-full object-cover" 
                     onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                <div className="hidden flex items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-100 p-4 text-center text-xs">[ モック1: コース選択画面 ]</div>
              </div>
              <p className="font-black text-base text-slate-800">1. トレーニング動画の管理</p>
            </div>

            {/* モック2 */}
            <div className="flex flex-col items-center space-y-4 shrink-0 w-[260px] sm:w-[280px] snap-center md:w-full md:max-w-[280px]">
              <div className="w-full bg-white border-3 border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19]">
                <img src="images/2.png" alt="Workout Player Screen" className="w-full h-full object-cover"
                     onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                <div className="hidden flex items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-100 p-4 text-center text-xs">[ モック2: プレイヤー画面 ]</div>
              </div>
              <p className="font-black text-base text-slate-800">2. トレーニングコースの作成</p>
            </div>

            {/* モック3 */}
            <div className="flex flex-col items-center space-y-4 shrink-0 w-[260px] sm:w-[280px] snap-center md:w-full md:max-w-[280px]">
              <div className="w-full bg-white border-3 border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19]">
                <img src="images/3.png" alt="Report Screen" className="w-full h-full object-cover"
                     onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                <div className="hidden flex items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-100 p-4 text-center text-xs">[ モック3: レポート画面 ]</div>
              </div>
              <p className="font-black text-base text-slate-800">3. トレーニング＆記録</p>
            </div>

            {/* モック4 */}
            <div className="flex flex-col items-center space-y-4 shrink-0 w-[260px] sm:w-[280px] snap-center md:w-full md:max-w-[280px]">
              <div className="w-full bg-white border-3 border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[9/19]">
                <img src="images/4.png" alt="育成・その他画面" className="w-full h-full object-cover"
                     onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                <div className="hidden flex items-center justify-center h-full font-mono font-black text-slate-400 bg-slate-100 p-4 text-center text-xs">[ モック4: 育成・その他画面 ]</div>
              </div>
              <p className="font-black text-base text-slate-800">4. 記録の管理</p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. FOOTER
         ========================================================= */}
      <footer className="bg-black text-white py-12 text-center font-mono text-xs tracking-widest border-t-4 border-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-black text-sm text-[#0dd3c5]">ClipGym</p>
          
          <div className="flex items-center gap-6 font-bold text-slate-300">
            <a href="/clipgym/terms" className="hover:text-[#0dd3c5] hover:underline underline-offset-4 transition-colors duration-200">利用規約</a>
            <span className="text-slate-600 select-none">|</span>
            <a href="/clipgym/privacy" className="hover:text-[#0dd3c5] hover:underline underline-offset-4 transition-colors duration-200">プライバシーポリシー</a>
          </div>
          
          <p className="text-slate-400 text-[10px] md:text-xs">© 2026 Kotaro Takahashi</p>
        </div>
      </footer>
    </div>
  );
}