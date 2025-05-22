import { motion } from "motion/react";

export function SocialBubble({ social, size }) {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      whileTap={{
        scale: 0.80
      }}
      style={{
        cursor: 'pointer'
      }}    
      className={`flex hover:bg-black/5 hover:shadow-inner rounded-[12px] self-center p-2 transition-[background] duration-[0.4s]`}
    >
      <social.comp size={size} />
    </motion.a>
  )
}

export function SocialBubbleBG({ social, size = 21 }) {
  return (
    <motion.a
      href={social.url}
      target='_blank'
      whileTap={{
        scale: 0.80
      }}
      style={{
        cursor: 'pointer'
      }}
      className="bg-social-hover/50 border border-social-hover/60 rounded-[12px] p-1.5 shadow-2xl w-fit"
    >
      <social.comp size={size} />
    </motion.a>
  )
}