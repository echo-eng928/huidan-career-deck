import React from 'react';
import { User } from 'lucide-react';

export default function Hero({ data, lang }) {
  const currentLang = lang || 'zh';

  const name = data?.[currentLang]?.hero?.name || (currentLang === 'zh' ? '沈绘丹' : 'Huidan Shen');
  const title = data?.[currentLang]?.hero?.title || (currentLang === 'zh' ? '沟通 · 运营 · 合作伙伴管理' : 'Operations & Partner Governance Lead');
  const bio = data?.[currentLang]?.hero?.bio || (currentLang === 'zh' 
    ? '擅长连接人与资源，并推动执行，将业务需求转化为可简化、可复用的结构化结果。'
    : 'Specializing in connecting stakeholders and executing operations, bridging strategy with scalable results.');

  const avatar = data?.[currentLang]?.hero?.avatar || null;

  return (
    <section id="slide-01" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xs font-mono text-[#1E40AF] font-bold">01 /</span>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            {currentLang === 'zh' ? '职业概况' : 'CAREER OVERVIEW'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* 左侧文字与标语 */}
          <div className="md:col-span-8 space-y-6">
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
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{currentLang === 'zh' ? '探索下一阶段职业节点' : 'Exploring Next Chapter'}</span>
              </span>
              <span>•</span>
              <span>{currentLang === 'zh' ? '中国 上海 / 嘉兴' : 'Shanghai / Jiaxing, China'}</span>
            </div>
          </div>

          {/* 右侧肖像展示区 */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-56 h-72 bg-white border border-[#E5E5E0] p-3 rounded-xs shadow-xs flex flex-col justify-between">
              <div className="w-full h-full bg-[#FBFBFA] border border-dashed border-[#E5E5E0] rounded-xs overflow-hidden flex flex-col items-center justify-center text-center p-4">
                {avatar ? (
                  <img src={avatar} alt={name} className="w-full h-full object-cover rounded-xs" />
                ) : (
                  <div className="space-y-2">
                    <User size={32} className="mx-auto text-[#1E40AF]/40" />
                    <div className="font-serif font-bold text-xs text-[#111111]">
                      {currentLang === 'zh' ? '肖像照片' : 'Portrait'}
                    </div>
                    <div className="font-mono text-[10px] text-[#666666]">
                      {currentLang === 'zh' ? '点击右上角 ⚙ 上传照片' : 'Upload via Admin Drawer'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}