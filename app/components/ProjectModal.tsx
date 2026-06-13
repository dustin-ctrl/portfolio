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
            {/* バツボタンを避ける pr-12 を維持 */}
            <div className="border-b-4 border-black pb-5 mt-2 sm:mt-0 pr-12 sm:pr-0">
              
              {/* 要素を左から右へ1列に並べ、指定された順番で完全に統一 */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-[10px] sm:text-xs font-black mb-3">
                {/* ① MOBILE などのプラットフォーム */}
                <span className="px-2 py-0.5 bg-black text-white rounded whitespace-nowrap">
                  {Array.isArray(project.platform) ? project.platform[0] : project.platform}
                </span>

                {/* ② OFFLINE / ONLINE バッジ */}
                <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded border-2 border-black whitespace-nowrap ${
                  project.status === "ONLINE" ? "bg-emerald-400" : "bg-slate-200 text-slate-600"
                }`}>
                  {project.status}
                </span>

                {/* ③ 2026 // 個人開発 などのテキスト */}
                <span className="text-slate-400 whitespace-nowrap">
                  {project.year} // {project.role}
                </span>
              </div>

              {/* 💡 スマホでも埋もれないよう、タイトルサイズをガツンと大きくチューニング */}
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-[-0.04em] leading-[1.1]" dangerouslySetInnerHTML={{ __html: project.title }} />
              
              {/* 💡 修正ポイント: TITLEの直下にSUBTITLEを追加 */}
              {(project as any).subtitle && (
                <p className="text-xs sm:text-sm font-mono font-bold text-slate-400 tracking-wide mt-1.5 mb-3 uppercase">
                  { (project as any).subtitle }
                </p>
              )}

              <p className="text-xs sm:text-sm lg:text-base font-bold text-slate-700 leading-snug bg-slate-50 border-l-4 border-black p-3 rounded-r-lg mt-3">{project.overview}</p>

              {/* 技術タグ & リンク */}
              {/* 💡 修正ポイント: 全体を囲んでいた無駄な div を整理し、ボタンがある時だけ適切な余白を作るように変更 */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((techName) => (
                    <span key={techName} className="bg-slate-100 text-slate-800 text-[9px] sm:text-[10px] font-mono font-black px-2 py-0.5 rounded border border-slate-300">
                      #{techName}
                    </span>
                  ))}
                </div>
                
                {/* ─── 📱 スマホアプリ用リンクボタンエリア ─── */}
                {/* 💡 修正ポイント: ボタンが1つでも存在する場合のみ、上部に余白（mt-4）を持ったコンテナを表示する */}
                {((project as any).termsUrl || (project as any).privacyUrl || (project.githubUrl && project.githubUrl.trim().length > 0)) && (
                  <div className="inline-flex flex-wrap items-center gap-2.5 pointer-events-auto mt-4">
                    
                    {/* ① 利用規約ボタン */}
                    {(project as any).termsUrl && (
                      <a 
                        href={(project as any).termsUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-center px-4 py-1.5 bg-cyan-400 border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-mono text-black cursor-pointer whitespace-nowrap"
                      >
                        TERMS 
                      </a>
                    )}

                    {/* ② プライバシーポリシーボタン */}
                    {(project as any).privacyUrl && (
                      <a 
                        href={(project as any).privacyUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-center px-4 py-1.5 bg-indigo-300 border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-mono text-black cursor-pointer whitespace-nowrap"
                      >
                        PRIVACY 
                      </a>
                    )}

                    {/* ③ GitHubボタン */}
                    {project.githubUrl && project.githubUrl.trim().length > 0 && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-center px-4 py-1.5 bg-white border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-mono text-slate-900 cursor-pointer whitespace-nowrap"
                      >
                        GITHUB 
                      </a>
                    )}
                    {/* ④ 💡 新設: LIVE SITE ボタン（ONLINEプロジェクト用） */}
                    {(project as any).linkUrl && (project as any).linkUrl.trim().length > 0 && (
                      <a 
                        href={(project as any).linkUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-center px-4 py-1.5 bg-lime-400 border-2 border-black rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-mono text-black cursor-pointer whitespace-nowrap"
                      >
                        LIVE SITE ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* ─── 01. GALLERY SECTION ─── */}
            {displayImages.length > 0 && (
              <div className="space-y-2">
                <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                  01. GALLERY <span className="text-[9px] text-amber-500 lowercase normal-case font-bold ml-1">(click to enlarge)</span>
                </span>
                
                {/* 💡 横スクロールと3列グリッドを両立する魔法のコンテナ */}
                <div className="flex sm:grid sm:grid-cols-3 gap-4 overflow-x-auto sm:overflow-x-visible pb-3 sm:pb-0 scrollbar-none snap-x snap-mandatory">
                  {displayImages.slice(0, 3).map((imgUrl: string, idx: number) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveImageUrl(imgUrl)}
                      className="w-[280px] sm:w-full flex-shrink-0 snap-center relative aspect-video bg-slate-50 rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center cursor-zoom-in active:scale-[0.98] transition-transform"
                    >
                      <img 
                        src={imgUrl} 
                        alt="screenshot" 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─── 02. METRICS & ROLES SECTION ─── */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                02. METRICS & ROLES
              </span>
              
              <div className="bg-slate-50 border-2 border-black rounded-xl p-4 lg:p-5 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                
                {/* 📊 左側ブロック：METRICS（全体の2/5幅） */}
                <div className="md:col-span-2 flex flex-col justify-start">
                  {/* 💡 メトリクス全体のタイトルラベル */}
                  <span className="block text-[10px] sm:text-xs font-mono font-black text-slate-400 uppercase tracking-wider mb-2">
                    METRICS
                  </span>
                  
                  {/* 3つのボックスコンテナ */}
                  <div className="grid grid-cols-3 gap-2 text-center flex-1">
                    {/* ① DURATION */}
                    <div className="bg-white border border-slate-300 p-2 rounded-lg flex flex-col justify-between min-h-[58px] sm:min-h-[62px]">
                      <span className="block text-[9px] lg:text-[10px] font-mono font-black text-slate-400 uppercase leading-none mb-1">DURATION</span>
                      <span className="text-xs lg:text-sm font-black text-black mt-auto flex items-center justify-center flex-1">
                        {(project as any).duration || "3日間"}
                      </span>
                    </div>

                    {/* ② TEAM */}
                    <div className="bg-white border border-slate-300 p-2 rounded-lg flex flex-col justify-between min-h-[58px] sm:min-h-[62px]">
                      <span className="block text-[9px] lg:text-[10px] font-mono font-black text-slate-400 uppercase leading-none mb-1">TEAM</span>
                      <span className="text-xs lg:text-sm font-black text-black mt-auto flex items-center justify-center flex-1">
                        {(project as any).teamSize || "4名"}
                      </span>
                    </div>

                    {/* ③ AWARD */}
                    <div className="bg-white border border-slate-300 p-2 rounded-lg flex flex-col justify-between min-h-[58px] sm:min-h-[62px]">
                      <span className="block text-[9px] lg:text-[10px] font-mono font-black text-slate-400 uppercase leading-none mb-1">AWARD</span>
                      <span className="text-[10px] sm:text-xs lg:text-sm font-black text-emerald-600 leading-tight mt-auto flex items-center justify-center flex-1">
                        {(project as any).achievement || "全国出場"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 🛠️ 右側ブロック：MY ROLES（全体の3/5幅） */}
                <div className="md:col-span-3 flex flex-col justify-start border-t-2 md:border-t-0 md:border-l border-dashed border-slate-300 pt-3 md:pt-0 md:pl-4 lg:pl-6">
                  {/* 💡 ロール全体のタイトルラベル */}
                  <span className="block text-[10px] sm:text-xs font-mono font-black text-slate-400 uppercase tracking-wider mb-2">
                    MY ROLES & CONTRIBUTION
                  </span>

                  {/* ロール詳細コンテナ */}
                  <div className="bg-white border border-slate-300 p-3 rounded-lg flex items-center justify-between min-h-[58px] sm:min-h-[62px] flex-1">
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {((project as any).myRoles || [project.role]).map((r: string) => (
                          <span key={r} className="bg-slate-50 border border-slate-300 text-[9px] lg:text-[10px] font-bold px-1.5 py-0.5 rounded">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <span className="block text-[8px] lg:text-[9px] font-mono font-black text-slate-400">RATIO</span>
                      <span className="text-xl lg:text-2xl font-mono font-black text-blue-600">{(project as any).contributionRatio || "70%"}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ─── 03. PROJECT OVERVIEW SECTION ─── */}
            <div className="space-y-2">
              <span className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider px-1">
                03. PROJECT OVERVIEW
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
                04. ENGINEERING HIGHLIGHT
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
                05. SYSTEM ARCHITECTURE
              </span>
              <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex flex-row items-center justify-start gap-x-3 md:gap-x-4 py-6 px-4 bg-slate-50 rounded-lg border border-slate-200 text-[11px] font-mono font-bold text-center mb-3 w-full overflow-x-auto overflow-y-hidden select-none custom-scrollbar whitespace-nowrap">
                 {project.architectureFlow && project.architectureFlow.map((step, index) => {
                  // 1. 一旦安全に配列自体を変数に代入する
                  const flow = project.architectureFlow;
                  // 2. 配列が存在する場合のみ次の要素を取得（存在しない場合は undefined）
                  const nextStep = flow ? flow[index + 1] : undefined;
                  const isNextApi = nextStep && (nextStep.label.toLowerCase().includes('api') || nextStep.label.toLowerCase().includes('storekit'));

                  return (
                    <React.Fragment key={index}>
                        <div className={`flex flex-col justify-center items-center flex-shrink-0 transition-all duration-200 ${
                          step.type === 'user' 
                            ? 'w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-slate-800 text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] aspect-square p-2' :
                          step.type === 'platform' 
                            ? 'px-3 py-1.5 rounded-full bg-slate-200 border border-dashed border-slate-400 text-slate-600 font-medium' :
                          step.type === 'app' 
                            ? 'relative px-3 py-3 rounded-xl bg-amber-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black ring-2 md:ring-4 ring-amber-400/30 font-black' :
                          step.type === 'external' || step.type === ('core' as any)
                            ? 'px-3 py-2 rounded-md bg-blue-600 border border-blue-700 text-white tracking-wide shadow-sm' :
                          'px-2 py-1 bg-white border border-slate-300 text-slate-700'
                        }`}>
                          <span className="leading-tight text-[10px] sm:text-[9px] md:text-[10px] lg:text-[11px] whitespace-nowrap px-0.5">
                            {step.label}
                          </span>
                        </div>

                      {flow && index < flow.length - 1 && (
                        <div className="font-black text-[9px] md:text-[10px] text-slate-400 px-1 flex items-center justify-center flex-shrink-0 whitespace-nowrap">
                          {step.type === 'app' && isNextApi
                              ? <span className="text-[8px] md:text-[10px]">◀ REST API ▶</span> 
                              : '➔'}
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
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