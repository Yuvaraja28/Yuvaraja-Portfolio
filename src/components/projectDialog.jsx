import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { SocialBubbleBG } from "./socials";
import { socials } from "../data/socialsData";
import projectsData from "../data/projectsData";
import { technologies } from "../data/techStackData";
import { MdClose, MdChevronLeft, MdChevronRight, MdOpenInNew } from "react-icons/md";

export default function ProjectDialog({ id }) {
  const project = projectsData[id];
  if (!id || !project) return null;

  const closeDialog = () => window.location.hash = '#projects';
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev < project.banner.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : project.banner.length - 1));
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeDialog();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeDialog}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-10 bg-black/90 backdrop-blur-md"
    >
      <motion.div
        layoutId={`project-popup-${id}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl h-[90vh] glass rounded-[24px] border-white/5 overflow-hidden flex flex-col lg:flex-row shadow-3xl"
      >
        {/* Close Button */}
        <button
          onClick={closeDialog}
          className="absolute top-4 right-4 z-50 p-2 rounded-full glass hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
        >
          <MdClose size={20} />
        </button>

        {/* Media Side */}
        <div className="w-full lg:w-[60%] bg-black/40 flex flex-col relative aspect-video lg:aspect-auto">
          <div className="flex-1 relative overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full p-4 lg:p-12"
              >
                {project.banner[currentImageIndex].includes("youtube") ? (
                  <iframe
                    src={project.banner[currentImageIndex]}
                    className="w-full h-full rounded-xl shadow-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share"
                  />
                ) : (
                  <img
                    src={project.banner[currentImageIndex]}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain rounded-xl shadow-2xl no-tint"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {project.banner.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-6 p-2 rounded-full glass hover:bg-accent-primary/20 text-white/50 hover:text-white transition-all cursor-pointer">
                  <MdChevronLeft size={28} />
                </button>
                <button onClick={nextImage} className="absolute right-6 p-2 rounded-full glass hover:bg-accent-primary/20 text-white/50 hover:text-white transition-all cursor-pointer">
                  <MdChevronRight size={28} />
                </button>
              </>
            )}
          </div>

          {project.banner.length > 1 && (
            <div className="pb-6 flex justify-center gap-2">
              {project.banner.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-accent-primary' : 'w-4 bg-white/10'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-[40%] p-6 lg:p-10 flex flex-col gap-4 overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Crafted Project</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">{project.name}</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <SocialBubbleBG
                  key={link.name}
                  social={{ url: link.url, ...socials[link.name] }}
                  size={18}
                />
              ))}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={"Live Preview of " + project.name}
                  className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-[11px] font-bold text-white/60 hover:text-white transition-all"
                >
                  Live Preview <MdOpenInNew size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Project Overview</h3>
            <p className="text-white/60 leading-relaxed text-sm lg:text-base font-medium">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Stack & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-3 py-2 glass rounded-xl border-white/5 group" title={technologies[tech]?.title}>
                  <img
                    src={technologies[tech]?.src}
                    alt={technologies[tech]?.title}
                    loading="lazy"
                    decoding="async"
                    className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all no-tint"
                  />
                  <span className="text-[11px] font-bold text-white/40 group-hover:text-white/80 transition-all">{technologies[tech]?.title}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={closeDialog}
            className="w-full py-3 glass rounded-xl text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:bg-white/5 transition-all cursor-pointer mt-4"
          >
            Back to Portfolio
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}