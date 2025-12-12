import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-tech-black text-white">
      <h1 className="text-6xl font-bold text-tech-accent mb-4">404</h1>
      <h2 className="text-2xl mb-8">Page introuvable</h2>
      <p className="text-neutral-400 mb-8 text-center max-w-md">
        La page que vous recherchez n&apos;existe pas ou a ete deplacee.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-tech-accent text-black rounded-md font-medium hover:bg-tech-accent/90 transition-colors"
      >
        Retour a l&apos;accueil
      </Link>
    </div>
  );
}
