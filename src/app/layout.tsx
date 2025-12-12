import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Horus - Claude Code Agents Library',
    template: '%s | Horus',
  },
  description:
    'Collection of optimized agents for Claude Code - Architecture, SEO, Tailwind, and more.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://horus.strivex.fr'
  ),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Horus',
    title: 'Horus - Claude Code Agents Library',
    description:
      'Collection of optimized agents for Claude Code - Architecture, SEO, Tailwind, and more.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Horus - Claude Code Agents Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horus - Claude Code Agents Library',
    description:
      'Collection of optimized agents for Claude Code - Architecture, SEO, Tailwind, and more.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
