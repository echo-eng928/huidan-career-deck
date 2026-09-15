import React from 'react';

export default function HowIWork({ lang }) {
  const steps = [
    {
      num: '01',
      title: 'OBSERVE',
      subtitle: lang === 'zh' ? '背景理解与信息感知' : 'Understand Context & People',
      desc: lang === 'zh' ? '从业务模式、合作伙伴利益诉求与项目参与者中获取全貌信息，避免盲目决策。' : 'Observe business context, vendor incentives, and stakeholder expectations.',
      example: lang === 'zh' ? '例：在 JLR 项目初期深入一线理解经销商直播实际困境与诉求。' : 'Example: Diagnosed dealership live stream pain points before setting SOPs.'
    },
    {
      num: '02',
      title: 'STRUCTURE',
      subtitle: lang === 'zh' ? '信息结构化与流程化' : 'Formulate Executable Framework',
      desc: lang === 'zh' ? '把零散、杂乱的信息梳理为清晰的框架、操作规范与可执行标准。' : 'Deconstruct complex data into SOPs, diagnostic rubrics, and workflows.',
      example: lang === 'zh' ? '例：编写标准化接待话术与经销商分级陪跑策略。' : 'Example: Authored live stream script SOPs and dealer grading models.'
    },
    {
      num: '03',
      title: 'CONNECT',
      subtitle: lang === 'zh' ? '资源协同与角色连接' : 'Align Stakeholders & Resources',
      desc: lang === 'zh' ? '连接内部跨部门团队、外部合作伙伴与核心资源，形成推进合力。' : 'Bridge internal teams, external partners, and vendor ecosystems.',
      example: lang === 'zh' ? '例：统筹研发、公关与外部 10+ 核心供应商技术团队无缝协同。' : 'Example: Coordinated R&D, PR, and 10+ tier-1 suppliers for Li Auto tech show.'
    },
    {
      num: '04',
      title: 'EXECUTE',
      subtitle: lang === 'zh' ? '高标准推进与交付' : 'Drive Hands-On Delivery',
      desc: lang === 'zh' ? '把结构化计划坚决推进到实际项目落地，盯紧细节与质量。' : 'Push structured plans into high-standard, zero-error execution.',
      example: lang === 'zh' ? '例：保障理想技术展现场高质有序与零失误交付。' : 'Example: Executed technology exhibition with zero operational failure.'
    },
    {
      num: '05',
      title: 'OPTIMIZE',
      subtitle: lang === 'zh' ? '反馈迭代与机制优化' : 'Continuous Feedback Loop',
      desc: lang === 'zh' ? '根据结果与数据反馈持续调整策略，降低沉没成本，提升运营效率。' : 'Refine governance model based on metrics and cost-benefit analysis.',
      example: lang === 'zh' ? '例：通过竞价机制降低滴滴渠道交易沉沉成本 15%+。' : 'Example: Reduced unit transaction sunk costs by 15%+ via bidding models.'
    }
  ];

  return (
    <section id="slide-05" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">05 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {lang === 'zh' ? '底层工作方式' : 'How I Work'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            OPERATIONAL METHODOLOGY
          </span>
        </div>

        {/* 线性递进五步结构 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((st) => (
            <div 
              key={st.num}
              className="bg-white p-5 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="font-mono text-xs font-bold text-[#1E40AF]">
                  {st.num}
                </div>
                <div className="font-mono font-bold text-sm text-[#111111] tracking-wider">
                  {st.title}
                </div>
                <div className="text-[11px] font-sans font-medium text-[#1E40AF]">
                  {st.subtitle}
                </div>
              </div>

              <div className="space-y-2 border-t border-[#E5E5E0] pt-3 text-[11px] font-sans text-[#666666] leading-relaxed">
                <p>{st.desc}</p>
                <p className="text-[10px] font-mono text-[#111111] bg-[#FBFBFA] p-1.5 border border-[#E5E5E0] rounded-xs">
                  {st.example}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}