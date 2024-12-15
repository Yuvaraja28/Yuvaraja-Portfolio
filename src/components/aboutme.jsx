import { motion } from "motion/react";
import profileData from '../data/profileData';
import { MdArrowOutward } from "react-icons/md";

export default function AboutMe() {
  return (
    <div
      className="flex flex-col gap-6 md:gap-[28px] px-[20px] py-[40px] md:p-[70px] bg-font-color text-background-color md:mx-0 rounded-t-[25px] md:rounded-t-[45px] overflow-auto selection:bg-background-color selection:text-font-color"
    >
      <h2
        className="font-medium text-[34px] md:text-[46px] leading-[60px] px-2"
      >
        About Me
      </h2>
      <div
        className="flex flex-col gap-2 md:block items-center text-[20px] md:text-[22px] leading-[40px]"
      >
        <span
          className="float-left md:mr-8 mb-4 rounded-[28px] lg:rounded-[42px] h-[260px] w-[260px] min-w-fit lg:h-[320px] lg:w-[320px] overflow-auto select-none"
        >
          <img
            width={1024}
            height={1024}
            loading='lazy'
            alt={profileData.fullName}
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
        style={{
          cursor: 'pointer'
        }}
        aria-label={`This Link will take you to ${profileData.name}'s Resume`}
        className="flex flex-row items-center gap-2 font-semibold border-2 border-background-color rounded-2xl pt-[15px] pb-[12px] px-[24px] text-[17px] select-none transition-[background] duration-[0.4s] hover:bg-background-color hover:text-font-color w-fit"
      >
        See full Resume <MdArrowOutward size={22} />
      </motion.a>
    </div>
  )
}
