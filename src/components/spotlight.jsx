import React from 'react';
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { spotlightData } from "../data/spotlightData.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Spotlight() {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev + 1) % spotlightData.length);
  };

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + spotlightData.length) % spotlightData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevStep();
      if (e.key === "ArrowRight") nextStep();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [windowWidth, setWindowWidth] = React.useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Performance: Memoize event mapping logic
  const visibleEvents = useMemo(() => {
    return spotlightData.map((event, i) => {
      let position = i - index;
      const total = spotlightData.length;
      if (position < -1) position += total;
      if (position > 1) position -= total;
      return { event, i, position, isVisible: position >= -1 && position <= 1 };
    });
  }, [index]);

  return (
    <section id='spotlight' className="flex flex-col gap-6 overflow-hidden items-center py-8 sm:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Professional <span className="text-gradient">Spotlight</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-primary to-transparent opacity-20 hidden md:block"></div>
          </div>
          <p className="text-white/40 text-base md:text-lg max-w-2xl font-medium text-start">
            Highlights from awards, industry work, and technical competitions.
          </p>
        </motion.div>

        <div className="flex gap-3">
          <button
            onClick={prevStep}
            className="p-3 rounded-full glass border-white/5 hover:border-white/20 text-white/50 hover:text-white transition-all cursor-pointer active:scale-90"
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            onClick={nextStep}
            className="p-3 rounded-full glass border-white/5 hover:border-white/20 text-white/50 hover:text-white transition-all cursor-pointer active:scale-90"
          >
            <MdChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative w-full h-[24vh] sm:h-[50vh] flex items-center justify-center select-none">
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          <AnimatePresence initial={false}>
            {visibleEvents.map(({ event, i, position, isVisible }) => {
              if (!isVisible) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: position === 0 ? 1 : 0.4,
                    scale: position === 0 ? 1 : 0.85,
                    x: position * (windowWidth < 768 ? 220 : 380),
                    zIndex: position === 0 ? 10 : 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1,
                    restDelta: 0.001
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  whileDrag={{ cursor: "grabbing" }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipeThreshold = 50;
                    if (offset.x < -swipeThreshold) {
                      nextStep();
                    } else if (offset.x > swipeThreshold) {
                      prevStep();
                    }
                  }}
                  onClick={() => position !== 0 && setIndex(i)}
                  className={`absolute w-[380px] sm:w-[580px] aspect-video sm:aspect-[16/11] rounded-[32px] overflow-hidden glass border-white/5 shadow-2xl cursor-pointer isolate will-change-transform transform-gpu`}
                  style={{ translateZ: 0 }}
                >
                  <motion.div
                    animate={{
                      filter: position === 0 ? "blur(0px)" : "blur(4px)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-[32px] no-tint"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-500 rounded-[32px] ${position === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Description for the active card */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl px-6 text-center flex flex-col gap-1"
      >
        <h3 className="text-xl md:text-2xl font-black text-white">
          {spotlightData[index].title}
        </h3>
        <p className="text-sm sm:text-[16px] text-white/50 font-medium leading-relaxed">
          {spotlightData[index].description}
        </p>
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex gap-2">
        {spotlightData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-accent-primary' : 'w-2 bg-white/10'}`}
          />
        ))}
      </div>
    </section>
  );
}
