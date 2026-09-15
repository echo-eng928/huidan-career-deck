import React, { useState } from 'react';
import { BookOpen, Quote, ChevronRight } from 'lucide-react';

export default function FieldNotes({ data, lang }) {
  const notes = data[lang]?.notes || [];
  const [activeNote, setActiveNote] = useState(0);

  if (!notes || notes.length === 0) return null;

  return (
    <section id="notes" className="py-20 border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">03 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {lang === 'zh' ? '业务思考与观察' : 'Field Notes & Insights'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            {lang === 'zh' ? '方法论与实战反思' : 'Operational Philosophy'}
          </span>
        </div>

        {/* 思考卡片网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* 左侧 4 列：3 个索引标签选择器 */}
          <div className="md:col-span-4 space-y-3">
            {notes.map((note, idx) => (
              <button
                key={idx}
                onClick={() => setActiveNote(idx)}
                className={`w-full text-left p-4 rounded border transition-all flex items-center justify-between ${
                  activeNote === idx
                    ? 'bg-white border-[#1E40AF] shadow-xs ring-1 ring-blue-100'
                    : 'bg-transparent border-[#E5E5E0] hover:bg-white/50 text-[#666666]'
                }`}
              >
                <div className="space-y-1">
                  <div className="text-[11px] font-mono font-bold text-[#1E40AF]">
                    NOTE [{idx + 1}]
                  </div>
                  <div className="text-sm font-serif font-bold text-[#111111] line-clamp-1">
                    {note.title}
                  </div>
                </div>
                <ChevronRight
                  size={15}
                  className={`transition-transform ${activeNote === idx ? 'text-[#1E40AF] translate-x-1' : 'text-slate-300'}`}
                />
              </button>
            ))}
          </div>

          {/* 右侧 8 列：高亮展出的思考详情卡片 */}
          <div className="md:col-span-8 bg-white border border-[#E5E5E0] p-8 rounded-sm shadow-xs flex flex-col justify-between relative overflow-hidden">
            <Quote size={80} className="absolute -bottom-4 -right-4 text-slate-100/60 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold bg-blue-50 text-[#1E40AF] px-2 py-0.5 rounded">
                  INSIGHT [{activeNote + 1}]
                </span>
                <span className="text-xs font-mono text-[#666666]">
                  {notes[activeNote]?.category || 'OPERATIONS'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111111] leading-snug">
                {notes[activeNote]?.title}
              </h3>

              <p className="text-sm sm:text-base font-sans text-[#666666] leading-relaxed italic border-l-2 border-[#1E40AF] pl-4 py-1">
                "{notes[activeNote]?.content}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5E5E0] flex items-center justify-between text-xs font-mono text-[#666666] relative z-10">
              <span>HUIDAN SHEN · FIELD NOTES</span>
              <span className="uppercase">{lang === 'zh' ? '真实业务提炼' : 'PRACTICE INSIGHT'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}