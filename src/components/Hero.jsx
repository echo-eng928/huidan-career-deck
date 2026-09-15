import React from 'react';
import defaultAvatar from '../assets/avatar.jpg';

export default function Hero({ data, lang }) {
  const currentLang = lang || 'zh';

  // 1. 名字严格写死，杜绝任何错字回退
  const name = currentLang === 'zh' ? '沈绘丹' : 'Huidan Shen';
  
  // 2. 双语文案隔离逻辑：若处于英文状态，严禁读取带中文字符的旧数据
  const rawTitle = data?.[currentLang]?.hero?.title;
  const rawBio = data?.[currentLang]?.hero?.bio;

  const defaultZhTitle = '沟通 · 运营 · 合作伙伴管理';
  const defaultEnTitle = 'Operations & Partner Governance Lead';

  const defaultZhBio = '熟练连接人与资源，并推动执行，将业务需求转化为可简化、可复用的成型结果。';
  const defaultEnBio = 'Specializing in connecting stakeholders and executing operations, bridging strategy with scalable results.';

  let title = currentLang === 'zh' ? defaultZhTitle : defaultEnTitle;
  if (rawTitle) {
    if (currentLang === 'en' && !/[\u4e00-\u9fa5]/.test(rawTitle)) {
      title = rawTitle;
    } else if (currentLang === 'zh') {
      title = rawTitle;
    }
  }

  let bio = currentLang === 'zh' ? defaultZhBio : defaultEnBio;
  if (rawBio) {
    if (currentLang === 'en' && !/[\u4e00-\u9fa5]/.test(rawBio)) {
      bio = rawBio;
    } else if (currentLang === 'zh') {
      bio = rawBio;
    }
  }

  const avatarSrc = data?.[currentLang]?.hero?.avatar || defaultAvatar;

  return (
    <section id="slide-01" className="deck-slide border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8">
        
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xs font-mono text-[#1E40AF] font-bold">01 /</span>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            {currentLang === 'zh' ? '职业概况' : 'CAREER OVERVIEW'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#111111] leading-none">
              {name}
            </h1>

            <div className="text-lg font-serif font-bold text-[#1E40AF]">
              {title}
            </div>

            <p className="text-sm font-sans text-[#666666] leading-relaxed max-w-xl">
              {bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666] pt-2">
              <span className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>{currentLang === 'zh' ? '探索下一阶段职业节点' : 'Exploring Next Chapter'}</span>
              </span>
              <span>•</span>
              <span>{currentLang === 'zh' ? '中国 上海 / 嘉兴' : 'Shanghai / Jiaxing, China'}</span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-52 h-64 bg-white p-2 border border-[#E5E5E0] shadow-sm rounded-xs transition-all hover:shadow-md">
              <img 
                src={avatarSrc} 
                alt={name} 
                className="w-full h-full object-cover rounded-xs" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}