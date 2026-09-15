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

  // 自动清理含有旧错字或旧结构的旧缓存，防止污染界面
  useEffect(() => {
    const saved = localStorage.getItem('huidan_deck_content');
    if (saved && (saved.includes('沉') || saved.includes('沉惠丹'))) {
      localStorage.removeItem('huidan_deck_content');
    }
  }, []);

  const [contentData, setContentData] = useState(() => {
    const saved = localStorage.getItem('huidan_deck_content');
    return saved ? JSON.parse(saved) : {};
  });

  const [draftContent, setDraftContent] = useState(contentData);

  // 1 秒内连按 3 次 Shift 唤醒/隐藏后台
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
      <Header 
        lang={lang} 
        setLang={setLang} 
      />

      <main className="space-y-0">
        <Hero data={contentData} lang={lang} />
        <Career data={contentData} lang={lang} />
        <Projects data={contentData} lang={lang} />
        <About data={contentData} lang={lang} />
        <Contact data={contentData} lang={lang} />
      </main>

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