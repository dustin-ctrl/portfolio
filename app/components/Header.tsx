"use client";

import React, { useState } from "react";

interface HeaderProps {
  activeSection: "profile" | "work" | "none";
  scrollToTop: (e: React.MouseEvent) => void;
}

export default function Header({ activeSection, scrollToTop }: HeaderProps) {
  // 全画面共通でSNSメニューの開閉を管理
  const [isSnsOpen, setIsSnsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 h-20 sm:h-24 bg-white/90 backdrop-blur-md border-b-4 border-black z-50 flex items-center justify-between px-3 sm:px-8 md:px-12 select-none">
      
      {/* 左側：ロゴ・タイトルエリア */}
      <div className="flex items-center gap-4 md:gap-6">
        <a 
          href="#top" 
          onClick={(e) => {
            if (typeof scrollToTop === "function") {
              scrollToTop(e);
            }
          }}
          className="text-lg sm:text-2xl font-black tracking-tighter text-slate-900 font-sans hover:opacity-80 transition-opacity leading-[1.1]"
        >
          KOTARO<br />TAKAHASHI
        </a>

        {/* コアメッセージ（PCサイズ以上でのみ表示） */}
        <span className="hidden lg:inline-block text-xs font-mono font-black tracking-wider text-slate-900 max-w-none leading-tight border-l-3 border-black pl-6">
          This is the{' '}
          <span className="relative inline-block px-1 z-0">
            <span 
              className="absolute inset-x-0 bottom-0.5 h-3 bg-amber-300/90 -rotate-1 origin-left z-[-1] pointer-events-none"
              style={{
                clipPath: "polygon(0% 15%, 15% 5%, 35% 25%, 65% 10%, 85% 30%, 100% 15%, 98% 85%, 82% 95%, 55% 75%, 25% 90%, 8% 70%, 0% 80%)"
              }}
            />
            portfolio
          </span>{' '}
          site<br /> of Kotaro Takahashi.
        </span>
      </div>

      {/* 右側：ナビゲーション（💡 すべての画面で完全に統一された美しい3連ナビ） */}
      <div className="relative flex items-center">
        
        <nav className="flex items-center gap-4 sm:gap-6 font-mono text-[11px] sm:text-sm font-black tracking-widest select-none">
          
          {/* WORK ボタン */}
          <a
            href="#work"
            className={`pb-0.5 border-b-3 sm:border-b-4 transition-all duration-200 ${
              activeSection === "work"
                ? "border-black text-black scale-105"
                : "border-transparent text-slate-400 hover:text-slate-900"
            }`}
          >
            WORK
          </a>

          {/* PROFILE ボタン */}
          <a
            href="#profile"
            className={`pb-0.5 border-b-3 sm:border-b-4 transition-all duration-200 ${
              activeSection === "profile"
                ? "border-black text-black scale-105"
                : "border-transparent text-slate-400 hover:text-slate-900"
            }`}
          >
            PROFILE
          </a>

          {/* CONTACT タブ */}
          <button
            onClick={() => setIsSnsOpen(!isSnsOpen)}
            className={`pb-0.5 border-b-3 sm:border-b-4 transition-all duration-200 uppercase flex items-center gap-1 cursor-pointer ${
              isSnsOpen
                ? "border-black text-black scale-105"
                : "border-transparent text-slate-400 hover:text-slate-900"
            }`}
          >
            <span>CONTACT</span>
            <span className={`inline-block text-[8px] sm:text-[10px] font-sans transition-transform duration-200 ${isSnsOpen ? "rotate-180 text-black" : "text-slate-400"}`}>
              ▼
            </span>
          </button>

        </nav>

        {/* 💡 ドロップダウンメニュー：メールを削除し、横並び（flex-row）のミニマルな2連バッジに変更 */}
        <div 
          className={`
            transition-all duration-300 ease-in-out
            absolute top-[40px] sm:top-[48px] right-0 flex flex-row gap-2 bg-white border-3 border-black p-2 rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] z-50
            ${isSnsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kotaro-takahashi-46290336a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors p-1.5 hover:scale-110 active:scale-95 duration-200" aria-label="LinkedIn">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/dustin-ctrl" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors p-1.5 hover:scale-110 active:scale-95 duration-200" aria-label="GitHub">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.166 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>

      </div>
    </header>
  );
}