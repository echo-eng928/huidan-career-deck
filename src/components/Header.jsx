import React from 'react';

export default function Header({ lang, setLang }) {
  const currentLang = lang || 'zh';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* 左侧 Logo */}
        <div className="flex items-center space-x-3">
          <span className="font-serif font-bold tracking-tight text-lg text-[#111111]">
            {currentLang === 'zh' ? '沈绘丹' : 'HUIDAN SHEN'}
          </span>
          <span className="text-xs font-mono text-[#666666] hidden sm:inline-block">
            / PORTFOLIO
          </span>
        </div>

        {/* 右侧导航指引：第 3 个选项修改为“公开内容” */}
        <div className="flex items-center space-x-6 text-xs font-mono">
          <nav className="flex items-center space-x-5 text-[#666666]">
            <a href="#slide-02" className="hover:text-[#111111] transition-colors uppercase">
              {currentLang === 'zh' ? '职业轨迹' : 'CAREER'}
            </a>
            <a href="#slide-03" className="hover:text-[#111111] transition-colors uppercase">
              {currentLang === 'zh' ? '精选案例' : 'WORK'}
            </a>
            <a href="#slide-04" className="hover:text-[#111111] transition-colors uppercase">
              {currentLang === 'zh' ? '公开内容' : 'ABOUT'}
            </a>
            <a href="#slide-05" className="hover:text-[#111111] transition-colors uppercase">
              {currentLang === 'zh' ? '联系我' : 'Get in Touch'}
            </a>
          </nav>

          <div className="flex border border-[#E5E5E0] rounded-xs p-0.5 bg-[#FBFBFA]">
            <button
              onClick={() => setLang('zh')}
              className={`px-2 py-0.5 rounded-xs transition-colors ${
                currentLang === 'zh' ? 'bg-[#1E40AF] text-white font-bold' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              ZH
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-xs transition-colors ${
                currentLang === 'en' ? 'bg-[#1E40AF] text-white font-bold' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}