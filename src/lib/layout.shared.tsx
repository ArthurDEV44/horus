import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <span className="w-4 h-4 bg-[#22d3ee] rounded-sm shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          Horus
        </span>
      ),
      url: '/',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ],
  };
}
