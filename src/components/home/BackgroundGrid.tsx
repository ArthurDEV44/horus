import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Base Noise Texture - subtle static */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        style={{
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
        }}
      />

      {/* Accent Beam - "Ice Blue" vertical streak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-screen bg-gradient-to-b from-transparent via-tech-accent/20 to-transparent opacity-20" />
    </div>
  );
};

export default BackgroundGrid;
