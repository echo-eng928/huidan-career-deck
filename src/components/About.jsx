import React from 'react';
import { ExternalLink, Cpu } from 'lucide-react';

export default function About({ lang }) {
  const currentLang = lang || 'zh';

  const article = {
    title: currentLang === 'zh' 
      ? '理想伙伴说︱米其林王艳：与中国汽车市场一起热辣滚烫' 
      : 'Li Auto Partner Stories: Michelin Wang Yan — Booming with the Chinese Auto Market',
    link: 'https://mp.weixin.qq.com/s/sncGz4JDiX6tnPy-0lTa5g',
    role: currentLang === 'zh' 
      ? '角色：合作伙伴访谈协调 · 参与 · 内容架构' 
      : 'ROLE: Partner Interview Coordination · Participation · Content Structuring',
    process: currentLang === 'zh' 
      ? '流程：整理问题 → 开始访谈 → 构建访谈结构 → 发布' 
      : 'PROCESS: Align Questions → Join Interview → Structure → Publish'
  };

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 左侧：文章与写作留痕 */}
          <div className="md:col-span-7 space-y-6">
            
            {/* 1. 职业专访作品 */}
            <div className="bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
                <span className="text-xs font-mono font-bold text-[#1E40AF]">
                  {currentLang === 'zh' ? '专业内容' : 'PROFESSIONAL CONTENT'}
                </span>
                <span className="text-[10px] font-mono text-[#666666]">
                  {currentLang === 'zh' ? '合伙人访谈' : 'PARTNER INTERVIEW'}
                </span>
              </div>

              <h3 className="text-base font-serif font-bold text-[#111111] pt-1">
                {article.title}
              </h3>

              <div className="space-y-1 text-xs font-mono text-[#666666]">
                <div>{article.role}</div>
                <div>{article.process}</div>
              </div>

              <div className="pt-2">
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#1E40AF] hover:underline font-bold"
                >
                  <span>{currentLang === 'zh' ? '阅读文章（微信公众号）' : 'READ ARTICLE (WeChat Official Account)'}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* 2. 个人写作留痕 */}
            <div className="bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
                <span className="text-xs font-mono font-bold text-[#1E40AF]">
                  {currentLang === 'zh' ? '个人写作' : 'PERSONAL WRITING'}
                </span>
                <span className="text-[10px] font-mono text-[#666666]">
                  {currentLang === 'zh' ? '发表于《三联生活周刊》' : 'PUBLISHED ON SANLIAN LIFEWEEK'}
                </span>
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

          {/* 右侧：AI 实践与工作流 */}
          <div className="md:col-span-5 bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
                <span className="text-xs font-mono font-bold text-[#1E40AF] flex items-center space-x-1.5">
                  <Cpu size={14} />
                  <span>{currentLang === 'zh' ? '采用人工智能构建' : 'AI-ASSISTED WORKFLOW'}</span>
                </span>
                <span className="text-[10px] font-mono text-[#666666]">
                  {currentLang === 'zh' ? '从原型到部署' : 'CONCEPT TO DEPLOYMENT'}
                </span>
              </div>

              <p className="text-xs font-sans text-[#666666] leading-relaxed">
                {currentLang === 'zh'
                  ? '这个职业发展演示文稿是使用 Gemini + VS Code + React 独立开发的，将想法从概念转化为成型产品。'
                  : 'This career deck concept was independently developed using Gemini + VS Code + React, translating ideas into deployed web applications.'}
              </p>

              <div className="p-4 bg-[#FBFBFA] border border-[#E5E5E0] rounded-xs text-center space-y-2">
                <blockquote className="font-serif font-bold text-xs text-[#1E40AF] leading-snug">
                  “{currentLang === 'zh' 
                    ? '人工智能帮助我完成了搭建。至于搭建什么，是我决定的。' 
                    : 'AI helped me execute the code. What to build was my decision.'}”
                </blockquote>
                <div className="text-[10px] font-mono text-[#666666]">
                  {currentLang === 'zh' 
                    ? '我负责制定架构和战略，人工智能辅助执行。' 
                    : 'Human defines structure & strategy, AI assists execution.'}
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#666666] border-t border-[#E5E5E0] pt-3 flex justify-between">
              <span>TECH STACK: Vite / React / Tailwind</span>
              <span>DEPLOY: Vercel</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}