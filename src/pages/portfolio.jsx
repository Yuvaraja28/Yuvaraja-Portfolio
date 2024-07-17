import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";
import { TbCopy, TbCopyCheckFilled   } from "react-icons/tb";
import profileData from '.././data/profileData';
import socialsData from '.././data/socialsData';
import projectsData from '.././data/projectsData';
import techStackData from '.././data/techStackData';
import experienceData from '.././data/experienceData';

function Portfolio() {
  const PROJECT_MULTIPLIER = 4
  const [clipboardCopied, setClipboardCopied] = useState(false)
  const [projectsLimit, setProjectsLimit] = useState(PROJECT_MULTIPLIER)
  return (
    <div className="px-[20px] 2xl:px-[40px]">
      <div
        className="pt-[20px] md:pt-[32px] flex flex-row flex-wrap items-center justify-center sm:justify-between gap-4 selection:text-background-color selection:bg-font-color"
      >
        <a
          href="/"
          className={`tracking-[0.5px] text-3xl font-medium righteous`}
          aria-label={`${profileData.name} Portfolio Link`}
        >
          {profileData.name}
        </a>
        <div
          className="flex flex-row items-center cursor-pointer text-center bg-menu-color rounded-[16px] transition-all overflow-auto p-[5px]"
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
          className="text-center font-semibold"
          href={profileData.freelance}
          aria-label='This is the Mail ID Link.'
        >
          Available for freelance
        </motion.a>
      </div>
      <div
        className="flex flex-col wide:justify-between gap-8 justify-around h-[100%] wide:h-[100%] py-10 gap-18 sm:h-[92svh] md:py-24 2xl:text-[56px] 2xl:px-[8.333%] selection:text-background-color selection:bg-font-color"
      >
        <div
          className="block wide:text-[28px] wide:leading-[1.8] text-[35px] sm:text-[44px] font-medium leading-[53px] sm:leading-[68px] sm:flex flex-col 2xl:gap-1"
        >
          <motion.span
            initial={{
              opacity: 0,
              translateY: 100
            }}
            animate={{
              translateY: [100, 0],
              opacity: [0, 1]
            }}
            transition={{
              duration: 0.8,
              type: "keyframes",
            }}
            className="mr-[10px]"
          >
            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              👋
            </motion.span> Hey, I’m {profileData.name}.
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              translateY: 75
            }}
            animate={{
              translateY: [75, 0],
              opacity: [0, 0.5, 1]
            }}
            transition={{
              duration: 0.8,
              type: "keyframes",
            }}
            className="mr-[10px]"
          >
            {profileData.role} who owns
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              translateY: 50
            }}
            animate={{
              translateY: [50, 0],
              opacity: [0, 0.45, 0.85, 1]
            }}
            transition={{
              duration: 0.9,
              type: "keyframes",
            }}
            className="mr-[10px]"
          >
            {profileData.company}. Based in {profileData.location}.
          </motion.span>
        </div>
        <motion.span
          initial={{
            opacity: 0,
            translateY: 50
          }}
          animate={{
            opacity: 1,
            translateY: [50, 0]
          }}
          transition={{
            duration: 0.8,
            type: "keyframes",
          }}
          className="text-[16px] font-normal wide:mt-[-20px] sm:mt-[-100px]"
        >
          ◎︎ Last updated — {profileData.updated}
        </motion.span>
        <motion.div
          initial={{
            opacity: 0,
            translateY: 50
          }}
          animate={{
            opacity: 1,
            translateY: [50, 0]
          }}
          transition={{
            duration: 0.6,
            type: "keyframes",
          }}
          className="flex flex-row justify-end"
        >
          <div
            className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2"
          >
            {socialsData.map(social =>
              <motion.a
                key={social.url}
                href={social.url}
                target="_blank"
                whileTap={{
                  scale: 0.80
                }}
                aria-label={`This Link takes you to ${social.name} site.`}
                className="hover:bg-social-hover hover:shadow-2xl rounded-[12px] self-center p-2 transition-[background] duration-[0.4s]"
              >
                {social.comp}
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{
          translateY: 100,
          opacity: 0
        }}
        whileInView={{
          translateY: 0,
          opacity: [0.25, 0.5, 0.75, 1]
        }}
        transition={{
          duration: 0.8,
          type: 'spring'
        }}
        viewport={{
          margin: '20px'
        }}
        className="flex flex-col gap-6 sm:gap-[46px] px-[20px] py-[40px] sm:px-[60px] sm:py-[80px] mx-[-20px] bg-font-color text-background-color sm:mx-0 sm:rounded-[64px] overflow-auto 2xl:px-[8.333%] 2xl:py-[126px] selection:bg-background-color selection:text-font-color"
      >
        <div
          className="flex flex-row flex-wrap font-medium text-[34px] sm:text-[48px] md:text-[60px] gap-x-2 lg:gap-x-4"
        >
          {profileData.about_title.map((about_title, about_title_i) => 
            <span key={about_title_i}>
              {about_title}
            </span>
          )}
        </div>
        <div
          className="flex flex-col gap-2 sm:block items-center text-[20px] sm:text-[22px] md:text-[24px] leading-[40px]"
        >
          <span
            className="float-left sm:mr-8 mb-4 rounded-[28px] lg:rounded-[42px] h-[260px] w-[260px] min-w-fit lg:h-[320px] lg:w-[320px] overflow-auto select-none"
          >
            <img
              width={1024}
              height={1024}
              alt={profileData.name}
              loading='lazy'
              style={{ width: '100%', height: '100%' }}
              src={profileData.image}
            />
          </span>
          <div
            className="font-normal"
          >
            {profileData.about.map((about, about_i) =>
              <span key={about_i}>
                {about}
                {((profileData.about.length-1) != about_i) &&
                  <>
                    <br /><br />
                  </>
                }
              </span>
            )}
          </div>
        </div>
        <motion.a
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.92
          }}
          target="_blank"
          href={profileData.resume}
          aria-label={`This Link will take you to ${profileData.name}'s Resume`}
          className="flex flex-row items-center gap-2 font-semibold border-2 border-background-color rounded-2xl pt-[15px] pb-[12px] px-[24px] text-[17px] select-none cursor-pointer transition-[background] duration-[0.4s] hover:bg-background-color hover:text-font-color w-fit"
        >
          See full Resume <MdArrowOutward size={22} />
        </motion.a>
      </motion.div>
      <div
        className="flex flex-col gap-24 my-[100px] xl:px-[8.333%] selection:text-background-color selection:bg-font-color"
      >
        <div
          className="flex flex-col gap-12"
        >
          <motion.div
            initial={{
              translateY: 100,
              opacity: 0
            }}
            animate={{
              translateY: [100, 0],
              opacity: [0, 1]
            }}
            transition={{
              duration: 0.8,
              type: 'spring'
            }}
            className="flex flex-row flex-wrap justify-between items-center border-t-4 border-font-color"
          >
            <span
              className="text-[42px] sm:text-[56px] font-medium"
            >
              Projects
            </span>
            <span
              className="flex flex-row items-center gap"
            >
              My latest projects <IoIosArrowRoundDown size={22} />
            </span>
          </motion.div>
          {projectsData
            .slice(0, projectsLimit)
            .filter(project => 
              (project?.active == undefined) ? true : project.active
            )
            .map(project => 
            <motion.a
              initial={{
                translateY: 100,
                opacity: 0
              }}
              whileInView={{
                translateY: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.6,
                type: 'spring'
              }}
              whileHover={{
                scale: 0.97
              }}
              whileTap={{
                scale: 0.97
              }}
              viewport={{
                margin: '20px'
              }}
              key={project.name}
              target="_blank"
              href={project.link}
              aria-label={`This Link takes you to ${project.name} project site.`}
              className="flex flex-col gap-3 cursor-pointer select-none group"
            >
              <span
                className="bg-font-color/5 lg:h-[65svh] shadow-2xl rounded-3xl p-6 sm:p-8"
              >
                <img
                  width={1920}
                  height={1080}
                  src={project.banner}
                  alt={project.name}
                  loading='lazy'
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </span>
              <div
                className="flex flex-col gap-[4px] mx-2"
              >
                <span
                  className="flex flex-row justify-between gap-2 items-center text-[26px] sm:text-[32px]"
                >
                  {project.name} - {project.title}
                  <MdArrowOutward size={26} className="opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                </span>
                <div
                  className="text-[18px] font-light sm:text-[19px] opacity-90"
                >
                  {project.description}
                </div>
                <div
                  className="text-[18px] font-light sm:text-[20px] opacity-90"
                >
                  <b className='font-medium'>◎︎ Technologies: </b>{project.technologies.join(', ')}
                </div>
              </div>
            </motion.a>
          )}
          {(projectsData.filter(p => !p.active).length > projectsLimit) &&
            <div
              className='flex w-100 justify-center items-center'
            >
              <motion.button
                whileHover={{
                  scale: 0.97
                }}
                whileTap={{
                  scale: 1.05
                }}
                transition={{
                  duration: 0.4,
                  type: 'spring'
                }}
                onClick={() => setProjectsLimit((i) => i+PROJECT_MULTIPLIER)}
                className={`px-6 py-3 text-background-color bg-font-color font-semibold border-[3px] rounded-2xl cursor-pointer selection:text-background-color selection:bg-font-color`}
              >
                Show more projects
              </motion.button>
            </div>
          }
        </div>
        <div
          className="flex flex-col gap-8"
        >
          <motion.div
            initial={{
              translateY: 100,
              opacity: 0
            }}
            animate={{
              translateY: [100, 0],
              opacity: [0, 1]
            }}
            transition={{
              duration: 0.8,
              type: 'spring'
            }}
            className="flex flex-row flex-wrap justify-between items-center border-t-4 border-font-color gap-[6px]"
          >
            <span
              className="text-[42px] sm:text-[56px] font-medium"
            >
              Experiences
            </span>
            <span
              className="flex flex-row items-center gap"
            >
              Worked at various companies <IoIosArrowRoundDown size={22} />
            </span>
          </motion.div>
          {experienceData.map((experience, exp_index) =>
            <motion.a
              initial={{
                translateY: 60,
                opacity: 0
              }}
              whileInView={{
                translateY: 0,
                opacity: 1
              }}
              transition={{
                duration: 1,
                type: 'spring'
              }}
              viewport={{
                margin: '20px'
              }}
              key={exp_index}
              href={experience.link}
              target='_blank'
              aria-label={`This link takes you to the companies ${experience.name}'s website that i've worked `}
              className='flex flex-row flex-wrap justify-between items-center g-[6px] mx-[2px] cursor-pointer gap-1 border-b-[1.5px] border-line-color pb-8 last:border-0 last:pb-0 group'
            >
              <div
                className='flex flex-row items-center gap-5'
              >
                <div
                  className="flex flex-col"
                >
                  <span
                    className='font-medium text-[34px] sm:text-[36px] leading-[1.2]'
                  >
                    {experience.name}
                  </span>
                  <span
                    className='opacity-80 text-[20px] sm:text-[22px]'
                  >
                    {experience.role}
                  </span>
                </div>
                <MdArrowOutward size={36} className="opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              </div>
              <span
                className='opacity-80'
              >
                {experience.duration}
              </span>
            </motion.a>
          )}
        </div>
        <div
          className="flex flex-col gap-8"
        >
          <motion.div
            initial={{
              translateY: 100,
              opacity: 0
            }}
            animate={{
              translateY: [100, 0],
              opacity: [0, 1]
            }}
            transition={{
              duration: 0.8,
              type: 'spring'
            }}
            className="flex flex-row flex-wrap justify-between items-center border-t-4 border-font-color gap-[6px]"
          >
            <span
              className="text-[42px] sm:text-[56px] font-medium"
            >
              Skills
            </span>
            <span
              className="flex flex-row items-center gap"
            >
              My tech stack and skill set <IoIosArrowRoundDown size={22} />
            </span>
          </motion.div>
          {techStackData.map(tech =>
            <div
              key={tech.type}
              className='flex flex-col gap-4 mx-2'
            >
              <motion.span
                initial={{
                  translateY: 50,
                  opacity: 0
                }}
                whileInView={{
                  translateY: 0,
                  opacity: 1
                }}
                transition={{
                  duration: 0.6,
                  type: 'spring'
                }}
                viewport={{
                  margin: '20px'
                }}
                className='font-medium text-font-color/95 text-[26px] sm:text-[30px]'
              >
                {tech.type}
              </motion.span>
              <div
                className="flex flex-row flex-wrap gap-6 lg:gap-8 text-3xl mb-[-16px]"
              >
                {tech.stack.map(stack => 
                  <motion.div
                    initial={{
                      translateY: 50,
                      opacity: 0
                    }}
                    whileInView={{
                      translateY: 0,
                      opacity: 1
                    }}
                    whileHover={{
                      scale: 0.85
                    }}
                    whileTap={{
                      scale: 1.05
                    }}
                    transition={{
                      duration: 0.6,
                      type: 'spring'
                    }}
                    viewport={{
                      margin: '20px'
                    }}
                    key={stack.title}
                    className="flex flex-col gap-[6px] items-center select-none group w-min cursor-pointer"
                  >
                    <span
                      className="bg-social-hover/5 border border-social-hover/10 rounded-3xl shadow-2xl self-center p-[14px] h-[62px] w-[62px]"
                    >
                      <img
                        width={256}
                        height={256}
                        src={stack.src}
                        alt={stack.title}
                        loading='lazy'
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </span>
                    <a
                      href={stack.link}
                      target='_blank'
                      aria-label={`This Link takes you to Official ${stack.title} website.`}
                      className='text-[15px] text-center leading-[18px] opacity-0 transition-[opacity] duration-300 group-hover:opacity-100'
                    >
                      {stack.title}
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className='text-background-color bg-font-color h-[100%] px-[20px] py-[100px] 2xl:px-[40px] 2xl:h-[100svh] mx-[-20px] 2xl:mx-[-40px] selection:bg-background-color selection:text-font-color'
      >
        <div
          className='flex flex-col pt-[42px] my-0 2xl:my-[60px] 2xl:mx-[8.333%] border-t-4 border-t-background-color'
        >
          <span
            className='text-[28px] md:text-[40px] font-medium'
          >
            Feel free to drop me an email<br />
            or reach out via my social profiles 😀
          </span>
          <div
            className='flex flex-col items-center justify-center md:flex-row md:justify-between mt-12 md:mt-14 gap-8'
          >
            <button
              onClick={() => {navigator?.clipboard?.writeText(profileData.mail); setClipboardCopied(true); setTimeout(() => setClipboardCopied(() => false), 1000)}}
              className={`flex flex-row items-center gap-2 px-8 py-4 text-font-color font-medium border-[3px] ${!clipboardCopied ? 'hover:' : ''}border-sky-500 ${!clipboardCopied ? 'hover:' : ''}shadow-xl ${!clipboardCopied ? 'hover:' : ''}shadow-sky-200 transition-all bg-background-color rounded-[16px] cursor-pointer select-text selection:text-background-color selection:bg-font-color`}
            >
              {profileData.mail} {(clipboardCopied) ? <TbCopyCheckFilled  size={20} /> : <TbCopy size={20} />}
            </button>
            <div
              className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-4"
            >
              {socialsData
                .filter(social => social.footer)
                .map(social =>
                <motion.a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  whileTap={{
                    scale: 0.80
                  }}
                  className="hover:bg-background-color/5 hover:shadow-inner rounded-[12px] self-center p-2 transition-[background] duration-[0.4s]"
                >
                  {social.comp}
                </motion.a>
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
        </div>
      </div>
    </div>
  )
}

export default Portfolio;