import React from 'react';

export default function Hero({ data, lang, avatarImage }) {
  const hero = data?.[lang]?.hero || {};

  return (
    <section id="slide-01" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 border-b border-[#1E40AF] pb-1">
              <span className="text-xs font-mono text-[#1E40AF] font-bold tracking-widest uppercase">
                01 / CAREER PROFILE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#111111] leading-tight">
              {hero.name || (lang === 'zh' ? '沈绘丹' : 'Huidan Shen')}
            </h1>

            <div className="text-base sm:text-lg font-mono text-[#1E40AF] font-semibold tracking-wide">
              {lang === 'zh' ? '沟通 · 运营 · 合作伙伴管理' : 'Communication · Operations · Partner Management'}
            </div>

            <p className="text-base sm:text-lg font-sans text-[#666666] leading-relaxed max-w-xl">
              {hero.bio || (lang === 'zh' 
                ? '连接信息、人员与执行力。拥有真实商业项目协作经验，擅长梳理复杂业务流程，并借助 AI 工具完成数字化落地表达。'
                : 'Connecting information, people, and execution. Experienced in commercial project coordination, workflow optimization, and AI-assisted digital execution.')}
            </p>

            <div className="pt-4 flex items-center space-x-4 text-xs font-mono text-[#666666]">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                {lang === 'zh' ? '探索下一阶段职业节点' : 'Exploring Next Chapter'}
              </span>
              <span>•</span>
              <span>Shanghai / Jiaxing, China</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-48 sm:w-64 aspect-[3/4] bg-[#FBFBFA] p-2 border border-[#E5E5E0] shadow-sm rounded-xs">
              {avatarImage ? (
                <img
                  src={avatarImage}
                  alt={hero.name || "Portrait"}
                  className="w-full h-full object-cover rounded-xs border border-[#E5E5E0]"
                />
              ) : (
                <div className="w-full h-full border border-dashed border-[#E5E5E0] flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-mono text-xs text-[#1E40AF] font-bold">PORTRAIT</span>
                  <span className="text-[10px] font-mono text-[#666666] mt-1">HUIDAN SHEN</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}