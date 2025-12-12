'use client';

import { motion } from 'framer-motion';
import { Terminal, Github, Bot, Plug, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import CosmicBackground from './CosmicBackground';
import { useHydrated } from '@/hooks';

const Hero = () => {
  const hydrated = useHydrated();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4 sm:px-6 overflow-hidden bg-tech-black">

      {/* Vortex Cosmique en arrière-plan */}
      <CosmicBackground />

      {/* Conteneur Principal - Flou renforcé pour la lisibilité */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">

        {/* Badge / Annonce - Thème Horus */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: -20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/5 hover:border-tech-accent/30 transition-all cursor-default overflow-hidden"
        >
          {/* Effet de brillance sur le badge */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent" />

          <span className="flex h-1.5 w-1.5 rounded-full bg-tech-accent animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]"></span>
          <span className="text-[11px] font-semibold text-neutral-300 tracking-[0.2em] uppercase">
            Protocole Horus v1.0 Actif
          </span>
        </motion.div>

        {/* Titre Principal - Massif, Cinématique, Contraste Élevé */}
        <motion.div
          initial={hydrated ? { opacity: 0, scale: 0.9 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-2 leading-[1.05] mix-blend-lighten">
            <span className="block text-transparent bg-clip-text bg-linear-to-b from-white via-white to-neutral-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              L&apos;IA c&apos;est bien,
            </span>
            <span className="block text-transparent bg-clip-text bg-linear-to-b from-neutral-200 via-neutral-400 to-neutral-700">
              orchestrée c&apos;est mieux.
            </span>
          </h1>
        </motion.div>

        {/* Description - Métaphores adaptées à Horus */}
        <motion.p
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl text-lg sm:text-xl text-neutral-400 leading-relaxed font-light tracking-wide"
        >
          Transcendez les limites du code conventionnel. Déployez{' '}
          <span className="text-white font-medium">29 agents Opus autonomes</span>{' '}
          et entrez dans une nouvelle dimension de l&apos;ingénierie logicielle.
        </motion.p>

        {/* Boutons d'Appel à l'Action */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 pt-6 w-full justify-center"
        >
          <Button variant="primary" icon={<Terminal size={18} />} href="/docs">
            Activer les Agents
          </Button>

          <Button variant="secondary" icon={<Github size={18} />} href="https://github.com">
            Code Source
          </Button>
        </motion.div>

        {/* Indicateurs Tech (Orbite de Données) */}
        <motion.div
          initial={hydrated ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-16 flex items-center justify-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700"
        >
          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-tech-accent/10 transition-colors ring-1 ring-white/10 group-hover:ring-tech-accent/50">
              <Bot className="text-neutral-400 group-hover:text-tech-accent transition-colors" size={20} />
            </div>
            <span className="text-[10px] text-neutral-500 tracking-widest font-mono uppercase group-hover:text-white transition-colors">29 Agents</span>
          </div>

          <div className="h-12 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-tech-accent/10 transition-colors ring-1 ring-white/10 group-hover:ring-tech-accent/50">
              <Plug className="text-neutral-400 group-hover:text-tech-accent transition-colors" size={20} />
            </div>
            <span className="text-[10px] text-neutral-500 tracking-widest font-mono uppercase group-hover:text-white transition-colors">MCP Natif</span>
          </div>

          <div className="h-12 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-tech-accent/10 transition-colors ring-1 ring-white/10 group-hover:ring-tech-accent/50">
              <RefreshCw className="text-neutral-400 group-hover:text-tech-accent transition-colors" size={20} />
            </div>
            <span className="text-[10px] text-neutral-500 tracking-widest font-mono uppercase group-hover:text-white transition-colors">Auto-Update</span>
          </div>
        </motion.div>
      </div>

      {/* Dégradé décoratif en bas pour une fusion harmonieuse avec la section suivante */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-tech-black via-tech-black/80 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
