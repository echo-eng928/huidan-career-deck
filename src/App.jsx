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
      {/* 顶部 Header：固定正确姓名 */}
      <Header 
        lang={lang} 
        setLang={setLang} 
      />

      {/* 核心展示模块 */}
      <main className="space-y-0">
        <Hero data={{}} lang={lang} />
        <Career data={{}} lang={lang} />
        <Projects data={{}} lang={lang} />
        <About data={{}} lang={lang} />
        <Contact data={{}} lang={lang} />
      </main>
    </div>
  );
}