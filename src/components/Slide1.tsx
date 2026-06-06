import React, { useRef, useEffect } from 'react';

export const Slide1 = ({ activeSlide }: { activeSlide: number }) => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const prevX = useRef<number | null>(null);
  const targetTime = useRef(0);
  const isSeeking = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (activeSlide !== 0) {
        prevX.current = null;
        return;
      }
      const video = heroVideoRef.current;
      if (!video || Number.isNaN(video.duration)) return;

      if (prevX.current === null) {
        prevX.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevX.current;
      prevX.current = e.clientX;

      const SENSITIVITY = 0.8;
      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;

      targetTime.current = Math.max(0, Math.min(video.duration, targetTime.current + timeOffset));

      if (!isSeeking.current) {
        isSeeking.current = true;
        video.currentTime = targetTime.current;
      }
    };

    const handleMouseLeave = () => {
      prevX.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeSlide]);

  const handleHeroSeeked = () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (Math.abs(video.currentTime - targetTime.current) > 0.05) {
      video.currentTime = targetTime.current;
    } else {
      isSeeking.current = false;
    }
  };

  return (
    <section id="slide-1" className="snap-section relative flex items-center justify-center bg-apple-black px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 ambient-glow"></div>
      
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          ref={heroVideoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4"
          className="w-full h-full object-cover object-[70%_center]"
          muted
          playsInline
          preload="auto"
          onSeeked={handleHeroSeeked}
        />
      </div>

      <div className="absolute inset-0 ambient-glow-blue"></div>
      <div className="max-w-6xl w-full text-center relative z-10 pt-12">
        <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-apple-silver uppercase block mb-6">DESIGN METHODOLOGY & RESEARCH</span>
        <h1 className="font-heading text-5xl md:text-8xl italic tracking-tight leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400">
          Apple 品牌视觉形象<br/><span className="not-italic font-light text-4xl md:text-6xl">与设计范式研究</span>
        </h1>
        <p className="text-base md:text-xl font-light text-apple-silver max-w-2xl mx-auto mb-16 leading-relaxed">
          从几何秩序、材料美学、界面哲学到建筑物理空间的系统性解构与学术分析。
        </p>
        <div className="flex flex-wrap justify-center gap-12 text-left border-t border-white/10 pt-8 max-w-3xl mx-auto">
          <div>
            <span className="text-[10px] font-mono text-apple-silver block mb-1 uppercase">RESEARCHER</span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-light text-white">汇报人：谢东东 学号：202533109014</span>
              <span className="text-xs text-apple-silver">视觉传达设计专业</span>
            </div>
          </div>
          <div>
            <span className="text-[10px] font-mono text-apple-silver block mb-1 uppercase">DATE</span>
            <span className="text-sm font-light text-white">2026 / ACADEMIC KEYNOTE</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-apple-silver block mb-1 uppercase">FOCUS</span>
            <span className="text-sm font-light text-white">VI / 空间形态 / 交互几何</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
        <span className="text-[8px] tracking-[0.2em] font-mono text-apple-silver mb-2">SCROLL DOWN</span>
        <div className="w-[1px] h-6 bg-white/20"></div>
      </div>
    </section>
  );
};
