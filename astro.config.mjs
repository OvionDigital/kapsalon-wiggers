// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Placeholder productiedomein — vervang zodra het definitieve domein bekend is.
  // Wordt gebruikt voor canonical URLs en Open Graph tags.
  site: "https://kapsalonwiggers.nl",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});