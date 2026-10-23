import React from 'react';
import defaultAvatar from '../assets/avatar.jpg';
import { ArrowUpRight, Download } from 'lucide-react';

export default function Hero({ lang }) {
  const currentLang = lang || 'zh';

  const name = currentLang === 'zh' ? '沈绘丹' : 'Huidan Shen';
  const title = currentLang === 'zh' ? '沟通 · 运营 · 合作伙伴管理' : 'Operations & Partner Governance Lead';
  const bio = currentLang === 'zh'
    ? '拥有理想汽车合作伙伴运营与滴滴渠道运营经验：曾统筹 10+ 家技术伙伴完成合作伙伴技术展，满意度达 98%；通过渠道运营释放 20 万元以上灵活预算，并将单笔交易成本降低 15% 以上。'
    : 'At Li Auto, coordinated 10+ technology partners for an exhibition delivered with 98% satisfaction and zero operational issues. In DiDi channel operations, unlocked RMB 200K+ in flexible budget and reduced per-transaction costs by 15%+.';

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

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-[#176B45]">
              <span className="flex items-center gap-2 font-semibold">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
                {currentLang === 'zh' ? '开放机会' : 'Available for'}
              </span>
              <span>{currentLang === 'zh' ? '全球远程' : 'Remote (Global)'}</span>
              <span>{currentLang === 'zh' ? '全职' : 'Full-time'}</span>
              <span>{currentLang === 'zh' ? '顾问合作' : 'Consulting'}</span>
            </div>

            <p className="text-sm font-sans text-[#666666] leading-relaxed max-w-xl">
              {bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://calendly.com/echoa981/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#1E40AF] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#17358F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
              >
                {currentLang === 'zh' ? '预约 15 分钟交流' : 'Book a 15-min Chat'}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#C9D1D9] bg-white px-5 text-sm font-semibold text-[#222222] transition-colors hover:bg-[#F2F4F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
              >
                {currentLang === 'zh' ? '下载简历 (PDF)' : 'Download Resume (PDF)'}
                <Download size={16} aria-hidden="true" />
              </a>
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