import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Copy, Check } from 'lucide-react';

export default function Contact({ data, lang }) {
  const currentLang = lang || 'zh';
  const [copiedField, setCopiedField] = useState(null);

  // 优先读取抽屉后台修改的数据，无数据时回退
  const email = data?.[currentLang]?.contact?.email || "huidanshen@163.com";
  const wechat = data?.[currentLang]?.contact?.wechat || "shenhuidan_";
  const location = data?.[currentLang]?.contact?.location || "Shanghai / Jiaxing, China";

  const handleCopy = (text, field) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="slide-08" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">08 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '联系与后续探讨' : 'Contact & Next Steps'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] tracking-widest uppercase">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-serif font-bold text-[#111111] leading-tight">
              {currentLang === 'zh' 
                ? '寻找能够创造复合价值的业务运营、合作伙伴管理与项目推进节点。'
                : 'Open to impactful opportunities across operations, partner management, and project coordination.'}
            </h3>

            <p className="text-sm font-sans text-[#666666] leading-relaxed max-w-lg">
              {currentLang === 'zh'
                ? '如果您正在寻找一位具备真实项目执行力、跨部门协同经验，且能熟练借助 AI 工具提升工作效率的团队成员，欢迎随时与我联系。'
                : 'If you are looking for a teammate with verified execution capability, cross-functional coordination experience, and AI-assisted workflow efficiency, feel free to reach out.'}
            </p>

            <div className="flex items-center space-x-4 pt-2 text-xs font-mono text-[#666666]">
              <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 border border-[#E5E5E0] rounded-xs">
                <MapPin size={14} className="text-[#1E40AF]" />
                <span>{location}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 border border-[#E5E5E0] rounded-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{currentLang === 'zh' ? '可快速到岗' : 'Available Immediately'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 border border-[#E5E5E0] rounded-xs shadow-xs space-y-4">
            <div className="font-mono text-xs font-bold text-[#1E40AF] border-b border-[#E5E5E0] pb-2">
              DIRECT CHANNELS
            </div>

            {/* 邮箱卡片 */}
            <div className="p-3 bg-[#FBFBFA] border border-[#E5E5E0] rounded-xs flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#1E40AF]" />
                <div>
                  <div className="text-[10px] font-mono text-[#666666]">EMAIL</div>
                  <div className="text-xs font-mono font-bold text-[#111111]">{email}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(email, 'email')}
                className="p-1.5 text-[#666666] hover:text-[#1E40AF] transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>

            {/* 微信卡片 */}
            <div className="p-3 bg-[#FBFBFA] border border-[#E5E5E0] rounded-xs flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare size={16} className="text-[#1E40AF]" />
                <div>
                  <div className="text-[10px] font-mono text-[#666666]">WECHAT</div>
                  <div className="text-xs font-mono font-bold text-[#111111]">{wechat}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(wechat, 'wechat')}
                className="p-1.5 text-[#666666] hover:text-[#1E40AF] transition-colors"
                title="Copy WeChat"
              >
                {copiedField === 'wechat' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="pt-2 text-[10px] font-mono text-[#666666] text-center border-t border-[#E5E5E0]/60">
              © 2026 HUIDAN SHEN. ALL RIGHTS RESERVED.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}