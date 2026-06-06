import React from 'react';
import { SectionTransition } from './SectionTransition';

export const SlidesPart1 = () => (
  <>
    <section id="slide-2" className="snap-section px-6 md:px-16 relative overflow-hidden">
      <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-stretch">
        <div className="flex flex-col justify-between py-12">
          <div>
            <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">01. BRAND PROFILE</span>
            <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">从技术载体到全球<br/><span className="not-italic text-2xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-apple-silver">生活方式的美学转向</span></h2>
            <p className="text-apple-silver leading-relaxed font-light mb-6">
              苹果并非单纯的 hardware 制造商，而是一个利用视觉艺术与设计哲学来重构全球数字体验的生活方式 brand。其核心竞争力在于通过精妙的物理媒介、空间布局与纯粹的平面秩序，与用户之间建立一种精神上的同盟。
            </p>
          </div>
          <blockquote className="border-l-2 border-white pl-4 italic text-sm text-apple-silver">
            “设计不仅仅是产品的外观。设计是其运作的核心。” — 史记·乔布斯
          </blockquote>
        </div>
        <div className="liquid-glass-strong relative overflow-hidden rounded-2xl h-[400px] md:h-full">
          <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80" alt="Minimalist Workspace" className="w-full h-full object-cover" />
        </div>
      </SectionTransition>
    </section>

    <section id="slide-3" className="snap-section px-6 md:px-16 relative overflow-hidden">
      <SectionTransition className="max-w-6xl w-full relative z-10">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">02. EVOLUTION PATHWAY</span>
        <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">麦金塔到生态宇宙的<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">视觉史实变迁</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="liquid-glass p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900">
              <img src="https://i.postimg.cc/c12DQ2SX/42nian-qian-Apple-fa-bu-shou-dai-Mac-dian-nao-1-DOPETECH-lai-zi-xiao-hong-shu-wang-ye-ban.jpg" alt="Vintage Macintosh Era" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-mono font-thin text-apple-silver group-hover:text-white transition-colors">1984</span>
            <h3 className="text-base font-medium mt-3 mb-1 text-white">Macintosh 启蒙</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">拟物化微图形与经典的网格位图图标，确立了“人人皆可理解”的人机图形秩序。</p>
          </div>
          <div className="liquid-glass p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80" alt="Retro Tech Era" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-mono font-thin text-apple-silver group-hover:text-white transition-colors">1998</span>
            <h3 className="text-base font-medium mt-3 mb-1 text-white">iMac 糖果彩色</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">半透明果冻色机身，用色彩打破电脑沉闷，将设计带入消费级时尚风暴。</p>
          </div>
          <div className="liquid-glass p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80" alt="Modern iPhone Era" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-mono font-thin text-apple-silver group-hover:text-white transition-colors">2007</span>
            <h3 className="text-base font-medium mt-3 mb-1 text-white">iPhone 触控美学</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">多点触控对物理按键的视觉吞噬，拟物化系统界面彻底重塑感官认知。</p>
          </div>
          <div className="liquid-glass p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all group">
            <div className="h-32 rounded-lg overflow-hidden mb-4 bg-zinc-900 flex items-center justify-center">
              <img src="https://i.postimg.cc/fy8DPsfZ/Vision-Pro-2-79wan-shen-ji-che-di-luo-mu-1-guo-jiang-lai-zi-xiao-hong-shu-wang-ye-ban.jpg" alt="Vision Pro Space computing" className="w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-mono font-thin text-apple-silver group-hover:text-white transition-colors">Present</span>
            <h3 className="text-base font-medium mt-3 mb-1 text-white">Vision Pro 空间计算</h3>
            <p className="text-[11px] text-apple-silver leading-relaxed">将二维平面视觉体系拓展至无界三维物理空间，光影折射与漫反射成全新语言。</p>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-4" className="snap-section px-6 md:px-16 relative overflow-hidden">
      <SectionTransition className="max-w-4xl w-full text-center relative z-10">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">03. CORE BRAND ETHOS</span>
        <h2 className="font-heading text-5xl md:text-7xl italic leading-tight mb-8">“Think Different”<br/><span className="not-italic text-3xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white">反叛者与拓荒者的精神底蕴</span></h2>
        <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8"></div>
        <p className="text-apple-silver md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
          1997 年的广告不仅是单纯的营销案，辅助了苹果在信仰层层面对设计界的宣言。设计在此成为了重塑生活方式的精神信仰。苹果的视觉表现从不讨好大众，而是通过自律、冷静和自信来吸引“同类”。
        </p>
        <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-xs text-apple-silver font-mono bg-black/40 backdrop-blur-sm">
          以非同凡想为纲，构建特立独行的视觉壁垒
        </div>
      </SectionTransition>
    </section>

    <section id="slide-5" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-6xl w-full relative z-10">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">04. VISUAL PARADIGMS</span>
        <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">品牌视觉核：五个极境维度</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="p-8 liquid-glass rounded-xl text-center flex flex-col justify-between h-80">
            <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest">MINIMALISM</span>
            <h3 className="font-heading text-3xl italic text-white my-4">极致留白</h3>
            <p className="text-xs text-apple-silver leading-relaxed">克制非必要的视觉元素，将内容本身最大程度地推至叙事核心。</p>
          </div>
          <div className="p-8 liquid-glass rounded-xl text-center flex flex-col justify-between h-80">
            <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest">SYMMETRY</span>
            <h3 className="font-heading text-3xl italic text-white my-4">秩序网格</h3>
            <p className="text-xs text-apple-silver leading-relaxed">严格的数理逻辑对齐与间距规范，塑造高专业感的严谨视觉张力。</p>
          </div>
          <div className="p-8 liquid-glass rounded-xl text-center flex flex-col justify-between h-80">
            <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest">HONESTY</span>
            <h3 className="font-heading text-3xl italic text-white my-4">材料自证</h3>
            <p className="text-xs text-apple-silver leading-relaxed">忠实还原铝合金、高精玻璃和蓝宝石的原生物理光泽与精密纹理。</p>
          </div>
          <div className="p-8 liquid-glass rounded-xl text-center flex flex-col justify-between h-80">
            <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest">HUMANISM</span>
            <h3 className="font-heading text-3xl italic text-white my-4">人尺度交互</h3>
            <p className="text-xs text-apple-silver leading-relaxed">以生理操作的直觉与视网膜清晰度为准绳，消除人机交互边界。</p>
          </div>
          <div className="p-8 liquid-glass rounded-xl text-center flex flex-col justify-between h-80">
            <span className="text-[10px] font-mono text-apple-silver uppercase tracking-widest">FUTURE</span>
            <h3 className="font-heading text-3xl italic text-white my-4">太空未来感</h3>
            <p className="text-xs text-apple-silver leading-relaxed">微弱的折射渐变和中性极深色彩，带来如黑洞般的优雅凝练深度。</p>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-6" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">05. BRAND POSITIONING</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">高端智能技术与<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">美学先锋艺术的锚点</span></h2>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            苹果跳脱出了传统“科技配置性价比”的低纬肉搏，通过赋予其物理形态极高水平的审美意识，卡位至“带有技术功能的高端生活艺术品”。在消费者的潜意识中，持有苹果设备是一种“高阶审美鉴赏力”和“智识阶层身份”的静默标识。
          </p>
        </div>
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.postimg.cc/0QdVP23w/cong-song-dai-qi-min-dao-Apple-ji-he-yi-xie-tu-xing-zhe-xue-de-lian-xiang-1-rui-zhi-Ray-Making-lai-zi-xiao-hong-shu-wang-ye-ban.jpg" alt="Apple Premium Setup" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-apple-black/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="text-[10px] font-mono text-apple-silver">VISUAL PROPORTION DESIGN</span>
            <p className="text-xs text-white">科技与人文交汇的美学中和点</p>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-7" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-6xl w-full relative z-10">
        <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">06. THE TARGETED AUDIENCE</span>
        <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-12">审美型、创造型与效率型<br/><span className="not-italic text-3xl md:text-4xl font-light text-white">社群的情感共振</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10 transition-all backdrop-blur-sm">
            <span className="text-xs font-mono text-apple-silver block mb-6">AESTHETE / 审美向用户</span>
            <h3 className="text-xl font-light text-white mb-4">极致感官纯粹</h3>
            <p className="text-sm text-apple-silver leading-relaxed">他们对非必要的光斑、冗余按键表现极度的生理排斥，追求与环境融为一体的空灵造物之美。</p>
          </div>
          <div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10 transition-all backdrop-blur-sm">
            <span className="text-xs font-mono text-apple-silver block mb-6">CREATIVE / 创造型专家</span>
            <h3 className="text-xl font-light text-white mb-4">无干扰创客平台</h3>
            <p className="text-sm text-apple-silver leading-relaxed">视设备为思维的完美延伸。不越俎代庖，只提供最平顺、最高色准的无负担施展媒介。</p>
          </div>
          <div className="p-8 border border-white/5 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent hover:border-white/10 transition-all backdrop-blur-sm">
            <span className="text-xs font-mono text-apple-silver block mb-6">EFFICIENT / 效率型精英</span>
            <h3 className="text-xl font-light text-white mb-4">无缝流转秩序</h3>
            <p className="text-sm text-apple-silver leading-relaxed">崇尚极简工作流。跨设备秒级接力、全局一致性排版 and 直觉操作，用极致的设计逻辑消弥等待阻尼。</p>
          </div>
        </div>
      </SectionTransition>
    </section>

    <section id="slide-8" className="snap-section px-6 md:px-16 relative">
      <SectionTransition className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono text-apple-silver tracking-widest block mb-4">07. DESIGN ARCHITECTURE</span>
          <h2 className="font-heading text-4xl md:text-6xl italic leading-tight mb-6">少，但是更好<br/><span className="not-italic text-2xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-apple-silver">包豪斯到拉姆斯的设计传承</span></h2>
          <p className="text-apple-silver leading-relaxed font-light mb-6">
            苹果首席设计大师 Jony Ive 深受德国乌尔姆学派、博朗（Braun）灵魂人物迪特·拉姆斯（Dieter Rams）的影响。
          </p>
          <p className="text-xs text-apple-silver leading-relaxed border-t border-white/10 pt-4">
            迪特的十条好设计原则 — 创新的、实用的、美观的、易懂的、克制的、诚实的、长命的、关注细节的、环保的、尽可能少的设计 — 被苹果完全重组，构成了现代电子消费品设计的绝对范式。
          </p>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-6 p-4 border border-white/5 rounded-xl bg-white/[0.01] backdrop-blur-sm">
            <span className="text-lg font-mono text-apple-silver">01</span>
            <p className="text-sm text-apple-silver font-light"><strong className="text-white">消除装饰：</strong> 物理轮廓上的每一条缝隙，每一个折角，都必须为了装配、手持物理感受或功能散热而生，拒绝虚妄无用的纯装饰线条。</p>
          </div>
          <div className="flex items-center gap-6 p-4 border border-white/5 rounded-xl bg-white/[0.01] backdrop-blur-sm">
            <span className="text-lg font-mono text-apple-silver">02</span>
            <p className="text-sm text-apple-silver font-light"><strong className="text-white">消隐技术：</strong> 当技术真正炉火纯青时，它应当优雅隐身，让技术隐形正是设计所能赋予用户的最大体面。</p>
          </div>
          <div className="flex items-center gap-6 p-4 border border-white/5 rounded-xl bg-white/[0.01] backdrop-blur-sm">
            <span className="text-lg font-mono text-apple-silver">03</span>
            <p className="text-sm text-apple-silver font-light"><strong className="text-white">永恒的材质：</strong> 利用最接近地壳质感、最硬核的材料，去抵抗时间的折损，使其设计不仅是当时的先锋，更是未来的考古艺术品。</p>
          </div>
        </div>
      </SectionTransition>
    </section>
  </>
);
