import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function About({ data, lang }) {
  const currentLang = lang || 'zh';

  // 1. 最新的米其林文章基准数据
  const latestArticle = {
    title: currentLang === 'zh' 
      ? '理想伙伴说︱米其林王艳：与中国汽车市场一起热辣滚烫' 
      : 'Li Auto Partner Stories: Michelin Wang Yan — Booming with the Chinese Auto Market',
    link: 'https://mp.weixin.qq.com/s/sncGz4JDiX6tnPy-0lTa5g',
    role: 'ROLE: Partner Interview Coordination · Participation · Content Structuring',
    process: 'PROCESS: Align Questions → Join Interview → Structure → Publish'
  };

  // 2. 读取动态数据，强校验：如果包含旧耐世特文章或无效链接，直接强制清空使用最新米其林文章
  let displayTitle = data?.[currentLang]?.aboutArticle?.title;
  let displayLink = data?.[currentLang]?.aboutArticle?.link;

  if (!displayTitle || displayTitle.includes('耐世特') || displayTitle.includes('李军')) {
    displayTitle = latestArticle.title;
  }
  if (!displayLink || displayLink.includes('9tQYpW8GZ')) {
    displayLink = latestArticle.link;
  }

  return (
    <section id="slide-07" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">07 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '作品留痕与 AI 实践' : 'Published Content & AI Practice'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            SELECTED ESSAYS & WORKFLOW
          </span>
        </div>

        <div className="space-y-6">
          
          {/* 1. 职业专访作品 */}
          <div className="bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
              <span className="text-xs font-mono font-bold text-[#1E40AF]">PROFESSIONAL CONTENT</span>
              <span className="text-[10px] font-mono text-[#666666]">PARTNER INTERVIEW</span>
            </div>

            <h3 className="text-base font-serif font-bold text-[#111111] pt-1">
              {displayTitle}
            </h3>

            <div className="space-y-1 text-xs font-mono text-[#666666]">
              <div>{latestArticle.role}</div>
              <div>{latestArticle.process}</div>
            </div>

            <div className="pt-2">
              <a 
                href={displayLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#1E40AF] hover:underline font-bold"
              >
                <span>{currentLang === 'zh' ? '阅读微信公众号文章' : 'READ ARTICLE (WeChat Official Account)'}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* 2. 个人写作留痕 */}
          <div className="bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
              <span className="text-xs font-mono font-bold text-[#1E40AF]">PERSONAL WRITING</span>
              <span className="text-[10px] font-mono text-[#666666]">PUBLISHED ON SANLIAN LIFEWEEK</span>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-xs font-serif font-bold text-[#111111]">
                  《不工作的日子里，我关闭了朋友圈拒绝焦虑与内耗》
                </div>
                <div className="text-[10px] font-mono text-[#666666]">
                  Sanlian Lifeweek · Essay on Observation & Perspective
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-serif font-bold text-[#111111]">
                  《参加完朋友婚礼后，我们的友谊到此为止》
                </div>
                <div className="text-[10px] font-mono text-[#666666]">
                  Sanlian Lifeweek · Narrative & Interpersonal Reflection
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}