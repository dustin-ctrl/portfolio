"use client";

import React, { ForwardedRef, useState, useEffect } from "react";
import Image from "next/image";
import { AppProject } from "@/app/types/portfolio";
import { PROJECTS_DATA } from "@/app/data/portfolioData";

interface WorkSectionProps {
  activeSection: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  handlePrev: () => void;
  handleNext: () => void;
  onSelectProject: (project: AppProject) => void;
}

type Category = "ALL" | "WEB" | "MOBILE";

const WorkSection = React.forwardRef(
  (
    { activeSection, currentIndex, setCurrentIndex, onSelectProject }: WorkSectionProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);

    const filteredProjects = PROJECTS_DATA.filter((project) => {
      if (selectedCategory === "ALL") return true;

      const platforms = (Array.isArray(project.platform) ? project.platform : [project.platform])
        .map((p) => String(p).toLowerCase());

      const lowerCategory = selectedCategory.toLowerCase();

      if (lowerCategory === "mobile") {
        return platforms.includes("mobile") || platforms.includes("android");
      }

      return platforms.includes(lowerCategory);
    });

    useEffect(() => {
      setCurrentIndex(0);
    }, [selectedCategory, setCurrentIndex]);

    const localHandlePrev = () => {
      if (filteredProjects.length === 0) return;
      setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    };

    const localHandleNext = () => {
      if (filteredProjects.length === 0) return;
      setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStartX(e.touches[0].clientX);
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
      if (touchStartX === null || touchStartY === null) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          localHandlePrev();
        } else {
          localHandleNext();
        }
      }

      setTouchStartX(null);
      setTouchStartY(null);
    };

    return (
      <section id="work" ref={ref} className="pt-2 pb-6 sm:pb-16 scroll-mt-16 w-full flex flex-col items-center overflow-hidden relative">
        
        {/* ヘッダーエリア */}
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-12 md:px-16 mb-4 sm:mb-8 select-none flex flex-row flex-nowrap items-center justify-between gap-3 shrink-0">
          <div className="relative pb-1.5 sm:pb-4 shrink-0">
            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase transition-all duration-700 ease-out ${activeSection === "work" ? "text-transparent [text-stroke:1.5px_black] md:[text-stroke:2.5px_black] [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2.5px_black]" : "text-slate-900"}`}>
              WORK
            </h2>
            <div className={`absolute bottom-0 left-0 h-1 sm:h-1.5 bg-black transition-all duration-700 ease-out ${activeSection === "work" ? "w-12 sm:w-36" : "w-6 sm:w-16"}`} />
          </div>

          <div className="flex flex-row flex-nowrap justify-end gap-1.5 sm:gap-2.5 font-mono text-[10px] sm:text-xs font-black tracking-wider sm:tracking-widest shrink-0 mt-1 flex-1">
            {(["ALL", "WEB", "MOBILE"] as Category[]).map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`border-2 sm:border-3 border-black px-2 py-0.5 sm:px-4 sm:py-1.5 transition-all duration-150 uppercase shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0,1)] cursor-pointer rounded-none shrink-0 ${
                    isActive ? "bg-black text-white" : "bg-white text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 💡 メインレイアウトコンテナ */}
        <div className="w-full max-w-6xl mx-auto flex flex-row items-center justify-center px-4 md:px-8 gap-4 md:gap-8 relative">
          
          {/* 💡 左矢印：ホバー時のネオブルアニメーションを完全に復活 */}
          {filteredProjects.length > 0 && (
            <button 
              onClick={localHandlePrev} 
              className="hidden md:flex shrink-0 z-40 bg-white border-2 border-black text-black w-12 h-12 rounded-full items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer" 
              aria-label="Previous Project"
            >
              ←
            </button>
          )}

          {filteredProjects.length === 0 ? (
            <div className="font-mono text-sm font-black text-slate-400 tracking-wider flex-1 text-center py-20">
              NO PROJECTS FOUND IN THIS CATEGORY.
            </div>
          ) : (
            /* 💡 中央カードエリア：grid を使って高さを動的に自動追従させ、シャドウが切れないよう px-4 py-3 を確保 */
            <div className="grid grid-cols-1 grid-rows-1 flex-1 w-full max-w-[340px] xs:w-[90vw] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[680px] px-4 py-3 relative">
              {filteredProjects.map((project, index) => {
                let offset = index - currentIndex;
                const total = filteredProjects.length;
                if (offset < -total / 2) offset += total;
                if (offset > total / 2) offset -= total;
                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                
                // 💡 非アクティブカードを滑らかに左右へ逃がすスタイル定義
                let transformStyle = "opacity-0 pointer-events-none scale-75 z-0 invisible";
                if (isCenter) transformStyle = "opacity-100 z-30 scale-100 translate-x-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] cursor-pointer visible";
                else if (isLeft) transformStyle = "opacity-25 z-10 scale-85 -translate-x-[42%] sm:-translate-x-[38%] md:-translate-x-[28%] pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] visible";
                else if (isRight) transformStyle = "opacity-25 z-10 scale-85 translate-x-[42%] sm:translate-x-[38%] md:translate-x-[28%] pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] visible";
                
                return (
                  <section 
                    key={project.id} 
                    onClick={() => isCenter && onSelectProject(project)} 
                    onTouchStart={isCenter ? handleTouchStart : undefined}
                    onTouchEnd={isCenter ? handleTouchEnd : undefined}
                    /* 💡 col-start-1 row-start-1 で全カードを同じ位置に重ねることで、アクティブなカードの高さに親が自動追従します */
                    className={`col-start-1 row-start-1 bg-white border-3 sm:border-4 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col justify-between transition-all duration-500 ease-in-out origin-center group touch-pan-y
                      min-h-[420px] xs:min-h-[430px] sm:min-h-[470px] md:min-h-[510px] ${transformStyle}`}
                  >
                    
                    {/* カード内上部 */}
                    <div className="flex-1 flex flex-col min-h-0 justify-start">
                      
                      {/* メタ情報 */}
                      <div className="shrink-0 mb-2">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs sm:text-sm font-mono text-slate-950 font-black">0{index + 1} // </span>
                            <div className="inline-flex flex-wrap gap-1">
                              {Array.isArray(project.platform) ? (
                                project.platform.map((plat) => (
                                  <span key={plat} className="px-2 py-0.5 text-[9px] sm:text-[1xs] font-black tracking-widest uppercase rounded border-2 border-black bg-black text-white">
                                    {plat}
                                  </span>
                                ))
                              ) : (
                                <span className="px-2 py-0.5 text-[9px] sm:text-xs font-black tracking-widest uppercase rounded border-2 border-black bg-black text-white">
                                  {project.platform}
                                </span>
                              )}
                            </div>
                            {project.status === "ONLINE" ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] sm:text-xs font-black tracking-wider rounded border-2 border-black bg-emerald-50 text-emerald-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />ONLINE</span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] sm:text-xs font-black tracking-wider rounded border-2 border-black bg-slate-100 text-slate-500"><span className="w-1.5 h-1.5 rounded-full bg-slate-400" />ARCHIVE</span>
                            )}
                          </div>
                          <span className="text-[10px] sm:text-sm font-mono font-black text-slate-400">{project.year}</span>
                        </div>
                        
                        <h3 
                          className="font-mono font-sans text-xl sm:text-2xl md:text-4xl font-black text-slate-900 tracking-[-0.05em] line-clamp-1 leading-none group-hover:text-amber-500 transition-colors mb-0"
                          dangerouslySetInnerHTML={{ __html: project.title }}
                        />    

                        {/* TITLEの直下にSUBTITLEを表示 */}
                        {(project as any).subtitle && (
                          <p className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 tracking-wide mt-1 line-clamp-1 uppercase">
                            { (project as any).subtitle }
                          </p>
                        )}
                      </div>
                      
                      {/* 画像エリア */}
                      <div className="w-full aspect-video relative bg-white rounded-lg sm:rounded-xl overflow-hidden border-2 border-black mb-2.5 shrink-0 mx-auto">
                        <Image 
                          src={project.imageUrl} 
                          alt={project.title} 
                          fill 
                          sizes="(max-w-md) 88vw, 720px" 
                          className={`group-hover:scale-[1.03] transition-transform duration-500
                            ${(Array.isArray(project.platform) ? project.platform : [project.platform]).some(p => String(p).toLowerCase().includes("mobile")) ? "object-contain p-1.5" : "object-cover object-center"}`} 
                          unoptimized={project.imageUrl.startsWith("http")} 
                        />
                      </div>

                      {/* 表面の「概要」 */}
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed px-0.5 overflow-hidden transition-all duration-300 line-clamp-5 md:line-clamp-3">
                        {project.overview}
                      </p>
                    </div>

                    {/* カード内下部コントロール */}
                    <div className="shrink-0 mt-3 flex justify-between items-center pt-2.5 border-t border-dashed border-slate-300">
                      <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 max-w-[65%]">
                        {project.comments?.map((comment) => (
                          <span key={comment} className="text-[10px] sm:text-xs font-sans text-slate-900 font-extrabold tracking-wide">#{comment}</span>
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-sm font-black tracking-wider uppercase text-slate-950 group-hover:text-amber-500 flex items-center gap-1 font-sans group-hover:translate-x-1 transition-all">VIEW MORE <span className="text-xs sm:text-sm">→</span></span>
                    </div>

                  </section>
                );
              })}
            </div>
          )}

          {/* 💡 右矢印：ホバー時のネオブルアニメーションを完全に復活 */}
          {filteredProjects.length > 0 && (
            <button 
              onClick={localHandleNext} 
              className="hidden md:flex shrink-0 z-40 bg-white border-2 border-black text-black w-12 h-12 rounded-full items-center justify-center font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer" 
              aria-label="Next Project"
            >
              →
            </button>
          )}
        </div>

        {/* 💡 下部インジケーター：親の高さが動的に追従するため、綺麗にカードの下側に配置されます */}
        {filteredProjects.length > 0 && (
          <div className="flex items-center gap-6 mt-6 select-none shrink-0 z-40 relative">
            <button 
              onClick={localHandlePrev} 
              className="md:hidden bg-white border-2 border-black text-black w-10 h-10 rounded-full flex items-center justify-center font-black text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer" 
              aria-label="Previous Project"
            >
              ←
            </button>

            <div className="flex gap-2">
              {filteredProjects.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)} 
                  className={`h-2 rounded-full border-2 border-black transition-all duration-300 cursor-pointer ${i === currentIndex ? "w-6 bg-black" : "w-2 bg-white"}`} 
                  aria-label={`Go to slide ${i + 1}`} 
                />
              ))}
            </div>

            <button 
              onClick={localHandleNext} 
              className="md:hidden bg-white border-2 border-black text-black w-10 h-10 rounded-full flex items-center justify-center font-black text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer" 
              aria-label="Next Project"
            >
              →
            </button>
          </div>
        )}

      </section>
    );
  }
);

WorkSection.displayName = "WorkSection";

export default WorkSection;