import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Career from './components/Career';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import FeedbackModal from './components/FeedbackModal';
import WelcomeNote from './components/WelcomeNote';

export default function App() {
  const [lang, setLang] = useState('zh');

  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      <Header lang={lang} setLang={setLang} />
      
      <Hero lang={lang} />
      <Career lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />

      {/* 极简手写三语小纸条 */}
      <WelcomeNote />

      <FeedbackModal />
    </div>
  );
}