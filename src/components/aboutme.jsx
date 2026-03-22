import React from 'react';
import profileData from '../data/profileData';
import { MdArrowOutward } from "react-icons/md";

const FocusSection = ({ title, items }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/30">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <span
          key={index}
          className={`px-4 py-2 text-sm font-semibold glass rounded-lg border-white/5 ${item.highlight ? 'text-gradient' : 'text-white/80'}`}
        >
          {item.title}
        </span>
      ))}
    </div>
  </div>
);

export default function AboutMe() {
  return (
    <section id='aboutme' data-animate="fade-up" className="flex flex-col gap-12 bg-transparent text-font-color relative z-20 px-6 py-8 pt-12 sm:pt-28">
      <div className="flex flex-col items-center md:flex-row gap-12 lg:gap-20 max-w-7xl mx-auto">
        <div data-animate="scale-in" className="md:self-start lg:sticky lg:top-28 w-[20em]">
          <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-[40px] opacity-20 blur-2xl"></div>
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] border border-white/10 glass">
            <img
              src={profileData.image}
              alt={profileData.fullName}
              loading='lazy'
              decoding="async"
              width="128"
              height="128"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-10">
          <div data-animate="slide-left" className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"></div>
          </div>

          <div className="text-base md:text-lg leading-relaxed text-white/60 space-y-6 font-medium">
            {profileData.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div data-stagger className="flex flex-col gap-8 mt-6">
            <FocusSection title="Security & Core Focus" items={profileData.coreFocus} />
            <FocusSection title="Stack" items={profileData.stack} />
            <FocusSection title="Background" items={profileData.background} />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a target="_blank" rel="noopener noreferrer" aria-label="See full Resume" href={profileData.resume}
              className="hover-scale flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 border-white/20 rounded-2xl font-bold transition-colors duration-300">
              See full Resume <MdArrowOutward size={20} className="text-white/60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
