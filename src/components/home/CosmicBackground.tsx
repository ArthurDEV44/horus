'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Positions des étoiles pré-générées statiquement pour éviter les erreurs d'hydratation
const stars: Array<{ top: string; left: string; size: number; opacity: number; delay: number; duration: number }> = [
  { top: '12%', left: '8%', size: 2, opacity: 0.35, delay: 0.2, duration: 3.5 },
  { top: '5%', left: '25%', size: 1, opacity: 0.2, delay: 1.8, duration: 4.2 },
  { top: '18%', left: '42%', size: 2, opacity: 0.45, delay: 0.5, duration: 2.8 },
  { top: '8%', left: '67%', size: 1, opacity: 0.3, delay: 2.5, duration: 3.9 },
  { top: '22%', left: '85%', size: 2, opacity: 0.25, delay: 1.2, duration: 4.5 },
  { top: '15%', left: '92%', size: 1, opacity: 0.4, delay: 3.1, duration: 2.5 },
  { top: '32%', left: '5%', size: 1, opacity: 0.55, delay: 0.8, duration: 3.2 },
  { top: '28%', left: '18%', size: 2, opacity: 0.15, delay: 4.2, duration: 4.8 },
  { top: '35%', left: '38%', size: 1, opacity: 0.35, delay: 1.5, duration: 3.1 },
  { top: '42%', left: '72%', size: 2, opacity: 0.28, delay: 2.8, duration: 4.0 },
  { top: '38%', left: '95%', size: 1, opacity: 0.42, delay: 0.3, duration: 2.9 },
  { top: '55%', left: '3%', size: 2, opacity: 0.22, delay: 3.5, duration: 3.7 },
  { top: '48%', left: '15%', size: 1, opacity: 0.38, delay: 1.0, duration: 4.3 },
  { top: '62%', left: '28%', size: 2, opacity: 0.5, delay: 2.2, duration: 2.6 },
  { top: '58%', left: '82%', size: 1, opacity: 0.18, delay: 4.0, duration: 3.4 },
  { top: '52%', left: '90%', size: 2, opacity: 0.32, delay: 0.7, duration: 4.1 },
  { top: '72%', left: '7%', size: 1, opacity: 0.48, delay: 2.0, duration: 3.0 },
  { top: '68%', left: '22%', size: 2, opacity: 0.25, delay: 3.8, duration: 4.6 },
  { top: '75%', left: '55%', size: 1, opacity: 0.42, delay: 1.3, duration: 2.7 },
  { top: '78%', left: '78%', size: 2, opacity: 0.3, delay: 0.1, duration: 3.8 },
  { top: '65%', left: '88%', size: 1, opacity: 0.55, delay: 2.6, duration: 4.4 },
  { top: '85%', left: '12%', size: 2, opacity: 0.2, delay: 4.5, duration: 3.3 },
  { top: '88%', left: '35%', size: 1, opacity: 0.38, delay: 1.7, duration: 2.4 },
  { top: '92%', left: '58%', size: 2, opacity: 0.45, delay: 0.9, duration: 4.7 },
  { top: '82%', left: '72%', size: 1, opacity: 0.28, delay: 3.2, duration: 3.6 },
  { top: '95%', left: '92%', size: 2, opacity: 0.52, delay: 2.4, duration: 2.3 },
  { top: '3%', left: '48%', size: 1, opacity: 0.18, delay: 4.8, duration: 4.9 },
  { top: '25%', left: '62%', size: 2, opacity: 0.4, delay: 0.4, duration: 3.0 },
  { top: '45%', left: '48%', size: 1, opacity: 0.33, delay: 1.9, duration: 4.2 },
  { top: '58%', left: '42%', size: 2, opacity: 0.22, delay: 3.6, duration: 2.8 },
  { top: '70%', left: '38%', size: 1, opacity: 0.48, delay: 0.6, duration: 3.5 },
  { top: '88%', left: '8%', size: 2, opacity: 0.35, delay: 2.1, duration: 4.0 },
  { top: '10%', left: '78%', size: 1, opacity: 0.28, delay: 4.3, duration: 3.2 },
  { top: '40%', left: '8%', size: 2, opacity: 0.42, delay: 1.1, duration: 2.6 },
  { top: '60%', left: '65%', size: 1, opacity: 0.15, delay: 3.0, duration: 4.5 },
  { top: '30%', left: '75%', size: 2, opacity: 0.5, delay: 0.0, duration: 3.9 },
  { top: '50%', left: '25%', size: 1, opacity: 0.38, delay: 2.7, duration: 2.2 },
  { top: '80%', left: '52%', size: 2, opacity: 0.25, delay: 4.1, duration: 4.3 },
  { top: '15%', left: '58%', size: 1, opacity: 0.45, delay: 1.4, duration: 3.1 },
  { top: '98%', left: '42%', size: 2, opacity: 0.32, delay: 3.4, duration: 2.9 },
];

const CosmicBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animations conditionnelles basées sur les préférences utilisateur
  const rotateAnimation = shouldReduceMotion ? {} : { rotate: 360 };
  const rotateReverseAnimation = shouldReduceMotion ? {} : { rotate: -360 };
  const infiniteTransition = (duration: number) =>
    shouldReduceMotion ? {} : { duration, repeat: Infinity, ease: 'linear' as const };

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-tech-black pointer-events-none"
      aria-hidden="true"
    >
      {/* 1. Couche d'étoiles */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : { opacity: [star.opacity, star.opacity * 2, star.opacity] }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay,
                    ease: 'easeInOut',
                  }
            }
          />
        ))}
      </div>

      {/* 2. La Singularité (Vortex Central) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] flex items-center justify-center opacity-60">
        {/* Disque d'accrétion externe (Poussière diffuse) */}
        <motion.div
          animate={rotateAnimation}
          transition={infiniteTransition(60)}
          className="absolute inset-0 rounded-full mix-blend-screen"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, rgba(34, 211, 238, 0.05) 120deg, transparent 360deg)',
            filter: 'blur(60px)',
          }}
        />

        {/* Disque d'accrétion intermédiaire (La Lueur) */}
        <motion.div
          animate={rotateReverseAnimation}
          transition={infiniteTransition(45)}
          className="absolute w-[80%] h-[80%] rounded-full mix-blend-screen opacity-50"
          style={{
            background:
              'conic-gradient(from 180deg, transparent 0deg, rgba(34, 211, 238, 0.2) 160deg, transparent 360deg)',
            filter: 'blur(30px)',
          }}
        />

        {/* Horizon des événements interne (Bord net) */}
        <motion.div
          animate={rotateAnimation}
          transition={infiniteTransition(30)}
          className="absolute w-[40%] h-[40%] rounded-full"
          style={{
            background:
              'conic-gradient(from 90deg, transparent 0%, rgba(34, 211, 238, 0.6) 50%, #ffffff 95%, transparent 100%)',
            filter: 'blur(12px)',
          }}
        />

        {/* Bord interne en contre-rotation pour la turbulence */}
        <motion.div
          animate={rotateReverseAnimation}
          transition={infiniteTransition(35)}
          className="absolute w-[42%] h-[42%] rounded-full opacity-70"
          style={{
            background:
              'conic-gradient(from 270deg, transparent 0%, rgba(34, 211, 238, 0.4) 30%, transparent 100%)',
            filter: 'blur(8px)',
          }}
        />

        {/* Le Vide (Trou noir) */}
        <div className="absolute w-[30%] h-[30%] bg-black rounded-full shadow-[0_0_100px_rgba(0,0,0,1)] z-10" />

        {/* Trainee de flare / Jet */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px bg-linear-to-r from-transparent via-tech-accent/20 to-transparent blur-sm rotate-45" />
      </div>
    </div>
  );
};

export default CosmicBackground;
