"use client";

import React, { useEffect, useState, useRef } from "react";

// すべて default export されている想定でインポート
import { AppProject } from "./types/portfolio";
import { PROJECTS_DATA } from "./data/portfolioData";
import Header from "./components/Header";
import Opening from "./components/Opening";
import ProfileSection from "./components/ProfileSection";
import WorkSection from "./components/WorkSection";
import ProjectModal from "./components/ProjectModal";

export function HomeContent() {
  // ─── 状態管理（State） ───
  const [activeSection, setActiveSection] = useState<"profile" | "work" | "none">("none");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<AppProject | null>(null);
  
  // オープニングアニメーション用
  const [isOpening, setIsOpening] = useState(true);
  const [isOutline, setIsOutline] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(false);


  // スクロール監視用のRef
  const profileRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  // ─── 💡 修正ポイント：スマホの処理遅延に100%耐える安全タイマー ───
  useEffect(() => {
    const outlineTimer = setTimeout(() => {
      setIsOutline(true);
    }, 400);

    const fadeOutTimer = setTimeout(() => {
      setIsFadeOut(true);
    }, 1600);

    const removeTimer = setTimeout(() => {
      setIsOpening(false);
    }, 2300);

    return () => {
      clearTimeout(outlineTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // ─── Intersection Observer によるスクロール位置監視（スマホでも引っかかるガバガバ判定に調整） ───
  useEffect(() => {
    if (isOpening) return;

    const observerOptions = {
      root: null,
      // スマホの縦長画面でも中央付近をかすめたら確実に検知するベストな余白設定
      rootMargin: "-25% 0px -25% 0px", 
      // 0.05（全体の5%でも入ったら即座に検知）に下げて、スマホの高速スクロールでの発火漏れを防止
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "profile") setActiveSection("profile");
          if (entry.target.id === "work") setActiveSection("work");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (profileRef.current) observer.observe(profileRef.current);
    if (workRef.current) observer.observe(workRef.current);

    return () => observer.disconnect();
  }, [isOpening]);

  // ─── スライダー・モーダル操作用ロジック ───
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("none");
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PROJECTS_DATA.length - 1 ? 0 : prev + 1));
  };

  // モーダル表示時に背面スクロールをロックする
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  return (
    <div id="top" className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased flex flex-col scroll-smooth relative tracking-wide selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* ─── 💡 修正ポイント：1. オープニング演出（最強のバリア対策ラッパー） ─── */}
      {isOpening && (
        <Opening
          isOutline={isOutline}
          isFadeOut={isFadeOut}
        />
      )}

{/* 固定ヘッダー */}
      {/* 固定ヘッダー */}
      <Header activeSection={activeSection} scrollToTop={scrollToTop} />

      {/* ─── メインコンテンツ ─── */}
      {/* 💡 修正：pt（上の余白）を増やしてヘッダーとの間隔を空け、一括の space-y は削除しました */}
      <main className="flex-grow pt-28 sm:pt-40 md:pt-44 w-full relative z-0 flex flex-col">
        
        {/* 1. 制作実績セクション（WORK） */}
        <div id="work" ref={workRef} className="scroll-mt-24 sm:scroll-mt-32">
          <WorkSection 
            activeSection={activeSection}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            handlePrev={handlePrev}
            handleNext={handleNext}
            onSelectProject={setSelectedProject}
          />
        </div>

        {/* 2. プロフィールセクション（PROFILE） */}
        {/* 💡 修正：mt-12〜24 を指定して、WORKとの間の空きすぎだったスキマをキュッと詰めました */}
        <div id="profile" ref={profileRef} className="scroll-mt-24 sm:scroll-mt-32 mt-12 sm:mt-20 md:mt-24">
          <ProfileSection activeSection={activeSection} />
        </div>

        {/* 3. 共通フッター */}
        {/* 💡 修正：PROFILEのすぐ下に綺麗に収まるよう、上のマージン（mt-16〜32）を調整 */}
        <footer className="w-full max-w-5xl mx-auto px-4 sm:px-12 md:px-24 py-12 sm:py-20 mt-16 sm:mt-28 md:mt-32 border-t-4 border-black text-[10px] sm:text-xs font-bold text-slate-400 flex justify-between select-none font-mono">
          <p>© 2026 KOTARO TAKAHASHI.</p>
          <a href="#top" onClick={scrollToTop} className="text-slate-800 hover:text-blue-600 transition-colors tracking-widest">
            BACK TO TOP ↑
          </a>
        </footer>
      </main>

      {/* 6. モーダルポップアップ */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}