/**
 * Global type declarations
 * Ambient types available throughout the application
 */

// Extend Window interface if needed
declare global {
  // Environment variables type safety
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_SITE_URL?: string;
    }
  }
}

// Make this file a module
export {};
