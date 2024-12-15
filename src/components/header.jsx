import { motion } from "motion/react";
import profileData from '../data/profileData';

export default function Header() {
  return (
    <div
      className="pt-[20px] md:pt-[32px] flex flex-row flex-wrap items-center justify-center sm:justify-between gap-4 selection:text-background-color selection:bg-font-color"
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
          className="pt-[12px] py-[10px] px-[15px] text-[14px] sm:text-[16px] sm:px-[35px] font-semibold select-none bg-font-color text-background-color rounded-[16px] h-full"
        >
          {profileData.role}
        </motion.span>
      </div>
      <motion.a
        animate={{
          opacity: [1, 0, 1]
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        target='_blank'
        style={{
          cursor: 'pointer'
        }}
        className="text-center text-xl font-semibold pl-5"
        href={`mailto:${profileData.mail}`}
        aria-label='This is the Mail ID Link.'
      >
        Freelancer
      </motion.a>
    </div>
  )
}