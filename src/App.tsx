/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { FadingVideo } from './components/FadingVideo';
import { Slide1 } from './components/Slide1';
import { SlidesPart1 } from './components/SlidesPart1';
import { SlidesPart2 } from './components/SlidesPart2';
import { SlidesPart3 } from './components/SlidesPart3';

export default function App() {
  const [isGridActive, setIsGridActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoadVisible, setIsLoadVisible] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const snapContainerRef = useRef<HTMLElement>(null);
  const slideIds = Array.from({ length: 25 }, (_, i) => `slide-${i + 1}`);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'img') {
        const img = target as HTMLImageElement;
        setZoomedImage(img.src);
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    const triggerLoad = () => {
      setIsLoadVisible(true);
      setLoadProgress(30);
      setTimeout(() => setLoadProgress(75), 200);
      setTimeout(() => {
        setLoadProgress(100);
        setTimeout(() => {
          setIsLoadVisible(false);
          setTimeout(() => setLoadProgress(0), 400);
        }, 300);
      }, 600);
    };
    
    triggerLoad();
  }, [activeSlide]);

  const chapters = [
    { label: "01/INTRO", range: [0, 4] },
    { label: "02/PHIL", range: [5, 9] },
    { label: "03/VI SYS", range: [10, 16] },
    { label: "04/CRAFT", range: [17, 21] },
    { label: "05/SPACE", range: [22, 24] }
  ];

  useEffect(() => {
    const container = snapContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.innerWidth >= 1024 ? container.scrollTop : window.scrollY;
      const scrollHeight = (window.innerWidth >= 1024 ? container.scrollHeight : document.documentElement.scrollHeight) - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    const observerOptions = {
      root: window.innerWidth >= 1024 ? container : null,
      threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const slideIndex = slideIds.indexOf(entry.target.id);
          if (slideIndex !== -1) {
            setActiveSlide(slideIndex);
          }
        }
      });
    }, observerOptions);

    slideIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    if (window.innerWidth >= 1024) {
      container.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      observer.disconnect();
      if (container) container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [slideIds]);

  const generateDesignPhilosophy = async () => {
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    setAiResponse('');
    
    const fetchWithRetry = async (retries = 5, delay = 1000): Promise<string> => {
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: aiInput })
        });
        if (!response.ok) throw new Error("API 请求失败");
        const data = await response.json();
        return data.content || "未能生成内容。";
      } catch (error) {
        if (retries > 0) {
          await new Promise(res => setTimeout(res, delay));
          return fetchWithRetry(retries - 1, delay * 2);
        } else {
          return "生成失败，请检查网络或稍后重试。";
        }
      }
    };

    const result = await fetchWithRetry();
    setAiResponse(result);
    setIsAiLoading(false);
  };

  const scrollToSlide = (id: string) => {
    const targetEl = document.getElementById(id);
    const container = snapContainerRef.current;
    if (!targetEl) return;
    if (window.innerWidth >= 1024 && container) {
      container.scrollTo({ top: targetEl.offsetTop, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative font-body">
      {/* Top Loading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-white z-[120] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(255,255,255,1)]" 
        style={{ width: `${loadProgress}%`, opacity: isLoadVisible ? 1 : 0 }}
      />
      
      <div className={`fixed inset-0 grid-overlay z-40 transition-opacity duration-500 pointer-events-none ${isGridActive ? 'opacity-100' : 'opacity-0'}`}></div>

      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ opacity: 0.35 }}
      >
        <FadingVideo 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="w-full h-full object-cover"
        />
      </div>

      {activeSlide === 0 && (
        <button 
          onClick={() => setIsAIOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3.5 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2.5 shadow-xl"
        >
          <span className="text-lg">✨</span>
          <span className="font-medium tracking-widest text-xs uppercase">灵感缪斯</span>
        </button>
      )}

      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${isAIOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setIsAIOpen(false)}></div>
        <div className="relative bg-neutral-950/80 border border-white/10 p-8 rounded-3xl w-full max-w-lg mx-4 shadow-2xl text-white transform transition-all duration-500 flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-lg font-light tracking-widest flex items-center gap-2">
              <span>✨</span>
              <span>极简设计缪斯</span>
            </h2>
            <button onClick={() => setIsAIOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-apple-silver tracking-widest uppercase font-mono">输入您的产品或概念</label>
            <div className="flex gap-3">
              <input 
                type="text" 
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && generateDesignPhilosophy()}
                placeholder="例如：智能触觉戒指、悬浮唱片机..."
                className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-apple-blue transition-colors text-sm"
              />
              <button 
                onClick={generateDesignPhilosophy}
                disabled={isAiLoading || !aiInput.trim()}
                className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isAiLoading ? '构思中...' : '生成'}
              </button>
            </div>
          </div>

          <div className="min-h-[160px] bg-black/40 rounded-2xl p-6 border border-white/5 flex flex-col justify-center">
            {isAiLoading ? (
              <div className="flex flex-col items-center justify-center gap-3 text-apple-silver text-sm tracking-widest animate-pulse">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>正在从虚无中提取先锋设计灵感...</span>
              </div>
            ) : aiResponse ? (
              <div 
                className="text-sm leading-loose tracking-wide font-light opacity-90 text-gray-200"
                dangerouslySetInnerHTML={{ __html: aiResponse }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 text-white/20 text-sm tracking-widest text-center">
                <span className="text-2xl">💡</span>
                <span>输入创意，唤醒极简主义先锋设计哲学</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Zoomed Image Viewer Modal */}
      <div 
        className={`fixed inset-0 z-[110] flex items-center justify-center transition-all duration-300 ${zoomedImage ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-3xl cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        />
        {zoomedImage && (
          <div className="relative z-10 w-full h-full p-4 md:p-12 flex items-center justify-center cursor-zoom-out" onClick={() => setZoomedImage(null)}>
            <img 
              src={zoomedImage} 
              alt="Zoomed view" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 scale-100 animate-in fade-in zoom-in-95" 
            />
          </div>
        )}
      </div>

      <header className="fixed top-0 left-0 w-full z-50 liquid-glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.39.13-9.13-1.78-14.21-5.74-3.41-2.67-7.14-7.14-11.18-13.43-5.26-8.23-9.55-17.38-12.87-27.46-3.32-10.08-4.98-19.72-4.98-28.93 0-14.93 3.39-26.88 10.15-35.85 6.76-8.97 15.37-13.45 25.82-13.45 4.52 0 9.28 1.15 14.27 3.44 4.99 2.29 8.5 3.44 10.54 3.44 1.71 0 5.06-1.11 10.06-3.33 5-2.22 9.83-3.31 14.48-3.27 10.79.13 19.34 3.99 25.64 11.6 4.74 5.72 7.89 12.44 9.45 20.14-11.45 4.67-17.15 12.16-17.11 22.45.04 7.82 2.85 14.36 8.44 19.61 5.59 5.26 12.3 8.13 20.12 8.63-2.3 6.94-5.39 13.78-9.28 20.52zM119.22 35.67c0-7.72 2.76-14.88 8.28-21.49 1.88-2.24 4.14-4.24 6.78-5.99C126.83 3.65 119.53 1 113.81 1c-12.01 0-22.71 7.15-27.42 17.51-2.02 4.45-3.03 9.44-3.03 14.97 0 7.42 2.76 14.29 8.28 20.59 5.52 6.3 12.69 9.61 21.51 9.93C116.32 55.33 119.22 44.89 119.22 35.67z"/>
          </svg>
          <span className="font-light tracking-[0.22em] text-xs uppercase text-apple-silver">视觉形象设计研究汇报</span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsGridActive(!isGridActive)}
            className={`text-xs border px-3 py-1.5 rounded-full transition-all flex items-center gap-2 ${isGridActive ? 'border-apple-blue text-white' : 'border-white/20 text-apple-silver hover:border-white/50 hover:text-white'}`}
          >
            <span className={`w-2 h-2 rounded-full ${isGridActive ? 'bg-apple-blue shadow-[0_0_8px_#0066CC]' : 'bg-apple-silver'}`}></span>
            <span>学术设计网格</span>
          </button>
          <span className="text-xs text-apple-silver hidden md:inline font-mono">Academic Archive 2026</span>
        </div>
      </header>

      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        <div className="text-[9px] font-mono text-apple-silver rotate-90 origin-right translate-x-[-15px] mb-8 uppercase tracking-widest">CHAPTERS</div>
        {chapters.map((ch, idx) => {
          const isGroupActive = activeSlide >= ch.range[0] && activeSlide <= ch.range[1];
          return (
            <div key={idx} className={`flex flex-col gap-1.5 border-r pr-2 transition-all duration-300 ${isGroupActive ? 'border-white' : 'border-white/10'}`}>
              <span className={`text-[8px] font-mono text-right transition-colors ${isGroupActive ? 'text-white font-medium' : 'text-apple-silver'}`}>
                {ch.label}
              </span>
              <div className="flex flex-col gap-1.5 py-1">
                {Array.from({ length: ch.range[1] - ch.range[0] + 1 }, (_, n) => {
                  const slideIdx = ch.range[0] + n;
                  const isNodeActive = activeSlide === slideIdx;
                  return (
                    <button
                      key={slideIdx}
                      onClick={() => scrollToSlide(`slide-${slideIdx + 1}`)}
                      className={`w-2 h-2 rounded-full border transition-all duration-300 self-end ${isNodeActive ? 'bg-white border-white scale-125' : 'border-white/30 hover:border-white/60'}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="fixed top-0 left-0 h-[2.5px] bg-white transition-all duration-100 z-50 shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ width: `${scrollProgress}%` }}></div>

      <main ref={snapContainerRef as React.RefObject<HTMLDivElement>} className="snap-container w-full min-h-screen relative z-10">
        <Slide1 activeSlide={activeSlide} />
        <SlidesPart1 />
        <SlidesPart2 />
        <SlidesPart3 />
      </main>
    </div>
  );
}
