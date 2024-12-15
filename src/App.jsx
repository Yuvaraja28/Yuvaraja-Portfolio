import './index.css'
import Portfolio from './pages/portfolio';
import { AnimatePresence } from 'motion/react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path={"/"} element={<Portfolio />} />
        <Route path={"/:id"} element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;