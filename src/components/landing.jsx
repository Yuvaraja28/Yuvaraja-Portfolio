import React from 'react';
import profileData from '../data/profileData';
import ModernBackground from './particles.jsx';
import socialsData, { socials } from '.././data/socialsData';

export default function Landing() {
  return (
    <div className='relative w-full h-full px-6 lg:px-12 flex flex-col overflow-hidden'>
      <ModernBackground />

      <div className="hero-container flex-1 flex flex-col justify-center items-center gap-8 text-center z-10 py-12">
        <div className="flex flex-col gap-8 sm:gap-6 max-w-5xl mx-auto">
          <div className="hero-item flex items-center justify-center">
            <span className="px-4 py-1.5 rounded-full glass text-[12px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-40 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
              </span>
              {profileData.tags[0]}<span className="text-accent-primary">.</span><span className="glitch">{profileData.tags[1]}</span><span className="text-accent-primary">.</span>{profileData.tags[2]}
            </span>
          </div>

          <h1 className="hero-item text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Architecting <span className="text-gradient">Digital Experiences</span> <br />
            with precision and <span className="italic font-light">purpose</span>.
          </h1>

          <p className="hero-item text-base md:text-lg lg:text-xl font-medium text-white/50 max-w-2xl mx-auto leading-relaxed">
            I'm <span className="text-white font-semibold">{profileData.name}</span>, {profileData.shortAbout}
          </p>
        </div>

        <div className="hero-item flex flex-col sm:flex-row items-center gap-8 sm:gap-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={profileData.resume}
            className="hover-scale px-10 py-3 bg-white text-black font-bold rounded-xl text-sm shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(255,255,255,0.4)] transition-shadow duration-300"
          >
            View My Resume
          </a>

          <div className="flex items-center justify-center flex-wrap gap-1 p-1 glass rounded-xl">
            {socialsData.map(social => ({ ...social, ...socials[social.key] })).map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-scale p-2.5 rounded-lg transition-colors duration-200 text-white/40 hover:text-white hover:bg-white/5"
                aria-label={`Visit ${social.social}`}
              >
                <social.comp size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
