import React from 'react';
import defaultAvatar from '../assets/avatar.jpg';
import WelcomeNote from './WelcomeNote';

export default function Hero({ lang }) {
  const currentLang = lang || 'zh';

  const name = currentLang === 'zh' ? '沈绘丹' : 'Huidan Shen';
  const title = currentLang === 'zh' ? '沟通 · 运营 · 合作伙伴管理' : 'Operations & Partner Governance Lead';
  const bio = currentLang === 'zh' 
    ? '熟练连接人与资源，并推动执行，将业务需求转化为可简化、可复用的成型结果。'
    : 'Specializing in connecting stakeholders and executing operations, bridging strategy with scalable results.';

  return (
    <section id="slide-01" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 w-full space-y-8">
        
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xs font-mono text-[#1E40AF] font-bold">01 /</span>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            {currentLang === 'zh' ? '职业概况' : 'CAREER OVERVIEW'}
          </span>
        </div>

        {/* 核心三栏结构：左侧文字 | 中间靠上的手写便签区 | 右侧相框 */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          
          {/* 左侧文字与标语区 */}
          <div className="flex-1 min-w-0 space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#111111] leading-none">
              {name}
            </h1>

            <div className="text-lg font-serif font-bold text-[#1E40AF]">
              {title}
            </div>

            <p className="text-sm font-sans text-[#666666] leading-relaxed max-w-lg">
              {bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666] pt-2">
              <span className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>{currentLang === 'zh' ? '探索下一阶段职业节点' : 'Exploring Next Chapter'}</span>
              </span>
              <span>•</span>
              <span>{currentLang === 'zh' ? '中国 上海 / 嘉兴' : 'Shanghai / Jiaxing, China'}</span>
            </div>
          </div>

          {/* 🌟 完美对齐红框位置：使用 items-start 让它紧贴顶部，与姓名上端平齐 */}
          <div className="hidden lg:flex items-start justify-center pt-1 px-4">
            <WelcomeNote />
          </div>

          {/* 右侧：高质感精致相框 */}
          <div style={{ width: '220px', height: '270px', flexShrink: 0 }} className="bg-white p-2 border border-[#E5E5E0] shadow-sm rounded-xs">
            <img 
              src={defaultAvatar} 
              alt={name} 
              className="w-full h-full object-cover rounded-xs" 
            />
          </div>

        </div>

        {/* 移动端向下适配 */}
        <div className="block lg:hidden pt-4">
          <WelcomeNote />
        </div>

      </div>
    </section>
  );
}