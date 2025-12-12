import type { Metadata } from 'next';
import { Hero, Features, Footer, Navbar } from '@/components/home';

export const metadata: Metadata = {
  title: 'Horus - Claude Code Agents Library',
  description:
    'Une collection de 30 agents optimisés pour Claude Code avec Opus. Architecture, SEO, Design Responsive et Expertise technique.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
