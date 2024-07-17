import './index.css'
import Portfolio from './pages/portfolio';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;