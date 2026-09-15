import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function About({ data, lang }) {
  const currentLang = lang || 'zh';

  const articleTitle = data?.[currentLang]?.aboutArticle?.title || '理想伙伴说︱耐世特李军：相信“看见”的力量，与理想汽车一起走得更好、走得更远';
  const articleLink = data?.[currentLang]?.aboutArticle?.link || 'https://mp.weixin.qq.com/s/9tQYpW8GZ-M47V_sQ5eM-g';

  return (
    <section id="slide-07" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-6">
        
        {/* 标题栏（已优化为“作品留痕与 AI 实践”） */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">07 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '作品留痕与 AI 实践' : 'Selected Content & Built with AI'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            PUBLICATIONS & DIGITAL EXECUTION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            
            {/* 1. 专业公开内容 */}
            <div className="bg-white p-5 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-[#E5E5E0] pb-2">
                <span className="font-mono text-xs font-bold text-[#1E40AF]">PROFESSIONAL CONTENT</span>
                <span className="text-[10px] font-mono text-[#666666]">PARTNER INTERVIEW</span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-sm text-[#111111]">
                  {articleTitle}
                </h4>
                <div className="text-[11px] font-mono text-[#666666] mt-1">
                  ROLE: Partner Interview Coordination · Participation · Content Structuring
                </div>
                <div className="text-[10px] font-mono text-[#1E40AF] mt-0.5">
                  PROCESS: Align Questions → Join Interview → Structure → Publish
                </div>
              </div>

              <a
                href={articleLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-xs font-mono text-[#1E40AF] font-bold hover:underline pt-1"
              >
                <span>READ ARTICLE (WeChat Official Account)</span>
                <ExternalLink size={12} className="ml-1" />
              </a>
            </div>

            {/* 2. 个人写作内容 */}
            <div className="bg-white p-5 border border-[#E5E5E0] rounded-xs shadow-xs space-y-3">
              <div className="flex justify-between items-center border-b border-[#E5E5E0] pb-2">
                <span className="font-mono text-xs font-bold text-[#1E40AF]">PERSONAL WRITING</span>
                <span className="text-[10px] font-mono text-[#666666]">PUBLISHED ON SANLIAN LIFEWEEK</span>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div className="border-b border-[#E5E5E0]/60 pb-2">
                  <div className="font-bold text-[#111111]">《不工作的日子里，我关闭了朋友圈拒绝焦虑与内耗》</div>
                  <div className="text-[10px] font-mono text-[#666666]">Sanlian Lifeweek · Essay on Observation & Perspective</div>
                </div>
                <div>
                  <div className="font-bold text-[#111111]">《参加完朋友婚礼后，我们的友谊到此为止》</div>
                  <div className="text-[10px] font-mono text-[#666666]">Sanlian Lifeweek · Narrative & Interpersonal Reflection</div>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 bg-[#FBFBFA] p-5 border border-[#E5E5E0] rounded-xs shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-[#E5E5E0] pb-2">
              <span className="font-mono text-xs font-bold text-[#1E40AF]">BUILT WITH AI</span>
              <span className="text-[10px] font-mono text-[#666666]">PROTOTYPE TO DEPLOYMENT</span>
            </div>

            <p className="text-xs font-sans text-[#666666] leading-relaxed">
              {currentLang === 'zh'
                ? '本个人 Career Deck 并非传统模板，而是借助 Gemini + VS Code + React 技术栈独立完成信息架构设计、交互编写与测试部署。'
                : 'This Career Deck was developed independently using Gemini + VS Code + React, taking ideas from concept to production.'}
            </p>

            <div className="p-3 bg-white border border-[#E5E5E0] rounded-xs font-mono text-xs text-[#1E40AF] font-bold text-center">
              “AI helped me build it. I decided what to build.”
              <div className="text-[10px] font-sans text-[#666666] font-normal mt-1">
                {currentLang === 'zh' ? 'AI 帮助我把它做出来，但我决定做什么、为什么做。' : 'I define the architecture and strategy, AI assists execution.'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}