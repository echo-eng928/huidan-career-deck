import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Projects({ data, lang }) {
  const projects = data[lang]?.projects || {};
  const items = projects.items || [];

  return (
    <section id="projects" className="py-20 border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">02 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {projects.title || (lang === 'zh' ? '精选项目' : 'Selected Work')}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            {lang === 'zh' ? '出版物 CASE STUDY 排版' : 'Editorial Case Studies'}
          </span>
        </div>

        {/* 项目列表 */}
        <div className="space-y-24">
          {items.map((item, idx) => {
            const isDashboard = item.isDashboard;

            return (
              <article
                key={item.id || idx}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-[#E5E5E0] ${
                  isDashboard ? 'p-6 sm:p-8 bg-slate-950 text-white rounded-sm border-none shadow-xl' : ''
                }`}
              >
                {/* 左侧 5 列：项目信息 */}
                <div className="md:col-span-5 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className={`font-mono font-bold text-xs ${isDashboard ? 'text-blue-400' : 'text-[#1E40AF]'}`}>
                      PROJECT {item.id || `0${idx + 1}`}
                    </span>
                    <span className={`text-[11px] font-mono uppercase tracking-wider ${isDashboard ? 'text-slate-400' : 'text-[#666666]'}`}>
                      / {item.category}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-serif font-bold tracking-tight ${isDashboard ? 'text-white' : 'text-[#111111]'}`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm font-sans leading-relaxed ${isDashboard ? 'text-slate-300' : 'text-[#666666]'}`}>
                    {item.description}
                  </p>

                  <div className="pt-4 space-y-2">
                    <div className={`text-xs font-mono font-bold uppercase tracking-wider ${isDashboard ? 'text-slate-400' : 'text-[#666666]'}`}>
                      {lang === 'zh' ? '关键成果指标' : 'Key Outcomes'}
                    </div>
                    <ul className="space-y-1 text-xs font-mono">
                      {(item.metrics || []).map((m, mIdx) => (
                        <li key={mIdx} className={`flex items-center ${isDashboard ? 'text-blue-300' : 'text-[#1E40AF]'}`}>
                          <span className="mr-2">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 右侧 7 列：纯天然高度无缝自适应，彻底销毁高度枷锁和滚动条 */}
                <div className="md:col-span-7 w-full">
                  {isDashboard ? (
                    <div className="relative border border-slate-800 bg-slate-900 rounded p-5 space-y-4 shadow-2xl">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold tracking-wider">
                          <ShieldAlert size={14} />
                          <span>SAMPLE DATA · CASE STUDY PREVIEW</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">DESENSITIZED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded">
                          <div className="text-[10px] font-mono text-slate-400 uppercase">Merchant Tiering Index</div>
                          <div className="text-xl font-mono font-bold text-blue-400 mt-1">94.2%</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Automated Risk Score</div>
                        </div>

                        <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded">
                          <div className="text-[10px] font-mono text-slate-400 uppercase">Commission Split Efficiency</div>
                          <div className="text-xl font-mono font-bold text-emerald-400 mt-1">+18.4%</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Rule Precision Rate</div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded text-[11px] font-mono text-slate-400 leading-relaxed">
                        {lang === 'zh'
                          ? '数据已全面脱敏处理。本看板旨在展示商业指标设计逻辑与渠道管理闭环流程，不涉及企业敏感商业机密。'
                          : 'All metrics sanitized. Designed for methodology & process preview without disclosing proprietary business data.'}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full bg-[#FBFBFA] p-1.5 border border-[#E5E5E0] shadow-xs rounded">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto block rounded-xs border border-[#E5E5E0]"
                          style={{ maxHeight: 'none', height: 'auto', objectFit: 'initial' }}
                        />
                      ) : (
                        <div className="w-full h-48 bg-[#FBFBFA] border border-dashed border-[#E5E5E0] flex flex-col items-center justify-center p-6 text-center">
                          <span className="font-mono text-xs text-[#1E40AF] font-bold mb-1">
                            EDITORIAL VISUAL {item.id}
                          </span>
                          <span className="text-[11px] font-mono text-[#666666]">
                            {item.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}