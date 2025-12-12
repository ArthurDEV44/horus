import React from 'react';
import { Github, Twitter, Linkedin, Command, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-tech-black border-t border-white/5 pt-20 pb-10 overflow-hidden">

      {/* Decorative top center glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-tech-accent/40 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-16">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-5 flex flex-col items-start gap-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-to-br from-tech-accent to-blue-600 rounded-sm shadow-[0_0_12px_rgba(34,211,238,0.4)]"></div>
              <span className="font-semibold tracking-tight text-lg text-white">Horus</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light">
              The definitive suite of Opus-native autonomous agents.
              Engineering the future of software development with precision and intelligence.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon icon={<Twitter size={16} />} />
              <SocialIcon icon={<Github size={16} />} />
              <SocialIcon icon={<Linkedin size={16} />} />
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Section */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold text-white mb-6 uppercase tracking-widest text-opacity-80">Product</h4>
            <ul className="space-y-3.5 text-sm text-neutral-500">
              <LinkItem>Agent Suite</LinkItem>
              <LinkItem>Benchmarks</LinkItem>
              <LinkItem>Integrations</LinkItem>
              <LinkItem>Enterprise</LinkItem>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold text-white mb-6 uppercase tracking-widest text-opacity-80">Resources</h4>
            <ul className="space-y-3.5 text-sm text-neutral-500">
              <LinkItem>Documentation</LinkItem>
              <LinkItem>API Reference</LinkItem>
              <LinkItem>Community</LinkItem>
              <LinkItem>Status</LinkItem>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] font-mono font-semibold text-white mb-6 uppercase tracking-widest text-opacity-80">Company</h4>
            <ul className="space-y-3.5 text-sm text-neutral-500">
              <LinkItem>About</LinkItem>
              <LinkItem>Blog</LinkItem>
              <LinkItem>Careers</LinkItem>
              <LinkItem>Contact</LinkItem>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs text-neutral-600 font-light">
            © {new Date().getFullYear()} Horus. All rights reserved.
          </span>

          {/* StriveX Branding Badge */}
          <a href="#" className="group relative flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/50 border border-white/5 hover:border-tech-accent/30 hover:bg-white/[0.02] transition-all duration-300">
            <span className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase group-hover:text-neutral-400 transition-colors">
              Powered by
            </span>
            <div className="flex items-center gap-1.5">
              <Cpu size={14} className="text-tech-accent/70 group-hover:text-tech-accent transition-colors" />
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

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
  >
    {icon}
  </a>
);

const LinkItem = ({ children }: { children: React.ReactNode }) => (
  <li>
    <a href="#" className="hover:text-tech-accent hover:translate-x-1 transition-all duration-200 block">
      {children}
    </a>
  </li>
);

export default Footer;
