"use client";

import Image from "next/image";
import React, { ForwardedRef, useState } from "react";

interface ProfileSectionProps {
  activeSection: string;
}

const ProfileSection = React.forwardRef(
  ({ activeSection }: ProfileSectionProps, ref: ForwardedRef<HTMLDivElement>) => {
    
    // 💡 アイコン中心・バッジトリガーのクラッカーアニメーション用
    const [isPopped, setIsPopped] = useState(false);

    const handlePop = (e: React.MouseEvent | React.TouchEvent) => {
      e.stopPropagation();
      if (isPopped) return; 
      setIsPopped(true);
      
      // 600ms後にクラッカーを片付ける（再発火可能にする）
      setTimeout(() => setIsPopped(false), 600);
    };

    // 💡 02 / STORY 付近での1回限りのアニメーション発火管理
    const [storyFired, setStoryFired] = useState(false);
    const storyRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (storyFired) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // 02セクションが画面下部から10%以上入ってきたら発火
          if (entry.isIntersecting) {
            setStoryFired(true);
          }
        },
        { 
          rootMargin: "0px 0px -10% 0px", 
          threshold: 0.1 
        }
      );

      if (storyRef.current) {
        observer.observe(storyRef.current);
      }

      return () => observer.disconnect();
    }, [storyFired]);

    return (
      <section id="profile" ref={ref} className="pt-4 sm:pt-32 pb-0 scroll-mt-24 sm:scroll-mt-32 flex flex-col items-center w-full overflow-hidden relative">
        
        {/* セクションタイトル（WORKとシンクロした中央寄せベースの左揃え） */}
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-24 mb-6 sm:mb-14 text-left select-none self-start shrink-0">
          <h2 
            className={`text-4xl sm:text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase transition-all duration-700 ease-out ${
              activeSection === "profile" 
                ? "text-transparent [text-stroke:1.5px_black] md:[text-stroke:2.5px_black] [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2.5px_black]" 
                : "text-slate-900"
            }`}
          >
            PROFILE
          </h2>
          
          <div 
            className={`h-1 sm:h-1.5 bg-black mt-2 sm:mt-4 transition-all duration-700 ease-out ${
              activeSection === "profile" ? "w-20 sm:w-36" : "w-10 sm:w-16"
            }`} 
          />

          {/* ENGINEER & METTYA TIGERS FAN */}
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm font-mono font-black tracking-widest text-slate-900 uppercase">
            <span>FULL-STACK ENGINEER</span>
            <span className="text-slate-300">/</span>
            <span className="text-amber-500 bg-black px-1.5 py-0.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:p-0 sm:bg-transparent sm:text-slate-900 sm:border-0 sm:shadow-none">
              METTYA TIGERS FAN
            </span>
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-24 flex flex-col items-start">
          
          {/* ─── 01 / WHO AM I セクション ─── */}
          <div className="w-full shrink-0 text-left mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 select-none">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black tracking-wider text-slate-900 font-sans uppercase">
                01 / WHO AM I
              </h4>
            </div>

            <div className="max-w-3xl text-left flex flex-col items-start w-full">
              {/* 基準となる親コンテナ（w-full max-w-2xl） */}
              <div className="w-full max-w-2xl relative pt-10 md:pt-6">
                
                {/* 💡 右上のアイコン＋バッジの統合エリア */}
                <div 
                  onClick={handlePop}
                  onTouchStart={handlePop}
                  className="absolute -top-6 right-2 md:-top-10 md:-right-6 z-20 shrink-0 flex flex-col items-center gap-1 sm:gap-2 select-none pointer-events-auto cursor-pointer group"
                >
                  
                  {/* 📸 アバター丸枠本体（relativeの基準点） */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-3 md:border-4 border-black bg-amber-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
                    
                    {/* 📸 画像専用レイヤー（丸枠の中に収まるようにoverflow-hidden） */}
                    <div className="absolute inset-0 rounded-full overflow-hidden z-10">
                      <Image 
                        src="/images/me.png" 
                        alt="Dustin" 
                        fill 
                        className="object-cover object-center scale-125 group-hover:scale-135 group-active:scale-135 transition-transform duration-300"
                        unoptimized
                      />
                    </div>

                    {/* 🎉 アバターの中心から外側へ飛び出すクラッカーエフェクト（画像の上のレイヤー z-20） */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
                      
                      {/* 🎉 左上 */}
                      <span className={`absolute text-2xl sm:text-3xl transition-all duration-500 ease-out font-sans ${
                        isPopped 
                          ? "-translate-x-16 -translate-y-16 scale-125 opacity-100 rotate-[-30deg]" 
                          : "translate-x-0 translate-y-0 scale-0 opacity-0"
                      }`}>🎉</span>
                      
                      {/* ✨ 右上 */}
                      <span className={`absolute text-2xl sm:text-3xl transition-all duration-500 ease-out font-sans delay-75 ${
                        isPopped 
                          ? "translate-x-16 -translate-y-16 scale-125 opacity-100 rotate-[30deg]" 
                          : "translate-x-0 translate-y-0 scale-0 opacity-0"
                      }`}>✨</span>
                      
                      {/* 🎨 左下 */}
                      <span className={`absolute text-2xl sm:text-3xl transition-all duration-500 ease-out font-sans delay-50 ${
                        isPopped 
                          ? "-translate-x-16 translate-y-16 scale-125 opacity-100 rotate-[-60deg]" 
                          : "translate-x-0 translate-y-0 scale-0 opacity-0"
                      }`}>🐯</span>
                      
                      {/* 🚀 右下 */}
                      <span className={`absolute text-2xl sm:text-3xl transition-all duration-500 ease-out font-sans delay-100 ${
                        isPopped 
                          ? "translate-x-16 translate-y-16 scale-125 opacity-100 rotate-[15deg]" 
                          : "translate-x-0 translate-y-0 scale-0 opacity-0"
                      }`}>🚀</span>

                    </div>
                  </div>

                  {/* 💡 TAP ME! バッジ */}
                  <div className="relative animate-bounce [animation-duration:2s] bg-black text-white text-[9px] sm:text-[10px] font-mono font-black px-1.5 py-0.5 rounded border border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
                    <span className="inline md:hidden">Tap Me!</span>
                    <span className="hidden md:inline">Tap Me!</span>
                  </div>

                </div>

                {/* 📋 ステータスカード */}
                <div className="w-full border-3 border-black bg-amber-50/50 p-5 sm:p-8 pr-16 sm:pr-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl font-sans space-y-5 relative z-10">
                  
                  {/* NAME */}
                  <div className="grid grid-cols-3 border-b-2 border-black/10 pb-3 items-center">
                    <span className="font-mono font-black text-slate-400 text-[10px] sm:text-xs tracking-wider">NAME</span>
                    <span className="col-span-2 font-black text-slate-900 text-sm sm:text-lg">Kotaro Takahashi</span>
                  </div>
                  
                  {/* ROLE */}
                  <div className="grid grid-cols-3 border-b-2 border-black/10 pb-3 items-start">
                    <span className="font-mono font-black text-slate-400 text-[10px] sm:text-xs tracking-wider pt-0.5">ROLE</span>
                    <span className="col-span-2 font-black text-slate-900 text-sm sm:text-lg leading-snug">
                      Master's Student
                    </span>
                  </div>
                  
                  {/* LOCATION */}
                  <div className="grid grid-cols-3 border-b-2 border-black/10 pb-3 items-center">
                    <span className="font-mono font-black text-slate-400 text-[10px] sm:text-xs tracking-wider">LOCATION</span>
                    <span className="col-span-2 font-black text-slate-900 text-sm sm:text-lg">
                      Hiroshima, Japan
                    </span>
                  </div>
                  
                  {/* BORN */}
                  <div className="grid grid-cols-3 pt-1 items-center">
                    <span className="font-mono font-black text-slate-400 text-[10px] sm:text-xs tracking-wider">BORN</span>
                    <span className="col-span-2 font-black text-slate-900 text-sm sm:text-lg tracking-wider">
                      2001
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ─── 02 / STORY （ここに専用のスクロール検知 ref を設置） ─── */}
          <div ref={storyRef} className="w-full shrink-0 text-left mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 select-none border-t-4 border-black pt-6">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black tracking-wider text-slate-900 font-sans uppercase">
                02 / STORY 
              </h4>
            </div>

            <div className="max-w-3xl text-left flex flex-col items-start w-full">
              {/* 💡 02付近に来た瞬間に、子要素のアニメーションが一斉に1回だけ発火します */}
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.4] text-left mb-6 sm:mb-10 overflow-hidden">
                <span className="relative inline-block px-2 pt-2 pb-3 mt-1 sm:mt-2 z-0 group/title">
                  
                  {/* 🖌️ 背景のブラシ・絵の具風マーカー線（左から右へシャッ！と引かれる） */}
                  <span 
                    className={`absolute inset-x-0 bottom-1 h-5 sm:h-8 md:h-10 bg-amber-300/90 -rotate-1 origin-left z-[-1] pointer-events-none transition-transform duration-1000 ease-out ${
                      storyFired ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{
                      clipPath: "polygon(0% 15%, 15% 5%, 35% 25%, 65% 10%, 85% 30%, 100% 15%, 98% 85%, 82% 95%, 55% 75%, 25% 90%, 8% 70%, 0% 80%)"
                    }}
                  />
                  
                  {/* ✍️ 文字列（下からスッと湧き上がってくる） */}
                  <span className="relative inline-block overflow-hidden vertical-align-bottom">
                    <span 
                      className={`relative inline-block font-black text-slate-900 transition-all duration-700 ease-out delay-300 ${
                        storyFired ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                      }`}
                    >
                      アイデアを、思いのままに。
                    </span>
                  </span>

                </span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6 text-[11px] sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl text-left">
                <p>
                  私は学部3年の頃に<a href="https://www.servicenow.com/jp/" target="_blank" rel="noopener noreferrer" className="text-black font-black underline underline-offset-4 decoration-2 hover:text-blue-600 hover:decoration-blue-600 transition-colors duration-200">ServiceNow</a>というプラットフォームに出会い、自分の手でロジックとデザインを組み上げ、アプリケーションを構築する楽しさを知りました。
                </p>
                <p>
                  頭の中にある突飛なアイデアも、日常で見過ごされそうなちいさな不満も、すべてはモノづくりの原石です。<br />
                  それらをコードに落とし込み、「こんな機能やデザインだったら絶対に面白い！」と、脳内のイメージをそのまま100%の形へ、思いのままに具現化していくプロセスそのものに、何よりもワクワクします。
                </p>
                <p>
                  もっと面白いものを作りたい、もっと自分の理想を形にしたい。その純粋な衝動に突き動かされながら、個人開発やハッカソンという限られた時間の中で、全力のモノづくりに没頭しています。
                </p>
                <p className="text-slate-900 font-bold">
                  ここでは、そんな私の「アイデアを、思いのままに。」形にしてきた軌跡と成果物を記録しています。
                </p>
              </div>
            </div>
          </div>

          {/* ─── 03 / SKILLS & ACHIEVEMENTS ─── */}
          <div className="w-full shrink-0 text-left mb-12 sm:mb-20">
            <div className="mb-6 sm:mb-8 select-none border-t-4 border-black pt-6">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black tracking-wider text-slate-900 font-sans uppercase">
                03 / SKILLS & ACHIEVEMENTS 
              </h4>
            </div>
            
            <div className="w-full border-t border-slate-200 font-sans text-xs sm:text-base">
              <div className="grid grid-cols-1 md:grid-cols-12 py-5 border-b border-slate-200 items-start gap-3 md:gap-4">
                <div className="md:col-span-4 select-none">
                  <span className="text-[10px] sm:text-xs font-black tracking-widest text-slate-400 uppercase font-mono block mb-1">
                    01 / TECHNOLOGIES USED
                  </span>
                  <div className="font-black text-slate-900 tracking-wider">DEVELOPMENT</div>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-2">
                  {["Python","JavaScript","Next.js", "ios(Swift)", "PHP",  "Kotlin", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white text-slate-900 text-xs font-black tracking-wide border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 py-5 border-b border-slate-200 items-start gap-3 md:gap-4">
                <div className="md:col-span-4 select-none">
                  <span className="text-[10px] sm:text-xs font-black tracking-widest text-slate-400 uppercase font-mono block mb-1">
                    02 / PLATFORM EXPERTISE
                  </span>
                  <div className="font-black text-slate-900 tracking-wider">PLATFORM</div>
                </div>
                <div className="md:col-span-8 flex flex-col items-start gap-1">
                  <span className="px-3 py-1 bg-slate-900 text-white text-xs font-black tracking-wider border-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                    ServiceNow
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 font-mono mt-1">
                    (App Engine / Flow Designer)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 py-5 border-b border-slate-300 items-start gap-3 md:gap-4">
                <div className="md:col-span-4 select-none">
                  <span className="text-[10px] sm:text-xs font-black tracking-widest text-slate-400 uppercase font-mono block mb-1">
                    03 / TRACK RECORD & AWARDS
                  </span>
                  <div className="font-black text-slate-900 tracking-wider">ACHIEVEMENTS</div>
                </div>
                <div className="md:col-span-8 space-y-3 text-xs sm:text-base font-bold text-slate-600 leading-relaxed tracking-wide">
                  <p>
                    ・{" "}
                    <a href="https://jphacks.com/information/hackday-result-2024/" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-bold hover:text-black hover:underline underline-offset-4 decoration-2 transition-colors duration-200">
                      JPHACKS 2024・2025 地方大会優勝
                    </a>
                  </p>
                  <p>
                    ・{" "}
                    <a href="https://jphacks.com/2025/result/" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-bold hover:text-black hover:underline underline-offset-4 decoration-2 transition-colors duration-200">
                      JPHACKS 2025 全国大会スポンサー賞受賞
                    </a>
                  </p>
                  <p>
                    ・{" "}
                    <a href="https://www.servicenow.com/jp/events/world-forum/tokyo.html" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-bold hover:text-black hover:underline underline-offset-4 decoration-2 transition-colors duration-200">
                      ServiceNow Hackathon 2025 審査員特別賞（ブログ賞）受賞
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
);

ProfileSection.displayName = "ProfileSection";
export default ProfileSection;