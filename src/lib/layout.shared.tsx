import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-semibold">
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
      {
        text: 'Architecture',
        url: '/docs/architecture',
      },
      {
        text: 'SEO',
        url: '/docs/seo',
      },
      {
        text: 'Tailwind',
        url: '/docs/tailwind-responsive',
      },
      {
        text: 'Experts',
        url: '/docs/experts',
      },
    ],
  };
}
