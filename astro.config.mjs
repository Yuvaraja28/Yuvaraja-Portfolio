import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yuv.1he.dev',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [],
    server: {
      allowedHosts: [
        "19ae-223-178-81-251.ngrok-free.app"
      ]
    }
  }
});
