import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check } from 'lucide-react';

export default function Contact({ lang }) {
  const currentLang = lang || 'zh';
  const [copiedField, setCopiedField] = useState(null);

  const email = 'echoa981@gmail.com';
  const wechat = 'adeline928';

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="slide-05" className="deck-slide">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        {/* 页码修正为 05 / */}
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">05 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '联系后续讨论' : 'Connect for Discussion'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-3xl font-serif font-bold text-[#111111] leading-tight">
              {currentLang === 'zh' 
                ? '寻找能够创造价值的业务运营、合作伙伴复合管理与项目推进节点。' 
                : 'Seeking impactful roles in business operations, partner management, and project coordination.'}
            </h3>

            <p className="text-xs font-sans text-[#666666] leading-relaxed max-w-lg">
              {currentLang === 'zh'
                ? '如果您正在寻找一位具备真实项目执行力、跨部门良好经验，且能熟练借助AI工具提升工作效率的团队成员，欢迎随时与我联系。'
                : 'If you are looking for a team member with solid project execution, cross-functional agility, and AI workflow capabilities, feel free to reach out.'}
            </p>

            <div className="flex items-center space-x-4 text-xs font-mono text-[#666666]">
              <span className="px-2.5 py-1 bg-white border border-[#E5E5E0] rounded-xs">
                📍 {currentLang === 'zh' ? '中国 上海/嘉兴' : 'Shanghai / Jiaxing'}
              </span>
              <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xs flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{currentLang === 'zh' ? '可快速到岗' : 'Available Immediately'}</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-5 bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-4">
            <div className="text-xs font-mono font-bold text-[#1E40AF] border-b border-[#E5E5E0] pb-2 uppercase">
              {currentLang === 'zh' ? '直达频道' : 'DIRECT CHANNELS'}
            </div>

            <div className="p-3 bg-[#FBFBFA] border border-[#E5E5E0] rounded-xs flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#1E40AF]" />
                <div>
                  <div className="text-[10px] font-mono text-[#666666] uppercase">Email</div>
                  <div className="font-mono text-xs font-bold text-[#111111]">{email}</div>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(email, 'email')}
                className="p-1.5 text-[#666666] hover:text-[#111111] transition-colors"
              >
                {copiedField === 'email' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="p-3 bg-[#FBFBFA] border border-[#E5E5E0] rounded-xs flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare size={16} className="text-[#1E40AF]" />
                <div>
                  <div className="text-[10px] font-mono text-[#666666] uppercase">WeChat</div>
                  <div className="font-mono text-xs font-bold text-[#111111]">{wechat}</div>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(wechat, 'wechat')}
                className="p-1.5 text-[#666666] hover:text-[#111111] transition-colors"
              >
                {copiedField === 'wechat' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="text-[10px] font-mono text-[#666666] text-center pt-2">
              © {new Date().getFullYear()} 沈绘丹. All rights reserved.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}