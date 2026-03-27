import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import profileData from '../data/profileData';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsSticky(latest > 50);
  });

  const headerVariants = {
    top: {
      width: '100%',
      maxWidth: '1400px',
      y: 0,
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '32px',
      paddingBottom: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(0px)',
    },
    sticky: {
      width: '90%',
      maxWidth: '800px',
      y: 20,
      paddingLeft: '22px',
      paddingRight: '22px',
      paddingTop: '10px',
      paddingBottom: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(32px)',
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <motion.header
        initial="top"
        animate={isSticky ? "sticky" : "top"}
        variants={headerVariants}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 30,
          mass: 1,
        }}
        className="flex items-center justify-between gap-6 border pointer-events-auto overflow-hidden rounded-[28px] !transition-none"
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
      </motion.header>
    </div>
  )
}
