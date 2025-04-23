import React from "react";
import { motion } from "motion/react";
import { TechBubble } from "./techStack";
import { SocialBubbleBG } from "./socials";
import { socials } from "../data/socialsData";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projectsData";
import { technologies } from "../data/techStackData";

export default function ProjectDialog({ id }) {
  const project = projectsData[id];
  
  if (!id || !project) return null;
  
  const navigation = useNavigate();
  const projectDialogRef = React.useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  function closeProjectDialog(e) {
    if (projectDialogRef.current == null) return;
    if (e.target === projectDialogRef.current) {
      navigation('/');
    }
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : project.banner.length - 1));
    } else if (e.key === "ArrowRight") {
      setCurrentImageIndex((prevIndex) => (prevIndex < project.banner.length - 1 ? prevIndex + 1 : 0));
    }
  }

  function handleMouseDown(e) {
    projectDialogRef.current.startX = e.clientX;
  }
  
  function handleMouseUp(e) {
    const endX = e.clientX;
    const diffX = projectDialogRef.current.startX - endX;
  
    if (diffX > 50) {
      // Drag left
      setCurrentImageIndex((prevIndex) => (prevIndex < project.banner.length - 1 ? prevIndex + 1 : 0));
    } else if (diffX < -50) {
      // Drag right
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : project.banner.length - 1));
    }
  }
  
  function handleSwipeStart(e) {
    projectDialogRef.current.startX = e.touches[0].clientX;
  }

  function handleSwipeEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diffX = projectDialogRef.current.startX - endX;

    if (diffX > 50) {
      // Swipe left
      setCurrentImageIndex((prevIndex) => (prevIndex < project.banner.length - 1 ? prevIndex + 1 : 0));
    } else if (diffX < -50) {
      // Swipe right
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : project.banner.length - 1));
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      onClick={closeProjectDialog}
      ref={projectDialogRef}
      className="flex flex-col items-center justify-center px-3 pb-2 z-[999] fixed top-0 bg-[#000000cc] h-[100vh] w-full select-none"
    >
      <motion.div
        key={`project-popup-${id}`}
        layoutId={`project-popup-${id}`}
        className="flex flex-col items-center bg-[#101011] border border-white/5 rounded-[20px] drop-shadow-xl overflow-auto md:max-w-[580px]"
      >
        <div
          className="flex flex-row w-full items-center relative"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {project.banner.map((banner, banner_idx) =>
            banner.includes("https://www.youtube") ? (
              <iframe
                src={banner}
                key={banner_idx}
                frameBorder="0"
                className="w-full h-72 lg:h-96"
                style={{
                  display: banner_idx === currentImageIndex ? "block" : "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share"
              />
            ) : (
              <div
                key={banner_idx}
                style={{
                  backgroundImage: `url(${banner})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "360px",
                  cursor: 'pointer',
                  display: banner_idx === currentImageIndex ? "block" : "none",
                }}
                className="select-none"
                onTouchStart={handleSwipeStart}
                onTouchEnd={handleSwipeEnd}
              ></div>
            )
          )}
        </div>
        {project.banner.length > 1 && (
          <div className="flex flex-row gap-3 mt-4">
            {Array.from({ length: project.banner.length }).map((_, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 border border-white rounded-full"
                onClick={() => setCurrentImageIndex(idx)}
                style={{
                  cursor: "pointer",
                  background: idx === currentImageIndex ? "white" : "transparent",
                }}
              ></span>
            ))}
          </div>
        )}
        <motion.div animate className="flex flex-col gap-2 px-6 pt-4 pb-5">
          <div className="flex flex-row items-center justify-between gap-2">
            <span className="text-[26px] leading-8">{project.name}</span>
            <div className="flex flex-row items-center justify-center gap-1.5">
              {project.links.map((link) => (
                <SocialBubbleBG
                  key={link.name}
                  social={{ url: link.url, ...socials[link.name] }}
                  size={21}
                />
              ))}
            </div>
          </div>
          <div className="text-[17px] font-light opacity-90">
            {project.description}
          </div>
          <div className="flex flex-col gap-1.5 mt-1">
            <span className="text-lg">Technologies used:</span>
            <div className="flex flex-row flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <TechBubble
                  key={tech}
                  tech={technologies[tech]}
                  hideName={true}
                  size={45}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}