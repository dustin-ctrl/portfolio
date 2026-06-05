"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { AppProject } from "../types/portfolio";

interface ProjectModalProps {
  project: AppProject;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const displayImages = (project as any).galleryImages || [project.imageUrl];

  // ─── 💡 スワイプ関連の状態管理 ───
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [currentTranslateY, setCurrentTranslateY] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // タッチ開始
  const handleTouchStart = (e: React.TouchEvent) => {
    const scrollContainer = containerRef.current;
    // 内側のスクロールが最上部（0）のときだけスワイプでのクローズを有効にする
    if (scrollContainer && scrollContainer.scrollTop === 0) {
      setTouchStartY(e.touches[0].clientY);
      setIsSwiping(true);
    }
  };

  // タッチ移動中
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping || touchStartY === null) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY;

    // 下方向への引っ張りだけを受け付ける（上方向はガード）
    if (deltaY > 0) {
      // 指の動きに100%追従させると軽すぎるので、少し重み（抵抗）をつけてヌルッとさせる
      setCurrentTranslateY(deltaY * 0.8);
      
      // スワイプ中はモーダル本来のスクロールやバウンスを止める
      if (e.cancelable) e.preventDefault();
    }
  };

  // タッチ終了
  const handleTouchEnd = () => {
    if (!isSwiping) return;

    // 80ピクセル以上下に引っ張っていたら、そのままCloseを実行
    if (currentTranslateY > 80) {
      onClose();
    } else {
      // 戻すときはパッと戻らずにCSS transitionで滑らかに戻す
      setCurrentTranslateY(0);
    }
    
    // リセット
    setTouchStartY(null);
    setIsSwiping(false);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-900/40 backdrop-blur-md animate-[fadeIn_0.2s_ease-out_forwards]" 
      onClick={onClose}
    >
      {/* 基準コンテナ */}
      <div 
        className="relative w-full sm:w-11/12 max-w-5xl h-full sm:h-auto max-h-[100vh] sm:max-h-[90vh] flex flex-col pointer-events-none animate-[scaleUp_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        // 💡 リアルタイムに指の動き（TranslateY）をモーダル全体に反映させる
        style={{
          transform: currentTranslateY > 0 ? `translateY(${currentTranslateY}px)` : undefined,
          transition: !isSwiping ? "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
        }}
      >
        
        {/* 常に右上に固定されるバツボタン */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 sm:-top-4 sm:-right-4 bg-white border-3 border-black text-black w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer z-[120] font-mono select-none pointer-events-auto" 
          aria-label="Close details"
        >
          ✕
        </button>

        {/* ─── 💡 スワイプイベントを付与した白い紙面コンテナ ─── */}
        <div 
          ref={containerRef}
          className="bg-white border-4 border-black rounded-none sm:rounded-3xl w-full h-full overflow-y-auto shadow-none sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col p-6 sm:p-8 md:p-10 pointer-events-auto" 
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 💡 スマホ版のときだけ、最上部に「ここを引っ張れるよ」という無骨なノッチバーを表示 */}
          <div className="w-12 h-1.5 bg-black rounded-full mx-auto mb-4 block sm:hidden opacity-30 flex-shrink-0" />

          {/* 最上部：Tech Stack & Project ボード */}
          <div className="block w-full h-auto min-h-fit relative border-4 border-black rounded-2xl bg-slate-50 p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-8 mt-2 sm:mt-0 flex-shrink-0 animate-[slideDown_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px]" />
            <div className="relative z-10 flex justify-between items-center gap-4 mb-4 select-none">
              <div className="flex flex-wrap items-center gap-2 font-mono">
                <div className="inline-flex flex-wrap gap-1">
                  {Array.isArray(project.platform) ? (
                    project.platform.map((plat) => (
                      <span 
                        key={plat} 
                        className="px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase rounded border border-black bg-black text-white"
                      >
                        {plat}
                      </span>
                    ))
                  ) : (
                    // 💡 過去のデータがまだ文字列のままであってもバグらないためのセーフティ
                    <span className="px-2.5 py-0.5 text-[10px] font-black tracking-widest uppercase rounded border border-black bg-black text-white">
                      {project.platform}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-black text-slate-400 tracking-wider">
                  {project.year} // {project.role}
                </span>
              </div>
              <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0 ${
                project.status === "ONLINE" ? "bg-emerald-400 text-black" : "bg-slate-200 text-slate-600"
              }`}>
                {project.status}
              </span>
            </div>
            <div className="relative z-10 mb-5 pr-8">
              <span className="text-[9px] font-mono font-black tracking-widest text-slate-400 block uppercase mb-1 select-none">
                Project Title
              </span>
              <h4 
                // 👇 一番最後に `[&_span]:text-slate-900` を追加しました！
                className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug uppercase [&_span]:text-slate-900"
                dangerouslySetInnerHTML={{ __html: project.title }}
              />
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2 w-full">
              <div className="flex flex-wrap gap-2 max-w-full sm:max-w-xl">
                {project.tech.map((techName) => (
                  <div 
                    key={techName}
                    className="bg-black text-white text-[10px] sm:text-xs font-mono font-black tracking-widest px-2.5 py-1 rounded-lg border border-slate-800 shadow-[2px_2px_0px_0px_rgba(245,158,11,1)] select-none"
                  >
                    <span className="text-amber-400 mr-0.5">#</span>
                    {techName}
                  </div>
                ))}
              </div>
              {project.githubUrl && (
                <div className="flex-shrink-0 self-start sm:self-auto pt-2 sm:pt-0">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-xl text-xs font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all font-mono tracking-wider cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.166 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GITHUBを見る
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* コンテンツエリア */}
          <div className="space-y-6 text-slate-700 leading-relaxed w-full select-none">
            
            {/* 01 / プロジェクト概要 */}
            <div className="group relative border-2 border-black rounded-none p-5 bg-white overflow-hidden transition-all duration-150 ease-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none opacity-0 scale-98 animate-[staggerIn_0.4s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]">
              <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.09] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_14px] transition-opacity" />
              <div className="relative z-10 border-b-2 border-black pb-1.5 mb-3 flex items-center justify-between">
                <span className="text-[11px] font-mono font-black uppercase tracking-widest text-black px-1.5 py-0.5 rounded transition-colors group-hover:bg-black group-hover:text-white">
                  [SECTION 01 // OVERVIEW]
                </span>
                <span className="text-[9px] font-mono text-slate-400 font-bold tracking-tighter">ISSUE N°01</span>
              </div>
              <p className="relative z-10 font-black text-slate-900 text-base sm:text-lg md:text-xl leading-snug">
                {project.overview}
              </p>
            </div>

            {/* 2カラム配置 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* 02 / 課題の本質 ＆ ソリューション */}
              <div className="group relative border-2 border-black rounded-none p-5 bg-white overflow-hidden flex flex-col transition-all duration-150 ease-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none opacity-0 scale-98 animate-[staggerIn_0.4s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
                <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.09] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_14px] transition-opacity" />
                <div className="relative z-10 border-b-2 border-black pb-1.5 mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-black uppercase tracking-widest text-black px-1.5 py-0.5 rounded transition-colors group-hover:bg-black group-hover:text-white">
                    [SECTION 02 // PROBLEM & SOLUTION]
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 font-bold tracking-tighter">PAGE.02</span>
                </div>
                <p 
                  className="relative z-10 font-medium text-xs sm:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed flex-1 text-justify"
                  dangerouslySetInnerHTML={{ __html: project.problem }} 
                />
              </div>
              
              {/* 03 / アーキテクチャ構成 ＆ UI/UX */}
              <div className="group relative border-2 border-black rounded-none p-5 bg-white overflow-hidden flex flex-col transition-all duration-150 ease-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none opacity-0 scale-98 animate-[staggerIn_0.4s_cubic-bezier(0.16,1,0.3,1)_0.25s_forwards]">
                <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.09] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_14px] transition-opacity" />
                <div className="relative z-10 border-b-2 border-black pb-1.5 mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-black uppercase tracking-widest text-black px-1.5 py-0.5 rounded transition-colors group-hover:bg-black group-hover:text-white">
                    [SECTION 03 // ARCHITECTURE & UX]
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 font-bold tracking-tighter">PAGE.03</span>
                </div>
                <p className="relative z-10 font-medium text-xs sm:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed flex-1 text-justify">
                  {project.architecture}
                </p>
              </div>

            </div>
            
            {/* 04 / 執念のエンジニアリング・ハイライト */}
            <div className="group relative border-2 border-black rounded-none p-5 bg-white overflow-hidden transition-all duration-150 ease-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none opacity-0 scale-98 animate-[staggerIn_0.4s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]">
              <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:12px_12px] transition-opacity" />
              <div className="relative z-10 border-b-2 border-black pb-1.5 mb-3 flex items-center justify-between">
                <span className="text-[11px] font-mono font-black uppercase tracking-widest text-black px-1.5 py-0.5 rounded transition-colors group-hover:bg-black group-hover:text-white">
                  ★ [SECTION 04 // ENGINEERING HIGHLIGHT]
                </span>
                <span className="text-[9px] font-mono text-slate-400 font-bold tracking-tighter">SPECIAL_REPORT</span>
              </div>
              <p className="relative z-10 text-slate-900 font-black text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                {project.highlight}
              </p>
            </div>

            {/* 05 / ギャラリー */}
            {displayImages.length > 0 && (
              <div className="pt-6 space-y-4 w-full opacity-0 scale-98 animate-[staggerIn_0.4s_cubic-bezier(0.16,1,0.3,1)_0.45s_forwards]">
                <div className="border-t-2 border-dashed border-slate-200 pt-6" />
                <span className="inline-block text-[11px] font-mono font-black uppercase tracking-widest text-black border-b-2 border-black pb-1">
                  [SECTION 05 // VISUAL & SCREENSHOTS]
                </span>
                
                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto w-full">
                  {displayImages.map((imgUrl: string, idx: number) => (
                    <div 
                      key={idx} 
                      // 💡 高さを固定せず、中身（画像）の高さに自動で合わせるため `h-auto` に変更
                      className="w-full relative bg-slate-50 rounded-2xl overflow-hidden border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        // 💡 w-full h-auto で、画像本来のアスペクト比を完全に維持して表示します
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* カスタムキーフレーム */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes staggerIn {
          from { opacity: 0; transform: translateY(15px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </div>
  );
}