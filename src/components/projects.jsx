import React from "react";
import projectsData from '../data/projectsData';
import { MdArrowOutward } from "react-icons/md";

export default function Projects() {
  const PROJECT_MULTIPLIER = 6;
  const [projectsLimit, setProjectsLimit] = React.useState(PROJECT_MULTIPLIER);

  const activeProjects = React.useMemo(() =>
    Object.entries(projectsData).filter(([_, p]) => p.active !== false), []);

  return (
    <section id="projects" className="flex flex-col gap-10 px-6 md:px-12 py-8 sm:pb-18 sm:pt-26">
      <div className="section-grid"></div>
      <div data-animate="slide-left" className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Crafted <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent-primary to-transparent opacity-20"></div>
        </div>
        <p className="text-white/40 text-base md:text-lg max-w-2xl font-medium">
          A collection of digital products built with scale and performance in mind.
        </p>
      </div>

      <div data-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {activeProjects.slice(0, projectsLimit).map(([projectKey, project]) => (
          <div
            key={projectKey}
            onClick={() => window.location.hash = projectKey}
            className="hover-lift group relative cursor-pointer glass rounded-[24px] overflow-hidden border-white/5 hover:border-accent-primary/20 transition-colors duration-500 shadow-2xl flex flex-col h-full"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-white/5 min-h-[200px]">
              <img
                src={`${import.meta.env.PUBLIC_CDN_URL}/projects/${projectKey}/${projectKey}-1.png`}
                alt={project.name} loading="lazy" decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 no-tint"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-color/90 via-background-color/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4">
                <div className="p-2.5 rounded-xl glass border-white/5 text-white/50 group-hover:text-white group-hover:bg-accent-primary transition-all duration-300">
                  <MdArrowOutward size={18} />
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-extrabold text-white">{project.name}</h3>
                {project.title && (
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{project.title}</p>
                )}
              </div>
              <p className="text-white/50 text-xs md:text-sm line-clamp-2 leading-relaxed font-medium">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.technologies?.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 font-mono">{tech}</span>
                ))}
                {project.technologies?.length > 3 && (
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 font-mono">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProjects.length > projectsLimit && (
        <div className="flex justify-center">
          <button
            onClick={() => setProjectsLimit(prev => prev + PROJECT_MULTIPLIER)}
            className="hover-scale px-8 py-4 glass border-white/10 hover:border-accent-primary/30 rounded-2xl font-bold transition-colors duration-300 flex items-center gap-2 cursor-pointer"
          >
            Explore More Projects <span className="text-white/40">↓</span>
          </button>
        </div>
      )}
    </section>
  )
}
