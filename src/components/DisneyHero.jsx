import React from 'react';
import defaultAvatar from '../assets/avatar.jpg';

export default function Hero({ lang }) {
  const currentLang = lang || 'zh';

  const name = currentLang === 'zh' ? '沈绘丹' : 'Huidan Shen';
  const title = currentLang === 'zh' ? '沟通 · 运营 · 合作伙伴管理' : 'Operations & Partner Governance Lead';
  const bio = currentLang === 'zh' 
    ? '全球一线新能源车企（理想汽车）供应商管理公关经验 & 头部网约车（滴滴）渠道运营经验。善于以结果为导向整合资源、控制成本与跨部门协作。'
    : 'Experienced in supplier management PR at top-tier EV companies (Li Auto) and channel operations at leading ride-hailing platforms (DiDi).';

  return (
    <section id="slide-01" className="deck-slide border-b border-[#E5E5E0] min-h-screen flex items-center justify-center bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-6 w-full space-y-8">
        
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xs font-mono text-[#1E40AF] font-bold">01 /</span>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            {currentLang === 'zh' ? '职业概况' : 'CAREER OVERVIEW'}
          </span>
        </div>

        {/* 经典双栏布局：左侧专业定位与摘要 | 右侧干练职业形象 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* 左侧文字与核心定位区 */}
          <div className="flex-1 min-w-0 space-y-6">
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

          {/* 右侧：专业干练的职场相框 */}
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