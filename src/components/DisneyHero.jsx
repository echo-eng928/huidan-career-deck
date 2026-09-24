import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { photos } from '../data/disneyPhotos'; // 确保你的照片数据路径正确

// 极简星尘背景
const MagicDust = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const dust = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      size: Math.random() * 2 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(dust);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full mix-blend-screen"
          style={{ width: p.size, height: p.size, left: p.left, top: p.top, filter: 'blur(0.5px)' }}
          animate={{ y: [0, -100], opacity: [0, Math.random() * 0.5 + 0.2, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
        />
      ))}
    </div>
  );
};

export default function DisneyHero() {
  const [selectedId, setSelectedId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const springTransition = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 };

  const toggleAudio = (e) => {
    e?.stopPropagation();
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handlePhotoClick = (e, photo) => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    confetti({ 
      particleCount: 50, 
      spread: 70, 
      origin: { x, y }, 
      colors: photo.colors || ['#ffffff', '#ffb6c1', '#add8e6'], // 如果没有提供颜色，给个默认的梦幻色系
      ticks: 120, 
      gravity: 1.2, 
      zIndex: 60 
    });
    
    setSelectedId(photo.id);
  };

  const selectedPhoto = photos.find(p => p.id === selectedId);

  // 🌟 顶尖杂志排版：专为 8 张照片量身定制的错落阵列
  const getLayoutStyles = (index) => {
    const layouts = [
      // --- 顶部开篇：视觉张力 ---
      // 0: 左侧中图，稍微向下，向左微倾
      { c: "col-span-1 md:col-span-4 mt-12 md:mt-16", r: -3 },
      // 1: 中间大图，向上突破（视觉焦点），向右微倾
      { c: "col-span-1 md:col-span-5 mt-0 md:-mt-6", r: 2 },
      // 2: 右侧小图，大幅度下沉，制造右侧呼吸感
      { c: "col-span-1 md:col-span-3 mt-8 md:mt-32", r: -2 },

      // --- 中段穿插：咬合与错位 ---
      // 3: 左侧小图，托住左边
      { c: "col-span-1 md:col-span-3 mt-6 md:mt-10", r: 1 },
      // 4: 中间中图，向上深深切入上一行的留白里
      { c: "col-span-1 md:col-span-4 -mt-4 md:-mt-16", r: -3 },
      // 5: 右侧大图，沉稳压阵
      { c: "col-span-1 md:col-span-5 mt-10 md:mt-24", r: 3 },

      // --- 优雅收尾：左右留白，不占满全屏 ---
      // 6: 偏左大图，继续向上咬合，左侧空出 1 列
      { c: "col-span-1 md:col-span-5 md:col-start-2 mt-8 md:-mt-8", r: -2 },
      // 7: 偏右中图，沉底收尾，右侧空出 1 列
      { c: "col-span-1 md:col-span-4 md:col-start-8 mt-12 md:mt-16", r: 2 },
    ];
    // 严丝合缝匹配 8 张图
    return layouts[index] || layouts[0]; 
  };
  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] flex flex-col items-center pt-28 pb-32 md:pt-32 overflow-hidden selection:bg-white selection:text-black">
      
      {/* 记得把 bgm.mp3 放在 public 文件夹下 */}
      <audio ref={audioRef} src="/bgm.mp3" loop />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0A0A0A] z-0" />
      <MagicDust />

      <div className="relative z-10 text-center flex flex-col items-center mb-12 md:mb-20">
        <h1 className="text-3xl md:text-5xl font-extralight text-white/90 tracking-[0.2em] uppercase">
          Magic Moments
        </h1>
        <div className="w-[1px] h-8 bg-white/20 mt-6" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8 items-start mb-20">
        {photos.map((photo, index) => {
          const layout = getLayoutStyles(index);
          return (
            <motion.div
              key={photo.id}
              layoutId={`photo-box-${photo.id}`}
              transition={springTransition}
              className={`relative aspect-[4/5] cursor-pointer rounded-xl overflow-hidden will-change-transform z-10 group bg-white/5 shadow-2xl ${layout.c}`}
              initial={{ opacity: 0, y: 30, rotate: layout.r }}
              animate={{ opacity: 1, y: 0, rotate: layout.r }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10, 
                rotate: 0, 
                zIndex: 30, 
                boxShadow: "0 30px 60px rgba(0,0,0,0.7)" 
              }}
              onClick={(e) => handlePhotoClick(e, photo)}
            >
              <img 
                src={photo.src} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={photo.title || "Disney Magic"}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, backdropFilter: "blur(20px)", transition: { duration: 0.3 } }} 
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2 } }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-pointer" 
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`photo-box-${selectedId}`} 
              transition={springTransition}
              className="relative w-full h-full max-w-[95vw] max-h-[90vh] flex items-center justify-center p-4 will-change-transform"
            >
              <img 
                src={selectedPhoto.src} 
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
                alt="Selected" 
              />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                transition={{ delay: 0.6, type: "spring", stiffness: 400, damping: 25 }}
                className="absolute bottom-[10%] md:bottom-12 left-1/2 -translate-x-1/2 w-[90%] md:w-auto min-w-[320px] bg-white/95 backdrop-blur-xl text-black px-6 py-5 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/40 flex flex-col items-center pointer-events-none"
              >
                <div className="w-8 h-[2px] bg-black mb-4 opacity-20" />
                <p className="font-serif italic text-sm md:text-base text-center leading-relaxed tracking-wide text-gray-900">
                  "Admiring my journey,<br/>yet my inbox remains empty?<br/>
                  <span className="block mt-2 font-semibold">How tragic. I suppose the magic stops here.</span>"
                </p>
                <div className="mt-4 text-[10px] text-gray-400 font-sans tracking-widest uppercase">
                  [ Click anywhere to close ]
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={toggleAudio}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 shadow-xl"
      >
        {isPlaying ? (
          <svg className="w-5 h-5 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        ) : (
           <svg className="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
        )}
      </button>

    </section>
  );
}