import { motion } from "motion/react";
import profileData from '../data/profileData';

export default function Header() {
  return (
    <div
      className="pt-[20px] mb-4 sm:mb-0 md:pt-[32px] flex flex-row flex-wrap items-center justify-center sm:justify-between gap-2 selection:text-background-color selection:bg-font-color"
    >
      <a
        href="/"
        style={{
          cursor: 'pointer'
        }}
        className={`tracking-[0.5px] text-3xl font-medium righteous`}
        aria-label={`${profileData.name} Portfolio Link`}
      >
        {profileData.name}
      </a>
      <div
        style={{
          cursor: 'pointer'
        }}
        className="flex flex-row items-center text-center bg-menu-color rounded-[16px] transition-all overflow-auto p-[5px]"
      >
        <motion.span
          whileHover={{
            scale: 0.95
          }}
          whileTap={{
            scale: 0.97
          }}
          transition={{
            duration: 0.25,
            type: 'spring'
          }}
          className="pt-[10px] pb-[8.5px] px-[15px] text-[14px] sm:text-[16px] sm:px-[35px] font-semibold select-none bg-font-color text-background-color rounded-[15px] h-full"
        >
          {profileData.role}
        </motion.span>
      </div>
      <a
        target='_blank'
        style={{
          cursor: 'pointer'
        }}
        className="text-center text-xl font-semibold border-b-3 border-dotted hover:bg-white hover:text-black hover:border-solid transition-all duration-500 hover:px-3 hover:py-1 hover:pt-1.5 hover:rounded-xl"
        href={`mailto:${profileData.mail}`}
        aria-label='This is the Mail ID Link.'
      >
        Hire me!
      </a>
    </div>
  )
}