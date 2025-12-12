'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-tech-black text-white px-4">
      <div className="text-6xl font-bold text-red-500">Erreur</div>
      <h2 className="text-xl text-neutral-300 text-center">
        Une erreur est survenue
      </h2>
      {error.digest && (
        <p className="text-sm text-neutral-500 font-mono">
          Code: {error.digest}
        </p>
      )}
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-tech-accent text-black font-medium rounded-md hover:bg-tech-accent/90 transition-colors"
      >
        Réessayer
      </button>
    </div>
  );
}
