"use client";

import React, { useState, useRef } from "react";
import { AppProject } from "../types/portfolio";

interface ProjectModalProps {
  project: AppProject;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const displayImages = (project as any).galleryImages || [project.imageUrl];

  // ─── 画像拡大用の状態管理 ───
  const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);

  // ─── スワイプ関連の状態管理 ───
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [currentTranslateY, setCurrentTranslateY] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (activeImageUrl) return;
    const scrollContainer = containerRef.current;
    if (scrollContainer && scrollContainer.scrollTop === 0) {
      setTouchStartY(e.touches[0].clientY);
      setIsSwiping(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping || touchStartY === null) return;
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY;
    if (deltaY > 0) {
      setCurrentTranslateY(deltaY * 0.8);
      if (e.cancelable) e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    if (currentTranslateY > 80) {
      onClose();
    } else {
      setCurrentTranslateY(0);
    }
    setTouchStartY(null);
    setIsSwiping(false);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-900/50 backdrop-blur-md animate-[fadeIn_0.2s_ease-out_forwards]" 
      onClick={onClose}
    >
      <div 
        className="relative w-full sm:w-11/12 max-w-6xl h-full sm:h-auto max-h-[100vh] sm:max-h-[92vh] flex flex-col pointer-events-none animate-[scaleUp_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        style={{
          transform: currentTranslateY > 0 ? `translateY(${currentTranslateY}px)` : undefined,
          transition: !isSwiping ? "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)" : "none"
        }}
      >
        {/* クローズボタン */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 sm:-top-3 sm:-right-3 bg-white border-3 border-black text-black w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer z-[120] pointer-events-auto"
        >
          ✕
        </button>

        {/* メイン紙面（スクロールコンテナ） */}
        <div 
          ref={containerRef}
          className="bg-white border-4 border-black rounded-none sm:rounded-2xl w-full h-full overflow-y-auto shadow-none sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col p-4 sm:p-8 lg:p-10 pointer-events-auto select-none" 
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* スマホ版ノッチ */}
          <div className="w-12 h-1.5 bg-black rounded-full mx-auto mb-4 block sm:hidden opacity-20 flex-shrink-0" />

          <div className="space-y-6 w-full">
            
            {/* ─── HEADER SECTION ─── */}
            <div className="border-b-4 border-black pb-5 mt-2 sm:mt-0">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] sm:text-xs font-black">
                  <span className="px-2 py-0.5 bg-black text-white rounded">
                    {Array.isArray(project.platform) ? project.platform[0] : project.platform}
                  </span>
                  <span className="text-slate-400">{project.year} // {project.role}</span>
                </div>
                <span className={`text-[9px] sm:text-[10px] font-mono font-black px-2 py-0.5 rounded border-2 border-black ${
                  project.status === "ONLINE" ? "bg-emerald-400" : "bg-slate-200 text-slate-600"
                }`}>
                  {project.status}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-2.5" dangerouslySetInnerHTML={{ __html: project.title }} />
              <p className="text-xs sm:text-sm lg:text-base font-bold text-slate-700 leading-snug bg-slate-50 border-l-4 border-black p-3 rounded-r-lg">{project.overview}</p>

              {/* 技術タグ & リンク */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((techName) => (
                    <span key={techName} className="bg-slate-100 text-slate-800 text-[9px] sm:text-[10px] font-mono font-black px-2 py-0.5 rounded border border-slate-300">
                      #{techName}
                    </span>
                  ))}
                </div>
                
                {/* ─── 📱 スマホアプリ用リンクボタンエリア ─── */}
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto pointer-events-auto">
                  
                  {/* ① 利用規約ボタン */}
                  {(project as any).termsUrl && (
                    <a 
                      href={(project as any).termsUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 sm:flex-none text-center px-3 py-1.5 bg-cyan-400 border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-mono text-black cursor-pointer"
                    >
                      TERMS →
                    </a>
                  )}

                  {/* ② プライバシーポリシーボタン */}
                  {(project as any).privacyUrl && (
                    <a 
                      href={(project as any).privacyUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 sm:flex-none text-center px-3 py-1.5 bg-indigo-300 border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-mono text-black cursor-pointer"
                    >
                      PRIVACY →
                    </a>
                  )}

                  {/* ③ GitHubボタン */}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 sm:flex-none text-center px-3 py-1.5 bg-white border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-mono text-slate-900 cursor-pointer"
                    >
                      GITHUB →
                    </a>
                  )}
                </div>
              </div>
            </div> {/* ⬅️ ここに正しい位置で閉じタグを修復しました */}

            {/* ─── 01. GALLERY SECTION ─── */}
            {displayImages.length > 0 && (
              <div className="space-y-2">
                <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                  // 01. GALLERY <span className="text-[9px] text-amber-500 lowercase normal-case font-bold ml-1">(click to enlarge)</span>
                </span>
                <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-x-visible pb-3 sm:pb-0 scrollbar-none snap-x snap-mandatory">
                  {displayImages.slice(0, 3).map((imgUrl: string, idx: number) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveImageUrl(imgUrl)}
                      className="w-[280px] sm:w-full flex-shrink-0 snap-center relative h-48 sm:h-56 lg:h-64 bg-slate-100 rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-zoom-in active:scale-[0.98] transition-transform"
                    >
                      <img 
                        src={imgUrl} 
                        alt="screenshot" 
                        className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-[1.03]" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─── 02. METRICS & ROLES SECTION ─── */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                // 02. METRICS & ROLES
              </span>
              <div className="bg-slate-50 border-2 border-black rounded-xl p-4 lg:p-5 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="md:col-span-2 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white border border-slate-300 p-2 rounded-lg flex flex-col justify-center">
                    <span className="block text-[9px] lg:text-[10px] font-mono font-black text-slate-400 uppercase">DURATION</span>
                    <span className="text-xs lg:text-sm font-black text-black">{(project as any).duration || "3日間"}</span>
                  </div>
                  <div className="bg-white border border-slate-300 p-2 rounded-lg flex flex-col justify-center">
                    <span className="block text-[9px] lg:text-[10px] font-mono font-black text-slate-400 uppercase">TEAM</span>
                    <span className="text-xs lg:text-sm font-black text-black">{(project as any).teamSize || "4名"}</span>
                  </div>
                  <div className="bg-white border border-slate-300 p-2 rounded-lg flex flex-col justify-center">
                    <span className="block text-[9px] lg:text-[10px] font-mono font-black text-slate-400 uppercase">AWARD</span>
                    <span className="text-[10px] lg:text-[11px] font-black text-emerald-600 leading-tight">{(project as any).achievement || "全国出場"}</span>
                  </div>
                </div>
                <div className="md:col-span-3 flex items-center justify-between border-t-2 md:border-t-0 md:border-l border-dashed border-slate-300 pt-3 md:pt-0 md:pl-4 lg:pl-6">
                  <div>
                    <span className="block text-[9px] lg:text-[10px] font-mono font-black text-slate-400 uppercase mb-1">// MY ROLES</span>
                    <div className="flex flex-wrap gap-1">
                      {((project as any).myRoles || [project.role]).map((r: string) => (
                        <span key={r} className="bg-white border border-black text-[9px] lg:text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <span className="block text-[8px] lg:text-[9px] font-mono font-black text-slate-400">CONTRIBUTION</span>
                    <span className="text-xl lg:text-2xl font-mono font-black text-blue-600">{(project as any).contributionRatio || "70%"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── 03. PROJECT OVERVIEW SECTION ─── */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                // 03. PROJECT OVERVIEW
              </span>
              <div className="bg-grid-paper border-2 border-black rounded-xl p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-mono font-black text-rose-600 flex items-center gap-1">
                      ✕ 解決した課題・背景
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed text-justify px-1" dangerouslySetInnerHTML={{ __html: project.problem }} />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs sm:text-sm font-mono font-black text-emerald-600 flex items-center gap-1">
                      ✓ 実装した主な機能
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed text-justify whitespace-pre-wrap px-1">
                      {(project as any).features || "・主なシステム機能一覧が入ります。"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
              
            {/* ─── 04. ENGINEERING HIGHLIGHT SECTION ─── */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                // 04. ENGINEERING HIGHLIGHT
              </span>
              <div className="bg-slate-900 text-white rounded-xl p-4 lg:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed text-justify mb-4">
                  {project.highlight}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] sm:text-[11px] font-mono">
                  <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <span className="block text-amber-400 font-bold mb-0.5">【課題】</span>
                    {(project as any).highlightProblem || "課題の定義"}
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <span className="block text-cyan-400 font-bold mb-0.5">【実装】</span>
                    {(project as any).highlightApproach || "技術的アプローチ"}
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <span className="block text-emerald-400 font-bold mb-0.5">【工夫】</span>
                    {(project as any).highlightBenefit || "得られた効果・メリット"}
                  </div>
                </div>
              </div>
            </div>

            {/* ─── 05. SYSTEM ARCHITECTURE SECTION ─── */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                // 05. SYSTEM ARCHITECTURE
              </span>
              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-[11px] font-mono font-bold text-center mb-3">
                  <div className="px-2 py-0.5 bg-black text-white rounded">User</div>
                  <div className="text-slate-300 font-black rotate-90 sm:rotate-0">→</div>
                  <div className="px-2 py-0.5 bg-white border border-slate-300 rounded">{(project.tech && project.tech[1]) || "Frontend"}</div>
                  <div className="text-slate-300 font-black rotate-90 sm:rotate-0">→</div>
                  <div className="px-2 py-0.5 bg-white border border-slate-300 rounded">{(project.tech && project.tech[0]) || "Backend"}</div>
                  <div className="text-slate-300 font-black rotate-90 sm:rotate-0">→</div>
                  <div className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded">Database</div>
                </div>
                <p className="font-medium text-[10px] lg:text-[11px] text-slate-500 text-justify leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 画像拡大ライトボックス */}
      {activeImageUrl && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out animate-[fadeIn_0.15s_ease-out_forwards]"
          onClick={() => setActiveImageUrl(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[85vh] bg-white border-4 border-black p-2 sm:p-3 rounded-none sm:rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-[scaleUp_0.2s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveImageUrl(null)}
              className="absolute -top-3 -right-3 bg-rose-400 border-2 border-black text-black w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer z-[210]"
            >
              ✕
            </button>
            <img 
              src={activeImageUrl} 
              alt="Enlarged screenshot" 
              className="max-w-full max-h-[80vh] object-contain rounded-none sm:rounded-xl"
            />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.97) translateY(8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        
        .bg-grid-paper {
          background-color: #ffffff;
          background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}} />
    </div>
  );
}