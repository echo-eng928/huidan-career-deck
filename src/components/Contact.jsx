import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays, Check, Copy, Download, Mail } from 'lucide-react';

export default function Contact({ lang }) {
  const currentLang = lang || 'zh';
  const [copyStatus, setCopyStatus] = useState('idle');

  const email = 'echoa981@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }
  };

  return (
    <section id="slide-05" className="deck-slide">
      <div className="max-w-5xl mx-auto px-6 w-full space-y-8 md:space-y-10">
        <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-[#1E40AF] font-bold">05 /</span>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-[#111111]">
              {currentLang === 'zh' ? '保持联系' : 'Let’s Connect'}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            GET IN TOUCH
          </span>
        </div>

        <div className="space-y-7">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#111111] leading-tight">
              {currentLang === 'zh'
                ? '好的合作，始于一次真诚的交流。'
                : 'Let’s start with a good conversation.'}
            </h3>

            <p className="text-sm md:text-base font-sans text-[#555555] leading-relaxed max-w-2xl">
              {currentLang === 'zh'
                ? '如果你正在寻找业务运营、合作伙伴管理或聚焦亚太市场的合作，欢迎预约一个时间，或直接给我发邮件。'
                : 'Looking to discuss business operations, APAC partner ecosystems, or cross-border collaboration? Pick a time on my calendar or drop me an email.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <article className="flex min-h-44 flex-col justify-between border border-[#D9E2E8] bg-white p-5 transition-colors hover:border-[#1E40AF]">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center bg-[#EAF0F8] text-[#1E40AF]">
                  <Mail size={19} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">02 / EMAIL</span>
              </div>
              <div className="mt-6">
                <h4 className="text-base font-bold text-[#111111]">Email</h4>
                <a href={`mailto:${email}`} className="mt-1 block break-all text-sm text-[#444444] underline decoration-[#B9C7D8] underline-offset-4 hover:text-[#1E40AF]">
                  {email}
                </a>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex min-h-11 items-center gap-2 bg-[#1E40AF] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#17358F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
                  >
                    {currentLang === 'zh' ? '发送邮件' : 'Send Email'}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#D9E2E8] px-4 text-sm font-semibold text-[#1E40AF] hover:bg-[#EAF0F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
                    aria-live="polite"
                  >
                    {copyStatus === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                    {copyStatus === 'copied'
                      ? (currentLang === 'zh' ? '邮箱已复制！' : 'Email copied!')
                      : copyStatus === 'error'
                        ? (currentLang === 'zh' ? '复制失败，请手动复制' : 'Copy failed; please copy manually')
                        : (currentLang === 'zh' ? '复制邮箱' : 'Copy Email')}
                  </button>
                </div>
              </div>
            </article>

            <article id="booking-card" className="flex min-h-44 flex-col justify-between border border-[#D9E2E8] bg-white p-5 transition-colors hover:border-[#1E40AF]">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center bg-[#EAF0F8] text-[#1E40AF]">
                  <CalendarDays size={19} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">02 / 15 MIN</span>
              </div>
              <div className="mt-6">
                <h4 className="text-base font-bold text-[#111111]">Book a Call</h4>
                <a
                  href="https://calendly.com/echoa981/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center gap-2 border border-[#1E40AF] px-4 text-sm font-semibold text-[#1E40AF] transition-colors hover:bg-[#EAF0F8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
                >
                  {currentLang === 'zh' ? '预约 15 分钟初次交流' : 'Schedule a 15-min Intro Chat'}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="flex min-h-44 flex-col justify-between border border-[#D9E2E8] bg-white p-5 transition-colors hover:border-[#1E40AF]">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center bg-[#EAF0F8] text-[#1E40AF]">
                  <Download size={19} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777]">04 / PDF</span>
              </div>
              <div className="mt-6">
                <h4 className="text-base font-bold text-[#111111]">Resume</h4>
                <a
                  href="/resume.pdf"
                  download
                  className="mt-3 inline-flex min-h-11 items-center gap-2 border border-[#222222] px-4 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#F2F4F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF]"
                >
                  {currentLang === 'zh' ? '下载简历 (PDF)' : 'Download Resume (PDF)'}
                  <Download size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="border-t border-[#E5E5E0] pt-4 text-[10px] font-mono text-[#777777]">
          © {new Date().getFullYear()} Huidan Shen. All rights reserved.
        </div>
      </div>
    </section>
  );
}