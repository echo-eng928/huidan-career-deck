import React from 'react';

export default function Capabilities({ data, lang }) {
  const currentLang = lang || 'zh';

  const defaultGroups = [
    {
      category: 'PARTNER MANAGEMENT',
      title: currentLang === 'zh' ? '合作伙伴与供应商管理' : 'Partner & Vendor Management',
      items: [
        { name: currentLang === 'zh' ? '供应商关系维护与社区运营' : 'Supplier Relations & Community Operations', evidence: 'Li Auto' },
        { name: currentLang === 'zh' ? '跨部门协同与外部团队对接' : 'Cross-Functional & Vendor Alignment', evidence: 'Li Auto Exhibition' },
        { name: currentLang === 'zh' ? '合作伙伴活动与技术展统筹' : 'Partner Events & Tech Exhibitions', evidence: 'Li Auto 10+ Vendors' }
      ]
    },
    {
      category: 'OPERATIONS',
      title: currentLang === 'zh' ? '渠道与商户运营' : 'Channel & Merchant Governance',
      items: [
        { name: currentLang === 'zh' ? '经销商新媒体矩阵诊断与陪跑' : 'Dealership Social Media Operations', evidence: 'JLR Live Stream SOP' },
        { name: currentLang === 'zh' ? '商户分层管理与履约风险控制' : 'Merchant Tiering & Risk Oversight', evidence: 'Didi Channel Ops' },
        { name: currentLang === 'zh' ? '标准化话术与接待 SOP 制定' : 'Standardized Scripts & Service SOPs', evidence: '50% Lead Conversion' }
      ]
    },
    {
      category: 'CONTENT & COMMUNICATION',
      title: currentLang === 'zh' ? '内容策划与结构化沟通' : 'Content & Communication',
      items: [
        { name: currentLang === 'zh' ? '“理想伙伴说”标准化访谈生产' : 'Partner Interview Production', evidence: 'Li Auto × Nexteer' },
        { name: currentLang === 'zh' ? '深度观察与观点提炼' : 'In-depth Observation & Narrative', evidence: 'Sanlian Lifeweek' },
        { name: currentLang === 'zh' ? '多方利益相关者需求对齐' : 'Multi-Stakeholder Alignment', evidence: 'Project Execution' }
      ]
    },
    {
      category: 'DATA & BUSINESS AWARENESS',
      title: currentLang === 'zh' ? '商业意识与成本优化' : 'Business & Cost Awareness',
      items: [
        { name: currentLang === 'zh' ? '关键销售与转化 KPI 追踪' : 'KPI Tracking & Sales Conversion', evidence: 'Douyin Channel KPI' },
        { name: currentLang === 'zh' ? '交易费用拆解与竞价机制引入' : 'Transaction Fee Optimization', evidence: '15%+ Cost Reduction' },
        { name: currentLang === 'zh' ? '运营预算再分配与效率提升' : 'Budget Reallocation & Optimization', evidence: 'RMB 200K+ Released' }
      ]
    },
    {
      category: 'AI-ASSISTED WORK',
      title: currentLang === 'zh' ? 'AI 辅助工具与高效执行' : 'AI-Assisted Workflows',
      items: [
        { name: currentLang === 'zh' ? '信息快速研究与结构化整理' : 'Rapid Research & Data Structuring', evidence: 'Daily Workflow' },
        { name: currentLang === 'zh' ? '借助 AI Coding 独立开发个人 Deck' : 'AI-Assisted Digital Prototyping', evidence: 'Gemini + VS Code' },
        { name: currentLang === 'zh' ? '内容快速迭代与数字化表达' : 'Iterative Content & Web Production', evidence: 'Full Site Deployment' }
      ]
    }
  ];

  return (
    <section id="slide-06" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">06 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '可迁移能力与经历背书' : 'Transferable Capabilities & Case Evidence'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            NO SELF-RATING · CASE SUPPORTED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultGroups.map((group, idx) => (
            <div key={idx} className="bg-white p-5 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3">
              <div className="border-b border-[#E5E5E0] pb-2">
                <div className="font-mono text-[10px] text-[#1E40AF] font-bold tracking-wider">
                  {group.category}
                </div>
                <h3 className="font-serif font-bold text-sm text-[#111111] mt-0.5">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-2 text-xs font-sans">
                {group.items.map((it, itemIdx) => (
                  <li key={itemIdx} className="space-y-0.5">
                    <div className="text-[#111111] font-medium">• {it.name}</div>
                    <div className="text-[10px] font-mono text-[#666666] pl-3">
                      ↳ Evidence: <span className="text-[#1E40AF]">{it.evidence}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}