import './index.css'
import Portfolio from './pages/portfolio';
import { AnimatePresence } from 'motion/react';
import { Route, Routes } from 'react-router-dom';
import { PhingerCursor } from '@cursorify/cursors';
import { CursorifyProvider } from '@cursorify/react';

function App() {
  return (
    <CursorifyProvider
      delay={5}
      breakpoint={776}
      cursor={<PhingerCursor />}
      visibleDefaultCursor={false}
    >
      <AnimatePresence>
        <Routes>
          <Route path={"/"} element={<Portfolio />} />
          <Route path={"/:id"} element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </CursorifyProvider>
  );
}

export default App;