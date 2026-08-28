import type { CSSProperties } from "react";
import { ACHIEVEMENTS } from "../data/achievements";

interface HeroSectionProps {
  isReady: boolean;
}

const GREETING = Array.from("はじめまして。");
const THROW_OFFSETS = [-36, 28, -18, 38, -28, 20, -8];
const THROW_ROTATIONS = [12, -10, 8, -14, 11, -7, 9];

export default function HeroSection({ isReady }: HeroSectionProps) {
  const recentAward = ACHIEVEMENTS[0];

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="w-full max-w-5xl mx-auto px-5 sm:px-12 md:px-16 pb-16 sm:pb-24"
      >
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="relative w-fit pb-2 sm:pb-3 mb-8 sm:mb-10 select-none">
            <h1
              id="hero-title"
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-[-0.04em] text-transparent [text-stroke:1.5px_black] md:[text-stroke:2.5px_black] [-webkit-text-stroke:1.5px_black] md:[-webkit-text-stroke:2.5px_black]"
            >
              Hello!
            </h1>
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 sm:h-1.5 w-12 sm:w-24 bg-black" />
          </div>

          <p
            className="max-w-4xl text-[2.65rem] leading-[0.98] sm:text-6xl md:text-6xl font-black tracking-[-0.06em] text-slate-950"
          >
            <span className="sr-only">はじめまして。</span>
            <span
              aria-hidden="true"
              className={`relative inline-block mt-2 whitespace-nowrap ${isReady ? "hero-throw-ready" : ""}`}
            >
              {GREETING.map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  className="hero-throw-char"
                  style={{
                    "--throw-y": `${THROW_OFFSETS[index]}px`,
                    "--throw-rotation": `${THROW_ROTATIONS[index]}deg`,
                    animationDelay: `${index * 110}ms`,
                  } as CSSProperties}
                >
                  {character}
                </span>
              ))}
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-sm sm:text-lg font-bold leading-relaxed text-slate-600">
            大学院で情報工学を専攻しています。
            身近な課題や自身の体験を起点に、Web・iOSアプリなどを開発しています。
            このサイトでは、個人開発やハッカソンで生まれた成果物を紹介します。
          </p>
        </div>

        <div className="flex flex-wrap font-mono text-[10px] sm:text-xs font-black tracking-wider">
          <a
            href="#work"
            className="border-2 border-black bg-black px-4 py-2 text-white shadow-[3px_3px_0_0_#fbbf24] transition-transform hover:-translate-y-0.5 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
          >
            VIEW WORK ↓
          </a>
        </div>
      </div>

      <div className="mt-10 border-y-3 border-black py-3 font-mono text-[10px] sm:text-xs font-black tracking-wide text-slate-800">
        <span className="text-amber-700">RECENT AWARDS</span>
        <span aria-hidden="true" className="mx-2 text-slate-300">{"//"}</span>
        <a
          href={recentAward.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:underline underline-offset-4 decoration-2 transition-colors"
        >
          {recentAward.title}
        </a>
      </div>
      </section>

      <style>{`
        @keyframes hero-letter-throw {
          0% {
            opacity: 0;
            transform: translate3d(75vw, var(--throw-y), 0) rotate(var(--throw-rotation));
          }
          62% {
            opacity: 1;
            transform: translate3d(-0.16em, 0, 0) rotate(-2deg);
          }
          80% {
            opacity: 1;
            transform: translate3d(0.07em, 0, 0) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(0);
          }
        }

        .hero-throw-char {
          display: inline-block;
          opacity: 0;
          will-change: transform, opacity;
        }

        .hero-throw-ready .hero-throw-char {
          animation-name: hero-letter-throw;
          animation-duration: 960ms;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          animation-fill-mode: forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-throw-char {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
