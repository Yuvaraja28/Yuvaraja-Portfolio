import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://yuv.1he.dev',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [],
    server: {
      allowedHosts: []
    }
  },
  env: {
    schema: {
      PUBLIC_CDN_URL: envField.string({ context: 'client', access: 'public' }),
    },
  },
});
