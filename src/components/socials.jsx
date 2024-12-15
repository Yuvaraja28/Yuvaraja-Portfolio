import { motion } from "motion/react";

export function SocialBubble({ social, size, color = 'black' }) {
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
      className={`flex hover:bg-${color}/5 hover:shadow-inner rounded-[12px] self-center p-2 transition-[background] duration-[0.4s]`}
    >
      <social.comp size={size} />
    </motion.a>
  )
}