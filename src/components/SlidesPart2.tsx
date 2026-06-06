import React, { useState } from 'react';
import { SectionTransition } from './SectionTransition';

export const SlidesPart2 = () => {
  const [goldenOverlay, setGoldenOverlay] = useState(false);
  const [fontWeight, setFontWeight] = useState(300);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [showSquircleHelper, setShowSquircleHelper] = useState(false);

  const fontLabels: Record<number, string> = {
    100: 'Ultralight (100)',
    200: 'Thin (200)',
    300: 'Light (300)',
    400: 'Regular (400)',
    500: 'Medium (500)',
    600: 'Semibold (600)',
    700: 'Bold (700)',
    800: 'Heavy (800)',
    900: 'Black (900)'
  };

  return (
    <>
      <section id="slide-9" className="snap-section px-6 md:px-16 relative">
        <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">08. SYNCHRONIZED ECOSYSTEM</span>
            <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">软硬一体化的<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">绝对视觉一致性</span></h2>
            <p className="text-apple-silver leading-relaxed font-light mb-6">
              在苹果的视觉维度里，硬件、软件和包装并非相互割裂，而是共享一个绝对的设计内核。无论是物理机身屏幕那道精密的超椭圆黑边（Squircle Faceplate），还是 iOS 系统底部的虚拟 Home 条，亦或是广告动画中的虚化折射，都在共享同一种图形逻辑。这种一致性赋予了产品绝无仅有的“一体化”心理体验。
            </p>
          </div>
          <div className="liquid-glass-strong p-0 rounded-2xl relative overflow-hidden flex flex-col md:flex-row gap-0 h-[300px]">
            <img src="https://i.postimg.cc/fT7XtpwM/Chat-GPT-Image-2026nian6yue6ri-16-40-23.png" alt="Seamless Apple Devices Integration" className="w-full h-full object-cover object-center" />
          </div>
        </SectionTransition>
      </section>

      <section id="slide-10" className="snap-section px-6 md:px-16 relative overflow-hidden">
        <SectionTransition className="max-w-4xl w-full text-center relative z-10">
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">09. EMOTIONAL FREQUENCY</span>
          <h2 className="font-heading text-5xl md:text-7xl italic leading-tight mb-8">情绪管理：<br/><span className="not-italic text-3xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-400">冷静、专业、纯净、前沿</span></h2>
          <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8"></div>
          <p className="text-apple-silver leading-relaxed font-light mb-8 max-w-2xl mx-auto text-sm md:text-base">
            苹果的视觉系统完美摒弃了聒噪的高饱和度营销色。它将自律渗透到 brand 每一处毛细血管，永远向大众传递着专业与高级感的距离美。这种冷静的色调和充足的呼吸感留白，最终沉淀出一种让人信任的先锋艺术神庙气息。
          </p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-2 border border-white/5 bg-white/[0.02] rounded-full text-xs text-apple-silver">冷静：科技中性灰色</span>
            <span className="px-4 py-2 border border-white/5 bg-white/[0.02] rounded-full text-xs text-apple-silver">专业：精细视网膜字体级配</span>
            <span className="px-4 py-2 border border-white/5 bg-white/[0.02] rounded-full text-xs text-apple-silver">前沿：极窄金属与玻璃边界</span>
          </div>
        </SectionTransition>
      </section>

      <section id="slide-11" className="snap-section px-6 md:px-16 relative overflow-hidden">
        <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">10. LOGO GEOMETRIC SYNTHESIS</span>
            <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">完美曲线：<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">苹果标志的黄金分割解构</span></h2>
            <p className="text-apple-silver leading-relaxed font-light mb-6">
              苹果的 Logo 并不是艺术家的随手写生，而是人类现代工业史中最杰出的数学几何结晶。整个形态由复杂的黄金分割正圆弧线相切构成。其叶片弧角、顶端内陷深度、甚至右侧的缺口弧度，都严谨契合了斐波那契数列。这种数学秩序让图案具备了历久弥新的恒定张力和完美的眼球舒适度。
            </p>
            <button 
              onClick={() => setGoldenOverlay(!goldenOverlay)}
              className="px-4 py-2 bg-white text-apple-black hover:bg-neutral-200 transition-all text-xs font-semibold rounded-full shadow-lg"
            >
              {goldenOverlay ? "隐藏黄金分割网格" : "切换黄金分割线与相切网格"}
            </button>
          </div>

          <div className="bg-[#f4f4f2] text-neutral-900 rounded-3xl p-6 shadow-2xl flex flex-col justify-between h-[450px] md:h-[500px] border border-neutral-300 relative overflow-hidden">
            <div className="grid grid-cols-3 border border-neutral-400 text-center font-mono text-[9px] md:text-[10px] uppercase tracking-wider divide-x divide-neutral-400 bg-neutral-200/50">
              <div className="py-1 px-2 font-semibold">Rob Janoff</div>
              <div className="py-1 px-2 font-semibold">Apple Inc.</div>
              <div className="py-1 px-2 font-semibold">1977</div>
            </div>

            <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
              <svg 
                className="w-full h-full max-h-[220px]" 
                viewBox="0 0 200 200"
              >
                <defs>
                  <pattern id="blueprint-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprint-grid)" />

                <g transform="translate(15, 12) scale(0.9)">
                  <path 
                    d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.39.13-9.13-1.78-14.21-5.74-3.41-2.67-7.14-7.14-11.18-13.43-5.26-8.23-9.55-17.38-12.87-27.46-3.32-10.08-4.98-19.72-4.98-28.93 0-14.93 3.39-26.88 10.15-35.85 6.76-8.97 15.37-13.45 25.82-13.45 4.52 0 9.28 1.15 14.27 3.44 4.99 2.29 8.5 3.44 10.54 3.44 1.71 0 5.06-1.11 10.06-3.33 5-2.22 9.83-3.31 14.48-3.27 10.79.13 19.34 3.99 25.64 11.6 4.74 5.72 7.89 12.44 9.45 20.14-11.45 4.67-17.15 12.16-17.11 22.45.04 7.82 2.85 14.36 8.44 19.61 5.59 5.26 12.3 8.13 20.12 8.63-2.3 6.94-5.39 13.78-9.28 20.52zM119.22 35.67c0-7.72 2.76-14.88 8.28-21.49 1.88-2.24 4.14-4.24 6.78-5.99C126.83 3.65 119.53 1 113.81 1c-12.01 0-22.71 7.15-27.42 17.51-2.02 4.45-3.03 9.44-3.03 14.97 0 7.42 2.76 14.29 8.28 20.59 5.52 6.3 12.69 9.61 21.51 9.93C116.32 55.33 119.22 44.89 119.22 35.67z" 
                    fill={goldenOverlay ? "rgba(75, 85, 99, 0.25)" : "rgba(17, 24, 39, 0.95)"}
                    className="transition-colors duration-500"
                  />

                  <g 
                    className="stroke-neutral-500 stroke-[0.8] fill-none transition-opacity duration-500"
                    style={{ opacity: goldenOverlay ? 1 : 0.15 }}
                  >
                    <rect x="25" y="45" width="125" height="113" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
                    <circle cx="-13" cy="98" r="66" strokeDasharray="3 3" />
                    <circle cx="181" cy="98" r="66" strokeDasharray="3 3" />
                    <circle cx="55.5" cy="120.7" r="27.5" strokeDasharray="4 2" />
                    <circle cx="112.5" cy="120.7" r="27.5" strokeDasharray="4 2" />
                    <circle cx="84" cy="51" r="23" strokeDasharray="4 2" />
                    <circle cx="135" cy="84" r="32" stroke="rgba(220, 38, 38, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="100" cy="35" r="29" strokeDasharray="4 2" />
                    <circle cx="128" cy="13" r="29" strokeDasharray="4 2" />
                    <line x1="84" y1="10" x2="84" y2="165" stroke="rgba(0,0,0,0.1)" />
                    <line x1="10" y1="95" x2="160" y2="95" stroke="rgba(0,0,0,0.1)" />
                  </g>
                </g>
              </svg>

              <div className="absolute bottom-2 right-2 border border-neutral-400 p-2 bg-white rounded-lg flex items-center justify-center w-10 h-10 shadow-sm">
                <svg className="w-6 h-6 fill-neutral-900" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.39.13-9.13-1.78-14.21-5.74-3.41-2.67-7.14-7.14-11.18-13.43-5.26-8.23-9.55-17.38-12.87-27.46-3.32-10.08-4.98-19.72-4.98-28.93 0-14.93 3.39-26.88 10.15-35.85 6.76-8.97 15.37-13.45 25.82-13.45 4.52 0 9.28 1.15 14.27 3.44 4.99 2.29 8.5 3.44 10.54 3.44 1.71 0 5.06-1.11 10.06-3.33 5-2.22 9.83-3.31 14.48-3.27 10.79.13 19.34 3.99 25.64 11.6 4.74 5.72 7.89 12.44 9.45 20.14-11.45 4.67-17.15 12.16-17.11 22.45.04 7.82 2.85 14.36 8.44 19.61 5.59 5.26 12.3 8.13 20.12 8.63-2.3 6.94-5.39 13.78-9.28 20.52zM119.22 35.67c0-7.72 2.76-14.88 8.28-21.49 1.88-2.24 4.14-4.24 6.78-5.99C126.83 3.65 119.53 1 113.81 1c-12.01 0-22.71 7.15-27.42 17.51-2.02 4.45-3.03 9.44-3.03 14.97 0 7.42 2.76 14.29 8.28 20.59 5.52 6.3 12.69 9.61 21.51 9.93C116.32 55.33 119.22 44.89 119.22 35.67z" />
                </svg>
              </div>
            </div>

            <div className="border-t border-neutral-300 pt-3 text-[10px] md:text-[11px] leading-relaxed text-neutral-600 text-justify">
              <p className="font-light">
                苹果标志由 <strong>罗布·詹诺夫 (Rob Janoff)</strong> 于1977年设计。他巧妙切削出右侧咬痕，旨在使轮廓明确区别于樱桃。整体轮廓严格契合由斐波那契数列衍生出的黄金分割相切圆规约。
              </p>
            </div>
          </div>
        </SectionTransition>
      </section>

      <section id="slide-12" className="snap-section px-6 md:px-16 relative">
        <SectionTransition className="max-w-6xl w-full relative z-10">
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">11. CHROMATIC REGIMEN — PRIMARY</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">黑、白、银灰的物理介质质感</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="liquid-glass rounded-2xl overflow-hidden border border-white/5 group">
              <div className="h-48 relative overflow-hidden border-b border-white/10 flex items-end p-6">
                <img src="https://i.postimg.cc/c49bW9jL/yang-guang-zhe-jian-dan-cu-bao-de-mei-ye-tai-bu-jiang-li-1-kai-xiang-de-kai-lai-zi-xiao-hong-shu-wang-ye-ban-(1).jpg" alt="Deep Black Space Surface" className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-apple-black via-apple-black/40 to-transparent"></div>
                <span className="text-xs font-mono text-apple-silver relative z-10">#000000 / DEEP BLACK</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2">深空黑与黑洞引力</h3>
                <p className="text-xs text-apple-silver leading-relaxed">屏幕玻璃底层涂层与物理边框完美缝合的暗黑引力。传达出无上自律、神秘和极精密的纯度。</p>
              </div>
            </div>
            <div className="liquid-glass rounded-2xl overflow-hidden border border-white/5 group">
              <div className="h-48 relative overflow-hidden border-b border-white/10 flex items-end p-6">
                <img src="https://i.postimg.cc/T3sXPXcS/Chat-GPT-Image-2026nian6yue6ri-11-28-37.png" alt="Absolute White Product" className="absolute inset-0 w-full h-full object-cover object-center opacity-65 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-apple-black/60 to-transparent"></div>
                <span className="text-xs font-mono text-apple-silver relative z-10">#FFFFFF / ABSOLUTE WHITE</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2">极地白与极致光影</h3>
                <p className="text-xs text-apple-silver leading-relaxed">纯净的零杂质散射。在包装和空间中作为极致的信息容器，让核心信息及文字自现边缘张力。</p>
              </div>
            </div>
            <div className="liquid-glass rounded-2xl overflow-hidden border border-white/5 group">
              <div className="h-48 relative overflow-hidden border-b border-white/10 flex items-end p-6">
                <img src="https://i.postimg.cc/YCV2vx41/Mac-Book-wu-nao-chong-yin-se-1-xiao-liu-zai-xia-guang-lai-zi-xiao-hong-shu-wang-ye-ban.jpg" alt="Space Silver Metal" className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-apple-black/60 to-transparent"></div>
                <span className="text-xs font-mono text-apple-silver relative z-10">#86868B / SPACE SILVER</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-2">中性银灰与材质肌理</h3>
                <p className="text-xs text-apple-silver leading-relaxed">最忠实还原喷砂阳极氧化铝合金的光泽。在冷暖环境光下折射最细腻的极细漫反射过度阶梯。</p>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      <section id="slide-13" className="snap-section px-6 md:px-16 relative">
        <SectionTransition className="max-w-6xl w-full relative z-10">
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">12. CHROMATIC REGIMEN — SECONDARY</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">色彩克制：系统逻辑与数字微彩色</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-white/5 p-6 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-[#0066CC] mb-6 shadow-[0_0_15px_rgba(0,102,204,0.4)]"></div>
              <span className="text-xs font-mono text-apple-silver tracking-widest block mb-2">#0066CC / INTERACTIVE BLUE</span>
              <h3 className="text-base font-normal text-white mb-1">交互与指引蓝</h3>
              <p className="text-[11px] text-apple-silver leading-relaxed">数字界面中高饱和度的指示用色. 传达理性、安全和明确的信息传导作用。</p>
            </div>
            <div className="border border-white/5 p-6 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-[#A3704C] mb-6 shadow-[0_0_15px_rgba(163,112,76,0.4)]"></div>
              <span className="text-xs font-mono text-apple-silver tracking-widest block mb-2">#A3704C / LUXURY NATURAL</span>
              <h3 className="text-base font-normal text-white mb-1">天然奢华暖色</h3>
              <p className="text-[11px] text-apple-silver leading-relaxed">从钛金属、真皮皮革和空间原木中提取 of 自然高级灰调，提供温暖柔和的情感中和。</p>
            </div>
            <div className="border border-white/5 p-6 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E25C5C] to-[#E88E5E] mb-6"></div>
              <span className="text-xs font-mono text-apple-silver tracking-widest block mb-2">AURORA / FLUID AMBIENT</span>
              <h3 className="text-base font-normal text-white mb-1">流体环境渐变</h3>
              <p className="text-[11px] text-apple-silver leading-relaxed">iOS 系统、Siri 等动态情境色。基于磨砂玻璃背景的超广角混色，营造未来计算的科技感。</p>
            </div>
            <div className="border border-white/5 p-6 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-[#34C759] mb-6 shadow-[0_0_15px_rgba(52,199,89,0.4)]"></div>
              <span className="text-xs font-mono text-apple-silver tracking-widest block mb-2">#34C759 / SUSTAINABLE GREEN</span>
              <h3 className="text-base font-normal text-white mb-1">环保责任绿</h3>
              <p className="text-[11px] text-apple-silver leading-relaxed">用于低碳排印章及环境白皮书标识。代表苹果完全由可再生材料重塑未来的庄重承诺。</p>
            </div>
          </div>
        </SectionTransition>
      </section>

      <section id="slide-14" className="snap-section px-6 md:px-16 relative">
        <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">13. SYSTEM TYPOGRAPHY</span>
            <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">San Francisco：<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">数字界面的动态可读性秩序</span></h2>
            <p className="text-apple-silver leading-relaxed font-light mb-6">
              苹果自研的 San Francisco (SF) 字体是一套极其高级的动态字体系统。它能根据字号的大小，在操作系统底端实时且无损地智能切换 Text（文本版）和 Display（展示版），并动态微调字间距（Tracking）和字重（Weight）。
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-apple-silver mb-1 font-mono">
                  <span>实时调节字重 (Weight)</span>
                  <span>{fontLabels[fontWeight] || fontWeight}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="900" 
                  step="100" 
                  value={fontWeight} 
                  onChange={(e) => setFontWeight(parseInt(e.target.value))}
                  className="w-full accent-white bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-apple-silver mb-1 font-mono">
                  <span>实时调节字距 (Letter Spacing)</span>
                  <span>{letterSpacing}px</span>
                </div>
                <input 
                  type="range" 
                  min="-5" 
                  max="20" 
                  step="1" 
                  value={letterSpacing} 
                  onChange={(e) => setLetterSpacing(parseInt(e.target.value))}
                  className="w-full accent-white bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="liquid-glass-strong p-8 rounded-2xl flex flex-col justify-center min-h-[300px]">
            <span className="text-[9px] font-mono text-apple-silver uppercase tracking-widest border-b border-white/5 pb-2 mb-6">DYNAMIC RENDERING WORK BENCH</span>
            <div className="text-center">
              <h3 
                className="text-4xl md:text-6xl tracking-normal transition-all duration-100 ease-out" 
                style={{ fontWeight: fontWeight, letterSpacing: `${letterSpacing}px` }}
              >
                San Francisco
              </h3>
              <p className="text-[11px] text-apple-silver mt-8 font-light max-w-sm mx-auto">
                微调字间距和字重可测试系统如何在极小物理尺寸下动态控制可读性及优雅气场。
              </p>
            </div>
          </div>
        </SectionTransition>
      </section>

      <section id="slide-15" className="snap-section px-6 md:px-16 relative">
        <SectionTransition className="max-w-6xl w-full relative z-10">
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">14. COMPOSITIONAL MATRIX</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">大留白、网格系统与信息层级</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-apple-silver leading-relaxed font-light mb-6">
                苹果的平面排版犹如现代建筑规划。每一个标题、叙事段落和产品大特写图都严格附着于一套隐形的 12 栏或 24 栏黄金比例网格线上。
              </p>
              <p className="text-apple-silver leading-relaxed font-light mb-6">
                通过给首要元素保留超过 50% 的“极极简空白域”，信息不再需要刺耳呼喊。留白处产生强烈的静止张力，用户的注意力自然流转于最核心产品及其精密的工业数据指标。
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-1 md:p-2 bg-gradient-to-tr from-white/[0.02] to-transparent relative overflow-hidden flex items-center justify-center backdrop-blur-sm w-full h-auto">
              <img src="https://i.postimg.cc/Sxc19SRG/Chat-GPT-Image-2026nian6yue6ri-10-18-02.png" alt="Grid System Map" className="w-full h-auto object-contain rounded-xl" />
            </div>
          </div>
        </SectionTransition>
      </section>

      <section id="slide-16" className="snap-section px-6 md:px-16 relative">
        <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">15. THE MATHEMATICS OF CURVES</span>
            <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">超椭圆几何：<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">曲率连续与倒角美学</span></h2>
            <p className="text-apple-silver leading-relaxed font-light mb-6">
              苹果的产品圆角不是“普通四分之一圆弧”拼贴。普通圆角的曲率在直线与圆弧相切交接处会产生断崖式跃变，造成光影高光上的斑驳和心理上的顿感。
            </p>
            <p className="text-apple-silver leading-relaxed font-light mb-6">
              苹果通过高数超椭圆算法构建数学级别的“曲率连续 (G2/G3 Continuity)”。圆角到直线的过渡自然流转，使得视网膜和光线在其表面滑行时完全丝滑。
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowSquircleHelper(!showSquircleHelper)}
                className="px-4 py-2 border border-white/20 text-xs text-white hover:bg-white/10 rounded-full transition-all"
              >
                {showSquircleHelper ? "隐藏曲率差值" : "显示几何曲率差值 (Delta)"}
              </button>
            </div>
          </div>
          <div className="liquid-glass p-8 rounded-3xl flex flex-col justify-center items-center relative min-h-[350px]">
            <span className="text-[9px] font-mono text-apple-silver tracking-widest mb-4 uppercase">SQUIRCLE VS STANDARD ROUND RECT</span>
            <div className="flex gap-8 justify-center items-center w-full">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-3xl border-2 border-red-500/40 bg-white/[0.01] flex items-center justify-center relative">
                  <span className="text-[9px] font-mono text-red-500/70 absolute top-2">STANDARD CORNER</span>
                  <div className="absolute w-2 h-2 bg-red-500 rounded-full -top-1 -right-1 opacity-80"></div>
                </div>
                <span className="text-xs font-mono mt-4 text-apple-silver">普通圆角 (相切跳跃)</span>
              </div>
              <div className="flex flex-col items-center">
                <div id="squircle-box" className="w-32 h-32 border-2 border-white bg-white/[0.03] flex items-center justify-center relative transition-all duration-300" style={{ borderRadius: '2.8rem' }}>
                  <span className="text-[9px] font-mono text-white absolute top-2">SQUIRCLE CORNER</span>
                  <div className={`absolute inset-0 border border-dashed border-apple-gold/30 rounded-full scale-90 transition-all duration-300 pointer-events-none ${showSquircleHelper ? 'opacity-100 scale-100' : 'opacity-0'}`}></div>
                </div>
                <span className="text-xs font-mono mt-4 text-white">苹果超椭圆 (曲率连续)</span>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      <section id="slide-17" className="snap-section px-6 md:px-16 relative">
        <SectionTransition className="max-w-6xl w-full relative z-10">
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">16. AUXILIARY GRAPHICAL SYMBOLS</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">辅助图形体系：<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">流动微光斑与纯粹刻度网格</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent flex flex-col justify-between h-96 backdrop-blur-sm">
              <div>
                <div className="h-28 rounded-lg overflow-hidden border border-white/5 bg-zinc-950 mb-6 flex items-center justify-center">
                  <img src="https://i.postimg.cc/pL9CQ2df/Chat-GPT-Image-2026nian6yue6ri-10-34-57.png" alt="流动光斑" className="w-full h-full object-cover object-center opacity-85" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">流动光斑 (Fluid Specular Gloss)</h3>
                <p className="text-xs text-apple-silver leading-relaxed">用于表达极具质感的玻璃反光，在系统及宣传背景中以极平缓的动效缓慢呼吸浮现，唤醒平面维度的多维景深感。</p>
              </div>
              <span className="text-[10px] font-mono text-apple-silver">USE: SYSTEM UI & PACKAGING</span>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent flex flex-col justify-between h-96 backdrop-blur-sm">
              <div>
                <div className="h-28 rounded-lg overflow-hidden border border-white/5 bg-zinc-950 mb-6 flex items-center justify-center">
                  <img src="https://i.postimg.cc/65C58Zrb/Chat-GPT-Image-2026nian6yue6ri-10-25-38.png" alt="Fine Metrics Grid" className="w-full h-full object-cover object-center opacity-85" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">高精数理刻度 (Fine Metrics Grid)</h3>
                <p className="text-xs text-apple-silver leading-relaxed">源自机械表圈和镜头的发丝级精细线条与数字坐标，通常用于参数展示部分，极大增加版面信息说服力与学术尊严感。</p>
              </div>
              <span className="text-[10px] font-mono text-apple-silver">USE: TECHNICAL SPECIFICATION INFO</span>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent flex flex-col justify-between h-96 backdrop-blur-sm">
              <div>
                <div className="h-28 rounded-lg overflow-hidden border border-white/5 bg-zinc-950 mb-6 flex items-center justify-center">
                  <img src="https://i.postimg.cc/vHxqJQtT/Chat-GPT-Image-2026nian6yue6ri-16-46-57.png" alt="Glassmorphic Shell" className="w-full h-full object-cover object-center opacity-85" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">界面拟态物理卡 (Glassmorphic Shell)</h3>
                <p className="text-xs text-apple-silver leading-relaxed">对物理真实玻璃透射、漫反射、高亮边缘的超高水准数字还原，让虚拟界面宛若飘浮在发光背板上的精细物理透镜。</p>
              </div>
              <span className="text-[10px] font-mono text-apple-silver">USE: OS / WEB PLATFORMS</span>
            </div>
          </div>
        </SectionTransition>
      </section>
    </>
  );
};
