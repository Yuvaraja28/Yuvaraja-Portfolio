import React from 'react';
import { SocialBubbleBG } from "./socials";
import { socials } from "../data/socialsData";
import experienceData from '../data/experienceData';
import { relativeDate, getDateDifference } from "../utils/dateMethods";

export default function Experiences() {
  return (
    <section id='experiences' className="flex flex-col gap-12 px-6 md:px-12 py-8 sm:pt-26">
      <div className="section-grid"></div>
      <div data-animate="slide-left" className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent-primary to-transparent opacity-20"></div>
        </div>
        <p className="text-white/40 text-base md:text-lg max-w-2xl font-medium">
          A track record of high-impact engineering and innovation.
        </p>
      </div>

      <div data-stagger className="flex flex-col gap-8 relative px-4">
        <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent opacity-10"></div>

        {experienceData.map((experience, index) => (
          <div
            key={experience.name}
            className={`relative flex flex-col sm:flex-row gap-8 sm:gap-0 items-start ${(index % 2) === 1 ? 'sm:flex-row-reverse' : ''}`}
          >
            <div className="absolute left-0 sm:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-background-color border-2 border-accent-primary/50 z-10 shadow-[0_0_15px_var(--shadow-accent)] hidden sm:block"></div>

            <div className="w-full sm:w-[45%]">
              <div className="glass p-6 rounded-[24px] border-white/5 hover:border-accent-primary/20 transition-all duration-500 group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative p-1 rounded-xl bg-white/5 border border-white/5">
                      <img loading='lazy' decoding="async" alt={experience.name} src={experience.icon}
                        className="w-10 h-10 object-contain rounded-lg no-tint" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-extrabold text-white">{experience.positions[0].role}</h3>
                      <p className="text-white/30 text-[12px] font-bold tracking-widest uppercase">{experience.name}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-white/20 text-[10px] font-bold tracking-wide uppercase">
                    <span className="flex items-center gap-2 text-white/40 font-black text-[14px]">
                      <span className="w-1 h-1 rounded-full bg-accent-primary/30"></span>
                      {experience.type} · {experience.mode}
                    </span>
                    <span className="text-white/20 text-[12px]">
                      {(experience.positions[0].duration?.end == null)
                        ? `${relativeDate(experience.positions[experience.positions.length - 1].duration.start)} - Present · ${getDateDifference(experience.positions[experience.positions.length - 1].duration.start, new Date())}`
                        : `${relativeDate(experience.positions[experience.positions.length - 1].duration.start)} - ${relativeDate(experience.positions[0].duration.end)} · ${getDateDifference(experience.positions[experience.positions.length - 1].duration.start, experience.positions[0].duration.end)}`
                      }
                    </span>
                  </div>

                  <div className="flex flex-col">
                    {experience.positions.map((position, pos_index) => (
                      <ul key={pos_index} className="flex flex-col gap-1.5 text-white/50 text-[13px] leading-relaxed font-medium">
                        {position.points.map((point, p_idx) => (
                          <li key={p_idx} className="flex gap-2">
                            <span className="text-white/20 text-base leading-none">•</span>
                            <span className="flex-1">{point}</span>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>

                  <div className="mt-2 pt-3 border-t border-white/5 w-full flex justify-between items-center">
                    <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{experience.location}</span>
                    <SocialBubbleBG social={{ url: experience.link, ...socials.web }} size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
