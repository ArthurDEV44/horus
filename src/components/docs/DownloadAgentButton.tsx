'use client';

import { useTransition } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface DownloadAgentButtonProps {
  category: string;
  agentSlug: string;
}

export function DownloadAgentButton({ category, agentSlug }: DownloadAgentButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDownload = () => {
    startTransition(async () => {
      try {
        const response = await fetch(
          `/api/agent-download?category=${encodeURIComponent(category)}&agent=${encodeURIComponent(agentSlug)}`
        );

        if (!response.ok) {
          throw new Error('Download failed');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${agentSlug}.zip`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } catch {
        // Silently fail - error handling could be improved with toast notifications
      }
    });
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isPending}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground border border-fd-border disabled:opacity-50 disabled:cursor-not-allowed"
      title={`Télécharger ${agentSlug} (.zip)`}
    >
      {isPending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Téléchargement...</span>
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          <span>Télécharger</span>
        </>
      )}
    </button>
  );
}
