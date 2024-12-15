import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import AboutMe from '../components/aboutme.jsx';
import Landing from '../components/landing.jsx';
import Projects from '../components/projects.jsx';
import TechStack from '../components/techStack.jsx';
import { PhingerCursor } from '@cursorify/cursors';
import { CursorifyProvider } from '@cursorify/react';
import Experiences from '../components/experiences.jsx';
import { ReactLenis } from '@studio-freight/react-lenis';
import ProjectDialog from '../components/projectDialog.jsx'
import { useMotionValueEvent, useScroll } from "motion/react";

function Portfolio() {
  const [showFooter, setShowFooter] = React.useState(false)
  
  const { id } = useParams()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if ((latest > 1000) && (!showFooter)) {
      setShowFooter(() => true)
    } else if ((latest < 1000) && (showFooter)) {
      setShowFooter(() => false)
    }
  })
  
  return (
    <ReactLenis
      root
      options={{
        duration: 3,
        damping: 1.5,
        scrollSensitivity: 100
      }}
    >
      <CursorifyProvider
        delay={5}
        breakpoint={776}
        cursor={<PhingerCursor />}
        visibleDefaultCursor={false}
      >
        <Landing />
        <div className="z-[99] relative bg-black rounded-b-[20px]">
          <AboutMe />
          <div
            className="flex flex-col gap-16 px-[20px] py-[50px] 2xl:px-[50px] selection:text-background-color selection:bg-font-color"
          >
            <Experiences />
            <Projects />
            <TechStack />
          </div>
        </div>
        {(showFooter) && <Footer />}
        {(id != null) && <ProjectDialog id={id} />}
      </CursorifyProvider>
    </ReactLenis>
  )
}

export default Portfolio;