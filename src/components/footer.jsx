import React from 'react';
import profileData from '../data/profileData';
import socialsData, { socials } from '.././data/socialsData';
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";
import { SocialBubble } from './socials';

export default function Footer() {
  const [clipboardCopied, setClipboardCopied] = React.useState(false);

  return (
    <footer className='sticky bottom-0 min-h-[40vh] sm:min-h-[90vh] flex flex-col justify-center items-center bg-background-color text-font-color px-6 py-12 lg:px-20 z-0 overflow-hidden'>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-12 md:gap-20">
        <div className="flex flex-col gap-6 text-center">
          <h2 data-animate="fade-up"
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white">
            Let's build something <br /> <span className="text-gradient">exceptional</span>.
          </h2>
          <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto font-medium">
            Currently open to new opportunities and interesting collaborations.
          </p>
        </div>

        <div data-stagger className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => {
                navigator?.clipboard?.writeText(profileData.mail);
                setClipboardCopied(true);
                setTimeout(() => setClipboardCopied(false), 2000);
              }}
              className="group relative flex items-center gap-3 px-6 py-3.5 glass rounded-xl border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="text-sm font-bold tracking-tight text-white/70 group-hover:text-white transition-colors">
                {profileData.mail}
              </span>
              <div className="w-px h-4 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
              {clipboardCopied ? (
                <div className="animate-pop-in flex items-center gap-2">
                  <TbCopyCheckFilled size={18} className="text-green-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Copied</span>
                </div>
              ) : (
                <TbCopy size={18} className="text-white/30 group-hover:text-white transition-all" />
              )}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialsData.filter(s => s.footer).map((social) => (
              <SocialBubble key={social.url} social={{ ...social, ...socials[social.key] }} size={28} />
            ))}
          </div>
        </div>

        <div className="mt-4 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 text-sm font-medium tracking-widest uppercase">
          <span>Made with 💙 in {profileData.location}</span>
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()}</span>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <span>{profileData.fullName}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}