import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education({ data, lang }) {
  const education = data[lang]?.education || {};
  const items = education.items || [];

  return (
    <section id="education" className="py-16 border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">05 /</span>
            <h2 className="text-xl font-serif font-bold tracking-tight text-[#111111]">
              {education.title || (lang === 'zh' ? '教育背景' : 'Academic Background')}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            {lang === 'zh' ? '学历背景' : 'Education'}
          </span>
        </div>

        {/* 教育背景卡片列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#E5E5E0] rounded-md shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#1E40AF] font-bold">
                <span>0{idx + 1}/</span>
                <span>{item.year}</span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#111111]">
                {item.school}
              </h3>

              <div className="text-xs font-sans text-[#666666]">
                {item.degree}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}