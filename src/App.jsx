import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Career from './components/Career';
import Projects from './components/Projects';
import HowIWork from './components/HowIWork';
import Capabilities from './components/Capabilities';
import About from './components/About';
import Contact from './components/Contact';
import AdminDrawer from './components/admin/AdminDrawer';

import defaultContent from './data/content.js';
import { getContentFromStorage, saveContentToStorage, getImageFromDB } from './utils/db';

export default function App() {
  const [lang, setLang] = useState('zh');
  const [content, setContent] = useState(() => getContentFromStorage() || defaultContent || {});
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [editLang, setEditLang] = useState('zh');
  const [activeTab, setActiveTab] = useState('personal');
  const [draftContent, setDraftContent] = useState(content);
  const [avatarImage, setAvatarImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const containerRef = useRef(null);
  const totalSlides = 8;

  useEffect(() => {
    async function loadAvatar() {
      try {
        const img = await getImageFromDB('profile_avatar');
        if (img) setAvatarImage(img);
      } catch (e) {
        console.error("Avatar load error", e);
      }
    }
    loadAvatar();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideId = entry.target.id;
            const num = parseInt(slideId.replace('slide-0', ''), 10);
            if (!isNaN(num)) setCurrentSlide(num);
          }
        });
      },
      { threshold: 0.5 }
    );

    const slides = document.querySelectorAll('.deck-slide');
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAdminOpen) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const next = Math.min(currentSlide + 1, totalSlides);
        document.getElementById(`slide-0${next}`)?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const prev = Math.max(currentSlide - 1, 1);
        document.getElementById(`slide-0${prev}`)?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'Home') {
        e.preventDefault();
        document.getElementById('slide-01')?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        document.getElementById('slide-08')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAdminOpen]);

  const handleSave = () => {
    setContent(draftContent);
    saveContentToStorage(draftContent);
    setIsAdminOpen(false);
  };

  const handleReset = () => {
    setDraftContent(defaultContent);
    setContent(defaultContent);
    saveContentToStorage(defaultContent);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#111111] font-sans">
      <Header
        lang={lang}
        setLang={setLang}
        onOpenAdmin={() => {
          setDraftContent(content);
          setIsAdminOpen(true);
        }}
      />

      {/* 右下角悬浮极简 0X / 08 计数 */}
      <div className="fixed right-6 bottom-8 z-40 hidden lg:flex items-center space-x-2 bg-white/80 backdrop-blur-md px-3 py-1.5 border border-[#E5E5E0] rounded-xs shadow-xs font-mono text-xs">
        <span className="text-[#1E40AF] font-bold">0{currentSlide}</span>
        <span className="text-[#666666]">/</span>
        <span className="text-[#666666]">0{totalSlides}</span>
      </div>

      <main ref={containerRef} className="deck-container">
        <Hero data={content} lang={lang} avatarImage={avatarImage} />
        <Stats data={content} lang={lang} />
        <Career data={content} lang={lang} />
        <Projects data={content} lang={lang} />
        <HowIWork lang={lang} />
        <Capabilities data={content} lang={lang} />
        <About data={content} lang={lang} />
        <Contact data={content} lang={lang} />
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