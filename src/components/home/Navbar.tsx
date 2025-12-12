import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-tech-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-tech-accent/80 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          <span className="font-semibold tracking-tight text-sm text-white">Horus</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-neutral-400">
          <span className="hover:text-white cursor-pointer transition-colors">Documentation</span>
          <span className="hover:text-white cursor-pointer transition-colors">Agents</span>
          <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
