import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import ProjectDialog from './projectDialog.jsx';

export default function ProjectDialogWrapper() {
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setProjectId(hash || null);
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <AnimatePresence>
      {projectId && <ProjectDialog id={projectId} />}
    </AnimatePresence>
  );
}
