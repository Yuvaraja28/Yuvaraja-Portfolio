import React from 'react';
import { useState, useMemo } from "react";
import techStackData, { technologies } from '../data/techStackData';

export function TechIcon({ techKey, isActive, isDimmed }) {
  const tech = technologies[techKey];
  return (
    <a
      href={tech.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={"Open " + tech.title + " documentation"}
      className="flex-none group relative"
      style={{
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, filter 0.3s ease',
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
        opacity: isDimmed ? 0.2 : 1,
        filter: isDimmed ? 'grayscale(1) blur(2px)' : 'grayscale(0) blur(0px)',
      }}
    >
      <div className="w-16 h-16 glass rounded-2xl border-white/5 flex items-center justify-center p-3.5 transition-all duration-500 group-hover:border-accent-primary/50 group-hover:bg-accent-primary/5">
        <img src={tech.src} alt={tech.title}
          loading="lazy" decoding="async"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          style={{ borderRadius: tech?.radius || 0 }} />
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 glass rounded-lg border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        <span className="text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">{tech.title}</span>
      </div>
    </a>
  );
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(null);

  const rows = useMemo(() => {
    const allTech = Object.keys(technologies);
    const r1 = allTech.slice(0, Math.ceil(allTech.length / 3));
    const r2 = allTech.slice(Math.ceil(allTech.length / 3), Math.ceil((allTech.length / 3) * 2));
    const r3 = allTech.slice(Math.ceil((allTech.length / 3) * 2));
    return {
      row1: [...r1, ...r1, ...r1],
      row2: [...r2, ...r2, ...r2],
      row3: [...r3, ...r3, ...r3]
    };
  }, []);

  const isTechInCategory = (techKey, categoryType) => {
    if (!categoryType) return false;
    return techStackData.find(c => c.type === categoryType)?.stack.includes(techKey);
  };

  return (
    <section id='techstack' className="flex flex-col gap-22 overflow-hidden pt-16 pb-16 sm:pt-32 sm:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div data-animate="fade-up" className="flex flex-col gap-4 text-center items-center">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px w-24 bg-gradient-to-r from-transparent to-accent-primary opacity-20"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <div className="flex-1 h-px w-24 bg-gradient-to-l from-transparent to-accent-secondary opacity-20"></div>
          </div>
          <p className="text-white/40 text-base md:text-lg max-w-2xl font-medium">
            An innovative ecosystem of tools curated for high-performance engineering.
          </p>
        </div>

        <div className="mt-8 mb-2 flex flex-wrap justify-center gap-3">
          {techStackData.map((cat) => (
            <button key={cat.type}
              onMouseEnter={() => setActiveCategory(cat.type)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat.type
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                : "glass text-white/40 border-white/5 hover:border-white/20 hover:text-white"
                }`}>
              {cat.type}
            </button>
          ))}
        </div>
      </div>

      <div className="marquee-container relative flex flex-col gap-6 [perspective:1000px] [transform-style:preserve-3d]">
        <div className="flex flex-col gap-6 rotate-x-[15deg] rotate-y-[-10deg] scale-110">
          <div className="flex gap-6 animate-marquee-fast">
            {rows.row1.map((key, i) => <TechIcon key={`${key}-${i}`} techKey={key} isActive={isTechInCategory(key, activeCategory)} isDimmed={activeCategory && !isTechInCategory(key, activeCategory)} />)}
          </div>
          <div className="flex gap-6 animate-marquee-reverse">
            {rows.row2.map((key, i) => <TechIcon key={`${key}-${i}`} techKey={key} isActive={isTechInCategory(key, activeCategory)} isDimmed={activeCategory && !isTechInCategory(key, activeCategory)} />)}
          </div>
          <div className="flex gap-6 animate-marquee-slow">
            {rows.row3.map((key, i) => <TechIcon key={`${key}-${i}`} techKey={key} isActive={isTechInCategory(key, activeCategory)} isDimmed={activeCategory && !isTechInCategory(key, activeCategory)} />)}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-color to-transparent z-10 h-[125%] top-0 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background-color to-transparent z-10 h-[125%] top-[-75px] pointer-events-none"></div>
      </div>
    </section>
  );
}
