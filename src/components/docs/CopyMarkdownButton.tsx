'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyMarkdownButtonProps {
  content: string;
  filename: string;
}

export function CopyMarkdownButton({ content, filename }: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground border border-fd-border"
      title={`Copier pour .claude/agents/${filename}.md`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          <span>Copié !</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>Copier l'agent</span>
        </>
      )}
    </button>
  );
}
