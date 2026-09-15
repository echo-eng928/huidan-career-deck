import React from 'react';

export default function Stats({ data, lang }) {
  const hero = data?.[lang]?.hero || {};
  const stats = hero.stats || [
    { value: '3+ Years', label: lang === 'zh' ? '跨部门协同与项目推进' : 'Cross-functional Execution' },
    { value: 'RMB 200K+', label: lang === 'zh' ? '灵活预算释放与成本优化' : 'Budget Reallocated' },
    { value: '15%+', label: lang === 'zh' ? '单笔交易沉没成本降低' : 'Transaction Cost Reduced' }
  ];

  return (
    <section id="slide-02" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">02 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {lang === 'zh' ? '职业快照' : 'Career Snapshot'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            VERIFIED EVIDENCE ANCHORS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((st, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="font-mono text-xs text-[#1E40AF] font-bold">METRIC 0{idx + 1}</div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-[#111111] tracking-tight">
                {st.value}
              </div>
              <p className="text-xs font-sans text-[#666666] leading-relaxed border-t border-[#E5E5E0] pt-3">
                {st.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-white border border-[#E5E5E0] rounded-xs text-xs font-mono text-[#666666] flex items-center space-x-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]"></span>
          <span>
            {lang === 'zh' 
              ? '数据说明：所有数据均为项目实际脱敏数据，严禁虚构与夸大。' 
              : 'Note: Metrics derived from verified operational projects, desensitized for presentation.'}
          </span>
        </div>

      </div>
    </section>
  );
}