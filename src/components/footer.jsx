import React from 'react';
import { motion } from "motion/react";
import profileData from '../data/profileData';
import socialsData, { socials } from '.././data/socialsData';
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";
import { SocialBubble } from './socials';

export default function Footer() {
  const [clipboardCopied, setClipboardCopied] = React.useState(false)
  return (
    <footer
      className='sticky bottom-0 flex flex-col justify-center text-background-color bg-font-color px-[35px] py-[100px] lg:px-[80px] lg:h-[100svh] selection:bg-background-color selection:text-font-color'
    >
      <span
        className='text-[28px] md:text-[40px] text-center md:text-start font-medium border-t-4 border-t-black pt-[40px]'
      >
        Feel free to drop me an email
        or reach out via my social profiles 😀
      </span>
      <div
        className='flex flex-col items-center justify-center md:flex-row md:justify-between mt-12 md:mt-14 gap-8'
      >
        <button
          onClick={() => {navigator?.clipboard?.writeText(profileData.mail); setClipboardCopied(true); setTimeout(() => setClipboardCopied(() => false), 1000)}}
          style={{
            cursor: 'pointer'
          }}
          className={`flex flex-row items-center gap-2 px-8 py-4 text-font-color font-medium border-[3px] ${!clipboardCopied ? 'hover:' : ''}border-sky-500 ${!clipboardCopied ? 'hover:' : ''}shadow-xl ${!clipboardCopied ? 'hover:' : ''}shadow-sky-200 transition-all bg-background-color rounded-[16px] select-text selection:text-background-color selection:bg-font-color`}
        >
          {profileData.mail} {(clipboardCopied) ? <TbCopyCheckFilled  size={20} /> : <TbCopy size={20} />}
        </button>
        <div
          className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-4"
        >
          {socialsData.filter(social => social.footer).map(social =>
            <SocialBubble
              key={social.url}
              social={{...social, ...socials[social.key]}}
              size={24}
            />
          )}
        </div>
      </div>
      <div
        className='flex flex-col items-center justify-center md:flex-row md:justify-between mt-12 md:mt-36 opacity-90 gap-4'
      >
        <span>
          Made with 💗 in {profileData.location}
        </span>
        <span>
          © {new Date().getFullYear()} | {profileData.fullName}
        </span>
      </div>
    </footer>
  )
}