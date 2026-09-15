import React from 'react';

export default function Projects({ lang }) {
  const currentLang = lang || 'zh';

  const projects = currentLang === 'zh' ? [
    {
      category: 'BUSINESS CASE 01',
      title: '供应商与合作伙伴关系维护、社区运营及技术展统筹落地',
      role: '合作伙伴管理与内容运营负责人',
      description: '主导“理想伙伴说”标准化采访流程搭建，跨部门统筹多家顶级技术供应商的技术展与访谈策划。',
      outcome: [
        '统筹 10+ 核心伙伴参展',
        '展示满意度达 85%',
        '全流程零失误交付'
      ]
    },
    {
      category: 'BUSINESS CASE 02',
      title: '西区抖音渠道直播 SOP 建立与线索转化优化',
      role: '新媒体运营与流程标准制定',
      description: '梳理直播脚本、主播话术与后链路线索跟进 SOP，建立标准化跟进机制。',
      outcome: [
        '制定直播话术、后链路转化标准化 SOP',
        '直播线索转化率达 50%',
        '达成团队西区抖音渠道 Q3 线索目标'
      ]
    },
    {
      category: 'BUSINESS CASE 03',
      title: '渠道商户分层管理与竞价沉没成本优化',
      role: '渠道运营与成本控制',
      description: '引入商户竞价机制与阶梯分润模式，监控履约风险，实施精细化预算再分配。',
      outcome: [
        '释放 20万+ 灵活预算',
        '单T成本下降 15%',
        '优化商户梯队履约效率'
      ]
    },
    {
      category: 'BUSINESS CASE 04',
      title: '常态化交易与履约风险监测看板搭建',
      role: '运营监控与数据分析',
      description: '搭设关键指标监控看板，建立异常交易实时警示机制，保障交易稳定性。',
      outcome: [
        '构建常态化数据监测看板',
        '及时识别履约风险项',
        '保障交易通道稳定性'
      ]
    }
  ] : [
    {
      category: 'BUSINESS CASE 01',
      title: 'Vendor Relations, Community Operations & Tech Exhibition Lead',
      role: 'Partner Governance & Content Lead',
      description: 'Architected standardized interview SOPs for "Li Auto Partner Stories" and led tech exhibition execution.',
      outcome: [
        '10+ Key Vendors Coordinated',
        '85% Partner Satisfaction',
        'Zero-Error Execution'
      ]
    },
    {
      category: 'BUSINESS CASE 02',
      title: 'West Region Douyin Live-Streaming SOP & Lead Optimization',
      role: 'New Media Operations Lead',
      description: 'Structured script templates and post-stream follow-up SOPs, raising conversion standards.',
      outcome: [
        'Standardized Script SOPs Established',
        '50% Lead Conversion Rate',
        'Achieved Q3 West Region Douyin Lead Target'
      ]
    },
    {
      category: 'BUSINESS CASE 03',
      title: 'Merchant Tiering Governance & Bidding Cost Optimization',
      role: 'Channel Ops Manager',
      description: 'Introduced merchant bidding mechanisms and tier-based profit splits to reallocate budgets.',
      outcome: [
        'RMB 200K+ Budget Reallocated',
        '15% Cost per T Reduction',
        'Streamlined Merchant Governance'
      ]
    },
    {
      category: 'BUSINESS CASE 04',
      title: 'Risk Alert Model & Regular Transaction Governance Dashboard',
      role: 'Operations Analytics',
      description: 'Built transaction alert models and daily governance dashboards to safeguard channel compliance.',
      outcome: [
        'Built Risk Alert Model & Dashboards',
        'Regular Tracking of Compliance Risks',
        'Ensured Channel Stability'
      ]
    }
  ];

  return (
    <section id="slide-03" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        {/* 页码修正为 03 / */}
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">03 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '精选案例与项目验证' : 'Selected Business Cases'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            CASES & IMPACT
          </span>
        </div>

        {/* 2x2 网格案例图纸恢复 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((item, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#E5E5E0] pb-2">
                  <span className="font-bold text-[#1E40AF]">{item.category}</span>
                  <span className="text-[#666666]">{item.role}</span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#111111] leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-sans text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E5E5E0]">
                <div className="text-[10px] font-mono font-bold text-[#111111] uppercase">
                  {currentLang === 'zh' ? '关键量化成果' : 'KEY OUTCOMES'}
                </div>
                <div className="space-y-1 font-mono text-xs font-bold text-[#1E40AF]">
                  {item.outcome.map((res, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span>•</span>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}