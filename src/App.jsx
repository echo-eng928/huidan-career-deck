import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Career from './components/Career';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [lang, setLang] = useState('zh');

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#111111] font-sans antialiased selection:bg-[#1E40AF] selection:text-white pt-14">
      {/* 顶部 Header */}
      <Header 
        lang={lang} 
        setLang={setLang} 
      />

      {/* 5 大核心 Slide 模块 */}
      <main className="space-y-0">
        <Hero lang={lang} />
        <Career lang={lang} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}