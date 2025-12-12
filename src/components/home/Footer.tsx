import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import HorusLogo from '../ui/HorusLogo';

// Logo X (anciennement Twitter)
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-tech-black border-t border-white/5 pt-20 pb-10 overflow-hidden">

      {/* Lueur décorative en haut au centre */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-linear-to-r from-transparent via-tech-accent/40 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 mb-16">

          {/* Logo et Marque */}
          <HorusLogo size="md" />

          {/* Description en français */}
          <p className="text-neutral-500 text-sm leading-relaxed max-w-lg font-light">
            La suite définitive d&apos;agents autonomes optimisés pour Opus.
            Façonnez l&apos;avenir du développement logiciel avec précision et intelligence.
          </p>

          {/* Reseaux sociaux */}
          <nav className="flex gap-3 pt-2" aria-label="Reseaux sociaux">
            <SocialIcon icon={<XIcon />} href="https://x.com/arthurstrivex" label="Suivre sur X (Twitter)" />
            <SocialIcon icon={<Github size={16} aria-hidden="true" />} href="https://github.com/ArthurDEV44" label="Voir le profil GitHub" />
            <SocialIcon icon={<Linkedin size={16} aria-hidden="true" />} href="https://www.linkedin.com/in/arthur-jean-strivex" label="Voir le profil LinkedIn" />
          </nav>
        </div>

        {/* Barre inférieure */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs text-neutral-600 font-light">
            © {new Date().getFullYear()} Horus. Tous droits réservés.
          </span>

          {/* Badge StriveX */}
          <a href="https://strivex.fr" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/50 border border-white/5 hover:border-tech-accent/30 hover:bg-white/2 transition-all duration-300">
            <span className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase group-hover:text-neutral-400 transition-colors">
              Propulsé par
            </span>
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/strivex-logo-arrondi.png"
                alt="StriveX"
                width={18}
                height={18}
                className="rounded-full"
              />
              <span className="text-sm font-bold text-white tracking-wide group-hover:text-tech-accent transition-colors">
                StriveX
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
  >
    {icon}
  </a>
);

export default Footer;
