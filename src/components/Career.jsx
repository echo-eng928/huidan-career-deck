import React from 'react';

export default function Career({ data, lang }) {
  const currentLang = lang || 'zh';

  // 100% 完整的 4 段真实数据基准
  const baseExperiences = [
    {
      period: '2022.07 - 2024.05',
      company: currentLang === 'zh' ? '理想汽车 (Li Auto)' : 'Li Auto',
      role: currentLang === 'zh' ? '合作伙伴管理与内容运营' : 'Partner Management & Content Operations',
      highlights: currentLang === 'zh' ? [
        '供应商与合作伙伴关系维护、社区运营及技术展统筹落地',
        '负责“理想伙伴说”标准化访谈内容生产流程（沟通-访谈-整理-发布）',
        '跨部门高效协作，确保外部技术合作伙伴的高标准交付'
      ] : [
        'Managed partner relations, supplier community operations, and technology exhibitions.',
        'Executed standardized content production workflow for "Li Auto Partner Stories".',
        'Fostered cross-functional coordination to ensure high-standard vendor delivery.'
      ],
      capabilitiesFormed: currentLang === 'zh' 
        ? ['合作伙伴管理', '跨部门协调', '内容结构化整理', '活动与展览推进']
        : ['Partner Management', 'Cross-Functional Coordination', 'Content Structuring', 'Event Operations']
    },
    {
      period: '2024.07 - 2024.09',
      company: currentLang === 'zh' ? '驰骛信息科技 (Chiefw)' : 'Chiefw Technology',
      role: currentLang === 'zh' ? '新媒体运营' : 'New Media Operations',
      highlights: currentLang === 'zh' ? [
        '负责新媒体内容策划与运营支持，协助品牌与渠道内容排期与发布',
        '参与运营数据梳理与分析，优化新媒体渠道传播与协作效率'
      ] : [
        'Managed new media content planning and operational support for brand channels.',
        'Structured operational metrics to optimize social media channel reach and workflow efficiency.'
      ],
      capabilitiesFormed: currentLang === 'zh'
        ? ['新媒体内容运营', '渠道数据梳理', '传播策划']
        : ['New Media Operations', 'Channel Data Analysis', 'Content Strategy']
    },
    {
      period: '2025.02 - 2025.09',
      company: currentLang === 'zh' ? '滴滴出行 (Didi)' : 'Didi',
      role: currentLang === 'zh' ? '渠道运营与成本控制' : 'Channel Operations & Cost Control',
      highlights: currentLang === 'zh' ? [
        '负责渠道商户分层管理与运营督导，监控交易指标与履约风险',
        '优化合作条款与交易分润机制，引入竞价机制降低单笔交易沉没成本 15%+',
        '精细化预算再分配，释放 20 万+ 灵活预算提升运营效率'
      ] : [
        'Supervised merchant tiering, tracked transaction metrics, and managed compliance risks.',
        'Optimized commission terms and bidding mechanisms, reducing unit transaction costs by 15%+.',
        'Reallocated operational budgets, freeing up RMB 200K+ for high-efficiency channels.'
      ],
      capabilitiesFormed: currentLang === 'zh'
        ? ['渠道与商户运营', '商业成本优化', '预算精细化再分配', '关键 KPI 达成跟踪']
        : ['Channel Operations', 'Cost Optimization', 'Budget Reallocation', 'KPI Governance']
    },
    {
      period: 'CURRENT',
      company: currentLang === 'zh' ? '探索下一阶段 (Exploring Next Chapter)' : 'Exploring Next Chapter',
      role: currentLang === 'zh' ? '开放探索中' : 'Open to Opportunities',
      highlights: currentLang === 'zh' ? [
        '总结沉淀跨部门协同、运营管理与合作伙伴沟通的可迁移能力',
        '借助 AI 工具（Gemini / VS Code）提升信息处理、内容生产与数字化产品落地效率',
        '积极寻找能创造复合价值的业务运营、合作伙伴协同与项目推进节点'
      ] : [
        'Consolidating transferable skills across coordination, operations, and partner relations.',
        'Utilizing AI workflow (Gemini / VS Code) to boost information design and digital execution.',
        'Exploring impactful roles across operations, partner governance, and project coordination.'
      ],
      capabilitiesFormed: currentLang === 'zh'
        ? ['跨界可迁移能力', 'AI 辅助工作流', '结构化问题解决']
        : ['Transferable Capability', 'AI-Assisted Workflow', 'Structured Problem Solving']
    }
  ];

  // 从传入数据中融合，如果数据长度少于 4 段，强制使用基准补满 4 段
  const rawSaved = data?.[currentLang]?.career?.items || [];
  const experiences = baseExperiences.map((baseItem, idx) => {
    const savedItem = rawSaved[idx] || {};
    return {
      period: savedItem.period || baseItem.period,
      company: savedItem.company || baseItem.company,
      role: savedItem.role || baseItem.role,
      highlights: (Array.isArray(savedItem.highlights) && savedItem.highlights.length > 0) 
        ? savedItem.highlights 
        : baseItem.highlights,
      capabilitiesFormed: (Array.isArray(savedItem.capabilitiesFormed) && savedItem.capabilitiesFormed.length > 0) 
        ? savedItem.capabilitiesFormed 
        : baseItem.capabilitiesFormed
    };
  });

  return (
    <section id="slide-03" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">03 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '职业轨迹与能力演进' : 'Career Journey & Capabilities Evolution'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            TIMELINE & CAPABILITY EVOLUTION
          </span>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className={`p-4 border rounded-xs transition-all ${
                exp.period === 'CURRENT' 
                  ? 'bg-blue-50/40 border-[#1E40AF]/30' 
                  : 'bg-white border-[#E5E5E0]'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                
                {/* 左侧：时间、公司与角色 */}
                <div className="md:col-span-4 space-y-0.5">
                  <span className={`inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded-xs ${
                    exp.period === 'CURRENT' ? 'bg-[#1E40AF] text-white' : 'bg-[#E5E5E0] text-[#111111]'
                  }`}>
                    {exp.period}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#111111] pt-1">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-mono text-[#1E40AF]">
                    {exp.role}
                  </div>
                </div>

                {/* 右侧：工作内容与演进能力 */}
                <div className="md:col-span-8 space-y-2">
                  <ul className="space-y-1 text-xs font-sans text-[#666666]">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start">
                        <span className="mr-2 text-[#1E40AF]">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 阶段性塑造的能力 */}
                  <div className="pt-1.5 border-t border-[#E5E5E0]/60 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] font-mono text-[#666666] uppercase mr-1">
                      {currentLang === 'zh' ? '塑造能力:' : 'Formed:'}
                    </span>
                    {exp.capabilitiesFormed.map((cap, cIdx) => (
                      <span 
                        key={cIdx} 
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#FBFBFA] border border-[#E5E5E0] text-[#111111] rounded-xs"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}