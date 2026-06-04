"use client";

interface OpeningProps {
  isOutline: boolean;
  isFadeOut: boolean;
}

export default function Opening({
  isOutline,
  isFadeOut,
}: OpeningProps) {
  return (
    <div
      className={`
        fixed inset-0
        z-[9999]
        bg-[#f8fafc]
        flex flex-col
        items-center
        justify-center
        transition-opacity
        duration-700
        ease-in-out
        ${isFadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="flex flex-col font-extrabold tracking-[-0.05em] text-center uppercase select-none leading-[0.82] font-sans px-4">
        <span
          className={`
            text-5xl
            sm:text-7xl
            md:text-9xl
            lg:text-[11rem]
            transition-colors
            duration-1000
            ease-in-out
            [text-stroke:1.5px_black]
            md:[text-stroke:2px_black]
            [-webkit-text-stroke:1.5px_black]
            md:[-webkit-text-stroke:2px_black]
            ${isOutline ? "text-transparent" : "text-slate-900"}
          `}
        >
          KOTARO
        </span>

        <span
          className={`
            text-5xl
            sm:text-7xl
            md:text-9xl
            lg:text-[11rem]
            mt-3
            sm:mt-4
            transition-colors
            duration-1000
            ease-in-out
            [text-stroke:1.5px_black]
            md:[text-stroke:2px_black]
            [-webkit-text-stroke:1.5px_black]
            md:[-webkit-text-stroke:2px_black]
            ${isOutline ? "text-transparent" : "text-slate-900"}
          `}
        >
          TAKAHASHI
        </span>
      </div>
    </div>
  );
}