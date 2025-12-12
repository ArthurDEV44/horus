import React from 'react';
import Link from 'next/link';
import HorusLogo from '../ui/HorusLogo';

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-tech-black/60 backdrop-blur-md"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Horus - Accueil">
          <HorusLogo size="sm" />
        </Link>
        <div className="hidden md:flex gap-6 text-sm text-neutral-400">
          <Link href="/docs" className="hover:text-white transition-colors">
            Documentation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
