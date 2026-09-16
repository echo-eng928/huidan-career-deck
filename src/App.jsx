import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Career from './components/Career';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import FeedbackModal from './components/FeedbackModal'; // 1. 正确引入组件

export default function App() {
  const [lang, setLang] = useState('zh');

  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      {/* 顶部 Header */}
      <Header
        lang={lang}
        setLang={setLang}
      />

      {/* 页面主体内容 */}
      <Hero lang={lang} />
      <Career lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />

      {/* 2. 在 return 内部的最底部渲染反馈弹窗 */}
      <FeedbackModal />
    </div>
  );
}