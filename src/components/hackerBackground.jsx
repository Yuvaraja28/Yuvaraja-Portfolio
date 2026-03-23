import React, { useEffect, useRef } from 'react';

export default function HackerBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const columns = Math.floor(width / 20);
    const drops = new Array(columns).fill(1);

    const charSet = "01";

    const draw = () => {
      // Create a fading effect
      ctx.fillStyle = 'rgba(0, 10, 18, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#ffaa00'; 
      ctx.font = '15px monospace';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#ffaa00';

      for (let i = 0; i < drops.length; i++) {
        const text = charSet.charAt(Math.floor(Math.random() * charSet.length));
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.shadowBlur = 0;
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor(width / 20);
      if (newColumns > drops.length) {
        for(let i = drops.length; i < newColumns; i++) drops[i] = 1;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[-1] opacity-30"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
