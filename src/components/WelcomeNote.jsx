import React, { useEffect, useState } from 'react';

export default function WelcomeNote() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        select-none
        relative
        z-10
        w-fit
        max-w-[300px]
        md:max-w-[340px]
        -rotate-[3deg]
        welcome-note-animation
      "
    >
      <div
        className="relative"
        style={{
          fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
          fontStyle: 'italic',
        }}
      >
        {/* 中文 */}
        <div
          className="
            text-[16px]
            leading-[1.45]
            tracking-[0.01em]
            text-[#777777]
            md:text-[18px]
          "
        >
          谢谢你来看我~
        </div>

        {/* English */}
        <div
          className="
            mt-0.5
            pl-3
            text-[11px]
            leading-[1.5]
            tracking-[0.01em]
            text-[#999999]
            md:text-[12px]
          "
        >
          Thanks for stopping by.
        </div>

        {/* Français */}
        <div
          className="
            mt-0
            pl-6
            text-[10px]
            leading-[1.5]
            tracking-[0.01em]
            text-[#999999]
            md:text-[11px]
          "
        >
          Tu es là. Merci d’être passé·e.
        </div>

        {/* 很轻的手写线条 */}
        <div
          className="
            mt-3
            ml-24
            h-px
            w-28
            rotate-[2deg]
            bg-[#888888]/45
            md:ml-32
            md:w-36
          "
        />

        {/* 小小的 :) */}
        <span
          className="
            absolute
            -right-4
            bottom-[-2px]
            text-[16px]
            text-[#888888]/80
            md:-right-5
            md:text-[18px]
          "
        >
          :)
        </span>
      </div>
    </div>
  );
}