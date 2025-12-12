'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, GitMerge, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={24} />,
    title: 'Semantic Knowledge Base',
    subtitle: 'FULL DOCUMENTATION',
    description: 'Every agent ships with rigorous SKILL definitions, architectural REFERENCES, and context-aware headers.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Opus-Native Optimization',
    subtitle: 'MODEL TUNING',
    description: 'Prompts calibrated specifically for Claude 3.5 Opus reasoning windows to ensure zero-hallucination outputs.',
  },
  {
    icon: <GitMerge size={24} />,
    title: 'Atomic Workflows',
    subtitle: 'PROCESS PIPELINES',
    description: 'Deterministic, step-by-step execution protocols for refactoring, testing, and deployment cycles.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Features: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-tech-black border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-tech-accent text-xs font-mono tracking-widest uppercase mb-4"
          >
            System Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500"
          >
            Why deploy these agents?
          </motion.h2>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-tech-accent/20 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-2 bg-tech-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 group-hover:border-tech-accent/50 group-hover:text-tech-accent text-neutral-400 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="relative space-y-3">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider group-hover:text-tech-accent/70 transition-colors">
                  {feature.subtitle}
                </span>
                <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-accent/0 to-transparent group-hover:via-tech-accent/50 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
