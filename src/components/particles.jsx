import React from 'react';

export default function ModernBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-background-color">
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none"
        style={{ animation: 'orb1 25s linear infinite' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-secondary/10 rounded-full blur-[150px] pointer-events-none"
        style={{ animation: 'orb2 30s linear infinite' }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
    </div>
  );
}
