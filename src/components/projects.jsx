import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import projectsData from '../data/projectsData';
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Projects() {
  const PROJECT_MULTIPLIER = 3
  const navigation = useNavigate()
  const [projectsLimit, setProjectsLimit] = React.useState(PROJECT_MULTIPLIER)

  return (
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
        className="flex flex-row flex-wrap justify-between items-center border-t-4 border-font-color"
      >
        <span
          className="text-[42px] sm:text-[54px] font-medium"
        >
          Projects
        </span>
        <span
          className="flex flex-row items-center gap"
        >
          My latest projects <IoIosArrowRoundDown size={22} />
        </span>
      </motion.div>
      <div
        className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5"
      >
        {Object.entries(projectsData)
          .slice(0, projectsLimit)
          .filter(project => 
            (project[1]?.active == undefined) ? true : project[1].active
          )
          .map(([projectKey, project]) => 
          <motion.div
            initial={{
              translateX: 200,
              opacity: 0
            }}
            animate={{
              translateX: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              type: 'spring'
            }}
            whileHover={{
              scale: 0.97
            }}
            style={{
              cursor: 'pointer'
            }}
            key={projectKey}
            layoutId={`project-popup-${projectKey}`}
            onClick={() => navigation(`/${projectKey}`)}
            aria-label={`This Link takes you to ${project.name} project site.`}
            className="flex flex-col items-center gap-[28px] select-none group bg-font-color/5 border border-white/5 drop-shadow-md rounded-3xl p-4 sm:p-6"
          >
            <motion.img
              width={1920}
              height={1080}
              src={project.showcase}
              alt={project.name}
              loading='lazy'
              layoutId={`project-image-popup-${projectKey}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
            <div
              className="flex flex-col gap-[4px] mx-2"
            >
              <span
                className="flex flex-row justify-between gap-2 items-center leading-[30px] text-[22px] sm:text-[25px]"
              >
                {project.name} {project?.title && '-'} {project?.title}
                <MdArrowOutward size={26} className="opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              </span>
              <div
                className="text-[16.5px] sm:text-[18px] font-light opacity-90"
              >
                {project.description}
              </div>
              {/* <div
                className="text-[18px] font-light sm:text-[20px] opacity-90"
              >
                <b className='font-medium'>◎︎ Technologies: </b>{project.technologies.join(', ')}
              </div> */}
            </div>
          </motion.div>
        )}
      </div>
      {(Object.values(projectsData).filter(p => !p.active).length > projectsLimit) &&
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
            style={{
              cursor: 'pointer'
            }}
            onClick={() => setProjectsLimit((i) => i+PROJECT_MULTIPLIER)}
            className={`px-6 py-3 text-background-color bg-font-color font-semibold border-[3px] rounded-2xl selection:text-background-color selection:bg-font-color`}
          >
            Show more projects
          </motion.button>
        </div>
      }
    </div>
  )
}