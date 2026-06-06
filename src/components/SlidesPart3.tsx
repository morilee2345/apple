import React from 'react';
import { SectionTransition } from './SectionTransition';

export const SlidesPart3 = () => (
  <>
    <section id="slide-18" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        <div>
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">17. INDUSTRIAL MORPHOLOGY</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">产品外观的一体化纯粹切面</h2>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            苹果硬件产品的物理外壳是对“绝对实体”的终极探索。其执拗地采用一整块实体铝合金作为加工原点，通过无差错的高精雕琢，让物理天线带、接口边缘、扬声器细孔都精美契合。
          </p>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            这样的形式彻底意图消除传统装配造成的廉价拼接缝隙，使设备展现出犹如一件现代太空雕塑般的整体感与力量，表现出坚不可摧的物理秩序美。
          </p>
        </div>
        <div className="relative flex justify-center items-center py-12 w-full">
          <div className="relative w-full max-w-md border border-white/10 rounded-2xl p-2 bg-gradient-to-tr from-white/[0.02] to-transparent shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
            <img src="https://i.postimg.cc/KjDGHS8Y/yuan-jiao-bi-li-hai-shi-dao-shu-xue-ti-1-zi-chuanone-hao-lai-zi-xiao-hong-shu-wang-ye-ban.png" alt="Precision Chassis Schematic" className="w-full h-auto object-contain rounded-xl" />
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-19" className="snap-section px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" alt="Titanium Texture Abstract" className="w-full h-full object-cover" />
      </div>
      <SectionTransition className="max-w-6xl w-full relative z-10">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">18. DESIGN TEXTURES & MANUFACTURING CRAFT</span>
        <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">材料自证语言：铝合金、硬质玻璃与钛金属</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 rounded-2xl bg-[#1C1C1E]/80 flex flex-col justify-between h-auto min-h-[440px] backdrop-blur-sm">
            <div>
              <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest block mb-6">ANODIZED ALUMINUM</span>
              <h3 className="text-xl font-light text-white mb-4">阳极氧化与微喷砂铝</h3>
              <p className="text-xs text-apple-silver leading-relaxed">精密的锆砂高能喷涂，赋予铝合金介于冰冷金属与丝质纤维之间的神奇折光手感。不产生耀眼廉价反射，只在拐角处晕开极其高级的渐层漫反射。</p>
            </div>
            <div className="w-full h-36 rounded-lg overflow-hidden border border-white/5 bg-zinc-950/40 mt-4">
              <img src="https://i.postimg.cc/6q2VrcW5/Chat-GPT-Image-2026nian6yue6ri-10-55-19.png" alt="Anodized Aluminum detail" className="w-full h-full object-cover object-center opacity-85" />
            </div>
          </div>
          <div className="p-8 border border-white/5 rounded-2xl bg-[#2C2C2E]/80 flex flex-col justify-between h-auto min-h-[440px] backdrop-blur-sm">
            <div>
              <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest block mb-6">CHEMICALLY STRENGTHENED GLASS</span>
              <h3 className="text-xl font-light text-white mb-4">微米级化学强化双离子玻璃</h3>
              <p className="text-xs text-apple-silver leading-relaxed">一整片后盖玻璃通过精密雕琢蚀刻。摄像头基底处采用亮面，其余则是柔和磨砂哑光，同一片物理介质演绎了完全迥异的光学表面形态。</p>
            </div>
            <div className="w-full h-36 rounded-lg overflow-hidden border border-white/5 bg-zinc-950/40 mt-4">
              <img src="https://i.postimg.cc/C5BCG7hM/Chat-GPT-Image-2026nian6yue6ri-10-55-20.png" alt="Chemically Strengthened Glass detail" className="w-full h-full object-cover object-center opacity-85" />
            </div>
          </div>
          <div className="p-8 border border-white/5 rounded-2xl bg-[#0F0F11]/80 flex flex-col justify-between h-auto min-h-[440px] backdrop-blur-sm">
            <div>
              <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest block mb-6">AEROSPACE-GRADE TITANIUM</span>
              <h3 className="text-xl font-light text-white mb-4">航空级五级钛金属</h3>
              <p className="text-xs text-apple-silver leading-relaxed">利用精细的发丝级拉丝微雕工艺，让钛中框同时具备钢的无上坚韧和暗灰合金特有的拉丝工艺美。不仅带来优秀的散热减重，更平添高贵硬核气质。</p>
            </div>
            <div className="w-full h-36 rounded-lg overflow-hidden border border-white/5 bg-zinc-950/40 mt-4">
              <img src="https://i.postimg.cc/XqGKfLjV/Chat-GPT-Image-2026nian6yue6ri-10-56-40.png" alt="Aerospace Titanium detail" className="w-full h-full object-cover object-center opacity-85" />
            </div>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-20" className="snap-section px-6 md:px-16 relative overflow-hidden">
      <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">19. THE PACKAGING RITUALISM</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">开箱仪式感：<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">气压阻尼下降与无塑绿色秩序</span></h2>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            苹果的包装盒是一场教科书式的视觉与触觉交响乐。为了实现完美的“3秒滑落降速阻尼感”，包装工程师在内部气压平衡和纸壁摩擦系数上进行了万次修正，目的在于拉长开箱期待，塑造对产品的神圣仪式感。
          </p>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            同时，整个包装几乎由 100% 环保回收植物纸纤维制成，精巧的防伪拉折带（Pull-Tab）省去了传统塑料塑封，将开箱由单纯的物质占有，升华至对未来低碳未来的美学认同。
          </p>
        </div>
        <div className="liquid-glass p-4 rounded-3xl relative min-h-[320px] flex flex-col justify-between overflow-hidden">
          <span className="text-[9px] font-mono text-apple-silver tracking-widest uppercase mb-4 block">PACKAGING RITUAL SCHEMATIC</span>
          <div className="my-auto rounded-xl overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center h-48">
            <img src="https://i.postimg.cc/Dz41ZZmk/Chat-GPT-Image-2026nian6yue6ri-16-50-59.png" alt="Packaging Damping Schematic" className="w-full h-full object-cover object-center opacity-85" />
          </div>
          <div className="flex justify-between text-[9px] font-mono text-apple-silver border-t border-white/5 pt-4 mt-4">
            <span>PULL-TAB: RECYCLABLE PAPER ONLY</span>
            <span>DESCENT AIR DAMPING: ~3.2S</span>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-21" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-6xl w-full relative z-10">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">20. DESIGN CASE STUDY</span>
        <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">经典案例解构：全系产品设计语言变迁</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 liquid-glass rounded-2xl border border-white/5 hover:border-white/15 hover:bg-white/[0.03] transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80" alt="iPhone Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            </div>
            <span className="text-3xl font-thin tracking-widest text-apple-silver block mb-6">iPhone</span>
            <h3 className="text-base font-medium text-white mb-2">极致圆角与极窄边缘</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">中框几何过渡完全重塑，让超精细的钛金属材质触感与 system 交互完美融合为统一物理体。</p>
          </div>
          <div className="p-4 liquid-glass rounded-2xl border border-white/5 hover:border-white/15 hover:bg-white/[0.03] transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="MacBook Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            </div>
            <span className="text-3xl font-thin tracking-widest text-apple-silver block mb-6">MacBook</span>
            <h3 className="text-base font-medium text-white mb-2">一体雕刻与绝对比例</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">一整块铝合金CNC铣制而成，在打开、关闭和打字时力保最极致的整体刚度与静音秩序。</p>
          </div>
          <div className="p-4 liquid-glass rounded-2xl border border-white/5 hover:border-white/15 hover:bg-white/[0.03] transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80" alt="Apple Watch Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            </div>
            <span className="text-3xl font-thin tracking-widest text-apple-silver block mb-6">Watch</span>
            <h3 className="text-base font-medium text-white mb-2">人本微穿戴物理曲面</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">让传感器完全融入圆润如鹅卵石般的物理背盖. 数码表冠的手感通过精准震动反馈转译为数字层。</p>
          </div>
          <div className="p-4 liquid-glass rounded-2xl border border-white/5 hover:border-white/15 hover:bg-white/[0.03] transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&q=80" alt="Vision Pro Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            </div>
            <span className="text-3xl font-thin tracking-widest text-apple-silver block mb-6">Vision Pro</span>
            <h3 className="text-base font-medium text-white mb-2">空间计算时代几何体</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">利用全维曲面玻璃融合精密散热系统. 将物理现实空间完全置入无界高精计算界面的奇点。</p>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-22" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        <div>
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">21. COGNITIVE SYNCHRONICITY</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">生态连贯性：<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">跨屏幕、跨场景的视觉连贯性</span></h2>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            苹果的硬件并非单打独斗，在用户视线在手机、电脑、手表和耳机之间流转时，其图形语言、界面组件和动画微动效展示了叹为观止的一致性。
          </p>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            在手机上拷贝，在平板上即时粘贴；在Mac上滑动窗口时，iPad上的工具栏完全共享同一种毛玻璃投影。通过消除不同媒介间的感官摩擦，苹果在底层用视觉建立了极其坚固的用户留存护城河。
          </p>
        </div>
        <div className="liquid-glass rounded-3xl overflow-hidden w-full max-w-lg p-2">
          <img src="https://i.postimg.cc/KvPV1pXg/Chat-GPT-Image-2026nian6yue6ri-11-03-02.png" alt="跨设备、多终端生态连贯性交互分析图" className="w-full h-auto object-contain block rounded-2xl" />
        </div>
      </SectionTransition>
    </section>

    <section id="slide-23" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-6xl w-full relative z-10">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">22. ADVERTISING STRATEGY & NARRATIVE</span>
        <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">营销美学：高情绪、极致特写与留白叙事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-apple-silver leading-relaxed font-light">
              苹果的广告设计是一场对商业宣传的无形解毒。大多数厂商致力于将密密麻麻的技术字眼铺满页面，苹果却反其道而行之。巨幅广告中常常只有一个产品零件的高清物理特写，背景则是一望无际的雪白或深邃炭黑。
            </p>
            <p className="text-apple-silver leading-relaxed font-light">
              文案克制到往往只剩一到两个单词。学术上对繁杂视觉噪音的彻底过滤，不仅让产品本身拥有了纪念碑式的威严，还给予了用户充分的呼吸思考，建立了极具高级感的情感纽带。
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-12 flex flex-col justify-center items-center relative overflow-hidden min-h-[300px]">
            <span className="text-[9px] font-mono text-apple-silver tracking-widest block mb-12 uppercase">SIMULATED MASTER PIECE OUTDOOR AD</span>
            <div className="text-center">
              <h3 className="text-6xl font-thin tracking-tight mb-4">It's here.</h3>
              <p className="text-xs text-apple-silver tracking-[0.3em] font-light">MacBook Air</p>
            </div>
            <div className="absolute bottom-6 flex justify-between w-full px-8 text-[8px] font-mono text-apple-silver">
              <span>留白面积：~82%</span>
              <span>字形 : SF Pro Display Thin</span>
            </div>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-24" className="snap-section px-6 md:px-16 relative overflow-hidden">
      <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">23. SPATIAL ARCHITECTURE EXEGESIS</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">Apple Store：<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">无缝实体物理神庙的空间可读性</span></h2>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            Apple Store 是苹果品牌设计中最大尺度的“实体产品”。它不再只是零售铺面，而是一个充当现代城市广场、充满仪式感的技术神庙。
          </p>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            巨幅、无框的落地超精钢化玻璃幕墙打破了建筑室内与外界街道的物理和心理边界。店内，原装进口橡木展示台、无瑕疵的白色水磨石地板 and 均匀顶置漫反射柔光系统，都在延续着苹果产品和包装一脉相承 of 对齐秩序。
          </p>
        </div>
        <div className="liquid-glass-strong p-2 rounded-3xl relative min-h-[320px] h-[320px] md:h-[400px]">
          <img src="https://i.postimg.cc/Qdb6dgJC/Chat-GPT-Image-2026nian6vue6ri-11-05-40.png" alt="Apple Store Architecture Shanghai" className="w-full h-full object-cover object-center rounded-[20px]" />
        </div>
      </SectionTransition>
    </section>

    <section id="slide-25" className="snap-section px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 ambient-glow-warm"></div>
      <SectionTransition className="max-w-4xl w-full text-center relative z-10 pt-12">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">24. THE THOUGHT PROCESS CLOSURE</span>
        <h2 className="font-heading text-5xl md:text-7xl italic leading-tight mb-8">无形之形，大音希声：<br/><span className="not-italic text-2xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-white to-neutral-400">苹果设计范式的启示与学术思考</span></h2>
        <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8"></div>
        <p className="text-apple-silver leading-relaxed font-light mb-12 max-w-2xl mx-auto text-sm md:text-base">
          苹果之所以无可代替，是因为它通过数理逻辑、材质诚实、极简形式和极致留白，将冷硬的硅谷技术赋予了极致的美学范式。在未来的空间计算与 AI 交互时代，苹果依然用设计证明着：对极致美德、秩序与人文尺度的坚守，才是科技通往未来的真正途径。
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-apple-silver">
          <span className="px-3 py-1.5 border border-white/10 rounded-full bg-black/40 backdrop-blur-sm">研究汇报：完毕</span>
          <span className="px-3 py-1.5 border border-white/10 rounded-full bg-black/40 backdrop-blur-sm">感谢聆听与答辩 / THANK YOU</span>
        </div>
      </SectionTransition>
    </section>
  </>
);
