'use client';

import { motion, Variants } from 'framer-motion';
import { BookOpen, Zap, GitMerge, LucideIcon } from 'lucide-react';
import { useHydrated } from '@/hooks';

interface Feature {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: BookOpen,
    title: 'Base de Connaissances Sémantique',
    subtitle: 'DOCUMENTATION COMPLÈTE',
    description: 'Chaque agent est livré avec des définitions SKILL rigoureuses, des RÉFÉRENCES architecturales et des en-têtes contextuels. Mise à jour automatique pour rester en veille à chaque appel.',
  },
  {
    Icon: Zap,
    title: 'Serveur MCP Horus',
    subtitle: 'ACCÈS INSTANTANÉ',
    description: 'Installez le serveur MCP Horus et accédez à tous les agents directement depuis Claude Code. Plus besoin de télécharger, tout est disponible en une commande.',
  },
  {
    Icon: GitMerge,
    title: 'Workflows Atomiques',
    subtitle: 'PIPELINES DE PROCESSUS',
    description: 'Protocoles d\'exécution déterministes, étape par étape, pour les cycles de refactoring, de tests et de déploiement.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features = () => {
  const hydrated = useHydrated();

  return (
    <section className="relative py-32 px-6 bg-tech-black overflow-hidden">

      {/* 1. Effets de fond Nébuleuse / Poussière Cosmique */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Lueur cyan en haut à droite (subtile) */}
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-tech-accent/5 rounded-full blur-[120px]" />

        {/* Lueur du vide en bas à gauche */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* En-tête de Section */}
        <div className="flex flex-col items-center mb-20 text-center space-y-4">

          {/* Badge Style correspondant au Hero */}
          <motion.div
            initial={hydrated ? { opacity: 0, scale: 0.9 } : false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(34,211,238,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-tech-accent animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-tech-accent uppercase">
              Capacités Système
            </span>
          </motion.div>

          <motion.h2
            initial={hydrated ? { opacity: 0, y: 10 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Pourquoi déployer ces <span className="text-transparent bg-clip-text bg-linear-to-br from-white via-neutral-200 to-neutral-500">agents ?</span>
          </motion.h2>
        </div>

        {/* Grille de Features - Cartes Holographiques */}
        <motion.div
          variants={containerVariants}
          initial={hydrated ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/3 hover:border-tech-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Effet Scanline sur la carte (au survol) */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-tech-accent/3 to-transparent -translate-y-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

              {/* Icône - Flottante avec Lueur */}
              <div className="relative mb-8 inline-flex items-center justify-center">
                {/* Lueur derrière l'icône */}
                <div className="absolute inset-0 bg-tech-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />

                <div className="relative z-10 text-neutral-400 group-hover:text-tech-accent transition-colors duration-300 transform group-hover:-translate-y-1">
                  <feature.Icon size={28} />
                </div>
              </div>

              {/* Contenu Texte */}
              <div className="relative space-y-4">
                <span className="inline-block text-[10px] font-mono text-tech-accent/60 uppercase tracking-widest border-b border-transparent group-hover:border-tech-accent/30 transition-all pb-1">
                  {feature.subtitle}
                </span>

                <h3 className="text-xl font-semibold text-white group-hover:text-tech-accent/90 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
