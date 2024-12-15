import React from "react";
import { motion } from "motion/react";
import { TechBubble } from "./techStack";
import { SocialBubble } from "./socials";
import { socials } from "../data/socialsData";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projectsData";
import { technologies } from "../data/techStackData";

export default function ProjectDialog({ id }) {
  const project = projectsData[id];
  
  if (!id || !project) return null;
  
  const navigation = useNavigate()
  const projectDialogRef = React.useRef(null);
  
  function closeProjectDialog(e) {
    if (projectDialogRef.current == null) return;
    if (e.target == projectDialogRef.current) {
      navigation('/')
    }
  }

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      onClick={closeProjectDialog}
      ref={projectDialogRef}
      className="flex flex-col items-center px-3 py-12 z-[999] fixed top-0 bg-[#000000cc] h-[100vh] w-full"
    >
      <motion.div
        key={`project-popup-${id}`}
        layoutId={`project-popup-${id}`}
        className="flex flex-col items-center bg-[#101011] border border-white/5 rounded-[20px] drop-shadow-xl overflow-auto md:max-w-[580px]"
      >
        <motion.img
          width={1920}
          height={1080}
          loading='lazy'
          src={project.banner}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          layoutId={`project-image-popup-${id}`}
        />
        <motion.div
          animate
          className="flex flex-col gap-2 px-6 pt-4 pb-5"
        >
          <div
            className="flex flex-row items-center justify-between gap-2"
          >
            <span
              className="text-[26px] leading-8"
            >
              {project.name}
            </span>
            <div
              className="flex flex-row items-center justify-center gap-1"
            >
              {project.links.map(link => 
                <SocialBubble
                  key={link.name}
                  social={{ url: link.url, ...socials[link.name] }}
                  color="white"
                  size={21}
                />
              )}
            </div>
          </div>
          <div
            className="text-[17px] font-light opacity-90"
          >
            {project.description}
          </div>
          <div
            className="flex flex-col gap-1.5 mt-1"
          >
            <span
              className="text-lg"
            >
              Technologies used:
            </span>
            <div
              className="flex flex-row flex-wrap gap-2.5"
            >
              {project.technologies.map(tech => 
                <TechBubble
                  key={tech}
                  tech={technologies[tech]}
                  hideName={true}
                  size={45}
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}