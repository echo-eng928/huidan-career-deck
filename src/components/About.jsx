import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function About({ lang }) {
  const currentLang = lang || 'zh';

  const article = {
    title: currentLang === 'zh' 
      ? '理想伙伴说︱米其林王艳：与中国汽车市场一起热辣滚烫' 
      : 'Li Auto Partner Stories: Michelin Wang Yan — Booming with the Chinese Auto Market',
    link: 'https://mp.weixin.qq.com/s/sncGz4JDiX6tnPy-0lTa5g',
    role: currentLang === 'zh' 
      ? '角色：访谈协调 · 现场参与 · 内容整理 · 模板化发布' 
      : 'ROLE: Interview Coordination · On-site Participation · Content Structuring · Standardized Publishing',
    process: 'COORDINATE → ALIGN QUESTIONS → JOIN INTERVIEW → STRUCTURE → PUBLISH'
  };

  return (
    <section id="slide-04" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-6">
        
        {/* 页码修正为 04 / */}
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">04 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '公开内容与 AI 实践' : 'PUBLIC CONTENT & AI PRACTICE'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            SELECTED WORK & AI PRACTICE
          </span>
        </div>

        <p className="text-xs font-sans text-[#666666] leading-relaxed max-w-3xl">
          {currentLang === 'zh' 
            ? '从真实工作中的内容协作，到个人项目中的 AI 辅助实践，我更关注如何把想法变成可以被使用的结果。' 
            : 'From content collaboration in real work to AI-assisted personal projects, I focus on turning ideas into usable outcomes.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch pt-2">
          
          <div className="md:col-span-7 space-y-5 flex flex-col justify-between">
            
            <div className="bg-white p-5 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
                <span className="text-xs font-mono font-bold text-[#1E40AF]">PUBLIC CONTENT / PROFESSIONAL</span>
                <span className="text-[10px] font-mono text-[#666666]">PARTNER INTERVIEW</span>
              </div>

              <h3 className="text-sm font-serif font-bold text-[#111111] leading-snug">
                {article.title}
              </h3>

              <div className="space-y-1 text-xs font-mono text-[#666666]">
                <div>{article.role}</div>
                <div className="text-[10px] text-[#1E40AF]/80 tracking-tight">{article.process}</div>
              </div>

              <div className="pt-1 border-t border-[#F0F0ED]">
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#1E40AF] hover:underline font-bold"
                >
                  <span>{currentLang === 'zh' ? '阅读文章（微信公众号）' : 'READ ARTICLE (WeChat Official Account)'}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="bg-white p-5 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
                <span className="text-xs font-mono font-bold text-[#1E40AF]">PERSONAL WRITING</span>
                <span className="text-[10px] font-mono text-[#666666]">SANLIAN LIFEWEEK</span>
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

                <div className="border-t border-[#F0F0ED] pt-2 space-y-1">
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

          <div className="md:col-span-5 bg-white p-5 border border-[#E5E5E0] rounded-xs shadow-xs flex flex-col justify-between space-y-4">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
                <span className="text-xs font-mono font-bold text-[#1E40AF]">BUILT WITH AI</span>
                <span className="text-[10px] font-mono text-[#666666]">PRACTICE</span>
              </div>

              <p className="text-xs font-sans text-[#666666] leading-relaxed">
                {currentLang === 'zh'
                  ? '这个职业档案网站由我提出内容结构与交互方向，并使用 Gemini + VS Code + React 完成搭建与部署。'
                  : 'I defined the content structure and interaction direction, then used Gemini + VS Code + React to build and deploy this career profile.'}
              </p>

              <div className="p-3 bg-[#FBFBFA] border border-[#E5E5E0] rounded-xs">
                <div className="text-[10px] font-mono text-[#666666] mb-2 font-bold uppercase tracking-wider border-b border-[#E5E5E0] pb-1">
                  WORKFLOW
                </div>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-[#111111] font-bold">
                  <span>IDEA</span>
                  <span className="text-[#1E40AF]">→</span>
                  <span>STRUCTURE</span>
                  <span className="text-[#1E40AF]">→</span>
                  <span>AI 协作</span>
                  <span className="text-[#1E40AF]">→</span>
                  <span>CODE</span>
                  <span className="text-[#1E40AF]">→</span>
                  <span>ITERATE</span>
                  <span className="text-[#1E40AF]">→</span>
                  <span className="text-[#1E40AF]">DEPLOY</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#FBFBFA] border-l-2 border-[#1E40AF] space-y-1">
              <div className="font-serif font-bold text-xs text-[#111111]">
                “AI helped me build it. I decided what to build.”
              </div>
              <div className="text-[10px] font-sans text-[#666666]">
                {currentLang === 'zh' ? '「AI 帮助我完成搭建。至于搭建什么，由我决定。」' : ''}
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#666666] border-t border-[#E5E5E0] pt-2 flex justify-between">
              <span>TECH STACK: Vite / React / Tailwind</span>
              <span>DEPLOY: Vercel</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}