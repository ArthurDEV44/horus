import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  // reactCompiler disabled - causes hydration mismatches with Radix UI (fumadocs-ui)
  // See: https://github.com/radix-ui/primitives/issues/2977
};

export default withMDX(config);
