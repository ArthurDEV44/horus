'use client';

import { useState, useTransition } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyMarkdownButtonProps {
  content: string;
  filename: string;
}

export function CopyMarkdownButton({ content, filename }: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleCopy = () => {
    startTransition(async () => {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        // Auto-reset after 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setCopied(false);
      } catch {
        // Silently fail - clipboard API may not be available
      }
    });
  };

  const showCopied = copied || isPending;

  return (
    <button
      onClick={handleCopy}
      disabled={isPending}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground border border-fd-border disabled:opacity-70"
      title={`Copier pour .claude/agents/${filename}.md`}
    >
      {showCopied ? (
        <>
          <Check className="h-4 w-4" />
          <span>Copié !</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>Copier l&apos;agent</span>
        </>
      )}
    </button>
  );
}
