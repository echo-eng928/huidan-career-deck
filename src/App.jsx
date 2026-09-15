import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Career from './components/Career';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import AdminDrawer from './components/admin/AdminDrawer';

export default function App() {
  const [lang, setLang] = useState('zh');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [editLang, setEditLang] = useState('zh');

  // 内容状态数据层（支持持久化）
  const [contentData, setContentData] = useState(() => {
    const saved = localStorage.getItem('huidan_deck_content');
    return saved ? JSON.parse(saved) : {};
  });

  const [draftContent, setDraftContent] = useState(contentData);

  // 键盘暗号监听逻辑：1 秒内快速连按 3 次 Shift 键召唤后台抽屉
  useEffect(() => {
    let shiftCount = 0;
    let timer = null;

    const handleKeyDown = (e) => {
      if (e.key === 'Shift') {
        shiftCount += 1;

        if (timer) clearTimeout(timer);

        if (shiftCount >= 3) {
          setIsAdminOpen((prev) => !prev);
          shiftCount = 0;
        } else {
          timer = setTimeout(() => {
            shiftCount = 0;
          }, 1000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSave = () => {
    setContentData(draftContent);
    localStorage.setItem('huidan_deck_content', JSON.stringify(draftContent));
    setIsAdminOpen(false);
  };

  const handleReset = () => {
    localStorage.removeItem('huidan_deck_content');
    setContentData({});
    setDraftContent({});
    setIsAdminOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#111111] font-sans antialiased selection:bg-[#1E40AF] selection:text-white pt-14">
      {/* 顶部 Header（隐形 ⚙ 按钮） */}
      <Header 
        lang={lang} 
        setLang={setLang} 
      />

      {/* 8 大核心 Slide 模块 */}
      <main className="space-y-0">
        <Hero data={contentData} lang={lang} />
        <Career data={contentData} lang={lang} />
        <Projects data={contentData} lang={lang} />
        <About data={contentData} lang={lang} />
        <Contact data={contentData} lang={lang} />
      </main>

      {/* 后台暗号管理抽屉 */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        editLang={editLang}
        setEditLang={setEditLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        draftContent={draftContent}
        setDraftContent={setDraftContent}
        onSave={handleSave}
        onReset={handleReset}
      />
    </div>
  );
}