// next.config.mjs

// 1. Import the necessary modules from Node.js
import path from 'path';
import { fileURLToPath } from 'url';

// 2. Get the directory name using the ESM-compatible method
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 3. Now __dirname is defined and we can use it here
    outputFileTracingRoot: __dirname,
  },
};

export default nextConfig;