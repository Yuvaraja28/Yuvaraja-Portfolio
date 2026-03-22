import React from 'react';
import { useState, useEffect } from 'react';
import profileData from '../data/profileData';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <header
        className={`flex items-center justify-between gap-6 border pointer-events-auto overflow-hidden rounded-[28px] transition-[width,max-width,padding,background-color,border-color,backdrop-filter,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isSticky
            ? 'w-[90%] max-w-[800px] translate-y-5 px-[22px] py-2 bg-white/[0.06] border-white/10 backdrop-blur-[32px]'
            : 'w-full max-w-[1400px] translate-y-0 px-8 pt-8 pb-4 bg-transparent border-transparent backdrop-blur-none'
        }`}
      >
        <a
          href="/"
          className="text-2xl font-black tracking-tighter transition-all duration-300 group shrink-0"
          aria-label={`${profileData.name} Portfolio`}
        >
          <span className="text-white">YUV</span><span className="text-accent-primary group-hover:text-accent-secondary transition-colors">.</span>
        </a>

        <div className="hidden sm:flex items-center gap-1.5 p-1 glass rounded-2xl shrink-0 absolute left-[50%] translate-x-[-50%]">
          <div className="px-4 py-2 rounded-xl bg-white/5 text-white/90 text-[10px] font-black tracking-[0.2em] uppercase">
            {profileData.fullName}
          </div>
        </div>

        <a
          target='_blank'
          rel="noopener noreferrer"
          aria-label="Email Me"
          className="px-6 py-2.5 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
          href={`mailto:${profileData.mail}`}
        >
          Hire Me
        </a>
      </header>
    </div>
  )
}
