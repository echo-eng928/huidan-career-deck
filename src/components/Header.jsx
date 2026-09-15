import React from 'react';
import { Settings } from 'lucide-react';

export default function Header({ lang, setLang, onOpenAdmin }) {
  const scrollToSlide = (slideId) => {
    document.getElementById(slideId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 左侧：Logo / 个人标识 */}
        <button 
          onClick={() => scrollToSlide('slide-01')}
          className="flex items-center space-x-2 text-left hover:opacity-80 transition-opacity"
        >
          <span className="font-serif font-bold text-base tracking-wider text-[#111111]">
            HUIDAN SHEN
          </span>
          <span className="text-xs font-mono text-[#666666]">/ PORTFOLIO</span>
        </button>

        {/* 中间与右侧：模块快捷导航 + 语言切换 + 后台入口 */}
        <div className="flex items-center space-x-6 text-xs font-mono">
          <nav className="hidden md:flex items-center space-x-5 text-[#666666]">
            <button 
              onClick={() => scrollToSlide('slide-03')} 
              className="hover:text-[#1E40AF] transition-colors"
            >
              CAREER
            </button>
            <button 
              onClick={() => scrollToSlide('slide-04')} 
              className="hover:text-[#1E40AF] transition-colors"
            >
              WORK
            </button>
            <button 
              onClick={() => scrollToSlide('slide-05')} 
              className="hover:text-[#1E40AF] transition-colors"
            >
              METHOD
            </button>
            <button 
              onClick={() => scrollToSlide('slide-07')} 
              className="hover:text-[#1E40AF] transition-colors"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSlide('slide-08')} 
              className="hover:text-[#1E40AF] transition-colors"
            >
              CONTACT
            </button>
          </nav>

          <div className="h-4 w-[1px] bg-[#E5E5E0] hidden md:block" />

          {/* 语言切换按钮 */}
          <div className="flex items-center space-x-1 border border-[#E5E5E0] p-0.5 rounded-xs bg-white">
            <button
              onClick={() => setLang('zh')}
              className={`px-2 py-0.5 rounded-xs transition-colors ${
                lang === 'zh' ? 'bg-[#1E40AF] text-white font-bold' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              ZH
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-xs transition-colors ${
                lang === 'en' ? 'bg-[#1E40AF] text-white font-bold' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              EN
            </button>
          </div>

          {/* 管理抽屉按钮 */}
          <button
            onClick={onOpenAdmin}
            className="p-1.5 text-[#666666] hover:text-[#1E40AF] hover:bg-white border border-transparent hover:border-[#E5E5E0] rounded-xs transition-all"
            title="Edit Mode"
          >
            <Settings size={14} />
          </button>
        </div>

      </div>
    </header>
  );
}