import React from 'react';

export default function Projects({ data, lang }) {
  const currentLang = lang || 'zh';

  // 1. 中英文两套完整的基准案例数据
  const defaultCases = [
    {
      id: '01',
      title: currentLang === 'zh' ? '理想汽车 — 合作伙伴技术展' : 'Li Auto — Partner Technology Exhibition',
      category: currentLang === 'zh' ? 'PARTNER MANAGEMENT · EVENT OPERATIONS' : 'PARTNER MANAGEMENT · EVENT OPERATIONS',
      context: currentLang === 'zh' 
        ? '理想汽车核心技术合作伙伴成果展示与交流需求，需统筹外部十余家核心供应商高标准交付。'
        : 'Exhibition and exchange of technological achievements with core automotive supply chain partners.',
      role: currentLang === 'zh' ? '项目运营统筹 & 合作伙伴协调' : 'Lead Operations & Partner Governance',
      whatIDid: currentLang === 'zh' 
        ? '统筹跨部门团队与外部核心技术合作伙伴，完成全链路展示、流程对接与现场运营，确保高标准交付。'
        : 'Formulated exhibition alignment standards, managed booth logistics, and led on-site execution.',
      collaboration: currentLang === 'zh' ? '研发部门、品牌公关、外部十余家核心供应商技术团队' : 'R&D, PR, and 10+ external core tier-1 vendor teams',
      outcome: currentLang === 'zh' 
        ? ['统筹 10+ 核心伙伴参展', '展示满意度达 98%', '全流程零失误交付'] 
        : ['10+ Key Vendors Coordinated', '98% Partner Satisfaction', 'Zero-Error Execution'],
      image: null
    },
    {
      id: '02',
      title: currentLang === 'zh' ? 'JLR 捷豹路虎 — 经销商新媒体运营' : 'JLR Douyin Live Streaming Operations',
      category: currentLang === 'zh' ? 'CHANNEL OPERATIONS · GOVERNANCE' : 'CHANNEL OPERATIONS · GOVERNANCE',
      context: currentLang === 'zh' 
        ? 'JLR 西区经销商抖音渠道销售转化效率不一，缺乏标准化直播接待与话术转化机制。'
        : 'Enhancing Douyin live streaming sales efficiency and standardization for JLR dealerships in West Region.',
      role: currentLang === 'zh' ? '区域新媒体运营负责人 & SOP策略推进' : 'Regional Social Media Operations Lead',
      whatIDid: currentLang === 'zh' 
        ? '负责 JLR 捷豹路虎经销商新媒体销售运营，对区域直播与线索转化结果负责。通过经销商账号分级诊断与阶段性陪跑，输出短视频推广策略与直播接待标准化 SOP 手册，推动抖音渠道销售目标达成。'
        : 'Developed dealership account diagnostic frameworks, standardized live streaming SOPs, and tracked weekly KPIs.',
      collaboration: currentLang === 'zh' ? 'JLR 商务大区团队、西区各经销商总经理及新媒体团队' : 'JLR Regional Managers, Dealership GMs, and Streamers',
      outcome: currentLang === 'zh' 
        ? ['制定直播话术、后链路转化标准化 SOP', '直播线索转化率达 50%', '达成团队西区抖音渠道 Q3 线索目标'] 
        : ['50% Lead Conversion Rate', 'Standardized Script SOPs', 'Met West Region Q3 Sales Target'],
      image: data?.zh?.projects?.items?.[1]?.image || null
    },
    {
      id: '03',
      title: currentLang === 'zh' ? '交易成本优化与预算再分配' : 'Transaction Cost Optimization & Budget Reallocation',
      category: currentLang === 'zh' ? 'BUSINESS OPERATIONS · COST CONTROL' : 'BUSINESS OPERATIONS · COST CONTROL',
      context: currentLang === 'zh' 
        ? '渠道交易沉没成本偏高，合作商户分润机制缺乏动态竞价与激励约束。'
        : 'High transaction sunk costs and rigid commission structures among channel merchants.',
      role: currentLang === 'zh' ? '商业成本优化负责人 & 策略推进' : 'Cost Optimization & Strategy Lead',
      whatIDid: currentLang === 'zh' 
        ? '基于平台运营预算及不同类型商户利润结构，牵头制定城市群分润政策优化方案，按商户等级与履约表现差异化调整激励政策。'
        : 'Deconstructed transaction fee structures, renegotiated vendor bidding terms, and optimized merchant tiering.',
      collaboration: currentLang === 'zh' ? '财务部、法务部、外部大区渠道合作商户' : 'Finance, Legal, and Regional Channel Merchants',
      outcome: currentLang === 'zh' 
        ? ['释放 20万+ 灵活预算', '单笔交易沉没成本下降 15%+', '优化商户梯队履约效率'] 
        : ['RMB 200K+ Budget Reallocated', '15%+ Unit Transaction Cost Reduction', 'Streamlined Merchant Governance'],
      image: null
    },
    {
      id: '04',
      title: currentLang === 'zh' ? '合作伙伴数据看板与风险监测' : 'Partner Data Dashboard & Risk Monitoring',
      category: currentLang === 'zh' ? 'DATA & RISK · DESENSITIZED CASE STUDY' : 'DATA & RISK · DESENSITIZED CASE STUDY',
      context: currentLang === 'zh' 
        ? '合作商户与渠道交易履约风险需常态化监控，缺乏结构化的数据预警机制。'
        : 'Need for structured daily risk monitoring and metrics tracking across key partners.',
      role: currentLang === 'zh' ? '数据监测与渠道风控运营' : 'Channel Risk & Data Operations',
      whatIDid: currentLang === 'zh' 
        ? '建立渠道运营关键指标监控机制，搭建商户风险评估与交易预警模型，提升商户合作合规性与履约质量。'
        : 'Established key metric governance and partner risk diagnostic frameworks to ensure merchant compliance.',
      collaboration: currentLang === 'zh' ? '风控团队、渠道运营部、技术团队' : 'Risk Management, Channel Ops, Tech Teams',
      outcome: currentLang === 'zh' 
        ? ['构建常态化数据监测看板', '及时识别履约风险项', '保障交易通道稳定性'] 
        : ['Risk Alert Model Built', 'Regular Dashboard Tracking', 'Stable Merchant Compliance'],
      image: null
    }
  ];

  // 2. 强校验：如果处于英文状态（EN），且读取到的 outcome 包含中文字符，强行使用英文基准替换
  const displayCases = (data?.[currentLang]?.projects?.items || defaultCases).map((cs, idx) => {
    const defaultItem = defaultCases[idx] || defaultCases[0];
    let outcomes = Array.isArray(cs.outcome) && cs.outcome.length > 0 ? cs.outcome : defaultItem.outcome;

    // 语言纯净度校验：英文状态下过滤掉中文字符
    if (currentLang === 'en') {
      const hasChinese = outcomes.some(item => /[\u4e00-\u9fa5]/.test(item));
      if (hasChinese) {
        outcomes = defaultItem.outcome;
      }
    }

    return {
      ...defaultItem,
      ...cs,
      title: cs.title || defaultItem.title,
      context: cs.context || defaultItem.context,
      role: cs.role || defaultItem.role,
      whatIDid: cs.whatIDid || cs.description || defaultItem.whatIDid,
      collaboration: cs.collaboration || defaultItem.collaboration,
      outcome: outcomes
    };
  });

  return (
    <section id="slide-04" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">04 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '精选职业案例' : 'Selected Professional Cases'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            STRUCTURED CASE EVIDENCE
          </span>
        </div>

        <div className="space-y-6">
          {displayCases.map((cs, idx) => {
            const caseId = cs.id || `0${idx + 1}`;

            return (
              <article key={caseId} className="bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between border-b border-[#E5E5E0] pb-3 gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono font-bold text-xs text-[#1E40AF]">CASE {caseId}</span>
                    <span className="text-xs font-serif font-bold text-[#111111]">{cs.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666] uppercase bg-[#FBFBFA] px-2 py-0.5 border border-[#E5E5E0]">
                    {cs.category || 'BUSINESS CASE'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                  <div className="md:col-span-8 space-y-2 font-sans">
                    {cs.context && (
                      <div>
                        <span className="font-mono font-bold text-[#111111] mr-2">[CONTEXT]:</span>
                        <span className="text-[#666666]">{cs.context}</span>
                      </div>
                    )}
                    <div>
                      <span className="font-mono font-bold text-[#111111] mr-2">[MY ROLE]:</span>
                      <span className="text-[#1E40AF] font-medium">{cs.role}</span>
                    </div>
                    <div>
                      <span className="font-mono font-bold text-[#111111] mr-2">[WHAT I DID]:</span>
                      <span className="text-[#666666]">{cs.whatIDid}</span>
                    </div>
                    {cs.collaboration && (
                      <div>
                        <span className="font-mono font-bold text-[#111111] mr-2">[COLLABORATION]:</span>
                        <span className="text-[#666666]">{cs.collaboration}</span>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-4 bg-[#FBFBFA] p-3 border border-[#E5E5E0] rounded-xs flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-[#666666] font-bold uppercase mb-1 border-b border-[#E5E5E0] pb-1">
                        {currentLang === 'zh' ? '关键成果验证' : 'KEY OUTCOMES'}
                      </div>
                      <ul className="space-y-1 font-mono text-[11px] text-[#1E40AF]">
                        {cs.outcome.map((oc, oIdx) => (
                          <li key={oIdx}>• {oc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {cs.image && (
                  <div className="pt-2">
                    <div className="w-full bg-[#FBFBFA] p-1.5 border border-[#E5E5E0] rounded-xs">
                      <img 
                        src={cs.image} 
                        alt={cs.title} 
                        className="w-full h-auto block rounded-xs border border-[#E5E5E0]" 
                      />
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}