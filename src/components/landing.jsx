import Header from './header.jsx';
import { motion } from "motion/react";
import profileData from '../data/profileData';
import socialsData, { socials } from '.././data/socialsData';

export default function Landing() {
  return (
    <div
      className='px-[20px] 2xl:px-[40px] h-[105vh] sticky top-0'
    >
      <Header />
      <div
        className="flex flex-col justify-center 2xl:px-[8.333%] gap-10 selection:text-background-color selection:bg-font-color h-[70%] sm:h-[80%]"
      >
        <div
          className="flex flex-col gap-8 items-center"
        >
          <div
            className="block wide:text-[28px] wide:leading-[1.8] sm:text-center text-[30px] sm:text-[35px] md:text-[44px] text-left font-medium leading-[53px] md:leading-[68px] md:flex flex-col 2xl:gap-1"
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
              <a
                style={{
                  cursor: 'pointer'
                }}
                target="_blank"
                href={profileData.company_url}
                className="underline underline-offset-[16px] decoration-dotted decoration-white rounded-md pb-0 pt-1 px-1 bg-black text-white hover:text-black hover:bg-white transition-all duration-700"
              >
                {profileData.company}
              </a>. Based in {profileData.location}.
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
            className="text-[16px] font-normal text-center"
          >
            ◎︎ Last updated — {profileData.updated}
          </motion.span>
          <motion.a
            initial={{
              opacity: 0,
              translateY: 50
            }}
            animate={{
              opacity: 1,
              translateY: [50, 0]
            }}
            transition={{
              duration: 1,
              stiffness: 40,
              type: "spring",
            }}
            whileTap={{
              scale: 0.92
            }}
            target="_blank"
            href={profileData.resume}
            style={{
              cursor: 'pointer'
            }}
            aria-label={`This Link will take you to ${profileData.name}'s Resume`}
            className="font-semibold rounded-full pt-[10px] pb-[6px] px-[32px] text-[18px] select-none transition-[background] duration-[0.4s] border-2 border-white bg-black text-white hover:border-black hover:bg-white hover:text-black text-center w-fit"
          >
            Resume
          </motion.a>
        </div>
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
          style={{
            overflow: 'hidden'
          }}
          className="flex flex-row flex-wrap justify-center gap-x-5 gap-y-2"
        >
          {socialsData.map(social => ({...social, ...socials[social.key]})).map((social, index) =>
            <motion.a
              key={social.url}
              href={social.url}
              target="_blank"
              initial={{
                opacity: 0,
                translateY: 200
              }}
              animate={{
                opacity: 1,
                translateY: [200, 0],
                translateX: [(index - Math.floor(socialsData.length / 2)) * (200 / (socialsData.length - 1)) * 1.2, 0]
              }}
              transition={{
                duration: 1,
              }}
              whileTap={{
                scale: 0.80
              }}
              style={{
                cursor: 'pointer'
              }}
              aria-label={`This Link takes you to ${social.social} site.`}
              className="hover:bg-social-hover hover:shadow-2xl rounded-[16px] self-center p-2.5 transition-[background] duration-[0.4s]"
            >
              <social.comp size={28} />
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>     
  )
}