import React from 'react';

export default function Career({ lang }) {
  const currentLang = lang || 'zh';

  const experiences = currentLang === 'zh' ? [
    {
      period: '2022.07 - 2024.05',
      company: '理想汽车 (Li Auto)',
      role: '合作伙伴管理与内容运营',
      bullets: [
        '供应商与合作伙伴关系维护、社区运营及技术展统筹落地',
        '负责“理想伙伴说”标准化访谈内容生产流程（沟通 - 访谈 - 整理 - 发布）',
        '跨部门高效协作，确保外部技术合作伙伴的高标准交付'
      ],
      tags: ['合作伙伴管理', '跨部门协调', '内容结构化整理', '活动与展览推进']
    },
    {
      period: '2024.07 - 2024.09',
      company: '驰鹜信息科技 (Chiefw)',
      role: '新媒体运营',
      bullets: [
        '负责新媒体内容策划与运营支持，协助品牌与渠道内容排期与发布',
        '参与运营数据梳理与分析，优化新媒体渠道传播与协作效率'
      ],
      tags: ['新媒体内容运营', '渠道数据梳理', '传播策划']
    },
    {
      period: '2025.02 - 2025.09',
      company: '滴滴出行 (Didi)',
      role: '渠道运营与成本控制',
      bullets: [
        '负责渠道商户分层管理与运营督导，监控交易指标与履约风险',
        '优化合作条款与交易分润机制，引入竞价机制降低单笔交易沉没成本 15%+',
        '精细化预算再分配，释放 20 万+ 灵活预算提升运营效率'
      ],
      tags: ['渠道与商户运营', '商业成本优化', '预算精细化再分配', '关键 KPI 达成跟踪']
    },
    {
      isCurrent: true,
      company: '探索下一阶段 (Exploring Next Chapter)',
      role: '',
      bullets: [
        '总结沉淀跨部门协同、运营管理与合作伙伴沟通的可迁移能力',
        '借助 AI 工具（Gemini / VS Code）提升信息处理、内容生产与数字化产品落地效率',
        '积极寻找能创造复合价值的业务运营、合作伙伴协同与项目推进节点'
      ],
      tags: ['跨界迁移能力', 'AI 辅助工作流', '结构化问题解决']
    }
  ] : [
    {
      period: '2022.07 - 2024.05',
      company: 'Li Auto',
      role: 'Partner Governance & Content Operations',
      bullets: [
        'Vendor & partner relations maintenance, community ops, and tech exhibition lead.',
        'Led standardized production flow for "Li Auto Partner Stories".',
        'Ensured high-standard execution across vendor & technical teams.'
      ],
      tags: ['Partner Governance', 'Cross-Functional', 'Content Structuring', 'Exhibition Operations']
    },
    {
      period: '2024.07 - 2024.09',
      company: 'Chiefw Technology',
      role: 'New Media Operations',
      bullets: [
        'Supported campaign planning, publishing schedules, and channel ops.',
        'Analyzed channel engagement data to streamline content workflows.'
      ],
      tags: ['Content Strategy', 'Data Analytics', 'Channel Ops']
    },
    {
      period: '2025.02 - 2025.09',
      company: 'Didi Global',
      role: 'Channel Ops & Cost Control Manager',
      bullets: [
        'Merchant tiering governance, transaction risk alerts, and compliance tracking.',
        'Introduced bidding mechanism to achieve 15%+ per-transaction cost optimization.',
        'Reallocated RMB 200K+ flexible budget to maximize operating efficiency.'
      ],
      tags: ['Merchant Ops', 'Cost Control', 'Budget Allocation', 'KPI Tracking']
    },
    {
      isCurrent: true,
      company: 'Exploring Next Chapter',
      role: '',
      bullets: [
        'Synthesizing cross-functional coordination and governance methodologies.',
        'Leveraging AI tools (Gemini / VS Code) to accelerate digital product delivery.',
        'Actively seeking business operations and partner management roles.'
      ],
      tags: ['Transferable Skills', 'AI Workflow', 'Problem Solving']
    }
  ];

  return (
    <section id="slide-02" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        {/* 页码修正为 02 / */}
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">02 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '职业轨迹与能力演进' : 'TIMELINE & CAPABILITY EVOLUTION'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            TIMELINE & CAPABILITY EVOLUTION
          </span>
        </div>

        {/* 还原图 1 垂直卡片列表 */}
        <div className="space-y-4">
          {experiences.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-6 border rounded-xs shadow-xs transition-all ${
                item.isCurrent 
                  ? 'bg-[#F4F7FF] border-[#1E40AF]/30' 
                  : 'bg-white border-[#E5E5E0]'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* 左侧公司与时期 */}
                <div className="md:col-span-4 space-y-2">
                  {item.period ? (
                    <span className="inline-block px-2 py-0.5 bg-[#EFEFED] text-[#666666] text-[11px] font-mono font-bold rounded-xs">
                      {item.period}
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-0.5 bg-[#1E40AF] text-white text-[10px] font-mono font-bold uppercase rounded-xs">
                      CURRENT
                    </span>
                  )}

                  <h3 className="text-lg font-serif font-bold text-[#111111]">
                    {item.company}
                  </h3>

                  {item.role && (
                    <div className="text-xs font-sans text-[#666666]">
                      {item.role}
                    </div>
                  )}
                </div>

                {/* 右侧履历 Bullet Points 与能力标签 */}
                <div className="md:col-span-8 space-y-4">
                  <ul className="space-y-2 text-xs font-sans text-[#444444] leading-relaxed">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-[#666666]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E5E5E0]/60">
                      <span className="text-[10px] font-mono text-[#666666]">塑造能力：</span>
                      {item.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className={`px-2 py-0.5 text-[10px] font-mono border rounded-xs ${
                            item.isCurrent 
                              ? 'bg-white border-[#1E40AF]/20 text-[#1E40AF]' 
                              : 'bg-[#FBFBFA] border-[#E5E5E0] text-[#666666]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}