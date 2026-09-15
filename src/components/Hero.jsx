import React from 'react';
import defaultAvatar from '../assets/avatar.jpg';

export default function Hero({ lang }) {
  const currentLang = lang || 'zh';

  const name = currentLang === 'zh' ? '沈绘丹' : 'Huidan Shen';
  const title = currentLang === 'zh' ? '沟通 · 运营 · 合作伙伴管理' : 'Operations & Partner Governance Lead';
  const bio = currentLang === 'zh' 
    ? '熟练连接人与资源，并推动执行，将业务需求转化为可简化、可复用的成型结果。'
    : 'Specializing in connecting stakeholders and executing operations, bridging strategy with scalable results.';

  return (
    <section id="slide-01" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xs font-mono text-[#1E40AF] font-bold">01 /</span>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            {currentLang === 'zh' ? '职业概况' : 'CAREER OVERVIEW'}
          </span>
        </div>

        {/* 严格锁定左右两栏双栏结构，右侧为精美相框 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          
          {/* 左侧文字与标语区 */}
          <div style={{ flex: '1 1 0%', minWidth: '0' }} className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#111111] leading-none">
              {name}
            </h1>

            <div className="text-lg font-serif font-bold text-[#1E40AF]">
              {title}
            </div>

            <p className="text-sm font-sans text-[#666666] leading-relaxed max-w-xl">
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

          {/* 右侧：第二张图中的高质感精致相框 */}
          <div style={{ width: '220px', height: '270px', flexShrink: 0 }} className="bg-white p-2 border border-[#E5E5E0] shadow-sm rounded-xs">
            <img 
              src={defaultAvatar} 
              alt={name} 
              className="w-full h-full object-cover rounded-xs" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}