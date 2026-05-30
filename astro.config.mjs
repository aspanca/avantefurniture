import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://avantefurniture.com',
  integrations: [react()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
