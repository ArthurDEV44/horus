'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Sparkles, Cpu } from 'lucide-react';
import Button from '../ui/Button';
import BackgroundGrid from './BackgroundGrid';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4 sm:px-6 overflow-hidden">

      {/* Ambient Background Effects */}
      <BackgroundGrid />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-tech-accent/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">

        {/* Badge / Announcement */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.05] transition-colors cursor-default"
        >
          <span className="flex h-2 w-2 rounded-full bg-tech-accent animate-pulse-slow shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
          <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
            Opus Engine v3.5 Online
          </span>
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all" />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-2 leading-[1.1]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-400">
              Engineering
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
              Intelligence.
            </span>
          </h1>
          {/* Subtle noise texture overlay on text - simulated via CSS mix-blend if needed, keeping it simple here */}
        </motion.div>

        {/* Description / Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-lg sm:text-xl text-neutral-400 leading-relaxed font-light"
        >
          Deploy a fleet of <span className="text-white font-medium">30 specialized Opus agents</span>.
          From clean architecture to pixel-perfect UIs, elevate your codebase with
          precision-engineered AI.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full justify-center"
        >
          <Button variant="primary" icon={<Terminal size={18} />} href="/docs">
            Initialize Agents
          </Button>

          <Button variant="secondary" icon={<Github size={18} />} href="https://github.com">
            View Source
          </Button>
        </motion.div>

        {/* Trust/Tech Stack indicators (Visual Proof) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-12 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex flex-col items-center gap-2 group">
             <Cpu className="text-neutral-500 group-hover:text-tech-accent transition-colors" size={20} />
             <span className="text-xs text-neutral-600 font-mono">OPUS NATIVE</span>
          </div>
          <div className="h-8 w-px bg-neutral-800" />
          <div className="flex flex-col items-center gap-2 group">
             <Sparkles className="text-neutral-500 group-hover:text-tech-accent transition-colors" size={20} />
             <span className="text-xs text-neutral-600 font-mono">ZERO LATENCY</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-tech-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
