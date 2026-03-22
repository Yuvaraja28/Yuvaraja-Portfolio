import React from 'react';

export function SocialBubble({ social, size }) {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social Link"
      className="flex hover:bg-white/5 rounded-[12px] self-center p-2 transition-all duration-300 active:scale-75 cursor-pointer"
    >
      <social.comp size={size} />
    </a>
  )
}

export function SocialBubbleBG({ social, size = 21 }) {
  return (
    <a
      href={social.url}
      target='_blank'
      rel="noopener noreferrer"
      aria-label="Social Link"
      className="bg-social-hover/50 border border-social-hover/60 rounded-[12px] p-1.5 shadow-2xl w-fit transition-transform duration-200 active:scale-75 cursor-pointer hover:scale-105"
    >
      <social.comp size={size} />
    </a>
  )
}